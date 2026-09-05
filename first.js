let readData=[];

let nowhrs=document.querySelector("#hours");
let lastweekhrs=document.querySelector("#hrs");
console.log(nowhrs);
console.log(lastweekhrs);

const loadData=async()=>{
    const response=await fetch("data.json");
    readData=await response.json();
    console.log(readData);
        
    readData.forEach((activity)=> {
        const boxId = activity.title;
        console.log(boxId);
        console.log(timeframes.daily.current);
     });
    
}

loadData();
// const showing()=>{

// }

// let newvalue=
// change innertext