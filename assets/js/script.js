//variaveis de escopo global

const nome = document.querySelector("#nome")
const email = document.querySelector("#email")
const mensagem = document.querySelector("#mensagem")
const cep = document.querySelector("#cep")


let nomeOk= false;
let emailOk = false;
let mensagemOk = false;
let cepOk = false;

function validarNome(){

    let txtNome = document.querySelector("#txtNome")

    if(nome.value.length < 3){
        txtNome.innerHTML = "Nome muito curto"
        txtNome.style.color = "red"
        nomeOk= false;
    }else{
        txtNome.innerHTML = "✔"
        txtNome.style.color = "green"
        nomeOk= true;
    }

}

function validarEmail(){
    let txtEmail = document.querySelector("#txtEmail");

    if (email.value.indexOf("@") == 1 || email.value.indexOf(".") == -1){
        txtEmail.innerHTML = "E-mail inválido";
        txtEmail.style.color = "red";
        emailOk = false;
    }else{
        txtEmail.innerHTML =  "✔";
        txtEmail.style.color = "green";
        emailOk = true;
    }
}

function validarMensagem() {
    let txtMensagem = document.querySelector("#txtMensagem");
  
    if (mensagem.value.length >= 100) {
      txtMensagem.innerHTML = "Mensagem muito grande!";
      txtMensagem.style.color = "red";
      mensagemOk = false;
    } else {
      txtMensagem.innerHTML = "✔";
      txtMensagem.style.color = "green";
      mensagemOk = true;
    }
  }

function validarEmailRegex(){

    let regex = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
    let txtEmail = document.querySelector("#txtEmail")

    if(email.value.match(regex)){
        txtEmail.innerHTML = "✔"
        txtEmail.style.color = "green"
        emailOk = false;
    }else{
        txtEmail.innerHTML = "Email inválido"
        txtEmail.style.color = "red"
        emailOk = true;
       
    }

}

function consultarCep(){

    let txtCep = document.querySelector("#txtCep")

    console.log(cep)
    const url = `https://viacep.com.br/ws/${cep.value}/json/`;
    fetch(url)
    .then((reponse) => reponse.json())
    .then((jsonBody) => {
       document.getElementById("dados").innerHTML = 
       jsonBody.logradouro +
       "\n" +
       jsonBody.bairro +
       "\n" +
       jsonBody.localidade +
       "\n" +
       jsonBody.uf

    })
    .catch((error) => {
        alert("CEP não encontrado.");
    })
 }