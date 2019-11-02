if (document.querySelector('.user-avatar')) {
    // Yoooo
    var md5 = function(value) {
        return CryptoJS.MD5(value).toString();
    };
    
    var getAvatarLink = function(email) {
        return `https://www.gravatar.com/${md5(email.trim())}?d=identicon`;
    };
};