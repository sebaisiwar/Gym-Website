const form=document.getElementById("form");
if (form){
form.addEventListener("submit",function(e){
    e.preventDefault();

let m=document.getElementById("m").value.trim();/*trim bch kn utilisateurs ktb "" tthsbch value eliminer espace */
let mdp=document.getElementById("mdp").value.trim();
const error =document.getElementById("error");
let savedemail=localStorage.getItem("Email");
let savedmdp=localStorage.getItem("userPassword");

if(mdp==""|| m==""){
    document.getElementById("error").innerHTML="Tous les champs est obligatoires";
    document.getElementById("error").style.color="red";
    return;
}
if(!m.includes("@")){
    document.getElementById("error").innerHTML="email est incorrect!";
    document.getElementById("error").style.color="red";
    return;
}
if(mdp.length < 6){
    document.getElementById("error").innerHTML="le mot de passe doit contenir au moins 6 caracteres";
    document.getElementById("error").style.color="red";
}
if(m === savedemail && mdp === savedmdp){
    document.getElementById("error").style.color="green"
    document.getElementById("error").innerHTML="connexion réussie !";

    /*setTimeout(() => {*/
        window.location.href="home.html";
   /* }, 1000)*/;
} else {
    document.getElementById("error").style.color="red"
    document.getElementById("error").innerHTML="Email et mot de passe incorrect ";
    }

document.getElementById("connecter").addEventListener("click",function(){
        if(!m.includes("@")){
        document.getElementById("error").innerHTML="email invalide :il doit contenir @ ";
        document.getElementById("error").style.color="red";
        }
        else{
            document.getElementById("error").innerHTML="connexion reussie !";
            document.getElementById("error").style.color="green" ;

        }

    localStorage.setItem("Email",m);
    localStorage.setItem("isLoggedIn","true");
    let savedemail=localStorage.getItem("Email");
    console.log("utilisateur connecté :",savedemail);
});
 









});}




const form1=document.getElementById("form1");
if (form1){
form1.addEventListener("submit",function(e){
    e.preventDefault();
let nom=document.getElementById("nom").value.trim();
let email=document.getElementById("email").value.trim();
let password= document.getElementById("mdp1").value.trim();
let confirmepassword= document.getElementById("mdp2").value.trim();
const er =document.getElementById("er");
/*email.addEventListener("blur",verifemail);*/

   /* password.addEventListener("blur",verifpass);*/
    
   
if(nom=="" || email=="" || password==""|| confirmepassword==""){
    document.getElementById("er").innerHTML="veuillez remplir tous les champs!";
    document.getElementById("er").style.color="red";
    return;
}
if(!email.includes("@")){
    document.getElementById("er").innerHTML="email invalide :il doit contenir @ ";
    document.getElementById("er").style.color="red" ; 
    return; 
}
if(password !== confirmepassword){
    document.getElementById("er").innerHTML="le mot de passe est incorrct!";
    document.getElementById("er").style.color="red";
    return;
}
let existingEmail=localStorage.getItem("userEmail");
if(existingEmail === email){
    document.getElementById("er").innerHTML="cet email existe deja , choisis-en un autre";
    document.getElementById("er").style.color="red";
    return;
}
if(password === confirmepassword){
    confirm("enregistrement reussie !");
    localStorage.setItem("Nom",nom);
    localStorage.setItem("Email",email);
    localStorage.setItem("userPassword",password);
    localStorage.setItem("isRegistered","true");

}

/*
const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\w_]).{8,}$/;
if(!regex.test(pasword)){
    document.getElementById("er").innerHTML="le mot de passe est incorrct!";
    document.getElementById("er").style.color="red";
    return;
        
    }
*/
    


    
    });}

