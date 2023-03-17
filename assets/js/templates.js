// Componetização do header
$('header').html(`
  <a href="../../index.html" class="logo">
    <img src="../img/jquery-horizontal.svg">
  </a>

  <nav id="nav">
    <button aria-label="abrir menu" id="btn-mobile" aria-haspopup="true" aria-controls="menu"
      aria-expanded="false">
      <span id="hamburguer"></span>
    </button>

    <ul id="menu" role="menu">
      <li><a href="../../index.html"> Home </a> </li>
      <li><a href="../view/form.html"> Quizz </a></li>
      <li><a href="../view/score.html"> Score </a></li>
      <li><a href="../view/resources.html"> Recursos </a></li>
    </ul>
  </nav>
`)

// Componetização do footer
$("footer").html(`
  <div class="footer">
    <p>Desenvolvido por Alexandre, João Victor, João Leite, Harisson, Davidson</p>
    <a href="https://github.com/Joao-vls/jquery_quizz" target="_blank">Link do repositório
      <i class="fab fa-github"></i>
    </a>
  </div>
`)
