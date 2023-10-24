// Seletor do seu slider
var glide = new Glide('.glide', {
  type: 'carousel',
  perView: 5, // Valor máximo inicial
  focusAt: 'center',
});

// Função para atualizar o perView com base na largura da janela
function updatePerView() {
  if (window.innerWidth <= 565) {
    glide.update({ perView: 1 }); // Valor mínimo em telas menores que 768px
  } else if (window.innerWidth >= 566 && window.innerWidth < 1000) {
    glide.update({ perView: 3 }); // Valor mínimo em telas menores que
  } else if (window.innerWidth >= 1000 && window.innerWidth < 1200) {
    glide.update({ perView: 4 }); // Valor intermediário entre 1000px e 1200px
  } else {
    glide.update({ perView: 5 }); // Valor máximo em telas maiores que 1200px
  }
}

// Atualizar o perView inicial
updatePerView();

// Adicionar um ouvinte de redimensionamento da janela para atualizar o perView
window.addEventListener('resize', updatePerView);

// Montar o Glide
glide.mount();
