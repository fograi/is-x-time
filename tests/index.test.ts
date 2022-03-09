import * as MyTimes from "../src/index";

test("now hour", () => {
  expect(MyTimes.nowHour).toBeGreaterThanOrEqual(0);
  expect(MyTimes.nowHour).toBeLessThanOrEqual(23);
});
test("day time", () => {
  expect(MyTimes.isDayTime()).toEqual(MyTimes.nowHour > 5 && MyTimes.nowHour < 18 ? true : false);
});
test("night time", () => {
  expect(MyTimes.isNightTime()).toEqual(MyTimes.nowHour < 6 || MyTimes.nowHour > 17 ? true : false);
});

test("night", () => {
  expect(MyTimes.isNight()).toEqual(MyTimes.nowHour >= 0 && MyTimes.nowHour < 6 ? true : false);
});

test("morning", () => {
  expect(MyTimes.isMorning()).toEqual(MyTimes.nowHour > 5 && MyTimes.nowHour < 12 ? true : false);
});

test("afternoon", () => {
  expect(MyTimes.isAfternoon()).toEqual(MyTimes.nowHour > 5 && MyTimes.nowHour < 12 ? true : false);
});

test("evening", () => {
  expect(MyTimes.isEvening()).toEqual(MyTimes.nowHour > 17 && MyTimes.nowHour <= 23 ? true : false);
});

test("business hours", () => {
  expect(MyTimes.isBusinessHours()).toEqual(MyTimes.nowHour > 7 && MyTimes.nowHour < 17 ? true : false);
});

test("day shift", () => {
  expect(MyTimes.isDayShift()).toEqual(MyTimes.nowHour > 7 && MyTimes.nowHour < 16 ? true : false);
});

test("evening shift", () => {
  expect(MyTimes.isEveningShift()).toEqual(MyTimes.nowHour > 15 && MyTimes.nowHour <= 23 ? true : false);
});

test("night shift", () => {
  expect(MyTimes.isNightShift()).toEqual(MyTimes.nowHour >= 0 && MyTimes.nowHour < 8 ? true : false);
});
