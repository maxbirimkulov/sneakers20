import { changeUser, getUserFromLocalStorage } from './user.js';

getUserFromLocalStorage();

let formRegister = document.querySelector('.register');
formRegister.addEventListener('submit', (e) => {
  e.preventDefault();

  let userData = {
    login: e.target[0].value,
    email: e.target[1].value,
    password: e.target[2].value,
  };

  if (e.target[2].value === e.target[3].value) {
    document.querySelector('confirmPassword-message').style.display = 'none';
    // fetch('http://localhost:8080/register', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(userData),
    // })
    //   .then((res) => res.json())
    //   .then((res) => {
    //     changeUser({
    //       ...res.user,
    //       token: res.accessToken,
    //     });
    //   })
    //   .catch((err) => console.log(err));
  } else {
    document.querySelector('.confirmPassword-message').style.display = 'block';
  }
});
