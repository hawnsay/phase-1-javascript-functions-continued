function saturdayFun(activity = `roller-skate`, message) {
   return message = `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = `go to the office`, message) {
   return message = `This Monday, I will ${activity}.`
}

function wrapAdjective(flair) {
    return function(description = `special`) {
        return `You are ${flair}${description}${flair}!`;
    }
}