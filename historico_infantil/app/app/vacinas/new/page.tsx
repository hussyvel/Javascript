
"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { storage } from "@/lib/storage";
import { generateId } from "@/lib/utils";
import { ArrowLeft, Save, Upload } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const schema = z.object({
  crianca_id: z.string(),
  nome_vacina: z.string().min(2, "Nome da vacina é obrigatório"),
  data_aplicacao: z.string().min(10, "Data é obrigatória"),
  proxima_dose: z.string().optional(),
  lote: z.string().optional(),
  local_aplicacao: z.string().optional(),
  profissional: z.string().optional(),
  observacoes: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function NovaVacinaPage() {
  const sp = useSearchParams();
  const router = useRouter();
  const criancaId = sp.get("crianca_id") || "";
  const [comprovante, setComprovante] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { crianca_id: criancaId },
  });

  async function onSubmit(values: FormData) {
    const vacina = {
      id: generateId(),
      ...values,
      comprovante_url: comprovante,
      created_at: new Date().toISOString(),
    };
    storage.saveVacina(vacina as any);
    router.push(`/app/criancas/${values.crianca_id}`);
  }

  function handleFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setComprovante(url);
    }
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <button onClick={() => router.back()} className="btn btn-outline">
          <ArrowLeft size={18} />
        </button>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Registrar vacina</h1>
          <p className="text-gray-600 mt-1">Adicione uma nova vacina ao histórico</p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="card">
        <div className="card-body space-y-6">
          <input type="hidden" {...register("crianca_id")} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="label">Nome da vacina *</label>
              <input className="input" {...register("nome_vacina")} placeholder="Ex: Tríplice viral, BCG, Hepatite B" />
              {errors.nome_vacina && <p className="text-red-600 text-sm mt-1">{errors.nome_vacina.message}</p>}
            </div>

            <div>
              <label className="label">Data de aplicação *</label>
              <input type="date" className="input" {...register("data_aplicacao")} />
              {errors.data_aplicacao && <p className="text-red-600 text-sm mt-1">{errors.data_aplicacao.message}</p>}
            </div>

            <div>
              <label className="label">Próxima dose</label>
              <input type="date" className="input" {...register("proxima_dose")} />
            </div>

            <div>
              <label className="label">Lote</label>
              <input className="input" {...register("lote")} placeholder="Número do lote" />
            </div>

            <div>
              <label className="label">Local de aplicação</label>
              <input className="input" {...register("local_aplicacao")} placeholder="Ex: Posto de saúde, Clínica" />
            </div>

            <div className="md:col-span-2">
              <label className="label">Profissional responsável</label>
              <input className="input" {...register("profissional")} placeholder="Nome do profissional" />
            </div>

            <div className="md:col-span-2">
              <label className="label">Comprovante</label>
              <div className="flex items-center gap-3">
                <label className="btn btn-outline cursor-pointer">
                  <Upload size={18} />
                  Escolher arquivo
                  <input type="file" className="hidden" accept="image/*,application/pdf" onChange={handleFileUpload} />
                </label>
                {comprovante && <span className="text-sm text-green-600">✓ Arquivo anexado</span>}
              </div>
            </div>

            <div className="md:col-span-2">
              <label className="label">Observações</label>
              <textarea className="input" rows={3} {...register("observacoes")} placeholder="Reações, observações adicionais" />
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t">
            <button type="button" onClick={() => router.back()} className="btn btn-outline">
              Cancelar
            </button>
            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              <Save size={18} />
              {isSubmitting ? "Salvando..." : "Salvar"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
