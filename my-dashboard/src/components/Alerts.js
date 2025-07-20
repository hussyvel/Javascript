// src/components/Alerts.js
import React from 'react';

function Alerts() {
  // Exemplo de 3 alertas
  return (
    <div className="alerts-section">
      <h3>Alertas</h3>
      <div className="alert alert-green">Prazo OK</div>
      <div className="alert alert-yellow">Prazo Próximo do Vencimento</div>
      <div className="alert alert-red">Prazo Vencido</div>
    </div>
  );
}

export default Alerts;
