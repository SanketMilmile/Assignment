function first(){
    const grocery= 20;
    const icecream= 15;

    var amount=document.getElementById("myinput").value;
    if(amount > 0 ){
    if(amount>=(grocery+icecream)){
        var rem= amount-(grocery+icecream);
        alert("Bought grocery and icecream, remaining amount is :"+rem);
    }else if(amount < (grocery+icecream)){
        if(amount >= grocery){
            var rem=amount-grocery;
            alert("bought grocery but not icecream and remaining amount is : " +rem);
        }else{
            if(amount>=icecream){
                alert("you're having amount to buy icecream but grocery is compulsory");
            }else{
            alert("Your amount is insufficient to buy any products");
        }
        }
    }
}else{
    alert("Please enter valid amount");
}
}