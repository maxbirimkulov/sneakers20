export let user = {
  login: '',
  email: '',
};

export const getUserFromLocalStorage = () => {
  if (localStorage.getItem('user') !== null) {
    user = JSON.parse(localStorage.getItem('user'));
  } else {
    user = null;
  }
};

export const removeUser = () => {
  localStorage.removeItem('user');
  user = null;
  location.reload();
};

export const changeUser = (data) => {
  user = { ...data };
  localStorage.setItem('user', JSON.stringify(user));
  location.href = '/';
};
