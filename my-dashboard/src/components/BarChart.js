// src/components/BarChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';

function BarChart() {
  // Exemplo de dados estáticos. Ajuste conforme sua API.
  const data = {
    labels: ['Setor A', 'Setor B', 'Setor C', 'Setor D'],
    datasets: [
      {
        label: 'Processos',
        data: [12, 19, 3, 5],
        backgroundColor: 'rgba(75,192,192,0.6)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <div style={{ width: '400px', margin: '0 20px' }}>
      <h3>Processos por Setor</h3>
      <Bar data={data} options={options} />
    </div>
  );
}

export default BarChart;
