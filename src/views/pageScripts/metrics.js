

function togglePreloader(state) {
    const preloader = document.querySelector('#cover');
    preloader.style.display = state;
  }
  
  if (document.querySelector('.metrics-section')) {
    const api = new ItarjApi('/api/v1');
    const metrics = [...document.querySelectorAll('.block-btn')];
    const userIds = [...document.querySelectorAll("input[type='hidden']")];
    const notification = document.querySelector('.notification');
  }