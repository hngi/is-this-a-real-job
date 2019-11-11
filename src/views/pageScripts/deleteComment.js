/* eslint-disable no-undef */
const commentCount = document.querySelector('.commentCounter');
const noComment = document.querySelector('#no-comments');

const deleteComment = function (ev, api, el) {
  ev.preventDefault();
  togglePreloader();

  api.Delete(`comments/${el.dataset.inviteid}/${el.dataset.commentid}`, true)
    .then(res => {
      console.log(res);
      $(el.offsetParent).addClass('fade').delay(800).queue((next) => {
        $(el.offsetParent).remove();
        next();
      });
      commentCount.textContent = Number(commentCount.textContent) - 1;
    })
    .catch(err => {
      console.log(err);
      notification.innerHTML = err.data.message;
      notification.classList.add('show');
      setTimeout(() => {
        notification.classList.remove('show');
      }, 5000);
    });
};
