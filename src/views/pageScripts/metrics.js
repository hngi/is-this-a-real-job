/* eslint-disable no-console */
/* eslint-disable no-undef */

function togglePreloader(state) {
  const preloader = document.querySelector('#cover');
  preloader.style.display = state;
}

if (document.querySelector('.admin-dashboard')) {
  const api = new ItarjApi('/api/v1');
  const noOfUsers = document.querySelector('#no-of-users');
  const noOfComments = document.querySelector('#no-of-comments');
  const noOfPosts = document.querySelector('#no-of-posts');


  const getMetricsNumbers = () => {
    api.Get('metrics', true)
      .then(res => {
        console.log(res);
        noOfUsers.innerHTML = res.data.usersCount;
        noOfComments.innerHTML = res.data.commentsCount;
        noOfPosts.innerHTML = res.data.invitesCount;
      })
      .catch(err => console.log(err));
  };
  getMetricsNumbers();
}
