import React from 'react';



function App (){
   
    let currDate = new Date(2020, 5, 5, 12);
    currDate = currDate.getHours;
    let greeting  = "";

    const x = {};

    if(currDate>12 && currDate<19){
        greeting = "good afterNoon";
        x.color = "green";
    }else if(currDate>=1 && currDate<=12){
        greeting = "good Morning";
        x.color = "red";
    }else{
        greeting = "good night";
        x.color ="blue";
    }

    return (
        <div>
        <div>
    <h1> Hello sir <span style = {x} > {greeting} </span></h1>
    </div>
    </div>
    );

}

export default App;