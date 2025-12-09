document.getElementById("button").onclick = function(){
    let form = document.getElementById("signup")
            form.submit()
}

grecaptcha.ready(() => {
    grecaptcha.execute('6LeGkNoeAAAAAAiA5lwLf9zmj7nAtfI3O5KEaiPG', { action: 'contact' }).then(token => {
      document.querySelector('#recaptchaResponse').value = token
    })
})