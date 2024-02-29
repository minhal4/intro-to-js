function getTotal(assignment1 , assignment2, assignment3){
    var total = assignment1 + assignment2 + assignment3;
    const avg = total / 3;
    return avg;
}

 const assignment1Mark = 60;
 const assignment2Mark = 58;
 const assignment3Mark = 59;
 var myAvg = getTotal(assignment1Mark, assignment2Mark , assignment3Mark);
 console.log("my avg so far",myAvg); 
