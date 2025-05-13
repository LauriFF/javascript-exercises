const leapYears = function(year) {

    // jos vuosi on jaollinen 4 jatka eteenpäin
    // jos jaollinen 100 älä jatka
    // paitsi jos jaollinen 400 jatka

    if(year % 4 == 0 ){
        if(year % 400 == 0){
            return true;
        } else if(year % 100 == 0){
            return false;
        }
        return true;
    } else return false;
/* > Leap years are years divisible by four (like 1984 and 2004). 
However, years divisible by 100 are not leap years (such as 1800 and 1900) 
unless they are divisible by 400 (like 1600 and 2000, 
which were in fact leap years). (Yes, it's all pretty confusing)
 */};

// Do not edit below this line
module.exports = leapYears;
