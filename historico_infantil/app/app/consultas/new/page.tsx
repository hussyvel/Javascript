
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
  data_consulta: z.string().min(10, "Data é obrigatória"),
  especialidade: z.string().optional(),
  medico: z.string().optional(),
  local: z.string().optional(),
  motivo: z.string().optional(),
  diagnostico: z.string().optional(),
  prescricao: z.string().optional(),
  observacoes: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function NovaConsultaPage() {
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
    const consulta = {
      id: generateId(),
      ...values,
      created_at: new Date().toISOString(),
    };
    storage.saveConsulta(consulta as any);
    router.push(`/app/criancas/${values.crianca_id}`);
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <button onClick={() => router.back()} className="btn btn-outline">
          <ArrowLeft size={18} />
        </button>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Registrar consulta</h1>
          <p className="text-gray-600 mt-1">Adicione uma nova consulta ao histórico</p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="card">
        <div className="card-body space-y-6">
          <input type="hidden" {...register("crianca_id")} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="label">Data da consulta *</label>
              <input type="date" className="input" {...register("data_consulta")} />
              {errors.data_consulta && <p className="text-red-600 text-sm mt-1">{errors.data_consulta.message}</p>}
            </div>

            <div>
              <label className="label">Especialidade</label>
              <input className="input" {...register("especialidade")} placeholder="Ex: Pediatria, Cardiologia" />
            </div>

            <div>
              <label className="label">Médico(a)</label>
              <input className="input" {...register("medico")} placeholder="Nome do médico" />
            </div>

            <div>
              <label className="label">Local</label>
              <input className="input" {...register("local")} placeholder="Clínica, hospital" />
            </div>

            <div className="md:col-span-2">
              <label className="label">Motivo da consulta</label>
              <textarea className="input" rows={2} {...register("motivo")} placeholder="Sintomas, check-up de rotina, etc." />
            </div>

            <div className="md:col-span-2">
              <label className="label">Diagnóstico</label>
              <textarea className="input" rows={2} {...register("diagnostico")} placeholder="Diagnóstico do médico" />
            </div>

            <div className="md:col-span-2">
              <label className="label">Prescrição</label>
              <textarea className="input" rows={3} {...register("prescricao")} placeholder="Medicamentos prescritos, dosagem, orientações" />
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
