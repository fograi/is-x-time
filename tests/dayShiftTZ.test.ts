import { isDayShiftIn, isEveningShiftIn, isNightShiftIn } from "../src/index";
import * as TZ from "./constants/TZ";
import * as DATES from "./constants/DATES";

beforeEach(() => {
  expect(new Date(Date.now()).getFullYear()).toBeGreaterThanOrEqual(2022);
  jest.useFakeTimers();
});

afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
  expect(new Date(Date.now()).getFullYear()).toBeGreaterThanOrEqual(2022);
});

test("day shift in IANATimeZone 1999_12_31_23_59", () => {
  jest.setSystemTime(new Date(DATES.DATE_1999_12_31_23_59));
  expect(isDayShiftIn(TZ.UTC_M11)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M11)).toEqual(
    !isEveningShiftIn(TZ.UTC_M11) && !isNightShiftIn(TZ.UTC_M11)
  );
  expect(isDayShiftIn(TZ.UTC_M10)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M10)).toEqual(
    !isEveningShiftIn(TZ.UTC_M10) && !isNightShiftIn(TZ.UTC_M10)
  );
  expect(isDayShiftIn(TZ.UTC_M930)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M930)).toEqual(
    !isEveningShiftIn(TZ.UTC_M930) && !isNightShiftIn(TZ.UTC_M930)
  );
  expect(isDayShiftIn(TZ.UTC_M9)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M9)).toEqual(
    !isEveningShiftIn(TZ.UTC_M9) && !isNightShiftIn(TZ.UTC_M9)
  );
  expect(isDayShiftIn(TZ.UTC_M8)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M8)).toEqual(
    !isEveningShiftIn(TZ.UTC_M8) && !isNightShiftIn(TZ.UTC_M8)
  );
  expect(isDayShiftIn(TZ.UTC_M7)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M7)).toEqual(
    !isEveningShiftIn(TZ.UTC_M7) && !isNightShiftIn(TZ.UTC_M7)
  );
  expect(isDayShiftIn(TZ.UTC_M6)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M6)).toEqual(
    !isEveningShiftIn(TZ.UTC_M6) && !isNightShiftIn(TZ.UTC_M6)
  );
  expect(isDayShiftIn(TZ.UTC_M5)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M5)).toEqual(
    !isEveningShiftIn(TZ.UTC_M5) && !isNightShiftIn(TZ.UTC_M5)
  );
  expect(isDayShiftIn(TZ.UTC_M4)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M4)).toEqual(
    !isEveningShiftIn(TZ.UTC_M4) && !isNightShiftIn(TZ.UTC_M4)
  );
  expect(isDayShiftIn(TZ.UTC_M330)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M330)).toEqual(
    !isEveningShiftIn(TZ.UTC_M330) && !isNightShiftIn(TZ.UTC_M330)
  );
  expect(isDayShiftIn(TZ.UTC_M3)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M3)).toEqual(
    !isEveningShiftIn(TZ.UTC_M3) && !isNightShiftIn(TZ.UTC_M3)
  );
  expect(isDayShiftIn(TZ.UTC_M2)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M2)).toEqual(
    !isEveningShiftIn(TZ.UTC_M2) && !isNightShiftIn(TZ.UTC_M2)
  );
  expect(isDayShiftIn(TZ.UTC_M1)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M1)).toEqual(
    !isEveningShiftIn(TZ.UTC_M1) && !isNightShiftIn(TZ.UTC_M1)
  );
  expect(isDayShiftIn(TZ.UTC_0)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_0)).toEqual(
    !isEveningShiftIn(TZ.UTC_0) && !isNightShiftIn(TZ.UTC_0)
  );
  expect(isDayShiftIn(TZ.UTC_P1)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P1)).toEqual(
    !isEveningShiftIn(TZ.UTC_P1) && !isNightShiftIn(TZ.UTC_P1)
  );
  expect(isDayShiftIn(TZ.UTC_P2)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P2)).toEqual(
    !isEveningShiftIn(TZ.UTC_P2) && !isNightShiftIn(TZ.UTC_P2)
  );
  expect(isDayShiftIn(TZ.UTC_P3)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P3)).toEqual(
    !isEveningShiftIn(TZ.UTC_P3) && !isNightShiftIn(TZ.UTC_P3)
  );
  expect(isDayShiftIn(TZ.UTC_P330)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P330)).toEqual(
    !isEveningShiftIn(TZ.UTC_P330) && !isNightShiftIn(TZ.UTC_P330)
  );
  expect(isDayShiftIn(TZ.UTC_P4)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P4)).toEqual(
    !isEveningShiftIn(TZ.UTC_P4) && !isNightShiftIn(TZ.UTC_P4)
  );
  expect(isDayShiftIn(TZ.UTC_P430)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P430)).toEqual(
    !isEveningShiftIn(TZ.UTC_P430) && !isNightShiftIn(TZ.UTC_P430)
  );
  expect(isDayShiftIn(TZ.UTC_P5)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P5)).toEqual(
    !isEveningShiftIn(TZ.UTC_P5) && !isNightShiftIn(TZ.UTC_P5)
  );
  expect(isDayShiftIn(TZ.UTC_P530)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P530)).toEqual(
    !isEveningShiftIn(TZ.UTC_P530) && !isNightShiftIn(TZ.UTC_P530)
  );
  expect(isDayShiftIn(TZ.UTC_P545)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P545)).toEqual(
    !isEveningShiftIn(TZ.UTC_P545) && !isNightShiftIn(TZ.UTC_P545)
  );
  expect(isDayShiftIn(TZ.UTC_P6)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P6)).toEqual(
    !isEveningShiftIn(TZ.UTC_P6) && !isNightShiftIn(TZ.UTC_P6)
  );
  expect(isDayShiftIn(TZ.UTC_P630)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P630)).toEqual(
    !isEveningShiftIn(TZ.UTC_P630) && !isNightShiftIn(TZ.UTC_P630)
  );
  expect(isDayShiftIn(TZ.UTC_P7)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P7)).toEqual(
    !isEveningShiftIn(TZ.UTC_P7) && !isNightShiftIn(TZ.UTC_P7)
  );
  expect(isDayShiftIn(TZ.UTC_P8)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P8)).toEqual(
    !isEveningShiftIn(TZ.UTC_P8) && !isNightShiftIn(TZ.UTC_P8)
  );
  expect(isDayShiftIn(TZ.UTC_P9)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P9)).toEqual(
    !isEveningShiftIn(TZ.UTC_P9) && !isNightShiftIn(TZ.UTC_P9)
  );
  expect(isDayShiftIn(TZ.UTC_P930)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P930)).toEqual(
    !isEveningShiftIn(TZ.UTC_P930) && !isNightShiftIn(TZ.UTC_P930)
  );
  expect(isDayShiftIn(TZ.UTC_P10)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P10)).toEqual(
    !isEveningShiftIn(TZ.UTC_P10) && !isNightShiftIn(TZ.UTC_P10)
  );
  expect(isDayShiftIn(TZ.UTC_P1030)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P1030)).toEqual(
    !isEveningShiftIn(TZ.UTC_P1030) && !isNightShiftIn(TZ.UTC_P1030)
  );
  expect(isDayShiftIn(TZ.UTC_P12)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P12)).toEqual(
    !isEveningShiftIn(TZ.UTC_P12) && !isNightShiftIn(TZ.UTC_P12)
  );
  expect(isDayShiftIn(TZ.UTC_P1245)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P1245)).toEqual(
    !isEveningShiftIn(TZ.UTC_P1245) && !isNightShiftIn(TZ.UTC_P1245)
  );
  expect(isDayShiftIn(TZ.UTC_P13)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P13)).toEqual(
    !isEveningShiftIn(TZ.UTC_P13) && !isNightShiftIn(TZ.UTC_P13)
  );
});

test("day shift in IANATimeZone 2000_01_01_00_00", () => {
  jest.setSystemTime(new Date(DATES.DATE_2000_01_01_00_00));
  expect(isDayShiftIn(TZ.UTC_M11)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M11)).toEqual(
    !isEveningShiftIn(TZ.UTC_M11) && !isNightShiftIn(TZ.UTC_M11)
  );
  expect(isDayShiftIn(TZ.UTC_M10)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M10)).toEqual(
    !isEveningShiftIn(TZ.UTC_M10) && !isNightShiftIn(TZ.UTC_M10)
  );
  expect(isDayShiftIn(TZ.UTC_M930)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M930)).toEqual(
    !isEveningShiftIn(TZ.UTC_M930) && !isNightShiftIn(TZ.UTC_M930)
  );
  expect(isDayShiftIn(TZ.UTC_M9)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M9)).toEqual(
    !isEveningShiftIn(TZ.UTC_M9) && !isNightShiftIn(TZ.UTC_M9)
  );
  expect(isDayShiftIn(TZ.UTC_M8)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M8)).toEqual(
    !isEveningShiftIn(TZ.UTC_M8) && !isNightShiftIn(TZ.UTC_M8)
  );
  expect(isDayShiftIn(TZ.UTC_M7)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M7)).toEqual(
    !isEveningShiftIn(TZ.UTC_M7) && !isNightShiftIn(TZ.UTC_M7)
  );
  expect(isDayShiftIn(TZ.UTC_M6)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M6)).toEqual(
    !isEveningShiftIn(TZ.UTC_M6) && !isNightShiftIn(TZ.UTC_M6)
  );
  expect(isDayShiftIn(TZ.UTC_M5)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M5)).toEqual(
    !isEveningShiftIn(TZ.UTC_M5) && !isNightShiftIn(TZ.UTC_M5)
  );
  expect(isDayShiftIn(TZ.UTC_M4)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M4)).toEqual(
    !isEveningShiftIn(TZ.UTC_M4) && !isNightShiftIn(TZ.UTC_M4)
  );
  expect(isDayShiftIn(TZ.UTC_M330)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M330)).toEqual(
    !isEveningShiftIn(TZ.UTC_M330) && !isNightShiftIn(TZ.UTC_M330)
  );
  expect(isDayShiftIn(TZ.UTC_M3)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M3)).toEqual(
    !isEveningShiftIn(TZ.UTC_M3) && !isNightShiftIn(TZ.UTC_M3)
  );
  expect(isDayShiftIn(TZ.UTC_M2)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M2)).toEqual(
    !isEveningShiftIn(TZ.UTC_M2) && !isNightShiftIn(TZ.UTC_M2)
  );
  expect(isDayShiftIn(TZ.UTC_M1)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M1)).toEqual(
    !isEveningShiftIn(TZ.UTC_M1) && !isNightShiftIn(TZ.UTC_M1)
  );
  expect(isDayShiftIn(TZ.UTC_0)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_0)).toEqual(
    !isEveningShiftIn(TZ.UTC_0) && !isNightShiftIn(TZ.UTC_0)
  );
  expect(isDayShiftIn(TZ.UTC_P1)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P1)).toEqual(
    !isEveningShiftIn(TZ.UTC_P1) && !isNightShiftIn(TZ.UTC_P1)
  );
  expect(isDayShiftIn(TZ.UTC_P2)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P2)).toEqual(
    !isEveningShiftIn(TZ.UTC_P2) && !isNightShiftIn(TZ.UTC_P2)
  );
  expect(isDayShiftIn(TZ.UTC_P3)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P3)).toEqual(
    !isEveningShiftIn(TZ.UTC_P3) && !isNightShiftIn(TZ.UTC_P3)
  );
  expect(isDayShiftIn(TZ.UTC_P330)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P330)).toEqual(
    !isEveningShiftIn(TZ.UTC_P330) && !isNightShiftIn(TZ.UTC_P330)
  );
  expect(isDayShiftIn(TZ.UTC_P4)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P4)).toEqual(
    !isEveningShiftIn(TZ.UTC_P4) && !isNightShiftIn(TZ.UTC_P4)
  );
  expect(isDayShiftIn(TZ.UTC_P430)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P430)).toEqual(
    !isEveningShiftIn(TZ.UTC_P430) && !isNightShiftIn(TZ.UTC_P430)
  );
  expect(isDayShiftIn(TZ.UTC_P5)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P5)).toEqual(
    !isEveningShiftIn(TZ.UTC_P5) && !isNightShiftIn(TZ.UTC_P5)
  );
  expect(isDayShiftIn(TZ.UTC_P530)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P530)).toEqual(
    !isEveningShiftIn(TZ.UTC_P530) && !isNightShiftIn(TZ.UTC_P530)
  );
  expect(isDayShiftIn(TZ.UTC_P545)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P545)).toEqual(
    !isEveningShiftIn(TZ.UTC_P545) && !isNightShiftIn(TZ.UTC_P545)
  );
  expect(isDayShiftIn(TZ.UTC_P6)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P6)).toEqual(
    !isEveningShiftIn(TZ.UTC_P6) && !isNightShiftIn(TZ.UTC_P6)
  );
  expect(isDayShiftIn(TZ.UTC_P630)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P630)).toEqual(
    !isEveningShiftIn(TZ.UTC_P630) && !isNightShiftIn(TZ.UTC_P630)
  );
  expect(isDayShiftIn(TZ.UTC_P7)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P7)).toEqual(
    !isEveningShiftIn(TZ.UTC_P7) && !isNightShiftIn(TZ.UTC_P7)
  );
  expect(isDayShiftIn(TZ.UTC_P8)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P8)).toEqual(
    !isEveningShiftIn(TZ.UTC_P8) && !isNightShiftIn(TZ.UTC_P8)
  );
  expect(isDayShiftIn(TZ.UTC_P9)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P9)).toEqual(
    !isEveningShiftIn(TZ.UTC_P9) && !isNightShiftIn(TZ.UTC_P9)
  );
  expect(isDayShiftIn(TZ.UTC_P930)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P930)).toEqual(
    !isEveningShiftIn(TZ.UTC_P930) && !isNightShiftIn(TZ.UTC_P930)
  );
  expect(isDayShiftIn(TZ.UTC_P10)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P10)).toEqual(
    !isEveningShiftIn(TZ.UTC_P10) && !isNightShiftIn(TZ.UTC_P10)
  );
  expect(isDayShiftIn(TZ.UTC_P1030)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P1030)).toEqual(
    !isEveningShiftIn(TZ.UTC_P1030) && !isNightShiftIn(TZ.UTC_P1030)
  );
  expect(isDayShiftIn(TZ.UTC_P12)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P12)).toEqual(
    !isEveningShiftIn(TZ.UTC_P12) && !isNightShiftIn(TZ.UTC_P12)
  );
  expect(isDayShiftIn(TZ.UTC_P1245)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P1245)).toEqual(
    !isEveningShiftIn(TZ.UTC_P1245) && !isNightShiftIn(TZ.UTC_P1245)
  );
  expect(isDayShiftIn(TZ.UTC_P13)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P13)).toEqual(
    !isEveningShiftIn(TZ.UTC_P13) && !isNightShiftIn(TZ.UTC_P13)
  );
});

test("day shift in IANATimeZone 2001_01_01_01_02", () => {
  jest.setSystemTime(new Date(DATES.DATE_2001_01_01_01_02));
  expect(isDayShiftIn(TZ.UTC_M11)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M11)).toEqual(
    !isEveningShiftIn(TZ.UTC_M11) && !isNightShiftIn(TZ.UTC_M11)
  );
  expect(isDayShiftIn(TZ.UTC_M10)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M10)).toEqual(
    !isEveningShiftIn(TZ.UTC_M10) && !isNightShiftIn(TZ.UTC_M10)
  );
  expect(isDayShiftIn(TZ.UTC_M930)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M930)).toEqual(
    !isEveningShiftIn(TZ.UTC_M930) && !isNightShiftIn(TZ.UTC_M930)
  );
  expect(isDayShiftIn(TZ.UTC_M9)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M9)).toEqual(
    !isEveningShiftIn(TZ.UTC_M9) && !isNightShiftIn(TZ.UTC_M9)
  );
  expect(isDayShiftIn(TZ.UTC_M8)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M8)).toEqual(
    !isEveningShiftIn(TZ.UTC_M8) && !isNightShiftIn(TZ.UTC_M8)
  );
  expect(isDayShiftIn(TZ.UTC_M7)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M7)).toEqual(
    !isEveningShiftIn(TZ.UTC_M7) && !isNightShiftIn(TZ.UTC_M7)
  );
  expect(isDayShiftIn(TZ.UTC_M6)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M6)).toEqual(
    !isEveningShiftIn(TZ.UTC_M6) && !isNightShiftIn(TZ.UTC_M6)
  );
  expect(isDayShiftIn(TZ.UTC_M5)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M5)).toEqual(
    !isEveningShiftIn(TZ.UTC_M5) && !isNightShiftIn(TZ.UTC_M5)
  );
  expect(isDayShiftIn(TZ.UTC_M4)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M4)).toEqual(
    !isEveningShiftIn(TZ.UTC_M4) && !isNightShiftIn(TZ.UTC_M4)
  );
  expect(isDayShiftIn(TZ.UTC_M330)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M330)).toEqual(
    !isEveningShiftIn(TZ.UTC_M330) && !isNightShiftIn(TZ.UTC_M330)
  );
  expect(isDayShiftIn(TZ.UTC_M3)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M3)).toEqual(
    !isEveningShiftIn(TZ.UTC_M3) && !isNightShiftIn(TZ.UTC_M3)
  );
  expect(isDayShiftIn(TZ.UTC_M2)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M2)).toEqual(
    !isEveningShiftIn(TZ.UTC_M2) && !isNightShiftIn(TZ.UTC_M2)
  );
  expect(isDayShiftIn(TZ.UTC_M1)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M1)).toEqual(
    !isEveningShiftIn(TZ.UTC_M1) && !isNightShiftIn(TZ.UTC_M1)
  );
  expect(isDayShiftIn(TZ.UTC_0)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_0)).toEqual(
    !isEveningShiftIn(TZ.UTC_0) && !isNightShiftIn(TZ.UTC_0)
  );
  expect(isDayShiftIn(TZ.UTC_P1)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P1)).toEqual(
    !isEveningShiftIn(TZ.UTC_P1) && !isNightShiftIn(TZ.UTC_P1)
  );
  expect(isDayShiftIn(TZ.UTC_P2)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P2)).toEqual(
    !isEveningShiftIn(TZ.UTC_P2) && !isNightShiftIn(TZ.UTC_P2)
  );
  expect(isDayShiftIn(TZ.UTC_P3)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P3)).toEqual(
    !isEveningShiftIn(TZ.UTC_P3) && !isNightShiftIn(TZ.UTC_P3)
  );
  expect(isDayShiftIn(TZ.UTC_P330)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P330)).toEqual(
    !isEveningShiftIn(TZ.UTC_P330) && !isNightShiftIn(TZ.UTC_P330)
  );
  expect(isDayShiftIn(TZ.UTC_P4)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P4)).toEqual(
    !isEveningShiftIn(TZ.UTC_P4) && !isNightShiftIn(TZ.UTC_P4)
  );
  expect(isDayShiftIn(TZ.UTC_P430)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P430)).toEqual(
    !isEveningShiftIn(TZ.UTC_P430) && !isNightShiftIn(TZ.UTC_P430)
  );
  expect(isDayShiftIn(TZ.UTC_P5)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P5)).toEqual(
    !isEveningShiftIn(TZ.UTC_P5) && !isNightShiftIn(TZ.UTC_P5)
  );
  expect(isDayShiftIn(TZ.UTC_P530)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P530)).toEqual(
    !isEveningShiftIn(TZ.UTC_P530) && !isNightShiftIn(TZ.UTC_P530)
  );
  expect(isDayShiftIn(TZ.UTC_P545)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P545)).toEqual(
    !isEveningShiftIn(TZ.UTC_P545) && !isNightShiftIn(TZ.UTC_P545)
  );
  expect(isDayShiftIn(TZ.UTC_P6)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P6)).toEqual(
    !isEveningShiftIn(TZ.UTC_P6) && !isNightShiftIn(TZ.UTC_P6)
  );
  expect(isDayShiftIn(TZ.UTC_P630)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P630)).toEqual(
    !isEveningShiftIn(TZ.UTC_P630) && !isNightShiftIn(TZ.UTC_P630)
  );
  expect(isDayShiftIn(TZ.UTC_P7)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P7)).toEqual(
    !isEveningShiftIn(TZ.UTC_P7) && !isNightShiftIn(TZ.UTC_P7)
  );
  expect(isDayShiftIn(TZ.UTC_P8)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P8)).toEqual(
    !isEveningShiftIn(TZ.UTC_P8) && !isNightShiftIn(TZ.UTC_P8)
  );
  expect(isDayShiftIn(TZ.UTC_P9)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P9)).toEqual(
    !isEveningShiftIn(TZ.UTC_P9) && !isNightShiftIn(TZ.UTC_P9)
  );
  expect(isDayShiftIn(TZ.UTC_P930)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P930)).toEqual(
    !isEveningShiftIn(TZ.UTC_P930) && !isNightShiftIn(TZ.UTC_P930)
  );
  expect(isDayShiftIn(TZ.UTC_P10)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P10)).toEqual(
    !isEveningShiftIn(TZ.UTC_P10) && !isNightShiftIn(TZ.UTC_P10)
  );
  expect(isDayShiftIn(TZ.UTC_P1030)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P1030)).toEqual(
    !isEveningShiftIn(TZ.UTC_P1030) && !isNightShiftIn(TZ.UTC_P1030)
  );
  expect(isDayShiftIn(TZ.UTC_P12)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P12)).toEqual(
    !isEveningShiftIn(TZ.UTC_P12) && !isNightShiftIn(TZ.UTC_P12)
  );
  expect(isDayShiftIn(TZ.UTC_P1245)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P1245)).toEqual(
    !isEveningShiftIn(TZ.UTC_P1245) && !isNightShiftIn(TZ.UTC_P1245)
  );
  expect(isDayShiftIn(TZ.UTC_P13)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P13)).toEqual(
    !isEveningShiftIn(TZ.UTC_P13) && !isNightShiftIn(TZ.UTC_P13)
  );
});

