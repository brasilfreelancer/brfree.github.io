function exibirPostagens() {
    var postagens = JSON.parse(localStorage.getItem('postagens')) || [];
  
    var listaHtml = '';
    postagens.forEach(function(postagem) {
      listaHtml += '<div class="card mb-3">';
      listaHtml += '<img src="' + postagem.imagem + '" class="card-img-top" alt="Imagem da Postagem">';
      listaHtml += '<div class="card-body">';
      listaHtml += '<h5 class="card-title">' + postagem.titulo + '</h5>';
      listaHtml += '<p class="card-text">' + postagem.descricao + '</p>';
      listaHtml += '</div>';
      listaHtml += '</div>';
    });
  
    document.getElementById('postagens-lista').innerHTML = listaHtml;
  }
  
  // Chama a função para exibir as postagens ao carregar a página
  exibirPostagens();
  