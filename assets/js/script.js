/** var -->  variavel de escopo global.
 * let --> variavel de escopo local.
 * const --> variavel de escopo global, variavel que não muda seu valor no seu decorrer.
*/

let nome = window.document.getElementById('nome')

/**Case Sensitive = identifica e reconhece em sua palavras reservadas letras maiusculas e minusculas.
 * 
 *  por Tag: getElementByTagName()
 * por Id: getElementById()
 * por Nome: getElementsByName()
 * por Classe: getElementsByClassName()
 * por Seletor: querySelector()
 */

let email = window.document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3) {
       txtNome.innerHTML = 'Nome Inválido'
       txtNome.style.color = 'red'
    }
    else{
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
    }
    else{
        txtEmail.innerHTML = 'E-mail Válido'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')
    if(assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'No maximo 100 caracteres!'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    }
    else{
        txtAssunto.style.display = 'none'
        emailOk = true
    }
}
function enviar(){
    if (nomeok == true && emailOk == true && assuntoOk == true){
        alert ('Formulário enviado com sucesso!')
    }
    else{
        alert('Preencha todo o formulário')
    }
}

function mapaZoom (){
    mapa.style.width = '800px'
    mapa.style.heid = '600px'
}

function mapaNormal(){
    mapa.style.width = '400px'
    mapa.style.heid = '250px'
}