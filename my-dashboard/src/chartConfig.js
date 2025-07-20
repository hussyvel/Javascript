import { Chart, LinearScale, CategoryScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

Chart.register(LinearScale, CategoryScale, BarElement, Title, Tooltip, Legend);

const options = {
    plugins: {
      title: {
        display: true,
        text: "Meu Gráfico",
        align: "center", // Centraliza o título dentro do gráfico
      },
    },
  };
  
  export default options;
  