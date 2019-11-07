export const emailBody = (name, URL, token) => {
  const url = `${URL}/users/reset-password/${token}`;
  return `Hello ${name},<br>
  You are receiving this email because you have requested the forgot password <br>
  Click on the reset link bellow to complete the process. <br><br>
  Kindly note that this link will expire in 24 hours

  ${url}

  <br><br>Thanks,<br>
  ITARJ Team.`;
};
