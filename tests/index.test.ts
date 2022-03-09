import { nowHour, isDayTime, isNightTime } from "../src/index";

test("now hour", () => {
  expect(nowHour).toBeGreaterThanOrEqual(0);
  expect(nowHour).toBeLessThanOrEqual(23);
});
test("day time", () => {
  expect(isDayTime()).toEqual(nowHour > 5 && nowHour < 18 ? true : false);
});
test("night time", () => {
  expect(isNightTime()).toEqual(nowHour < 6 || nowHour > 17 ? true : false);
});
