// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import BarChart from '../components/BarChart';
import PieChart from '../components/PieChart';
import Alerts from '../components/Alerts';
import ProcessList from '../components/ProcessList';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [processes, setProcesses] = useState([]);
  const [loading, setLoading] = useState(true);

  // Exemplo de consumo de API fictícia
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts') 
      .then(res => res.json())
      .then(data => {
        // Ajustar de acordo com a resposta real da sua API
        setProcesses(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Erro ao buscar processos:', err);
        setLoading(false);
      });
  }, []);

  // Função para lidar com a busca
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filtra os processos com base no searchTerm
  const filteredProcesses = processes.filter((p) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-container">
      <Header />

      <div className="dashboard-content">
        {/* Seção de gráficos (barras e pizza) */}
        <div className="charts-section">
          <BarChart />
          <PieChart />
        </div>

        {/* Texto estatístico (exemplo) */}
        <div className="text-section">
          <h2>Indicadores Gerais</h2>
          <p>
            Aqui podemos exibir textos sobre os processos, 
            taxas de aprovação, etc. conforme o wireframe.
          </p>
        </div>

        {/* Campo de busca */}
        <div className="search-section">
          <label htmlFor="search">Buscar:</label>
          <input
            id="search"
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Digite para filtrar..."
          />
        </div>

        {/* Lista de processos */}
        <ProcessList loading={loading} processes={filteredProcesses} />

        {/* Alertas */}
        <Alerts />
      </div>
    </div>
  );
}

export default Home;