test("day shift in IANATimeZone 2002_02_02_02_04", () => {
  jest.setSystemTime(new Date(DATES.DATE_2002_02_02_02_04));
  expect(isDayShiftIn(TZ.UTC_M11)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M11)).toEqual(
    !isEveningShiftIn(TZ.UTC_M11) && !isNightShiftIn(TZ.UTC_M11)
  );
  expect(isDayShiftIn(TZ.UTC_M10)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M10)).toEqual(
    !isEveningShiftIn(TZ.UTC_M10) && !isNightShiftIn(TZ.UTC_M10)
  );
  expect(isDayShiftIn(TZ.UTC_M930)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M930)).toEqual(
    !isEveningShiftIn(TZ.UTC_M930) && !isNightShiftIn(TZ.UTC_M930)
  );
  expect(isDayShiftIn(TZ.UTC_M9)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M9)).toEqual(
    !isEveningShiftIn(TZ.UTC_M9) && !isNightShiftIn(TZ.UTC_M9)
  );
  expect(isDayShiftIn(TZ.UTC_M8)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M8)).toEqual(
    !isEveningShiftIn(TZ.UTC_M8) && !isNightShiftIn(TZ.UTC_M8)
  );
  expect(isDayShiftIn(TZ.UTC_M7)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M7)).toEqual(
    !isEveningShiftIn(TZ.UTC_M7) && !isNightShiftIn(TZ.UTC_M7)
  );
  expect(isDayShiftIn(TZ.UTC_M6)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M6)).toEqual(
    !isEveningShiftIn(TZ.UTC_M6) && !isNightShiftIn(TZ.UTC_M6)
  );
  expect(isDayShiftIn(TZ.UTC_M5)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M5)).toEqual(
    !isEveningShiftIn(TZ.UTC_M5) && !isNightShiftIn(TZ.UTC_M5)
  );
  expect(isDayShiftIn(TZ.UTC_M4)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M4)).toEqual(
    !isEveningShiftIn(TZ.UTC_M4) && !isNightShiftIn(TZ.UTC_M4)
  );
  expect(isDayShiftIn(TZ.UTC_M330)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M330)).toEqual(
    !isEveningShiftIn(TZ.UTC_M330) && !isNightShiftIn(TZ.UTC_M330)
  );
  expect(isDayShiftIn(TZ.UTC_M3)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M3)).toEqual(
    !isEveningShiftIn(TZ.UTC_M3) && !isNightShiftIn(TZ.UTC_M3)
  );
  expect(isDayShiftIn(TZ.UTC_M2)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M2)).toEqual(
    !isEveningShiftIn(TZ.UTC_M2) && !isNightShiftIn(TZ.UTC_M2)
  );
  expect(isDayShiftIn(TZ.UTC_M1)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M1)).toEqual(
    !isEveningShiftIn(TZ.UTC_M1) && !isNightShiftIn(TZ.UTC_M1)
  );
  expect(isDayShiftIn(TZ.UTC_0)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_0)).toEqual(
    !isEveningShiftIn(TZ.UTC_0) && !isNightShiftIn(TZ.UTC_0)
  );
  expect(isDayShiftIn(TZ.UTC_P1)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P1)).toEqual(
    !isEveningShiftIn(TZ.UTC_P1) && !isNightShiftIn(TZ.UTC_P1)
  );
  expect(isDayShiftIn(TZ.UTC_P2)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P2)).toEqual(
    !isEveningShiftIn(TZ.UTC_P2) && !isNightShiftIn(TZ.UTC_P2)
  );
  expect(isDayShiftIn(TZ.UTC_P3)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P3)).toEqual(
    !isEveningShiftIn(TZ.UTC_P3) && !isNightShiftIn(TZ.UTC_P3)
  );
  expect(isDayShiftIn(TZ.UTC_P330)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P330)).toEqual(
    !isEveningShiftIn(TZ.UTC_P330) && !isNightShiftIn(TZ.UTC_P330)
  );
  expect(isDayShiftIn(TZ.UTC_P4)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P4)).toEqual(
    !isEveningShiftIn(TZ.UTC_P4) && !isNightShiftIn(TZ.UTC_P4)
  );
  expect(isDayShiftIn(TZ.UTC_P430)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P430)).toEqual(
    !isEveningShiftIn(TZ.UTC_P430) && !isNightShiftIn(TZ.UTC_P430)
  );
  expect(isDayShiftIn(TZ.UTC_P5)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P5)).toEqual(
    !isEveningShiftIn(TZ.UTC_P5) && !isNightShiftIn(TZ.UTC_P5)
  );
  expect(isDayShiftIn(TZ.UTC_P530)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P530)).toEqual(
    !isEveningShiftIn(TZ.UTC_P530) && !isNightShiftIn(TZ.UTC_P530)
  );
  expect(isDayShiftIn(TZ.UTC_P545)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P545)).toEqual(
    !isEveningShiftIn(TZ.UTC_P545) && !isNightShiftIn(TZ.UTC_P545)
  );
  expect(isDayShiftIn(TZ.UTC_P6)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P6)).toEqual(
    !isEveningShiftIn(TZ.UTC_P6) && !isNightShiftIn(TZ.UTC_P6)
  );
  expect(isDayShiftIn(TZ.UTC_P630)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P630)).toEqual(
    !isEveningShiftIn(TZ.UTC_P630) && !isNightShiftIn(TZ.UTC_P630)
  );
  expect(isDayShiftIn(TZ.UTC_P7)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P7)).toEqual(
    !isEveningShiftIn(TZ.UTC_P7) && !isNightShiftIn(TZ.UTC_P7)
  );
  expect(isDayShiftIn(TZ.UTC_P8)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P8)).toEqual(
    !isEveningShiftIn(TZ.UTC_P8) && !isNightShiftIn(TZ.UTC_P8)
  );
  expect(isDayShiftIn(TZ.UTC_P9)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P9)).toEqual(
    !isEveningShiftIn(TZ.UTC_P9) && !isNightShiftIn(TZ.UTC_P9)
  );
  expect(isDayShiftIn(TZ.UTC_P930)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P930)).toEqual(
    !isEveningShiftIn(TZ.UTC_P930) && !isNightShiftIn(TZ.UTC_P930)
  );
  expect(isDayShiftIn(TZ.UTC_P10)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P10)).toEqual(
    !isEveningShiftIn(TZ.UTC_P10) && !isNightShiftIn(TZ.UTC_P10)
  );
  expect(isDayShiftIn(TZ.UTC_P1030)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P1030)).toEqual(
    !isEveningShiftIn(TZ.UTC_P1030) && !isNightShiftIn(TZ.UTC_P1030)
  );
  expect(isDayShiftIn(TZ.UTC_P12)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P12)).toEqual(
    !isEveningShiftIn(TZ.UTC_P12) && !isNightShiftIn(TZ.UTC_P12)
  );
  expect(isDayShiftIn(TZ.UTC_P1245)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P1245)).toEqual(
    !isEveningShiftIn(TZ.UTC_P1245) && !isNightShiftIn(TZ.UTC_P1245)
  );
  expect(isDayShiftIn(TZ.UTC_P13)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P13)).toEqual(
    !isEveningShiftIn(TZ.UTC_P13) && !isNightShiftIn(TZ.UTC_P13)
  );
});

test("day shift in IANATimeZone 2003_03_03_03_06", () => {
  jest.setSystemTime(new Date(DATES.DATE_2003_03_03_03_06));
  expect(isDayShiftIn(TZ.UTC_M11)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M11)).toEqual(
    !isEveningShiftIn(TZ.UTC_M11) && !isNightShiftIn(TZ.UTC_M11)
  );
  expect(isDayShiftIn(TZ.UTC_M10)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M10)).toEqual(
    !isEveningShiftIn(TZ.UTC_M10) && !isNightShiftIn(TZ.UTC_M10)
  );
  expect(isDayShiftIn(TZ.UTC_M930)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M930)).toEqual(
    !isEveningShiftIn(TZ.UTC_M930) && !isNightShiftIn(TZ.UTC_M930)
  );
  expect(isDayShiftIn(TZ.UTC_M9)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M9)).toEqual(
    !isEveningShiftIn(TZ.UTC_M9) && !isNightShiftIn(TZ.UTC_M9)
  );
  expect(isDayShiftIn(TZ.UTC_M8)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M8)).toEqual(
    !isEveningShiftIn(TZ.UTC_M8) && !isNightShiftIn(TZ.UTC_M8)
  );
  expect(isDayShiftIn(TZ.UTC_M7)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M7)).toEqual(
    !isEveningShiftIn(TZ.UTC_M7) && !isNightShiftIn(TZ.UTC_M7)
  );
  expect(isDayShiftIn(TZ.UTC_M6)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M6)).toEqual(
    !isEveningShiftIn(TZ.UTC_M6) && !isNightShiftIn(TZ.UTC_M6)
  );
  expect(isDayShiftIn(TZ.UTC_M5)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M5)).toEqual(
    !isEveningShiftIn(TZ.UTC_M5) && !isNightShiftIn(TZ.UTC_M5)
  );
  expect(isDayShiftIn(TZ.UTC_M4)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M4)).toEqual(
    !isEveningShiftIn(TZ.UTC_M4) && !isNightShiftIn(TZ.UTC_M4)
  );
  expect(isDayShiftIn(TZ.UTC_M330)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M330)).toEqual(
    !isEveningShiftIn(TZ.UTC_M330) && !isNightShiftIn(TZ.UTC_M330)
  );
  expect(isDayShiftIn(TZ.UTC_M3)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M3)).toEqual(
    !isEveningShiftIn(TZ.UTC_M3) && !isNightShiftIn(TZ.UTC_M3)
  );
  expect(isDayShiftIn(TZ.UTC_M2)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M2)).toEqual(
    !isEveningShiftIn(TZ.UTC_M2) && !isNightShiftIn(TZ.UTC_M2)
  );
  expect(isDayShiftIn(TZ.UTC_M1)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M1)).toEqual(
    !isEveningShiftIn(TZ.UTC_M1) && !isNightShiftIn(TZ.UTC_M1)
  );
  expect(isDayShiftIn(TZ.UTC_0)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_0)).toEqual(
    !isEveningShiftIn(TZ.UTC_0) && !isNightShiftIn(TZ.UTC_0)
  );
  expect(isDayShiftIn(TZ.UTC_P1)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P1)).toEqual(
    !isEveningShiftIn(TZ.UTC_P1) && !isNightShiftIn(TZ.UTC_P1)
  );
  expect(isDayShiftIn(TZ.UTC_P2)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P2)).toEqual(
    !isEveningShiftIn(TZ.UTC_P2) && !isNightShiftIn(TZ.UTC_P2)
  );
  expect(isDayShiftIn(TZ.UTC_P3)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P3)).toEqual(
    !isEveningShiftIn(TZ.UTC_P3) && !isNightShiftIn(TZ.UTC_P3)
  );
  expect(isDayShiftIn(TZ.UTC_P330)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P330)).toEqual(
    !isEveningShiftIn(TZ.UTC_P330) && !isNightShiftIn(TZ.UTC_P330)
  );
  expect(isDayShiftIn(TZ.UTC_P4)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P4)).toEqual(
    !isEveningShiftIn(TZ.UTC_P4) && !isNightShiftIn(TZ.UTC_P4)
  );
  expect(isDayShiftIn(TZ.UTC_P430)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P430)).toEqual(
    !isEveningShiftIn(TZ.UTC_P430) && !isNightShiftIn(TZ.UTC_P430)
  );
  expect(isDayShiftIn(TZ.UTC_P5)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P5)).toEqual(
    !isEveningShiftIn(TZ.UTC_P5) && !isNightShiftIn(TZ.UTC_P5)
  );
  expect(isDayShiftIn(TZ.UTC_P530)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P530)).toEqual(
    !isEveningShiftIn(TZ.UTC_P530) && !isNightShiftIn(TZ.UTC_P530)
  );
  expect(isDayShiftIn(TZ.UTC_P545)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P545)).toEqual(
    !isEveningShiftIn(TZ.UTC_P545) && !isNightShiftIn(TZ.UTC_P545)
  );
  expect(isDayShiftIn(TZ.UTC_P6)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P6)).toEqual(
    !isEveningShiftIn(TZ.UTC_P6) && !isNightShiftIn(TZ.UTC_P6)
  );
  expect(isDayShiftIn(TZ.UTC_P630)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P630)).toEqual(
    !isEveningShiftIn(TZ.UTC_P630) && !isNightShiftIn(TZ.UTC_P630)
  );
  expect(isDayShiftIn(TZ.UTC_P7)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P7)).toEqual(
    !isEveningShiftIn(TZ.UTC_P7) && !isNightShiftIn(TZ.UTC_P7)
  );
  expect(isDayShiftIn(TZ.UTC_P8)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P8)).toEqual(
    !isEveningShiftIn(TZ.UTC_P8) && !isNightShiftIn(TZ.UTC_P8)
  );
  expect(isDayShiftIn(TZ.UTC_P9)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P9)).toEqual(
    !isEveningShiftIn(TZ.UTC_P9) && !isNightShiftIn(TZ.UTC_P9)
  );
  expect(isDayShiftIn(TZ.UTC_P930)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P930)).toEqual(
    !isEveningShiftIn(TZ.UTC_P930) && !isNightShiftIn(TZ.UTC_P930)
  );
  expect(isDayShiftIn(TZ.UTC_P10)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P10)).toEqual(
    !isEveningShiftIn(TZ.UTC_P10) && !isNightShiftIn(TZ.UTC_P10)
  );
  expect(isDayShiftIn(TZ.UTC_P1030)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P1030)).toEqual(
    !isEveningShiftIn(TZ.UTC_P1030) && !isNightShiftIn(TZ.UTC_P1030)
  );
  expect(isDayShiftIn(TZ.UTC_P12)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P12)).toEqual(
    !isEveningShiftIn(TZ.UTC_P12) && !isNightShiftIn(TZ.UTC_P12)
  );
  expect(isDayShiftIn(TZ.UTC_P1245)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P1245)).toEqual(
    !isEveningShiftIn(TZ.UTC_P1245) && !isNightShiftIn(TZ.UTC_P1245)
  );
  expect(isDayShiftIn(TZ.UTC_P13)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P13)).toEqual(
    !isEveningShiftIn(TZ.UTC_P13) && !isNightShiftIn(TZ.UTC_P13)
  );
});

test("day shift in IANATimeZone 2004_04_04_04_08", () => {
  jest.setSystemTime(new Date(DATES.DATE_2004_04_04_04_08));
  expect(isDayShiftIn(TZ.UTC_M11)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M11)).toEqual(
    !isEveningShiftIn(TZ.UTC_M11) && !isNightShiftIn(TZ.UTC_M11)
  );
  expect(isDayShiftIn(TZ.UTC_M10)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M10)).toEqual(
    !isEveningShiftIn(TZ.UTC_M10) && !isNightShiftIn(TZ.UTC_M10)
  );
  expect(isDayShiftIn(TZ.UTC_M930)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M930)).toEqual(
    !isEveningShiftIn(TZ.UTC_M930) && !isNightShiftIn(TZ.UTC_M930)
  );
  expect(isDayShiftIn(TZ.UTC_M9)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M9)).toEqual(
    !isEveningShiftIn(TZ.UTC_M9) && !isNightShiftIn(TZ.UTC_M9)
  );
  expect(isDayShiftIn(TZ.UTC_M8)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M8)).toEqual(
    !isEveningShiftIn(TZ.UTC_M8) && !isNightShiftIn(TZ.UTC_M8)
  );
  expect(isDayShiftIn(TZ.UTC_M7)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M7)).toEqual(
    !isEveningShiftIn(TZ.UTC_M7) && !isNightShiftIn(TZ.UTC_M7)
  );
  expect(isDayShiftIn(TZ.UTC_M6)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M6)).toEqual(
    !isEveningShiftIn(TZ.UTC_M6) && !isNightShiftIn(TZ.UTC_M6)
  );
  expect(isDayShiftIn(TZ.UTC_M5)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M5)).toEqual(
    !isEveningShiftIn(TZ.UTC_M5) && !isNightShiftIn(TZ.UTC_M5)
  );
  expect(isDayShiftIn(TZ.UTC_M4)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M4)).toEqual(
    !isEveningShiftIn(TZ.UTC_M4) && !isNightShiftIn(TZ.UTC_M4)
  );
  expect(isDayShiftIn(TZ.UTC_M330)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M330)).toEqual(
    !isEveningShiftIn(TZ.UTC_M330) && !isNightShiftIn(TZ.UTC_M330)
  );
  expect(isDayShiftIn(TZ.UTC_M3)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M3)).toEqual(
    !isEveningShiftIn(TZ.UTC_M3) && !isNightShiftIn(TZ.UTC_M3)
  );
  expect(isDayShiftIn(TZ.UTC_M2)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M2)).toEqual(
    !isEveningShiftIn(TZ.UTC_M2) && !isNightShiftIn(TZ.UTC_M2)
  );
  expect(isDayShiftIn(TZ.UTC_M1)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M1)).toEqual(
    !isEveningShiftIn(TZ.UTC_M1) && !isNightShiftIn(TZ.UTC_M1)
  );
  expect(isDayShiftIn(TZ.UTC_0)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_0)).toEqual(
    !isEveningShiftIn(TZ.UTC_0) && !isNightShiftIn(TZ.UTC_0)
  );
  expect(isDayShiftIn(TZ.UTC_P1)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P1)).toEqual(
    !isEveningShiftIn(TZ.UTC_P1) && !isNightShiftIn(TZ.UTC_P1)
  );
  expect(isDayShiftIn(TZ.UTC_P2)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P2)).toEqual(
    !isEveningShiftIn(TZ.UTC_P2) && !isNightShiftIn(TZ.UTC_P2)
  );
  expect(isDayShiftIn(TZ.UTC_P3)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P3)).toEqual(
    !isEveningShiftIn(TZ.UTC_P3) && !isNightShiftIn(TZ.UTC_P3)
  );
  expect(isDayShiftIn(TZ.UTC_P330)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P330)).toEqual(
    !isEveningShiftIn(TZ.UTC_P330) && !isNightShiftIn(TZ.UTC_P330)
  );
  expect(isDayShiftIn(TZ.UTC_P4)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P4)).toEqual(
    !isEveningShiftIn(TZ.UTC_P4) && !isNightShiftIn(TZ.UTC_P4)
  );
  expect(isDayShiftIn(TZ.UTC_P430)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P430)).toEqual(
    !isEveningShiftIn(TZ.UTC_P430) && !isNightShiftIn(TZ.UTC_P430)
  );
  expect(isDayShiftIn(TZ.UTC_P5)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P5)).toEqual(
    !isEveningShiftIn(TZ.UTC_P5) && !isNightShiftIn(TZ.UTC_P5)
  );
  expect(isDayShiftIn(TZ.UTC_P530)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P530)).toEqual(
    !isEveningShiftIn(TZ.UTC_P530) && !isNightShiftIn(TZ.UTC_P530)
  );
  expect(isDayShiftIn(TZ.UTC_P545)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P545)).toEqual(
    !isEveningShiftIn(TZ.UTC_P545) && !isNightShiftIn(TZ.UTC_P545)
  );
  expect(isDayShiftIn(TZ.UTC_P6)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P6)).toEqual(
    !isEveningShiftIn(TZ.UTC_P6) && !isNightShiftIn(TZ.UTC_P6)
  );
  expect(isDayShiftIn(TZ.UTC_P630)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P630)).toEqual(
    !isEveningShiftIn(TZ.UTC_P630) && !isNightShiftIn(TZ.UTC_P630)
  );
  expect(isDayShiftIn(TZ.UTC_P7)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P7)).toEqual(
    !isEveningShiftIn(TZ.UTC_P7) && !isNightShiftIn(TZ.UTC_P7)
  );
  expect(isDayShiftIn(TZ.UTC_P8)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P8)).toEqual(
    !isEveningShiftIn(TZ.UTC_P8) && !isNightShiftIn(TZ.UTC_P8)
  );
  expect(isDayShiftIn(TZ.UTC_P9)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P9)).toEqual(
    !isEveningShiftIn(TZ.UTC_P9) && !isNightShiftIn(TZ.UTC_P9)
  );
  expect(isDayShiftIn(TZ.UTC_P930)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P930)).toEqual(
    !isEveningShiftIn(TZ.UTC_P930) && !isNightShiftIn(TZ.UTC_P930)
  );
  expect(isDayShiftIn(TZ.UTC_P10)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P10)).toEqual(
    !isEveningShiftIn(TZ.UTC_P10) && !isNightShiftIn(TZ.UTC_P10)
  );
  expect(isDayShiftIn(TZ.UTC_P1030)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P1030)).toEqual(
    !isEveningShiftIn(TZ.UTC_P1030) && !isNightShiftIn(TZ.UTC_P1030)
  );
  expect(isDayShiftIn(TZ.UTC_P12)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P12)).toEqual(
    !isEveningShiftIn(TZ.UTC_P12) && !isNightShiftIn(TZ.UTC_P12)
  );
  expect(isDayShiftIn(TZ.UTC_P1245)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P1245)).toEqual(
    !isEveningShiftIn(TZ.UTC_P1245) && !isNightShiftIn(TZ.UTC_P1245)
  );
  expect(isDayShiftIn(TZ.UTC_P13)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P13)).toEqual(
    !isEveningShiftIn(TZ.UTC_P13) && !isNightShiftIn(TZ.UTC_P13)
  );
});

