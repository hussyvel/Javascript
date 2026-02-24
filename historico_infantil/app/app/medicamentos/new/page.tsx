
"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { storage } from "@/lib/storage";
import { generateId } from "@/lib/utils";
import { ArrowLeft, Save } from "lucide-react";

const schema = z.object({
  crianca_id: z.string(),
  nome_medicamento: z.string().min(2, "Nome do medicamento é obrigatório"),
  dosagem: z.string().optional(),
  frequencia: z.string().optional(),
  data_inicio: z.string().min(10, "Data de início é obrigatória"),
  data_fim: z.string().optional(),
  medico_prescritor: z.string().optional(),
  motivo: z.string().optional(),
  observacoes: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function NovoMedicamentoPage() {
  const sp = useSearchParams();
  const router = useRouter();
  const criancaId = sp.get("crianca_id") || "";

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { crianca_id: criancaId },
  });

  async function onSubmit(values: FormData) {
    const medicamento = {
      id: generateId(),
      ...values,
      created_at: new Date().toISOString(),
    };
    storage.saveMedicamento(medicamento as any);
    router.push(`/app/criancas/${values.crianca_id}`);
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <button onClick={() => router.back()} className="btn btn-outline">
          <ArrowLeft size={18} />
        </button>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Registrar medicamento</h1>
          <p className="text-gray-600 mt-1">Adicione um novo medicamento ao histórico</p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="card">
        <div className="card-body space-y-6">
          <input type="hidden" {...register("crianca_id")} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="label">Nome do medicamento *</label>
              <input className="input" {...register("nome_medicamento")} placeholder="Ex: Paracetamol, Amoxicilina" />
              {errors.nome_medicamento && <p className="text-red-600 text-sm mt-1">{errors.nome_medicamento.message}</p>}
            </div>

            <div>
              <label className="label">Dosagem</label>
              <input className="input" {...register("dosagem")} placeholder="Ex: 500mg, 5ml" />
            </div>

            <div>
              <label className="label">Frequência</label>
              <input className="input" {...register("frequencia")} placeholder="Ex: 8/8h, 2x ao dia" />
            </div>

            <div>
              <label className="label">Data de início *</label>
              <input type="date" className="input" {...register("data_inicio")} />
              {errors.data_inicio && <p className="text-red-600 text-sm mt-1">{errors.data_inicio.message}</p>}
            </div>

            <div>
              <label className="label">Data de término</label>
              <input type="date" className="input" {...register("data_fim")} />
            </div>

            <div className="md:col-span-2">
              <label className="label">Médico prescritor</label>
              <input className="input" {...register("medico_prescritor")} placeholder="Nome do médico" />
            </div>

            <div className="md:col-span-2">
              <label className="label">Motivo</label>
              <textarea className="input" rows={2} {...register("motivo")} placeholder="Para que foi prescrito" />
            </div>

            <div className="md:col-span-2">
              <label className="label">Observações</label>
              <textarea className="input" rows={2} {...register("observacoes")} placeholder="Efeitos colaterais, orientações" />
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
