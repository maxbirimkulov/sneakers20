import { changeUser, getUserFromLocalStorage } from './user.js';

getUserFromLocalStorage();

let formLogin = document.querySelector('.login');
formLogin.addEventListener('submit', (e) => {
  e.preventDefault();

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
    .then((res) => (res.status == '400' ? alert(res) : res.json()))
    .then((res) => {
      console.log(res);
      // changeUser({
      //     ...res.user,
      //     token: res.accessToken
      // })
    })
    .catch((err) => alert(err));
});
