
let api ="https://v6.exchangerate-api.com/v6/c92804035ee411fceedbe0a2/pair";
let dropdowns = document.querySelectorAll("select");
let btn = document.querySelector("form button");
let from = document.querySelector(".from select");
let to = document.querySelector(".to select");
let msg = document.querySelector(".msg");



for(let sel of dropdowns){

    for(let code in countryList ){
        let option = document.createElement("option");
        option.innerText=code; 
        option.value=code;
        sel.append(option);
        if(sel.name==="from" && code==="USD"){
            option.selected="selected";
    
    }

   else if(sel.name==="To" && code==="PKR"){
        option.selected="selected";

}
}
sel.addEventListener("change",(evt)=>{
    updateFlag(evt.target);

    
});

    
}

const updateFlag=(element)=>{
    let currCODE=element.value;
    let countryCode= countryList[currCODE];

    let img=element.parentElement.querySelector("img");
    let newsrc=`https://flagsapi.com/${countryCode}/flat/64.png`;

    img.src=newsrc;


}

btn.addEventListener("click",async(evt)=>{
    evt.preventDefault();

    let amount = document.querySelector("form input");
   let amval= amount.value;

   if(amval==="" || amval<1){
    amval=1;
    amount.value="1";
}
       console.log(from.value,to.value);

       const url=`${api}/${from.value}/${to.value}`;
       
       let response = await fetch(url)
       let data =await  response.json();
     
       let rate=data.conversion_rate;

      let finalAmount = amval*rate;
      msg.innerText= `${amval} ${from.value} = ${finalAmount} ${to.value}`;


});

