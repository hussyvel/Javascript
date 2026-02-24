
"use client";
import { useEffect, useState } from "react";
import { storage } from "@/lib/storage";
import { Crianca, Vacina, Consulta, Exame, Medicamento } from "@/lib/types";
import Link from "next/link";
import { ArrowLeft, Syringe, Calendar, FileText, Pill, Paperclip, Plus } from "lucide-react";
import { calcularIdade, formatDate } from "@/lib/utils";

type Tab = "dados" | "vacinas" | "consultas" | "exames" | "medicamentos" | "anexos";

export default function CriancaProfilePage({ params }: { params: { id: string } }) {
  const [crianca, setCrianca] = useState<Crianca | null>(null);
  const [tab, setTab] = useState<Tab>("dados");

  useEffect(() => {
    const c = storage.getCriancas().find((x) => x.id === params.id);
    setCrianca(c || null);
  }, [params.id]);

  if (!crianca) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-600">Carregando...</p>
      </div>
    );
  }

  const tabs: { key: Tab; label: string; icon: any }[] = [
    { key: "dados", label: "Dados", icon: FileText },
    { key: "vacinas", label: "Vacinas", icon: Syringe },
    { key: "consultas", label: "Consultas", icon: Calendar },
    { key: "exames", label: "Exames", icon: FileText },
    { key: "medicamentos", label: "Medicamentos", icon: Pill },
    { key: "anexos", label: "Anexos", icon: Paperclip },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/app/criancas" className="btn btn-outline">
          <ArrowLeft size={18} />
        </Link>
        <div className="flex items-center gap-4 flex-1">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 to-rose-400 flex items-center justify-center text-white font-bold text-2xl">
            {crianca.nome.charAt(0).toUpperCase()}
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{crianca.nome}</h1>
            <p className="text-gray-600">{calcularIdade(crianca.data_nascimento)}</p>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="border-b border-gray-200 px-6">
          <div className="flex gap-1 overflow-x-auto">
            {tabs.map((t) => {
              const Icon = t.icon;
              return (
                <button
                  key={t.key}
                  onClick={() => setTab(t.key)}
                  className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                    tab === t.key
                      ? "border-pink-500 text-pink-600"
                      : "border-transparent text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <Icon size={16} />
                  {t.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="card-body">
          {tab === "dados" && <DadosTab crianca={crianca} />}
          {tab === "vacinas" && <VacinasTab criancaId={crianca.id} />}
          {tab === "consultas" && <ConsultasTab criancaId={crianca.id} />}
          {tab === "exames" && <ExamesTab criancaId={crianca.id} />}
          {tab === "medicamentos" && <MedicamentosTab criancaId={crianca.id} />}
          {tab === "anexos" && <AnexosTab criancaId={crianca.id} />}
        </div>
      </div>
    </div>
  );
}

function DadosTab({ crianca }: { crianca: Crianca }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <InfoItem label="Data de nascimento" value={formatDate(crianca.data_nascimento)} />
      <InfoItem label="Idade" value={calcularIdade(crianca.data_nascimento)} />
      <InfoItem label="Sexo" value={crianca.sexo === "M" ? "Masculino" : crianca.sexo === "F" ? "Feminino" : "-"} />
      <InfoItem label="CPF" value={crianca.cpf} />
      <InfoItem label="Tipo sanguíneo" value={crianca.tipo_sanguineo} />
      <InfoItem label="Alergias" value={crianca.alergias} highlight />
      <InfoItem label="Condições médicas" value={crianca.condicoes_medicas} />
      <div className="md:col-span-2">
        <InfoItem label="Observações" value={crianca.observacoes} />
      </div>
    </div>
  );
}

function InfoItem({ label, value, highlight }: { label: string; value?: string; highlight?: boolean }) {
  return (
    <div>
      <div className="label">{label}</div>
      <div className={`text-sm ${highlight && value ? "text-amber-700 font-medium" : "text-gray-900"}`}>
        {value || "-"}
      </div>
    </div>
  );
}

function VacinasTab({ criancaId }: { criancaId: string }) {
  const [items, setItems] = useState<Vacina[]>([]);

  useEffect(() => {
    setItems(storage.getVacinas(criancaId));
  }, [criancaId]);

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Link href={`/app/vacinas/new?crianca_id=${criancaId}`} className="btn btn-primary">
          <Plus size={18} />
          Registrar vacina
        </Link>
      </div>
      {items.length === 0 ? (
        <EmptyState message="Nenhuma vacina registrada" />
      ) : (
        <div className="space-y-3">
          {items.map((v) => (
            <div key={v.id} className="border-2 border-gray-200 rounded-xl p-4 hover:border-pink-300 transition-colors">
              <div className="flex items-start justify-between mb-2">
                <div className="font-semibold text-gray-900">{v.nome_vacina}</div>
                <div className="badge badge-green">{formatDate(v.data_aplicacao)}</div>
              </div>
              {v.proxima_dose && (
                <div className="text-sm text-gray-600">Próxima dose: {formatDate(v.proxima_dose)}</div>
              )}
              {v.local_aplicacao && <div className="text-sm text-gray-600">Local: {v.local_aplicacao}</div>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function ConsultasTab({ criancaId }: { criancaId: string }) {
  const [items, setItems] = useState<Consulta[]>([]);

  useEffect(() => {
    setItems(storage.getConsultas(criancaId));
  }, [criancaId]);

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Link href={`/app/consultas/new?crianca_id=${criancaId}`} className="btn btn-primary">
          <Plus size={18} />
          Registrar consulta
        </Link>
      </div>
      {items.length === 0 ? (
        <EmptyState message="Nenhuma consulta registrada" />
      ) : (
        <div className="space-y-3">
          {items.map((c) => (
            <div key={c.id} className="border-2 border-gray-200 rounded-xl p-4 hover:border-blue-300 transition-colors">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="font-semibold text-gray-900">{c.especialidade || "Consulta"}</div>
                  {c.medico && <div className="text-sm text-gray-600">Dr(a). {c.medico}</div>}
                </div>
                <div className="badge badge-blue">{formatDate(c.data_consulta)}</div>
              </div>
              {c.motivo && <div className="text-sm text-gray-600 mt-2">{c.motivo}</div>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function ExamesTab({ criancaId }: { criancaId: string }) {
  const [items, setItems] = useState<Exame[]>([]);

  useEffect(() => {
    setItems(storage.getExames(criancaId));
  }, [criancaId]);

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Link href={`/app/exames/new?crianca_id=${criancaId}`} className="btn btn-primary">
          <Plus size={18} />
          Registrar exame
        </Link>
      </div>
      {items.length === 0 ? (
        <EmptyState message="Nenhum exame registrado" />
      ) : (
        <div className="space-y-3">
          {items.map((e) => (
            <div key={e.id} className="border-2 border-gray-200 rounded-xl p-4 hover:border-purple-300 transition-colors">
              <div className="flex items-start justify-between mb-2">
                <div className="font-semibold text-gray-900">{e.tipo_exame}</div>
                <div className="badge badge-pink">{formatDate(e.data_exame)}</div>
              </div>
              {e.laboratorio && <div className="text-sm text-gray-600">Lab: {e.laboratorio}</div>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function MedicamentosTab({ criancaId }: { criancaId: string }) {
  const [items, setItems] = useState<Medicamento[]>([]);

  useEffect(() => {
    setItems(storage.getMedicamentos(criancaId));
  }, [criancaId]);

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Link href={`/app/medicamentos/new?crianca_id=${criancaId}`} className="btn btn-primary">
          <Plus size={18} />
          Registrar medicamento
        </Link>
      </div>
      {items.length === 0 ? (
        <EmptyState message="Nenhum medicamento registrado" />
      ) : (
        <div className="space-y-3">
          {items.map((m) => (
            <div key={m.id} className="border-2 border-gray-200 rounded-xl p-4 hover:border-green-300 transition-colors">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="font-semibold text-gray-900">{m.nome_medicamento}</div>
                  {m.dosagem && <div className="text-sm text-gray-600">{m.dosagem}</div>}
                </div>
                <div className="badge badge-green">
                  {m.data_fim ? "Concluído" : "Em uso"}
                </div>
              </div>
              <div className="text-sm text-gray-600">
                Início: {formatDate(m.data_inicio)}
                {m.data_fim && ` • Fim: ${formatDate(m.data_fim)}`}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function AnexosTab({ criancaId }: { criancaId: string }) {
  return (
    <div className="text-center py-12">
      <Paperclip className="mx-auto text-gray-300 mb-4" size={48} />
      <p className="text-gray-600 mb-4">Funcionalidade de anexos em desenvolvimento</p>
      <p className="text-sm text-gray-500">Em breve você poderá anexar documentos, fotos e arquivos</p>
    </div>
  );
}

function EmptyState({ message }: { message: string }) {
  return (
    <div className="text-center py-12 text-gray-500">
      <p>{message}</p>
    </div>
  );
}