test("day shift in IANATimeZone 2005_05_05_05_10", () => {
  jest.setSystemTime(new Date(DATES.DATE_2005_05_05_05_10));
  expect(isDayShiftIn(TZ.UTC_M11)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M11)).toEqual(
    !isEveningShiftIn(TZ.UTC_M11) && !isNightShiftIn(TZ.UTC_M11)
  );
  expect(isDayShiftIn(TZ.UTC_M10)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M10)).toEqual(
    !isEveningShiftIn(TZ.UTC_M10) && !isNightShiftIn(TZ.UTC_M10)
  );
  expect(isDayShiftIn(TZ.UTC_M930)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M930)).toEqual(
    !isEveningShiftIn(TZ.UTC_M930) && !isNightShiftIn(TZ.UTC_M930)
  );
  expect(isDayShiftIn(TZ.UTC_M9)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M9)).toEqual(
    !isEveningShiftIn(TZ.UTC_M9) && !isNightShiftIn(TZ.UTC_M9)
  );
  expect(isDayShiftIn(TZ.UTC_M8)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M8)).toEqual(
    !isEveningShiftIn(TZ.UTC_M8) && !isNightShiftIn(TZ.UTC_M8)
  );
  expect(isDayShiftIn(TZ.UTC_M7)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M7)).toEqual(
    !isEveningShiftIn(TZ.UTC_M7) && !isNightShiftIn(TZ.UTC_M7)
  );
  expect(isDayShiftIn(TZ.UTC_M6)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M6)).toEqual(
    !isEveningShiftIn(TZ.UTC_M6) && !isNightShiftIn(TZ.UTC_M6)
  );
  expect(isDayShiftIn(TZ.UTC_M5)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M5)).toEqual(
    !isEveningShiftIn(TZ.UTC_M5) && !isNightShiftIn(TZ.UTC_M5)
  );
  expect(isDayShiftIn(TZ.UTC_M4)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M4)).toEqual(
    !isEveningShiftIn(TZ.UTC_M4) && !isNightShiftIn(TZ.UTC_M4)
  );
  expect(isDayShiftIn(TZ.UTC_M330)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M330)).toEqual(
    !isEveningShiftIn(TZ.UTC_M330) && !isNightShiftIn(TZ.UTC_M330)
  );
  expect(isDayShiftIn(TZ.UTC_M3)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M3)).toEqual(
    !isEveningShiftIn(TZ.UTC_M3) && !isNightShiftIn(TZ.UTC_M3)
  );
  expect(isDayShiftIn(TZ.UTC_M2)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M2)).toEqual(
    !isEveningShiftIn(TZ.UTC_M2) && !isNightShiftIn(TZ.UTC_M2)
  );
  expect(isDayShiftIn(TZ.UTC_M1)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M1)).toEqual(
    !isEveningShiftIn(TZ.UTC_M1) && !isNightShiftIn(TZ.UTC_M1)
  );
  expect(isDayShiftIn(TZ.UTC_0)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_0)).toEqual(
    !isEveningShiftIn(TZ.UTC_0) && !isNightShiftIn(TZ.UTC_0)
  );
  expect(isDayShiftIn(TZ.UTC_P1)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P1)).toEqual(
    !isEveningShiftIn(TZ.UTC_P1) && !isNightShiftIn(TZ.UTC_P1)
  );
  expect(isDayShiftIn(TZ.UTC_P2)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P2)).toEqual(
    !isEveningShiftIn(TZ.UTC_P2) && !isNightShiftIn(TZ.UTC_P2)
  );
  expect(isDayShiftIn(TZ.UTC_P3)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P3)).toEqual(
    !isEveningShiftIn(TZ.UTC_P3) && !isNightShiftIn(TZ.UTC_P3)
  );
  expect(isDayShiftIn(TZ.UTC_P330)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P330)).toEqual(
    !isEveningShiftIn(TZ.UTC_P330) && !isNightShiftIn(TZ.UTC_P330)
  );
  expect(isDayShiftIn(TZ.UTC_P4)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P4)).toEqual(
    !isEveningShiftIn(TZ.UTC_P4) && !isNightShiftIn(TZ.UTC_P4)
  );
  expect(isDayShiftIn(TZ.UTC_P430)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P430)).toEqual(
    !isEveningShiftIn(TZ.UTC_P430) && !isNightShiftIn(TZ.UTC_P430)
  );
  expect(isDayShiftIn(TZ.UTC_P5)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P5)).toEqual(
    !isEveningShiftIn(TZ.UTC_P5) && !isNightShiftIn(TZ.UTC_P5)
  );
  expect(isDayShiftIn(TZ.UTC_P530)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P530)).toEqual(
    !isEveningShiftIn(TZ.UTC_P530) && !isNightShiftIn(TZ.UTC_P530)
  );
  expect(isDayShiftIn(TZ.UTC_P545)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P545)).toEqual(
    !isEveningShiftIn(TZ.UTC_P545) && !isNightShiftIn(TZ.UTC_P545)
  );
  expect(isDayShiftIn(TZ.UTC_P6)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P6)).toEqual(
    !isEveningShiftIn(TZ.UTC_P6) && !isNightShiftIn(TZ.UTC_P6)
  );
  expect(isDayShiftIn(TZ.UTC_P630)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P630)).toEqual(
    !isEveningShiftIn(TZ.UTC_P630) && !isNightShiftIn(TZ.UTC_P630)
  );
  expect(isDayShiftIn(TZ.UTC_P7)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P7)).toEqual(
    !isEveningShiftIn(TZ.UTC_P7) && !isNightShiftIn(TZ.UTC_P7)
  );
  expect(isDayShiftIn(TZ.UTC_P8)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P8)).toEqual(
    !isEveningShiftIn(TZ.UTC_P8) && !isNightShiftIn(TZ.UTC_P8)
  );
  expect(isDayShiftIn(TZ.UTC_P9)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P9)).toEqual(
    !isEveningShiftIn(TZ.UTC_P9) && !isNightShiftIn(TZ.UTC_P9)
  );
  expect(isDayShiftIn(TZ.UTC_P930)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P930)).toEqual(
    !isEveningShiftIn(TZ.UTC_P930) && !isNightShiftIn(TZ.UTC_P930)
  );
  expect(isDayShiftIn(TZ.UTC_P10)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P10)).toEqual(
    !isEveningShiftIn(TZ.UTC_P10) && !isNightShiftIn(TZ.UTC_P10)
  );
  expect(isDayShiftIn(TZ.UTC_P1030)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P1030)).toEqual(
    !isEveningShiftIn(TZ.UTC_P1030) && !isNightShiftIn(TZ.UTC_P1030)
  );
  expect(isDayShiftIn(TZ.UTC_P12)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P12)).toEqual(
    !isEveningShiftIn(TZ.UTC_P12) && !isNightShiftIn(TZ.UTC_P12)
  );
  expect(isDayShiftIn(TZ.UTC_P1245)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P1245)).toEqual(
    !isEveningShiftIn(TZ.UTC_P1245) && !isNightShiftIn(TZ.UTC_P1245)
  );
  expect(isDayShiftIn(TZ.UTC_P13)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P13)).toEqual(
    !isEveningShiftIn(TZ.UTC_P13) && !isNightShiftIn(TZ.UTC_P13)
  );
});

test("day shift in IANATimeZone 2006_06_06_06_12", () => {
  jest.setSystemTime(new Date(DATES.DATE_2006_06_06_06_12));
  expect(isDayShiftIn(TZ.UTC_M11)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M11)).toEqual(
    !isEveningShiftIn(TZ.UTC_M11) && !isNightShiftIn(TZ.UTC_M11)
  );
  expect(isDayShiftIn(TZ.UTC_M10)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M10)).toEqual(
    !isEveningShiftIn(TZ.UTC_M10) && !isNightShiftIn(TZ.UTC_M10)
  );
  expect(isDayShiftIn(TZ.UTC_M930)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M930)).toEqual(
    !isEveningShiftIn(TZ.UTC_M930) && !isNightShiftIn(TZ.UTC_M930)
  );
  expect(isDayShiftIn(TZ.UTC_M9)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M9)).toEqual(
    !isEveningShiftIn(TZ.UTC_M9) && !isNightShiftIn(TZ.UTC_M9)
  );
  expect(isDayShiftIn(TZ.UTC_M8)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M8)).toEqual(
    !isEveningShiftIn(TZ.UTC_M8) && !isNightShiftIn(TZ.UTC_M8)
  );
  expect(isDayShiftIn(TZ.UTC_M7)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M7)).toEqual(
    !isEveningShiftIn(TZ.UTC_M7) && !isNightShiftIn(TZ.UTC_M7)
  );
  expect(isDayShiftIn(TZ.UTC_M6)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M6)).toEqual(
    !isEveningShiftIn(TZ.UTC_M6) && !isNightShiftIn(TZ.UTC_M6)
  );
  expect(isDayShiftIn(TZ.UTC_M5)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M5)).toEqual(
    !isEveningShiftIn(TZ.UTC_M5) && !isNightShiftIn(TZ.UTC_M5)
  );
  expect(isDayShiftIn(TZ.UTC_M4)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M4)).toEqual(
    !isEveningShiftIn(TZ.UTC_M4) && !isNightShiftIn(TZ.UTC_M4)
  );
  expect(isDayShiftIn(TZ.UTC_M330)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M330)).toEqual(
    !isEveningShiftIn(TZ.UTC_M330) && !isNightShiftIn(TZ.UTC_M330)
  );
  expect(isDayShiftIn(TZ.UTC_M3)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M3)).toEqual(
    !isEveningShiftIn(TZ.UTC_M3) && !isNightShiftIn(TZ.UTC_M3)
  );
  expect(isDayShiftIn(TZ.UTC_M2)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M2)).toEqual(
    !isEveningShiftIn(TZ.UTC_M2) && !isNightShiftIn(TZ.UTC_M2)
  );
  expect(isDayShiftIn(TZ.UTC_M1)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M1)).toEqual(
    !isEveningShiftIn(TZ.UTC_M1) && !isNightShiftIn(TZ.UTC_M1)
  );
  expect(isDayShiftIn(TZ.UTC_0)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_0)).toEqual(
    !isEveningShiftIn(TZ.UTC_0) && !isNightShiftIn(TZ.UTC_0)
  );
  expect(isDayShiftIn(TZ.UTC_P1)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P1)).toEqual(
    !isEveningShiftIn(TZ.UTC_P1) && !isNightShiftIn(TZ.UTC_P1)
  );
  expect(isDayShiftIn(TZ.UTC_P2)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P2)).toEqual(
    !isEveningShiftIn(TZ.UTC_P2) && !isNightShiftIn(TZ.UTC_P2)
  );
  expect(isDayShiftIn(TZ.UTC_P3)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P3)).toEqual(
    !isEveningShiftIn(TZ.UTC_P3) && !isNightShiftIn(TZ.UTC_P3)
  );
  expect(isDayShiftIn(TZ.UTC_P330)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P330)).toEqual(
    !isEveningShiftIn(TZ.UTC_P330) && !isNightShiftIn(TZ.UTC_P330)
  );
  expect(isDayShiftIn(TZ.UTC_P4)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P4)).toEqual(
    !isEveningShiftIn(TZ.UTC_P4) && !isNightShiftIn(TZ.UTC_P4)
  );
  expect(isDayShiftIn(TZ.UTC_P430)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P430)).toEqual(
    !isEveningShiftIn(TZ.UTC_P430) && !isNightShiftIn(TZ.UTC_P430)
  );
  expect(isDayShiftIn(TZ.UTC_P5)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P5)).toEqual(
    !isEveningShiftIn(TZ.UTC_P5) && !isNightShiftIn(TZ.UTC_P5)
  );
  expect(isDayShiftIn(TZ.UTC_P530)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P530)).toEqual(
    !isEveningShiftIn(TZ.UTC_P530) && !isNightShiftIn(TZ.UTC_P530)
  );
  expect(isDayShiftIn(TZ.UTC_P545)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P545)).toEqual(
    !isEveningShiftIn(TZ.UTC_P545) && !isNightShiftIn(TZ.UTC_P545)
  );
  expect(isDayShiftIn(TZ.UTC_P6)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P6)).toEqual(
    !isEveningShiftIn(TZ.UTC_P6) && !isNightShiftIn(TZ.UTC_P6)
  );
  expect(isDayShiftIn(TZ.UTC_P630)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P630)).toEqual(
    !isEveningShiftIn(TZ.UTC_P630) && !isNightShiftIn(TZ.UTC_P630)
  );
  expect(isDayShiftIn(TZ.UTC_P7)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P7)).toEqual(
    !isEveningShiftIn(TZ.UTC_P7) && !isNightShiftIn(TZ.UTC_P7)
  );
  expect(isDayShiftIn(TZ.UTC_P8)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P8)).toEqual(
    !isEveningShiftIn(TZ.UTC_P8) && !isNightShiftIn(TZ.UTC_P8)
  );
  expect(isDayShiftIn(TZ.UTC_P9)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P9)).toEqual(
    !isEveningShiftIn(TZ.UTC_P9) && !isNightShiftIn(TZ.UTC_P9)
  );
  expect(isDayShiftIn(TZ.UTC_P930)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P930)).toEqual(
    !isEveningShiftIn(TZ.UTC_P930) && !isNightShiftIn(TZ.UTC_P930)
  );
  expect(isDayShiftIn(TZ.UTC_P10)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P10)).toEqual(
    !isEveningShiftIn(TZ.UTC_P10) && !isNightShiftIn(TZ.UTC_P10)
  );
  expect(isDayShiftIn(TZ.UTC_P1030)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P1030)).toEqual(
    !isEveningShiftIn(TZ.UTC_P1030) && !isNightShiftIn(TZ.UTC_P1030)
  );
  expect(isDayShiftIn(TZ.UTC_P12)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P12)).toEqual(
    !isEveningShiftIn(TZ.UTC_P12) && !isNightShiftIn(TZ.UTC_P12)
  );
  expect(isDayShiftIn(TZ.UTC_P1245)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P1245)).toEqual(
    !isEveningShiftIn(TZ.UTC_P1245) && !isNightShiftIn(TZ.UTC_P1245)
  );
  expect(isDayShiftIn(TZ.UTC_P13)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P13)).toEqual(
    !isEveningShiftIn(TZ.UTC_P13) && !isNightShiftIn(TZ.UTC_P13)
  );
});

test("day shift in IANATimeZone 2007_07_07_07_14", () => {
  jest.setSystemTime(new Date(DATES.DATE_2007_07_07_07_14));
  expect(isDayShiftIn(TZ.UTC_M11)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M11)).toEqual(
    !isEveningShiftIn(TZ.UTC_M11) && !isNightShiftIn(TZ.UTC_M11)
  );
  expect(isDayShiftIn(TZ.UTC_M10)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M10)).toEqual(
    !isEveningShiftIn(TZ.UTC_M10) && !isNightShiftIn(TZ.UTC_M10)
  );
  expect(isDayShiftIn(TZ.UTC_M930)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M930)).toEqual(
    !isEveningShiftIn(TZ.UTC_M930) && !isNightShiftIn(TZ.UTC_M930)
  );
  expect(isDayShiftIn(TZ.UTC_M9)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M9)).toEqual(
    !isEveningShiftIn(TZ.UTC_M9) && !isNightShiftIn(TZ.UTC_M9)
  );
  expect(isDayShiftIn(TZ.UTC_M8)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M8)).toEqual(
    !isEveningShiftIn(TZ.UTC_M8) && !isNightShiftIn(TZ.UTC_M8)
  );
  expect(isDayShiftIn(TZ.UTC_M7)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M7)).toEqual(
    !isEveningShiftIn(TZ.UTC_M7) && !isNightShiftIn(TZ.UTC_M7)
  );
  expect(isDayShiftIn(TZ.UTC_M6)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M6)).toEqual(
    !isEveningShiftIn(TZ.UTC_M6) && !isNightShiftIn(TZ.UTC_M6)
  );
  expect(isDayShiftIn(TZ.UTC_M5)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M5)).toEqual(
    !isEveningShiftIn(TZ.UTC_M5) && !isNightShiftIn(TZ.UTC_M5)
  );
  expect(isDayShiftIn(TZ.UTC_M4)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M4)).toEqual(
    !isEveningShiftIn(TZ.UTC_M4) && !isNightShiftIn(TZ.UTC_M4)
  );
  expect(isDayShiftIn(TZ.UTC_M330)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M330)).toEqual(
    !isEveningShiftIn(TZ.UTC_M330) && !isNightShiftIn(TZ.UTC_M330)
  );
  expect(isDayShiftIn(TZ.UTC_M3)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M3)).toEqual(
    !isEveningShiftIn(TZ.UTC_M3) && !isNightShiftIn(TZ.UTC_M3)
  );
  expect(isDayShiftIn(TZ.UTC_M2)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M2)).toEqual(
    !isEveningShiftIn(TZ.UTC_M2) && !isNightShiftIn(TZ.UTC_M2)
  );
  expect(isDayShiftIn(TZ.UTC_M1)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M1)).toEqual(
    !isEveningShiftIn(TZ.UTC_M1) && !isNightShiftIn(TZ.UTC_M1)
  );
  expect(isDayShiftIn(TZ.UTC_0)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_0)).toEqual(
    !isEveningShiftIn(TZ.UTC_0) && !isNightShiftIn(TZ.UTC_0)
  );
  expect(isDayShiftIn(TZ.UTC_P1)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P1)).toEqual(
    !isEveningShiftIn(TZ.UTC_P1) && !isNightShiftIn(TZ.UTC_P1)
  );
  expect(isDayShiftIn(TZ.UTC_P2)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P2)).toEqual(
    !isEveningShiftIn(TZ.UTC_P2) && !isNightShiftIn(TZ.UTC_P2)
  );
  expect(isDayShiftIn(TZ.UTC_P3)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P3)).toEqual(
    !isEveningShiftIn(TZ.UTC_P3) && !isNightShiftIn(TZ.UTC_P3)
  );
  expect(isDayShiftIn(TZ.UTC_P330)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P330)).toEqual(
    !isEveningShiftIn(TZ.UTC_P330) && !isNightShiftIn(TZ.UTC_P330)
  );
  expect(isDayShiftIn(TZ.UTC_P4)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P4)).toEqual(
    !isEveningShiftIn(TZ.UTC_P4) && !isNightShiftIn(TZ.UTC_P4)
  );
  expect(isDayShiftIn(TZ.UTC_P430)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P430)).toEqual(
    !isEveningShiftIn(TZ.UTC_P430) && !isNightShiftIn(TZ.UTC_P430)
  );
  expect(isDayShiftIn(TZ.UTC_P5)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P5)).toEqual(
    !isEveningShiftIn(TZ.UTC_P5) && !isNightShiftIn(TZ.UTC_P5)
  );
  expect(isDayShiftIn(TZ.UTC_P530)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P530)).toEqual(
    !isEveningShiftIn(TZ.UTC_P530) && !isNightShiftIn(TZ.UTC_P530)
  );
  expect(isDayShiftIn(TZ.UTC_P545)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P545)).toEqual(
    !isEveningShiftIn(TZ.UTC_P545) && !isNightShiftIn(TZ.UTC_P545)
  );
  expect(isDayShiftIn(TZ.UTC_P6)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P6)).toEqual(
    !isEveningShiftIn(TZ.UTC_P6) && !isNightShiftIn(TZ.UTC_P6)
  );
  expect(isDayShiftIn(TZ.UTC_P630)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P630)).toEqual(
    !isEveningShiftIn(TZ.UTC_P630) && !isNightShiftIn(TZ.UTC_P630)
  );
  expect(isDayShiftIn(TZ.UTC_P7)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P7)).toEqual(
    !isEveningShiftIn(TZ.UTC_P7) && !isNightShiftIn(TZ.UTC_P7)
  );
  expect(isDayShiftIn(TZ.UTC_P8)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P8)).toEqual(
    !isEveningShiftIn(TZ.UTC_P8) && !isNightShiftIn(TZ.UTC_P8)
  );
  expect(isDayShiftIn(TZ.UTC_P9)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P9)).toEqual(
    !isEveningShiftIn(TZ.UTC_P9) && !isNightShiftIn(TZ.UTC_P9)
  );
  expect(isDayShiftIn(TZ.UTC_P930)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P930)).toEqual(
    !isEveningShiftIn(TZ.UTC_P930) && !isNightShiftIn(TZ.UTC_P930)
  );
  expect(isDayShiftIn(TZ.UTC_P10)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P10)).toEqual(
    !isEveningShiftIn(TZ.UTC_P10) && !isNightShiftIn(TZ.UTC_P10)
  );
  expect(isDayShiftIn(TZ.UTC_P1030)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P1030)).toEqual(
    !isEveningShiftIn(TZ.UTC_P1030) && !isNightShiftIn(TZ.UTC_P1030)
  );
  expect(isDayShiftIn(TZ.UTC_P12)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P12)).toEqual(
    !isEveningShiftIn(TZ.UTC_P12) && !isNightShiftIn(TZ.UTC_P12)
  );
  expect(isDayShiftIn(TZ.UTC_P1245)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P1245)).toEqual(
    !isEveningShiftIn(TZ.UTC_P1245) && !isNightShiftIn(TZ.UTC_P1245)
  );
  expect(isDayShiftIn(TZ.UTC_P13)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P13)).toEqual(
    !isEveningShiftIn(TZ.UTC_P13) && !isNightShiftIn(TZ.UTC_P13)
  );
});

test("day shift in IANATimeZone 2008_08_08_08_16", () => {
  jest.setSystemTime(new Date(DATES.DATE_2008_08_08_08_16));
  expect(isDayShiftIn(TZ.UTC_M11)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M11)).toEqual(
    !isEveningShiftIn(TZ.UTC_M11) && !isNightShiftIn(TZ.UTC_M11)
  );
  expect(isDayShiftIn(TZ.UTC_M10)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M10)).toEqual(
    !isEveningShiftIn(TZ.UTC_M10) && !isNightShiftIn(TZ.UTC_M10)
  );
  expect(isDayShiftIn(TZ.UTC_M930)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M930)).toEqual(
    !isEveningShiftIn(TZ.UTC_M930) && !isNightShiftIn(TZ.UTC_M930)
  );
  expect(isDayShiftIn(TZ.UTC_M9)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M9)).toEqual(
    !isEveningShiftIn(TZ.UTC_M9) && !isNightShiftIn(TZ.UTC_M9)
  );
  expect(isDayShiftIn(TZ.UTC_M8)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M8)).toEqual(
    !isEveningShiftIn(TZ.UTC_M8) && !isNightShiftIn(TZ.UTC_M8)
  );
  expect(isDayShiftIn(TZ.UTC_M7)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M7)).toEqual(
    !isEveningShiftIn(TZ.UTC_M7) && !isNightShiftIn(TZ.UTC_M7)
  );
  expect(isDayShiftIn(TZ.UTC_M6)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M6)).toEqual(
    !isEveningShiftIn(TZ.UTC_M6) && !isNightShiftIn(TZ.UTC_M6)
  );
  expect(isDayShiftIn(TZ.UTC_M5)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M5)).toEqual(
    !isEveningShiftIn(TZ.UTC_M5) && !isNightShiftIn(TZ.UTC_M5)
  );
  expect(isDayShiftIn(TZ.UTC_M4)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M4)).toEqual(
    !isEveningShiftIn(TZ.UTC_M4) && !isNightShiftIn(TZ.UTC_M4)
  );
  expect(isDayShiftIn(TZ.UTC_M330)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M330)).toEqual(
    !isEveningShiftIn(TZ.UTC_M330) && !isNightShiftIn(TZ.UTC_M330)
  );
  expect(isDayShiftIn(TZ.UTC_M3)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M3)).toEqual(
    !isEveningShiftIn(TZ.UTC_M3) && !isNightShiftIn(TZ.UTC_M3)
  );
  expect(isDayShiftIn(TZ.UTC_M2)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M2)).toEqual(
    !isEveningShiftIn(TZ.UTC_M2) && !isNightShiftIn(TZ.UTC_M2)
  );
  expect(isDayShiftIn(TZ.UTC_M1)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M1)).toEqual(
    !isEveningShiftIn(TZ.UTC_M1) && !isNightShiftIn(TZ.UTC_M1)
  );
  expect(isDayShiftIn(TZ.UTC_0)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_0)).toEqual(
    !isEveningShiftIn(TZ.UTC_0) && !isNightShiftIn(TZ.UTC_0)
  );
  expect(isDayShiftIn(TZ.UTC_P1)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P1)).toEqual(
    !isEveningShiftIn(TZ.UTC_P1) && !isNightShiftIn(TZ.UTC_P1)
  );
  expect(isDayShiftIn(TZ.UTC_P2)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P2)).toEqual(
    !isEveningShiftIn(TZ.UTC_P2) && !isNightShiftIn(TZ.UTC_P2)
  );
  expect(isDayShiftIn(TZ.UTC_P3)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P3)).toEqual(
    !isEveningShiftIn(TZ.UTC_P3) && !isNightShiftIn(TZ.UTC_P3)
  );
  expect(isDayShiftIn(TZ.UTC_P330)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P330)).toEqual(
    !isEveningShiftIn(TZ.UTC_P330) && !isNightShiftIn(TZ.UTC_P330)
  );
  expect(isDayShiftIn(TZ.UTC_P4)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P4)).toEqual(
    !isEveningShiftIn(TZ.UTC_P4) && !isNightShiftIn(TZ.UTC_P4)
  );
  expect(isDayShiftIn(TZ.UTC_P430)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P430)).toEqual(
    !isEveningShiftIn(TZ.UTC_P430) && !isNightShiftIn(TZ.UTC_P430)
  );
  expect(isDayShiftIn(TZ.UTC_P5)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P5)).toEqual(
    !isEveningShiftIn(TZ.UTC_P5) && !isNightShiftIn(TZ.UTC_P5)
  );
  expect(isDayShiftIn(TZ.UTC_P530)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P530)).toEqual(
    !isEveningShiftIn(TZ.UTC_P530) && !isNightShiftIn(TZ.UTC_P530)
  );
  expect(isDayShiftIn(TZ.UTC_P545)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P545)).toEqual(
    !isEveningShiftIn(TZ.UTC_P545) && !isNightShiftIn(TZ.UTC_P545)
  );
  expect(isDayShiftIn(TZ.UTC_P6)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P6)).toEqual(
    !isEveningShiftIn(TZ.UTC_P6) && !isNightShiftIn(TZ.UTC_P6)
  );
  expect(isDayShiftIn(TZ.UTC_P630)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P630)).toEqual(
    !isEveningShiftIn(TZ.UTC_P630) && !isNightShiftIn(TZ.UTC_P630)
  );
  expect(isDayShiftIn(TZ.UTC_P7)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P7)).toEqual(
    !isEveningShiftIn(TZ.UTC_P7) && !isNightShiftIn(TZ.UTC_P7)
  );
  expect(isDayShiftIn(TZ.UTC_P8)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P8)).toEqual(
    !isEveningShiftIn(TZ.UTC_P8) && !isNightShiftIn(TZ.UTC_P8)
  );
  expect(isDayShiftIn(TZ.UTC_P9)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P9)).toEqual(
    !isEveningShiftIn(TZ.UTC_P9) && !isNightShiftIn(TZ.UTC_P9)
  );
  expect(isDayShiftIn(TZ.UTC_P930)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P930)).toEqual(
    !isEveningShiftIn(TZ.UTC_P930) && !isNightShiftIn(TZ.UTC_P930)
  );
  expect(isDayShiftIn(TZ.UTC_P10)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P10)).toEqual(
    !isEveningShiftIn(TZ.UTC_P10) && !isNightShiftIn(TZ.UTC_P10)
  );
  expect(isDayShiftIn(TZ.UTC_P1030)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P1030)).toEqual(
    !isEveningShiftIn(TZ.UTC_P1030) && !isNightShiftIn(TZ.UTC_P1030)
  );
  expect(isDayShiftIn(TZ.UTC_P12)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P12)).toEqual(
    !isEveningShiftIn(TZ.UTC_P12) && !isNightShiftIn(TZ.UTC_P12)
  );
  expect(isDayShiftIn(TZ.UTC_P1245)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P1245)).toEqual(
    !isEveningShiftIn(TZ.UTC_P1245) && !isNightShiftIn(TZ.UTC_P1245)
  );
  expect(isDayShiftIn(TZ.UTC_P13)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P13)).toEqual(
    !isEveningShiftIn(TZ.UTC_P13) && !isNightShiftIn(TZ.UTC_P13)
  );
});

