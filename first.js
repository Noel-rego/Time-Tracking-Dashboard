let readData=[];

//getting the html nodes
const timeslist=document.querySelectorAll("#daily,#weekly,#monthly");

//getting data
const loadData=async()=>{
    const response=await fetch("data.json");
    readData=await response.json();
    console.log(readData);

     render("daily");
    
}

//geting to the desired node having the time and changing time accoriding to the week or day or month
const render=(timeframe)=>{
    readData.forEach((activity) => {
        const boxId = activity.title.toLowerCase().replace(" ", "");
        const short=activity.timeframes[timeframe];
        const dailynewhrs=short.current;
        const lastnewhrs=short.previous;
        console.log(boxId, dailynewhrs, lastnewhrs);

        //making sure the id in html is same as the value in the data.json file
        const hoursEl = document.querySelector(`#${boxId}hrs`);
        const lastHoursEl = document.querySelector(`#last${boxId}hrs`); 

        //updating if the variable exists
        if (hoursEl){
            hoursEl.innerText=`${dailynewhrs} hrs`;
        }
        if (lastHoursEl){
            lastHoursEl.innerText=`${lastnewhrs} hrs`;
        }
    });
};

//putting eventlistner on the nodes andchanging the time according to what is clicked
timeslist.forEach((time)=>{
    time.addEventListener("click",()=>{
        render(time.id);
    })
    console.log(time);

});


//finnaly calling the function
loadData();
