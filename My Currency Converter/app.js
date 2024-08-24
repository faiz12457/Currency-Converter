
let api ="https://v6.exchangerate-api.com/v6/c92804035ee411fceedbe0a2/pair";
let select = document.querySelectorAll("select");
let btn = document.querySelector("form button");
let from = document.querySelector(".from select");
let to = document.querySelector(".to select");
let msg = document.querySelector(".msg");

for(let sel of select){

    for(let code in countryList){
        let option= document.createElement("option");
        option.innerText=code;
        option.value=code;
        sel.append(option);
        if(sel.name==="from" && code==="USD"){
            option.selected="selected";
        }
        else if(sel.name==="to" && code==="PKR"){
            option.selected="selected";
    
    }
       
    }

    sel.addEventListener("change",(evt)=>{
        updateFlag(evt.target);


    })

}

 let updateFlag=(element)=>{
     let code = element.value;
     let flag = countryList[code];
     console.log(flag);
     let img = element.parentElement.querySelector("img");
     let newsrc=`https://flagsapi.com/${flag}/flat/64.png`;
     img.src=newsrc;

     
}




window.addEventListener("load",()=>{

    update();
  
      
   


})
btn.addEventListener("click",async(evt)=>{
    evt.preventDefault();
    update();

})



let update=async()=>{

    let amount = document.querySelector("form input");
    let  amtval=amount.value;
     if(amtval==="" || amtval<1){
         amtval=1;
         amount.value="1"
         
     }
     const url = `${api}/${from.value}/${to.value}`;
     let response = await fetch(url);
     let currency = await response.json();
     let rate = currency.conversion_rate;
     let finalAmount= rate*amtval;
     msg.innerText=`${amtval} ${from.value} = ${finalAmount} ${to.value}`;
   

}