test("day shift in IANATimeZone 2009_09_09_09_18", () => {
  jest.setSystemTime(new Date(DATES.DATE_2009_09_09_09_18));
  expect(isDayShiftIn(TZ.UTC_M11)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M11)).toEqual(
    !isEveningShiftIn(TZ.UTC_M11) && !isNightShiftIn(TZ.UTC_M11)
  );
  expect(isDayShiftIn(TZ.UTC_M10)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M10)).toEqual(
    !isEveningShiftIn(TZ.UTC_M10) && !isNightShiftIn(TZ.UTC_M10)
  );
  expect(isDayShiftIn(TZ.UTC_M930)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M930)).toEqual(
    !isEveningShiftIn(TZ.UTC_M930) && !isNightShiftIn(TZ.UTC_M930)
  );
  expect(isDayShiftIn(TZ.UTC_M9)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M9)).toEqual(
    !isEveningShiftIn(TZ.UTC_M9) && !isNightShiftIn(TZ.UTC_M9)
  );
  expect(isDayShiftIn(TZ.UTC_M8)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M8)).toEqual(
    !isEveningShiftIn(TZ.UTC_M8) && !isNightShiftIn(TZ.UTC_M8)
  );
  expect(isDayShiftIn(TZ.UTC_M7)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M7)).toEqual(
    !isEveningShiftIn(TZ.UTC_M7) && !isNightShiftIn(TZ.UTC_M7)
  );
  expect(isDayShiftIn(TZ.UTC_M6)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M6)).toEqual(
    !isEveningShiftIn(TZ.UTC_M6) && !isNightShiftIn(TZ.UTC_M6)
  );
  expect(isDayShiftIn(TZ.UTC_M5)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M5)).toEqual(
    !isEveningShiftIn(TZ.UTC_M5) && !isNightShiftIn(TZ.UTC_M5)
  );
  expect(isDayShiftIn(TZ.UTC_M4)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M4)).toEqual(
    !isEveningShiftIn(TZ.UTC_M4) && !isNightShiftIn(TZ.UTC_M4)
  );
  expect(isDayShiftIn(TZ.UTC_M330)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M330)).toEqual(
    !isEveningShiftIn(TZ.UTC_M330) && !isNightShiftIn(TZ.UTC_M330)
  );
  expect(isDayShiftIn(TZ.UTC_M3)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M3)).toEqual(
    !isEveningShiftIn(TZ.UTC_M3) && !isNightShiftIn(TZ.UTC_M3)
  );
  expect(isDayShiftIn(TZ.UTC_M2)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M2)).toEqual(
    !isEveningShiftIn(TZ.UTC_M2) && !isNightShiftIn(TZ.UTC_M2)
  );
  expect(isDayShiftIn(TZ.UTC_M1)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M1)).toEqual(
    !isEveningShiftIn(TZ.UTC_M1) && !isNightShiftIn(TZ.UTC_M1)
  );
  expect(isDayShiftIn(TZ.UTC_0)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_0)).toEqual(
    !isEveningShiftIn(TZ.UTC_0) && !isNightShiftIn(TZ.UTC_0)
  );
  expect(isDayShiftIn(TZ.UTC_P1)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P1)).toEqual(
    !isEveningShiftIn(TZ.UTC_P1) && !isNightShiftIn(TZ.UTC_P1)
  );
  expect(isDayShiftIn(TZ.UTC_P2)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P2)).toEqual(
    !isEveningShiftIn(TZ.UTC_P2) && !isNightShiftIn(TZ.UTC_P2)
  );
  expect(isDayShiftIn(TZ.UTC_P3)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P3)).toEqual(
    !isEveningShiftIn(TZ.UTC_P3) && !isNightShiftIn(TZ.UTC_P3)
  );
  expect(isDayShiftIn(TZ.UTC_P330)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P330)).toEqual(
    !isEveningShiftIn(TZ.UTC_P330) && !isNightShiftIn(TZ.UTC_P330)
  );
  expect(isDayShiftIn(TZ.UTC_P4)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P4)).toEqual(
    !isEveningShiftIn(TZ.UTC_P4) && !isNightShiftIn(TZ.UTC_P4)
  );
  expect(isDayShiftIn(TZ.UTC_P430)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P430)).toEqual(
    !isEveningShiftIn(TZ.UTC_P430) && !isNightShiftIn(TZ.UTC_P430)
  );
  expect(isDayShiftIn(TZ.UTC_P5)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P5)).toEqual(
    !isEveningShiftIn(TZ.UTC_P5) && !isNightShiftIn(TZ.UTC_P5)
  );
  expect(isDayShiftIn(TZ.UTC_P530)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P530)).toEqual(
    !isEveningShiftIn(TZ.UTC_P530) && !isNightShiftIn(TZ.UTC_P530)
  );
  expect(isDayShiftIn(TZ.UTC_P545)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P545)).toEqual(
    !isEveningShiftIn(TZ.UTC_P545) && !isNightShiftIn(TZ.UTC_P545)
  );
  expect(isDayShiftIn(TZ.UTC_P6)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P6)).toEqual(
    !isEveningShiftIn(TZ.UTC_P6) && !isNightShiftIn(TZ.UTC_P6)
  );
  expect(isDayShiftIn(TZ.UTC_P630)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P630)).toEqual(
    !isEveningShiftIn(TZ.UTC_P630) && !isNightShiftIn(TZ.UTC_P630)
  );
  expect(isDayShiftIn(TZ.UTC_P7)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P7)).toEqual(
    !isEveningShiftIn(TZ.UTC_P7) && !isNightShiftIn(TZ.UTC_P7)
  );
  expect(isDayShiftIn(TZ.UTC_P8)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P8)).toEqual(
    !isEveningShiftIn(TZ.UTC_P8) && !isNightShiftIn(TZ.UTC_P8)
  );
  expect(isDayShiftIn(TZ.UTC_P9)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P9)).toEqual(
    !isEveningShiftIn(TZ.UTC_P9) && !isNightShiftIn(TZ.UTC_P9)
  );
  expect(isDayShiftIn(TZ.UTC_P930)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P930)).toEqual(
    !isEveningShiftIn(TZ.UTC_P930) && !isNightShiftIn(TZ.UTC_P930)
  );
  expect(isDayShiftIn(TZ.UTC_P10)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P10)).toEqual(
    !isEveningShiftIn(TZ.UTC_P10) && !isNightShiftIn(TZ.UTC_P10)
  );
  expect(isDayShiftIn(TZ.UTC_P1030)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P1030)).toEqual(
    !isEveningShiftIn(TZ.UTC_P1030) && !isNightShiftIn(TZ.UTC_P1030)
  );
  expect(isDayShiftIn(TZ.UTC_P12)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P12)).toEqual(
    !isEveningShiftIn(TZ.UTC_P12) && !isNightShiftIn(TZ.UTC_P12)
  );
  expect(isDayShiftIn(TZ.UTC_P1245)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P1245)).toEqual(
    !isEveningShiftIn(TZ.UTC_P1245) && !isNightShiftIn(TZ.UTC_P1245)
  );
  expect(isDayShiftIn(TZ.UTC_P13)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P13)).toEqual(
    !isEveningShiftIn(TZ.UTC_P13) && !isNightShiftIn(TZ.UTC_P13)
  );
});

test("day shift in IANATimeZone 2010_10_10_10_20", () => {
  jest.setSystemTime(new Date(DATES.DATE_2010_10_10_10_20));
  expect(isDayShiftIn(TZ.UTC_M11)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M11)).toEqual(
    !isEveningShiftIn(TZ.UTC_M11) && !isNightShiftIn(TZ.UTC_M11)
  );
  expect(isDayShiftIn(TZ.UTC_M10)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M10)).toEqual(
    !isEveningShiftIn(TZ.UTC_M10) && !isNightShiftIn(TZ.UTC_M10)
  );
  expect(isDayShiftIn(TZ.UTC_M930)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M930)).toEqual(
    !isEveningShiftIn(TZ.UTC_M930) && !isNightShiftIn(TZ.UTC_M930)
  );
  expect(isDayShiftIn(TZ.UTC_M9)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M9)).toEqual(
    !isEveningShiftIn(TZ.UTC_M9) && !isNightShiftIn(TZ.UTC_M9)
  );
  expect(isDayShiftIn(TZ.UTC_M8)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M8)).toEqual(
    !isEveningShiftIn(TZ.UTC_M8) && !isNightShiftIn(TZ.UTC_M8)
  );
  expect(isDayShiftIn(TZ.UTC_M7)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M7)).toEqual(
    !isEveningShiftIn(TZ.UTC_M7) && !isNightShiftIn(TZ.UTC_M7)
  );
  expect(isDayShiftIn(TZ.UTC_M6)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M6)).toEqual(
    !isEveningShiftIn(TZ.UTC_M6) && !isNightShiftIn(TZ.UTC_M6)
  );
  expect(isDayShiftIn(TZ.UTC_M5)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M5)).toEqual(
    !isEveningShiftIn(TZ.UTC_M5) && !isNightShiftIn(TZ.UTC_M5)
  );
  expect(isDayShiftIn(TZ.UTC_M4)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M4)).toEqual(
    !isEveningShiftIn(TZ.UTC_M4) && !isNightShiftIn(TZ.UTC_M4)
  );
  expect(isDayShiftIn(TZ.UTC_M330)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M330)).toEqual(
    !isEveningShiftIn(TZ.UTC_M330) && !isNightShiftIn(TZ.UTC_M330)
  );
  expect(isDayShiftIn(TZ.UTC_M3)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M3)).toEqual(
    !isEveningShiftIn(TZ.UTC_M3) && !isNightShiftIn(TZ.UTC_M3)
  );
  expect(isDayShiftIn(TZ.UTC_M2)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M2)).toEqual(
    !isEveningShiftIn(TZ.UTC_M2) && !isNightShiftIn(TZ.UTC_M2)
  );
  expect(isDayShiftIn(TZ.UTC_M1)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M1)).toEqual(
    !isEveningShiftIn(TZ.UTC_M1) && !isNightShiftIn(TZ.UTC_M1)
  );
  expect(isDayShiftIn(TZ.UTC_0)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_0)).toEqual(
    !isEveningShiftIn(TZ.UTC_0) && !isNightShiftIn(TZ.UTC_0)
  );
  expect(isDayShiftIn(TZ.UTC_P1)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P1)).toEqual(
    !isEveningShiftIn(TZ.UTC_P1) && !isNightShiftIn(TZ.UTC_P1)
  );
  expect(isDayShiftIn(TZ.UTC_P2)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P2)).toEqual(
    !isEveningShiftIn(TZ.UTC_P2) && !isNightShiftIn(TZ.UTC_P2)
  );
  expect(isDayShiftIn(TZ.UTC_P3)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P3)).toEqual(
    !isEveningShiftIn(TZ.UTC_P3) && !isNightShiftIn(TZ.UTC_P3)
  );
  expect(isDayShiftIn(TZ.UTC_P330)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P330)).toEqual(
    !isEveningShiftIn(TZ.UTC_P330) && !isNightShiftIn(TZ.UTC_P330)
  );
  expect(isDayShiftIn(TZ.UTC_P4)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P4)).toEqual(
    !isEveningShiftIn(TZ.UTC_P4) && !isNightShiftIn(TZ.UTC_P4)
  );
  expect(isDayShiftIn(TZ.UTC_P430)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P430)).toEqual(
    !isEveningShiftIn(TZ.UTC_P430) && !isNightShiftIn(TZ.UTC_P430)
  );
  expect(isDayShiftIn(TZ.UTC_P5)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P5)).toEqual(
    !isEveningShiftIn(TZ.UTC_P5) && !isNightShiftIn(TZ.UTC_P5)
  );
  expect(isDayShiftIn(TZ.UTC_P530)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P530)).toEqual(
    !isEveningShiftIn(TZ.UTC_P530) && !isNightShiftIn(TZ.UTC_P530)
  );
  expect(isDayShiftIn(TZ.UTC_P545)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P545)).toEqual(
    !isEveningShiftIn(TZ.UTC_P545) && !isNightShiftIn(TZ.UTC_P545)
  );
  expect(isDayShiftIn(TZ.UTC_P6)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P6)).toEqual(
    !isEveningShiftIn(TZ.UTC_P6) && !isNightShiftIn(TZ.UTC_P6)
  );
  expect(isDayShiftIn(TZ.UTC_P630)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P630)).toEqual(
    !isEveningShiftIn(TZ.UTC_P630) && !isNightShiftIn(TZ.UTC_P630)
  );
  expect(isDayShiftIn(TZ.UTC_P7)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P7)).toEqual(
    !isEveningShiftIn(TZ.UTC_P7) && !isNightShiftIn(TZ.UTC_P7)
  );
  expect(isDayShiftIn(TZ.UTC_P8)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P8)).toEqual(
    !isEveningShiftIn(TZ.UTC_P8) && !isNightShiftIn(TZ.UTC_P8)
  );
  expect(isDayShiftIn(TZ.UTC_P9)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P9)).toEqual(
    !isEveningShiftIn(TZ.UTC_P9) && !isNightShiftIn(TZ.UTC_P9)
  );
  expect(isDayShiftIn(TZ.UTC_P930)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P930)).toEqual(
    !isEveningShiftIn(TZ.UTC_P930) && !isNightShiftIn(TZ.UTC_P930)
  );
  expect(isDayShiftIn(TZ.UTC_P10)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P10)).toEqual(
    !isEveningShiftIn(TZ.UTC_P10) && !isNightShiftIn(TZ.UTC_P10)
  );
  expect(isDayShiftIn(TZ.UTC_P1030)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P1030)).toEqual(
    !isEveningShiftIn(TZ.UTC_P1030) && !isNightShiftIn(TZ.UTC_P1030)
  );
  expect(isDayShiftIn(TZ.UTC_P12)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P12)).toEqual(
    !isEveningShiftIn(TZ.UTC_P12) && !isNightShiftIn(TZ.UTC_P12)
  );
  expect(isDayShiftIn(TZ.UTC_P1245)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P1245)).toEqual(
    !isEveningShiftIn(TZ.UTC_P1245) && !isNightShiftIn(TZ.UTC_P1245)
  );
  expect(isDayShiftIn(TZ.UTC_P13)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P13)).toEqual(
    !isEveningShiftIn(TZ.UTC_P13) && !isNightShiftIn(TZ.UTC_P13)
  );
});

test("day shift in IANATimeZone 2011_11_11_11_22", () => {
  jest.setSystemTime(new Date(DATES.DATE_2011_11_11_11_22));
  expect(isDayShiftIn(TZ.UTC_M11)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M11)).toEqual(
    !isEveningShiftIn(TZ.UTC_M11) && !isNightShiftIn(TZ.UTC_M11)
  );
  expect(isDayShiftIn(TZ.UTC_M10)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M10)).toEqual(
    !isEveningShiftIn(TZ.UTC_M10) && !isNightShiftIn(TZ.UTC_M10)
  );
  expect(isDayShiftIn(TZ.UTC_M930)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M930)).toEqual(
    !isEveningShiftIn(TZ.UTC_M930) && !isNightShiftIn(TZ.UTC_M930)
  );
  expect(isDayShiftIn(TZ.UTC_M9)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M9)).toEqual(
    !isEveningShiftIn(TZ.UTC_M9) && !isNightShiftIn(TZ.UTC_M9)
  );
  expect(isDayShiftIn(TZ.UTC_M8)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M8)).toEqual(
    !isEveningShiftIn(TZ.UTC_M8) && !isNightShiftIn(TZ.UTC_M8)
  );
  expect(isDayShiftIn(TZ.UTC_M7)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M7)).toEqual(
    !isEveningShiftIn(TZ.UTC_M7) && !isNightShiftIn(TZ.UTC_M7)
  );
  expect(isDayShiftIn(TZ.UTC_M6)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M6)).toEqual(
    !isEveningShiftIn(TZ.UTC_M6) && !isNightShiftIn(TZ.UTC_M6)
  );
  expect(isDayShiftIn(TZ.UTC_M5)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M5)).toEqual(
    !isEveningShiftIn(TZ.UTC_M5) && !isNightShiftIn(TZ.UTC_M5)
  );
  expect(isDayShiftIn(TZ.UTC_M4)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M4)).toEqual(
    !isEveningShiftIn(TZ.UTC_M4) && !isNightShiftIn(TZ.UTC_M4)
  );
  expect(isDayShiftIn(TZ.UTC_M330)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M330)).toEqual(
    !isEveningShiftIn(TZ.UTC_M330) && !isNightShiftIn(TZ.UTC_M330)
  );
  expect(isDayShiftIn(TZ.UTC_M3)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M3)).toEqual(
    !isEveningShiftIn(TZ.UTC_M3) && !isNightShiftIn(TZ.UTC_M3)
  );
  expect(isDayShiftIn(TZ.UTC_M2)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M2)).toEqual(
    !isEveningShiftIn(TZ.UTC_M2) && !isNightShiftIn(TZ.UTC_M2)
  );
  expect(isDayShiftIn(TZ.UTC_M1)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M1)).toEqual(
    !isEveningShiftIn(TZ.UTC_M1) && !isNightShiftIn(TZ.UTC_M1)
  );
  expect(isDayShiftIn(TZ.UTC_0)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_0)).toEqual(
    !isEveningShiftIn(TZ.UTC_0) && !isNightShiftIn(TZ.UTC_0)
  );
  expect(isDayShiftIn(TZ.UTC_P1)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P1)).toEqual(
    !isEveningShiftIn(TZ.UTC_P1) && !isNightShiftIn(TZ.UTC_P1)
  );
  expect(isDayShiftIn(TZ.UTC_P2)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P2)).toEqual(
    !isEveningShiftIn(TZ.UTC_P2) && !isNightShiftIn(TZ.UTC_P2)
  );
  expect(isDayShiftIn(TZ.UTC_P3)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P3)).toEqual(
    !isEveningShiftIn(TZ.UTC_P3) && !isNightShiftIn(TZ.UTC_P3)
  );
  expect(isDayShiftIn(TZ.UTC_P330)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P330)).toEqual(
    !isEveningShiftIn(TZ.UTC_P330) && !isNightShiftIn(TZ.UTC_P330)
  );
  expect(isDayShiftIn(TZ.UTC_P4)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P4)).toEqual(
    !isEveningShiftIn(TZ.UTC_P4) && !isNightShiftIn(TZ.UTC_P4)
  );
  expect(isDayShiftIn(TZ.UTC_P430)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P430)).toEqual(
    !isEveningShiftIn(TZ.UTC_P430) && !isNightShiftIn(TZ.UTC_P430)
  );
  expect(isDayShiftIn(TZ.UTC_P5)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P5)).toEqual(
    !isEveningShiftIn(TZ.UTC_P5) && !isNightShiftIn(TZ.UTC_P5)
  );
  expect(isDayShiftIn(TZ.UTC_P530)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P530)).toEqual(
    !isEveningShiftIn(TZ.UTC_P530) && !isNightShiftIn(TZ.UTC_P530)
  );
  expect(isDayShiftIn(TZ.UTC_P545)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P545)).toEqual(
    !isEveningShiftIn(TZ.UTC_P545) && !isNightShiftIn(TZ.UTC_P545)
  );
  expect(isDayShiftIn(TZ.UTC_P6)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P6)).toEqual(
    !isEveningShiftIn(TZ.UTC_P6) && !isNightShiftIn(TZ.UTC_P6)
  );
  expect(isDayShiftIn(TZ.UTC_P630)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P630)).toEqual(
    !isEveningShiftIn(TZ.UTC_P630) && !isNightShiftIn(TZ.UTC_P630)
  );
  expect(isDayShiftIn(TZ.UTC_P7)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P7)).toEqual(
    !isEveningShiftIn(TZ.UTC_P7) && !isNightShiftIn(TZ.UTC_P7)
  );
  expect(isDayShiftIn(TZ.UTC_P8)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P8)).toEqual(
    !isEveningShiftIn(TZ.UTC_P8) && !isNightShiftIn(TZ.UTC_P8)
  );
  expect(isDayShiftIn(TZ.UTC_P9)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P9)).toEqual(
    !isEveningShiftIn(TZ.UTC_P9) && !isNightShiftIn(TZ.UTC_P9)
  );
  expect(isDayShiftIn(TZ.UTC_P930)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P930)).toEqual(
    !isEveningShiftIn(TZ.UTC_P930) && !isNightShiftIn(TZ.UTC_P930)
  );
  expect(isDayShiftIn(TZ.UTC_P10)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P10)).toEqual(
    !isEveningShiftIn(TZ.UTC_P10) && !isNightShiftIn(TZ.UTC_P10)
  );
  expect(isDayShiftIn(TZ.UTC_P1030)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P1030)).toEqual(
    !isEveningShiftIn(TZ.UTC_P1030) && !isNightShiftIn(TZ.UTC_P1030)
  );
  expect(isDayShiftIn(TZ.UTC_P12)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P12)).toEqual(
    !isEveningShiftIn(TZ.UTC_P12) && !isNightShiftIn(TZ.UTC_P12)
  );
  expect(isDayShiftIn(TZ.UTC_P1245)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P1245)).toEqual(
    !isEveningShiftIn(TZ.UTC_P1245) && !isNightShiftIn(TZ.UTC_P1245)
  );
  expect(isDayShiftIn(TZ.UTC_P13)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P13)).toEqual(
    !isEveningShiftIn(TZ.UTC_P13) && !isNightShiftIn(TZ.UTC_P13)
  );
});

