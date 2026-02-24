
"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { storage } from "@/lib/storage";
import { generateId } from "@/lib/utils";
import { ArrowLeft, Save, Upload } from "lucide-react";
import { useState } from "react";

const schema = z.object({
  crianca_id: z.string(),
  tipo_exame: z.string().min(2, "Tipo de exame é obrigatório"),
  data_exame: z.string().min(10, "Data é obrigatória"),
  laboratorio: z.string().optional(),
  medico_solicitante: z.string().optional(),
  resultado: z.string().optional(),
  observacoes: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function NovoExamePage() {
  const sp = useSearchParams();
  const router = useRouter();
  const criancaId = sp.get("crianca_id") || "";
  const [arquivo, setArquivo] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { crianca_id: criancaId },
  });

  async function onSubmit(values: FormData) {
    const exame = {
      id: generateId(),
      ...values,
      arquivo_url: arquivo,
      created_at: new Date().toISOString(),
    };
    storage.saveExame(exame as any);
    router.push(`/app/criancas/${values.crianca_id}`);
  }

  function handleFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setArquivo(url);
    }
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <button onClick={() => router.back()} className="btn btn-outline">
          <ArrowLeft size={18} />
        </button>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Registrar exame</h1>
          <p className="text-gray-600 mt-1">Adicione um novo exame ao histórico</p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="card">
        <div className="card-body space-y-6">
          <input type="hidden" {...register("crianca_id")} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="label">Tipo de exame *</label>
              <input className="input" {...register("tipo_exame")} placeholder="Ex: Hemograma, Raio-X, Ultrassom" />
              {errors.tipo_exame && <p className="text-red-600 text-sm mt-1">{errors.tipo_exame.message}</p>}
            </div>

            <div>
              <label className="label">Data do exame *</label>
              <input type="date" className="input" {...register("data_exame")} />
              {errors.data_exame && <p className="text-red-600 text-sm mt-1">{errors.data_exame.message}</p>}
            </div>

            <div>
              <label className="label">Laboratório</label>
              <input className="input" {...register("laboratorio")} placeholder="Nome do laboratório" />
            </div>

            <div className="md:col-span-2">
              <label className="label">Médico solicitante</label>
              <input className="input" {...register("medico_solicitante")} placeholder="Nome do médico" />
            </div>

            <div className="md:col-span-2">
              <label className="label">Resultado</label>
              <textarea className="input" rows={4} {...register("resultado")} placeholder="Resumo do resultado do exame" />
            </div>

            <div className="md:col-span-2">
              <label className="label">Arquivo do resultado</label>
              <div className="flex items-center gap-3">
                <label className="btn btn-outline cursor-pointer">
                  <Upload size={18} />
                  Escolher arquivo
                  <input type="file" className="hidden" accept="image/*,application/pdf" onChange={handleFileUpload} />
                </label>
                {arquivo && <span className="text-sm text-green-600">✓ Arquivo anexado</span>}
              </div>
            </div>

            <div className="md:col-span-2">
              <label className="label">Observações</label>
              <textarea className="input" rows={2} {...register("observacoes")} placeholder="Observações adicionais" />
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
