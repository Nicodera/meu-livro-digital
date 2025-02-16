// Configuração do Turn.js
$('#flipbook').turn({
  width: 800,
  height: 600,
  autoCenter: true
});

// Som de folha virando
const pageFlipSound = new Audio('page-flip.mp3');

$('#flipbook').bind('turning', function(event, page, view) {
  pageFlipSound.play(); // Toca o som ao virar a página
});