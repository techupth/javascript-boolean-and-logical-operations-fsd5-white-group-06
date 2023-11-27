let isOver18 = true;
let hasCriminalBlacklist = true;

let isAllow = isOver18 && !hasCriminalBlacklist;

//Jamese age 18 , has not criminalBlackList
let customerJames;
isOver18 = true;
hasCriminalBlacklist = false;

isAllow = isOver18 && !hasCriminalBlacklist;

console.log(isAllow);
