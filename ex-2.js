// Exercise #2: Promotion Conditions
// //ผู้ซื้อจะได้รับโปรโมชั่นถ้ากรณีข้อใดข้อหนึ่งต่อไปนี้เป็นจริง (ไม่จำเป็นต้องเป็นจริงทั้งสองข้อ)

// กรณีที่ 1: ผู้ซื้อมียอดสั่งซื้อสินค้าจากเดือนที่แล้วมากกว่า 4000 บาท และวันที่ซื้อสินค้าเป็นวันจันทร์ถึงวันศุกร์ และไม่เคยซื้อสินค้าจากหมวดหมู่ IT มาก่อน และไม่เคยเข้าร่วมกิจกรรมมหกรรมลดราคามาก่อน
// กรณีที่ 2 : ผู้ซื้อเป็น Member ในระดับ Platinum"
// Start coding here
let lastMonthPaidMoreThan4000 = true;
let isWeekday = true;
let hasBoughtProductFromITCategory = true;
let hasAttendedDiscountEvent = true;
let isPlatinum = true;

let hasPromotion =
  (lastMonthPaidMoreThan4000 &&
    isWeekday &&
    !hasBoughtProductFromITCategory &&
    !hasAttendedDiscountEvent) ||
  isPlatinum;

console.log(hasPromotion);

// John / 4001,friday,never buy IT category,joined to DiscountEvent twice,Gold member ||isPlatinum
let customerJohn;
lastMonthPaidMoreThan4000 = true;
isWeekday = true;
hasBoughtProductFromITCategory = false;
hasAttendedDiscountEvent = true;
isPlatinum = false;
hasPromotion =
  (lastMonthPaidMoreThan4000 &&
    isWeekday &&
    !hasBoughtProductFromITCategory &&
    !hasAttendedDiscountEvent) ||
  isPlatinum;

console.log(hasPromotion);
