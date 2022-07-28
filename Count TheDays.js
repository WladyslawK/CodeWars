function countDays(d){
    let date_1 = d.getTime();
    
    let date_2 = new Date()

    if(d.toISOString().split("T").splice(0, 1).join("") == date_2.toISOString().split("T").splice(0, 1).join("")) return "Today is the day!"

    date_2 = date_2.getTime();
    console.log(date_2)

    let difference = date_1 - date_2;
    console.log(difference)
    let TotalDays = Math.round(difference / (1000 * 3600 * 24));

    return TotalDays < 0 ? "The day is in the past!": TotalDays + " days";
  }

console.log(countDays(new Date("December 31, 2511")))