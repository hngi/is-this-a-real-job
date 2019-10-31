/* eslint-disable no-undef */


function togglePreloader(state) {
  const preloader = document.querySelector('#cover');
  preloader.style.display = state;
}

const commentBtn = document.querySelector('.comment-btn button');

if (commentBtn) {
  if (!localStorage.getItem('token')) {
    commentBtn.disabled = true;
  }

  const api = new ItarjApi('/api/v1');
  const commentField = document.querySelector('#comment-field');
  const commentCount = document.querySelector('#comment-count');
  const comments = document.querySelector('#comments');
  const postMeta = document.querySelector('.post-meta');
  const noComment = document.querySelector('#no-comments');

  const inviteId = postMeta ? postMeta.id : null; // invite id

  const getCommentHTML = (comment) => `<div class="container">
  <p>
    ${comment.user.username ? `<a href="/users/${comment.user.username}">@${comment.user.username}</a>`
    : 'guest'}
  </p>
  <p>${comment.body}</p>
  <p>
    <small class="text-muted">${new Date(comment.createdAt).toDateString()}</small>
  </p> <span>&nbsp;</span>
</div>`;

  commentBtn.addEventListener('click', e => {
    e.preventDefault();
    togglePreloader('block');

    const body = {
      body: commentField.value
    };
    const notification = document.querySelector('.notification');

    commentField.value = '';

    api.Post(`comments/${inviteId}`, JSON.stringify(body), true)
      .then(res => {
        comments.innerHTML = getCommentHTML(res.data) + comments.innerHTML;
        noComment.innerHTML = '';

        commentCount.textContent = Number(commentCount.textContent) + 1;
        togglePreloader('none');
      })
      .catch(err => {
        console.log('Error =>', err);
        togglePreloader('none');
        notification.innerHTML = `<strong>${err.data.message}:</strong> ${err.data.payload}`;
        notification.className += ' show';
        setTimeout(() => {
          notification.className = 'notification';
        }, 5000);
        console.error(err.data);
      });
  });
}