test("day shift in IANATimeZone 2012_12_12_12_24", () => {
  jest.setSystemTime(new Date(DATES.DATE_2012_12_12_12_24));
  expect(isDayShiftIn(TZ.UTC_M11)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M11)).toEqual(
    !isEveningShiftIn(TZ.UTC_M11) && !isNightShiftIn(TZ.UTC_M11)
  );
  expect(isDayShiftIn(TZ.UTC_M10)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M10)).toEqual(
    !isEveningShiftIn(TZ.UTC_M10) && !isNightShiftIn(TZ.UTC_M10)
  );
  expect(isDayShiftIn(TZ.UTC_M930)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M930)).toEqual(
    !isEveningShiftIn(TZ.UTC_M930) && !isNightShiftIn(TZ.UTC_M930)
  );
  expect(isDayShiftIn(TZ.UTC_M9)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M9)).toEqual(
    !isEveningShiftIn(TZ.UTC_M9) && !isNightShiftIn(TZ.UTC_M9)
  );
  expect(isDayShiftIn(TZ.UTC_M8)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M8)).toEqual(
    !isEveningShiftIn(TZ.UTC_M8) && !isNightShiftIn(TZ.UTC_M8)
  );
  expect(isDayShiftIn(TZ.UTC_M7)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M7)).toEqual(
    !isEveningShiftIn(TZ.UTC_M7) && !isNightShiftIn(TZ.UTC_M7)
  );
  expect(isDayShiftIn(TZ.UTC_M6)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M6)).toEqual(
    !isEveningShiftIn(TZ.UTC_M6) && !isNightShiftIn(TZ.UTC_M6)
  );
  expect(isDayShiftIn(TZ.UTC_M5)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M5)).toEqual(
    !isEveningShiftIn(TZ.UTC_M5) && !isNightShiftIn(TZ.UTC_M5)
  );
  expect(isDayShiftIn(TZ.UTC_M4)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M4)).toEqual(
    !isEveningShiftIn(TZ.UTC_M4) && !isNightShiftIn(TZ.UTC_M4)
  );
  expect(isDayShiftIn(TZ.UTC_M330)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M330)).toEqual(
    !isEveningShiftIn(TZ.UTC_M330) && !isNightShiftIn(TZ.UTC_M330)
  );
  expect(isDayShiftIn(TZ.UTC_M3)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M3)).toEqual(
    !isEveningShiftIn(TZ.UTC_M3) && !isNightShiftIn(TZ.UTC_M3)
  );
  expect(isDayShiftIn(TZ.UTC_M2)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M2)).toEqual(
    !isEveningShiftIn(TZ.UTC_M2) && !isNightShiftIn(TZ.UTC_M2)
  );
  expect(isDayShiftIn(TZ.UTC_M1)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M1)).toEqual(
    !isEveningShiftIn(TZ.UTC_M1) && !isNightShiftIn(TZ.UTC_M1)
  );
  expect(isDayShiftIn(TZ.UTC_0)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_0)).toEqual(
    !isEveningShiftIn(TZ.UTC_0) && !isNightShiftIn(TZ.UTC_0)
  );
  expect(isDayShiftIn(TZ.UTC_P1)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P1)).toEqual(
    !isEveningShiftIn(TZ.UTC_P1) && !isNightShiftIn(TZ.UTC_P1)
  );
  expect(isDayShiftIn(TZ.UTC_P2)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P2)).toEqual(
    !isEveningShiftIn(TZ.UTC_P2) && !isNightShiftIn(TZ.UTC_P2)
  );
  expect(isDayShiftIn(TZ.UTC_P3)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P3)).toEqual(
    !isEveningShiftIn(TZ.UTC_P3) && !isNightShiftIn(TZ.UTC_P3)
  );
  expect(isDayShiftIn(TZ.UTC_P330)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P330)).toEqual(
    !isEveningShiftIn(TZ.UTC_P330) && !isNightShiftIn(TZ.UTC_P330)
  );
  expect(isDayShiftIn(TZ.UTC_P4)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P4)).toEqual(
    !isEveningShiftIn(TZ.UTC_P4) && !isNightShiftIn(TZ.UTC_P4)
  );
  expect(isDayShiftIn(TZ.UTC_P430)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P430)).toEqual(
    !isEveningShiftIn(TZ.UTC_P430) && !isNightShiftIn(TZ.UTC_P430)
  );
  expect(isDayShiftIn(TZ.UTC_P5)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P5)).toEqual(
    !isEveningShiftIn(TZ.UTC_P5) && !isNightShiftIn(TZ.UTC_P5)
  );
  expect(isDayShiftIn(TZ.UTC_P530)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P530)).toEqual(
    !isEveningShiftIn(TZ.UTC_P530) && !isNightShiftIn(TZ.UTC_P530)
  );
  expect(isDayShiftIn(TZ.UTC_P545)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P545)).toEqual(
    !isEveningShiftIn(TZ.UTC_P545) && !isNightShiftIn(TZ.UTC_P545)
  );
  expect(isDayShiftIn(TZ.UTC_P6)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P6)).toEqual(
    !isEveningShiftIn(TZ.UTC_P6) && !isNightShiftIn(TZ.UTC_P6)
  );
  expect(isDayShiftIn(TZ.UTC_P630)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P630)).toEqual(
    !isEveningShiftIn(TZ.UTC_P630) && !isNightShiftIn(TZ.UTC_P630)
  );
  expect(isDayShiftIn(TZ.UTC_P7)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P7)).toEqual(
    !isEveningShiftIn(TZ.UTC_P7) && !isNightShiftIn(TZ.UTC_P7)
  );
  expect(isDayShiftIn(TZ.UTC_P8)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P8)).toEqual(
    !isEveningShiftIn(TZ.UTC_P8) && !isNightShiftIn(TZ.UTC_P8)
  );
  expect(isDayShiftIn(TZ.UTC_P9)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P9)).toEqual(
    !isEveningShiftIn(TZ.UTC_P9) && !isNightShiftIn(TZ.UTC_P9)
  );
  expect(isDayShiftIn(TZ.UTC_P930)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P930)).toEqual(
    !isEveningShiftIn(TZ.UTC_P930) && !isNightShiftIn(TZ.UTC_P930)
  );
  expect(isDayShiftIn(TZ.UTC_P10)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P10)).toEqual(
    !isEveningShiftIn(TZ.UTC_P10) && !isNightShiftIn(TZ.UTC_P10)
  );
  expect(isDayShiftIn(TZ.UTC_P1030)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P1030)).toEqual(
    !isEveningShiftIn(TZ.UTC_P1030) && !isNightShiftIn(TZ.UTC_P1030)
  );
  expect(isDayShiftIn(TZ.UTC_P12)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P12)).toEqual(
    !isEveningShiftIn(TZ.UTC_P12) && !isNightShiftIn(TZ.UTC_P12)
  );
  expect(isDayShiftIn(TZ.UTC_P1245)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P1245)).toEqual(
    !isEveningShiftIn(TZ.UTC_P1245) && !isNightShiftIn(TZ.UTC_P1245)
  );
  expect(isDayShiftIn(TZ.UTC_P13)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P13)).toEqual(
    !isEveningShiftIn(TZ.UTC_P13) && !isNightShiftIn(TZ.UTC_P13)
  );
});

test("day shift in IANATimeZone 2013_03_13_13_26", () => {
  jest.setSystemTime(new Date(DATES.DATE_2013_03_13_13_26));
  expect(isDayShiftIn(TZ.UTC_M11)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M11)).toEqual(
    !isEveningShiftIn(TZ.UTC_M11) && !isNightShiftIn(TZ.UTC_M11)
  );
  expect(isDayShiftIn(TZ.UTC_M10)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M10)).toEqual(
    !isEveningShiftIn(TZ.UTC_M10) && !isNightShiftIn(TZ.UTC_M10)
  );
  expect(isDayShiftIn(TZ.UTC_M930)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M930)).toEqual(
    !isEveningShiftIn(TZ.UTC_M930) && !isNightShiftIn(TZ.UTC_M930)
  );
  expect(isDayShiftIn(TZ.UTC_M9)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M9)).toEqual(
    !isEveningShiftIn(TZ.UTC_M9) && !isNightShiftIn(TZ.UTC_M9)
  );
  expect(isDayShiftIn(TZ.UTC_M8)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M8)).toEqual(
    !isEveningShiftIn(TZ.UTC_M8) && !isNightShiftIn(TZ.UTC_M8)
  );
  expect(isDayShiftIn(TZ.UTC_M7)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M7)).toEqual(
    !isEveningShiftIn(TZ.UTC_M7) && !isNightShiftIn(TZ.UTC_M7)
  );
  expect(isDayShiftIn(TZ.UTC_M6)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M6)).toEqual(
    !isEveningShiftIn(TZ.UTC_M6) && !isNightShiftIn(TZ.UTC_M6)
  );
  expect(isDayShiftIn(TZ.UTC_M5)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M5)).toEqual(
    !isEveningShiftIn(TZ.UTC_M5) && !isNightShiftIn(TZ.UTC_M5)
  );
  expect(isDayShiftIn(TZ.UTC_M4)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M4)).toEqual(
    !isEveningShiftIn(TZ.UTC_M4) && !isNightShiftIn(TZ.UTC_M4)
  );
  expect(isDayShiftIn(TZ.UTC_M330)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M330)).toEqual(
    !isEveningShiftIn(TZ.UTC_M330) && !isNightShiftIn(TZ.UTC_M330)
  );
  expect(isDayShiftIn(TZ.UTC_M3)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M3)).toEqual(
    !isEveningShiftIn(TZ.UTC_M3) && !isNightShiftIn(TZ.UTC_M3)
  );
  expect(isDayShiftIn(TZ.UTC_M2)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M2)).toEqual(
    !isEveningShiftIn(TZ.UTC_M2) && !isNightShiftIn(TZ.UTC_M2)
  );
  expect(isDayShiftIn(TZ.UTC_M1)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M1)).toEqual(
    !isEveningShiftIn(TZ.UTC_M1) && !isNightShiftIn(TZ.UTC_M1)
  );
  expect(isDayShiftIn(TZ.UTC_0)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_0)).toEqual(
    !isEveningShiftIn(TZ.UTC_0) && !isNightShiftIn(TZ.UTC_0)
  );
  expect(isDayShiftIn(TZ.UTC_P1)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P1)).toEqual(
    !isEveningShiftIn(TZ.UTC_P1) && !isNightShiftIn(TZ.UTC_P1)
  );
  expect(isDayShiftIn(TZ.UTC_P2)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P2)).toEqual(
    !isEveningShiftIn(TZ.UTC_P2) && !isNightShiftIn(TZ.UTC_P2)
  );
  expect(isDayShiftIn(TZ.UTC_P3)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P3)).toEqual(
    !isEveningShiftIn(TZ.UTC_P3) && !isNightShiftIn(TZ.UTC_P3)
  );
  expect(isDayShiftIn(TZ.UTC_P330)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P330)).toEqual(
    !isEveningShiftIn(TZ.UTC_P330) && !isNightShiftIn(TZ.UTC_P330)
  );
  expect(isDayShiftIn(TZ.UTC_P4)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P4)).toEqual(
    !isEveningShiftIn(TZ.UTC_P4) && !isNightShiftIn(TZ.UTC_P4)
  );
  expect(isDayShiftIn(TZ.UTC_P430)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P430)).toEqual(
    !isEveningShiftIn(TZ.UTC_P430) && !isNightShiftIn(TZ.UTC_P430)
  );
  expect(isDayShiftIn(TZ.UTC_P5)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P5)).toEqual(
    !isEveningShiftIn(TZ.UTC_P5) && !isNightShiftIn(TZ.UTC_P5)
  );
  expect(isDayShiftIn(TZ.UTC_P530)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P530)).toEqual(
    !isEveningShiftIn(TZ.UTC_P530) && !isNightShiftIn(TZ.UTC_P530)
  );
  expect(isDayShiftIn(TZ.UTC_P545)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P545)).toEqual(
    !isEveningShiftIn(TZ.UTC_P545) && !isNightShiftIn(TZ.UTC_P545)
  );
  expect(isDayShiftIn(TZ.UTC_P6)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P6)).toEqual(
    !isEveningShiftIn(TZ.UTC_P6) && !isNightShiftIn(TZ.UTC_P6)
  );
  expect(isDayShiftIn(TZ.UTC_P630)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P630)).toEqual(
    !isEveningShiftIn(TZ.UTC_P630) && !isNightShiftIn(TZ.UTC_P630)
  );
  expect(isDayShiftIn(TZ.UTC_P7)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P7)).toEqual(
    !isEveningShiftIn(TZ.UTC_P7) && !isNightShiftIn(TZ.UTC_P7)
  );
  expect(isDayShiftIn(TZ.UTC_P8)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P8)).toEqual(
    !isEveningShiftIn(TZ.UTC_P8) && !isNightShiftIn(TZ.UTC_P8)
  );
  expect(isDayShiftIn(TZ.UTC_P9)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P9)).toEqual(
    !isEveningShiftIn(TZ.UTC_P9) && !isNightShiftIn(TZ.UTC_P9)
  );
  expect(isDayShiftIn(TZ.UTC_P930)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P930)).toEqual(
    !isEveningShiftIn(TZ.UTC_P930) && !isNightShiftIn(TZ.UTC_P930)
  );
  expect(isDayShiftIn(TZ.UTC_P10)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P10)).toEqual(
    !isEveningShiftIn(TZ.UTC_P10) && !isNightShiftIn(TZ.UTC_P10)
  );
  expect(isDayShiftIn(TZ.UTC_P1030)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P1030)).toEqual(
    !isEveningShiftIn(TZ.UTC_P1030) && !isNightShiftIn(TZ.UTC_P1030)
  );
  expect(isDayShiftIn(TZ.UTC_P12)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P12)).toEqual(
    !isEveningShiftIn(TZ.UTC_P12) && !isNightShiftIn(TZ.UTC_P12)
  );
  expect(isDayShiftIn(TZ.UTC_P1245)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P1245)).toEqual(
    !isEveningShiftIn(TZ.UTC_P1245) && !isNightShiftIn(TZ.UTC_P1245)
  );
  expect(isDayShiftIn(TZ.UTC_P13)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P13)).toEqual(
    !isEveningShiftIn(TZ.UTC_P13) && !isNightShiftIn(TZ.UTC_P13)
  );
});

test("day shift in IANATimeZone 2014_04_14_14_28", () => {
  jest.setSystemTime(new Date(DATES.DATE_2014_04_14_14_28));
  expect(isDayShiftIn(TZ.UTC_M11)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M11)).toEqual(
    !isEveningShiftIn(TZ.UTC_M11) && !isNightShiftIn(TZ.UTC_M11)
  );
  expect(isDayShiftIn(TZ.UTC_M10)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M10)).toEqual(
    !isEveningShiftIn(TZ.UTC_M10) && !isNightShiftIn(TZ.UTC_M10)
  );
  expect(isDayShiftIn(TZ.UTC_M930)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M930)).toEqual(
    !isEveningShiftIn(TZ.UTC_M930) && !isNightShiftIn(TZ.UTC_M930)
  );
  expect(isDayShiftIn(TZ.UTC_M9)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M9)).toEqual(
    !isEveningShiftIn(TZ.UTC_M9) && !isNightShiftIn(TZ.UTC_M9)
  );
  expect(isDayShiftIn(TZ.UTC_M8)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M8)).toEqual(
    !isEveningShiftIn(TZ.UTC_M8) && !isNightShiftIn(TZ.UTC_M8)
  );
  expect(isDayShiftIn(TZ.UTC_M7)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M7)).toEqual(
    !isEveningShiftIn(TZ.UTC_M7) && !isNightShiftIn(TZ.UTC_M7)
  );
  expect(isDayShiftIn(TZ.UTC_M6)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M6)).toEqual(
    !isEveningShiftIn(TZ.UTC_M6) && !isNightShiftIn(TZ.UTC_M6)
  );
  expect(isDayShiftIn(TZ.UTC_M5)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M5)).toEqual(
    !isEveningShiftIn(TZ.UTC_M5) && !isNightShiftIn(TZ.UTC_M5)
  );
  expect(isDayShiftIn(TZ.UTC_M4)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M4)).toEqual(
    !isEveningShiftIn(TZ.UTC_M4) && !isNightShiftIn(TZ.UTC_M4)
  );
  expect(isDayShiftIn(TZ.UTC_M330)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M330)).toEqual(
    !isEveningShiftIn(TZ.UTC_M330) && !isNightShiftIn(TZ.UTC_M330)
  );
  expect(isDayShiftIn(TZ.UTC_M3)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M3)).toEqual(
    !isEveningShiftIn(TZ.UTC_M3) && !isNightShiftIn(TZ.UTC_M3)
  );
  expect(isDayShiftIn(TZ.UTC_M2)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M2)).toEqual(
    !isEveningShiftIn(TZ.UTC_M2) && !isNightShiftIn(TZ.UTC_M2)
  );
  expect(isDayShiftIn(TZ.UTC_M1)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M1)).toEqual(
    !isEveningShiftIn(TZ.UTC_M1) && !isNightShiftIn(TZ.UTC_M1)
  );
  expect(isDayShiftIn(TZ.UTC_0)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_0)).toEqual(
    !isEveningShiftIn(TZ.UTC_0) && !isNightShiftIn(TZ.UTC_0)
  );
  expect(isDayShiftIn(TZ.UTC_P1)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P1)).toEqual(
    !isEveningShiftIn(TZ.UTC_P1) && !isNightShiftIn(TZ.UTC_P1)
  );
  expect(isDayShiftIn(TZ.UTC_P2)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P2)).toEqual(
    !isEveningShiftIn(TZ.UTC_P2) && !isNightShiftIn(TZ.UTC_P2)
  );
  expect(isDayShiftIn(TZ.UTC_P3)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P3)).toEqual(
    !isEveningShiftIn(TZ.UTC_P3) && !isNightShiftIn(TZ.UTC_P3)
  );
  expect(isDayShiftIn(TZ.UTC_P330)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P330)).toEqual(
    !isEveningShiftIn(TZ.UTC_P330) && !isNightShiftIn(TZ.UTC_P330)
  );
  expect(isDayShiftIn(TZ.UTC_P4)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P4)).toEqual(
    !isEveningShiftIn(TZ.UTC_P4) && !isNightShiftIn(TZ.UTC_P4)
  );
  expect(isDayShiftIn(TZ.UTC_P430)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P430)).toEqual(
    !isEveningShiftIn(TZ.UTC_P430) && !isNightShiftIn(TZ.UTC_P430)
  );
  expect(isDayShiftIn(TZ.UTC_P5)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P5)).toEqual(
    !isEveningShiftIn(TZ.UTC_P5) && !isNightShiftIn(TZ.UTC_P5)
  );
  expect(isDayShiftIn(TZ.UTC_P530)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P530)).toEqual(
    !isEveningShiftIn(TZ.UTC_P530) && !isNightShiftIn(TZ.UTC_P530)
  );
  expect(isDayShiftIn(TZ.UTC_P545)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P545)).toEqual(
    !isEveningShiftIn(TZ.UTC_P545) && !isNightShiftIn(TZ.UTC_P545)
  );
  expect(isDayShiftIn(TZ.UTC_P6)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P6)).toEqual(
    !isEveningShiftIn(TZ.UTC_P6) && !isNightShiftIn(TZ.UTC_P6)
  );
  expect(isDayShiftIn(TZ.UTC_P630)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P630)).toEqual(
    !isEveningShiftIn(TZ.UTC_P630) && !isNightShiftIn(TZ.UTC_P630)
  );
  expect(isDayShiftIn(TZ.UTC_P7)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P7)).toEqual(
    !isEveningShiftIn(TZ.UTC_P7) && !isNightShiftIn(TZ.UTC_P7)
  );
  expect(isDayShiftIn(TZ.UTC_P8)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P8)).toEqual(
    !isEveningShiftIn(TZ.UTC_P8) && !isNightShiftIn(TZ.UTC_P8)
  );
  expect(isDayShiftIn(TZ.UTC_P9)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P9)).toEqual(
    !isEveningShiftIn(TZ.UTC_P9) && !isNightShiftIn(TZ.UTC_P9)
  );
  expect(isDayShiftIn(TZ.UTC_P930)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P930)).toEqual(
    !isEveningShiftIn(TZ.UTC_P930) && !isNightShiftIn(TZ.UTC_P930)
  );
  expect(isDayShiftIn(TZ.UTC_P10)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P10)).toEqual(
    !isEveningShiftIn(TZ.UTC_P10) && !isNightShiftIn(TZ.UTC_P10)
  );
  expect(isDayShiftIn(TZ.UTC_P1030)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P1030)).toEqual(
    !isEveningShiftIn(TZ.UTC_P1030) && !isNightShiftIn(TZ.UTC_P1030)
  );
  expect(isDayShiftIn(TZ.UTC_P12)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P12)).toEqual(
    !isEveningShiftIn(TZ.UTC_P12) && !isNightShiftIn(TZ.UTC_P12)
  );
  expect(isDayShiftIn(TZ.UTC_P1245)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P1245)).toEqual(
    !isEveningShiftIn(TZ.UTC_P1245) && !isNightShiftIn(TZ.UTC_P1245)
  );
  expect(isDayShiftIn(TZ.UTC_P13)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P13)).toEqual(
    !isEveningShiftIn(TZ.UTC_P13) && !isNightShiftIn(TZ.UTC_P13)
  );
});

