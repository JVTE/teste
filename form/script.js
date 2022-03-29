const form = document.getElementById("form");
const username = documento.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (e) =>{
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;

    if (usernameValue == ""){
        setErrorFor(username, "O nome de usuário é obrigatório.");
    }else{
        setSccess(username);
    }

    if (emailValue == ""){
        setErrorFor(email, "O email é obrigatório.");
    } else if (!checkEmail(emailValue)){
        setErrorFor(email, "Por favor, insira um email válido.");
    } else {
        setSuccessFor(email);
    }

    if (passwordConfirmationValue == ""){
        setErrorFor(passwordConfirmation, "A confirmação de senha é obrigatória.");
    } else if (passwordConfirmationValue !== passwordValue){
        setErrorFor(passwordConfirmation, "As senhas não conferem.");
    } else {
        setSuccessFor(passwordConfirmation);
    }

    const formConstrols = form.querySelectorAll(".form-control");

    const formIsValid = [...formControls].every((formControl) => {
        return formControl.calssName === "form-control success";
    });

    if (formIsValid){
        console.log("O formulário está 100% válido!");
    }
}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    //Adiciona a mensagem de erro
    small.innerText = message;

    //Adiciona a classe de erro
    formControl.calssName = "form-control error";
}

function setSuccessFor(input){
    const formControl = input.parentElement;

    //Adiciona a classe de sucesso
    formControl.calssName = "form--control success";
}

function checkEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      );
}