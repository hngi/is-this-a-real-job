/* eslint-disable no-undef */
if (document.querySelector('.user-avatar')) {
  // Yoooo
  const md5 = function (value) {
    return CryptoJS.MD5(value).toString();
  };

  const getAvatarLink = function (email) {
    return `https://www.gravatar.com/${md5(email.trim())}?d=identicon`;
  };
}
