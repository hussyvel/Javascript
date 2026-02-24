
"use client";
import { FileText, Download } from "lucide-react";

export default function RelatoriosPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Relatórios</h1>
        <p className="text-gray-600 mt-1">Exporte o histórico completo em PDF</p>
      </div>

      <div className="card">
        <div className="card-body text-center py-16">
          <FileText className="mx-auto text-gray-300 mb-4" size={64} />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Exportação de relatórios</h3>
          <p className="text-gray-600 max-w-md mx-auto mb-6">
            Em breve você poderá exportar o histórico completo de cada filho em PDF para compartilhar com médicos e escolas.
          </p>
          <button className="btn btn-primary" disabled>
            <Download size={18} />
            Exportar PDF (em breve)
          </button>
        </div>
      </div>
    </div>
  );
}
