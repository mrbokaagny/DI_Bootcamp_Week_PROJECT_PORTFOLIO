let btnClick = document.getElementById('btn-click')
let dataForms = document.forms[0]
let card_msg = document.getElementsByClassName('card_msg')[0]
let spinner_border = document.getElementById('spinner-border')

let username = dataForms.elements[0]
let email = dataForms.elements[1]
let message = dataForms.elements[2]

btnClick.onclick = (event) =>{
    event.preventDefault()
    if(username.value == '' || email.value == '' || message.value == ''){
        card_msg.textContent = 'Veuillez renseigner toutes les informations demandées.'
        card_msg.classList.add('alert-danger','show')
        setTimeout(function(){
            card_msg.classList.remove('show')
            card_msg.classList.remove('alert-danger')
        },1500)
    }else{
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)){
            btnClick.classList.add('remove')
            spinner_border.classList.add('show')
            setTimeout(function(){
                card_msg.textContent = 'Vos informations ont belle et bien été envoyé, nous vous repondons d\'ici peu.'
                card_msg.classList.add('alert-success','show')
                btnClick.classList.remove('remove')
                spinner_border.classList.remove('show')
            },1500)
            setTimeout(function(){
                card_msg.classList.remove('show')
                card_msg.classList.remove('alert-success')
                username.value = ''
                email.value = ''
                message.value = ''
            },2500)
        }else{
            card_msg.textContent = 'Votre addresse mail, n\'est pas valide merci de réessayer .'
            card_msg.classList.add('alert-danger','show')
            setTimeout(function(){
                card_msg.classList.remove('show')
                card_msg.classList.remove('alert-danger')
            },1500)
        }
        
    }
}