test("day shift in IANATimeZone 2015_05_15_15_30", () => {
  jest.setSystemTime(new Date(DATES.DATE_2015_05_15_15_30));
  expect(isDayShiftIn(TZ.UTC_M11)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M11)).toEqual(
    !isEveningShiftIn(TZ.UTC_M11) && !isNightShiftIn(TZ.UTC_M11)
  );
  expect(isDayShiftIn(TZ.UTC_M10)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M10)).toEqual(
    !isEveningShiftIn(TZ.UTC_M10) && !isNightShiftIn(TZ.UTC_M10)
  );
  expect(isDayShiftIn(TZ.UTC_M930)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M930)).toEqual(
    !isEveningShiftIn(TZ.UTC_M930) && !isNightShiftIn(TZ.UTC_M930)
  );
  expect(isDayShiftIn(TZ.UTC_M9)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M9)).toEqual(
    !isEveningShiftIn(TZ.UTC_M9) && !isNightShiftIn(TZ.UTC_M9)
  );
  expect(isDayShiftIn(TZ.UTC_M8)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M8)).toEqual(
    !isEveningShiftIn(TZ.UTC_M8) && !isNightShiftIn(TZ.UTC_M8)
  );
  expect(isDayShiftIn(TZ.UTC_M7)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M7)).toEqual(
    !isEveningShiftIn(TZ.UTC_M7) && !isNightShiftIn(TZ.UTC_M7)
  );
  expect(isDayShiftIn(TZ.UTC_M6)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M6)).toEqual(
    !isEveningShiftIn(TZ.UTC_M6) && !isNightShiftIn(TZ.UTC_M6)
  );
  expect(isDayShiftIn(TZ.UTC_M5)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M5)).toEqual(
    !isEveningShiftIn(TZ.UTC_M5) && !isNightShiftIn(TZ.UTC_M5)
  );
  expect(isDayShiftIn(TZ.UTC_M4)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M4)).toEqual(
    !isEveningShiftIn(TZ.UTC_M4) && !isNightShiftIn(TZ.UTC_M4)
  );
  expect(isDayShiftIn(TZ.UTC_M330)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M330)).toEqual(
    !isEveningShiftIn(TZ.UTC_M330) && !isNightShiftIn(TZ.UTC_M330)
  );
  expect(isDayShiftIn(TZ.UTC_M3)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M3)).toEqual(
    !isEveningShiftIn(TZ.UTC_M3) && !isNightShiftIn(TZ.UTC_M3)
  );
  expect(isDayShiftIn(TZ.UTC_M2)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M2)).toEqual(
    !isEveningShiftIn(TZ.UTC_M2) && !isNightShiftIn(TZ.UTC_M2)
  );
  expect(isDayShiftIn(TZ.UTC_M1)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M1)).toEqual(
    !isEveningShiftIn(TZ.UTC_M1) && !isNightShiftIn(TZ.UTC_M1)
  );
  expect(isDayShiftIn(TZ.UTC_0)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_0)).toEqual(
    !isEveningShiftIn(TZ.UTC_0) && !isNightShiftIn(TZ.UTC_0)
  );
  expect(isDayShiftIn(TZ.UTC_P1)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P1)).toEqual(
    !isEveningShiftIn(TZ.UTC_P1) && !isNightShiftIn(TZ.UTC_P1)
  );
  expect(isDayShiftIn(TZ.UTC_P2)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P2)).toEqual(
    !isEveningShiftIn(TZ.UTC_P2) && !isNightShiftIn(TZ.UTC_P2)
  );
  expect(isDayShiftIn(TZ.UTC_P3)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P3)).toEqual(
    !isEveningShiftIn(TZ.UTC_P3) && !isNightShiftIn(TZ.UTC_P3)
  );
  expect(isDayShiftIn(TZ.UTC_P330)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P330)).toEqual(
    !isEveningShiftIn(TZ.UTC_P330) && !isNightShiftIn(TZ.UTC_P330)
  );
  expect(isDayShiftIn(TZ.UTC_P4)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P4)).toEqual(
    !isEveningShiftIn(TZ.UTC_P4) && !isNightShiftIn(TZ.UTC_P4)
  );
  expect(isDayShiftIn(TZ.UTC_P430)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P430)).toEqual(
    !isEveningShiftIn(TZ.UTC_P430) && !isNightShiftIn(TZ.UTC_P430)
  );
  expect(isDayShiftIn(TZ.UTC_P5)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P5)).toEqual(
    !isEveningShiftIn(TZ.UTC_P5) && !isNightShiftIn(TZ.UTC_P5)
  );
  expect(isDayShiftIn(TZ.UTC_P530)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P530)).toEqual(
    !isEveningShiftIn(TZ.UTC_P530) && !isNightShiftIn(TZ.UTC_P530)
  );
  expect(isDayShiftIn(TZ.UTC_P545)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P545)).toEqual(
    !isEveningShiftIn(TZ.UTC_P545) && !isNightShiftIn(TZ.UTC_P545)
  );
  expect(isDayShiftIn(TZ.UTC_P6)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P6)).toEqual(
    !isEveningShiftIn(TZ.UTC_P6) && !isNightShiftIn(TZ.UTC_P6)
  );
  expect(isDayShiftIn(TZ.UTC_P630)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P630)).toEqual(
    !isEveningShiftIn(TZ.UTC_P630) && !isNightShiftIn(TZ.UTC_P630)
  );
  expect(isDayShiftIn(TZ.UTC_P7)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P7)).toEqual(
    !isEveningShiftIn(TZ.UTC_P7) && !isNightShiftIn(TZ.UTC_P7)
  );
  expect(isDayShiftIn(TZ.UTC_P8)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P8)).toEqual(
    !isEveningShiftIn(TZ.UTC_P8) && !isNightShiftIn(TZ.UTC_P8)
  );
  expect(isDayShiftIn(TZ.UTC_P9)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P9)).toEqual(
    !isEveningShiftIn(TZ.UTC_P9) && !isNightShiftIn(TZ.UTC_P9)
  );
  expect(isDayShiftIn(TZ.UTC_P930)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P930)).toEqual(
    !isEveningShiftIn(TZ.UTC_P930) && !isNightShiftIn(TZ.UTC_P930)
  );
  expect(isDayShiftIn(TZ.UTC_P10)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P10)).toEqual(
    !isEveningShiftIn(TZ.UTC_P10) && !isNightShiftIn(TZ.UTC_P10)
  );
  expect(isDayShiftIn(TZ.UTC_P1030)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P1030)).toEqual(
    !isEveningShiftIn(TZ.UTC_P1030) && !isNightShiftIn(TZ.UTC_P1030)
  );
  expect(isDayShiftIn(TZ.UTC_P12)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P12)).toEqual(
    !isEveningShiftIn(TZ.UTC_P12) && !isNightShiftIn(TZ.UTC_P12)
  );
  expect(isDayShiftIn(TZ.UTC_P1245)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P1245)).toEqual(
    !isEveningShiftIn(TZ.UTC_P1245) && !isNightShiftIn(TZ.UTC_P1245)
  );
  expect(isDayShiftIn(TZ.UTC_P13)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P13)).toEqual(
    !isEveningShiftIn(TZ.UTC_P13) && !isNightShiftIn(TZ.UTC_P13)
  );
});

test("day shift in IANATimeZone 2016_06_16_16_32", () => {
  jest.setSystemTime(new Date(DATES.DATE_2016_06_16_16_32));
  expect(isDayShiftIn(TZ.UTC_M11)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M11)).toEqual(
    !isEveningShiftIn(TZ.UTC_M11) && !isNightShiftIn(TZ.UTC_M11)
  );
  expect(isDayShiftIn(TZ.UTC_M10)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M10)).toEqual(
    !isEveningShiftIn(TZ.UTC_M10) && !isNightShiftIn(TZ.UTC_M10)
  );
  expect(isDayShiftIn(TZ.UTC_M930)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M930)).toEqual(
    !isEveningShiftIn(TZ.UTC_M930) && !isNightShiftIn(TZ.UTC_M930)
  );
  expect(isDayShiftIn(TZ.UTC_M9)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M9)).toEqual(
    !isEveningShiftIn(TZ.UTC_M9) && !isNightShiftIn(TZ.UTC_M9)
  );
  expect(isDayShiftIn(TZ.UTC_M8)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M8)).toEqual(
    !isEveningShiftIn(TZ.UTC_M8) && !isNightShiftIn(TZ.UTC_M8)
  );
  expect(isDayShiftIn(TZ.UTC_M7)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M7)).toEqual(
    !isEveningShiftIn(TZ.UTC_M7) && !isNightShiftIn(TZ.UTC_M7)
  );
  expect(isDayShiftIn(TZ.UTC_M6)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M6)).toEqual(
    !isEveningShiftIn(TZ.UTC_M6) && !isNightShiftIn(TZ.UTC_M6)
  );
  expect(isDayShiftIn(TZ.UTC_M5)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M5)).toEqual(
    !isEveningShiftIn(TZ.UTC_M5) && !isNightShiftIn(TZ.UTC_M5)
  );
  expect(isDayShiftIn(TZ.UTC_M4)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M4)).toEqual(
    !isEveningShiftIn(TZ.UTC_M4) && !isNightShiftIn(TZ.UTC_M4)
  );
  expect(isDayShiftIn(TZ.UTC_M330)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M330)).toEqual(
    !isEveningShiftIn(TZ.UTC_M330) && !isNightShiftIn(TZ.UTC_M330)
  );
  expect(isDayShiftIn(TZ.UTC_M3)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M3)).toEqual(
    !isEveningShiftIn(TZ.UTC_M3) && !isNightShiftIn(TZ.UTC_M3)
  );
  expect(isDayShiftIn(TZ.UTC_M2)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M2)).toEqual(
    !isEveningShiftIn(TZ.UTC_M2) && !isNightShiftIn(TZ.UTC_M2)
  );
  expect(isDayShiftIn(TZ.UTC_M1)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M1)).toEqual(
    !isEveningShiftIn(TZ.UTC_M1) && !isNightShiftIn(TZ.UTC_M1)
  );
  expect(isDayShiftIn(TZ.UTC_0)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_0)).toEqual(
    !isEveningShiftIn(TZ.UTC_0) && !isNightShiftIn(TZ.UTC_0)
  );
  expect(isDayShiftIn(TZ.UTC_P1)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P1)).toEqual(
    !isEveningShiftIn(TZ.UTC_P1) && !isNightShiftIn(TZ.UTC_P1)
  );
  expect(isDayShiftIn(TZ.UTC_P2)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P2)).toEqual(
    !isEveningShiftIn(TZ.UTC_P2) && !isNightShiftIn(TZ.UTC_P2)
  );
  expect(isDayShiftIn(TZ.UTC_P3)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P3)).toEqual(
    !isEveningShiftIn(TZ.UTC_P3) && !isNightShiftIn(TZ.UTC_P3)
  );
  expect(isDayShiftIn(TZ.UTC_P330)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P330)).toEqual(
    !isEveningShiftIn(TZ.UTC_P330) && !isNightShiftIn(TZ.UTC_P330)
  );
  expect(isDayShiftIn(TZ.UTC_P4)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P4)).toEqual(
    !isEveningShiftIn(TZ.UTC_P4) && !isNightShiftIn(TZ.UTC_P4)
  );
  expect(isDayShiftIn(TZ.UTC_P430)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P430)).toEqual(
    !isEveningShiftIn(TZ.UTC_P430) && !isNightShiftIn(TZ.UTC_P430)
  );
  expect(isDayShiftIn(TZ.UTC_P5)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P5)).toEqual(
    !isEveningShiftIn(TZ.UTC_P5) && !isNightShiftIn(TZ.UTC_P5)
  );
  expect(isDayShiftIn(TZ.UTC_P530)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P530)).toEqual(
    !isEveningShiftIn(TZ.UTC_P530) && !isNightShiftIn(TZ.UTC_P530)
  );
  expect(isDayShiftIn(TZ.UTC_P545)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P545)).toEqual(
    !isEveningShiftIn(TZ.UTC_P545) && !isNightShiftIn(TZ.UTC_P545)
  );
  expect(isDayShiftIn(TZ.UTC_P6)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P6)).toEqual(
    !isEveningShiftIn(TZ.UTC_P6) && !isNightShiftIn(TZ.UTC_P6)
  );
  expect(isDayShiftIn(TZ.UTC_P630)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P630)).toEqual(
    !isEveningShiftIn(TZ.UTC_P630) && !isNightShiftIn(TZ.UTC_P630)
  );
  expect(isDayShiftIn(TZ.UTC_P7)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P7)).toEqual(
    !isEveningShiftIn(TZ.UTC_P7) && !isNightShiftIn(TZ.UTC_P7)
  );
  expect(isDayShiftIn(TZ.UTC_P8)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P8)).toEqual(
    !isEveningShiftIn(TZ.UTC_P8) && !isNightShiftIn(TZ.UTC_P8)
  );
  expect(isDayShiftIn(TZ.UTC_P9)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P9)).toEqual(
    !isEveningShiftIn(TZ.UTC_P9) && !isNightShiftIn(TZ.UTC_P9)
  );
  expect(isDayShiftIn(TZ.UTC_P930)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P930)).toEqual(
    !isEveningShiftIn(TZ.UTC_P930) && !isNightShiftIn(TZ.UTC_P930)
  );
  expect(isDayShiftIn(TZ.UTC_P10)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P10)).toEqual(
    !isEveningShiftIn(TZ.UTC_P10) && !isNightShiftIn(TZ.UTC_P10)
  );
  expect(isDayShiftIn(TZ.UTC_P1030)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P1030)).toEqual(
    !isEveningShiftIn(TZ.UTC_P1030) && !isNightShiftIn(TZ.UTC_P1030)
  );
  expect(isDayShiftIn(TZ.UTC_P12)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P12)).toEqual(
    !isEveningShiftIn(TZ.UTC_P12) && !isNightShiftIn(TZ.UTC_P12)
  );
  expect(isDayShiftIn(TZ.UTC_P1245)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P1245)).toEqual(
    !isEveningShiftIn(TZ.UTC_P1245) && !isNightShiftIn(TZ.UTC_P1245)
  );
  expect(isDayShiftIn(TZ.UTC_P13)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P13)).toEqual(
    !isEveningShiftIn(TZ.UTC_P13) && !isNightShiftIn(TZ.UTC_P13)
  );
});

test("day shift in IANATimeZone 2017_07_17_17_34", () => {
  jest.setSystemTime(new Date(DATES.DATE_2017_07_17_17_34));
  expect(isDayShiftIn(TZ.UTC_M11)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M11)).toEqual(
    !isEveningShiftIn(TZ.UTC_M11) && !isNightShiftIn(TZ.UTC_M11)
  );
  expect(isDayShiftIn(TZ.UTC_M10)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M10)).toEqual(
    !isEveningShiftIn(TZ.UTC_M10) && !isNightShiftIn(TZ.UTC_M10)
  );
  expect(isDayShiftIn(TZ.UTC_M930)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M930)).toEqual(
    !isEveningShiftIn(TZ.UTC_M930) && !isNightShiftIn(TZ.UTC_M930)
  );
  expect(isDayShiftIn(TZ.UTC_M9)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M9)).toEqual(
    !isEveningShiftIn(TZ.UTC_M9) && !isNightShiftIn(TZ.UTC_M9)
  );
  expect(isDayShiftIn(TZ.UTC_M8)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M8)).toEqual(
    !isEveningShiftIn(TZ.UTC_M8) && !isNightShiftIn(TZ.UTC_M8)
  );
  expect(isDayShiftIn(TZ.UTC_M7)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M7)).toEqual(
    !isEveningShiftIn(TZ.UTC_M7) && !isNightShiftIn(TZ.UTC_M7)
  );
  expect(isDayShiftIn(TZ.UTC_M6)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M6)).toEqual(
    !isEveningShiftIn(TZ.UTC_M6) && !isNightShiftIn(TZ.UTC_M6)
  );
  expect(isDayShiftIn(TZ.UTC_M5)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M5)).toEqual(
    !isEveningShiftIn(TZ.UTC_M5) && !isNightShiftIn(TZ.UTC_M5)
  );
  expect(isDayShiftIn(TZ.UTC_M4)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M4)).toEqual(
    !isEveningShiftIn(TZ.UTC_M4) && !isNightShiftIn(TZ.UTC_M4)
  );
  expect(isDayShiftIn(TZ.UTC_M330)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M330)).toEqual(
    !isEveningShiftIn(TZ.UTC_M330) && !isNightShiftIn(TZ.UTC_M330)
  );
  expect(isDayShiftIn(TZ.UTC_M3)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M3)).toEqual(
    !isEveningShiftIn(TZ.UTC_M3) && !isNightShiftIn(TZ.UTC_M3)
  );
  expect(isDayShiftIn(TZ.UTC_M2)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M2)).toEqual(
    !isEveningShiftIn(TZ.UTC_M2) && !isNightShiftIn(TZ.UTC_M2)
  );
  expect(isDayShiftIn(TZ.UTC_M1)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M1)).toEqual(
    !isEveningShiftIn(TZ.UTC_M1) && !isNightShiftIn(TZ.UTC_M1)
  );
  expect(isDayShiftIn(TZ.UTC_0)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_0)).toEqual(
    !isEveningShiftIn(TZ.UTC_0) && !isNightShiftIn(TZ.UTC_0)
  );
  expect(isDayShiftIn(TZ.UTC_P1)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P1)).toEqual(
    !isEveningShiftIn(TZ.UTC_P1) && !isNightShiftIn(TZ.UTC_P1)
  );
  expect(isDayShiftIn(TZ.UTC_P2)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P2)).toEqual(
    !isEveningShiftIn(TZ.UTC_P2) && !isNightShiftIn(TZ.UTC_P2)
  );
  expect(isDayShiftIn(TZ.UTC_P3)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P3)).toEqual(
    !isEveningShiftIn(TZ.UTC_P3) && !isNightShiftIn(TZ.UTC_P3)
  );
  expect(isDayShiftIn(TZ.UTC_P330)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P330)).toEqual(
    !isEveningShiftIn(TZ.UTC_P330) && !isNightShiftIn(TZ.UTC_P330)
  );
  expect(isDayShiftIn(TZ.UTC_P4)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P4)).toEqual(
    !isEveningShiftIn(TZ.UTC_P4) && !isNightShiftIn(TZ.UTC_P4)
  );
  expect(isDayShiftIn(TZ.UTC_P430)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P430)).toEqual(
    !isEveningShiftIn(TZ.UTC_P430) && !isNightShiftIn(TZ.UTC_P430)
  );
  expect(isDayShiftIn(TZ.UTC_P5)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P5)).toEqual(
    !isEveningShiftIn(TZ.UTC_P5) && !isNightShiftIn(TZ.UTC_P5)
  );
  expect(isDayShiftIn(TZ.UTC_P530)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P530)).toEqual(
    !isEveningShiftIn(TZ.UTC_P530) && !isNightShiftIn(TZ.UTC_P530)
  );
  expect(isDayShiftIn(TZ.UTC_P545)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P545)).toEqual(
    !isEveningShiftIn(TZ.UTC_P545) && !isNightShiftIn(TZ.UTC_P545)
  );
  expect(isDayShiftIn(TZ.UTC_P6)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P6)).toEqual(
    !isEveningShiftIn(TZ.UTC_P6) && !isNightShiftIn(TZ.UTC_P6)
  );
  expect(isDayShiftIn(TZ.UTC_P630)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P630)).toEqual(
    !isEveningShiftIn(TZ.UTC_P630) && !isNightShiftIn(TZ.UTC_P630)
  );
  expect(isDayShiftIn(TZ.UTC_P7)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P7)).toEqual(
    !isEveningShiftIn(TZ.UTC_P7) && !isNightShiftIn(TZ.UTC_P7)
  );
  expect(isDayShiftIn(TZ.UTC_P8)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P8)).toEqual(
    !isEveningShiftIn(TZ.UTC_P8) && !isNightShiftIn(TZ.UTC_P8)
  );
  expect(isDayShiftIn(TZ.UTC_P9)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P9)).toEqual(
    !isEveningShiftIn(TZ.UTC_P9) && !isNightShiftIn(TZ.UTC_P9)
  );
  expect(isDayShiftIn(TZ.UTC_P930)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P930)).toEqual(
    !isEveningShiftIn(TZ.UTC_P930) && !isNightShiftIn(TZ.UTC_P930)
  );
  expect(isDayShiftIn(TZ.UTC_P10)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P10)).toEqual(
    !isEveningShiftIn(TZ.UTC_P10) && !isNightShiftIn(TZ.UTC_P10)
  );
  expect(isDayShiftIn(TZ.UTC_P1030)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P1030)).toEqual(
    !isEveningShiftIn(TZ.UTC_P1030) && !isNightShiftIn(TZ.UTC_P1030)
  );
  expect(isDayShiftIn(TZ.UTC_P12)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P12)).toEqual(
    !isEveningShiftIn(TZ.UTC_P12) && !isNightShiftIn(TZ.UTC_P12)
  );
  expect(isDayShiftIn(TZ.UTC_P1245)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P1245)).toEqual(
    !isEveningShiftIn(TZ.UTC_P1245) && !isNightShiftIn(TZ.UTC_P1245)
  );
  expect(isDayShiftIn(TZ.UTC_P13)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P13)).toEqual(
    !isEveningShiftIn(TZ.UTC_P13) && !isNightShiftIn(TZ.UTC_P13)
  );
});

