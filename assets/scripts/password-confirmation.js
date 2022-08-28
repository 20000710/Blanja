const state ={'reset': true}

const validateFormOnSubmit = (form) => {
    // form.action = "login.html";
    return window.history.pushState(state, '', 'login.html')
}