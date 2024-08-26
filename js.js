let input = document.querySelector("input");
let button = document.querySelector("button");
let message = document.querySelector(".PP");
let img = document.querySelector("img");

input.addEventListener('input' ,function(){
    if (input.value.length> 0){
        message.style.display ="block";
        if (input.value.length >=4){
        let upercase = /[A-Z]/;
        let number = /[0-9]/;
        let chifres =/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;
        if(upercase.test(input.value) && number.test(input.value) && chifres.test(input.value)){
            message.innerText ="password is Fort";
            input.style.borderColor ="green";
            message.style.color ="green";
            input.style.color ="green";
            button.style.display ="block";
            

        }else{
            message.innerText ="The password must contain at least one [A-Z], one number and one special character @....";
            input.style.borderColor ="red";
            message.style.color ="red";
            input.style.color ="red";
            img.style.background="red";
        }
       }else{
        message.innerText ="Password must contain at 12 characters";
        input.style.borderColor ="red";
        message.style.color ="red";
        input.style.color ="red";
        img.style.background="red";
       }
    }else{
        message.style.display ="none";
        input.style.borderColor="white";
        input.style.Color="white";
    }if(input.value.length > 12){
        input.value ="";
        message.innerText = "not exceed 15"
        message.style.color="gold";
        input.style.borderColor ="gold";      

    }
   
});
button.onclick = function(){
    window.location.href ="page1.html";
}