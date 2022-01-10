function stringm()
{
   let email= document.getElementById("email").value;
   let firstname = document.getElementById("firstname").value;
   let lastname = document.getElementById("lastname").value;
   let age = document.getElementById("age").value;

   if( email == ""){
       alert("enter email!!");
   }
   if( firstname == ""){
    alert("enter firstname!!");
    }
    if( lastname == ""){
        alert("enter lastname!!");
    }
    if( age == "" && age <= 0){
     alert("enter valid age!!");
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

    
    document.getElementById("first_name").innerHTML = "Firstname : " + sentenceCase() +" " + sentenceCasel();
    // document.getElementById("last_name").innerHTML = "Lastname : " + sentenceCasel();
    document.getElementById("age_value").innerHTML = "Age : " + ageidentify();
}
