function carregarCategorias() {
    var categorias = JSON.parse(localStorage.getItem('categorias')) || [];
    var selectHtml = '<option value="">Selecione a Categoria</option>';
    categorias.forEach(function(categoria) {
      selectHtml += '<option value="' + categoria + '">' + categoria + '</option>';
    });
    document.getElementById('postagem-categoria').innerHTML = selectHtml;
  }
  
  function carregarImagem(fileInput) {
    var file = fileInput.files[0];
    var reader = new FileReader();
  
    reader.onload = function(e) {
      var base64Image = e.target.result;
      var imgElement = document.createElement('img');
      imgElement.src = base64Image;
      imgElement.classList.add('card-img-top');
      imgElement.alt = 'Imagem da Postagem';
  
      // Exibe a imagem na página
      var imageContainer = document.getElementById('postagem-imagem-container');
      imageContainer.innerHTML = '';
      imageContainer.appendChild(imgElement);
    };
  
    reader.readAsDataURL(file);
  }
  
  function criarPostagem() {
    var titulo = document.getElementById('postagem-titulo').value;
    var categoria = document.getElementById('postagem-categoria').value;
    var imagemElement = document.getElementById('postagem-imagem');
    var descricao = document.getElementById('postagem-descricao').value;
  
    var reader = new FileReader();
  
    reader.onload = function(e) {
      var base64Image = e.target.result;
  
      var postagem = {
        titulo: titulo,
        categoria: categoria,
        imagem: base64Image,
        descricao: descricao
      };
  
      var postagens = JSON.parse(localStorage.getItem('postagens')) || [];
      postagens.push(postagem);
      localStorage.setItem('postagens', JSON.stringify(postagens));
      alert('Postagem criada com sucesso!');
      window.location.href = 'index.html';
    };
  
    reader.readAsDataURL(imagemElement.files[0]);
  }
  
  // Chama a função para carregar as categorias ao carregar a página
  carregarCategorias();
  