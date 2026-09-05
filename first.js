let readData=[];

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

        const hoursEl = document.querySelector(`#${boxId}hrs`);
        const lastHoursEl = document.querySelector(`#last${boxId}hrs`); 

        if (hoursEl){
            hoursEl.innerText=`${dailynewhrs} hrs`;
        }
        if (lastHoursEl){
            lastHoursEl.innerText=`${lastnewhrs} hrs`;
        }
    });
};


const previousLabel = (timeframe) => {
    if (timeframe === "daily") return "Yesterday";
    if (timeframe === "weekly") return "Last Week";
    return "Last Month";
};


const timeslist=document.querySelectorAll("#daily,#weekly,#monthly");

timeslist.forEach((time)=>{
    time.addEventListener("click",()=>{
        render(time.id);
    })
    console.log(time);

});

loadData();