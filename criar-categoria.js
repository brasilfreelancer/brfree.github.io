function criarCategoria() {
    var nomeCategoria = document.getElementById('categoria-nome').value;
    var categorias = JSON.parse(localStorage.getItem('categorias')) || [];
    categorias.push(nomeCategoria);
    localStorage.setItem('categorias', JSON.stringify(categorias));
    alert('Categoria criada com sucesso!');
    window.location.href = 'index.html';
  }
  