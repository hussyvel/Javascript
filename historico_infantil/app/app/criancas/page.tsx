
"use client";
import { useEffect, useState } from "react";
import { storage } from "@/lib/storage";
import { Crianca } from "@/lib/types";
import Link from "next/link";
import { Plus, Baby } from "lucide-react";
import { calcularIdade } from "@/lib/utils";

export default function CriancasPage() {
  const [criancas, setCriancas] = useState<Crianca[]>([]);

  useEffect(() => {
    setCriancas(storage.getCriancas());
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Meus Filhos</h1>
          <p className="text-gray-600 mt-1">Gerencie o histórico de saúde de cada criança</p>
        </div>
        <Link href="/app/criancas/new" className="btn btn-primary">
          <Plus size={18} />
          Adicionar filho(a)
        </Link>
      </div>

      {criancas.length === 0 ? (
        <div className="card">
          <div className="card-body text-center py-16">
            <Baby className="mx-auto text-gray-300 mb-4" size={64} />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Nenhum filho(a) cadastrado</h3>
            <p className="text-gray-600 mb-6">Comece adicionando o primeiro filho(a) para registrar o histórico médico</p>
            <Link href="/app/criancas/new" className="btn btn-primary">
              <Plus size={18} />
              Adicionar primeiro filho(a)
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {criancas.map((c) => (
            <Link key={c.id} href={`/app/criancas/${c.id}`} className="card hover:shadow-xl transition-shadow">
              <div className="card-body">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 to-rose-400 flex items-center justify-center text-white font-bold text-2xl">
                    {c.nome.charAt(0).toUpperCase()}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-lg text-gray-900 truncate">{c.nome}</h3>
                    <p className="text-sm text-gray-600">{calcularIdade(c.data_nascimento)}</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  {c.tipo_sanguineo && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tipo sanguíneo:</span>
                      <span className="font-medium">{c.tipo_sanguineo}</span>
                    </div>
                  )}
                  {c.alergias && (
                    <div className="badge badge-yellow">⚠️ Alergias registradas</div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
