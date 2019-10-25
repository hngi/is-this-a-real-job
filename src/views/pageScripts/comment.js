/* eslint-disable no-undef */
const api = new ItarjApi('/api/v1');
const commentBtn = document.querySelector('.comment-btn button');
const commentField = document.querySelector('#comment-field');
const commentCount = document.querySelector('#comment-count');
const comments = document.querySelector('#comments');
const postMeta = document.querySelector('.post-meta');

const inviteId = postMeta ? postMeta.id : null; // invite id

const getCommentHTML = (comment) => `<div class="container">
  <p>@${comment.user.username}</p>
  <p>${comment.body}</p> <span>&nbsp;</span>

  <span class="float-right share-icons">
    <a href="#"><i class="fab fa-facebook-f"></i></i></a>
    <a href="https://www.twitter.com/"><i class="fab fa-twitter"></i></a>
    <a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>
    <a href="#"><i class="fab fa-whatsapp"></i></a>
  </span>
</div>`;

if (commentBtn) {
  commentBtn.addEventListener('click', e => {
    e.preventDefault();

    const body = {
      body: commentField.value
    };

    api.Post(`comments/${inviteId}`, JSON.stringify(body), true)
      .then(res => {
        comments.innerHTML = getCommentHTML(res.data) + comments.innerHTML;

        commentCount.textContent = Number(commentCount.textContent) + 1;
      })
      .catch(err => console.error(err.data));
  });
}
