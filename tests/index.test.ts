import * as MyTimes from "../src/index";

beforeEach(() => {
  expect(new Date(Date.now()).getFullYear()).toBeGreaterThanOrEqual(2022);
  jest.useFakeTimers();
});

afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
  expect(new Date(Date.now()).getFullYear()).toBeGreaterThanOrEqual(2022);
});

test("now hour", () => {
  jest.setSystemTime(new Date("2001-01-01T01:01:01"));
  expect(MyTimes.nowHour()).toEqual(1);
  jest.setSystemTime(new Date("2011-11-11T11:11:11"));
  expect(MyTimes.nowHour()).toEqual(11);
  jest.setSystemTime(new Date("2012-12-12T12:12:12"));
  expect(MyTimes.nowHour()).toEqual(12);
  jest.setSystemTime(new Date("2022-02-22T22:22:22"));
  expect(MyTimes.nowHour()).toEqual(22);
});

test("now hour in", () => {
  // expect(MyTimes.nowHourIn("Europe/Dublin")).toEqual(1);
  // expect(MyTimes.nowHourIn("Europe/London")).toEqual(1);
  // expect(MyTimes.nowHourIn("Europe/Berlin")).toEqual(2);
  // expect(MyTimes.nowHourIn("Europe/Paris")).toEqual(2);
  // expect(MyTimes.nowHourIn("Europe/Rome")).toEqual(2);
  // expect(MyTimes.nowHourIn("Europe/Stockholm")).toEqual(2);
  // expect(MyTimes.nowHourIn("Africa/Cairo")).toEqual(3);
  // expect(MyTimes.nowHourIn("Asia/Riyadh")).toEqual(4);
  // expect(MyTimes.nowHourIn("Asia/Kolkata")).toEqual(7);
  // expect(MyTimes.nowHourIn("Asia/Jakarta")).toEqual(8);
  // expect(MyTimes.nowHourIn("Asia/Hong_Kong")).toEqual(9);
  // expect(MyTimes.nowHourIn("Asia/Shanghai")).toEqual(9);
  // expect(MyTimes.nowHourIn("Asia/Singapore")).toEqual(9);
  // expect(MyTimes.nowHourIn("Asia/Seoul")).toEqual(10);
  // expect(MyTimes.nowHourIn("Asia/Tokyo")).toEqual(10);
  // expect(MyTimes.nowHourIn("Australia/Sydney")).toEqual(12);
  // expect(MyTimes.nowHourIn("America/Los_Angeles")).toEqual(18);
  // expect(MyTimes.nowHourIn("America/New_York")).toEqual(21);
  // expect(MyTimes.nowHourIn("America/Toronto")).toEqual(21);
  // expect(MyTimes.nowHourIn("America/Sao_Paulo")).toEqual(22);
});

test("day time", () => {
  jest.setSystemTime(new Date("2001-01-01T01:01:01"));
  expect(MyTimes.isDayTime()).toEqual(false);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date("2011-11-11T11:11:11"));
  expect(MyTimes.isDayTime()).toEqual(true);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date("2012-12-12T12:12:12"));
  expect(MyTimes.isDayTime()).toEqual(true);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date("2022-02-22T22:22:22"));
  expect(MyTimes.isDayTime()).toEqual(false);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
});

test("night time", () => {
  jest.setSystemTime(new Date("2001-01-01T01:01:01"));
  expect(MyTimes.isNightTime()).toEqual(true);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date("2011-11-11T11:11:11"));
  expect(MyTimes.isNightTime()).toEqual(false);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date("2012-12-12T12:12:12"));
  expect(MyTimes.isNightTime()).toEqual(false);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date("2022-02-22T22:22:22"));
  expect(MyTimes.isNightTime()).toEqual(true);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
});

test("night", () => {
  jest.setSystemTime(new Date("2001-01-01T01:01:01"));
  expect(MyTimes.isNight()).toEqual(true);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2011-11-11T11:11:11"));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2012-12-12T12:12:12"));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2022-02-22T22:22:22"));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
});

test("morning", () => {
  jest.setSystemTime(new Date("2001-01-01T01:01:01"));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2011-11-11T11:11:11"));
  expect(MyTimes.isMorning()).toEqual(true);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2012-12-12T12:12:12"));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2022-02-22T22:22:22"));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
});

test("afternoon", () => {
  jest.setSystemTime(new Date("2001-01-01T01:01:01"));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2011-11-11T11:11:11"));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2012-12-12T12:12:12"));
  expect(MyTimes.isAfternoon()).toEqual(true);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date("2022-02-22T22:22:22"));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
});

test("evening", () => {
  jest.setSystemTime(new Date("2001-01-01T01:01:01"));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date("2011-11-11T11:11:11"));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date("2012-12-12T12:12:12"));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date("2022-02-22T22:22:22"));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
});

test("business hours", () => {
  jest.setSystemTime(new Date("2001-01-01T01:01:01"));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date("2011-11-11T11:11:11"));
  expect(MyTimes.isBusinessHours()).toEqual(true);
  jest.setSystemTime(new Date("2012-12-12T12:12:12"));
  expect(MyTimes.isBusinessHours()).toEqual(true);
  jest.setSystemTime(new Date("2022-02-22T22:22:22"));
  expect(MyTimes.isBusinessHours()).toEqual(false);
});

test("day shift", () => {
  jest.setSystemTime(new Date("2001-01-01T01:01:01"));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date("2011-11-11T11:11:11"));
  expect(MyTimes.isDayShift()).toEqual(true);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date("2012-12-12T12:12:12"));
  expect(MyTimes.isDayShift()).toEqual(true);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date("2022-02-22T22:22:22"));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
});

test("evening shift", () => {
  jest.setSystemTime(new Date("2001-01-01T01:01:01"));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date("2011-11-11T11:11:11"));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date("2012-12-12T12:12:12"));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date("2022-02-22T22:22:22"));
  expect(MyTimes.isEveningShift()).toEqual(true);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
});

test("night shift", () => {
  jest.setSystemTime(new Date("2001-01-01T01:01:01"));
  expect(MyTimes.isNightShift()).toEqual(true);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date("2011-11-11T11:11:11"));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date("2012-12-12T12:12:12"));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date("2022-02-22T22:22:22"));
  expect(MyTimes.isEveningShift()).toEqual(true);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
});
