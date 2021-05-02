export const validateEmail = (text) => {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (reg.test(text) === true) {
    return true;
  }
  return false;
};

export const validatePassword = (text) => {
  let reg = /^[a-zA-Z0-9]{6,}$/;
  if (reg.test(text) === true) {
    return true;
  }
  return false;
};
