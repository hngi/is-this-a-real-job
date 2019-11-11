/* eslint-disable no-undef */

const notification = document.querySelector('.notification');

function togglePreloader(state) {
  const preloader = document.querySelector('#cover');
  preloader.style.display = state;
}

/**
 * The deleteComment function is defined in a separate file: deleteComment.js
 */

const commentBtn = document.querySelector('.comment-btn button');
let deleteCommentBtns = document.querySelectorAll('.delete-comment');

if (commentBtn) {
  const api = new ItarjApi('/api/v1');
  const commentField = document.querySelector('#comment-field');
  const commentCount = document.querySelector('.commentCounter');
  const comments = document.querySelector('#comments');
  const postMeta = document.querySelector('.post-meta');
  const noComment = document.querySelector('#no-comments');

  const inviteid = postMeta ? postMeta.dataset.inviteid : null; // invite id

  const updateCommentDeleteBtnsList = function () {
    deleteCommentBtns = document.querySelectorAll('.delete-comment');
    deleteCommentBtns.forEach((c) => {
      c.addEventListener('click', (e) => { deleteComment(e, api, c); });
    });
  };

  // new comment elements have been made. Update them :)
  updateCommentDeleteBtnsList();

  const getCommentHTML = (comment) => `
  <div class="card mb-2">

  <div class="card-body">
  ${comment.body}
  </div>
  <div class="card-footer">
  <small>
  ${comment.user.username ? `<a href="/users/${comment.user.username}">@${comment.user.username}</a>`
    : 'guest'}
</small>
    <small class="text-muted">${new Date(comment.createdAt).toLocaleString()}</small>
    <small><button type="button" class="btn btn-link text-danger float-right p-0 delete-comment"
    data-inviteid="${inviteid}"
    data-commentid="${comment.commentId}">Delete</button></small>
  </div>
</div>`;

  commentBtn.addEventListener('click', (e) => {
    e.preventDefault();
    togglePreloader('block');

    const body = { body: commentField.value };

    commentField.value = '';

    api.Post(`comments/${inviteid}`, JSON.stringify(body), true)
      .then(res => {
        comments.innerHTML = getCommentHTML(res.data) + comments.innerHTML;
        if (noComment) noComment.innerHTML = '';
        commentCount.textContent = Number(commentCount.textContent) + 1;
        updateCommentDeleteBtnsList();
        togglePreloader('none');
      })
      .catch(err => {
        console.error(err);
        togglePreloader('none');
        notification.innerHTML = `<strong>${err.data.message}:</strong> ${err.data.payload}`;
        notification.className += ' show';
        setTimeout(() => {
          notification.className = 'notification';
        }, 5000);
      });
  });
}
