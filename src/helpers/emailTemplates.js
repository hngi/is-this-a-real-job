export const emailBody = (name, URL, token) => {
  const url = `${URL}/users/reset-password/${token}`;
  return `Hello ${name},<br>
  You are receiving this because you have requested the forgot password <br>
  Click on the reset link bellow to complete the process. <br><br>

  ${url}

  <br><br>Thanks,<br>
  ITARJ Team.`;
};
