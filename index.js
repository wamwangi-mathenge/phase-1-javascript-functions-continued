// code your solution here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(parameter=0) {
    return function wrapAdjective(purpose="special") {
        return `You are ${parameter}${purpose}${parameter}!`
    }
}