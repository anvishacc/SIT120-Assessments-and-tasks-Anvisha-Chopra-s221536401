const now= new Date(Date.now());
//for current time
console.log(now.getDate());

//for current day
console.log(now.getDay());

//for current Year
console.log(now.getFullYear());

//for current Month
console.log(now.getMonth());

//first setting year and then retriving it
now.setFullYear(2022);
console.log(now.getFullYear());

//first setting date and then retriving it
now.setDate(15);
console.log(now.getdate());


let newDate= new Date();
setTimeout(()=>{
    newDate=Date.now();
    console.log(newDate=now);
},1000);

