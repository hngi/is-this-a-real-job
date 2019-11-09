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
      notification.innerHTML = error.data.message;
      notification.className += ' show';
      setTimeout(() => {
        notification.className = 'notification';
      }, 5000);
    });
};
