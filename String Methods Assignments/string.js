function stringm()
{
   let email= document.getElementById("email").value;
   let firstname = document.getElementById("firstname").value;
   let lastname = document.getElementById("lastname").value;
   let age = document.getElementById("age").value;
     var flag =0;
   if( email == ""){
       alert("enter email!!");
       flag =1;
   }
   if( firstname == ""){
       alert("enter firstname!!");
      flag =1;
}
    if( lastname == ""){
        alert("enter lastname!!");
         flag =1;
    }
    if( age == "" && age <= 0){
     alert("enter valid age!!");
     flag =1;
    }

    
    
    function sentenceCase(){
        firstname = firstname.toLowerCase();
        firstname1= firstname.charAt(0).toUpperCase() + firstname.slice(1);
        return firstname1;
    }
    function ageidentify(){
        if(age>=10){
            return "Your age is" + age + ". You are a Genius. "
        }else{
            return "Your age is" + age + ". You are a kid."
        }
    }
    function sentenceCasel(){
        lastname = lastname.toLowerCase();
        lastname1= lastname.charAt(0).toUpperCase() + lastname.slice(1);
        return lastname1;
    }

     if(flag == 0){
        document.getElementById("first_name").innerHTML = "Firstname : " + sentenceCase() ;
        document.getElementById("last_name").innerHTML = "Lastname : " + sentenceCasel();
        document.getElementById("age_value").innerHTML = "Age : " + ageidentify();
        document.getElementById("email_value").innerHTML = "Email : " + email;
    }
    
}
