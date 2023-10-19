new Glide('.glide', {
  type: 'carousel',
  perView: 5, // Quantidade de slides visíveis ao mesmo tempo
  focusAt: 'center',
  breakpoints: {
    768: {
      perView: 2,
    },
    1000: {
      perView: 4,
    }
  }
}).mount();

