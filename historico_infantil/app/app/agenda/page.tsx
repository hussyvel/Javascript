
"use client";
import { Calendar } from "lucide-react";

export default function AgendaPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Agenda</h1>
        <p className="text-gray-600 mt-1">Visualize consultas e lembretes de vacinas</p>
      </div>

      <div className="card">
        <div className="card-body text-center py-16">
          <Calendar className="mx-auto text-gray-300 mb-4" size={64} />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Calendário em desenvolvimento</h3>
          <p className="text-gray-600 max-w-md mx-auto">
            Em breve você poderá visualizar todas as consultas agendadas e lembretes de vacinas em um calendário interativo.
          </p>
        </div>
      </div>
    </div>
  );
}
