const validateEmail= (userData) =>{
    const errors = {}
if(!/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(userData.email)){
errors.email = 'Verifique email'
}

if(!userData.email){
    errors.email='Ingrese su email'
}

if(userData.email.length > 35){
    errors.email = 'Menos caracteres '

}

if(!/^[A-Za-z]\w{7,14}$/.test(userData.password)){
    errors.password = 'Verifique contraseña'
}
 if(userData.password.length < 6 && userData.password.length > 10){
    errors.password = 'Password entre 6 y 10 caracteres'
 }
 

return errors
}
export default validateEmail;