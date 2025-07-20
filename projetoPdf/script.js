document.getElementById('dadosForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita o envio padrão do formulário
  
    // Obter os valores dos campos
    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const endereco = document.getElementById('endereco').value;
    const cidade = document.getElementById('cidade').value;
    const estado = document.getElementById('estado').value;
    const ano = document.getElementById('ano').value;
  
    // Dados em um objeto
    const dados = {
      nome,
      cpf,
      endereco,
      cidade,
      estado,
      ano
    };
  
    // Chamar a função para gerar o PDF
    generatePDF(dados);
  });
  
  // Função para gerar o PDF usando jsPDF
  function generatePDF(dados) {
    const { jsPDF } = window.jspdf;
  
    const doc = new jsPDF();
  
    doc.setFontSize(16);
    doc.text('Dados do Formulário', 10, 20);
  
    doc.setFontSize(12);
    doc.text(`Nome: ${dados.nome}`, 10, 40);
    doc.text(`CPF: ${dados.cpf}`, 10, 50);
    doc.text(`Endereço: ${dados.endereco}`, 10, 60);
    doc.text(`Cidade: ${dados.cidade}`, 10, 70);
    doc.text(`Estado: ${dados.estado}`, 10, 80);
    doc.text(`Ano: ${dados.ano}`, 10, 90);
  
    doc.save('dados_formulario.pdf');
  }
  