test("day shift in IANATimeZone 2018_08_18_18_36", () => {
  jest.setSystemTime(new Date(DATES.DATE_2018_08_18_18_36));
  expect(isDayShiftIn(TZ.UTC_M11)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M11)).toEqual(
    !isEveningShiftIn(TZ.UTC_M11) && !isNightShiftIn(TZ.UTC_M11)
  );
  expect(isDayShiftIn(TZ.UTC_M10)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M10)).toEqual(
    !isEveningShiftIn(TZ.UTC_M10) && !isNightShiftIn(TZ.UTC_M10)
  );
  expect(isDayShiftIn(TZ.UTC_M930)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M930)).toEqual(
    !isEveningShiftIn(TZ.UTC_M930) && !isNightShiftIn(TZ.UTC_M930)
  );
  expect(isDayShiftIn(TZ.UTC_M9)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M9)).toEqual(
    !isEveningShiftIn(TZ.UTC_M9) && !isNightShiftIn(TZ.UTC_M9)
  );
  expect(isDayShiftIn(TZ.UTC_M8)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M8)).toEqual(
    !isEveningShiftIn(TZ.UTC_M8) && !isNightShiftIn(TZ.UTC_M8)
  );
  expect(isDayShiftIn(TZ.UTC_M7)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M7)).toEqual(
    !isEveningShiftIn(TZ.UTC_M7) && !isNightShiftIn(TZ.UTC_M7)
  );
  expect(isDayShiftIn(TZ.UTC_M6)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M6)).toEqual(
    !isEveningShiftIn(TZ.UTC_M6) && !isNightShiftIn(TZ.UTC_M6)
  );
  expect(isDayShiftIn(TZ.UTC_M5)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M5)).toEqual(
    !isEveningShiftIn(TZ.UTC_M5) && !isNightShiftIn(TZ.UTC_M5)
  );
  expect(isDayShiftIn(TZ.UTC_M4)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M4)).toEqual(
    !isEveningShiftIn(TZ.UTC_M4) && !isNightShiftIn(TZ.UTC_M4)
  );
  expect(isDayShiftIn(TZ.UTC_M330)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M330)).toEqual(
    !isEveningShiftIn(TZ.UTC_M330) && !isNightShiftIn(TZ.UTC_M330)
  );
  expect(isDayShiftIn(TZ.UTC_M3)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M3)).toEqual(
    !isEveningShiftIn(TZ.UTC_M3) && !isNightShiftIn(TZ.UTC_M3)
  );
  expect(isDayShiftIn(TZ.UTC_M2)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M2)).toEqual(
    !isEveningShiftIn(TZ.UTC_M2) && !isNightShiftIn(TZ.UTC_M2)
  );
  expect(isDayShiftIn(TZ.UTC_M1)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M1)).toEqual(
    !isEveningShiftIn(TZ.UTC_M1) && !isNightShiftIn(TZ.UTC_M1)
  );
  expect(isDayShiftIn(TZ.UTC_0)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_0)).toEqual(
    !isEveningShiftIn(TZ.UTC_0) && !isNightShiftIn(TZ.UTC_0)
  );
  expect(isDayShiftIn(TZ.UTC_P1)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P1)).toEqual(
    !isEveningShiftIn(TZ.UTC_P1) && !isNightShiftIn(TZ.UTC_P1)
  );
  expect(isDayShiftIn(TZ.UTC_P2)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P2)).toEqual(
    !isEveningShiftIn(TZ.UTC_P2) && !isNightShiftIn(TZ.UTC_P2)
  );
  expect(isDayShiftIn(TZ.UTC_P3)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P3)).toEqual(
    !isEveningShiftIn(TZ.UTC_P3) && !isNightShiftIn(TZ.UTC_P3)
  );
  expect(isDayShiftIn(TZ.UTC_P330)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P330)).toEqual(
    !isEveningShiftIn(TZ.UTC_P330) && !isNightShiftIn(TZ.UTC_P330)
  );
  expect(isDayShiftIn(TZ.UTC_P4)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P4)).toEqual(
    !isEveningShiftIn(TZ.UTC_P4) && !isNightShiftIn(TZ.UTC_P4)
  );
  expect(isDayShiftIn(TZ.UTC_P430)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P430)).toEqual(
    !isEveningShiftIn(TZ.UTC_P430) && !isNightShiftIn(TZ.UTC_P430)
  );
  expect(isDayShiftIn(TZ.UTC_P5)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P5)).toEqual(
    !isEveningShiftIn(TZ.UTC_P5) && !isNightShiftIn(TZ.UTC_P5)
  );
  expect(isDayShiftIn(TZ.UTC_P530)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P530)).toEqual(
    !isEveningShiftIn(TZ.UTC_P530) && !isNightShiftIn(TZ.UTC_P530)
  );
  expect(isDayShiftIn(TZ.UTC_P545)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P545)).toEqual(
    !isEveningShiftIn(TZ.UTC_P545) && !isNightShiftIn(TZ.UTC_P545)
  );
  expect(isDayShiftIn(TZ.UTC_P6)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P6)).toEqual(
    !isEveningShiftIn(TZ.UTC_P6) && !isNightShiftIn(TZ.UTC_P6)
  );
  expect(isDayShiftIn(TZ.UTC_P630)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P630)).toEqual(
    !isEveningShiftIn(TZ.UTC_P630) && !isNightShiftIn(TZ.UTC_P630)
  );
  expect(isDayShiftIn(TZ.UTC_P7)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P7)).toEqual(
    !isEveningShiftIn(TZ.UTC_P7) && !isNightShiftIn(TZ.UTC_P7)
  );
  expect(isDayShiftIn(TZ.UTC_P8)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P8)).toEqual(
    !isEveningShiftIn(TZ.UTC_P8) && !isNightShiftIn(TZ.UTC_P8)
  );
  expect(isDayShiftIn(TZ.UTC_P9)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P9)).toEqual(
    !isEveningShiftIn(TZ.UTC_P9) && !isNightShiftIn(TZ.UTC_P9)
  );
  expect(isDayShiftIn(TZ.UTC_P930)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P930)).toEqual(
    !isEveningShiftIn(TZ.UTC_P930) && !isNightShiftIn(TZ.UTC_P930)
  );
  expect(isDayShiftIn(TZ.UTC_P10)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P10)).toEqual(
    !isEveningShiftIn(TZ.UTC_P10) && !isNightShiftIn(TZ.UTC_P10)
  );
  expect(isDayShiftIn(TZ.UTC_P1030)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P1030)).toEqual(
    !isEveningShiftIn(TZ.UTC_P1030) && !isNightShiftIn(TZ.UTC_P1030)
  );
  expect(isDayShiftIn(TZ.UTC_P12)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P12)).toEqual(
    !isEveningShiftIn(TZ.UTC_P12) && !isNightShiftIn(TZ.UTC_P12)
  );
  expect(isDayShiftIn(TZ.UTC_P1245)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P1245)).toEqual(
    !isEveningShiftIn(TZ.UTC_P1245) && !isNightShiftIn(TZ.UTC_P1245)
  );
  expect(isDayShiftIn(TZ.UTC_P13)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P13)).toEqual(
    !isEveningShiftIn(TZ.UTC_P13) && !isNightShiftIn(TZ.UTC_P13)
  );
});

test("day shift in IANATimeZone 2019_09_19_19_38", () => {
  jest.setSystemTime(new Date(DATES.DATE_2019_09_19_19_38));
  expect(isDayShiftIn(TZ.UTC_M11)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M11)).toEqual(
    !isEveningShiftIn(TZ.UTC_M11) && !isNightShiftIn(TZ.UTC_M11)
  );
  expect(isDayShiftIn(TZ.UTC_M10)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M10)).toEqual(
    !isEveningShiftIn(TZ.UTC_M10) && !isNightShiftIn(TZ.UTC_M10)
  );
  expect(isDayShiftIn(TZ.UTC_M930)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M930)).toEqual(
    !isEveningShiftIn(TZ.UTC_M930) && !isNightShiftIn(TZ.UTC_M930)
  );
  expect(isDayShiftIn(TZ.UTC_M9)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M9)).toEqual(
    !isEveningShiftIn(TZ.UTC_M9) && !isNightShiftIn(TZ.UTC_M9)
  );
  expect(isDayShiftIn(TZ.UTC_M8)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M8)).toEqual(
    !isEveningShiftIn(TZ.UTC_M8) && !isNightShiftIn(TZ.UTC_M8)
  );
  expect(isDayShiftIn(TZ.UTC_M7)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M7)).toEqual(
    !isEveningShiftIn(TZ.UTC_M7) && !isNightShiftIn(TZ.UTC_M7)
  );
  expect(isDayShiftIn(TZ.UTC_M6)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M6)).toEqual(
    !isEveningShiftIn(TZ.UTC_M6) && !isNightShiftIn(TZ.UTC_M6)
  );
  expect(isDayShiftIn(TZ.UTC_M5)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M5)).toEqual(
    !isEveningShiftIn(TZ.UTC_M5) && !isNightShiftIn(TZ.UTC_M5)
  );
  expect(isDayShiftIn(TZ.UTC_M4)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M4)).toEqual(
    !isEveningShiftIn(TZ.UTC_M4) && !isNightShiftIn(TZ.UTC_M4)
  );
  expect(isDayShiftIn(TZ.UTC_M330)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M330)).toEqual(
    !isEveningShiftIn(TZ.UTC_M330) && !isNightShiftIn(TZ.UTC_M330)
  );
  expect(isDayShiftIn(TZ.UTC_M3)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M3)).toEqual(
    !isEveningShiftIn(TZ.UTC_M3) && !isNightShiftIn(TZ.UTC_M3)
  );
  expect(isDayShiftIn(TZ.UTC_M2)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M2)).toEqual(
    !isEveningShiftIn(TZ.UTC_M2) && !isNightShiftIn(TZ.UTC_M2)
  );
  expect(isDayShiftIn(TZ.UTC_M1)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M1)).toEqual(
    !isEveningShiftIn(TZ.UTC_M1) && !isNightShiftIn(TZ.UTC_M1)
  );
  expect(isDayShiftIn(TZ.UTC_0)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_0)).toEqual(
    !isEveningShiftIn(TZ.UTC_0) && !isNightShiftIn(TZ.UTC_0)
  );
  expect(isDayShiftIn(TZ.UTC_P1)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P1)).toEqual(
    !isEveningShiftIn(TZ.UTC_P1) && !isNightShiftIn(TZ.UTC_P1)
  );
  expect(isDayShiftIn(TZ.UTC_P2)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P2)).toEqual(
    !isEveningShiftIn(TZ.UTC_P2) && !isNightShiftIn(TZ.UTC_P2)
  );
  expect(isDayShiftIn(TZ.UTC_P3)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P3)).toEqual(
    !isEveningShiftIn(TZ.UTC_P3) && !isNightShiftIn(TZ.UTC_P3)
  );
  expect(isDayShiftIn(TZ.UTC_P330)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P330)).toEqual(
    !isEveningShiftIn(TZ.UTC_P330) && !isNightShiftIn(TZ.UTC_P330)
  );
  expect(isDayShiftIn(TZ.UTC_P4)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P4)).toEqual(
    !isEveningShiftIn(TZ.UTC_P4) && !isNightShiftIn(TZ.UTC_P4)
  );
  expect(isDayShiftIn(TZ.UTC_P430)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P430)).toEqual(
    !isEveningShiftIn(TZ.UTC_P430) && !isNightShiftIn(TZ.UTC_P430)
  );
  expect(isDayShiftIn(TZ.UTC_P5)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P5)).toEqual(
    !isEveningShiftIn(TZ.UTC_P5) && !isNightShiftIn(TZ.UTC_P5)
  );
  expect(isDayShiftIn(TZ.UTC_P530)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P530)).toEqual(
    !isEveningShiftIn(TZ.UTC_P530) && !isNightShiftIn(TZ.UTC_P530)
  );
  expect(isDayShiftIn(TZ.UTC_P545)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P545)).toEqual(
    !isEveningShiftIn(TZ.UTC_P545) && !isNightShiftIn(TZ.UTC_P545)
  );
  expect(isDayShiftIn(TZ.UTC_P6)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P6)).toEqual(
    !isEveningShiftIn(TZ.UTC_P6) && !isNightShiftIn(TZ.UTC_P6)
  );
  expect(isDayShiftIn(TZ.UTC_P630)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P630)).toEqual(
    !isEveningShiftIn(TZ.UTC_P630) && !isNightShiftIn(TZ.UTC_P630)
  );
  expect(isDayShiftIn(TZ.UTC_P7)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P7)).toEqual(
    !isEveningShiftIn(TZ.UTC_P7) && !isNightShiftIn(TZ.UTC_P7)
  );
  expect(isDayShiftIn(TZ.UTC_P8)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P8)).toEqual(
    !isEveningShiftIn(TZ.UTC_P8) && !isNightShiftIn(TZ.UTC_P8)
  );
  expect(isDayShiftIn(TZ.UTC_P9)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P9)).toEqual(
    !isEveningShiftIn(TZ.UTC_P9) && !isNightShiftIn(TZ.UTC_P9)
  );
  expect(isDayShiftIn(TZ.UTC_P930)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P930)).toEqual(
    !isEveningShiftIn(TZ.UTC_P930) && !isNightShiftIn(TZ.UTC_P930)
  );
  expect(isDayShiftIn(TZ.UTC_P10)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P10)).toEqual(
    !isEveningShiftIn(TZ.UTC_P10) && !isNightShiftIn(TZ.UTC_P10)
  );
  expect(isDayShiftIn(TZ.UTC_P1030)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P1030)).toEqual(
    !isEveningShiftIn(TZ.UTC_P1030) && !isNightShiftIn(TZ.UTC_P1030)
  );
  expect(isDayShiftIn(TZ.UTC_P12)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P12)).toEqual(
    !isEveningShiftIn(TZ.UTC_P12) && !isNightShiftIn(TZ.UTC_P12)
  );
  expect(isDayShiftIn(TZ.UTC_P1245)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P1245)).toEqual(
    !isEveningShiftIn(TZ.UTC_P1245) && !isNightShiftIn(TZ.UTC_P1245)
  );
  expect(isDayShiftIn(TZ.UTC_P13)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P13)).toEqual(
    !isEveningShiftIn(TZ.UTC_P13) && !isNightShiftIn(TZ.UTC_P13)
  );
});

test("day shift in IANATimeZone 2020_02_20_20_40", () => {
  jest.setSystemTime(new Date(DATES.DATE_2020_02_20_20_40));
  expect(isDayShiftIn(TZ.UTC_M11)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M11)).toEqual(
    !isEveningShiftIn(TZ.UTC_M11) && !isNightShiftIn(TZ.UTC_M11)
  );
  expect(isDayShiftIn(TZ.UTC_M10)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M10)).toEqual(
    !isEveningShiftIn(TZ.UTC_M10) && !isNightShiftIn(TZ.UTC_M10)
  );
  expect(isDayShiftIn(TZ.UTC_M930)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M930)).toEqual(
    !isEveningShiftIn(TZ.UTC_M930) && !isNightShiftIn(TZ.UTC_M930)
  );
  expect(isDayShiftIn(TZ.UTC_M9)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M9)).toEqual(
    !isEveningShiftIn(TZ.UTC_M9) && !isNightShiftIn(TZ.UTC_M9)
  );
  expect(isDayShiftIn(TZ.UTC_M8)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M8)).toEqual(
    !isEveningShiftIn(TZ.UTC_M8) && !isNightShiftIn(TZ.UTC_M8)
  );
  expect(isDayShiftIn(TZ.UTC_M7)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M7)).toEqual(
    !isEveningShiftIn(TZ.UTC_M7) && !isNightShiftIn(TZ.UTC_M7)
  );
  expect(isDayShiftIn(TZ.UTC_M6)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M6)).toEqual(
    !isEveningShiftIn(TZ.UTC_M6) && !isNightShiftIn(TZ.UTC_M6)
  );
  expect(isDayShiftIn(TZ.UTC_M5)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M5)).toEqual(
    !isEveningShiftIn(TZ.UTC_M5) && !isNightShiftIn(TZ.UTC_M5)
  );
  expect(isDayShiftIn(TZ.UTC_M4)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M4)).toEqual(
    !isEveningShiftIn(TZ.UTC_M4) && !isNightShiftIn(TZ.UTC_M4)
  );
  expect(isDayShiftIn(TZ.UTC_M330)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M330)).toEqual(
    !isEveningShiftIn(TZ.UTC_M330) && !isNightShiftIn(TZ.UTC_M330)
  );
  expect(isDayShiftIn(TZ.UTC_M3)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M3)).toEqual(
    !isEveningShiftIn(TZ.UTC_M3) && !isNightShiftIn(TZ.UTC_M3)
  );
  expect(isDayShiftIn(TZ.UTC_M2)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M2)).toEqual(
    !isEveningShiftIn(TZ.UTC_M2) && !isNightShiftIn(TZ.UTC_M2)
  );
  expect(isDayShiftIn(TZ.UTC_M1)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M1)).toEqual(
    !isEveningShiftIn(TZ.UTC_M1) && !isNightShiftIn(TZ.UTC_M1)
  );
  expect(isDayShiftIn(TZ.UTC_0)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_0)).toEqual(
    !isEveningShiftIn(TZ.UTC_0) && !isNightShiftIn(TZ.UTC_0)
  );
  expect(isDayShiftIn(TZ.UTC_P1)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P1)).toEqual(
    !isEveningShiftIn(TZ.UTC_P1) && !isNightShiftIn(TZ.UTC_P1)
  );
  expect(isDayShiftIn(TZ.UTC_P2)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P2)).toEqual(
    !isEveningShiftIn(TZ.UTC_P2) && !isNightShiftIn(TZ.UTC_P2)
  );
  expect(isDayShiftIn(TZ.UTC_P3)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P3)).toEqual(
    !isEveningShiftIn(TZ.UTC_P3) && !isNightShiftIn(TZ.UTC_P3)
  );
  expect(isDayShiftIn(TZ.UTC_P330)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P330)).toEqual(
    !isEveningShiftIn(TZ.UTC_P330) && !isNightShiftIn(TZ.UTC_P330)
  );
  expect(isDayShiftIn(TZ.UTC_P4)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P4)).toEqual(
    !isEveningShiftIn(TZ.UTC_P4) && !isNightShiftIn(TZ.UTC_P4)
  );
  expect(isDayShiftIn(TZ.UTC_P430)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P430)).toEqual(
    !isEveningShiftIn(TZ.UTC_P430) && !isNightShiftIn(TZ.UTC_P430)
  );
  expect(isDayShiftIn(TZ.UTC_P5)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P5)).toEqual(
    !isEveningShiftIn(TZ.UTC_P5) && !isNightShiftIn(TZ.UTC_P5)
  );
  expect(isDayShiftIn(TZ.UTC_P530)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P530)).toEqual(
    !isEveningShiftIn(TZ.UTC_P530) && !isNightShiftIn(TZ.UTC_P530)
  );
  expect(isDayShiftIn(TZ.UTC_P545)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P545)).toEqual(
    !isEveningShiftIn(TZ.UTC_P545) && !isNightShiftIn(TZ.UTC_P545)
  );
  expect(isDayShiftIn(TZ.UTC_P6)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P6)).toEqual(
    !isEveningShiftIn(TZ.UTC_P6) && !isNightShiftIn(TZ.UTC_P6)
  );
  expect(isDayShiftIn(TZ.UTC_P630)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P630)).toEqual(
    !isEveningShiftIn(TZ.UTC_P630) && !isNightShiftIn(TZ.UTC_P630)
  );
  expect(isDayShiftIn(TZ.UTC_P7)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P7)).toEqual(
    !isEveningShiftIn(TZ.UTC_P7) && !isNightShiftIn(TZ.UTC_P7)
  );
  expect(isDayShiftIn(TZ.UTC_P8)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P8)).toEqual(
    !isEveningShiftIn(TZ.UTC_P8) && !isNightShiftIn(TZ.UTC_P8)
  );
  expect(isDayShiftIn(TZ.UTC_P9)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P9)).toEqual(
    !isEveningShiftIn(TZ.UTC_P9) && !isNightShiftIn(TZ.UTC_P9)
  );
  expect(isDayShiftIn(TZ.UTC_P930)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P930)).toEqual(
    !isEveningShiftIn(TZ.UTC_P930) && !isNightShiftIn(TZ.UTC_P930)
  );
  expect(isDayShiftIn(TZ.UTC_P10)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P10)).toEqual(
    !isEveningShiftIn(TZ.UTC_P10) && !isNightShiftIn(TZ.UTC_P10)
  );
  expect(isDayShiftIn(TZ.UTC_P1030)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P1030)).toEqual(
    !isEveningShiftIn(TZ.UTC_P1030) && !isNightShiftIn(TZ.UTC_P1030)
  );
  expect(isDayShiftIn(TZ.UTC_P12)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P12)).toEqual(
    !isEveningShiftIn(TZ.UTC_P12) && !isNightShiftIn(TZ.UTC_P12)
  );
  expect(isDayShiftIn(TZ.UTC_P1245)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P1245)).toEqual(
    !isEveningShiftIn(TZ.UTC_P1245) && !isNightShiftIn(TZ.UTC_P1245)
  );
  expect(isDayShiftIn(TZ.UTC_P13)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P13)).toEqual(
    !isEveningShiftIn(TZ.UTC_P13) && !isNightShiftIn(TZ.UTC_P13)
  );
});

test("day shift in IANATimeZone 2021_01_21_21_42", () => {
  jest.setSystemTime(new Date(DATES.DATE_2021_01_21_21_42));
  expect(isDayShiftIn(TZ.UTC_M11)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M11)).toEqual(
    !isEveningShiftIn(TZ.UTC_M11) && !isNightShiftIn(TZ.UTC_M11)
  );
  expect(isDayShiftIn(TZ.UTC_M10)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M10)).toEqual(
    !isEveningShiftIn(TZ.UTC_M10) && !isNightShiftIn(TZ.UTC_M10)
  );
  expect(isDayShiftIn(TZ.UTC_M930)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M930)).toEqual(
    !isEveningShiftIn(TZ.UTC_M930) && !isNightShiftIn(TZ.UTC_M930)
  );
  expect(isDayShiftIn(TZ.UTC_M9)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M9)).toEqual(
    !isEveningShiftIn(TZ.UTC_M9) && !isNightShiftIn(TZ.UTC_M9)
  );
  expect(isDayShiftIn(TZ.UTC_M8)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M8)).toEqual(
    !isEveningShiftIn(TZ.UTC_M8) && !isNightShiftIn(TZ.UTC_M8)
  );
  expect(isDayShiftIn(TZ.UTC_M7)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M7)).toEqual(
    !isEveningShiftIn(TZ.UTC_M7) && !isNightShiftIn(TZ.UTC_M7)
  );
  expect(isDayShiftIn(TZ.UTC_M6)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M6)).toEqual(
    !isEveningShiftIn(TZ.UTC_M6) && !isNightShiftIn(TZ.UTC_M6)
  );
  expect(isDayShiftIn(TZ.UTC_M5)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M5)).toEqual(
    !isEveningShiftIn(TZ.UTC_M5) && !isNightShiftIn(TZ.UTC_M5)
  );
  expect(isDayShiftIn(TZ.UTC_M4)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M4)).toEqual(
    !isEveningShiftIn(TZ.UTC_M4) && !isNightShiftIn(TZ.UTC_M4)
  );
  expect(isDayShiftIn(TZ.UTC_M330)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M330)).toEqual(
    !isEveningShiftIn(TZ.UTC_M330) && !isNightShiftIn(TZ.UTC_M330)
  );
  expect(isDayShiftIn(TZ.UTC_M3)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M3)).toEqual(
    !isEveningShiftIn(TZ.UTC_M3) && !isNightShiftIn(TZ.UTC_M3)
  );
  expect(isDayShiftIn(TZ.UTC_M2)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M2)).toEqual(
    !isEveningShiftIn(TZ.UTC_M2) && !isNightShiftIn(TZ.UTC_M2)
  );
  expect(isDayShiftIn(TZ.UTC_M1)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M1)).toEqual(
    !isEveningShiftIn(TZ.UTC_M1) && !isNightShiftIn(TZ.UTC_M1)
  );
  expect(isDayShiftIn(TZ.UTC_0)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_0)).toEqual(
    !isEveningShiftIn(TZ.UTC_0) && !isNightShiftIn(TZ.UTC_0)
  );
  expect(isDayShiftIn(TZ.UTC_P1)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P1)).toEqual(
    !isEveningShiftIn(TZ.UTC_P1) && !isNightShiftIn(TZ.UTC_P1)
  );
  expect(isDayShiftIn(TZ.UTC_P2)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P2)).toEqual(
    !isEveningShiftIn(TZ.UTC_P2) && !isNightShiftIn(TZ.UTC_P2)
  );
  expect(isDayShiftIn(TZ.UTC_P3)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P3)).toEqual(
    !isEveningShiftIn(TZ.UTC_P3) && !isNightShiftIn(TZ.UTC_P3)
  );
  expect(isDayShiftIn(TZ.UTC_P330)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P330)).toEqual(
    !isEveningShiftIn(TZ.UTC_P330) && !isNightShiftIn(TZ.UTC_P330)
  );
  expect(isDayShiftIn(TZ.UTC_P4)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P4)).toEqual(
    !isEveningShiftIn(TZ.UTC_P4) && !isNightShiftIn(TZ.UTC_P4)
  );
  expect(isDayShiftIn(TZ.UTC_P430)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P430)).toEqual(
    !isEveningShiftIn(TZ.UTC_P430) && !isNightShiftIn(TZ.UTC_P430)
  );
  expect(isDayShiftIn(TZ.UTC_P5)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P5)).toEqual(
    !isEveningShiftIn(TZ.UTC_P5) && !isNightShiftIn(TZ.UTC_P5)
  );
  expect(isDayShiftIn(TZ.UTC_P530)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P530)).toEqual(
    !isEveningShiftIn(TZ.UTC_P530) && !isNightShiftIn(TZ.UTC_P530)
  );
  expect(isDayShiftIn(TZ.UTC_P545)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P545)).toEqual(
    !isEveningShiftIn(TZ.UTC_P545) && !isNightShiftIn(TZ.UTC_P545)
  );
  expect(isDayShiftIn(TZ.UTC_P6)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P6)).toEqual(
    !isEveningShiftIn(TZ.UTC_P6) && !isNightShiftIn(TZ.UTC_P6)
  );
  expect(isDayShiftIn(TZ.UTC_P630)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P630)).toEqual(
    !isEveningShiftIn(TZ.UTC_P630) && !isNightShiftIn(TZ.UTC_P630)
  );
  expect(isDayShiftIn(TZ.UTC_P7)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P7)).toEqual(
    !isEveningShiftIn(TZ.UTC_P7) && !isNightShiftIn(TZ.UTC_P7)
  );
  expect(isDayShiftIn(TZ.UTC_P8)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P8)).toEqual(
    !isEveningShiftIn(TZ.UTC_P8) && !isNightShiftIn(TZ.UTC_P8)
  );
  expect(isDayShiftIn(TZ.UTC_P9)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P9)).toEqual(
    !isEveningShiftIn(TZ.UTC_P9) && !isNightShiftIn(TZ.UTC_P9)
  );
  expect(isDayShiftIn(TZ.UTC_P930)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P930)).toEqual(
    !isEveningShiftIn(TZ.UTC_P930) && !isNightShiftIn(TZ.UTC_P930)
  );
  expect(isDayShiftIn(TZ.UTC_P10)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P10)).toEqual(
    !isEveningShiftIn(TZ.UTC_P10) && !isNightShiftIn(TZ.UTC_P10)
  );
  expect(isDayShiftIn(TZ.UTC_P1030)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P1030)).toEqual(
    !isEveningShiftIn(TZ.UTC_P1030) && !isNightShiftIn(TZ.UTC_P1030)
  );
  expect(isDayShiftIn(TZ.UTC_P12)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P12)).toEqual(
    !isEveningShiftIn(TZ.UTC_P12) && !isNightShiftIn(TZ.UTC_P12)
  );
  expect(isDayShiftIn(TZ.UTC_P1245)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P1245)).toEqual(
    !isEveningShiftIn(TZ.UTC_P1245) && !isNightShiftIn(TZ.UTC_P1245)
  );
  expect(isDayShiftIn(TZ.UTC_P13)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P13)).toEqual(
    !isEveningShiftIn(TZ.UTC_P13) && !isNightShiftIn(TZ.UTC_P13)
  );
});

