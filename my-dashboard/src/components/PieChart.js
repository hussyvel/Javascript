// src/components/PieChart.js
import React from 'react';
import { Pie } from 'react-chartjs-2';

function PieChart() {
  // Exemplo de dados estáticos. Ajuste conforme sua API.
  const data = {
    labels: ['Aprovados', 'Em Análise', 'Reprovados'],
    datasets: [
      {
        data: [10, 5, 2],
        backgroundColor: ['#36A2EB', '#FFCE56', '#FF6384'],
      },
    ],
  };

  const options = {
    responsive: true,
  };

  return (
    <div style={{ width: '400px', margin: '0 20px' }}>
      <h3>Licenças Homologadas</h3>
      <Pie data={data} options={options} />
    </div>
  );
}

export default PieChart;
