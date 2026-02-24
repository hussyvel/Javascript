
"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { storage } from "@/lib/storage";
import { generateId } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { ArrowLeft, Save } from "lucide-react";
import Link from "next/link";

const schema = z.object({
  nome: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  data_nascimento: z.string().min(10, "Data de nascimento é obrigatória"),
  sexo: z.enum(["M", "F"]).optional(),
  cpf: z.string().optional(),
  tipo_sanguineo: z.string().optional(),
  alergias: z.string().optional(),
  condicoes_medicas: z.string().optional(),
  observacoes: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function NovaCriancaPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function onSubmit(values: FormData) {
    const crianca = {
      id: generateId(),
      user_id: "u1",
      ...values,
      created_at: new Date().toISOString(),
    };
    storage.saveCrianca(crianca as any);
    router.push("/app/criancas");
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/app/criancas" className="btn btn-outline">
          <ArrowLeft size={18} />
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Adicionar filho(a)</h1>
          <p className="text-gray-600 mt-1">Preencha as informações básicas</p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="card">
        <div className="card-body space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="label">Nome completo *</label>
              <input className="input" {...register("nome")} placeholder="Ex: Maria Silva" />
              {errors.nome && <p className="text-red-600 text-sm mt-1">{errors.nome.message}</p>}
            </div>

            <div>
              <label className="label">Data de nascimento *</label>
              <input type="date" className="input" {...register("data_nascimento")} />
              {errors.data_nascimento && <p className="text-red-600 text-sm mt-1">{errors.data_nascimento.message}</p>}
            </div>

            <div>
              <label className="label">Sexo</label>
              <select className="input" {...register("sexo")}>
                <option value="">Selecione</option>
                <option value="F">Feminino</option>
                <option value="M">Masculino</option>
              </select>
            </div>

            <div>
              <label className="label">CPF</label>
              <input className="input" {...register("cpf")} placeholder="000.000.000-00" />
            </div>

            <div>
              <label className="label">Tipo sanguíneo</label>
              <input className="input" {...register("tipo_sanguineo")} placeholder="Ex: O+, A-, AB+" />
            </div>

            <div className="md:col-span-2">
              <label className="label">Alergias</label>
              <input className="input" {...register("alergias")} placeholder="Ex: Amendoim, Lactose, Penicilina" />
            </div>

            <div className="md:col-span-2">
              <label className="label">Condições médicas</label>
              <input className="input" {...register("condicoes_medicas")} placeholder="Ex: Asma, Diabetes" />
            </div>

            <div className="md:col-span-2">
              <label className="label">Observações</label>
              <textarea className="input" rows={3} {...register("observacoes")} placeholder="Informações adicionais relevantes" />
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t">
            <Link href="/app/criancas" className="btn btn-outline">
              Cancelar
            </Link>
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