test("day shift in IANATimeZone 2022_02_22_22_44", () => {
  jest.setSystemTime(new Date(DATES.DATE_2022_02_22_22_44));
  expect(isDayShiftIn(TZ.UTC_M11)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M11)).toEqual(
    !isEveningShiftIn(TZ.UTC_M11) && !isNightShiftIn(TZ.UTC_M11)
  );
  expect(isDayShiftIn(TZ.UTC_M10)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M10)).toEqual(
    !isEveningShiftIn(TZ.UTC_M10) && !isNightShiftIn(TZ.UTC_M10)
  );
  expect(isDayShiftIn(TZ.UTC_M930)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M930)).toEqual(
    !isEveningShiftIn(TZ.UTC_M930) && !isNightShiftIn(TZ.UTC_M930)
  );
  expect(isDayShiftIn(TZ.UTC_M9)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M9)).toEqual(
    !isEveningShiftIn(TZ.UTC_M9) && !isNightShiftIn(TZ.UTC_M9)
  );
  expect(isDayShiftIn(TZ.UTC_M8)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M8)).toEqual(
    !isEveningShiftIn(TZ.UTC_M8) && !isNightShiftIn(TZ.UTC_M8)
  );
  expect(isDayShiftIn(TZ.UTC_M7)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M7)).toEqual(
    !isEveningShiftIn(TZ.UTC_M7) && !isNightShiftIn(TZ.UTC_M7)
  );
  expect(isDayShiftIn(TZ.UTC_M6)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M6)).toEqual(
    !isEveningShiftIn(TZ.UTC_M6) && !isNightShiftIn(TZ.UTC_M6)
  );
  expect(isDayShiftIn(TZ.UTC_M5)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M5)).toEqual(
    !isEveningShiftIn(TZ.UTC_M5) && !isNightShiftIn(TZ.UTC_M5)
  );
  expect(isDayShiftIn(TZ.UTC_M4)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M4)).toEqual(
    !isEveningShiftIn(TZ.UTC_M4) && !isNightShiftIn(TZ.UTC_M4)
  );
  expect(isDayShiftIn(TZ.UTC_M330)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M330)).toEqual(
    !isEveningShiftIn(TZ.UTC_M330) && !isNightShiftIn(TZ.UTC_M330)
  );
  expect(isDayShiftIn(TZ.UTC_M3)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M3)).toEqual(
    !isEveningShiftIn(TZ.UTC_M3) && !isNightShiftIn(TZ.UTC_M3)
  );
  expect(isDayShiftIn(TZ.UTC_M2)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M2)).toEqual(
    !isEveningShiftIn(TZ.UTC_M2) && !isNightShiftIn(TZ.UTC_M2)
  );
  expect(isDayShiftIn(TZ.UTC_M1)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M1)).toEqual(
    !isEveningShiftIn(TZ.UTC_M1) && !isNightShiftIn(TZ.UTC_M1)
  );
  expect(isDayShiftIn(TZ.UTC_0)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_0)).toEqual(
    !isEveningShiftIn(TZ.UTC_0) && !isNightShiftIn(TZ.UTC_0)
  );
  expect(isDayShiftIn(TZ.UTC_P1)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P1)).toEqual(
    !isEveningShiftIn(TZ.UTC_P1) && !isNightShiftIn(TZ.UTC_P1)
  );
  expect(isDayShiftIn(TZ.UTC_P2)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P2)).toEqual(
    !isEveningShiftIn(TZ.UTC_P2) && !isNightShiftIn(TZ.UTC_P2)
  );
  expect(isDayShiftIn(TZ.UTC_P3)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P3)).toEqual(
    !isEveningShiftIn(TZ.UTC_P3) && !isNightShiftIn(TZ.UTC_P3)
  );
  expect(isDayShiftIn(TZ.UTC_P330)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P330)).toEqual(
    !isEveningShiftIn(TZ.UTC_P330) && !isNightShiftIn(TZ.UTC_P330)
  );
  expect(isDayShiftIn(TZ.UTC_P4)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P4)).toEqual(
    !isEveningShiftIn(TZ.UTC_P4) && !isNightShiftIn(TZ.UTC_P4)
  );
  expect(isDayShiftIn(TZ.UTC_P430)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P430)).toEqual(
    !isEveningShiftIn(TZ.UTC_P430) && !isNightShiftIn(TZ.UTC_P430)
  );
  expect(isDayShiftIn(TZ.UTC_P5)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P5)).toEqual(
    !isEveningShiftIn(TZ.UTC_P5) && !isNightShiftIn(TZ.UTC_P5)
  );
  expect(isDayShiftIn(TZ.UTC_P530)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P530)).toEqual(
    !isEveningShiftIn(TZ.UTC_P530) && !isNightShiftIn(TZ.UTC_P530)
  );
  expect(isDayShiftIn(TZ.UTC_P545)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P545)).toEqual(
    !isEveningShiftIn(TZ.UTC_P545) && !isNightShiftIn(TZ.UTC_P545)
  );
  expect(isDayShiftIn(TZ.UTC_P6)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P6)).toEqual(
    !isEveningShiftIn(TZ.UTC_P6) && !isNightShiftIn(TZ.UTC_P6)
  );
  expect(isDayShiftIn(TZ.UTC_P630)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P630)).toEqual(
    !isEveningShiftIn(TZ.UTC_P630) && !isNightShiftIn(TZ.UTC_P630)
  );
  expect(isDayShiftIn(TZ.UTC_P7)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P7)).toEqual(
    !isEveningShiftIn(TZ.UTC_P7) && !isNightShiftIn(TZ.UTC_P7)
  );
  expect(isDayShiftIn(TZ.UTC_P8)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P8)).toEqual(
    !isEveningShiftIn(TZ.UTC_P8) && !isNightShiftIn(TZ.UTC_P8)
  );
  expect(isDayShiftIn(TZ.UTC_P9)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P9)).toEqual(
    !isEveningShiftIn(TZ.UTC_P9) && !isNightShiftIn(TZ.UTC_P9)
  );
  expect(isDayShiftIn(TZ.UTC_P930)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P930)).toEqual(
    !isEveningShiftIn(TZ.UTC_P930) && !isNightShiftIn(TZ.UTC_P930)
  );
  expect(isDayShiftIn(TZ.UTC_P10)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P10)).toEqual(
    !isEveningShiftIn(TZ.UTC_P10) && !isNightShiftIn(TZ.UTC_P10)
  );
  expect(isDayShiftIn(TZ.UTC_P1030)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P1030)).toEqual(
    !isEveningShiftIn(TZ.UTC_P1030) && !isNightShiftIn(TZ.UTC_P1030)
  );
  expect(isDayShiftIn(TZ.UTC_P12)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P12)).toEqual(
    !isEveningShiftIn(TZ.UTC_P12) && !isNightShiftIn(TZ.UTC_P12)
  );
  expect(isDayShiftIn(TZ.UTC_P1245)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P1245)).toEqual(
    !isEveningShiftIn(TZ.UTC_P1245) && !isNightShiftIn(TZ.UTC_P1245)
  );
  expect(isDayShiftIn(TZ.UTC_P13)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P13)).toEqual(
    !isEveningShiftIn(TZ.UTC_P13) && !isNightShiftIn(TZ.UTC_P13)
  );
});

test("day shift in IANATimeZone 2023_03_23_23_46", () => {
  jest.setSystemTime(new Date(DATES.DATE_2023_03_23_23_46));
  expect(isDayShiftIn(TZ.UTC_M11)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M11)).toEqual(
    !isEveningShiftIn(TZ.UTC_M11) && !isNightShiftIn(TZ.UTC_M11)
  );
  expect(isDayShiftIn(TZ.UTC_M10)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M10)).toEqual(
    !isEveningShiftIn(TZ.UTC_M10) && !isNightShiftIn(TZ.UTC_M10)
  );
  expect(isDayShiftIn(TZ.UTC_M930)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M930)).toEqual(
    !isEveningShiftIn(TZ.UTC_M930) && !isNightShiftIn(TZ.UTC_M930)
  );
  expect(isDayShiftIn(TZ.UTC_M9)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M9)).toEqual(
    !isEveningShiftIn(TZ.UTC_M9) && !isNightShiftIn(TZ.UTC_M9)
  );
  expect(isDayShiftIn(TZ.UTC_M8)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M8)).toEqual(
    !isEveningShiftIn(TZ.UTC_M8) && !isNightShiftIn(TZ.UTC_M8)
  );
  expect(isDayShiftIn(TZ.UTC_M7)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M7)).toEqual(
    !isEveningShiftIn(TZ.UTC_M7) && !isNightShiftIn(TZ.UTC_M7)
  );
  expect(isDayShiftIn(TZ.UTC_M6)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M6)).toEqual(
    !isEveningShiftIn(TZ.UTC_M6) && !isNightShiftIn(TZ.UTC_M6)
  );
  expect(isDayShiftIn(TZ.UTC_M5)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M5)).toEqual(
    !isEveningShiftIn(TZ.UTC_M5) && !isNightShiftIn(TZ.UTC_M5)
  );
  expect(isDayShiftIn(TZ.UTC_M4)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M4)).toEqual(
    !isEveningShiftIn(TZ.UTC_M4) && !isNightShiftIn(TZ.UTC_M4)
  );
  expect(isDayShiftIn(TZ.UTC_M330)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M330)).toEqual(
    !isEveningShiftIn(TZ.UTC_M330) && !isNightShiftIn(TZ.UTC_M330)
  );
  expect(isDayShiftIn(TZ.UTC_M3)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M3)).toEqual(
    !isEveningShiftIn(TZ.UTC_M3) && !isNightShiftIn(TZ.UTC_M3)
  );
  expect(isDayShiftIn(TZ.UTC_M2)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M2)).toEqual(
    !isEveningShiftIn(TZ.UTC_M2) && !isNightShiftIn(TZ.UTC_M2)
  );
  expect(isDayShiftIn(TZ.UTC_M1)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M1)).toEqual(
    !isEveningShiftIn(TZ.UTC_M1) && !isNightShiftIn(TZ.UTC_M1)
  );
  expect(isDayShiftIn(TZ.UTC_0)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_0)).toEqual(
    !isEveningShiftIn(TZ.UTC_0) && !isNightShiftIn(TZ.UTC_0)
  );
  expect(isDayShiftIn(TZ.UTC_P1)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P1)).toEqual(
    !isEveningShiftIn(TZ.UTC_P1) && !isNightShiftIn(TZ.UTC_P1)
  );
  expect(isDayShiftIn(TZ.UTC_P2)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P2)).toEqual(
    !isEveningShiftIn(TZ.UTC_P2) && !isNightShiftIn(TZ.UTC_P2)
  );
  expect(isDayShiftIn(TZ.UTC_P3)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P3)).toEqual(
    !isEveningShiftIn(TZ.UTC_P3) && !isNightShiftIn(TZ.UTC_P3)
  );
  expect(isDayShiftIn(TZ.UTC_P330)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P330)).toEqual(
    !isEveningShiftIn(TZ.UTC_P330) && !isNightShiftIn(TZ.UTC_P330)
  );
  expect(isDayShiftIn(TZ.UTC_P4)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P4)).toEqual(
    !isEveningShiftIn(TZ.UTC_P4) && !isNightShiftIn(TZ.UTC_P4)
  );
  expect(isDayShiftIn(TZ.UTC_P430)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P430)).toEqual(
    !isEveningShiftIn(TZ.UTC_P430) && !isNightShiftIn(TZ.UTC_P430)
  );
  expect(isDayShiftIn(TZ.UTC_P5)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P5)).toEqual(
    !isEveningShiftIn(TZ.UTC_P5) && !isNightShiftIn(TZ.UTC_P5)
  );
  expect(isDayShiftIn(TZ.UTC_P530)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P530)).toEqual(
    !isEveningShiftIn(TZ.UTC_P530) && !isNightShiftIn(TZ.UTC_P530)
  );
  expect(isDayShiftIn(TZ.UTC_P545)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P545)).toEqual(
    !isEveningShiftIn(TZ.UTC_P545) && !isNightShiftIn(TZ.UTC_P545)
  );
  expect(isDayShiftIn(TZ.UTC_P6)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P6)).toEqual(
    !isEveningShiftIn(TZ.UTC_P6) && !isNightShiftIn(TZ.UTC_P6)
  );
  expect(isDayShiftIn(TZ.UTC_P630)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P630)).toEqual(
    !isEveningShiftIn(TZ.UTC_P630) && !isNightShiftIn(TZ.UTC_P630)
  );
  expect(isDayShiftIn(TZ.UTC_P7)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P7)).toEqual(
    !isEveningShiftIn(TZ.UTC_P7) && !isNightShiftIn(TZ.UTC_P7)
  );
  expect(isDayShiftIn(TZ.UTC_P8)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P8)).toEqual(
    !isEveningShiftIn(TZ.UTC_P8) && !isNightShiftIn(TZ.UTC_P8)
  );
  expect(isDayShiftIn(TZ.UTC_P9)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P9)).toEqual(
    !isEveningShiftIn(TZ.UTC_P9) && !isNightShiftIn(TZ.UTC_P9)
  );
  expect(isDayShiftIn(TZ.UTC_P930)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P930)).toEqual(
    !isEveningShiftIn(TZ.UTC_P930) && !isNightShiftIn(TZ.UTC_P930)
  );
  expect(isDayShiftIn(TZ.UTC_P10)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P10)).toEqual(
    !isEveningShiftIn(TZ.UTC_P10) && !isNightShiftIn(TZ.UTC_P10)
  );
  expect(isDayShiftIn(TZ.UTC_P1030)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P1030)).toEqual(
    !isEveningShiftIn(TZ.UTC_P1030) && !isNightShiftIn(TZ.UTC_P1030)
  );
  expect(isDayShiftIn(TZ.UTC_P12)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P12)).toEqual(
    !isEveningShiftIn(TZ.UTC_P12) && !isNightShiftIn(TZ.UTC_P12)
  );
  expect(isDayShiftIn(TZ.UTC_P1245)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P1245)).toEqual(
    !isEveningShiftIn(TZ.UTC_P1245) && !isNightShiftIn(TZ.UTC_P1245)
  );
  expect(isDayShiftIn(TZ.UTC_P13)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P13)).toEqual(
    !isEveningShiftIn(TZ.UTC_P13) && !isNightShiftIn(TZ.UTC_P13)
  );
});

test("day shift in IANATimeZone 2024_04_24_00_48", () => {
  jest.setSystemTime(new Date(DATES.DATE_2024_04_24_00_48));
  expect(isDayShiftIn(TZ.UTC_M11)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M11)).toEqual(
    !isEveningShiftIn(TZ.UTC_M11) && !isNightShiftIn(TZ.UTC_M11)
  );
  expect(isDayShiftIn(TZ.UTC_M10)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M10)).toEqual(
    !isEveningShiftIn(TZ.UTC_M10) && !isNightShiftIn(TZ.UTC_M10)
  );
  expect(isDayShiftIn(TZ.UTC_M930)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M930)).toEqual(
    !isEveningShiftIn(TZ.UTC_M930) && !isNightShiftIn(TZ.UTC_M930)
  );
  expect(isDayShiftIn(TZ.UTC_M9)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_M9)).toEqual(
    !isEveningShiftIn(TZ.UTC_M9) && !isNightShiftIn(TZ.UTC_M9)
  );
  expect(isDayShiftIn(TZ.UTC_M8)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M8)).toEqual(
    !isEveningShiftIn(TZ.UTC_M8) && !isNightShiftIn(TZ.UTC_M8)
  );
  expect(isDayShiftIn(TZ.UTC_M7)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M7)).toEqual(
    !isEveningShiftIn(TZ.UTC_M7) && !isNightShiftIn(TZ.UTC_M7)
  );
  expect(isDayShiftIn(TZ.UTC_M6)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M6)).toEqual(
    !isEveningShiftIn(TZ.UTC_M6) && !isNightShiftIn(TZ.UTC_M6)
  );
  expect(isDayShiftIn(TZ.UTC_M5)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M5)).toEqual(
    !isEveningShiftIn(TZ.UTC_M5) && !isNightShiftIn(TZ.UTC_M5)
  );
  expect(isDayShiftIn(TZ.UTC_M4)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M4)).toEqual(
    !isEveningShiftIn(TZ.UTC_M4) && !isNightShiftIn(TZ.UTC_M4)
  );
  expect(isDayShiftIn(TZ.UTC_M330)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M330)).toEqual(
    !isEveningShiftIn(TZ.UTC_M330) && !isNightShiftIn(TZ.UTC_M330)
  );
  expect(isDayShiftIn(TZ.UTC_M3)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M3)).toEqual(
    !isEveningShiftIn(TZ.UTC_M3) && !isNightShiftIn(TZ.UTC_M3)
  );
  expect(isDayShiftIn(TZ.UTC_M2)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M2)).toEqual(
    !isEveningShiftIn(TZ.UTC_M2) && !isNightShiftIn(TZ.UTC_M2)
  );
  expect(isDayShiftIn(TZ.UTC_M1)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_M1)).toEqual(
    !isEveningShiftIn(TZ.UTC_M1) && !isNightShiftIn(TZ.UTC_M1)
  );
  expect(isDayShiftIn(TZ.UTC_0)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_0)).toEqual(
    !isEveningShiftIn(TZ.UTC_0) && !isNightShiftIn(TZ.UTC_0)
  );
  expect(isDayShiftIn(TZ.UTC_P1)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P1)).toEqual(
    !isEveningShiftIn(TZ.UTC_P1) && !isNightShiftIn(TZ.UTC_P1)
  );
  expect(isDayShiftIn(TZ.UTC_P2)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P2)).toEqual(
    !isEveningShiftIn(TZ.UTC_P2) && !isNightShiftIn(TZ.UTC_P2)
  );
  expect(isDayShiftIn(TZ.UTC_P3)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P3)).toEqual(
    !isEveningShiftIn(TZ.UTC_P3) && !isNightShiftIn(TZ.UTC_P3)
  );
  expect(isDayShiftIn(TZ.UTC_P330)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P330)).toEqual(
    !isEveningShiftIn(TZ.UTC_P330) && !isNightShiftIn(TZ.UTC_P330)
  );
  expect(isDayShiftIn(TZ.UTC_P4)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P4)).toEqual(
    !isEveningShiftIn(TZ.UTC_P4) && !isNightShiftIn(TZ.UTC_P4)
  );
  expect(isDayShiftIn(TZ.UTC_P430)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P430)).toEqual(
    !isEveningShiftIn(TZ.UTC_P430) && !isNightShiftIn(TZ.UTC_P430)
  );
  expect(isDayShiftIn(TZ.UTC_P5)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P5)).toEqual(
    !isEveningShiftIn(TZ.UTC_P5) && !isNightShiftIn(TZ.UTC_P5)
  );
  expect(isDayShiftIn(TZ.UTC_P530)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P530)).toEqual(
    !isEveningShiftIn(TZ.UTC_P530) && !isNightShiftIn(TZ.UTC_P530)
  );
  expect(isDayShiftIn(TZ.UTC_P545)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P545)).toEqual(
    !isEveningShiftIn(TZ.UTC_P545) && !isNightShiftIn(TZ.UTC_P545)
  );
  expect(isDayShiftIn(TZ.UTC_P6)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P6)).toEqual(
    !isEveningShiftIn(TZ.UTC_P6) && !isNightShiftIn(TZ.UTC_P6)
  );
  expect(isDayShiftIn(TZ.UTC_P630)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P630)).toEqual(
    !isEveningShiftIn(TZ.UTC_P630) && !isNightShiftIn(TZ.UTC_P630)
  );
  expect(isDayShiftIn(TZ.UTC_P7)).toEqual(false);
  expect(isDayShiftIn(TZ.UTC_P7)).toEqual(
    !isEveningShiftIn(TZ.UTC_P7) && !isNightShiftIn(TZ.UTC_P7)
  );
  expect(isDayShiftIn(TZ.UTC_P8)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P8)).toEqual(
    !isEveningShiftIn(TZ.UTC_P8) && !isNightShiftIn(TZ.UTC_P8)
  );
  expect(isDayShiftIn(TZ.UTC_P9)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P9)).toEqual(
    !isEveningShiftIn(TZ.UTC_P9) && !isNightShiftIn(TZ.UTC_P9)
  );
  expect(isDayShiftIn(TZ.UTC_P930)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P930)).toEqual(
    !isEveningShiftIn(TZ.UTC_P930) && !isNightShiftIn(TZ.UTC_P930)
  );
  expect(isDayShiftIn(TZ.UTC_P10)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P10)).toEqual(
    !isEveningShiftIn(TZ.UTC_P10) && !isNightShiftIn(TZ.UTC_P10)
  );
  expect(isDayShiftIn(TZ.UTC_P1030)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P1030)).toEqual(
    !isEveningShiftIn(TZ.UTC_P1030) && !isNightShiftIn(TZ.UTC_P1030)
  );
  expect(isDayShiftIn(TZ.UTC_P12)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P12)).toEqual(
    !isEveningShiftIn(TZ.UTC_P12) && !isNightShiftIn(TZ.UTC_P12)
  );
  expect(isDayShiftIn(TZ.UTC_P1245)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P1245)).toEqual(
    !isEveningShiftIn(TZ.UTC_P1245) && !isNightShiftIn(TZ.UTC_P1245)
  );
  expect(isDayShiftIn(TZ.UTC_P13)).toEqual(true);
  expect(isDayShiftIn(TZ.UTC_P13)).toEqual(
    !isEveningShiftIn(TZ.UTC_P13) && !isNightShiftIn(TZ.UTC_P13)
  );
});
