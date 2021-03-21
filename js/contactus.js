window.addEventListener('load', function(){

    var formulario = document.querySelector("#formulario");
    
    formulario.addEventListener('submit', function(){

        var validated = true;
        var name = document.querySelector("#name").value;
        var lastname = document.querySelector("#lastname").value;
        var email = document.querySelector("#email").value;
        var phone = document.querySelector("#phone").value;

        if (name.trim() == null || name.trim().length == 0){
            alert('The name is not valid');
            return false;
        }
        if (lastname.trim() == null || lastname.trim().length == 0){
            alert('The Last Name is not valid');
            return false;
        }
        if (email.trim() == null || email.trim().length == 0){
            alert('The Email is not valid');
            return false;
        }
        if (phone.trim() == null || phone.trim().length == 0 || isNaN(phone.trim())){
            alert('The Phone is not valid');
            return false;
        }
        if (validated){
            document.querySelector("#name").innerHTML = "";
            document.querySelector("#lastname").innerHTML = "";
            document.querySelector("#email").innerHTML = "";
            document.querySelector("#phone").innerHTML = "";
            document.querySelector("#message").innerHTML = "";
            alert("The form has been validated successfully");
        }
    });
});
