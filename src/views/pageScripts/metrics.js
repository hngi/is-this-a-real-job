
if (document.querySelector('#no-of-users')) 
 {function togglePreloader(state) {
    const preloader = document.querySelector('#cover');
    preloader.style.display = state;
  }

  const api = new ItarjApi('/api/v1');
  const noOfUsers = document.querySelector('#no-of-users');
  const noOfComments = document.querySelector('#no-of-comments');
  const noOfPosts = document.querySelector('#no-of-posts');
  

  const getMetricsNumbers = () => {
    api.Get(`metrics`)
      .then(res => {
        noOfUsers.innerHTML = res.data.usersCount;
        noOfComments.innerHTML = res.data.commentsCount ;
        noOfPosts.innerHTML = res.data.invitesCount;
        console.log(res.data)
      })
      .catch(err => console.log(err));
  };
getMetricsNumbers();
  }