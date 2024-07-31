function formValidation(){
    setTimeout( () => {
    console.log("Form Validation Called!");
    formValidationCompleted();
    },2000);
}
function formValidationCompleted(){
    console.log("Form Validation Completed!");
}
formValidation(formValidationCompleted)