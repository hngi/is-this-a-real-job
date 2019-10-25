/* eslint-disable no-undef */
const api = new ItarjApi('/api/v1');
const commentBtn = document.querySelector('.comment-btn button');
const commentField = document.querySelector('#comment-field');

commentBtn.addEventListener('click', e => {
  e.preventDefault();

  const body = {
    body: commentField.value,
    userId: localStorage.getItem('userId') || '47bcca82-7fb2-4c49-8937-19e18627b6b7' // defualt for testing
  };
  // ? using dummy data
  api.Post(`comments/${'449b6232-fad8-40cc-a6d7-1dbbd8cd8a34'}`, JSON.stringify(body), true)
    .then(console.log)
    .catch(err => console.error(err.data));
});
