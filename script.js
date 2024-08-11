const drops= document.querySelectorAll(".drop select");

// for(let select of drops){
//     for(curr in countryList){
//         let newopt=document.createElement("option");
//         newopt.innerText= curr;
//         newopt.value= ccurr;
//         select.appendChild(newopt);
//     }
// }
for(curr in countryList){
    console.log(curr, countryList[curr]);
}