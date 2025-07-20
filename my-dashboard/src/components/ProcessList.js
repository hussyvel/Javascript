// src/components/ProcessList.js
import React from 'react';

function ProcessList({ loading, processes }) {
  if (loading) return <p>Carregando processos...</p>;

  if (!processes || processes.length === 0) {
    return <p>Nenhum processo encontrado.</p>;
  }

  return (
    <div className="process-list">
      <h3>Lista de Processos</h3>
      <ul>
        {processes.map((process) => (
          <li key={process.id}>
            <strong>{process.title}</strong>  
            <p>{process.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProcessList;
