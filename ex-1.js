let isOver18 = true; // อายุเกิน 18
let hasCriminalBlacklist = false; //ไม่มีประวัติ

let isAllow = isOver18 && !hasCriminalBlacklist;  //Reassign ค่าของ isAllow
            //อายุเกิน18 และ   !=ไม่  มีประวัติ 
            
console.log(isAllow); //มีสิทธิ์เข้าร่วมงาน      
