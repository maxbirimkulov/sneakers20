import { changeUser, getUserFromLocalStorage } from './user.js';

getUserFromLocalStorage();

let formLogin = document.querySelector('.login');
formLogin.addEventListener('submit', (e) => {
  e.preventDefault();
  let statusCode = null;
  let userData = {
    email: e.target[0].value,
    password: e.target[1].value,
  };

  fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  })
    .then((res) => {
      statusCode = res.status;
      return res.json();
    })
    .then((res) => {
      if (statusCode != '200') {
        document.querySelector('.login-message').style.display = 'block';
        document.querySelector('.login-message').textContent = res;
      }
      if (statusCode == '200') {
        changeUser({
          ...res.user,
          token: res.accessToken,
        });
      }
    })
    .catch((err) => alert(err));
});
