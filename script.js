$(document).ready(function() {
  // Inicializa o flipbook
  $('#flipbook').turn({
    width: 800,
    height: 600,
    autoCenter: true,
    duration: 1000, // Duração da animação de virar a página
  });

  // Som de folha virando
  const pageFlipSound = new Audio('page-flip.mp3');

  // Toca o som ao virar a página
  $('#flipbook').bind('turning', function(event, page, view) {
    pageFlipSound.play();
  });
});
