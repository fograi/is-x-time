import * as MyTimes from "../src/index";

test("now hour", () => {
  expect(MyTimes.nowHour()).toBeGreaterThanOrEqual(0);
  expect(MyTimes.nowHour()).toBeLessThanOrEqual(23);
});
test("day time", () => {
  expect(MyTimes.isDayTime()).toEqual(
    MyTimes.nowHour() > 5 && MyTimes.nowHour() < 18 ? true : false
  );
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
});
test("night time", () => {
  expect(MyTimes.isNightTime()).toEqual(
    MyTimes.nowHour() < 6 || MyTimes.nowHour() > 17 ? true : false
  );
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
});

test("night", () => {
  expect(MyTimes.isNight()).toEqual(
    MyTimes.nowHour() >= 0 && MyTimes.nowHour() < 6 ? true : false
  );
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
});

test("morning", () => {
  expect(MyTimes.isMorning()).toEqual(
    MyTimes.nowHour() > 5 && MyTimes.nowHour() < 12 ? true : false
  );
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
});

test("afternoon", () => {
  expect(MyTimes.isAfternoon()).toEqual(
    MyTimes.nowHour() > 5 && MyTimes.nowHour() < 12 ? true : false
  );
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
});

test("evening", () => {
  expect(MyTimes.isEvening()).toEqual(
    MyTimes.nowHour() > 17 && MyTimes.nowHour() <= 23 ? true : false
  );
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
});

test("business hours", () => {
  expect(MyTimes.isBusinessHours()).toEqual(
    MyTimes.nowHour() > 7 && MyTimes.nowHour() < 17 ? true : false
  );
});

test("day shift", () => {
  expect(MyTimes.isDayShift()).toEqual(
    MyTimes.nowHour() > 7 && MyTimes.nowHour() < 16 ? true : false
  );
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
});

test("evening shift", () => {
  expect(MyTimes.isEveningShift()).toEqual(
    MyTimes.nowHour() > 15 && MyTimes.nowHour() <= 23 ? true : false
  );
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
});

test("night shift", () => {
  expect(MyTimes.isNightShift()).toEqual(
    MyTimes.nowHour() >= 0 && MyTimes.nowHour() < 8 ? true : false
  );
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
});
