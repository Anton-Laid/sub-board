const regexPhone =
  /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
const regexName = /^[a-zA-Zа-яА-Я\sё-]+$/;

export function validatePhone(phone) {
  if (phone !== undefined) {
    if (phone.length === 0) {
      return { invalid: true, message: 'Это поле не должно быть пустым!' };
    } else if (!regexPhone.test(phone)) {
      return { invalid: true, message: 'Неверный формат телефона!' };
    } else if (!regexPhone.test(phone.toLowerCase())) {
      return { invalid: true, message: 'Неверный формат телефона!' };
    } else if (regexPhone.test(phone.toLowerCase() || phone.length === 11)) {
      return { invalid: false, message: '' };
    }
  } else {
    return { invalid: true, message: '' };
  }
}

export function validateName(name) {
  if (name !== undefined) {
    if (name.length === 0) {
      return { invalid: true, message: 'Это поле не должно быть пустым!' };
    } else if (!regexName.test(name.toLowerCase())) {
      return {
        invalid: true,
        message:
          'Имя должно содержать только латиницу, кириллицу, пробел или дефис!',
      };
    } else if (regexName.test(name.toLowerCase())) {
      return { invalid: false, message: '' };
    }
  } else {
    return { invalid: true, message: '' };
  }
}
