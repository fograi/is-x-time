import {
  isNightIn,
  isMorningIn,
  isAfternoonIn,
  isEveningIn,
} from "../src/index";
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

test("night in IANATimeZone 1999_12_31_23_59", () => {
  jest.setSystemTime(new Date(DATES.DATE_1999_12_31_23_59));
  expect(isNightIn(TZ.UTC_M11)).toEqual(false);
  expect(isNightIn(TZ.UTC_M11)).toEqual(
    !isEveningIn(TZ.UTC_M11) &&
      !isAfternoonIn(TZ.UTC_M11) &&
      !isMorningIn(TZ.UTC_M11)
  );
  expect(isNightIn(TZ.UTC_M10)).toEqual(false);
  expect(isNightIn(TZ.UTC_M10)).toEqual(
    !isEveningIn(TZ.UTC_M10) &&
      !isAfternoonIn(TZ.UTC_M10) &&
      !isMorningIn(TZ.UTC_M10)
  );
  expect(isNightIn(TZ.UTC_M930)).toEqual(false);
  expect(isNightIn(TZ.UTC_M930)).toEqual(
    !isEveningIn(TZ.UTC_M930) &&
      !isAfternoonIn(TZ.UTC_M930) &&
      !isMorningIn(TZ.UTC_M930)
  );
  expect(isNightIn(TZ.UTC_M9)).toEqual(false);
  expect(isNightIn(TZ.UTC_M9)).toEqual(
    !isEveningIn(TZ.UTC_M9) &&
      !isAfternoonIn(TZ.UTC_M9) &&
      !isMorningIn(TZ.UTC_M9)
  );
  expect(isNightIn(TZ.UTC_M8)).toEqual(false);
  expect(isNightIn(TZ.UTC_M8)).toEqual(
    !isEveningIn(TZ.UTC_M8) &&
      !isAfternoonIn(TZ.UTC_M8) &&
      !isMorningIn(TZ.UTC_M8)
  );
  expect(isNightIn(TZ.UTC_M7)).toEqual(false);
  expect(isNightIn(TZ.UTC_M7)).toEqual(
    !isEveningIn(TZ.UTC_M7) &&
      !isAfternoonIn(TZ.UTC_M7) &&
      !isMorningIn(TZ.UTC_M7)
  );
  expect(isNightIn(TZ.UTC_M6)).toEqual(false);
  expect(isNightIn(TZ.UTC_M6)).toEqual(
    !isEveningIn(TZ.UTC_M6) &&
      !isAfternoonIn(TZ.UTC_M6) &&
      !isMorningIn(TZ.UTC_M6)
  );
  expect(isNightIn(TZ.UTC_M5)).toEqual(false);
  expect(isNightIn(TZ.UTC_M5)).toEqual(
    !isEveningIn(TZ.UTC_M5) &&
      !isAfternoonIn(TZ.UTC_M5) &&
      !isMorningIn(TZ.UTC_M5)
  );
  expect(isNightIn(TZ.UTC_M4)).toEqual(false);
  expect(isNightIn(TZ.UTC_M4)).toEqual(
    !isEveningIn(TZ.UTC_M4) &&
      !isAfternoonIn(TZ.UTC_M4) &&
      !isMorningIn(TZ.UTC_M4)
  );
  expect(isNightIn(TZ.UTC_M330)).toEqual(false);
  expect(isNightIn(TZ.UTC_M330)).toEqual(
    !isEveningIn(TZ.UTC_M330) &&
      !isAfternoonIn(TZ.UTC_M330) &&
      !isMorningIn(TZ.UTC_M330)
  );
  expect(isNightIn(TZ.UTC_M3)).toEqual(false);
  expect(isNightIn(TZ.UTC_M3)).toEqual(
    !isEveningIn(TZ.UTC_M3) &&
      !isAfternoonIn(TZ.UTC_M3) &&
      !isMorningIn(TZ.UTC_M3)
  );
  expect(isNightIn(TZ.UTC_M2)).toEqual(false);
  expect(isNightIn(TZ.UTC_M2)).toEqual(
    !isEveningIn(TZ.UTC_M2) &&
      !isAfternoonIn(TZ.UTC_M2) &&
      !isMorningIn(TZ.UTC_M2)
  );
  expect(isNightIn(TZ.UTC_M1)).toEqual(false);
  expect(isNightIn(TZ.UTC_M1)).toEqual(
    !isEveningIn(TZ.UTC_M1) &&
      !isAfternoonIn(TZ.UTC_M1) &&
      !isMorningIn(TZ.UTC_M1)
  );
  expect(isNightIn(TZ.UTC_0)).toEqual(false);
  expect(isNightIn(TZ.UTC_0)).toEqual(
    !isEveningIn(TZ.UTC_0) && !isAfternoonIn(TZ.UTC_0) && !isMorningIn(TZ.UTC_0)
  );
  expect(isNightIn(TZ.UTC_P1)).toEqual(false);
  expect(isNightIn(TZ.UTC_P1)).toEqual(
    !isEveningIn(TZ.UTC_P1) &&
      !isAfternoonIn(TZ.UTC_P1) &&
      !isMorningIn(TZ.UTC_P1)
  );
  expect(isNightIn(TZ.UTC_P2)).toEqual(false);
  expect(isNightIn(TZ.UTC_P2)).toEqual(
    !isEveningIn(TZ.UTC_P2) &&
      !isAfternoonIn(TZ.UTC_P2) &&
      !isMorningIn(TZ.UTC_P2)
  );
  expect(isNightIn(TZ.UTC_P3)).toEqual(false);
  expect(isNightIn(TZ.UTC_P3)).toEqual(
    !isEveningIn(TZ.UTC_P3) &&
      !isAfternoonIn(TZ.UTC_P3) &&
      !isMorningIn(TZ.UTC_P3)
  );
  expect(isNightIn(TZ.UTC_P330)).toEqual(false);
  expect(isNightIn(TZ.UTC_P330)).toEqual(
    !isEveningIn(TZ.UTC_P330) &&
      !isAfternoonIn(TZ.UTC_P330) &&
      !isMorningIn(TZ.UTC_P330)
  );
  expect(isNightIn(TZ.UTC_P4)).toEqual(false);
  expect(isNightIn(TZ.UTC_P4)).toEqual(
    !isEveningIn(TZ.UTC_P4) &&
      !isAfternoonIn(TZ.UTC_P4) &&
      !isMorningIn(TZ.UTC_P4)
  );
  expect(isNightIn(TZ.UTC_P430)).toEqual(false);
  expect(isNightIn(TZ.UTC_P430)).toEqual(
    !isEveningIn(TZ.UTC_P430) &&
      !isAfternoonIn(TZ.UTC_P430) &&
      !isMorningIn(TZ.UTC_P430)
  );
  expect(isNightIn(TZ.UTC_P5)).toEqual(false);
  expect(isNightIn(TZ.UTC_P5)).toEqual(
    !isEveningIn(TZ.UTC_P5) &&
      !isAfternoonIn(TZ.UTC_P5) &&
      !isMorningIn(TZ.UTC_P5)
  );
  expect(isNightIn(TZ.UTC_P530)).toEqual(false);
  expect(isNightIn(TZ.UTC_P530)).toEqual(
    !isEveningIn(TZ.UTC_P530) &&
      !isAfternoonIn(TZ.UTC_P530) &&
      !isMorningIn(TZ.UTC_P530)
  );
  expect(isNightIn(TZ.UTC_P545)).toEqual(false);
  expect(isNightIn(TZ.UTC_P545)).toEqual(
    !isEveningIn(TZ.UTC_P545) &&
      !isAfternoonIn(TZ.UTC_P545) &&
      !isMorningIn(TZ.UTC_P545)
  );
  expect(isNightIn(TZ.UTC_P6)).toEqual(false);
  expect(isNightIn(TZ.UTC_P6)).toEqual(
    !isEveningIn(TZ.UTC_P6) &&
      !isAfternoonIn(TZ.UTC_P6) &&
      !isMorningIn(TZ.UTC_P6)
  );
  expect(isNightIn(TZ.UTC_P630)).toEqual(false);
  expect(isNightIn(TZ.UTC_P630)).toEqual(
    !isEveningIn(TZ.UTC_P630) &&
      !isAfternoonIn(TZ.UTC_P630) &&
      !isMorningIn(TZ.UTC_P630)
  );
  expect(isNightIn(TZ.UTC_P7)).toEqual(false);
  expect(isNightIn(TZ.UTC_P7)).toEqual(
    !isEveningIn(TZ.UTC_P7) &&
      !isAfternoonIn(TZ.UTC_P7) &&
      !isMorningIn(TZ.UTC_P7)
  );
  expect(isNightIn(TZ.UTC_P8)).toEqual(false);
  expect(isNightIn(TZ.UTC_P8)).toEqual(
    !isEveningIn(TZ.UTC_P8) &&
      !isAfternoonIn(TZ.UTC_P8) &&
      !isMorningIn(TZ.UTC_P8)
  );
  expect(isNightIn(TZ.UTC_P9)).toEqual(false);
  expect(isNightIn(TZ.UTC_P9)).toEqual(
    !isEveningIn(TZ.UTC_P9) &&
      !isAfternoonIn(TZ.UTC_P9) &&
      !isMorningIn(TZ.UTC_P9)
  );
  expect(isNightIn(TZ.UTC_P930)).toEqual(false);
  expect(isNightIn(TZ.UTC_P930)).toEqual(
    !isEveningIn(TZ.UTC_P930) &&
      !isAfternoonIn(TZ.UTC_P930) &&
      !isMorningIn(TZ.UTC_P930)
  );
  expect(isNightIn(TZ.UTC_P10)).toEqual(false);
  expect(isNightIn(TZ.UTC_P10)).toEqual(
    !isEveningIn(TZ.UTC_P10) &&
      !isAfternoonIn(TZ.UTC_P10) &&
      !isMorningIn(TZ.UTC_P10)
  );
  expect(isNightIn(TZ.UTC_P1030)).toEqual(false);
  expect(isNightIn(TZ.UTC_P1030)).toEqual(
    !isEveningIn(TZ.UTC_P1030) &&
      !isAfternoonIn(TZ.UTC_P1030) &&
      !isMorningIn(TZ.UTC_P1030)
  );
  expect(isNightIn(TZ.UTC_P12)).toEqual(false);
  expect(isNightIn(TZ.UTC_P12)).toEqual(
    !isEveningIn(TZ.UTC_P12) &&
      !isAfternoonIn(TZ.UTC_P12) &&
      !isMorningIn(TZ.UTC_P12)
  );
  expect(isNightIn(TZ.UTC_P1245)).toEqual(false);
  expect(isNightIn(TZ.UTC_P1245)).toEqual(
    !isEveningIn(TZ.UTC_P1245) &&
      !isAfternoonIn(TZ.UTC_P1245) &&
      !isMorningIn(TZ.UTC_P1245)
  );
  expect(isNightIn(TZ.UTC_P13)).toEqual(false);
  expect(isNightIn(TZ.UTC_P13)).toEqual(
    !isEveningIn(TZ.UTC_P13) &&
      !isAfternoonIn(TZ.UTC_P13) &&
      !isMorningIn(TZ.UTC_P13)
  );
});

test("night in IANATimeZone 2000_01_01_00_00", () => {
  jest.setSystemTime(new Date(DATES.DATE_2000_01_01_00_00));
  expect(isNightIn(TZ.UTC_M11)).toEqual(false);
  expect(isNightIn(TZ.UTC_M11)).toEqual(
    !isEveningIn(TZ.UTC_M11) &&
      !isAfternoonIn(TZ.UTC_M11) &&
      !isMorningIn(TZ.UTC_M11)
  );
  expect(isNightIn(TZ.UTC_M10)).toEqual(false);
  expect(isNightIn(TZ.UTC_M10)).toEqual(
    !isEveningIn(TZ.UTC_M10) &&
      !isAfternoonIn(TZ.UTC_M10) &&
      !isMorningIn(TZ.UTC_M10)
  );
  expect(isNightIn(TZ.UTC_M930)).toEqual(false);
  expect(isNightIn(TZ.UTC_M930)).toEqual(
    !isEveningIn(TZ.UTC_M930) &&
      !isAfternoonIn(TZ.UTC_M930) &&
      !isMorningIn(TZ.UTC_M930)
  );
  expect(isNightIn(TZ.UTC_M9)).toEqual(false);
  expect(isNightIn(TZ.UTC_M9)).toEqual(
    !isEveningIn(TZ.UTC_M9) &&
      !isAfternoonIn(TZ.UTC_M9) &&
      !isMorningIn(TZ.UTC_M9)
  );
  expect(isNightIn(TZ.UTC_M8)).toEqual(false);
  expect(isNightIn(TZ.UTC_M8)).toEqual(
    !isEveningIn(TZ.UTC_M8) &&
      !isAfternoonIn(TZ.UTC_M8) &&
      !isMorningIn(TZ.UTC_M8)
  );
  expect(isNightIn(TZ.UTC_M7)).toEqual(false);
  expect(isNightIn(TZ.UTC_M7)).toEqual(
    !isEveningIn(TZ.UTC_M7) &&
      !isAfternoonIn(TZ.UTC_M7) &&
      !isMorningIn(TZ.UTC_M7)
  );
  expect(isNightIn(TZ.UTC_M6)).toEqual(false);
  expect(isNightIn(TZ.UTC_M6)).toEqual(
    !isEveningIn(TZ.UTC_M6) &&
      !isAfternoonIn(TZ.UTC_M6) &&
      !isMorningIn(TZ.UTC_M6)
  );
  expect(isNightIn(TZ.UTC_M5)).toEqual(false);
  expect(isNightIn(TZ.UTC_M5)).toEqual(
    !isEveningIn(TZ.UTC_M5) &&
      !isAfternoonIn(TZ.UTC_M5) &&
      !isMorningIn(TZ.UTC_M5)
  );
  expect(isNightIn(TZ.UTC_M4)).toEqual(false);
  expect(isNightIn(TZ.UTC_M4)).toEqual(
    !isEveningIn(TZ.UTC_M4) &&
      !isAfternoonIn(TZ.UTC_M4) &&
      !isMorningIn(TZ.UTC_M4)
  );
  expect(isNightIn(TZ.UTC_M330)).toEqual(false);
  expect(isNightIn(TZ.UTC_M330)).toEqual(
    !isEveningIn(TZ.UTC_M330) &&
      !isAfternoonIn(TZ.UTC_M330) &&
      !isMorningIn(TZ.UTC_M330)
  );
  expect(isNightIn(TZ.UTC_M3)).toEqual(false);
  expect(isNightIn(TZ.UTC_M3)).toEqual(
    !isEveningIn(TZ.UTC_M3) &&
      !isAfternoonIn(TZ.UTC_M3) &&
      !isMorningIn(TZ.UTC_M3)
  );
  expect(isNightIn(TZ.UTC_M2)).toEqual(false);
  expect(isNightIn(TZ.UTC_M2)).toEqual(
    !isEveningIn(TZ.UTC_M2) &&
      !isAfternoonIn(TZ.UTC_M2) &&
      !isMorningIn(TZ.UTC_M2)
  );
  expect(isNightIn(TZ.UTC_M1)).toEqual(false);
  expect(isNightIn(TZ.UTC_M1)).toEqual(
    !isEveningIn(TZ.UTC_M1) &&
      !isAfternoonIn(TZ.UTC_M1) &&
      !isMorningIn(TZ.UTC_M1)
  );
  expect(isNightIn(TZ.UTC_0)).toEqual(false);
  expect(isNightIn(TZ.UTC_0)).toEqual(
    !isEveningIn(TZ.UTC_0) && !isAfternoonIn(TZ.UTC_0) && !isMorningIn(TZ.UTC_0)
  );
  expect(isNightIn(TZ.UTC_P1)).toEqual(false);
  expect(isNightIn(TZ.UTC_P1)).toEqual(
    !isEveningIn(TZ.UTC_P1) &&
      !isAfternoonIn(TZ.UTC_P1) &&
      !isMorningIn(TZ.UTC_P1)
  );
  expect(isNightIn(TZ.UTC_P2)).toEqual(false);
  expect(isNightIn(TZ.UTC_P2)).toEqual(
    !isEveningIn(TZ.UTC_P2) &&
      !isAfternoonIn(TZ.UTC_P2) &&
      !isMorningIn(TZ.UTC_P2)
  );
  expect(isNightIn(TZ.UTC_P3)).toEqual(false);
  expect(isNightIn(TZ.UTC_P3)).toEqual(
    !isEveningIn(TZ.UTC_P3) &&
      !isAfternoonIn(TZ.UTC_P3) &&
      !isMorningIn(TZ.UTC_P3)
  );
  expect(isNightIn(TZ.UTC_P330)).toEqual(false);
  expect(isNightIn(TZ.UTC_P330)).toEqual(
    !isEveningIn(TZ.UTC_P330) &&
      !isAfternoonIn(TZ.UTC_P330) &&
      !isMorningIn(TZ.UTC_P330)
  );
  expect(isNightIn(TZ.UTC_P4)).toEqual(false);
  expect(isNightIn(TZ.UTC_P4)).toEqual(
    !isEveningIn(TZ.UTC_P4) &&
      !isAfternoonIn(TZ.UTC_P4) &&
      !isMorningIn(TZ.UTC_P4)
  );
  expect(isNightIn(TZ.UTC_P430)).toEqual(false);
  expect(isNightIn(TZ.UTC_P430)).toEqual(
    !isEveningIn(TZ.UTC_P430) &&
      !isAfternoonIn(TZ.UTC_P430) &&
      !isMorningIn(TZ.UTC_P430)
  );
  expect(isNightIn(TZ.UTC_P5)).toEqual(false);
  expect(isNightIn(TZ.UTC_P5)).toEqual(
    !isEveningIn(TZ.UTC_P5) &&
      !isAfternoonIn(TZ.UTC_P5) &&
      !isMorningIn(TZ.UTC_P5)
  );
  expect(isNightIn(TZ.UTC_P530)).toEqual(false);
  expect(isNightIn(TZ.UTC_P530)).toEqual(
    !isEveningIn(TZ.UTC_P530) &&
      !isAfternoonIn(TZ.UTC_P530) &&
      !isMorningIn(TZ.UTC_P530)
  );
  expect(isNightIn(TZ.UTC_P545)).toEqual(false);
  expect(isNightIn(TZ.UTC_P545)).toEqual(
    !isEveningIn(TZ.UTC_P545) &&
      !isAfternoonIn(TZ.UTC_P545) &&
      !isMorningIn(TZ.UTC_P545)
  );
  expect(isNightIn(TZ.UTC_P6)).toEqual(false);
  expect(isNightIn(TZ.UTC_P6)).toEqual(
    !isEveningIn(TZ.UTC_P6) &&
      !isAfternoonIn(TZ.UTC_P6) &&
      !isMorningIn(TZ.UTC_P6)
  );
  expect(isNightIn(TZ.UTC_P630)).toEqual(false);
  expect(isNightIn(TZ.UTC_P630)).toEqual(
    !isEveningIn(TZ.UTC_P630) &&
      !isAfternoonIn(TZ.UTC_P630) &&
      !isMorningIn(TZ.UTC_P630)
  );
  expect(isNightIn(TZ.UTC_P7)).toEqual(false);
  expect(isNightIn(TZ.UTC_P7)).toEqual(
    !isEveningIn(TZ.UTC_P7) &&
      !isAfternoonIn(TZ.UTC_P7) &&
      !isMorningIn(TZ.UTC_P7)
  );
  expect(isNightIn(TZ.UTC_P8)).toEqual(false);
  expect(isNightIn(TZ.UTC_P8)).toEqual(
    !isEveningIn(TZ.UTC_P8) &&
      !isAfternoonIn(TZ.UTC_P8) &&
      !isMorningIn(TZ.UTC_P8)
  );
  expect(isNightIn(TZ.UTC_P9)).toEqual(false);
  expect(isNightIn(TZ.UTC_P9)).toEqual(
    !isEveningIn(TZ.UTC_P9) &&
      !isAfternoonIn(TZ.UTC_P9) &&
      !isMorningIn(TZ.UTC_P9)
  );
  expect(isNightIn(TZ.UTC_P930)).toEqual(false);
  expect(isNightIn(TZ.UTC_P930)).toEqual(
    !isEveningIn(TZ.UTC_P930) &&
      !isAfternoonIn(TZ.UTC_P930) &&
      !isMorningIn(TZ.UTC_P930)
  );
  expect(isNightIn(TZ.UTC_P10)).toEqual(false);
  expect(isNightIn(TZ.UTC_P10)).toEqual(
    !isEveningIn(TZ.UTC_P10) &&
      !isAfternoonIn(TZ.UTC_P10) &&
      !isMorningIn(TZ.UTC_P10)
  );
  expect(isNightIn(TZ.UTC_P1030)).toEqual(false);
  expect(isNightIn(TZ.UTC_P1030)).toEqual(
    !isEveningIn(TZ.UTC_P1030) &&
      !isAfternoonIn(TZ.UTC_P1030) &&
      !isMorningIn(TZ.UTC_P1030)
  );
  expect(isNightIn(TZ.UTC_P12)).toEqual(false);
  expect(isNightIn(TZ.UTC_P12)).toEqual(
    !isEveningIn(TZ.UTC_P12) &&
      !isAfternoonIn(TZ.UTC_P12) &&
      !isMorningIn(TZ.UTC_P12)
  );
  expect(isNightIn(TZ.UTC_P1245)).toEqual(false);
  expect(isNightIn(TZ.UTC_P1245)).toEqual(
    !isEveningIn(TZ.UTC_P1245) &&
      !isAfternoonIn(TZ.UTC_P1245) &&
      !isMorningIn(TZ.UTC_P1245)
  );
  expect(isNightIn(TZ.UTC_P13)).toEqual(false);
  expect(isNightIn(TZ.UTC_P13)).toEqual(
    !isEveningIn(TZ.UTC_P13) &&
      !isAfternoonIn(TZ.UTC_P13) &&
      !isMorningIn(TZ.UTC_P13)
  );
});

test("night in IANATimeZone 2001_01_01_01_02", () => {
  jest.setSystemTime(new Date(DATES.DATE_2001_01_01_01_02));
  expect(isNightIn(TZ.UTC_M11)).toEqual(false);
  expect(isNightIn(TZ.UTC_M11)).toEqual(
    !isEveningIn(TZ.UTC_M11) &&
      !isAfternoonIn(TZ.UTC_M11) &&
      !isMorningIn(TZ.UTC_M11)
  );
  expect(isNightIn(TZ.UTC_M10)).toEqual(false);
  expect(isNightIn(TZ.UTC_M10)).toEqual(
    !isEveningIn(TZ.UTC_M10) &&
      !isAfternoonIn(TZ.UTC_M10) &&
      !isMorningIn(TZ.UTC_M10)
  );
  expect(isNightIn(TZ.UTC_M930)).toEqual(false);
  expect(isNightIn(TZ.UTC_M930)).toEqual(
    !isEveningIn(TZ.UTC_M930) &&
      !isAfternoonIn(TZ.UTC_M930) &&
      !isMorningIn(TZ.UTC_M930)
  );
  expect(isNightIn(TZ.UTC_M9)).toEqual(false);
  expect(isNightIn(TZ.UTC_M9)).toEqual(
    !isEveningIn(TZ.UTC_M9) &&
      !isAfternoonIn(TZ.UTC_M9) &&
      !isMorningIn(TZ.UTC_M9)
  );
  expect(isNightIn(TZ.UTC_M8)).toEqual(false);
  expect(isNightIn(TZ.UTC_M8)).toEqual(
    !isEveningIn(TZ.UTC_M8) &&
      !isAfternoonIn(TZ.UTC_M8) &&
      !isMorningIn(TZ.UTC_M8)
  );
  expect(isNightIn(TZ.UTC_M7)).toEqual(false);
  expect(isNightIn(TZ.UTC_M7)).toEqual(
    !isEveningIn(TZ.UTC_M7) &&
      !isAfternoonIn(TZ.UTC_M7) &&
      !isMorningIn(TZ.UTC_M7)
  );
  expect(isNightIn(TZ.UTC_M6)).toEqual(false);
  expect(isNightIn(TZ.UTC_M6)).toEqual(
    !isEveningIn(TZ.UTC_M6) &&
      !isAfternoonIn(TZ.UTC_M6) &&
      !isMorningIn(TZ.UTC_M6)
  );
  expect(isNightIn(TZ.UTC_M5)).toEqual(false);
  expect(isNightIn(TZ.UTC_M5)).toEqual(
    !isEveningIn(TZ.UTC_M5) &&
      !isAfternoonIn(TZ.UTC_M5) &&
      !isMorningIn(TZ.UTC_M5)
  );
  expect(isNightIn(TZ.UTC_M4)).toEqual(false);
  expect(isNightIn(TZ.UTC_M4)).toEqual(
    !isEveningIn(TZ.UTC_M4) &&
      !isAfternoonIn(TZ.UTC_M4) &&
      !isMorningIn(TZ.UTC_M4)
  );
  expect(isNightIn(TZ.UTC_M330)).toEqual(false);
  expect(isNightIn(TZ.UTC_M330)).toEqual(
    !isEveningIn(TZ.UTC_M330) &&
      !isAfternoonIn(TZ.UTC_M330) &&
      !isMorningIn(TZ.UTC_M330)
  );
  expect(isNightIn(TZ.UTC_M3)).toEqual(false);
  expect(isNightIn(TZ.UTC_M3)).toEqual(
    !isEveningIn(TZ.UTC_M3) &&
      !isAfternoonIn(TZ.UTC_M3) &&
      !isMorningIn(TZ.UTC_M3)
  );
  expect(isNightIn(TZ.UTC_M2)).toEqual(false);
  expect(isNightIn(TZ.UTC_M2)).toEqual(
    !isEveningIn(TZ.UTC_M2) &&
      !isAfternoonIn(TZ.UTC_M2) &&
      !isMorningIn(TZ.UTC_M2)
  );
  expect(isNightIn(TZ.UTC_M1)).toEqual(false);
  expect(isNightIn(TZ.UTC_M1)).toEqual(
    !isEveningIn(TZ.UTC_M1) &&
      !isAfternoonIn(TZ.UTC_M1) &&
      !isMorningIn(TZ.UTC_M1)
  );
  expect(isNightIn(TZ.UTC_0)).toEqual(false);
  expect(isNightIn(TZ.UTC_0)).toEqual(
    !isEveningIn(TZ.UTC_0) && !isAfternoonIn(TZ.UTC_0) && !isMorningIn(TZ.UTC_0)
  );
  expect(isNightIn(TZ.UTC_P1)).toEqual(false);
  expect(isNightIn(TZ.UTC_P1)).toEqual(
    !isEveningIn(TZ.UTC_P1) &&
      !isAfternoonIn(TZ.UTC_P1) &&
      !isMorningIn(TZ.UTC_P1)
  );
  expect(isNightIn(TZ.UTC_P2)).toEqual(false);
  expect(isNightIn(TZ.UTC_P2)).toEqual(
    !isEveningIn(TZ.UTC_P2) &&
      !isAfternoonIn(TZ.UTC_P2) &&
      !isMorningIn(TZ.UTC_P2)
  );
  expect(isNightIn(TZ.UTC_P3)).toEqual(false);
  expect(isNightIn(TZ.UTC_P3)).toEqual(
    !isEveningIn(TZ.UTC_P3) &&
      !isAfternoonIn(TZ.UTC_P3) &&
      !isMorningIn(TZ.UTC_P3)
  );
  expect(isNightIn(TZ.UTC_P330)).toEqual(false);
  expect(isNightIn(TZ.UTC_P330)).toEqual(
    !isEveningIn(TZ.UTC_P330) &&
      !isAfternoonIn(TZ.UTC_P330) &&
      !isMorningIn(TZ.UTC_P330)
  );
  expect(isNightIn(TZ.UTC_P4)).toEqual(false);
  expect(isNightIn(TZ.UTC_P4)).toEqual(
    !isEveningIn(TZ.UTC_P4) &&
      !isAfternoonIn(TZ.UTC_P4) &&
      !isMorningIn(TZ.UTC_P4)
  );
  expect(isNightIn(TZ.UTC_P430)).toEqual(false);
  expect(isNightIn(TZ.UTC_P430)).toEqual(
    !isEveningIn(TZ.UTC_P430) &&
      !isAfternoonIn(TZ.UTC_P430) &&
      !isMorningIn(TZ.UTC_P430)
  );
  expect(isNightIn(TZ.UTC_P5)).toEqual(false);
  expect(isNightIn(TZ.UTC_P5)).toEqual(
    !isEveningIn(TZ.UTC_P5) &&
      !isAfternoonIn(TZ.UTC_P5) &&
      !isMorningIn(TZ.UTC_P5)
  );
  expect(isNightIn(TZ.UTC_P530)).toEqual(false);
  expect(isNightIn(TZ.UTC_P530)).toEqual(
    !isEveningIn(TZ.UTC_P530) &&
      !isAfternoonIn(TZ.UTC_P530) &&
      !isMorningIn(TZ.UTC_P530)
  );
  expect(isNightIn(TZ.UTC_P545)).toEqual(false);
  expect(isNightIn(TZ.UTC_P545)).toEqual(
    !isEveningIn(TZ.UTC_P545) &&
      !isAfternoonIn(TZ.UTC_P545) &&
      !isMorningIn(TZ.UTC_P545)
  );
  expect(isNightIn(TZ.UTC_P6)).toEqual(false);
  expect(isNightIn(TZ.UTC_P6)).toEqual(
    !isEveningIn(TZ.UTC_P6) &&
      !isAfternoonIn(TZ.UTC_P6) &&
      !isMorningIn(TZ.UTC_P6)
  );
  expect(isNightIn(TZ.UTC_P630)).toEqual(false);
  expect(isNightIn(TZ.UTC_P630)).toEqual(
    !isEveningIn(TZ.UTC_P630) &&
      !isAfternoonIn(TZ.UTC_P630) &&
      !isMorningIn(TZ.UTC_P630)
  );
  expect(isNightIn(TZ.UTC_P7)).toEqual(false);
  expect(isNightIn(TZ.UTC_P7)).toEqual(
    !isEveningIn(TZ.UTC_P7) &&
      !isAfternoonIn(TZ.UTC_P7) &&
      !isMorningIn(TZ.UTC_P7)
  );
  expect(isNightIn(TZ.UTC_P8)).toEqual(false);
  expect(isNightIn(TZ.UTC_P8)).toEqual(
    !isEveningIn(TZ.UTC_P8) &&
      !isAfternoonIn(TZ.UTC_P8) &&
      !isMorningIn(TZ.UTC_P8)
  );
  expect(isNightIn(TZ.UTC_P9)).toEqual(false);
  expect(isNightIn(TZ.UTC_P9)).toEqual(
    !isEveningIn(TZ.UTC_P9) &&
      !isAfternoonIn(TZ.UTC_P9) &&
      !isMorningIn(TZ.UTC_P9)
  );
  expect(isNightIn(TZ.UTC_P930)).toEqual(false);
  expect(isNightIn(TZ.UTC_P930)).toEqual(
    !isEveningIn(TZ.UTC_P930) &&
      !isAfternoonIn(TZ.UTC_P930) &&
      !isMorningIn(TZ.UTC_P930)
  );
  expect(isNightIn(TZ.UTC_P10)).toEqual(false);
  expect(isNightIn(TZ.UTC_P10)).toEqual(
    !isEveningIn(TZ.UTC_P10) &&
      !isAfternoonIn(TZ.UTC_P10) &&
      !isMorningIn(TZ.UTC_P10)
  );
  expect(isNightIn(TZ.UTC_P1030)).toEqual(false);
  expect(isNightIn(TZ.UTC_P1030)).toEqual(
    !isEveningIn(TZ.UTC_P1030) &&
      !isAfternoonIn(TZ.UTC_P1030) &&
      !isMorningIn(TZ.UTC_P1030)
  );
  expect(isNightIn(TZ.UTC_P12)).toEqual(false);
  expect(isNightIn(TZ.UTC_P12)).toEqual(
    !isEveningIn(TZ.UTC_P12) &&
      !isAfternoonIn(TZ.UTC_P12) &&
      !isMorningIn(TZ.UTC_P12)
  );
  expect(isNightIn(TZ.UTC_P1245)).toEqual(false);
  expect(isNightIn(TZ.UTC_P1245)).toEqual(
    !isEveningIn(TZ.UTC_P1245) &&
      !isAfternoonIn(TZ.UTC_P1245) &&
      !isMorningIn(TZ.UTC_P1245)
  );
  expect(isNightIn(TZ.UTC_P13)).toEqual(false);
  expect(isNightIn(TZ.UTC_P13)).toEqual(
    !isEveningIn(TZ.UTC_P13) &&
      !isAfternoonIn(TZ.UTC_P13) &&
      !isMorningIn(TZ.UTC_P13)
  );
});

test("night in IANATimeZone 2002_02_02_02_04", () => {
  jest.setSystemTime(new Date(DATES.DATE_2002_02_02_02_04));
  expect(isNightIn(TZ.UTC_M11)).toEqual(false);
  expect(isNightIn(TZ.UTC_M11)).toEqual(
    !isEveningIn(TZ.UTC_M11) &&
      !isAfternoonIn(TZ.UTC_M11) &&
      !isMorningIn(TZ.UTC_M11)
  );
  expect(isNightIn(TZ.UTC_M10)).toEqual(false);
  expect(isNightIn(TZ.UTC_M10)).toEqual(
    !isEveningIn(TZ.UTC_M10) &&
      !isAfternoonIn(TZ.UTC_M10) &&
      !isMorningIn(TZ.UTC_M10)
  );
  expect(isNightIn(TZ.UTC_M930)).toEqual(false);
  expect(isNightIn(TZ.UTC_M930)).toEqual(
    !isEveningIn(TZ.UTC_M930) &&
      !isAfternoonIn(TZ.UTC_M930) &&
      !isMorningIn(TZ.UTC_M930)
  );
  expect(isNightIn(TZ.UTC_M9)).toEqual(false);
  expect(isNightIn(TZ.UTC_M9)).toEqual(
    !isEveningIn(TZ.UTC_M9) &&
      !isAfternoonIn(TZ.UTC_M9) &&
      !isMorningIn(TZ.UTC_M9)
  );
  expect(isNightIn(TZ.UTC_M8)).toEqual(false);
  expect(isNightIn(TZ.UTC_M8)).toEqual(
    !isEveningIn(TZ.UTC_M8) &&
      !isAfternoonIn(TZ.UTC_M8) &&
      !isMorningIn(TZ.UTC_M8)
  );
  expect(isNightIn(TZ.UTC_M7)).toEqual(false);
  expect(isNightIn(TZ.UTC_M7)).toEqual(
    !isEveningIn(TZ.UTC_M7) &&
      !isAfternoonIn(TZ.UTC_M7) &&
      !isMorningIn(TZ.UTC_M7)
  );
  expect(isNightIn(TZ.UTC_M6)).toEqual(false);
  expect(isNightIn(TZ.UTC_M6)).toEqual(
    !isEveningIn(TZ.UTC_M6) &&
      !isAfternoonIn(TZ.UTC_M6) &&
      !isMorningIn(TZ.UTC_M6)
  );
  expect(isNightIn(TZ.UTC_M5)).toEqual(false);
  expect(isNightIn(TZ.UTC_M5)).toEqual(
    !isEveningIn(TZ.UTC_M5) &&
      !isAfternoonIn(TZ.UTC_M5) &&
      !isMorningIn(TZ.UTC_M5)
  );
  expect(isNightIn(TZ.UTC_M4)).toEqual(false);
  expect(isNightIn(TZ.UTC_M4)).toEqual(
    !isEveningIn(TZ.UTC_M4) &&
      !isAfternoonIn(TZ.UTC_M4) &&
      !isMorningIn(TZ.UTC_M4)
  );
  expect(isNightIn(TZ.UTC_M330)).toEqual(false);
  expect(isNightIn(TZ.UTC_M330)).toEqual(
    !isEveningIn(TZ.UTC_M330) &&
      !isAfternoonIn(TZ.UTC_M330) &&
      !isMorningIn(TZ.UTC_M330)
  );
  expect(isNightIn(TZ.UTC_M3)).toEqual(false);
  expect(isNightIn(TZ.UTC_M3)).toEqual(
    !isEveningIn(TZ.UTC_M3) &&
      !isAfternoonIn(TZ.UTC_M3) &&
      !isMorningIn(TZ.UTC_M3)
  );
  expect(isNightIn(TZ.UTC_M2)).toEqual(false);
  expect(isNightIn(TZ.UTC_M2)).toEqual(
    !isEveningIn(TZ.UTC_M2) &&
      !isAfternoonIn(TZ.UTC_M2) &&
      !isMorningIn(TZ.UTC_M2)
  );
  expect(isNightIn(TZ.UTC_M1)).toEqual(false);
  expect(isNightIn(TZ.UTC_M1)).toEqual(
    !isEveningIn(TZ.UTC_M1) &&
      !isAfternoonIn(TZ.UTC_M1) &&
      !isMorningIn(TZ.UTC_M1)
  );
  expect(isNightIn(TZ.UTC_0)).toEqual(false);
  expect(isNightIn(TZ.UTC_0)).toEqual(
    !isEveningIn(TZ.UTC_0) && !isAfternoonIn(TZ.UTC_0) && !isMorningIn(TZ.UTC_0)
  );
  expect(isNightIn(TZ.UTC_P1)).toEqual(false);
  expect(isNightIn(TZ.UTC_P1)).toEqual(
    !isEveningIn(TZ.UTC_P1) &&
      !isAfternoonIn(TZ.UTC_P1) &&
      !isMorningIn(TZ.UTC_P1)
  );
  expect(isNightIn(TZ.UTC_P2)).toEqual(false);
  expect(isNightIn(TZ.UTC_P2)).toEqual(
    !isEveningIn(TZ.UTC_P2) &&
      !isAfternoonIn(TZ.UTC_P2) &&
      !isMorningIn(TZ.UTC_P2)
  );
  expect(isNightIn(TZ.UTC_P3)).toEqual(false);
  expect(isNightIn(TZ.UTC_P3)).toEqual(
    !isEveningIn(TZ.UTC_P3) &&
      !isAfternoonIn(TZ.UTC_P3) &&
      !isMorningIn(TZ.UTC_P3)
  );
  expect(isNightIn(TZ.UTC_P330)).toEqual(false);
  expect(isNightIn(TZ.UTC_P330)).toEqual(
    !isEveningIn(TZ.UTC_P330) &&
      !isAfternoonIn(TZ.UTC_P330) &&
      !isMorningIn(TZ.UTC_P330)
  );
  expect(isNightIn(TZ.UTC_P4)).toEqual(false);
  expect(isNightIn(TZ.UTC_P4)).toEqual(
    !isEveningIn(TZ.UTC_P4) &&
      !isAfternoonIn(TZ.UTC_P4) &&
      !isMorningIn(TZ.UTC_P4)
  );
  expect(isNightIn(TZ.UTC_P430)).toEqual(false);
  expect(isNightIn(TZ.UTC_P430)).toEqual(
    !isEveningIn(TZ.UTC_P430) &&
      !isAfternoonIn(TZ.UTC_P430) &&
      !isMorningIn(TZ.UTC_P430)
  );
  expect(isNightIn(TZ.UTC_P5)).toEqual(false);
  expect(isNightIn(TZ.UTC_P5)).toEqual(
    !isEveningIn(TZ.UTC_P5) &&
      !isAfternoonIn(TZ.UTC_P5) &&
      !isMorningIn(TZ.UTC_P5)
  );
  expect(isNightIn(TZ.UTC_P530)).toEqual(false);
  expect(isNightIn(TZ.UTC_P530)).toEqual(
    !isEveningIn(TZ.UTC_P530) &&
      !isAfternoonIn(TZ.UTC_P530) &&
      !isMorningIn(TZ.UTC_P530)
  );
  expect(isNightIn(TZ.UTC_P545)).toEqual(false);
  expect(isNightIn(TZ.UTC_P545)).toEqual(
    !isEveningIn(TZ.UTC_P545) &&
      !isAfternoonIn(TZ.UTC_P545) &&
      !isMorningIn(TZ.UTC_P545)
  );
  expect(isNightIn(TZ.UTC_P6)).toEqual(false);
  expect(isNightIn(TZ.UTC_P6)).toEqual(
    !isEveningIn(TZ.UTC_P6) &&
      !isAfternoonIn(TZ.UTC_P6) &&
      !isMorningIn(TZ.UTC_P6)
  );
  expect(isNightIn(TZ.UTC_P630)).toEqual(false);
  expect(isNightIn(TZ.UTC_P630)).toEqual(
    !isEveningIn(TZ.UTC_P630) &&
      !isAfternoonIn(TZ.UTC_P630) &&
      !isMorningIn(TZ.UTC_P630)
  );
  expect(isNightIn(TZ.UTC_P7)).toEqual(false);
  expect(isNightIn(TZ.UTC_P7)).toEqual(
    !isEveningIn(TZ.UTC_P7) &&
      !isAfternoonIn(TZ.UTC_P7) &&
      !isMorningIn(TZ.UTC_P7)
  );
  expect(isNightIn(TZ.UTC_P8)).toEqual(false);
  expect(isNightIn(TZ.UTC_P8)).toEqual(
    !isEveningIn(TZ.UTC_P8) &&
      !isAfternoonIn(TZ.UTC_P8) &&
      !isMorningIn(TZ.UTC_P8)
  );
  expect(isNightIn(TZ.UTC_P9)).toEqual(false);
  expect(isNightIn(TZ.UTC_P9)).toEqual(
    !isEveningIn(TZ.UTC_P9) &&
      !isAfternoonIn(TZ.UTC_P9) &&
      !isMorningIn(TZ.UTC_P9)
  );
  expect(isNightIn(TZ.UTC_P930)).toEqual(false);
  expect(isNightIn(TZ.UTC_P930)).toEqual(
    !isEveningIn(TZ.UTC_P930) &&
      !isAfternoonIn(TZ.UTC_P930) &&
      !isMorningIn(TZ.UTC_P930)
  );
  expect(isNightIn(TZ.UTC_P10)).toEqual(false);
  expect(isNightIn(TZ.UTC_P10)).toEqual(
    !isEveningIn(TZ.UTC_P10) &&
      !isAfternoonIn(TZ.UTC_P10) &&
      !isMorningIn(TZ.UTC_P10)
  );
  expect(isNightIn(TZ.UTC_P1030)).toEqual(false);
  expect(isNightIn(TZ.UTC_P1030)).toEqual(
    !isEveningIn(TZ.UTC_P1030) &&
      !isAfternoonIn(TZ.UTC_P1030) &&
      !isMorningIn(TZ.UTC_P1030)
  );
  expect(isNightIn(TZ.UTC_P12)).toEqual(false);
  expect(isNightIn(TZ.UTC_P12)).toEqual(
    !isEveningIn(TZ.UTC_P12) &&
      !isAfternoonIn(TZ.UTC_P12) &&
      !isMorningIn(TZ.UTC_P12)
  );
  expect(isNightIn(TZ.UTC_P1245)).toEqual(false);
  expect(isNightIn(TZ.UTC_P1245)).toEqual(
    !isEveningIn(TZ.UTC_P1245) &&
      !isAfternoonIn(TZ.UTC_P1245) &&
      !isMorningIn(TZ.UTC_P1245)
  );
  expect(isNightIn(TZ.UTC_P13)).toEqual(false);
  expect(isNightIn(TZ.UTC_P13)).toEqual(
    !isEveningIn(TZ.UTC_P13) &&
      !isAfternoonIn(TZ.UTC_P13) &&
      !isMorningIn(TZ.UTC_P13)
  );
});

test("night in IANATimeZone 2003_03_03_03_06", () => {
  jest.setSystemTime(new Date(DATES.DATE_2003_03_03_03_06));
  expect(isNightIn(TZ.UTC_M11)).toEqual(false);
  expect(isNightIn(TZ.UTC_M11)).toEqual(
    !isEveningIn(TZ.UTC_M11) &&
      !isAfternoonIn(TZ.UTC_M11) &&
      !isMorningIn(TZ.UTC_M11)
  );
  expect(isNightIn(TZ.UTC_M10)).toEqual(false);
  expect(isNightIn(TZ.UTC_M10)).toEqual(
    !isEveningIn(TZ.UTC_M10) &&
      !isAfternoonIn(TZ.UTC_M10) &&
      !isMorningIn(TZ.UTC_M10)
  );
  expect(isNightIn(TZ.UTC_M930)).toEqual(false);
  expect(isNightIn(TZ.UTC_M930)).toEqual(
    !isEveningIn(TZ.UTC_M930) &&
      !isAfternoonIn(TZ.UTC_M930) &&
      !isMorningIn(TZ.UTC_M930)
  );
  expect(isNightIn(TZ.UTC_M9)).toEqual(false);
  expect(isNightIn(TZ.UTC_M9)).toEqual(
    !isEveningIn(TZ.UTC_M9) &&
      !isAfternoonIn(TZ.UTC_M9) &&
      !isMorningIn(TZ.UTC_M9)
  );
  expect(isNightIn(TZ.UTC_M8)).toEqual(false);
  expect(isNightIn(TZ.UTC_M8)).toEqual(
    !isEveningIn(TZ.UTC_M8) &&
      !isAfternoonIn(TZ.UTC_M8) &&
      !isMorningIn(TZ.UTC_M8)
  );
  expect(isNightIn(TZ.UTC_M7)).toEqual(false);
  expect(isNightIn(TZ.UTC_M7)).toEqual(
    !isEveningIn(TZ.UTC_M7) &&
      !isAfternoonIn(TZ.UTC_M7) &&
      !isMorningIn(TZ.UTC_M7)
  );
  expect(isNightIn(TZ.UTC_M6)).toEqual(false);
  expect(isNightIn(TZ.UTC_M6)).toEqual(
    !isEveningIn(TZ.UTC_M6) &&
      !isAfternoonIn(TZ.UTC_M6) &&
      !isMorningIn(TZ.UTC_M6)
  );
  expect(isNightIn(TZ.UTC_M5)).toEqual(false);
  expect(isNightIn(TZ.UTC_M5)).toEqual(
    !isEveningIn(TZ.UTC_M5) &&
      !isAfternoonIn(TZ.UTC_M5) &&
      !isMorningIn(TZ.UTC_M5)
  );
  expect(isNightIn(TZ.UTC_M4)).toEqual(false);
  expect(isNightIn(TZ.UTC_M4)).toEqual(
    !isEveningIn(TZ.UTC_M4) &&
      !isAfternoonIn(TZ.UTC_M4) &&
      !isMorningIn(TZ.UTC_M4)
  );
  expect(isNightIn(TZ.UTC_M330)).toEqual(false);
  expect(isNightIn(TZ.UTC_M330)).toEqual(
    !isEveningIn(TZ.UTC_M330) &&
      !isAfternoonIn(TZ.UTC_M330) &&
      !isMorningIn(TZ.UTC_M330)
  );
  expect(isNightIn(TZ.UTC_M3)).toEqual(false);
  expect(isNightIn(TZ.UTC_M3)).toEqual(
    !isEveningIn(TZ.UTC_M3) &&
      !isAfternoonIn(TZ.UTC_M3) &&
      !isMorningIn(TZ.UTC_M3)
  );
  expect(isNightIn(TZ.UTC_M2)).toEqual(false);
  expect(isNightIn(TZ.UTC_M2)).toEqual(
    !isEveningIn(TZ.UTC_M2) &&
      !isAfternoonIn(TZ.UTC_M2) &&
      !isMorningIn(TZ.UTC_M2)
  );
  expect(isNightIn(TZ.UTC_M1)).toEqual(false);
  expect(isNightIn(TZ.UTC_M1)).toEqual(
    !isEveningIn(TZ.UTC_M1) &&
      !isAfternoonIn(TZ.UTC_M1) &&
      !isMorningIn(TZ.UTC_M1)
  );
  expect(isNightIn(TZ.UTC_0)).toEqual(false);
  expect(isNightIn(TZ.UTC_0)).toEqual(
    !isEveningIn(TZ.UTC_0) && !isAfternoonIn(TZ.UTC_0) && !isMorningIn(TZ.UTC_0)
  );
  expect(isNightIn(TZ.UTC_P1)).toEqual(false);
  expect(isNightIn(TZ.UTC_P1)).toEqual(
    !isEveningIn(TZ.UTC_P1) &&
      !isAfternoonIn(TZ.UTC_P1) &&
      !isMorningIn(TZ.UTC_P1)
  );
  expect(isNightIn(TZ.UTC_P2)).toEqual(false);
  expect(isNightIn(TZ.UTC_P2)).toEqual(
    !isEveningIn(TZ.UTC_P2) &&
      !isAfternoonIn(TZ.UTC_P2) &&
      !isMorningIn(TZ.UTC_P2)
  );
  expect(isNightIn(TZ.UTC_P3)).toEqual(false);
  expect(isNightIn(TZ.UTC_P3)).toEqual(
    !isEveningIn(TZ.UTC_P3) &&
      !isAfternoonIn(TZ.UTC_P3) &&
      !isMorningIn(TZ.UTC_P3)
  );
  expect(isNightIn(TZ.UTC_P330)).toEqual(false);
  expect(isNightIn(TZ.UTC_P330)).toEqual(
    !isEveningIn(TZ.UTC_P330) &&
      !isAfternoonIn(TZ.UTC_P330) &&
      !isMorningIn(TZ.UTC_P330)
  );
  expect(isNightIn(TZ.UTC_P4)).toEqual(false);
  expect(isNightIn(TZ.UTC_P4)).toEqual(
    !isEveningIn(TZ.UTC_P4) &&
      !isAfternoonIn(TZ.UTC_P4) &&
      !isMorningIn(TZ.UTC_P4)
  );
  expect(isNightIn(TZ.UTC_P430)).toEqual(false);
  expect(isNightIn(TZ.UTC_P430)).toEqual(
    !isEveningIn(TZ.UTC_P430) &&
      !isAfternoonIn(TZ.UTC_P430) &&
      !isMorningIn(TZ.UTC_P430)
  );
  expect(isNightIn(TZ.UTC_P5)).toEqual(false);
  expect(isNightIn(TZ.UTC_P5)).toEqual(
    !isEveningIn(TZ.UTC_P5) &&
      !isAfternoonIn(TZ.UTC_P5) &&
      !isMorningIn(TZ.UTC_P5)
  );
  expect(isNightIn(TZ.UTC_P530)).toEqual(false);
  expect(isNightIn(TZ.UTC_P530)).toEqual(
    !isEveningIn(TZ.UTC_P530) &&
      !isAfternoonIn(TZ.UTC_P530) &&
      !isMorningIn(TZ.UTC_P530)
  );
  expect(isNightIn(TZ.UTC_P545)).toEqual(false);
  expect(isNightIn(TZ.UTC_P545)).toEqual(
    !isEveningIn(TZ.UTC_P545) &&
      !isAfternoonIn(TZ.UTC_P545) &&
      !isMorningIn(TZ.UTC_P545)
  );
  expect(isNightIn(TZ.UTC_P6)).toEqual(false);
  expect(isNightIn(TZ.UTC_P6)).toEqual(
    !isEveningIn(TZ.UTC_P6) &&
      !isAfternoonIn(TZ.UTC_P6) &&
      !isMorningIn(TZ.UTC_P6)
  );
  expect(isNightIn(TZ.UTC_P630)).toEqual(false);
  expect(isNightIn(TZ.UTC_P630)).toEqual(
    !isEveningIn(TZ.UTC_P630) &&
      !isAfternoonIn(TZ.UTC_P630) &&
      !isMorningIn(TZ.UTC_P630)
  );
  expect(isNightIn(TZ.UTC_P7)).toEqual(false);
  expect(isNightIn(TZ.UTC_P7)).toEqual(
    !isEveningIn(TZ.UTC_P7) &&
      !isAfternoonIn(TZ.UTC_P7) &&
      !isMorningIn(TZ.UTC_P7)
  );
  expect(isNightIn(TZ.UTC_P8)).toEqual(false);
  expect(isNightIn(TZ.UTC_P8)).toEqual(
    !isEveningIn(TZ.UTC_P8) &&
      !isAfternoonIn(TZ.UTC_P8) &&
      !isMorningIn(TZ.UTC_P8)
  );
  expect(isNightIn(TZ.UTC_P9)).toEqual(false);
  expect(isNightIn(TZ.UTC_P9)).toEqual(
    !isEveningIn(TZ.UTC_P9) &&
      !isAfternoonIn(TZ.UTC_P9) &&
      !isMorningIn(TZ.UTC_P9)
  );
  expect(isNightIn(TZ.UTC_P930)).toEqual(false);
  expect(isNightIn(TZ.UTC_P930)).toEqual(
    !isEveningIn(TZ.UTC_P930) &&
      !isAfternoonIn(TZ.UTC_P930) &&
      !isMorningIn(TZ.UTC_P930)
  );
  expect(isNightIn(TZ.UTC_P10)).toEqual(false);
  expect(isNightIn(TZ.UTC_P10)).toEqual(
    !isEveningIn(TZ.UTC_P10) &&
      !isAfternoonIn(TZ.UTC_P10) &&
      !isMorningIn(TZ.UTC_P10)
  );
  expect(isNightIn(TZ.UTC_P1030)).toEqual(false);
  expect(isNightIn(TZ.UTC_P1030)).toEqual(
    !isEveningIn(TZ.UTC_P1030) &&
      !isAfternoonIn(TZ.UTC_P1030) &&
      !isMorningIn(TZ.UTC_P1030)
  );
  expect(isNightIn(TZ.UTC_P12)).toEqual(false);
  expect(isNightIn(TZ.UTC_P12)).toEqual(
    !isEveningIn(TZ.UTC_P12) &&
      !isAfternoonIn(TZ.UTC_P12) &&
      !isMorningIn(TZ.UTC_P12)
  );
  expect(isNightIn(TZ.UTC_P1245)).toEqual(false);
  expect(isNightIn(TZ.UTC_P1245)).toEqual(
    !isEveningIn(TZ.UTC_P1245) &&
      !isAfternoonIn(TZ.UTC_P1245) &&
      !isMorningIn(TZ.UTC_P1245)
  );
  expect(isNightIn(TZ.UTC_P13)).toEqual(false);
  expect(isNightIn(TZ.UTC_P13)).toEqual(
    !isEveningIn(TZ.UTC_P13) &&
      !isAfternoonIn(TZ.UTC_P13) &&
      !isMorningIn(TZ.UTC_P13)
  );
});

test("night in IANATimeZone 2004_04_04_04_08", () => {
  jest.setSystemTime(new Date(DATES.DATE_2004_04_04_04_08));
  expect(isNightIn(TZ.UTC_M11)).toEqual(false);
  expect(isNightIn(TZ.UTC_M11)).toEqual(
    !isEveningIn(TZ.UTC_M11) &&
      !isAfternoonIn(TZ.UTC_M11) &&
      !isMorningIn(TZ.UTC_M11)
  );
  expect(isNightIn(TZ.UTC_M10)).toEqual(false);
  expect(isNightIn(TZ.UTC_M10)).toEqual(
    !isEveningIn(TZ.UTC_M10) &&
      !isAfternoonIn(TZ.UTC_M10) &&
      !isMorningIn(TZ.UTC_M10)
  );
  expect(isNightIn(TZ.UTC_M930)).toEqual(false);
  expect(isNightIn(TZ.UTC_M930)).toEqual(
    !isEveningIn(TZ.UTC_M930) &&
      !isAfternoonIn(TZ.UTC_M930) &&
      !isMorningIn(TZ.UTC_M930)
  );
  expect(isNightIn(TZ.UTC_M9)).toEqual(false);
  expect(isNightIn(TZ.UTC_M9)).toEqual(
    !isEveningIn(TZ.UTC_M9) &&
      !isAfternoonIn(TZ.UTC_M9) &&
      !isMorningIn(TZ.UTC_M9)
  );
  expect(isNightIn(TZ.UTC_M8)).toEqual(false);
  expect(isNightIn(TZ.UTC_M8)).toEqual(
    !isEveningIn(TZ.UTC_M8) &&
      !isAfternoonIn(TZ.UTC_M8) &&
      !isMorningIn(TZ.UTC_M8)
  );
  expect(isNightIn(TZ.UTC_M7)).toEqual(false);
  expect(isNightIn(TZ.UTC_M7)).toEqual(
    !isEveningIn(TZ.UTC_M7) &&
      !isAfternoonIn(TZ.UTC_M7) &&
      !isMorningIn(TZ.UTC_M7)
  );
  expect(isNightIn(TZ.UTC_M6)).toEqual(false);
  expect(isNightIn(TZ.UTC_M6)).toEqual(
    !isEveningIn(TZ.UTC_M6) &&
      !isAfternoonIn(TZ.UTC_M6) &&
      !isMorningIn(TZ.UTC_M6)
  );
  expect(isNightIn(TZ.UTC_M5)).toEqual(false);
  expect(isNightIn(TZ.UTC_M5)).toEqual(
    !isEveningIn(TZ.UTC_M5) &&
      !isAfternoonIn(TZ.UTC_M5) &&
      !isMorningIn(TZ.UTC_M5)
  );
  expect(isNightIn(TZ.UTC_M4)).toEqual(false);
  expect(isNightIn(TZ.UTC_M4)).toEqual(
    !isEveningIn(TZ.UTC_M4) &&
      !isAfternoonIn(TZ.UTC_M4) &&
      !isMorningIn(TZ.UTC_M4)
  );
  expect(isNightIn(TZ.UTC_M330)).toEqual(false);
  expect(isNightIn(TZ.UTC_M330)).toEqual(
    !isEveningIn(TZ.UTC_M330) &&
      !isAfternoonIn(TZ.UTC_M330) &&
      !isMorningIn(TZ.UTC_M330)
  );
  expect(isNightIn(TZ.UTC_M3)).toEqual(false);
  expect(isNightIn(TZ.UTC_M3)).toEqual(
    !isEveningIn(TZ.UTC_M3) &&
      !isAfternoonIn(TZ.UTC_M3) &&
      !isMorningIn(TZ.UTC_M3)
  );
  expect(isNightIn(TZ.UTC_M2)).toEqual(false);
  expect(isNightIn(TZ.UTC_M2)).toEqual(
    !isEveningIn(TZ.UTC_M2) &&
      !isAfternoonIn(TZ.UTC_M2) &&
      !isMorningIn(TZ.UTC_M2)
  );
  expect(isNightIn(TZ.UTC_M1)).toEqual(false);
  expect(isNightIn(TZ.UTC_M1)).toEqual(
    !isEveningIn(TZ.UTC_M1) &&
      !isAfternoonIn(TZ.UTC_M1) &&
      !isMorningIn(TZ.UTC_M1)
  );
  expect(isNightIn(TZ.UTC_0)).toEqual(false);
  expect(isNightIn(TZ.UTC_0)).toEqual(
    !isEveningIn(TZ.UTC_0) && !isAfternoonIn(TZ.UTC_0) && !isMorningIn(TZ.UTC_0)
  );
  expect(isNightIn(TZ.UTC_P1)).toEqual(false);
  expect(isNightIn(TZ.UTC_P1)).toEqual(
    !isEveningIn(TZ.UTC_P1) &&
      !isAfternoonIn(TZ.UTC_P1) &&
      !isMorningIn(TZ.UTC_P1)
  );
  expect(isNightIn(TZ.UTC_P2)).toEqual(false);
  expect(isNightIn(TZ.UTC_P2)).toEqual(
    !isEveningIn(TZ.UTC_P2) &&
      !isAfternoonIn(TZ.UTC_P2) &&
      !isMorningIn(TZ.UTC_P2)
  );
  expect(isNightIn(TZ.UTC_P3)).toEqual(false);
  expect(isNightIn(TZ.UTC_P3)).toEqual(
    !isEveningIn(TZ.UTC_P3) &&
      !isAfternoonIn(TZ.UTC_P3) &&
      !isMorningIn(TZ.UTC_P3)
  );
  expect(isNightIn(TZ.UTC_P330)).toEqual(false);
  expect(isNightIn(TZ.UTC_P330)).toEqual(
    !isEveningIn(TZ.UTC_P330) &&
      !isAfternoonIn(TZ.UTC_P330) &&
      !isMorningIn(TZ.UTC_P330)
  );
  expect(isNightIn(TZ.UTC_P4)).toEqual(false);
  expect(isNightIn(TZ.UTC_P4)).toEqual(
    !isEveningIn(TZ.UTC_P4) &&
      !isAfternoonIn(TZ.UTC_P4) &&
      !isMorningIn(TZ.UTC_P4)
  );
  expect(isNightIn(TZ.UTC_P430)).toEqual(false);
  expect(isNightIn(TZ.UTC_P430)).toEqual(
    !isEveningIn(TZ.UTC_P430) &&
      !isAfternoonIn(TZ.UTC_P430) &&
      !isMorningIn(TZ.UTC_P430)
  );
  expect(isNightIn(TZ.UTC_P5)).toEqual(false);
  expect(isNightIn(TZ.UTC_P5)).toEqual(
    !isEveningIn(TZ.UTC_P5) &&
      !isAfternoonIn(TZ.UTC_P5) &&
      !isMorningIn(TZ.UTC_P5)
  );
  expect(isNightIn(TZ.UTC_P530)).toEqual(false);
  expect(isNightIn(TZ.UTC_P530)).toEqual(
    !isEveningIn(TZ.UTC_P530) &&
      !isAfternoonIn(TZ.UTC_P530) &&
      !isMorningIn(TZ.UTC_P530)
  );
  expect(isNightIn(TZ.UTC_P545)).toEqual(false);
  expect(isNightIn(TZ.UTC_P545)).toEqual(
    !isEveningIn(TZ.UTC_P545) &&
      !isAfternoonIn(TZ.UTC_P545) &&
      !isMorningIn(TZ.UTC_P545)
  );
  expect(isNightIn(TZ.UTC_P6)).toEqual(false);
  expect(isNightIn(TZ.UTC_P6)).toEqual(
    !isEveningIn(TZ.UTC_P6) &&
      !isAfternoonIn(TZ.UTC_P6) &&
      !isMorningIn(TZ.UTC_P6)
  );
  expect(isNightIn(TZ.UTC_P630)).toEqual(false);
  expect(isNightIn(TZ.UTC_P630)).toEqual(
    !isEveningIn(TZ.UTC_P630) &&
      !isAfternoonIn(TZ.UTC_P630) &&
      !isMorningIn(TZ.UTC_P630)
  );
  expect(isNightIn(TZ.UTC_P7)).toEqual(false);
  expect(isNightIn(TZ.UTC_P7)).toEqual(
    !isEveningIn(TZ.UTC_P7) &&
      !isAfternoonIn(TZ.UTC_P7) &&
      !isMorningIn(TZ.UTC_P7)
  );
  expect(isNightIn(TZ.UTC_P8)).toEqual(false);
  expect(isNightIn(TZ.UTC_P8)).toEqual(
    !isEveningIn(TZ.UTC_P8) &&
      !isAfternoonIn(TZ.UTC_P8) &&
      !isMorningIn(TZ.UTC_P8)
  );
  expect(isNightIn(TZ.UTC_P9)).toEqual(false);
  expect(isNightIn(TZ.UTC_P9)).toEqual(
    !isEveningIn(TZ.UTC_P9) &&
      !isAfternoonIn(TZ.UTC_P9) &&
      !isMorningIn(TZ.UTC_P9)
  );
  expect(isNightIn(TZ.UTC_P930)).toEqual(false);
  expect(isNightIn(TZ.UTC_P930)).toEqual(
    !isEveningIn(TZ.UTC_P930) &&
      !isAfternoonIn(TZ.UTC_P930) &&
      !isMorningIn(TZ.UTC_P930)
  );
  expect(isNightIn(TZ.UTC_P10)).toEqual(false);
  expect(isNightIn(TZ.UTC_P10)).toEqual(
    !isEveningIn(TZ.UTC_P10) &&
      !isAfternoonIn(TZ.UTC_P10) &&
      !isMorningIn(TZ.UTC_P10)
  );
  expect(isNightIn(TZ.UTC_P1030)).toEqual(false);
  expect(isNightIn(TZ.UTC_P1030)).toEqual(
    !isEveningIn(TZ.UTC_P1030) &&
      !isAfternoonIn(TZ.UTC_P1030) &&
      !isMorningIn(TZ.UTC_P1030)
  );
  expect(isNightIn(TZ.UTC_P12)).toEqual(false);
  expect(isNightIn(TZ.UTC_P12)).toEqual(
    !isEveningIn(TZ.UTC_P12) &&
      !isAfternoonIn(TZ.UTC_P12) &&
      !isMorningIn(TZ.UTC_P12)
  );
  expect(isNightIn(TZ.UTC_P1245)).toEqual(false);
  expect(isNightIn(TZ.UTC_P1245)).toEqual(
    !isEveningIn(TZ.UTC_P1245) &&
      !isAfternoonIn(TZ.UTC_P1245) &&
      !isMorningIn(TZ.UTC_P1245)
  );
  expect(isNightIn(TZ.UTC_P13)).toEqual(false);
  expect(isNightIn(TZ.UTC_P13)).toEqual(
    !isEveningIn(TZ.UTC_P13) &&
      !isAfternoonIn(TZ.UTC_P13) &&
      !isMorningIn(TZ.UTC_P13)
  );
});

test("night in IANATimeZone 2005_05_05_05_10", () => {
  jest.setSystemTime(new Date(DATES.DATE_2005_05_05_05_10));
  expect(isNightIn(TZ.UTC_M11)).toEqual(false);
  expect(isNightIn(TZ.UTC_M11)).toEqual(
    !isEveningIn(TZ.UTC_M11) &&
      !isAfternoonIn(TZ.UTC_M11) &&
      !isMorningIn(TZ.UTC_M11)
  );
  expect(isNightIn(TZ.UTC_M10)).toEqual(false);
  expect(isNightIn(TZ.UTC_M10)).toEqual(
    !isEveningIn(TZ.UTC_M10) &&
      !isAfternoonIn(TZ.UTC_M10) &&
      !isMorningIn(TZ.UTC_M10)
  );
  expect(isNightIn(TZ.UTC_M930)).toEqual(false);
  expect(isNightIn(TZ.UTC_M930)).toEqual(
    !isEveningIn(TZ.UTC_M930) &&
      !isAfternoonIn(TZ.UTC_M930) &&
      !isMorningIn(TZ.UTC_M930)
  );
  expect(isNightIn(TZ.UTC_M9)).toEqual(false);
  expect(isNightIn(TZ.UTC_M9)).toEqual(
    !isEveningIn(TZ.UTC_M9) &&
      !isAfternoonIn(TZ.UTC_M9) &&
      !isMorningIn(TZ.UTC_M9)
  );
  expect(isNightIn(TZ.UTC_M8)).toEqual(false);
  expect(isNightIn(TZ.UTC_M8)).toEqual(
    !isEveningIn(TZ.UTC_M8) &&
      !isAfternoonIn(TZ.UTC_M8) &&
      !isMorningIn(TZ.UTC_M8)
  );
  expect(isNightIn(TZ.UTC_M7)).toEqual(false);
  expect(isNightIn(TZ.UTC_M7)).toEqual(
    !isEveningIn(TZ.UTC_M7) &&
      !isAfternoonIn(TZ.UTC_M7) &&
      !isMorningIn(TZ.UTC_M7)
  );
  expect(isNightIn(TZ.UTC_M6)).toEqual(false);
  expect(isNightIn(TZ.UTC_M6)).toEqual(
    !isEveningIn(TZ.UTC_M6) &&
      !isAfternoonIn(TZ.UTC_M6) &&
      !isMorningIn(TZ.UTC_M6)
  );
  expect(isNightIn(TZ.UTC_M5)).toEqual(false);
  expect(isNightIn(TZ.UTC_M5)).toEqual(
    !isEveningIn(TZ.UTC_M5) &&
      !isAfternoonIn(TZ.UTC_M5) &&
      !isMorningIn(TZ.UTC_M5)
  );
  expect(isNightIn(TZ.UTC_M4)).toEqual(false);
  expect(isNightIn(TZ.UTC_M4)).toEqual(
    !isEveningIn(TZ.UTC_M4) &&
      !isAfternoonIn(TZ.UTC_M4) &&
      !isMorningIn(TZ.UTC_M4)
  );
  expect(isNightIn(TZ.UTC_M330)).toEqual(false);
  expect(isNightIn(TZ.UTC_M330)).toEqual(
    !isEveningIn(TZ.UTC_M330) &&
      !isAfternoonIn(TZ.UTC_M330) &&
      !isMorningIn(TZ.UTC_M330)
  );
  expect(isNightIn(TZ.UTC_M3)).toEqual(false);
  expect(isNightIn(TZ.UTC_M3)).toEqual(
    !isEveningIn(TZ.UTC_M3) &&
      !isAfternoonIn(TZ.UTC_M3) &&
      !isMorningIn(TZ.UTC_M3)
  );
  expect(isNightIn(TZ.UTC_M2)).toEqual(false);
  expect(isNightIn(TZ.UTC_M2)).toEqual(
    !isEveningIn(TZ.UTC_M2) &&
      !isAfternoonIn(TZ.UTC_M2) &&
      !isMorningIn(TZ.UTC_M2)
  );
  expect(isNightIn(TZ.UTC_M1)).toEqual(false);
  expect(isNightIn(TZ.UTC_M1)).toEqual(
    !isEveningIn(TZ.UTC_M1) &&
      !isAfternoonIn(TZ.UTC_M1) &&
      !isMorningIn(TZ.UTC_M1)
  );
  expect(isNightIn(TZ.UTC_0)).toEqual(false);
  expect(isNightIn(TZ.UTC_0)).toEqual(
    !isEveningIn(TZ.UTC_0) && !isAfternoonIn(TZ.UTC_0) && !isMorningIn(TZ.UTC_0)
  );
  expect(isNightIn(TZ.UTC_P1)).toEqual(false);
  expect(isNightIn(TZ.UTC_P1)).toEqual(
    !isEveningIn(TZ.UTC_P1) &&
      !isAfternoonIn(TZ.UTC_P1) &&
      !isMorningIn(TZ.UTC_P1)
  );
  expect(isNightIn(TZ.UTC_P2)).toEqual(false);
  expect(isNightIn(TZ.UTC_P2)).toEqual(
    !isEveningIn(TZ.UTC_P2) &&
      !isAfternoonIn(TZ.UTC_P2) &&
      !isMorningIn(TZ.UTC_P2)
  );
  expect(isNightIn(TZ.UTC_P3)).toEqual(false);
  expect(isNightIn(TZ.UTC_P3)).toEqual(
    !isEveningIn(TZ.UTC_P3) &&
      !isAfternoonIn(TZ.UTC_P3) &&
      !isMorningIn(TZ.UTC_P3)
  );
  expect(isNightIn(TZ.UTC_P330)).toEqual(false);
  expect(isNightIn(TZ.UTC_P330)).toEqual(
    !isEveningIn(TZ.UTC_P330) &&
      !isAfternoonIn(TZ.UTC_P330) &&
      !isMorningIn(TZ.UTC_P330)
  );
  expect(isNightIn(TZ.UTC_P4)).toEqual(false);
  expect(isNightIn(TZ.UTC_P4)).toEqual(
    !isEveningIn(TZ.UTC_P4) &&
      !isAfternoonIn(TZ.UTC_P4) &&
      !isMorningIn(TZ.UTC_P4)
  );
  expect(isNightIn(TZ.UTC_P430)).toEqual(false);
  expect(isNightIn(TZ.UTC_P430)).toEqual(
    !isEveningIn(TZ.UTC_P430) &&
      !isAfternoonIn(TZ.UTC_P430) &&
      !isMorningIn(TZ.UTC_P430)
  );
  expect(isNightIn(TZ.UTC_P5)).toEqual(false);
  expect(isNightIn(TZ.UTC_P5)).toEqual(
    !isEveningIn(TZ.UTC_P5) &&
      !isAfternoonIn(TZ.UTC_P5) &&
      !isMorningIn(TZ.UTC_P5)
  );
  expect(isNightIn(TZ.UTC_P530)).toEqual(false);
  expect(isNightIn(TZ.UTC_P530)).toEqual(
    !isEveningIn(TZ.UTC_P530) &&
      !isAfternoonIn(TZ.UTC_P530) &&
      !isMorningIn(TZ.UTC_P530)
  );
  expect(isNightIn(TZ.UTC_P545)).toEqual(false);
  expect(isNightIn(TZ.UTC_P545)).toEqual(
    !isEveningIn(TZ.UTC_P545) &&
      !isAfternoonIn(TZ.UTC_P545) &&
      !isMorningIn(TZ.UTC_P545)
  );
  expect(isNightIn(TZ.UTC_P6)).toEqual(false);
  expect(isNightIn(TZ.UTC_P6)).toEqual(
    !isEveningIn(TZ.UTC_P6) &&
      !isAfternoonIn(TZ.UTC_P6) &&
      !isMorningIn(TZ.UTC_P6)
  );
  expect(isNightIn(TZ.UTC_P630)).toEqual(false);
  expect(isNightIn(TZ.UTC_P630)).toEqual(
    !isEveningIn(TZ.UTC_P630) &&
      !isAfternoonIn(TZ.UTC_P630) &&
      !isMorningIn(TZ.UTC_P630)
  );
  expect(isNightIn(TZ.UTC_P7)).toEqual(false);
  expect(isNightIn(TZ.UTC_P7)).toEqual(
    !isEveningIn(TZ.UTC_P7) &&
      !isAfternoonIn(TZ.UTC_P7) &&
      !isMorningIn(TZ.UTC_P7)
  );
  expect(isNightIn(TZ.UTC_P8)).toEqual(false);
  expect(isNightIn(TZ.UTC_P8)).toEqual(
    !isEveningIn(TZ.UTC_P8) &&
      !isAfternoonIn(TZ.UTC_P8) &&
      !isMorningIn(TZ.UTC_P8)
  );
  expect(isNightIn(TZ.UTC_P9)).toEqual(false);
  expect(isNightIn(TZ.UTC_P9)).toEqual(
    !isEveningIn(TZ.UTC_P9) &&
      !isAfternoonIn(TZ.UTC_P9) &&
      !isMorningIn(TZ.UTC_P9)
  );
  expect(isNightIn(TZ.UTC_P930)).toEqual(false);
  expect(isNightIn(TZ.UTC_P930)).toEqual(
    !isEveningIn(TZ.UTC_P930) &&
      !isAfternoonIn(TZ.UTC_P930) &&
      !isMorningIn(TZ.UTC_P930)
  );
  expect(isNightIn(TZ.UTC_P10)).toEqual(false);
  expect(isNightIn(TZ.UTC_P10)).toEqual(
    !isEveningIn(TZ.UTC_P10) &&
      !isAfternoonIn(TZ.UTC_P10) &&
      !isMorningIn(TZ.UTC_P10)
  );
  expect(isNightIn(TZ.UTC_P1030)).toEqual(false);
  expect(isNightIn(TZ.UTC_P1030)).toEqual(
    !isEveningIn(TZ.UTC_P1030) &&
      !isAfternoonIn(TZ.UTC_P1030) &&
      !isMorningIn(TZ.UTC_P1030)
  );
  expect(isNightIn(TZ.UTC_P12)).toEqual(false);
  expect(isNightIn(TZ.UTC_P12)).toEqual(
    !isEveningIn(TZ.UTC_P12) &&
      !isAfternoonIn(TZ.UTC_P12) &&
      !isMorningIn(TZ.UTC_P12)
  );
  expect(isNightIn(TZ.UTC_P1245)).toEqual(false);
  expect(isNightIn(TZ.UTC_P1245)).toEqual(
    !isEveningIn(TZ.UTC_P1245) &&
      !isAfternoonIn(TZ.UTC_P1245) &&
      !isMorningIn(TZ.UTC_P1245)
  );
  expect(isNightIn(TZ.UTC_P13)).toEqual(false);
  expect(isNightIn(TZ.UTC_P13)).toEqual(
    !isEveningIn(TZ.UTC_P13) &&
      !isAfternoonIn(TZ.UTC_P13) &&
      !isMorningIn(TZ.UTC_P13)
  );
});

test("night in IANATimeZone 2006_06_06_06_12", () => {
  jest.setSystemTime(new Date(DATES.DATE_2006_06_06_06_12));
  expect(isNightIn(TZ.UTC_M11)).toEqual(false);
  expect(isNightIn(TZ.UTC_M11)).toEqual(
    !isEveningIn(TZ.UTC_M11) &&
      !isAfternoonIn(TZ.UTC_M11) &&
      !isMorningIn(TZ.UTC_M11)
  );
  expect(isNightIn(TZ.UTC_M10)).toEqual(false);
  expect(isNightIn(TZ.UTC_M10)).toEqual(
    !isEveningIn(TZ.UTC_M10) &&
      !isAfternoonIn(TZ.UTC_M10) &&
      !isMorningIn(TZ.UTC_M10)
  );
  expect(isNightIn(TZ.UTC_M930)).toEqual(false);
  expect(isNightIn(TZ.UTC_M930)).toEqual(
    !isEveningIn(TZ.UTC_M930) &&
      !isAfternoonIn(TZ.UTC_M930) &&
      !isMorningIn(TZ.UTC_M930)
  );
  expect(isNightIn(TZ.UTC_M9)).toEqual(false);
  expect(isNightIn(TZ.UTC_M9)).toEqual(
    !isEveningIn(TZ.UTC_M9) &&
      !isAfternoonIn(TZ.UTC_M9) &&
      !isMorningIn(TZ.UTC_M9)
  );
  expect(isNightIn(TZ.UTC_M8)).toEqual(false);
  expect(isNightIn(TZ.UTC_M8)).toEqual(
    !isEveningIn(TZ.UTC_M8) &&
      !isAfternoonIn(TZ.UTC_M8) &&
      !isMorningIn(TZ.UTC_M8)
  );
  expect(isNightIn(TZ.UTC_M7)).toEqual(false);
  expect(isNightIn(TZ.UTC_M7)).toEqual(
    !isEveningIn(TZ.UTC_M7) &&
      !isAfternoonIn(TZ.UTC_M7) &&
      !isMorningIn(TZ.UTC_M7)
  );
  expect(isNightIn(TZ.UTC_M6)).toEqual(false);
  expect(isNightIn(TZ.UTC_M6)).toEqual(
    !isEveningIn(TZ.UTC_M6) &&
      !isAfternoonIn(TZ.UTC_M6) &&
      !isMorningIn(TZ.UTC_M6)
  );
  expect(isNightIn(TZ.UTC_M5)).toEqual(false);
  expect(isNightIn(TZ.UTC_M5)).toEqual(
    !isEveningIn(TZ.UTC_M5) &&
      !isAfternoonIn(TZ.UTC_M5) &&
      !isMorningIn(TZ.UTC_M5)
  );
  expect(isNightIn(TZ.UTC_M4)).toEqual(false);
  expect(isNightIn(TZ.UTC_M4)).toEqual(
    !isEveningIn(TZ.UTC_M4) &&
      !isAfternoonIn(TZ.UTC_M4) &&
      !isMorningIn(TZ.UTC_M4)
  );
  expect(isNightIn(TZ.UTC_M330)).toEqual(false);
  expect(isNightIn(TZ.UTC_M330)).toEqual(
    !isEveningIn(TZ.UTC_M330) &&
      !isAfternoonIn(TZ.UTC_M330) &&
      !isMorningIn(TZ.UTC_M330)
  );
  expect(isNightIn(TZ.UTC_M3)).toEqual(false);
  expect(isNightIn(TZ.UTC_M3)).toEqual(
    !isEveningIn(TZ.UTC_M3) &&
      !isAfternoonIn(TZ.UTC_M3) &&
      !isMorningIn(TZ.UTC_M3)
  );
  expect(isNightIn(TZ.UTC_M2)).toEqual(false);
  expect(isNightIn(TZ.UTC_M2)).toEqual(
    !isEveningIn(TZ.UTC_M2) &&
      !isAfternoonIn(TZ.UTC_M2) &&
      !isMorningIn(TZ.UTC_M2)
  );
  expect(isNightIn(TZ.UTC_M1)).toEqual(false);
  expect(isNightIn(TZ.UTC_M1)).toEqual(
    !isEveningIn(TZ.UTC_M1) &&
      !isAfternoonIn(TZ.UTC_M1) &&
      !isMorningIn(TZ.UTC_M1)
  );
  expect(isNightIn(TZ.UTC_0)).toEqual(false);
  expect(isNightIn(TZ.UTC_0)).toEqual(
    !isEveningIn(TZ.UTC_0) && !isAfternoonIn(TZ.UTC_0) && !isMorningIn(TZ.UTC_0)
  );
  expect(isNightIn(TZ.UTC_P1)).toEqual(false);
  expect(isNightIn(TZ.UTC_P1)).toEqual(
    !isEveningIn(TZ.UTC_P1) &&
      !isAfternoonIn(TZ.UTC_P1) &&
      !isMorningIn(TZ.UTC_P1)
  );
  expect(isNightIn(TZ.UTC_P2)).toEqual(false);
  expect(isNightIn(TZ.UTC_P2)).toEqual(
    !isEveningIn(TZ.UTC_P2) &&
      !isAfternoonIn(TZ.UTC_P2) &&
      !isMorningIn(TZ.UTC_P2)
  );
  expect(isNightIn(TZ.UTC_P3)).toEqual(false);
  expect(isNightIn(TZ.UTC_P3)).toEqual(
    !isEveningIn(TZ.UTC_P3) &&
      !isAfternoonIn(TZ.UTC_P3) &&
      !isMorningIn(TZ.UTC_P3)
  );
  expect(isNightIn(TZ.UTC_P330)).toEqual(false);
  expect(isNightIn(TZ.UTC_P330)).toEqual(
    !isEveningIn(TZ.UTC_P330) &&
      !isAfternoonIn(TZ.UTC_P330) &&
      !isMorningIn(TZ.UTC_P330)
  );
  expect(isNightIn(TZ.UTC_P4)).toEqual(false);
  expect(isNightIn(TZ.UTC_P4)).toEqual(
    !isEveningIn(TZ.UTC_P4) &&
      !isAfternoonIn(TZ.UTC_P4) &&
      !isMorningIn(TZ.UTC_P4)
  );
  expect(isNightIn(TZ.UTC_P430)).toEqual(false);
  expect(isNightIn(TZ.UTC_P430)).toEqual(
    !isEveningIn(TZ.UTC_P430) &&
      !isAfternoonIn(TZ.UTC_P430) &&
      !isMorningIn(TZ.UTC_P430)
  );
  expect(isNightIn(TZ.UTC_P5)).toEqual(false);
  expect(isNightIn(TZ.UTC_P5)).toEqual(
    !isEveningIn(TZ.UTC_P5) &&
      !isAfternoonIn(TZ.UTC_P5) &&
      !isMorningIn(TZ.UTC_P5)
  );
  expect(isNightIn(TZ.UTC_P530)).toEqual(false);
  expect(isNightIn(TZ.UTC_P530)).toEqual(
    !isEveningIn(TZ.UTC_P530) &&
      !isAfternoonIn(TZ.UTC_P530) &&
      !isMorningIn(TZ.UTC_P530)
  );
  expect(isNightIn(TZ.UTC_P545)).toEqual(false);
  expect(isNightIn(TZ.UTC_P545)).toEqual(
    !isEveningIn(TZ.UTC_P545) &&
      !isAfternoonIn(TZ.UTC_P545) &&
      !isMorningIn(TZ.UTC_P545)
  );
  expect(isNightIn(TZ.UTC_P6)).toEqual(false);
  expect(isNightIn(TZ.UTC_P6)).toEqual(
    !isEveningIn(TZ.UTC_P6) &&
      !isAfternoonIn(TZ.UTC_P6) &&
      !isMorningIn(TZ.UTC_P6)
  );
  expect(isNightIn(TZ.UTC_P630)).toEqual(false);
  expect(isNightIn(TZ.UTC_P630)).toEqual(
    !isEveningIn(TZ.UTC_P630) &&
      !isAfternoonIn(TZ.UTC_P630) &&
      !isMorningIn(TZ.UTC_P630)
  );
  expect(isNightIn(TZ.UTC_P7)).toEqual(false);
  expect(isNightIn(TZ.UTC_P7)).toEqual(
    !isEveningIn(TZ.UTC_P7) &&
      !isAfternoonIn(TZ.UTC_P7) &&
      !isMorningIn(TZ.UTC_P7)
  );
  expect(isNightIn(TZ.UTC_P8)).toEqual(false);
  expect(isNightIn(TZ.UTC_P8)).toEqual(
    !isEveningIn(TZ.UTC_P8) &&
      !isAfternoonIn(TZ.UTC_P8) &&
      !isMorningIn(TZ.UTC_P8)
  );
  expect(isNightIn(TZ.UTC_P9)).toEqual(false);
  expect(isNightIn(TZ.UTC_P9)).toEqual(
    !isEveningIn(TZ.UTC_P9) &&
      !isAfternoonIn(TZ.UTC_P9) &&
      !isMorningIn(TZ.UTC_P9)
  );
  expect(isNightIn(TZ.UTC_P930)).toEqual(false);
  expect(isNightIn(TZ.UTC_P930)).toEqual(
    !isEveningIn(TZ.UTC_P930) &&
      !isAfternoonIn(TZ.UTC_P930) &&
      !isMorningIn(TZ.UTC_P930)
  );
  expect(isNightIn(TZ.UTC_P10)).toEqual(false);
  expect(isNightIn(TZ.UTC_P10)).toEqual(
    !isEveningIn(TZ.UTC_P10) &&
      !isAfternoonIn(TZ.UTC_P10) &&
      !isMorningIn(TZ.UTC_P10)
  );
  expect(isNightIn(TZ.UTC_P1030)).toEqual(false);
  expect(isNightIn(TZ.UTC_P1030)).toEqual(
    !isEveningIn(TZ.UTC_P1030) &&
      !isAfternoonIn(TZ.UTC_P1030) &&
      !isMorningIn(TZ.UTC_P1030)
  );
  expect(isNightIn(TZ.UTC_P12)).toEqual(false);
  expect(isNightIn(TZ.UTC_P12)).toEqual(
    !isEveningIn(TZ.UTC_P12) &&
      !isAfternoonIn(TZ.UTC_P12) &&
      !isMorningIn(TZ.UTC_P12)
  );
  expect(isNightIn(TZ.UTC_P1245)).toEqual(false);
  expect(isNightIn(TZ.UTC_P1245)).toEqual(
    !isEveningIn(TZ.UTC_P1245) &&
      !isAfternoonIn(TZ.UTC_P1245) &&
      !isMorningIn(TZ.UTC_P1245)
  );
  expect(isNightIn(TZ.UTC_P13)).toEqual(false);
  expect(isNightIn(TZ.UTC_P13)).toEqual(
    !isEveningIn(TZ.UTC_P13) &&
      !isAfternoonIn(TZ.UTC_P13) &&
      !isMorningIn(TZ.UTC_P13)
  );
});

test("night in IANATimeZone 2007_07_07_07_14", () => {
  jest.setSystemTime(new Date(DATES.DATE_2007_07_07_07_14));
  expect(isNightIn(TZ.UTC_M11)).toEqual(false);
  expect(isNightIn(TZ.UTC_M11)).toEqual(
    !isEveningIn(TZ.UTC_M11) &&
      !isAfternoonIn(TZ.UTC_M11) &&
      !isMorningIn(TZ.UTC_M11)
  );
  expect(isNightIn(TZ.UTC_M10)).toEqual(false);
  expect(isNightIn(TZ.UTC_M10)).toEqual(
    !isEveningIn(TZ.UTC_M10) &&
      !isAfternoonIn(TZ.UTC_M10) &&
      !isMorningIn(TZ.UTC_M10)
  );
  expect(isNightIn(TZ.UTC_M930)).toEqual(false);
  expect(isNightIn(TZ.UTC_M930)).toEqual(
    !isEveningIn(TZ.UTC_M930) &&
      !isAfternoonIn(TZ.UTC_M930) &&
      !isMorningIn(TZ.UTC_M930)
  );
  expect(isNightIn(TZ.UTC_M9)).toEqual(false);
  expect(isNightIn(TZ.UTC_M9)).toEqual(
    !isEveningIn(TZ.UTC_M9) &&
      !isAfternoonIn(TZ.UTC_M9) &&
      !isMorningIn(TZ.UTC_M9)
  );
  expect(isNightIn(TZ.UTC_M8)).toEqual(false);
  expect(isNightIn(TZ.UTC_M8)).toEqual(
    !isEveningIn(TZ.UTC_M8) &&
      !isAfternoonIn(TZ.UTC_M8) &&
      !isMorningIn(TZ.UTC_M8)
  );
  expect(isNightIn(TZ.UTC_M7)).toEqual(false);
  expect(isNightIn(TZ.UTC_M7)).toEqual(
    !isEveningIn(TZ.UTC_M7) &&
      !isAfternoonIn(TZ.UTC_M7) &&
      !isMorningIn(TZ.UTC_M7)
  );
  expect(isNightIn(TZ.UTC_M6)).toEqual(false);
  expect(isNightIn(TZ.UTC_M6)).toEqual(
    !isEveningIn(TZ.UTC_M6) &&
      !isAfternoonIn(TZ.UTC_M6) &&
      !isMorningIn(TZ.UTC_M6)
  );
  expect(isNightIn(TZ.UTC_M5)).toEqual(false);
  expect(isNightIn(TZ.UTC_M5)).toEqual(
    !isEveningIn(TZ.UTC_M5) &&
      !isAfternoonIn(TZ.UTC_M5) &&
      !isMorningIn(TZ.UTC_M5)
  );
  expect(isNightIn(TZ.UTC_M4)).toEqual(false);
  expect(isNightIn(TZ.UTC_M4)).toEqual(
    !isEveningIn(TZ.UTC_M4) &&
      !isAfternoonIn(TZ.UTC_M4) &&
      !isMorningIn(TZ.UTC_M4)
  );
  expect(isNightIn(TZ.UTC_M330)).toEqual(false);
  expect(isNightIn(TZ.UTC_M330)).toEqual(
    !isEveningIn(TZ.UTC_M330) &&
      !isAfternoonIn(TZ.UTC_M330) &&
      !isMorningIn(TZ.UTC_M330)
  );
  expect(isNightIn(TZ.UTC_M3)).toEqual(false);
  expect(isNightIn(TZ.UTC_M3)).toEqual(
    !isEveningIn(TZ.UTC_M3) &&
      !isAfternoonIn(TZ.UTC_M3) &&
      !isMorningIn(TZ.UTC_M3)
  );
  expect(isNightIn(TZ.UTC_M2)).toEqual(false);
  expect(isNightIn(TZ.UTC_M2)).toEqual(
    !isEveningIn(TZ.UTC_M2) &&
      !isAfternoonIn(TZ.UTC_M2) &&
      !isMorningIn(TZ.UTC_M2)
  );
  expect(isNightIn(TZ.UTC_M1)).toEqual(false);
  expect(isNightIn(TZ.UTC_M1)).toEqual(
    !isEveningIn(TZ.UTC_M1) &&
      !isAfternoonIn(TZ.UTC_M1) &&
      !isMorningIn(TZ.UTC_M1)
  );
  expect(isNightIn(TZ.UTC_0)).toEqual(false);
  expect(isNightIn(TZ.UTC_0)).toEqual(
    !isEveningIn(TZ.UTC_0) && !isAfternoonIn(TZ.UTC_0) && !isMorningIn(TZ.UTC_0)
  );
  expect(isNightIn(TZ.UTC_P1)).toEqual(false);
  expect(isNightIn(TZ.UTC_P1)).toEqual(
    !isEveningIn(TZ.UTC_P1) &&
      !isAfternoonIn(TZ.UTC_P1) &&
      !isMorningIn(TZ.UTC_P1)
  );
  expect(isNightIn(TZ.UTC_P2)).toEqual(false);
  expect(isNightIn(TZ.UTC_P2)).toEqual(
    !isEveningIn(TZ.UTC_P2) &&
      !isAfternoonIn(TZ.UTC_P2) &&
      !isMorningIn(TZ.UTC_P2)
  );
  expect(isNightIn(TZ.UTC_P3)).toEqual(false);
  expect(isNightIn(TZ.UTC_P3)).toEqual(
    !isEveningIn(TZ.UTC_P3) &&
      !isAfternoonIn(TZ.UTC_P3) &&
      !isMorningIn(TZ.UTC_P3)
  );
  expect(isNightIn(TZ.UTC_P330)).toEqual(false);
  expect(isNightIn(TZ.UTC_P330)).toEqual(
    !isEveningIn(TZ.UTC_P330) &&
      !isAfternoonIn(TZ.UTC_P330) &&
      !isMorningIn(TZ.UTC_P330)
  );
  expect(isNightIn(TZ.UTC_P4)).toEqual(false);
  expect(isNightIn(TZ.UTC_P4)).toEqual(
    !isEveningIn(TZ.UTC_P4) &&
      !isAfternoonIn(TZ.UTC_P4) &&
      !isMorningIn(TZ.UTC_P4)
  );
  expect(isNightIn(TZ.UTC_P430)).toEqual(false);
  expect(isNightIn(TZ.UTC_P430)).toEqual(
    !isEveningIn(TZ.UTC_P430) &&
      !isAfternoonIn(TZ.UTC_P430) &&
      !isMorningIn(TZ.UTC_P430)
  );
  expect(isNightIn(TZ.UTC_P5)).toEqual(false);
  expect(isNightIn(TZ.UTC_P5)).toEqual(
    !isEveningIn(TZ.UTC_P5) &&
      !isAfternoonIn(TZ.UTC_P5) &&
      !isMorningIn(TZ.UTC_P5)
  );
  expect(isNightIn(TZ.UTC_P530)).toEqual(false);
  expect(isNightIn(TZ.UTC_P530)).toEqual(
    !isEveningIn(TZ.UTC_P530) &&
      !isAfternoonIn(TZ.UTC_P530) &&
      !isMorningIn(TZ.UTC_P530)
  );
  expect(isNightIn(TZ.UTC_P545)).toEqual(false);
  expect(isNightIn(TZ.UTC_P545)).toEqual(
    !isEveningIn(TZ.UTC_P545) &&
      !isAfternoonIn(TZ.UTC_P545) &&
      !isMorningIn(TZ.UTC_P545)
  );
  expect(isNightIn(TZ.UTC_P6)).toEqual(false);
  expect(isNightIn(TZ.UTC_P6)).toEqual(
    !isEveningIn(TZ.UTC_P6) &&
      !isAfternoonIn(TZ.UTC_P6) &&
      !isMorningIn(TZ.UTC_P6)
  );
  expect(isNightIn(TZ.UTC_P630)).toEqual(false);
  expect(isNightIn(TZ.UTC_P630)).toEqual(
    !isEveningIn(TZ.UTC_P630) &&
      !isAfternoonIn(TZ.UTC_P630) &&
      !isMorningIn(TZ.UTC_P630)
  );
  expect(isNightIn(TZ.UTC_P7)).toEqual(false);
  expect(isNightIn(TZ.UTC_P7)).toEqual(
    !isEveningIn(TZ.UTC_P7) &&
      !isAfternoonIn(TZ.UTC_P7) &&
      !isMorningIn(TZ.UTC_P7)
  );
  expect(isNightIn(TZ.UTC_P8)).toEqual(false);
  expect(isNightIn(TZ.UTC_P8)).toEqual(
    !isEveningIn(TZ.UTC_P8) &&
      !isAfternoonIn(TZ.UTC_P8) &&
      !isMorningIn(TZ.UTC_P8)
  );
  expect(isNightIn(TZ.UTC_P9)).toEqual(false);
  expect(isNightIn(TZ.UTC_P9)).toEqual(
    !isEveningIn(TZ.UTC_P9) &&
      !isAfternoonIn(TZ.UTC_P9) &&
      !isMorningIn(TZ.UTC_P9)
  );
  expect(isNightIn(TZ.UTC_P930)).toEqual(false);
  expect(isNightIn(TZ.UTC_P930)).toEqual(
    !isEveningIn(TZ.UTC_P930) &&
      !isAfternoonIn(TZ.UTC_P930) &&
      !isMorningIn(TZ.UTC_P930)
  );
  expect(isNightIn(TZ.UTC_P10)).toEqual(false);
  expect(isNightIn(TZ.UTC_P10)).toEqual(
    !isEveningIn(TZ.UTC_P10) &&
      !isAfternoonIn(TZ.UTC_P10) &&
      !isMorningIn(TZ.UTC_P10)
  );
  expect(isNightIn(TZ.UTC_P1030)).toEqual(false);
  expect(isNightIn(TZ.UTC_P1030)).toEqual(
    !isEveningIn(TZ.UTC_P1030) &&
      !isAfternoonIn(TZ.UTC_P1030) &&
      !isMorningIn(TZ.UTC_P1030)
  );
  expect(isNightIn(TZ.UTC_P12)).toEqual(false);
  expect(isNightIn(TZ.UTC_P12)).toEqual(
    !isEveningIn(TZ.UTC_P12) &&
      !isAfternoonIn(TZ.UTC_P12) &&
      !isMorningIn(TZ.UTC_P12)
  );
  expect(isNightIn(TZ.UTC_P1245)).toEqual(false);
  expect(isNightIn(TZ.UTC_P1245)).toEqual(
    !isEveningIn(TZ.UTC_P1245) &&
      !isAfternoonIn(TZ.UTC_P1245) &&
      !isMorningIn(TZ.UTC_P1245)
  );
  expect(isNightIn(TZ.UTC_P13)).toEqual(false);
  expect(isNightIn(TZ.UTC_P13)).toEqual(
    !isEveningIn(TZ.UTC_P13) &&
      !isAfternoonIn(TZ.UTC_P13) &&
      !isMorningIn(TZ.UTC_P13)
  );
});

test("night in IANATimeZone 2008_08_08_08_16", () => {
  jest.setSystemTime(new Date(DATES.DATE_2008_08_08_08_16));
  expect(isNightIn(TZ.UTC_M11)).toEqual(false);
  expect(isNightIn(TZ.UTC_M11)).toEqual(
    !isEveningIn(TZ.UTC_M11) &&
      !isAfternoonIn(TZ.UTC_M11) &&
      !isMorningIn(TZ.UTC_M11)
  );
  expect(isNightIn(TZ.UTC_M10)).toEqual(false);
  expect(isNightIn(TZ.UTC_M10)).toEqual(
    !isEveningIn(TZ.UTC_M10) &&
      !isAfternoonIn(TZ.UTC_M10) &&
      !isMorningIn(TZ.UTC_M10)
  );
  expect(isNightIn(TZ.UTC_M930)).toEqual(false);
  expect(isNightIn(TZ.UTC_M930)).toEqual(
    !isEveningIn(TZ.UTC_M930) &&
      !isAfternoonIn(TZ.UTC_M930) &&
      !isMorningIn(TZ.UTC_M930)
  );
  expect(isNightIn(TZ.UTC_M9)).toEqual(false);
  expect(isNightIn(TZ.UTC_M9)).toEqual(
    !isEveningIn(TZ.UTC_M9) &&
      !isAfternoonIn(TZ.UTC_M9) &&
      !isMorningIn(TZ.UTC_M9)
  );
  expect(isNightIn(TZ.UTC_M8)).toEqual(false);
  expect(isNightIn(TZ.UTC_M8)).toEqual(
    !isEveningIn(TZ.UTC_M8) &&
      !isAfternoonIn(TZ.UTC_M8) &&
      !isMorningIn(TZ.UTC_M8)
  );
  expect(isNightIn(TZ.UTC_M7)).toEqual(false);
  expect(isNightIn(TZ.UTC_M7)).toEqual(
    !isEveningIn(TZ.UTC_M7) &&
      !isAfternoonIn(TZ.UTC_M7) &&
      !isMorningIn(TZ.UTC_M7)
  );
  expect(isNightIn(TZ.UTC_M6)).toEqual(false);
  expect(isNightIn(TZ.UTC_M6)).toEqual(
    !isEveningIn(TZ.UTC_M6) &&
      !isAfternoonIn(TZ.UTC_M6) &&
      !isMorningIn(TZ.UTC_M6)
  );
  expect(isNightIn(TZ.UTC_M5)).toEqual(false);
  expect(isNightIn(TZ.UTC_M5)).toEqual(
    !isEveningIn(TZ.UTC_M5) &&
      !isAfternoonIn(TZ.UTC_M5) &&
      !isMorningIn(TZ.UTC_M5)
  );
  expect(isNightIn(TZ.UTC_M4)).toEqual(false);
  expect(isNightIn(TZ.UTC_M4)).toEqual(
    !isEveningIn(TZ.UTC_M4) &&
      !isAfternoonIn(TZ.UTC_M4) &&
      !isMorningIn(TZ.UTC_M4)
  );
  expect(isNightIn(TZ.UTC_M330)).toEqual(false);
  expect(isNightIn(TZ.UTC_M330)).toEqual(
    !isEveningIn(TZ.UTC_M330) &&
      !isAfternoonIn(TZ.UTC_M330) &&
      !isMorningIn(TZ.UTC_M330)
  );
  expect(isNightIn(TZ.UTC_M3)).toEqual(false);
  expect(isNightIn(TZ.UTC_M3)).toEqual(
    !isEveningIn(TZ.UTC_M3) &&
      !isAfternoonIn(TZ.UTC_M3) &&
      !isMorningIn(TZ.UTC_M3)
  );
  expect(isNightIn(TZ.UTC_M2)).toEqual(false);
  expect(isNightIn(TZ.UTC_M2)).toEqual(
    !isEveningIn(TZ.UTC_M2) &&
      !isAfternoonIn(TZ.UTC_M2) &&
      !isMorningIn(TZ.UTC_M2)
  );
  expect(isNightIn(TZ.UTC_M1)).toEqual(false);
  expect(isNightIn(TZ.UTC_M1)).toEqual(
    !isEveningIn(TZ.UTC_M1) &&
      !isAfternoonIn(TZ.UTC_M1) &&
      !isMorningIn(TZ.UTC_M1)
  );
  expect(isNightIn(TZ.UTC_0)).toEqual(false);
  expect(isNightIn(TZ.UTC_0)).toEqual(
    !isEveningIn(TZ.UTC_0) && !isAfternoonIn(TZ.UTC_0) && !isMorningIn(TZ.UTC_0)
  );
  expect(isNightIn(TZ.UTC_P1)).toEqual(false);
  expect(isNightIn(TZ.UTC_P1)).toEqual(
    !isEveningIn(TZ.UTC_P1) &&
      !isAfternoonIn(TZ.UTC_P1) &&
      !isMorningIn(TZ.UTC_P1)
  );
  expect(isNightIn(TZ.UTC_P2)).toEqual(false);
  expect(isNightIn(TZ.UTC_P2)).toEqual(
    !isEveningIn(TZ.UTC_P2) &&
      !isAfternoonIn(TZ.UTC_P2) &&
      !isMorningIn(TZ.UTC_P2)
  );
  expect(isNightIn(TZ.UTC_P3)).toEqual(false);
  expect(isNightIn(TZ.UTC_P3)).toEqual(
    !isEveningIn(TZ.UTC_P3) &&
      !isAfternoonIn(TZ.UTC_P3) &&
      !isMorningIn(TZ.UTC_P3)
  );
  expect(isNightIn(TZ.UTC_P330)).toEqual(false);
  expect(isNightIn(TZ.UTC_P330)).toEqual(
    !isEveningIn(TZ.UTC_P330) &&
      !isAfternoonIn(TZ.UTC_P330) &&
      !isMorningIn(TZ.UTC_P330)
  );
  expect(isNightIn(TZ.UTC_P4)).toEqual(false);
  expect(isNightIn(TZ.UTC_P4)).toEqual(
    !isEveningIn(TZ.UTC_P4) &&
      !isAfternoonIn(TZ.UTC_P4) &&
      !isMorningIn(TZ.UTC_P4)
  );
  expect(isNightIn(TZ.UTC_P430)).toEqual(false);
  expect(isNightIn(TZ.UTC_P430)).toEqual(
    !isEveningIn(TZ.UTC_P430) &&
      !isAfternoonIn(TZ.UTC_P430) &&
      !isMorningIn(TZ.UTC_P430)
  );
  expect(isNightIn(TZ.UTC_P5)).toEqual(false);
  expect(isNightIn(TZ.UTC_P5)).toEqual(
    !isEveningIn(TZ.UTC_P5) &&
      !isAfternoonIn(TZ.UTC_P5) &&
      !isMorningIn(TZ.UTC_P5)
  );
  expect(isNightIn(TZ.UTC_P530)).toEqual(false);
  expect(isNightIn(TZ.UTC_P530)).toEqual(
    !isEveningIn(TZ.UTC_P530) &&
      !isAfternoonIn(TZ.UTC_P530) &&
      !isMorningIn(TZ.UTC_P530)
  );
  expect(isNightIn(TZ.UTC_P545)).toEqual(false);
  expect(isNightIn(TZ.UTC_P545)).toEqual(
    !isEveningIn(TZ.UTC_P545) &&
      !isAfternoonIn(TZ.UTC_P545) &&
      !isMorningIn(TZ.UTC_P545)
  );
  expect(isNightIn(TZ.UTC_P6)).toEqual(false);
  expect(isNightIn(TZ.UTC_P6)).toEqual(
    !isEveningIn(TZ.UTC_P6) &&
      !isAfternoonIn(TZ.UTC_P6) &&
      !isMorningIn(TZ.UTC_P6)
  );
  expect(isNightIn(TZ.UTC_P630)).toEqual(false);
  expect(isNightIn(TZ.UTC_P630)).toEqual(
    !isEveningIn(TZ.UTC_P630) &&
      !isAfternoonIn(TZ.UTC_P630) &&
      !isMorningIn(TZ.UTC_P630)
  );
  expect(isNightIn(TZ.UTC_P7)).toEqual(false);
  expect(isNightIn(TZ.UTC_P7)).toEqual(
    !isEveningIn(TZ.UTC_P7) &&
      !isAfternoonIn(TZ.UTC_P7) &&
      !isMorningIn(TZ.UTC_P7)
  );
  expect(isNightIn(TZ.UTC_P8)).toEqual(false);
  expect(isNightIn(TZ.UTC_P8)).toEqual(
    !isEveningIn(TZ.UTC_P8) &&
      !isAfternoonIn(TZ.UTC_P8) &&
      !isMorningIn(TZ.UTC_P8)
  );
  expect(isNightIn(TZ.UTC_P9)).toEqual(false);
  expect(isNightIn(TZ.UTC_P9)).toEqual(
    !isEveningIn(TZ.UTC_P9) &&
      !isAfternoonIn(TZ.UTC_P9) &&
      !isMorningIn(TZ.UTC_P9)
  );
  expect(isNightIn(TZ.UTC_P930)).toEqual(false);
  expect(isNightIn(TZ.UTC_P930)).toEqual(
    !isEveningIn(TZ.UTC_P930) &&
      !isAfternoonIn(TZ.UTC_P930) &&
      !isMorningIn(TZ.UTC_P930)
  );
  expect(isNightIn(TZ.UTC_P10)).toEqual(false);
  expect(isNightIn(TZ.UTC_P10)).toEqual(
    !isEveningIn(TZ.UTC_P10) &&
      !isAfternoonIn(TZ.UTC_P10) &&
      !isMorningIn(TZ.UTC_P10)
  );
  expect(isNightIn(TZ.UTC_P1030)).toEqual(false);
  expect(isNightIn(TZ.UTC_P1030)).toEqual(
    !isEveningIn(TZ.UTC_P1030) &&
      !isAfternoonIn(TZ.UTC_P1030) &&
      !isMorningIn(TZ.UTC_P1030)
  );
  expect(isNightIn(TZ.UTC_P12)).toEqual(false);
  expect(isNightIn(TZ.UTC_P12)).toEqual(
    !isEveningIn(TZ.UTC_P12) &&
      !isAfternoonIn(TZ.UTC_P12) &&
      !isMorningIn(TZ.UTC_P12)
  );
  expect(isNightIn(TZ.UTC_P1245)).toEqual(false);
  expect(isNightIn(TZ.UTC_P1245)).toEqual(
    !isEveningIn(TZ.UTC_P1245) &&
      !isAfternoonIn(TZ.UTC_P1245) &&
      !isMorningIn(TZ.UTC_P1245)
  );
  expect(isNightIn(TZ.UTC_P13)).toEqual(false);
  expect(isNightIn(TZ.UTC_P13)).toEqual(
    !isEveningIn(TZ.UTC_P13) &&
      !isAfternoonIn(TZ.UTC_P13) &&
      !isMorningIn(TZ.UTC_P13)
  );
});

test("night in IANATimeZone 2009_09_09_09_18", () => {
  jest.setSystemTime(new Date(DATES.DATE_2009_09_09_09_18));
  expect(isNightIn(TZ.UTC_M11)).toEqual(false);
  expect(isNightIn(TZ.UTC_M11)).toEqual(
    !isEveningIn(TZ.UTC_M11) &&
      !isAfternoonIn(TZ.UTC_M11) &&
      !isMorningIn(TZ.UTC_M11)
  );
  expect(isNightIn(TZ.UTC_M10)).toEqual(false);
  expect(isNightIn(TZ.UTC_M10)).toEqual(
    !isEveningIn(TZ.UTC_M10) &&
      !isAfternoonIn(TZ.UTC_M10) &&
      !isMorningIn(TZ.UTC_M10)
  );
  expect(isNightIn(TZ.UTC_M930)).toEqual(false);
  expect(isNightIn(TZ.UTC_M930)).toEqual(
    !isEveningIn(TZ.UTC_M930) &&
      !isAfternoonIn(TZ.UTC_M930) &&
      !isMorningIn(TZ.UTC_M930)
  );
  expect(isNightIn(TZ.UTC_M9)).toEqual(false);
  expect(isNightIn(TZ.UTC_M9)).toEqual(
    !isEveningIn(TZ.UTC_M9) &&
      !isAfternoonIn(TZ.UTC_M9) &&
      !isMorningIn(TZ.UTC_M9)
  );
  expect(isNightIn(TZ.UTC_M8)).toEqual(false);
  expect(isNightIn(TZ.UTC_M8)).toEqual(
    !isEveningIn(TZ.UTC_M8) &&
      !isAfternoonIn(TZ.UTC_M8) &&
      !isMorningIn(TZ.UTC_M8)
  );
  expect(isNightIn(TZ.UTC_M7)).toEqual(false);
  expect(isNightIn(TZ.UTC_M7)).toEqual(
    !isEveningIn(TZ.UTC_M7) &&
      !isAfternoonIn(TZ.UTC_M7) &&
      !isMorningIn(TZ.UTC_M7)
  );
  expect(isNightIn(TZ.UTC_M6)).toEqual(false);
  expect(isNightIn(TZ.UTC_M6)).toEqual(
    !isEveningIn(TZ.UTC_M6) &&
      !isAfternoonIn(TZ.UTC_M6) &&
      !isMorningIn(TZ.UTC_M6)
  );
  expect(isNightIn(TZ.UTC_M5)).toEqual(false);
  expect(isNightIn(TZ.UTC_M5)).toEqual(
    !isEveningIn(TZ.UTC_M5) &&
      !isAfternoonIn(TZ.UTC_M5) &&
      !isMorningIn(TZ.UTC_M5)
  );
  expect(isNightIn(TZ.UTC_M4)).toEqual(false);
  expect(isNightIn(TZ.UTC_M4)).toEqual(
    !isEveningIn(TZ.UTC_M4) &&
      !isAfternoonIn(TZ.UTC_M4) &&
      !isMorningIn(TZ.UTC_M4)
  );
  expect(isNightIn(TZ.UTC_M330)).toEqual(false);
  expect(isNightIn(TZ.UTC_M330)).toEqual(
    !isEveningIn(TZ.UTC_M330) &&
      !isAfternoonIn(TZ.UTC_M330) &&
      !isMorningIn(TZ.UTC_M330)
  );
  expect(isNightIn(TZ.UTC_M3)).toEqual(false);
  expect(isNightIn(TZ.UTC_M3)).toEqual(
    !isEveningIn(TZ.UTC_M3) &&
      !isAfternoonIn(TZ.UTC_M3) &&
      !isMorningIn(TZ.UTC_M3)
  );
  expect(isNightIn(TZ.UTC_M2)).toEqual(false);
  expect(isNightIn(TZ.UTC_M2)).toEqual(
    !isEveningIn(TZ.UTC_M2) &&
      !isAfternoonIn(TZ.UTC_M2) &&
      !isMorningIn(TZ.UTC_M2)
  );
  expect(isNightIn(TZ.UTC_M1)).toEqual(false);
  expect(isNightIn(TZ.UTC_M1)).toEqual(
    !isEveningIn(TZ.UTC_M1) &&
      !isAfternoonIn(TZ.UTC_M1) &&
      !isMorningIn(TZ.UTC_M1)
  );
  expect(isNightIn(TZ.UTC_0)).toEqual(false);
  expect(isNightIn(TZ.UTC_0)).toEqual(
    !isEveningIn(TZ.UTC_0) && !isAfternoonIn(TZ.UTC_0) && !isMorningIn(TZ.UTC_0)
  );
  expect(isNightIn(TZ.UTC_P1)).toEqual(false);
  expect(isNightIn(TZ.UTC_P1)).toEqual(
    !isEveningIn(TZ.UTC_P1) &&
      !isAfternoonIn(TZ.UTC_P1) &&
      !isMorningIn(TZ.UTC_P1)
  );
  expect(isNightIn(TZ.UTC_P2)).toEqual(false);
  expect(isNightIn(TZ.UTC_P2)).toEqual(
    !isEveningIn(TZ.UTC_P2) &&
      !isAfternoonIn(TZ.UTC_P2) &&
      !isMorningIn(TZ.UTC_P2)
  );
  expect(isNightIn(TZ.UTC_P3)).toEqual(false);
  expect(isNightIn(TZ.UTC_P3)).toEqual(
    !isEveningIn(TZ.UTC_P3) &&
      !isAfternoonIn(TZ.UTC_P3) &&
      !isMorningIn(TZ.UTC_P3)
  );
  expect(isNightIn(TZ.UTC_P330)).toEqual(false);
  expect(isNightIn(TZ.UTC_P330)).toEqual(
    !isEveningIn(TZ.UTC_P330) &&
      !isAfternoonIn(TZ.UTC_P330) &&
      !isMorningIn(TZ.UTC_P330)
  );
  expect(isNightIn(TZ.UTC_P4)).toEqual(false);
  expect(isNightIn(TZ.UTC_P4)).toEqual(
    !isEveningIn(TZ.UTC_P4) &&
      !isAfternoonIn(TZ.UTC_P4) &&
      !isMorningIn(TZ.UTC_P4)
  );
  expect(isNightIn(TZ.UTC_P430)).toEqual(false);
  expect(isNightIn(TZ.UTC_P430)).toEqual(
    !isEveningIn(TZ.UTC_P430) &&
      !isAfternoonIn(TZ.UTC_P430) &&
      !isMorningIn(TZ.UTC_P430)
  );
  expect(isNightIn(TZ.UTC_P5)).toEqual(false);
  expect(isNightIn(TZ.UTC_P5)).toEqual(
    !isEveningIn(TZ.UTC_P5) &&
      !isAfternoonIn(TZ.UTC_P5) &&
      !isMorningIn(TZ.UTC_P5)
  );
  expect(isNightIn(TZ.UTC_P530)).toEqual(false);
  expect(isNightIn(TZ.UTC_P530)).toEqual(
    !isEveningIn(TZ.UTC_P530) &&
      !isAfternoonIn(TZ.UTC_P530) &&
      !isMorningIn(TZ.UTC_P530)
  );
  expect(isNightIn(TZ.UTC_P545)).toEqual(false);
  expect(isNightIn(TZ.UTC_P545)).toEqual(
    !isEveningIn(TZ.UTC_P545) &&
      !isAfternoonIn(TZ.UTC_P545) &&
      !isMorningIn(TZ.UTC_P545)
  );
  expect(isNightIn(TZ.UTC_P6)).toEqual(false);
  expect(isNightIn(TZ.UTC_P6)).toEqual(
    !isEveningIn(TZ.UTC_P6) &&
      !isAfternoonIn(TZ.UTC_P6) &&
      !isMorningIn(TZ.UTC_P6)
  );
  expect(isNightIn(TZ.UTC_P630)).toEqual(false);
  expect(isNightIn(TZ.UTC_P630)).toEqual(
    !isEveningIn(TZ.UTC_P630) &&
      !isAfternoonIn(TZ.UTC_P630) &&
      !isMorningIn(TZ.UTC_P630)
  );
  expect(isNightIn(TZ.UTC_P7)).toEqual(false);
  expect(isNightIn(TZ.UTC_P7)).toEqual(
    !isEveningIn(TZ.UTC_P7) &&
      !isAfternoonIn(TZ.UTC_P7) &&
      !isMorningIn(TZ.UTC_P7)
  );
  expect(isNightIn(TZ.UTC_P8)).toEqual(false);
  expect(isNightIn(TZ.UTC_P8)).toEqual(
    !isEveningIn(TZ.UTC_P8) &&
      !isAfternoonIn(TZ.UTC_P8) &&
      !isMorningIn(TZ.UTC_P8)
  );
  expect(isNightIn(TZ.UTC_P9)).toEqual(false);
  expect(isNightIn(TZ.UTC_P9)).toEqual(
    !isEveningIn(TZ.UTC_P9) &&
      !isAfternoonIn(TZ.UTC_P9) &&
      !isMorningIn(TZ.UTC_P9)
  );
  expect(isNightIn(TZ.UTC_P930)).toEqual(false);
  expect(isNightIn(TZ.UTC_P930)).toEqual(
    !isEveningIn(TZ.UTC_P930) &&
      !isAfternoonIn(TZ.UTC_P930) &&
      !isMorningIn(TZ.UTC_P930)
  );
  expect(isNightIn(TZ.UTC_P10)).toEqual(false);
  expect(isNightIn(TZ.UTC_P10)).toEqual(
    !isEveningIn(TZ.UTC_P10) &&
      !isAfternoonIn(TZ.UTC_P10) &&
      !isMorningIn(TZ.UTC_P10)
  );
  expect(isNightIn(TZ.UTC_P1030)).toEqual(false);
  expect(isNightIn(TZ.UTC_P1030)).toEqual(
    !isEveningIn(TZ.UTC_P1030) &&
      !isAfternoonIn(TZ.UTC_P1030) &&
      !isMorningIn(TZ.UTC_P1030)
  );
  expect(isNightIn(TZ.UTC_P12)).toEqual(false);
  expect(isNightIn(TZ.UTC_P12)).toEqual(
    !isEveningIn(TZ.UTC_P12) &&
      !isAfternoonIn(TZ.UTC_P12) &&
      !isMorningIn(TZ.UTC_P12)
  );
  expect(isNightIn(TZ.UTC_P1245)).toEqual(false);
  expect(isNightIn(TZ.UTC_P1245)).toEqual(
    !isEveningIn(TZ.UTC_P1245) &&
      !isAfternoonIn(TZ.UTC_P1245) &&
      !isMorningIn(TZ.UTC_P1245)
  );
  expect(isNightIn(TZ.UTC_P13)).toEqual(false);
  expect(isNightIn(TZ.UTC_P13)).toEqual(
    !isEveningIn(TZ.UTC_P13) &&
      !isAfternoonIn(TZ.UTC_P13) &&
      !isMorningIn(TZ.UTC_P13)
  );
});

test("night in IANATimeZone 2010_10_10_10_20", () => {
  jest.setSystemTime(new Date(DATES.DATE_2010_10_10_10_20));
  expect(isNightIn(TZ.UTC_M11)).toEqual(false);
  expect(isNightIn(TZ.UTC_M11)).toEqual(
    !isEveningIn(TZ.UTC_M11) &&
      !isAfternoonIn(TZ.UTC_M11) &&
      !isMorningIn(TZ.UTC_M11)
  );
  expect(isNightIn(TZ.UTC_M10)).toEqual(false);
  expect(isNightIn(TZ.UTC_M10)).toEqual(
    !isEveningIn(TZ.UTC_M10) &&
      !isAfternoonIn(TZ.UTC_M10) &&
      !isMorningIn(TZ.UTC_M10)
  );
  expect(isNightIn(TZ.UTC_M930)).toEqual(false);
  expect(isNightIn(TZ.UTC_M930)).toEqual(
    !isEveningIn(TZ.UTC_M930) &&
      !isAfternoonIn(TZ.UTC_M930) &&
      !isMorningIn(TZ.UTC_M930)
  );
  expect(isNightIn(TZ.UTC_M9)).toEqual(false);
  expect(isNightIn(TZ.UTC_M9)).toEqual(
    !isEveningIn(TZ.UTC_M9) &&
      !isAfternoonIn(TZ.UTC_M9) &&
      !isMorningIn(TZ.UTC_M9)
  );
  expect(isNightIn(TZ.UTC_M8)).toEqual(false);
  expect(isNightIn(TZ.UTC_M8)).toEqual(
    !isEveningIn(TZ.UTC_M8) &&
      !isAfternoonIn(TZ.UTC_M8) &&
      !isMorningIn(TZ.UTC_M8)
  );
  expect(isNightIn(TZ.UTC_M7)).toEqual(false);
  expect(isNightIn(TZ.UTC_M7)).toEqual(
    !isEveningIn(TZ.UTC_M7) &&
      !isAfternoonIn(TZ.UTC_M7) &&
      !isMorningIn(TZ.UTC_M7)
  );
  expect(isNightIn(TZ.UTC_M6)).toEqual(false);
  expect(isNightIn(TZ.UTC_M6)).toEqual(
    !isEveningIn(TZ.UTC_M6) &&
      !isAfternoonIn(TZ.UTC_M6) &&
      !isMorningIn(TZ.UTC_M6)
  );
  expect(isNightIn(TZ.UTC_M5)).toEqual(false);
  expect(isNightIn(TZ.UTC_M5)).toEqual(
    !isEveningIn(TZ.UTC_M5) &&
      !isAfternoonIn(TZ.UTC_M5) &&
      !isMorningIn(TZ.UTC_M5)
  );
  expect(isNightIn(TZ.UTC_M4)).toEqual(false);
  expect(isNightIn(TZ.UTC_M4)).toEqual(
    !isEveningIn(TZ.UTC_M4) &&
      !isAfternoonIn(TZ.UTC_M4) &&
      !isMorningIn(TZ.UTC_M4)
  );
  expect(isNightIn(TZ.UTC_M330)).toEqual(false);
  expect(isNightIn(TZ.UTC_M330)).toEqual(
    !isEveningIn(TZ.UTC_M330) &&
      !isAfternoonIn(TZ.UTC_M330) &&
      !isMorningIn(TZ.UTC_M330)
  );
  expect(isNightIn(TZ.UTC_M3)).toEqual(false);
  expect(isNightIn(TZ.UTC_M3)).toEqual(
    !isEveningIn(TZ.UTC_M3) &&
      !isAfternoonIn(TZ.UTC_M3) &&
      !isMorningIn(TZ.UTC_M3)
  );
  expect(isNightIn(TZ.UTC_M2)).toEqual(false);
  expect(isNightIn(TZ.UTC_M2)).toEqual(
    !isEveningIn(TZ.UTC_M2) &&
      !isAfternoonIn(TZ.UTC_M2) &&
      !isMorningIn(TZ.UTC_M2)
  );
  expect(isNightIn(TZ.UTC_M1)).toEqual(false);
  expect(isNightIn(TZ.UTC_M1)).toEqual(
    !isEveningIn(TZ.UTC_M1) &&
      !isAfternoonIn(TZ.UTC_M1) &&
      !isMorningIn(TZ.UTC_M1)
  );
  expect(isNightIn(TZ.UTC_0)).toEqual(false);
  expect(isNightIn(TZ.UTC_0)).toEqual(
    !isEveningIn(TZ.UTC_0) && !isAfternoonIn(TZ.UTC_0) && !isMorningIn(TZ.UTC_0)
  );
  expect(isNightIn(TZ.UTC_P1)).toEqual(false);
  expect(isNightIn(TZ.UTC_P1)).toEqual(
    !isEveningIn(TZ.UTC_P1) &&
      !isAfternoonIn(TZ.UTC_P1) &&
      !isMorningIn(TZ.UTC_P1)
  );
  expect(isNightIn(TZ.UTC_P2)).toEqual(false);
  expect(isNightIn(TZ.UTC_P2)).toEqual(
    !isEveningIn(TZ.UTC_P2) &&
      !isAfternoonIn(TZ.UTC_P2) &&
      !isMorningIn(TZ.UTC_P2)
  );
  expect(isNightIn(TZ.UTC_P3)).toEqual(false);
  expect(isNightIn(TZ.UTC_P3)).toEqual(
    !isEveningIn(TZ.UTC_P3) &&
      !isAfternoonIn(TZ.UTC_P3) &&
      !isMorningIn(TZ.UTC_P3)
  );
  expect(isNightIn(TZ.UTC_P330)).toEqual(false);
  expect(isNightIn(TZ.UTC_P330)).toEqual(
    !isEveningIn(TZ.UTC_P330) &&
      !isAfternoonIn(TZ.UTC_P330) &&
      !isMorningIn(TZ.UTC_P330)
  );
  expect(isNightIn(TZ.UTC_P4)).toEqual(false);
  expect(isNightIn(TZ.UTC_P4)).toEqual(
    !isEveningIn(TZ.UTC_P4) &&
      !isAfternoonIn(TZ.UTC_P4) &&
      !isMorningIn(TZ.UTC_P4)
  );
  expect(isNightIn(TZ.UTC_P430)).toEqual(false);
  expect(isNightIn(TZ.UTC_P430)).toEqual(
    !isEveningIn(TZ.UTC_P430) &&
      !isAfternoonIn(TZ.UTC_P430) &&
      !isMorningIn(TZ.UTC_P430)
  );
  expect(isNightIn(TZ.UTC_P5)).toEqual(false);
  expect(isNightIn(TZ.UTC_P5)).toEqual(
    !isEveningIn(TZ.UTC_P5) &&
      !isAfternoonIn(TZ.UTC_P5) &&
      !isMorningIn(TZ.UTC_P5)
  );
  expect(isNightIn(TZ.UTC_P530)).toEqual(false);
  expect(isNightIn(TZ.UTC_P530)).toEqual(
    !isEveningIn(TZ.UTC_P530) &&
      !isAfternoonIn(TZ.UTC_P530) &&
      !isMorningIn(TZ.UTC_P530)
  );
  expect(isNightIn(TZ.UTC_P545)).toEqual(false);
  expect(isNightIn(TZ.UTC_P545)).toEqual(
    !isEveningIn(TZ.UTC_P545) &&
      !isAfternoonIn(TZ.UTC_P545) &&
      !isMorningIn(TZ.UTC_P545)
  );
  expect(isNightIn(TZ.UTC_P6)).toEqual(false);
  expect(isNightIn(TZ.UTC_P6)).toEqual(
    !isEveningIn(TZ.UTC_P6) &&
      !isAfternoonIn(TZ.UTC_P6) &&
      !isMorningIn(TZ.UTC_P6)
  );
  expect(isNightIn(TZ.UTC_P630)).toEqual(false);
  expect(isNightIn(TZ.UTC_P630)).toEqual(
    !isEveningIn(TZ.UTC_P630) &&
      !isAfternoonIn(TZ.UTC_P630) &&
      !isMorningIn(TZ.UTC_P630)
  );
  expect(isNightIn(TZ.UTC_P7)).toEqual(false);
  expect(isNightIn(TZ.UTC_P7)).toEqual(
    !isEveningIn(TZ.UTC_P7) &&
      !isAfternoonIn(TZ.UTC_P7) &&
      !isMorningIn(TZ.UTC_P7)
  );
  expect(isNightIn(TZ.UTC_P8)).toEqual(false);
  expect(isNightIn(TZ.UTC_P8)).toEqual(
    !isEveningIn(TZ.UTC_P8) &&
      !isAfternoonIn(TZ.UTC_P8) &&
      !isMorningIn(TZ.UTC_P8)
  );
  expect(isNightIn(TZ.UTC_P9)).toEqual(false);
  expect(isNightIn(TZ.UTC_P9)).toEqual(
    !isEveningIn(TZ.UTC_P9) &&
      !isAfternoonIn(TZ.UTC_P9) &&
      !isMorningIn(TZ.UTC_P9)
  );
  expect(isNightIn(TZ.UTC_P930)).toEqual(false);
  expect(isNightIn(TZ.UTC_P930)).toEqual(
    !isEveningIn(TZ.UTC_P930) &&
      !isAfternoonIn(TZ.UTC_P930) &&
      !isMorningIn(TZ.UTC_P930)
  );
  expect(isNightIn(TZ.UTC_P10)).toEqual(false);
  expect(isNightIn(TZ.UTC_P10)).toEqual(
    !isEveningIn(TZ.UTC_P10) &&
      !isAfternoonIn(TZ.UTC_P10) &&
      !isMorningIn(TZ.UTC_P10)
  );
  expect(isNightIn(TZ.UTC_P1030)).toEqual(false);
  expect(isNightIn(TZ.UTC_P1030)).toEqual(
    !isEveningIn(TZ.UTC_P1030) &&
      !isAfternoonIn(TZ.UTC_P1030) &&
      !isMorningIn(TZ.UTC_P1030)
  );
  expect(isNightIn(TZ.UTC_P12)).toEqual(false);
  expect(isNightIn(TZ.UTC_P12)).toEqual(
    !isEveningIn(TZ.UTC_P12) &&
      !isAfternoonIn(TZ.UTC_P12) &&
      !isMorningIn(TZ.UTC_P12)
  );
  expect(isNightIn(TZ.UTC_P1245)).toEqual(false);
  expect(isNightIn(TZ.UTC_P1245)).toEqual(
    !isEveningIn(TZ.UTC_P1245) &&
      !isAfternoonIn(TZ.UTC_P1245) &&
      !isMorningIn(TZ.UTC_P1245)
  );
  expect(isNightIn(TZ.UTC_P13)).toEqual(false);
  expect(isNightIn(TZ.UTC_P13)).toEqual(
    !isEveningIn(TZ.UTC_P13) &&
      !isAfternoonIn(TZ.UTC_P13) &&
      !isMorningIn(TZ.UTC_P13)
  );
});

test("night in IANATimeZone 2011_11_11_11_22", () => {
  jest.setSystemTime(new Date(DATES.DATE_2011_11_11_11_22));
  expect(isNightIn(TZ.UTC_M11)).toEqual(false);
  expect(isNightIn(TZ.UTC_M11)).toEqual(
    !isEveningIn(TZ.UTC_M11) &&
      !isAfternoonIn(TZ.UTC_M11) &&
      !isMorningIn(TZ.UTC_M11)
  );
  expect(isNightIn(TZ.UTC_M10)).toEqual(false);
  expect(isNightIn(TZ.UTC_M10)).toEqual(
    !isEveningIn(TZ.UTC_M10) &&
      !isAfternoonIn(TZ.UTC_M10) &&
      !isMorningIn(TZ.UTC_M10)
  );
  expect(isNightIn(TZ.UTC_M930)).toEqual(false);
  expect(isNightIn(TZ.UTC_M930)).toEqual(
    !isEveningIn(TZ.UTC_M930) &&
      !isAfternoonIn(TZ.UTC_M930) &&
      !isMorningIn(TZ.UTC_M930)
  );
  expect(isNightIn(TZ.UTC_M9)).toEqual(false);
  expect(isNightIn(TZ.UTC_M9)).toEqual(
    !isEveningIn(TZ.UTC_M9) &&
      !isAfternoonIn(TZ.UTC_M9) &&
      !isMorningIn(TZ.UTC_M9)
  );
  expect(isNightIn(TZ.UTC_M8)).toEqual(false);
  expect(isNightIn(TZ.UTC_M8)).toEqual(
    !isEveningIn(TZ.UTC_M8) &&
      !isAfternoonIn(TZ.UTC_M8) &&
      !isMorningIn(TZ.UTC_M8)
  );
  expect(isNightIn(TZ.UTC_M7)).toEqual(false);
  expect(isNightIn(TZ.UTC_M7)).toEqual(
    !isEveningIn(TZ.UTC_M7) &&
      !isAfternoonIn(TZ.UTC_M7) &&
      !isMorningIn(TZ.UTC_M7)
  );
  expect(isNightIn(TZ.UTC_M6)).toEqual(false);
  expect(isNightIn(TZ.UTC_M6)).toEqual(
    !isEveningIn(TZ.UTC_M6) &&
      !isAfternoonIn(TZ.UTC_M6) &&
      !isMorningIn(TZ.UTC_M6)
  );
  expect(isNightIn(TZ.UTC_M5)).toEqual(false);
  expect(isNightIn(TZ.UTC_M5)).toEqual(
    !isEveningIn(TZ.UTC_M5) &&
      !isAfternoonIn(TZ.UTC_M5) &&
      !isMorningIn(TZ.UTC_M5)
  );
  expect(isNightIn(TZ.UTC_M4)).toEqual(false);
  expect(isNightIn(TZ.UTC_M4)).toEqual(
    !isEveningIn(TZ.UTC_M4) &&
      !isAfternoonIn(TZ.UTC_M4) &&
      !isMorningIn(TZ.UTC_M4)
  );
  expect(isNightIn(TZ.UTC_M330)).toEqual(false);
  expect(isNightIn(TZ.UTC_M330)).toEqual(
    !isEveningIn(TZ.UTC_M330) &&
      !isAfternoonIn(TZ.UTC_M330) &&
      !isMorningIn(TZ.UTC_M330)
  );
  expect(isNightIn(TZ.UTC_M3)).toEqual(false);
  expect(isNightIn(TZ.UTC_M3)).toEqual(
    !isEveningIn(TZ.UTC_M3) &&
      !isAfternoonIn(TZ.UTC_M3) &&
      !isMorningIn(TZ.UTC_M3)
  );
  expect(isNightIn(TZ.UTC_M2)).toEqual(false);
  expect(isNightIn(TZ.UTC_M2)).toEqual(
    !isEveningIn(TZ.UTC_M2) &&
      !isAfternoonIn(TZ.UTC_M2) &&
      !isMorningIn(TZ.UTC_M2)
  );
  expect(isNightIn(TZ.UTC_M1)).toEqual(false);
  expect(isNightIn(TZ.UTC_M1)).toEqual(
    !isEveningIn(TZ.UTC_M1) &&
      !isAfternoonIn(TZ.UTC_M1) &&
      !isMorningIn(TZ.UTC_M1)
  );
  expect(isNightIn(TZ.UTC_0)).toEqual(false);
  expect(isNightIn(TZ.UTC_0)).toEqual(
    !isEveningIn(TZ.UTC_0) && !isAfternoonIn(TZ.UTC_0) && !isMorningIn(TZ.UTC_0)
  );
  expect(isNightIn(TZ.UTC_P1)).toEqual(false);
  expect(isNightIn(TZ.UTC_P1)).toEqual(
    !isEveningIn(TZ.UTC_P1) &&
      !isAfternoonIn(TZ.UTC_P1) &&
      !isMorningIn(TZ.UTC_P1)
  );
  expect(isNightIn(TZ.UTC_P2)).toEqual(false);
  expect(isNightIn(TZ.UTC_P2)).toEqual(
    !isEveningIn(TZ.UTC_P2) &&
      !isAfternoonIn(TZ.UTC_P2) &&
      !isMorningIn(TZ.UTC_P2)
  );
  expect(isNightIn(TZ.UTC_P3)).toEqual(false);
  expect(isNightIn(TZ.UTC_P3)).toEqual(
    !isEveningIn(TZ.UTC_P3) &&
      !isAfternoonIn(TZ.UTC_P3) &&
      !isMorningIn(TZ.UTC_P3)
  );
  expect(isNightIn(TZ.UTC_P330)).toEqual(false);
  expect(isNightIn(TZ.UTC_P330)).toEqual(
    !isEveningIn(TZ.UTC_P330) &&
      !isAfternoonIn(TZ.UTC_P330) &&
      !isMorningIn(TZ.UTC_P330)
  );
  expect(isNightIn(TZ.UTC_P4)).toEqual(false);
  expect(isNightIn(TZ.UTC_P4)).toEqual(
    !isEveningIn(TZ.UTC_P4) &&
      !isAfternoonIn(TZ.UTC_P4) &&
      !isMorningIn(TZ.UTC_P4)
  );
  expect(isNightIn(TZ.UTC_P430)).toEqual(false);
  expect(isNightIn(TZ.UTC_P430)).toEqual(
    !isEveningIn(TZ.UTC_P430) &&
      !isAfternoonIn(TZ.UTC_P430) &&
      !isMorningIn(TZ.UTC_P430)
  );
  expect(isNightIn(TZ.UTC_P5)).toEqual(false);
  expect(isNightIn(TZ.UTC_P5)).toEqual(
    !isEveningIn(TZ.UTC_P5) &&
      !isAfternoonIn(TZ.UTC_P5) &&
      !isMorningIn(TZ.UTC_P5)
  );
  expect(isNightIn(TZ.UTC_P530)).toEqual(false);
  expect(isNightIn(TZ.UTC_P530)).toEqual(
    !isEveningIn(TZ.UTC_P530) &&
      !isAfternoonIn(TZ.UTC_P530) &&
      !isMorningIn(TZ.UTC_P530)
  );
  expect(isNightIn(TZ.UTC_P545)).toEqual(false);
  expect(isNightIn(TZ.UTC_P545)).toEqual(
    !isEveningIn(TZ.UTC_P545) &&
      !isAfternoonIn(TZ.UTC_P545) &&
      !isMorningIn(TZ.UTC_P545)
  );
  expect(isNightIn(TZ.UTC_P6)).toEqual(false);
  expect(isNightIn(TZ.UTC_P6)).toEqual(
    !isEveningIn(TZ.UTC_P6) &&
      !isAfternoonIn(TZ.UTC_P6) &&
      !isMorningIn(TZ.UTC_P6)
  );
  expect(isNightIn(TZ.UTC_P630)).toEqual(false);
  expect(isNightIn(TZ.UTC_P630)).toEqual(
    !isEveningIn(TZ.UTC_P630) &&
      !isAfternoonIn(TZ.UTC_P630) &&
      !isMorningIn(TZ.UTC_P630)
  );
  expect(isNightIn(TZ.UTC_P7)).toEqual(false);
  expect(isNightIn(TZ.UTC_P7)).toEqual(
    !isEveningIn(TZ.UTC_P7) &&
      !isAfternoonIn(TZ.UTC_P7) &&
      !isMorningIn(TZ.UTC_P7)
  );
  expect(isNightIn(TZ.UTC_P8)).toEqual(false);
  expect(isNightIn(TZ.UTC_P8)).toEqual(
    !isEveningIn(TZ.UTC_P8) &&
      !isAfternoonIn(TZ.UTC_P8) &&
      !isMorningIn(TZ.UTC_P8)
  );
  expect(isNightIn(TZ.UTC_P9)).toEqual(false);
  expect(isNightIn(TZ.UTC_P9)).toEqual(
    !isEveningIn(TZ.UTC_P9) &&
      !isAfternoonIn(TZ.UTC_P9) &&
      !isMorningIn(TZ.UTC_P9)
  );
  expect(isNightIn(TZ.UTC_P930)).toEqual(false);
  expect(isNightIn(TZ.UTC_P930)).toEqual(
    !isEveningIn(TZ.UTC_P930) &&
      !isAfternoonIn(TZ.UTC_P930) &&
      !isMorningIn(TZ.UTC_P930)
  );
  expect(isNightIn(TZ.UTC_P10)).toEqual(false);
  expect(isNightIn(TZ.UTC_P10)).toEqual(
    !isEveningIn(TZ.UTC_P10) &&
      !isAfternoonIn(TZ.UTC_P10) &&
      !isMorningIn(TZ.UTC_P10)
  );
  expect(isNightIn(TZ.UTC_P1030)).toEqual(false);
  expect(isNightIn(TZ.UTC_P1030)).toEqual(
    !isEveningIn(TZ.UTC_P1030) &&
      !isAfternoonIn(TZ.UTC_P1030) &&
      !isMorningIn(TZ.UTC_P1030)
  );
  expect(isNightIn(TZ.UTC_P12)).toEqual(false);
  expect(isNightIn(TZ.UTC_P12)).toEqual(
    !isEveningIn(TZ.UTC_P12) &&
      !isAfternoonIn(TZ.UTC_P12) &&
      !isMorningIn(TZ.UTC_P12)
  );
  expect(isNightIn(TZ.UTC_P1245)).toEqual(false);
  expect(isNightIn(TZ.UTC_P1245)).toEqual(
    !isEveningIn(TZ.UTC_P1245) &&
      !isAfternoonIn(TZ.UTC_P1245) &&
      !isMorningIn(TZ.UTC_P1245)
  );
  expect(isNightIn(TZ.UTC_P13)).toEqual(false);
  expect(isNightIn(TZ.UTC_P13)).toEqual(
    !isEveningIn(TZ.UTC_P13) &&
      !isAfternoonIn(TZ.UTC_P13) &&
      !isMorningIn(TZ.UTC_P13)
  );
});

test("night in IANATimeZone 2012_12_12_12_24", () => {
  jest.setSystemTime(new Date(DATES.DATE_2012_12_12_12_24));
  expect(isNightIn(TZ.UTC_M11)).toEqual(false);
  expect(isNightIn(TZ.UTC_M11)).toEqual(
    !isEveningIn(TZ.UTC_M11) &&
      !isAfternoonIn(TZ.UTC_M11) &&
      !isMorningIn(TZ.UTC_M11)
  );
  expect(isNightIn(TZ.UTC_M10)).toEqual(false);
  expect(isNightIn(TZ.UTC_M10)).toEqual(
    !isEveningIn(TZ.UTC_M10) &&
      !isAfternoonIn(TZ.UTC_M10) &&
      !isMorningIn(TZ.UTC_M10)
  );
  expect(isNightIn(TZ.UTC_M930)).toEqual(false);
  expect(isNightIn(TZ.UTC_M930)).toEqual(
    !isEveningIn(TZ.UTC_M930) &&
      !isAfternoonIn(TZ.UTC_M930) &&
      !isMorningIn(TZ.UTC_M930)
  );
  expect(isNightIn(TZ.UTC_M9)).toEqual(false);
  expect(isNightIn(TZ.UTC_M9)).toEqual(
    !isEveningIn(TZ.UTC_M9) &&
      !isAfternoonIn(TZ.UTC_M9) &&
      !isMorningIn(TZ.UTC_M9)
  );
  expect(isNightIn(TZ.UTC_M8)).toEqual(false);
  expect(isNightIn(TZ.UTC_M8)).toEqual(
    !isEveningIn(TZ.UTC_M8) &&
      !isAfternoonIn(TZ.UTC_M8) &&
      !isMorningIn(TZ.UTC_M8)
  );
  expect(isNightIn(TZ.UTC_M7)).toEqual(false);
  expect(isNightIn(TZ.UTC_M7)).toEqual(
    !isEveningIn(TZ.UTC_M7) &&
      !isAfternoonIn(TZ.UTC_M7) &&
      !isMorningIn(TZ.UTC_M7)
  );
  expect(isNightIn(TZ.UTC_M6)).toEqual(false);
  expect(isNightIn(TZ.UTC_M6)).toEqual(
    !isEveningIn(TZ.UTC_M6) &&
      !isAfternoonIn(TZ.UTC_M6) &&
      !isMorningIn(TZ.UTC_M6)
  );
  expect(isNightIn(TZ.UTC_M5)).toEqual(false);
  expect(isNightIn(TZ.UTC_M5)).toEqual(
    !isEveningIn(TZ.UTC_M5) &&
      !isAfternoonIn(TZ.UTC_M5) &&
      !isMorningIn(TZ.UTC_M5)
  );
  expect(isNightIn(TZ.UTC_M4)).toEqual(false);
  expect(isNightIn(TZ.UTC_M4)).toEqual(
    !isEveningIn(TZ.UTC_M4) &&
      !isAfternoonIn(TZ.UTC_M4) &&
      !isMorningIn(TZ.UTC_M4)
  );
  expect(isNightIn(TZ.UTC_M330)).toEqual(false);
  expect(isNightIn(TZ.UTC_M330)).toEqual(
    !isEveningIn(TZ.UTC_M330) &&
      !isAfternoonIn(TZ.UTC_M330) &&
      !isMorningIn(TZ.UTC_M330)
  );
  expect(isNightIn(TZ.UTC_M3)).toEqual(false);
  expect(isNightIn(TZ.UTC_M3)).toEqual(
    !isEveningIn(TZ.UTC_M3) &&
      !isAfternoonIn(TZ.UTC_M3) &&
      !isMorningIn(TZ.UTC_M3)
  );
  expect(isNightIn(TZ.UTC_M2)).toEqual(false);
  expect(isNightIn(TZ.UTC_M2)).toEqual(
    !isEveningIn(TZ.UTC_M2) &&
      !isAfternoonIn(TZ.UTC_M2) &&
      !isMorningIn(TZ.UTC_M2)
  );
  expect(isNightIn(TZ.UTC_M1)).toEqual(false);
  expect(isNightIn(TZ.UTC_M1)).toEqual(
    !isEveningIn(TZ.UTC_M1) &&
      !isAfternoonIn(TZ.UTC_M1) &&
      !isMorningIn(TZ.UTC_M1)
  );
  expect(isNightIn(TZ.UTC_0)).toEqual(false);
  expect(isNightIn(TZ.UTC_0)).toEqual(
    !isEveningIn(TZ.UTC_0) && !isAfternoonIn(TZ.UTC_0) && !isMorningIn(TZ.UTC_0)
  );
  expect(isNightIn(TZ.UTC_P1)).toEqual(false);
  expect(isNightIn(TZ.UTC_P1)).toEqual(
    !isEveningIn(TZ.UTC_P1) &&
      !isAfternoonIn(TZ.UTC_P1) &&
      !isMorningIn(TZ.UTC_P1)
  );
  expect(isNightIn(TZ.UTC_P2)).toEqual(false);
  expect(isNightIn(TZ.UTC_P2)).toEqual(
    !isEveningIn(TZ.UTC_P2) &&
      !isAfternoonIn(TZ.UTC_P2) &&
      !isMorningIn(TZ.UTC_P2)
  );
  expect(isNightIn(TZ.UTC_P3)).toEqual(false);
  expect(isNightIn(TZ.UTC_P3)).toEqual(
    !isEveningIn(TZ.UTC_P3) &&
      !isAfternoonIn(TZ.UTC_P3) &&
      !isMorningIn(TZ.UTC_P3)
  );
  expect(isNightIn(TZ.UTC_P330)).toEqual(false);
  expect(isNightIn(TZ.UTC_P330)).toEqual(
    !isEveningIn(TZ.UTC_P330) &&
      !isAfternoonIn(TZ.UTC_P330) &&
      !isMorningIn(TZ.UTC_P330)
  );
  expect(isNightIn(TZ.UTC_P4)).toEqual(false);
  expect(isNightIn(TZ.UTC_P4)).toEqual(
    !isEveningIn(TZ.UTC_P4) &&
      !isAfternoonIn(TZ.UTC_P4) &&
      !isMorningIn(TZ.UTC_P4)
  );
  expect(isNightIn(TZ.UTC_P430)).toEqual(false);
  expect(isNightIn(TZ.UTC_P430)).toEqual(
    !isEveningIn(TZ.UTC_P430) &&
      !isAfternoonIn(TZ.UTC_P430) &&
      !isMorningIn(TZ.UTC_P430)
  );
  expect(isNightIn(TZ.UTC_P5)).toEqual(false);
  expect(isNightIn(TZ.UTC_P5)).toEqual(
    !isEveningIn(TZ.UTC_P5) &&
      !isAfternoonIn(TZ.UTC_P5) &&
      !isMorningIn(TZ.UTC_P5)
  );
  expect(isNightIn(TZ.UTC_P530)).toEqual(false);
  expect(isNightIn(TZ.UTC_P530)).toEqual(
    !isEveningIn(TZ.UTC_P530) &&
      !isAfternoonIn(TZ.UTC_P530) &&
      !isMorningIn(TZ.UTC_P530)
  );
  expect(isNightIn(TZ.UTC_P545)).toEqual(false);
  expect(isNightIn(TZ.UTC_P545)).toEqual(
    !isEveningIn(TZ.UTC_P545) &&
      !isAfternoonIn(TZ.UTC_P545) &&
      !isMorningIn(TZ.UTC_P545)
  );
  expect(isNightIn(TZ.UTC_P6)).toEqual(false);
  expect(isNightIn(TZ.UTC_P6)).toEqual(
    !isEveningIn(TZ.UTC_P6) &&
      !isAfternoonIn(TZ.UTC_P6) &&
      !isMorningIn(TZ.UTC_P6)
  );
  expect(isNightIn(TZ.UTC_P630)).toEqual(false);
  expect(isNightIn(TZ.UTC_P630)).toEqual(
    !isEveningIn(TZ.UTC_P630) &&
      !isAfternoonIn(TZ.UTC_P630) &&
      !isMorningIn(TZ.UTC_P630)
  );
  expect(isNightIn(TZ.UTC_P7)).toEqual(false);
  expect(isNightIn(TZ.UTC_P7)).toEqual(
    !isEveningIn(TZ.UTC_P7) &&
      !isAfternoonIn(TZ.UTC_P7) &&
      !isMorningIn(TZ.UTC_P7)
  );
  expect(isNightIn(TZ.UTC_P8)).toEqual(false);
  expect(isNightIn(TZ.UTC_P8)).toEqual(
    !isEveningIn(TZ.UTC_P8) &&
      !isAfternoonIn(TZ.UTC_P8) &&
      !isMorningIn(TZ.UTC_P8)
  );
  expect(isNightIn(TZ.UTC_P9)).toEqual(false);
  expect(isNightIn(TZ.UTC_P9)).toEqual(
    !isEveningIn(TZ.UTC_P9) &&
      !isAfternoonIn(TZ.UTC_P9) &&
      !isMorningIn(TZ.UTC_P9)
  );
  expect(isNightIn(TZ.UTC_P930)).toEqual(false);
  expect(isNightIn(TZ.UTC_P930)).toEqual(
    !isEveningIn(TZ.UTC_P930) &&
      !isAfternoonIn(TZ.UTC_P930) &&
      !isMorningIn(TZ.UTC_P930)
  );
  expect(isNightIn(TZ.UTC_P10)).toEqual(false);
  expect(isNightIn(TZ.UTC_P10)).toEqual(
    !isEveningIn(TZ.UTC_P10) &&
      !isAfternoonIn(TZ.UTC_P10) &&
      !isMorningIn(TZ.UTC_P10)
  );
  expect(isNightIn(TZ.UTC_P1030)).toEqual(false);
  expect(isNightIn(TZ.UTC_P1030)).toEqual(
    !isEveningIn(TZ.UTC_P1030) &&
      !isAfternoonIn(TZ.UTC_P1030) &&
      !isMorningIn(TZ.UTC_P1030)
  );
  expect(isNightIn(TZ.UTC_P12)).toEqual(false);
  expect(isNightIn(TZ.UTC_P12)).toEqual(
    !isEveningIn(TZ.UTC_P12) &&
      !isAfternoonIn(TZ.UTC_P12) &&
      !isMorningIn(TZ.UTC_P12)
  );
  expect(isNightIn(TZ.UTC_P1245)).toEqual(false);
  expect(isNightIn(TZ.UTC_P1245)).toEqual(
    !isEveningIn(TZ.UTC_P1245) &&
      !isAfternoonIn(TZ.UTC_P1245) &&
      !isMorningIn(TZ.UTC_P1245)
  );
  expect(isNightIn(TZ.UTC_P13)).toEqual(false);
  expect(isNightIn(TZ.UTC_P13)).toEqual(
    !isEveningIn(TZ.UTC_P13) &&
      !isAfternoonIn(TZ.UTC_P13) &&
      !isMorningIn(TZ.UTC_P13)
  );
});

test("night in IANATimeZone 2013_03_13_13_26", () => {
  jest.setSystemTime(new Date(DATES.DATE_2013_03_13_13_26));
  expect(isNightIn(TZ.UTC_M11)).toEqual(false);
  expect(isNightIn(TZ.UTC_M11)).toEqual(
    !isEveningIn(TZ.UTC_M11) &&
      !isAfternoonIn(TZ.UTC_M11) &&
      !isMorningIn(TZ.UTC_M11)
  );
  expect(isNightIn(TZ.UTC_M10)).toEqual(false);
  expect(isNightIn(TZ.UTC_M10)).toEqual(
    !isEveningIn(TZ.UTC_M10) &&
      !isAfternoonIn(TZ.UTC_M10) &&
      !isMorningIn(TZ.UTC_M10)
  );
  expect(isNightIn(TZ.UTC_M930)).toEqual(false);
  expect(isNightIn(TZ.UTC_M930)).toEqual(
    !isEveningIn(TZ.UTC_M930) &&
      !isAfternoonIn(TZ.UTC_M930) &&
      !isMorningIn(TZ.UTC_M930)
  );
  expect(isNightIn(TZ.UTC_M9)).toEqual(false);
  expect(isNightIn(TZ.UTC_M9)).toEqual(
    !isEveningIn(TZ.UTC_M9) &&
      !isAfternoonIn(TZ.UTC_M9) &&
      !isMorningIn(TZ.UTC_M9)
  );
  expect(isNightIn(TZ.UTC_M8)).toEqual(false);
  expect(isNightIn(TZ.UTC_M8)).toEqual(
    !isEveningIn(TZ.UTC_M8) &&
      !isAfternoonIn(TZ.UTC_M8) &&
      !isMorningIn(TZ.UTC_M8)
  );
  expect(isNightIn(TZ.UTC_M7)).toEqual(false);
  expect(isNightIn(TZ.UTC_M7)).toEqual(
    !isEveningIn(TZ.UTC_M7) &&
      !isAfternoonIn(TZ.UTC_M7) &&
      !isMorningIn(TZ.UTC_M7)
  );
  expect(isNightIn(TZ.UTC_M6)).toEqual(false);
  expect(isNightIn(TZ.UTC_M6)).toEqual(
    !isEveningIn(TZ.UTC_M6) &&
      !isAfternoonIn(TZ.UTC_M6) &&
      !isMorningIn(TZ.UTC_M6)
  );
  expect(isNightIn(TZ.UTC_M5)).toEqual(false);
  expect(isNightIn(TZ.UTC_M5)).toEqual(
    !isEveningIn(TZ.UTC_M5) &&
      !isAfternoonIn(TZ.UTC_M5) &&
      !isMorningIn(TZ.UTC_M5)
  );
  expect(isNightIn(TZ.UTC_M4)).toEqual(false);
  expect(isNightIn(TZ.UTC_M4)).toEqual(
    !isEveningIn(TZ.UTC_M4) &&
      !isAfternoonIn(TZ.UTC_M4) &&
      !isMorningIn(TZ.UTC_M4)
  );
  expect(isNightIn(TZ.UTC_M330)).toEqual(false);
  expect(isNightIn(TZ.UTC_M330)).toEqual(
    !isEveningIn(TZ.UTC_M330) &&
      !isAfternoonIn(TZ.UTC_M330) &&
      !isMorningIn(TZ.UTC_M330)
  );
  expect(isNightIn(TZ.UTC_M3)).toEqual(false);
  expect(isNightIn(TZ.UTC_M3)).toEqual(
    !isEveningIn(TZ.UTC_M3) &&
      !isAfternoonIn(TZ.UTC_M3) &&
      !isMorningIn(TZ.UTC_M3)
  );
  expect(isNightIn(TZ.UTC_M2)).toEqual(false);
  expect(isNightIn(TZ.UTC_M2)).toEqual(
    !isEveningIn(TZ.UTC_M2) &&
      !isAfternoonIn(TZ.UTC_M2) &&
      !isMorningIn(TZ.UTC_M2)
  );
  expect(isNightIn(TZ.UTC_M1)).toEqual(false);
  expect(isNightIn(TZ.UTC_M1)).toEqual(
    !isEveningIn(TZ.UTC_M1) &&
      !isAfternoonIn(TZ.UTC_M1) &&
      !isMorningIn(TZ.UTC_M1)
  );
  expect(isNightIn(TZ.UTC_0)).toEqual(false);
  expect(isNightIn(TZ.UTC_0)).toEqual(
    !isEveningIn(TZ.UTC_0) && !isAfternoonIn(TZ.UTC_0) && !isMorningIn(TZ.UTC_0)
  );
  expect(isNightIn(TZ.UTC_P1)).toEqual(false);
  expect(isNightIn(TZ.UTC_P1)).toEqual(
    !isEveningIn(TZ.UTC_P1) &&
      !isAfternoonIn(TZ.UTC_P1) &&
      !isMorningIn(TZ.UTC_P1)
  );
  expect(isNightIn(TZ.UTC_P2)).toEqual(false);
  expect(isNightIn(TZ.UTC_P2)).toEqual(
    !isEveningIn(TZ.UTC_P2) &&
      !isAfternoonIn(TZ.UTC_P2) &&
      !isMorningIn(TZ.UTC_P2)
  );
  expect(isNightIn(TZ.UTC_P3)).toEqual(false);
  expect(isNightIn(TZ.UTC_P3)).toEqual(
    !isEveningIn(TZ.UTC_P3) &&
      !isAfternoonIn(TZ.UTC_P3) &&
      !isMorningIn(TZ.UTC_P3)
  );
  expect(isNightIn(TZ.UTC_P330)).toEqual(false);
  expect(isNightIn(TZ.UTC_P330)).toEqual(
    !isEveningIn(TZ.UTC_P330) &&
      !isAfternoonIn(TZ.UTC_P330) &&
      !isMorningIn(TZ.UTC_P330)
  );
  expect(isNightIn(TZ.UTC_P4)).toEqual(false);
  expect(isNightIn(TZ.UTC_P4)).toEqual(
    !isEveningIn(TZ.UTC_P4) &&
      !isAfternoonIn(TZ.UTC_P4) &&
      !isMorningIn(TZ.UTC_P4)
  );
  expect(isNightIn(TZ.UTC_P430)).toEqual(false);
  expect(isNightIn(TZ.UTC_P430)).toEqual(
    !isEveningIn(TZ.UTC_P430) &&
      !isAfternoonIn(TZ.UTC_P430) &&
      !isMorningIn(TZ.UTC_P430)
  );
  expect(isNightIn(TZ.UTC_P5)).toEqual(false);
  expect(isNightIn(TZ.UTC_P5)).toEqual(
    !isEveningIn(TZ.UTC_P5) &&
      !isAfternoonIn(TZ.UTC_P5) &&
      !isMorningIn(TZ.UTC_P5)
  );
  expect(isNightIn(TZ.UTC_P530)).toEqual(false);
  expect(isNightIn(TZ.UTC_P530)).toEqual(
    !isEveningIn(TZ.UTC_P530) &&
      !isAfternoonIn(TZ.UTC_P530) &&
      !isMorningIn(TZ.UTC_P530)
  );
  expect(isNightIn(TZ.UTC_P545)).toEqual(false);
  expect(isNightIn(TZ.UTC_P545)).toEqual(
    !isEveningIn(TZ.UTC_P545) &&
      !isAfternoonIn(TZ.UTC_P545) &&
      !isMorningIn(TZ.UTC_P545)
  );
  expect(isNightIn(TZ.UTC_P6)).toEqual(false);
  expect(isNightIn(TZ.UTC_P6)).toEqual(
    !isEveningIn(TZ.UTC_P6) &&
      !isAfternoonIn(TZ.UTC_P6) &&
      !isMorningIn(TZ.UTC_P6)
  );
  expect(isNightIn(TZ.UTC_P630)).toEqual(false);
  expect(isNightIn(TZ.UTC_P630)).toEqual(
    !isEveningIn(TZ.UTC_P630) &&
      !isAfternoonIn(TZ.UTC_P630) &&
      !isMorningIn(TZ.UTC_P630)
  );
  expect(isNightIn(TZ.UTC_P7)).toEqual(false);
  expect(isNightIn(TZ.UTC_P7)).toEqual(
    !isEveningIn(TZ.UTC_P7) &&
      !isAfternoonIn(TZ.UTC_P7) &&
      !isMorningIn(TZ.UTC_P7)
  );
  expect(isNightIn(TZ.UTC_P8)).toEqual(false);
  expect(isNightIn(TZ.UTC_P8)).toEqual(
    !isEveningIn(TZ.UTC_P8) &&
      !isAfternoonIn(TZ.UTC_P8) &&
      !isMorningIn(TZ.UTC_P8)
  );
  expect(isNightIn(TZ.UTC_P9)).toEqual(false);
  expect(isNightIn(TZ.UTC_P9)).toEqual(
    !isEveningIn(TZ.UTC_P9) &&
      !isAfternoonIn(TZ.UTC_P9) &&
      !isMorningIn(TZ.UTC_P9)
  );
  expect(isNightIn(TZ.UTC_P930)).toEqual(false);
  expect(isNightIn(TZ.UTC_P930)).toEqual(
    !isEveningIn(TZ.UTC_P930) &&
      !isAfternoonIn(TZ.UTC_P930) &&
      !isMorningIn(TZ.UTC_P930)
  );
  expect(isNightIn(TZ.UTC_P10)).toEqual(false);
  expect(isNightIn(TZ.UTC_P10)).toEqual(
    !isEveningIn(TZ.UTC_P10) &&
      !isAfternoonIn(TZ.UTC_P10) &&
      !isMorningIn(TZ.UTC_P10)
  );
  expect(isNightIn(TZ.UTC_P1030)).toEqual(false);
  expect(isNightIn(TZ.UTC_P1030)).toEqual(
    !isEveningIn(TZ.UTC_P1030) &&
      !isAfternoonIn(TZ.UTC_P1030) &&
      !isMorningIn(TZ.UTC_P1030)
  );
  expect(isNightIn(TZ.UTC_P12)).toEqual(false);
  expect(isNightIn(TZ.UTC_P12)).toEqual(
    !isEveningIn(TZ.UTC_P12) &&
      !isAfternoonIn(TZ.UTC_P12) &&
      !isMorningIn(TZ.UTC_P12)
  );
  expect(isNightIn(TZ.UTC_P1245)).toEqual(false);
  expect(isNightIn(TZ.UTC_P1245)).toEqual(
    !isEveningIn(TZ.UTC_P1245) &&
      !isAfternoonIn(TZ.UTC_P1245) &&
      !isMorningIn(TZ.UTC_P1245)
  );
  expect(isNightIn(TZ.UTC_P13)).toEqual(false);
  expect(isNightIn(TZ.UTC_P13)).toEqual(
    !isEveningIn(TZ.UTC_P13) &&
      !isAfternoonIn(TZ.UTC_P13) &&
      !isMorningIn(TZ.UTC_P13)
  );
});

test("night in IANATimeZone 2014_04_14_14_28", () => {
  jest.setSystemTime(new Date(DATES.DATE_2014_04_14_14_28));
  expect(isNightIn(TZ.UTC_M11)).toEqual(false);
  expect(isNightIn(TZ.UTC_M11)).toEqual(
    !isEveningIn(TZ.UTC_M11) &&
      !isAfternoonIn(TZ.UTC_M11) &&
      !isMorningIn(TZ.UTC_M11)
  );
  expect(isNightIn(TZ.UTC_M10)).toEqual(false);
  expect(isNightIn(TZ.UTC_M10)).toEqual(
    !isEveningIn(TZ.UTC_M10) &&
      !isAfternoonIn(TZ.UTC_M10) &&
      !isMorningIn(TZ.UTC_M10)
  );
  expect(isNightIn(TZ.UTC_M930)).toEqual(false);
  expect(isNightIn(TZ.UTC_M930)).toEqual(
    !isEveningIn(TZ.UTC_M930) &&
      !isAfternoonIn(TZ.UTC_M930) &&
      !isMorningIn(TZ.UTC_M930)
  );
  expect(isNightIn(TZ.UTC_M9)).toEqual(false);
  expect(isNightIn(TZ.UTC_M9)).toEqual(
    !isEveningIn(TZ.UTC_M9) &&
      !isAfternoonIn(TZ.UTC_M9) &&
      !isMorningIn(TZ.UTC_M9)
  );
  expect(isNightIn(TZ.UTC_M8)).toEqual(false);
  expect(isNightIn(TZ.UTC_M8)).toEqual(
    !isEveningIn(TZ.UTC_M8) &&
      !isAfternoonIn(TZ.UTC_M8) &&
      !isMorningIn(TZ.UTC_M8)
  );
  expect(isNightIn(TZ.UTC_M7)).toEqual(false);
  expect(isNightIn(TZ.UTC_M7)).toEqual(
    !isEveningIn(TZ.UTC_M7) &&
      !isAfternoonIn(TZ.UTC_M7) &&
      !isMorningIn(TZ.UTC_M7)
  );
  expect(isNightIn(TZ.UTC_M6)).toEqual(false);
  expect(isNightIn(TZ.UTC_M6)).toEqual(
    !isEveningIn(TZ.UTC_M6) &&
      !isAfternoonIn(TZ.UTC_M6) &&
      !isMorningIn(TZ.UTC_M6)
  );
  expect(isNightIn(TZ.UTC_M5)).toEqual(false);
  expect(isNightIn(TZ.UTC_M5)).toEqual(
    !isEveningIn(TZ.UTC_M5) &&
      !isAfternoonIn(TZ.UTC_M5) &&
      !isMorningIn(TZ.UTC_M5)
  );
  expect(isNightIn(TZ.UTC_M4)).toEqual(false);
  expect(isNightIn(TZ.UTC_M4)).toEqual(
    !isEveningIn(TZ.UTC_M4) &&
      !isAfternoonIn(TZ.UTC_M4) &&
      !isMorningIn(TZ.UTC_M4)
  );
  expect(isNightIn(TZ.UTC_M330)).toEqual(false);
  expect(isNightIn(TZ.UTC_M330)).toEqual(
    !isEveningIn(TZ.UTC_M330) &&
      !isAfternoonIn(TZ.UTC_M330) &&
      !isMorningIn(TZ.UTC_M330)
  );
  expect(isNightIn(TZ.UTC_M3)).toEqual(false);
  expect(isNightIn(TZ.UTC_M3)).toEqual(
    !isEveningIn(TZ.UTC_M3) &&
      !isAfternoonIn(TZ.UTC_M3) &&
      !isMorningIn(TZ.UTC_M3)
  );
  expect(isNightIn(TZ.UTC_M2)).toEqual(false);
  expect(isNightIn(TZ.UTC_M2)).toEqual(
    !isEveningIn(TZ.UTC_M2) &&
      !isAfternoonIn(TZ.UTC_M2) &&
      !isMorningIn(TZ.UTC_M2)
  );
  expect(isNightIn(TZ.UTC_M1)).toEqual(false);
  expect(isNightIn(TZ.UTC_M1)).toEqual(
    !isEveningIn(TZ.UTC_M1) &&
      !isAfternoonIn(TZ.UTC_M1) &&
      !isMorningIn(TZ.UTC_M1)
  );
  expect(isNightIn(TZ.UTC_0)).toEqual(false);
  expect(isNightIn(TZ.UTC_0)).toEqual(
    !isEveningIn(TZ.UTC_0) && !isAfternoonIn(TZ.UTC_0) && !isMorningIn(TZ.UTC_0)
  );
  expect(isNightIn(TZ.UTC_P1)).toEqual(false);
  expect(isNightIn(TZ.UTC_P1)).toEqual(
    !isEveningIn(TZ.UTC_P1) &&
      !isAfternoonIn(TZ.UTC_P1) &&
      !isMorningIn(TZ.UTC_P1)
  );
  expect(isNightIn(TZ.UTC_P2)).toEqual(false);
  expect(isNightIn(TZ.UTC_P2)).toEqual(
    !isEveningIn(TZ.UTC_P2) &&
      !isAfternoonIn(TZ.UTC_P2) &&
      !isMorningIn(TZ.UTC_P2)
  );
  expect(isNightIn(TZ.UTC_P3)).toEqual(false);
  expect(isNightIn(TZ.UTC_P3)).toEqual(
    !isEveningIn(TZ.UTC_P3) &&
      !isAfternoonIn(TZ.UTC_P3) &&
      !isMorningIn(TZ.UTC_P3)
  );
  expect(isNightIn(TZ.UTC_P330)).toEqual(false);
  expect(isNightIn(TZ.UTC_P330)).toEqual(
    !isEveningIn(TZ.UTC_P330) &&
      !isAfternoonIn(TZ.UTC_P330) &&
      !isMorningIn(TZ.UTC_P330)
  );
  expect(isNightIn(TZ.UTC_P4)).toEqual(false);
  expect(isNightIn(TZ.UTC_P4)).toEqual(
    !isEveningIn(TZ.UTC_P4) &&
      !isAfternoonIn(TZ.UTC_P4) &&
      !isMorningIn(TZ.UTC_P4)
  );
  expect(isNightIn(TZ.UTC_P430)).toEqual(false);
  expect(isNightIn(TZ.UTC_P430)).toEqual(
    !isEveningIn(TZ.UTC_P430) &&
      !isAfternoonIn(TZ.UTC_P430) &&
      !isMorningIn(TZ.UTC_P430)
  );
  expect(isNightIn(TZ.UTC_P5)).toEqual(false);
  expect(isNightIn(TZ.UTC_P5)).toEqual(
    !isEveningIn(TZ.UTC_P5) &&
      !isAfternoonIn(TZ.UTC_P5) &&
      !isMorningIn(TZ.UTC_P5)
  );
  expect(isNightIn(TZ.UTC_P530)).toEqual(false);
  expect(isNightIn(TZ.UTC_P530)).toEqual(
    !isEveningIn(TZ.UTC_P530) &&
      !isAfternoonIn(TZ.UTC_P530) &&
      !isMorningIn(TZ.UTC_P530)
  );
  expect(isNightIn(TZ.UTC_P545)).toEqual(false);
  expect(isNightIn(TZ.UTC_P545)).toEqual(
    !isEveningIn(TZ.UTC_P545) &&
      !isAfternoonIn(TZ.UTC_P545) &&
      !isMorningIn(TZ.UTC_P545)
  );
  expect(isNightIn(TZ.UTC_P6)).toEqual(false);
  expect(isNightIn(TZ.UTC_P6)).toEqual(
    !isEveningIn(TZ.UTC_P6) &&
      !isAfternoonIn(TZ.UTC_P6) &&
      !isMorningIn(TZ.UTC_P6)
  );
  expect(isNightIn(TZ.UTC_P630)).toEqual(false);
  expect(isNightIn(TZ.UTC_P630)).toEqual(
    !isEveningIn(TZ.UTC_P630) &&
      !isAfternoonIn(TZ.UTC_P630) &&
      !isMorningIn(TZ.UTC_P630)
  );
  expect(isNightIn(TZ.UTC_P7)).toEqual(false);
  expect(isNightIn(TZ.UTC_P7)).toEqual(
    !isEveningIn(TZ.UTC_P7) &&
      !isAfternoonIn(TZ.UTC_P7) &&
      !isMorningIn(TZ.UTC_P7)
  );
  expect(isNightIn(TZ.UTC_P8)).toEqual(false);
  expect(isNightIn(TZ.UTC_P8)).toEqual(
    !isEveningIn(TZ.UTC_P8) &&
      !isAfternoonIn(TZ.UTC_P8) &&
      !isMorningIn(TZ.UTC_P8)
  );
  expect(isNightIn(TZ.UTC_P9)).toEqual(false);
  expect(isNightIn(TZ.UTC_P9)).toEqual(
    !isEveningIn(TZ.UTC_P9) &&
      !isAfternoonIn(TZ.UTC_P9) &&
      !isMorningIn(TZ.UTC_P9)
  );
  expect(isNightIn(TZ.UTC_P930)).toEqual(false);
  expect(isNightIn(TZ.UTC_P930)).toEqual(
    !isEveningIn(TZ.UTC_P930) &&
      !isAfternoonIn(TZ.UTC_P930) &&
      !isMorningIn(TZ.UTC_P930)
  );
  expect(isNightIn(TZ.UTC_P10)).toEqual(false);
  expect(isNightIn(TZ.UTC_P10)).toEqual(
    !isEveningIn(TZ.UTC_P10) &&
      !isAfternoonIn(TZ.UTC_P10) &&
      !isMorningIn(TZ.UTC_P10)
  );
  expect(isNightIn(TZ.UTC_P1030)).toEqual(false);
  expect(isNightIn(TZ.UTC_P1030)).toEqual(
    !isEveningIn(TZ.UTC_P1030) &&
      !isAfternoonIn(TZ.UTC_P1030) &&
      !isMorningIn(TZ.UTC_P1030)
  );
  expect(isNightIn(TZ.UTC_P12)).toEqual(false);
  expect(isNightIn(TZ.UTC_P12)).toEqual(
    !isEveningIn(TZ.UTC_P12) &&
      !isAfternoonIn(TZ.UTC_P12) &&
      !isMorningIn(TZ.UTC_P12)
  );
  expect(isNightIn(TZ.UTC_P1245)).toEqual(false);
  expect(isNightIn(TZ.UTC_P1245)).toEqual(
    !isEveningIn(TZ.UTC_P1245) &&
      !isAfternoonIn(TZ.UTC_P1245) &&
      !isMorningIn(TZ.UTC_P1245)
  );
  expect(isNightIn(TZ.UTC_P13)).toEqual(false);
  expect(isNightIn(TZ.UTC_P13)).toEqual(
    !isEveningIn(TZ.UTC_P13) &&
      !isAfternoonIn(TZ.UTC_P13) &&
      !isMorningIn(TZ.UTC_P13)
  );
});

test("night in IANATimeZone 2015_05_15_15_30", () => {
  jest.setSystemTime(new Date(DATES.DATE_2015_05_15_15_30));
  expect(isNightIn(TZ.UTC_M11)).toEqual(false);
  expect(isNightIn(TZ.UTC_M11)).toEqual(
    !isEveningIn(TZ.UTC_M11) &&
      !isAfternoonIn(TZ.UTC_M11) &&
      !isMorningIn(TZ.UTC_M11)
  );
  expect(isNightIn(TZ.UTC_M10)).toEqual(false);
  expect(isNightIn(TZ.UTC_M10)).toEqual(
    !isEveningIn(TZ.UTC_M10) &&
      !isAfternoonIn(TZ.UTC_M10) &&
      !isMorningIn(TZ.UTC_M10)
  );
  expect(isNightIn(TZ.UTC_M930)).toEqual(false);
  expect(isNightIn(TZ.UTC_M930)).toEqual(
    !isEveningIn(TZ.UTC_M930) &&
      !isAfternoonIn(TZ.UTC_M930) &&
      !isMorningIn(TZ.UTC_M930)
  );
  expect(isNightIn(TZ.UTC_M9)).toEqual(false);
  expect(isNightIn(TZ.UTC_M9)).toEqual(
    !isEveningIn(TZ.UTC_M9) &&
      !isAfternoonIn(TZ.UTC_M9) &&
      !isMorningIn(TZ.UTC_M9)
  );
  expect(isNightIn(TZ.UTC_M8)).toEqual(false);
  expect(isNightIn(TZ.UTC_M8)).toEqual(
    !isEveningIn(TZ.UTC_M8) &&
      !isAfternoonIn(TZ.UTC_M8) &&
      !isMorningIn(TZ.UTC_M8)
  );
  expect(isNightIn(TZ.UTC_M7)).toEqual(false);
  expect(isNightIn(TZ.UTC_M7)).toEqual(
    !isEveningIn(TZ.UTC_M7) &&
      !isAfternoonIn(TZ.UTC_M7) &&
      !isMorningIn(TZ.UTC_M7)
  );
  expect(isNightIn(TZ.UTC_M6)).toEqual(false);
  expect(isNightIn(TZ.UTC_M6)).toEqual(
    !isEveningIn(TZ.UTC_M6) &&
      !isAfternoonIn(TZ.UTC_M6) &&
      !isMorningIn(TZ.UTC_M6)
  );
  expect(isNightIn(TZ.UTC_M5)).toEqual(false);
  expect(isNightIn(TZ.UTC_M5)).toEqual(
    !isEveningIn(TZ.UTC_M5) &&
      !isAfternoonIn(TZ.UTC_M5) &&
      !isMorningIn(TZ.UTC_M5)
  );
  expect(isNightIn(TZ.UTC_M4)).toEqual(false);
  expect(isNightIn(TZ.UTC_M4)).toEqual(
    !isEveningIn(TZ.UTC_M4) &&
      !isAfternoonIn(TZ.UTC_M4) &&
      !isMorningIn(TZ.UTC_M4)
  );
  expect(isNightIn(TZ.UTC_M330)).toEqual(false);
  expect(isNightIn(TZ.UTC_M330)).toEqual(
    !isEveningIn(TZ.UTC_M330) &&
      !isAfternoonIn(TZ.UTC_M330) &&
      !isMorningIn(TZ.UTC_M330)
  );
  expect(isNightIn(TZ.UTC_M3)).toEqual(false);
  expect(isNightIn(TZ.UTC_M3)).toEqual(
    !isEveningIn(TZ.UTC_M3) &&
      !isAfternoonIn(TZ.UTC_M3) &&
      !isMorningIn(TZ.UTC_M3)
  );
  expect(isNightIn(TZ.UTC_M2)).toEqual(false);
  expect(isNightIn(TZ.UTC_M2)).toEqual(
    !isEveningIn(TZ.UTC_M2) &&
      !isAfternoonIn(TZ.UTC_M2) &&
      !isMorningIn(TZ.UTC_M2)
  );
  expect(isNightIn(TZ.UTC_M1)).toEqual(false);
  expect(isNightIn(TZ.UTC_M1)).toEqual(
    !isEveningIn(TZ.UTC_M1) &&
      !isAfternoonIn(TZ.UTC_M1) &&
      !isMorningIn(TZ.UTC_M1)
  );
  expect(isNightIn(TZ.UTC_0)).toEqual(false);
  expect(isNightIn(TZ.UTC_0)).toEqual(
    !isEveningIn(TZ.UTC_0) && !isAfternoonIn(TZ.UTC_0) && !isMorningIn(TZ.UTC_0)
  );
  expect(isNightIn(TZ.UTC_P1)).toEqual(false);
  expect(isNightIn(TZ.UTC_P1)).toEqual(
    !isEveningIn(TZ.UTC_P1) &&
      !isAfternoonIn(TZ.UTC_P1) &&
      !isMorningIn(TZ.UTC_P1)
  );
  expect(isNightIn(TZ.UTC_P2)).toEqual(false);
  expect(isNightIn(TZ.UTC_P2)).toEqual(
    !isEveningIn(TZ.UTC_P2) &&
      !isAfternoonIn(TZ.UTC_P2) &&
      !isMorningIn(TZ.UTC_P2)
  );
  expect(isNightIn(TZ.UTC_P3)).toEqual(false);
  expect(isNightIn(TZ.UTC_P3)).toEqual(
    !isEveningIn(TZ.UTC_P3) &&
      !isAfternoonIn(TZ.UTC_P3) &&
      !isMorningIn(TZ.UTC_P3)
  );
  expect(isNightIn(TZ.UTC_P330)).toEqual(false);
  expect(isNightIn(TZ.UTC_P330)).toEqual(
    !isEveningIn(TZ.UTC_P330) &&
      !isAfternoonIn(TZ.UTC_P330) &&
      !isMorningIn(TZ.UTC_P330)
  );
  expect(isNightIn(TZ.UTC_P4)).toEqual(false);
  expect(isNightIn(TZ.UTC_P4)).toEqual(
    !isEveningIn(TZ.UTC_P4) &&
      !isAfternoonIn(TZ.UTC_P4) &&
      !isMorningIn(TZ.UTC_P4)
  );
  expect(isNightIn(TZ.UTC_P430)).toEqual(false);
  expect(isNightIn(TZ.UTC_P430)).toEqual(
    !isEveningIn(TZ.UTC_P430) &&
      !isAfternoonIn(TZ.UTC_P430) &&
      !isMorningIn(TZ.UTC_P430)
  );
  expect(isNightIn(TZ.UTC_P5)).toEqual(false);
  expect(isNightIn(TZ.UTC_P5)).toEqual(
    !isEveningIn(TZ.UTC_P5) &&
      !isAfternoonIn(TZ.UTC_P5) &&
      !isMorningIn(TZ.UTC_P5)
  );
  expect(isNightIn(TZ.UTC_P530)).toEqual(false);
  expect(isNightIn(TZ.UTC_P530)).toEqual(
    !isEveningIn(TZ.UTC_P530) &&
      !isAfternoonIn(TZ.UTC_P530) &&
      !isMorningIn(TZ.UTC_P530)
  );
  expect(isNightIn(TZ.UTC_P545)).toEqual(false);
  expect(isNightIn(TZ.UTC_P545)).toEqual(
    !isEveningIn(TZ.UTC_P545) &&
      !isAfternoonIn(TZ.UTC_P545) &&
      !isMorningIn(TZ.UTC_P545)
  );
  expect(isNightIn(TZ.UTC_P6)).toEqual(false);
  expect(isNightIn(TZ.UTC_P6)).toEqual(
    !isEveningIn(TZ.UTC_P6) &&
      !isAfternoonIn(TZ.UTC_P6) &&
      !isMorningIn(TZ.UTC_P6)
  );
  expect(isNightIn(TZ.UTC_P630)).toEqual(false);
  expect(isNightIn(TZ.UTC_P630)).toEqual(
    !isEveningIn(TZ.UTC_P630) &&
      !isAfternoonIn(TZ.UTC_P630) &&
      !isMorningIn(TZ.UTC_P630)
  );
  expect(isNightIn(TZ.UTC_P7)).toEqual(false);
  expect(isNightIn(TZ.UTC_P7)).toEqual(
    !isEveningIn(TZ.UTC_P7) &&
      !isAfternoonIn(TZ.UTC_P7) &&
      !isMorningIn(TZ.UTC_P7)
  );
  expect(isNightIn(TZ.UTC_P8)).toEqual(false);
  expect(isNightIn(TZ.UTC_P8)).toEqual(
    !isEveningIn(TZ.UTC_P8) &&
      !isAfternoonIn(TZ.UTC_P8) &&
      !isMorningIn(TZ.UTC_P8)
  );
  expect(isNightIn(TZ.UTC_P9)).toEqual(false);
  expect(isNightIn(TZ.UTC_P9)).toEqual(
    !isEveningIn(TZ.UTC_P9) &&
      !isAfternoonIn(TZ.UTC_P9) &&
      !isMorningIn(TZ.UTC_P9)
  );
  expect(isNightIn(TZ.UTC_P930)).toEqual(false);
  expect(isNightIn(TZ.UTC_P930)).toEqual(
    !isEveningIn(TZ.UTC_P930) &&
      !isAfternoonIn(TZ.UTC_P930) &&
      !isMorningIn(TZ.UTC_P930)
  );
  expect(isNightIn(TZ.UTC_P10)).toEqual(false);
  expect(isNightIn(TZ.UTC_P10)).toEqual(
    !isEveningIn(TZ.UTC_P10) &&
      !isAfternoonIn(TZ.UTC_P10) &&
      !isMorningIn(TZ.UTC_P10)
  );
  expect(isNightIn(TZ.UTC_P1030)).toEqual(false);
  expect(isNightIn(TZ.UTC_P1030)).toEqual(
    !isEveningIn(TZ.UTC_P1030) &&
      !isAfternoonIn(TZ.UTC_P1030) &&
      !isMorningIn(TZ.UTC_P1030)
  );
  expect(isNightIn(TZ.UTC_P12)).toEqual(false);
  expect(isNightIn(TZ.UTC_P12)).toEqual(
    !isEveningIn(TZ.UTC_P12) &&
      !isAfternoonIn(TZ.UTC_P12) &&
      !isMorningIn(TZ.UTC_P12)
  );
  expect(isNightIn(TZ.UTC_P1245)).toEqual(false);
  expect(isNightIn(TZ.UTC_P1245)).toEqual(
    !isEveningIn(TZ.UTC_P1245) &&
      !isAfternoonIn(TZ.UTC_P1245) &&
      !isMorningIn(TZ.UTC_P1245)
  );
  expect(isNightIn(TZ.UTC_P13)).toEqual(false);
  expect(isNightIn(TZ.UTC_P13)).toEqual(
    !isEveningIn(TZ.UTC_P13) &&
      !isAfternoonIn(TZ.UTC_P13) &&
      !isMorningIn(TZ.UTC_P13)
  );
});

test("night in IANATimeZone 2016_06_16_16_32", () => {
  jest.setSystemTime(new Date(DATES.DATE_2016_06_16_16_32));
  expect(isNightIn(TZ.UTC_M11)).toEqual(false);
  expect(isNightIn(TZ.UTC_M11)).toEqual(
    !isEveningIn(TZ.UTC_M11) &&
      !isAfternoonIn(TZ.UTC_M11) &&
      !isMorningIn(TZ.UTC_M11)
  );
  expect(isNightIn(TZ.UTC_M10)).toEqual(false);
  expect(isNightIn(TZ.UTC_M10)).toEqual(
    !isEveningIn(TZ.UTC_M10) &&
      !isAfternoonIn(TZ.UTC_M10) &&
      !isMorningIn(TZ.UTC_M10)
  );
  expect(isNightIn(TZ.UTC_M930)).toEqual(false);
  expect(isNightIn(TZ.UTC_M930)).toEqual(
    !isEveningIn(TZ.UTC_M930) &&
      !isAfternoonIn(TZ.UTC_M930) &&
      !isMorningIn(TZ.UTC_M930)
  );
  expect(isNightIn(TZ.UTC_M9)).toEqual(false);
  expect(isNightIn(TZ.UTC_M9)).toEqual(
    !isEveningIn(TZ.UTC_M9) &&
      !isAfternoonIn(TZ.UTC_M9) &&
      !isMorningIn(TZ.UTC_M9)
  );
  expect(isNightIn(TZ.UTC_M8)).toEqual(false);
  expect(isNightIn(TZ.UTC_M8)).toEqual(
    !isEveningIn(TZ.UTC_M8) &&
      !isAfternoonIn(TZ.UTC_M8) &&
      !isMorningIn(TZ.UTC_M8)
  );
  expect(isNightIn(TZ.UTC_M7)).toEqual(false);
  expect(isNightIn(TZ.UTC_M7)).toEqual(
    !isEveningIn(TZ.UTC_M7) &&
      !isAfternoonIn(TZ.UTC_M7) &&
      !isMorningIn(TZ.UTC_M7)
  );
  expect(isNightIn(TZ.UTC_M6)).toEqual(false);
  expect(isNightIn(TZ.UTC_M6)).toEqual(
    !isEveningIn(TZ.UTC_M6) &&
      !isAfternoonIn(TZ.UTC_M6) &&
      !isMorningIn(TZ.UTC_M6)
  );
  expect(isNightIn(TZ.UTC_M5)).toEqual(false);
  expect(isNightIn(TZ.UTC_M5)).toEqual(
    !isEveningIn(TZ.UTC_M5) &&
      !isAfternoonIn(TZ.UTC_M5) &&
      !isMorningIn(TZ.UTC_M5)
  );
  expect(isNightIn(TZ.UTC_M4)).toEqual(false);
  expect(isNightIn(TZ.UTC_M4)).toEqual(
    !isEveningIn(TZ.UTC_M4) &&
      !isAfternoonIn(TZ.UTC_M4) &&
      !isMorningIn(TZ.UTC_M4)
  );
  expect(isNightIn(TZ.UTC_M330)).toEqual(false);
  expect(isNightIn(TZ.UTC_M330)).toEqual(
    !isEveningIn(TZ.UTC_M330) &&
      !isAfternoonIn(TZ.UTC_M330) &&
      !isMorningIn(TZ.UTC_M330)
  );
  expect(isNightIn(TZ.UTC_M3)).toEqual(false);
  expect(isNightIn(TZ.UTC_M3)).toEqual(
    !isEveningIn(TZ.UTC_M3) &&
      !isAfternoonIn(TZ.UTC_M3) &&
      !isMorningIn(TZ.UTC_M3)
  );
  expect(isNightIn(TZ.UTC_M2)).toEqual(false);
  expect(isNightIn(TZ.UTC_M2)).toEqual(
    !isEveningIn(TZ.UTC_M2) &&
      !isAfternoonIn(TZ.UTC_M2) &&
      !isMorningIn(TZ.UTC_M2)
  );
  expect(isNightIn(TZ.UTC_M1)).toEqual(false);
  expect(isNightIn(TZ.UTC_M1)).toEqual(
    !isEveningIn(TZ.UTC_M1) &&
      !isAfternoonIn(TZ.UTC_M1) &&
      !isMorningIn(TZ.UTC_M1)
  );
  expect(isNightIn(TZ.UTC_0)).toEqual(false);
  expect(isNightIn(TZ.UTC_0)).toEqual(
    !isEveningIn(TZ.UTC_0) && !isAfternoonIn(TZ.UTC_0) && !isMorningIn(TZ.UTC_0)
  );
  expect(isNightIn(TZ.UTC_P1)).toEqual(false);
  expect(isNightIn(TZ.UTC_P1)).toEqual(
    !isEveningIn(TZ.UTC_P1) &&
      !isAfternoonIn(TZ.UTC_P1) &&
      !isMorningIn(TZ.UTC_P1)
  );
  expect(isNightIn(TZ.UTC_P2)).toEqual(false);
  expect(isNightIn(TZ.UTC_P2)).toEqual(
    !isEveningIn(TZ.UTC_P2) &&
      !isAfternoonIn(TZ.UTC_P2) &&
      !isMorningIn(TZ.UTC_P2)
  );
  expect(isNightIn(TZ.UTC_P3)).toEqual(false);
  expect(isNightIn(TZ.UTC_P3)).toEqual(
    !isEveningIn(TZ.UTC_P3) &&
      !isAfternoonIn(TZ.UTC_P3) &&
      !isMorningIn(TZ.UTC_P3)
  );
  expect(isNightIn(TZ.UTC_P330)).toEqual(false);
  expect(isNightIn(TZ.UTC_P330)).toEqual(
    !isEveningIn(TZ.UTC_P330) &&
      !isAfternoonIn(TZ.UTC_P330) &&
      !isMorningIn(TZ.UTC_P330)
  );
  expect(isNightIn(TZ.UTC_P4)).toEqual(false);
  expect(isNightIn(TZ.UTC_P4)).toEqual(
    !isEveningIn(TZ.UTC_P4) &&
      !isAfternoonIn(TZ.UTC_P4) &&
      !isMorningIn(TZ.UTC_P4)
  );
  expect(isNightIn(TZ.UTC_P430)).toEqual(false);
  expect(isNightIn(TZ.UTC_P430)).toEqual(
    !isEveningIn(TZ.UTC_P430) &&
      !isAfternoonIn(TZ.UTC_P430) &&
      !isMorningIn(TZ.UTC_P430)
  );
  expect(isNightIn(TZ.UTC_P5)).toEqual(false);
  expect(isNightIn(TZ.UTC_P5)).toEqual(
    !isEveningIn(TZ.UTC_P5) &&
      !isAfternoonIn(TZ.UTC_P5) &&
      !isMorningIn(TZ.UTC_P5)
  );
  expect(isNightIn(TZ.UTC_P530)).toEqual(false);
  expect(isNightIn(TZ.UTC_P530)).toEqual(
    !isEveningIn(TZ.UTC_P530) &&
      !isAfternoonIn(TZ.UTC_P530) &&
      !isMorningIn(TZ.UTC_P530)
  );
  expect(isNightIn(TZ.UTC_P545)).toEqual(false);
  expect(isNightIn(TZ.UTC_P545)).toEqual(
    !isEveningIn(TZ.UTC_P545) &&
      !isAfternoonIn(TZ.UTC_P545) &&
      !isMorningIn(TZ.UTC_P545)
  );
  expect(isNightIn(TZ.UTC_P6)).toEqual(false);
  expect(isNightIn(TZ.UTC_P6)).toEqual(
    !isEveningIn(TZ.UTC_P6) &&
      !isAfternoonIn(TZ.UTC_P6) &&
      !isMorningIn(TZ.UTC_P6)
  );
  expect(isNightIn(TZ.UTC_P630)).toEqual(false);
  expect(isNightIn(TZ.UTC_P630)).toEqual(
    !isEveningIn(TZ.UTC_P630) &&
      !isAfternoonIn(TZ.UTC_P630) &&
      !isMorningIn(TZ.UTC_P630)
  );
  expect(isNightIn(TZ.UTC_P7)).toEqual(false);
  expect(isNightIn(TZ.UTC_P7)).toEqual(
    !isEveningIn(TZ.UTC_P7) &&
      !isAfternoonIn(TZ.UTC_P7) &&
      !isMorningIn(TZ.UTC_P7)
  );
  expect(isNightIn(TZ.UTC_P8)).toEqual(false);
  expect(isNightIn(TZ.UTC_P8)).toEqual(
    !isEveningIn(TZ.UTC_P8) &&
      !isAfternoonIn(TZ.UTC_P8) &&
      !isMorningIn(TZ.UTC_P8)
  );
  expect(isNightIn(TZ.UTC_P9)).toEqual(false);
  expect(isNightIn(TZ.UTC_P9)).toEqual(
    !isEveningIn(TZ.UTC_P9) &&
      !isAfternoonIn(TZ.UTC_P9) &&
      !isMorningIn(TZ.UTC_P9)
  );
  expect(isNightIn(TZ.UTC_P930)).toEqual(false);
  expect(isNightIn(TZ.UTC_P930)).toEqual(
    !isEveningIn(TZ.UTC_P930) &&
      !isAfternoonIn(TZ.UTC_P930) &&
      !isMorningIn(TZ.UTC_P930)
  );
  expect(isNightIn(TZ.UTC_P10)).toEqual(false);
  expect(isNightIn(TZ.UTC_P10)).toEqual(
    !isEveningIn(TZ.UTC_P10) &&
      !isAfternoonIn(TZ.UTC_P10) &&
      !isMorningIn(TZ.UTC_P10)
  );
  expect(isNightIn(TZ.UTC_P1030)).toEqual(false);
  expect(isNightIn(TZ.UTC_P1030)).toEqual(
    !isEveningIn(TZ.UTC_P1030) &&
      !isAfternoonIn(TZ.UTC_P1030) &&
      !isMorningIn(TZ.UTC_P1030)
  );
  expect(isNightIn(TZ.UTC_P12)).toEqual(false);
  expect(isNightIn(TZ.UTC_P12)).toEqual(
    !isEveningIn(TZ.UTC_P12) &&
      !isAfternoonIn(TZ.UTC_P12) &&
      !isMorningIn(TZ.UTC_P12)
  );
  expect(isNightIn(TZ.UTC_P1245)).toEqual(false);
  expect(isNightIn(TZ.UTC_P1245)).toEqual(
    !isEveningIn(TZ.UTC_P1245) &&
      !isAfternoonIn(TZ.UTC_P1245) &&
      !isMorningIn(TZ.UTC_P1245)
  );
  expect(isNightIn(TZ.UTC_P13)).toEqual(false);
  expect(isNightIn(TZ.UTC_P13)).toEqual(
    !isEveningIn(TZ.UTC_P13) &&
      !isAfternoonIn(TZ.UTC_P13) &&
      !isMorningIn(TZ.UTC_P13)
  );
});

test("night in IANATimeZone 2017_07_17_17_34", () => {
  jest.setSystemTime(new Date(DATES.DATE_2017_07_17_17_34));
  expect(isNightIn(TZ.UTC_M11)).toEqual(false);
  expect(isNightIn(TZ.UTC_M11)).toEqual(
    !isEveningIn(TZ.UTC_M11) &&
      !isAfternoonIn(TZ.UTC_M11) &&
      !isMorningIn(TZ.UTC_M11)
  );
  expect(isNightIn(TZ.UTC_M10)).toEqual(false);
  expect(isNightIn(TZ.UTC_M10)).toEqual(
    !isEveningIn(TZ.UTC_M10) &&
      !isAfternoonIn(TZ.UTC_M10) &&
      !isMorningIn(TZ.UTC_M10)
  );
  expect(isNightIn(TZ.UTC_M930)).toEqual(false);
  expect(isNightIn(TZ.UTC_M930)).toEqual(
    !isEveningIn(TZ.UTC_M930) &&
      !isAfternoonIn(TZ.UTC_M930) &&
      !isMorningIn(TZ.UTC_M930)
  );
  expect(isNightIn(TZ.UTC_M9)).toEqual(false);
  expect(isNightIn(TZ.UTC_M9)).toEqual(
    !isEveningIn(TZ.UTC_M9) &&
      !isAfternoonIn(TZ.UTC_M9) &&
      !isMorningIn(TZ.UTC_M9)
  );
  expect(isNightIn(TZ.UTC_M8)).toEqual(false);
  expect(isNightIn(TZ.UTC_M8)).toEqual(
    !isEveningIn(TZ.UTC_M8) &&
      !isAfternoonIn(TZ.UTC_M8) &&
      !isMorningIn(TZ.UTC_M8)
  );
  expect(isNightIn(TZ.UTC_M7)).toEqual(false);
  expect(isNightIn(TZ.UTC_M7)).toEqual(
    !isEveningIn(TZ.UTC_M7) &&
      !isAfternoonIn(TZ.UTC_M7) &&
      !isMorningIn(TZ.UTC_M7)
  );
  expect(isNightIn(TZ.UTC_M6)).toEqual(false);
  expect(isNightIn(TZ.UTC_M6)).toEqual(
    !isEveningIn(TZ.UTC_M6) &&
      !isAfternoonIn(TZ.UTC_M6) &&
      !isMorningIn(TZ.UTC_M6)
  );
  expect(isNightIn(TZ.UTC_M5)).toEqual(false);
  expect(isNightIn(TZ.UTC_M5)).toEqual(
    !isEveningIn(TZ.UTC_M5) &&
      !isAfternoonIn(TZ.UTC_M5) &&
      !isMorningIn(TZ.UTC_M5)
  );
  expect(isNightIn(TZ.UTC_M4)).toEqual(false);
  expect(isNightIn(TZ.UTC_M4)).toEqual(
    !isEveningIn(TZ.UTC_M4) &&
      !isAfternoonIn(TZ.UTC_M4) &&
      !isMorningIn(TZ.UTC_M4)
  );
  expect(isNightIn(TZ.UTC_M330)).toEqual(false);
  expect(isNightIn(TZ.UTC_M330)).toEqual(
    !isEveningIn(TZ.UTC_M330) &&
      !isAfternoonIn(TZ.UTC_M330) &&
      !isMorningIn(TZ.UTC_M330)
  );
  expect(isNightIn(TZ.UTC_M3)).toEqual(false);
  expect(isNightIn(TZ.UTC_M3)).toEqual(
    !isEveningIn(TZ.UTC_M3) &&
      !isAfternoonIn(TZ.UTC_M3) &&
      !isMorningIn(TZ.UTC_M3)
  );
  expect(isNightIn(TZ.UTC_M2)).toEqual(false);
  expect(isNightIn(TZ.UTC_M2)).toEqual(
    !isEveningIn(TZ.UTC_M2) &&
      !isAfternoonIn(TZ.UTC_M2) &&
      !isMorningIn(TZ.UTC_M2)
  );
  expect(isNightIn(TZ.UTC_M1)).toEqual(false);
  expect(isNightIn(TZ.UTC_M1)).toEqual(
    !isEveningIn(TZ.UTC_M1) &&
      !isAfternoonIn(TZ.UTC_M1) &&
      !isMorningIn(TZ.UTC_M1)
  );
  expect(isNightIn(TZ.UTC_0)).toEqual(false);
  expect(isNightIn(TZ.UTC_0)).toEqual(
    !isEveningIn(TZ.UTC_0) && !isAfternoonIn(TZ.UTC_0) && !isMorningIn(TZ.UTC_0)
  );
  expect(isNightIn(TZ.UTC_P1)).toEqual(false);
  expect(isNightIn(TZ.UTC_P1)).toEqual(
    !isEveningIn(TZ.UTC_P1) &&
      !isAfternoonIn(TZ.UTC_P1) &&
      !isMorningIn(TZ.UTC_P1)
  );
  expect(isNightIn(TZ.UTC_P2)).toEqual(false);
  expect(isNightIn(TZ.UTC_P2)).toEqual(
    !isEveningIn(TZ.UTC_P2) &&
      !isAfternoonIn(TZ.UTC_P2) &&
      !isMorningIn(TZ.UTC_P2)
  );
  expect(isNightIn(TZ.UTC_P3)).toEqual(false);
  expect(isNightIn(TZ.UTC_P3)).toEqual(
    !isEveningIn(TZ.UTC_P3) &&
      !isAfternoonIn(TZ.UTC_P3) &&
      !isMorningIn(TZ.UTC_P3)
  );
  expect(isNightIn(TZ.UTC_P330)).toEqual(false);
  expect(isNightIn(TZ.UTC_P330)).toEqual(
    !isEveningIn(TZ.UTC_P330) &&
      !isAfternoonIn(TZ.UTC_P330) &&
      !isMorningIn(TZ.UTC_P330)
  );
  expect(isNightIn(TZ.UTC_P4)).toEqual(false);
  expect(isNightIn(TZ.UTC_P4)).toEqual(
    !isEveningIn(TZ.UTC_P4) &&
      !isAfternoonIn(TZ.UTC_P4) &&
      !isMorningIn(TZ.UTC_P4)
  );
  expect(isNightIn(TZ.UTC_P430)).toEqual(false);
  expect(isNightIn(TZ.UTC_P430)).toEqual(
    !isEveningIn(TZ.UTC_P430) &&
      !isAfternoonIn(TZ.UTC_P430) &&
      !isMorningIn(TZ.UTC_P430)
  );
  expect(isNightIn(TZ.UTC_P5)).toEqual(false);
  expect(isNightIn(TZ.UTC_P5)).toEqual(
    !isEveningIn(TZ.UTC_P5) &&
      !isAfternoonIn(TZ.UTC_P5) &&
      !isMorningIn(TZ.UTC_P5)
  );
  expect(isNightIn(TZ.UTC_P530)).toEqual(false);
  expect(isNightIn(TZ.UTC_P530)).toEqual(
    !isEveningIn(TZ.UTC_P530) &&
      !isAfternoonIn(TZ.UTC_P530) &&
      !isMorningIn(TZ.UTC_P530)
  );
  expect(isNightIn(TZ.UTC_P545)).toEqual(false);
  expect(isNightIn(TZ.UTC_P545)).toEqual(
    !isEveningIn(TZ.UTC_P545) &&
      !isAfternoonIn(TZ.UTC_P545) &&
      !isMorningIn(TZ.UTC_P545)
  );
  expect(isNightIn(TZ.UTC_P6)).toEqual(false);
  expect(isNightIn(TZ.UTC_P6)).toEqual(
    !isEveningIn(TZ.UTC_P6) &&
      !isAfternoonIn(TZ.UTC_P6) &&
      !isMorningIn(TZ.UTC_P6)
  );
  expect(isNightIn(TZ.UTC_P630)).toEqual(false);
  expect(isNightIn(TZ.UTC_P630)).toEqual(
    !isEveningIn(TZ.UTC_P630) &&
      !isAfternoonIn(TZ.UTC_P630) &&
      !isMorningIn(TZ.UTC_P630)
  );
  expect(isNightIn(TZ.UTC_P7)).toEqual(false);
  expect(isNightIn(TZ.UTC_P7)).toEqual(
    !isEveningIn(TZ.UTC_P7) &&
      !isAfternoonIn(TZ.UTC_P7) &&
      !isMorningIn(TZ.UTC_P7)
  );
  expect(isNightIn(TZ.UTC_P8)).toEqual(false);
  expect(isNightIn(TZ.UTC_P8)).toEqual(
    !isEveningIn(TZ.UTC_P8) &&
      !isAfternoonIn(TZ.UTC_P8) &&
      !isMorningIn(TZ.UTC_P8)
  );
  expect(isNightIn(TZ.UTC_P9)).toEqual(false);
  expect(isNightIn(TZ.UTC_P9)).toEqual(
    !isEveningIn(TZ.UTC_P9) &&
      !isAfternoonIn(TZ.UTC_P9) &&
      !isMorningIn(TZ.UTC_P9)
  );
  expect(isNightIn(TZ.UTC_P930)).toEqual(false);
  expect(isNightIn(TZ.UTC_P930)).toEqual(
    !isEveningIn(TZ.UTC_P930) &&
      !isAfternoonIn(TZ.UTC_P930) &&
      !isMorningIn(TZ.UTC_P930)
  );
  expect(isNightIn(TZ.UTC_P10)).toEqual(false);
  expect(isNightIn(TZ.UTC_P10)).toEqual(
    !isEveningIn(TZ.UTC_P10) &&
      !isAfternoonIn(TZ.UTC_P10) &&
      !isMorningIn(TZ.UTC_P10)
  );
  expect(isNightIn(TZ.UTC_P1030)).toEqual(false);
  expect(isNightIn(TZ.UTC_P1030)).toEqual(
    !isEveningIn(TZ.UTC_P1030) &&
      !isAfternoonIn(TZ.UTC_P1030) &&
      !isMorningIn(TZ.UTC_P1030)
  );
  expect(isNightIn(TZ.UTC_P12)).toEqual(false);
  expect(isNightIn(TZ.UTC_P12)).toEqual(
    !isEveningIn(TZ.UTC_P12) &&
      !isAfternoonIn(TZ.UTC_P12) &&
      !isMorningIn(TZ.UTC_P12)
  );
  expect(isNightIn(TZ.UTC_P1245)).toEqual(false);
  expect(isNightIn(TZ.UTC_P1245)).toEqual(
    !isEveningIn(TZ.UTC_P1245) &&
      !isAfternoonIn(TZ.UTC_P1245) &&
      !isMorningIn(TZ.UTC_P1245)
  );
  expect(isNightIn(TZ.UTC_P13)).toEqual(false);
  expect(isNightIn(TZ.UTC_P13)).toEqual(
    !isEveningIn(TZ.UTC_P13) &&
      !isAfternoonIn(TZ.UTC_P13) &&
      !isMorningIn(TZ.UTC_P13)
  );
});

test("night in IANATimeZone 2018_08_18_18_36", () => {
  jest.setSystemTime(new Date(DATES.DATE_2018_08_18_18_36));
  expect(isNightIn(TZ.UTC_M11)).toEqual(false);
  expect(isNightIn(TZ.UTC_M11)).toEqual(
    !isEveningIn(TZ.UTC_M11) &&
      !isAfternoonIn(TZ.UTC_M11) &&
      !isMorningIn(TZ.UTC_M11)
  );
  expect(isNightIn(TZ.UTC_M10)).toEqual(false);
  expect(isNightIn(TZ.UTC_M10)).toEqual(
    !isEveningIn(TZ.UTC_M10) &&
      !isAfternoonIn(TZ.UTC_M10) &&
      !isMorningIn(TZ.UTC_M10)
  );
  expect(isNightIn(TZ.UTC_M930)).toEqual(false);
  expect(isNightIn(TZ.UTC_M930)).toEqual(
    !isEveningIn(TZ.UTC_M930) &&
      !isAfternoonIn(TZ.UTC_M930) &&
      !isMorningIn(TZ.UTC_M930)
  );
  expect(isNightIn(TZ.UTC_M9)).toEqual(false);
  expect(isNightIn(TZ.UTC_M9)).toEqual(
    !isEveningIn(TZ.UTC_M9) &&
      !isAfternoonIn(TZ.UTC_M9) &&
      !isMorningIn(TZ.UTC_M9)
  );
  expect(isNightIn(TZ.UTC_M8)).toEqual(false);
  expect(isNightIn(TZ.UTC_M8)).toEqual(
    !isEveningIn(TZ.UTC_M8) &&
      !isAfternoonIn(TZ.UTC_M8) &&
      !isMorningIn(TZ.UTC_M8)
  );
  expect(isNightIn(TZ.UTC_M7)).toEqual(false);
  expect(isNightIn(TZ.UTC_M7)).toEqual(
    !isEveningIn(TZ.UTC_M7) &&
      !isAfternoonIn(TZ.UTC_M7) &&
      !isMorningIn(TZ.UTC_M7)
  );
  expect(isNightIn(TZ.UTC_M6)).toEqual(false);
  expect(isNightIn(TZ.UTC_M6)).toEqual(
    !isEveningIn(TZ.UTC_M6) &&
      !isAfternoonIn(TZ.UTC_M6) &&
      !isMorningIn(TZ.UTC_M6)
  );
  expect(isNightIn(TZ.UTC_M5)).toEqual(false);
  expect(isNightIn(TZ.UTC_M5)).toEqual(
    !isEveningIn(TZ.UTC_M5) &&
      !isAfternoonIn(TZ.UTC_M5) &&
      !isMorningIn(TZ.UTC_M5)
  );
  expect(isNightIn(TZ.UTC_M4)).toEqual(false);
  expect(isNightIn(TZ.UTC_M4)).toEqual(
    !isEveningIn(TZ.UTC_M4) &&
      !isAfternoonIn(TZ.UTC_M4) &&
      !isMorningIn(TZ.UTC_M4)
  );
  expect(isNightIn(TZ.UTC_M330)).toEqual(false);
  expect(isNightIn(TZ.UTC_M330)).toEqual(
    !isEveningIn(TZ.UTC_M330) &&
      !isAfternoonIn(TZ.UTC_M330) &&
      !isMorningIn(TZ.UTC_M330)
  );
  expect(isNightIn(TZ.UTC_M3)).toEqual(false);
  expect(isNightIn(TZ.UTC_M3)).toEqual(
    !isEveningIn(TZ.UTC_M3) &&
      !isAfternoonIn(TZ.UTC_M3) &&
      !isMorningIn(TZ.UTC_M3)
  );
  expect(isNightIn(TZ.UTC_M2)).toEqual(false);
  expect(isNightIn(TZ.UTC_M2)).toEqual(
    !isEveningIn(TZ.UTC_M2) &&
      !isAfternoonIn(TZ.UTC_M2) &&
      !isMorningIn(TZ.UTC_M2)
  );
  expect(isNightIn(TZ.UTC_M1)).toEqual(false);
  expect(isNightIn(TZ.UTC_M1)).toEqual(
    !isEveningIn(TZ.UTC_M1) &&
      !isAfternoonIn(TZ.UTC_M1) &&
      !isMorningIn(TZ.UTC_M1)
  );
  expect(isNightIn(TZ.UTC_0)).toEqual(false);
  expect(isNightIn(TZ.UTC_0)).toEqual(
    !isEveningIn(TZ.UTC_0) && !isAfternoonIn(TZ.UTC_0) && !isMorningIn(TZ.UTC_0)
  );
  expect(isNightIn(TZ.UTC_P1)).toEqual(false);
  expect(isNightIn(TZ.UTC_P1)).toEqual(
    !isEveningIn(TZ.UTC_P1) &&
      !isAfternoonIn(TZ.UTC_P1) &&
      !isMorningIn(TZ.UTC_P1)
  );
  expect(isNightIn(TZ.UTC_P2)).toEqual(false);
  expect(isNightIn(TZ.UTC_P2)).toEqual(
    !isEveningIn(TZ.UTC_P2) &&
      !isAfternoonIn(TZ.UTC_P2) &&
      !isMorningIn(TZ.UTC_P2)
  );
  expect(isNightIn(TZ.UTC_P3)).toEqual(false);
  expect(isNightIn(TZ.UTC_P3)).toEqual(
    !isEveningIn(TZ.UTC_P3) &&
      !isAfternoonIn(TZ.UTC_P3) &&
      !isMorningIn(TZ.UTC_P3)
  );
  expect(isNightIn(TZ.UTC_P330)).toEqual(false);
  expect(isNightIn(TZ.UTC_P330)).toEqual(
    !isEveningIn(TZ.UTC_P330) &&
      !isAfternoonIn(TZ.UTC_P330) &&
      !isMorningIn(TZ.UTC_P330)
  );
  expect(isNightIn(TZ.UTC_P4)).toEqual(false);
  expect(isNightIn(TZ.UTC_P4)).toEqual(
    !isEveningIn(TZ.UTC_P4) &&
      !isAfternoonIn(TZ.UTC_P4) &&
      !isMorningIn(TZ.UTC_P4)
  );
  expect(isNightIn(TZ.UTC_P430)).toEqual(false);
  expect(isNightIn(TZ.UTC_P430)).toEqual(
    !isEveningIn(TZ.UTC_P430) &&
      !isAfternoonIn(TZ.UTC_P430) &&
      !isMorningIn(TZ.UTC_P430)
  );
  expect(isNightIn(TZ.UTC_P5)).toEqual(false);
  expect(isNightIn(TZ.UTC_P5)).toEqual(
    !isEveningIn(TZ.UTC_P5) &&
      !isAfternoonIn(TZ.UTC_P5) &&
      !isMorningIn(TZ.UTC_P5)
  );
  expect(isNightIn(TZ.UTC_P530)).toEqual(false);
  expect(isNightIn(TZ.UTC_P530)).toEqual(
    !isEveningIn(TZ.UTC_P530) &&
      !isAfternoonIn(TZ.UTC_P530) &&
      !isMorningIn(TZ.UTC_P530)
  );
  expect(isNightIn(TZ.UTC_P545)).toEqual(false);
  expect(isNightIn(TZ.UTC_P545)).toEqual(
    !isEveningIn(TZ.UTC_P545) &&
      !isAfternoonIn(TZ.UTC_P545) &&
      !isMorningIn(TZ.UTC_P545)
  );
  expect(isNightIn(TZ.UTC_P6)).toEqual(false);
  expect(isNightIn(TZ.UTC_P6)).toEqual(
    !isEveningIn(TZ.UTC_P6) &&
      !isAfternoonIn(TZ.UTC_P6) &&
      !isMorningIn(TZ.UTC_P6)
  );
  expect(isNightIn(TZ.UTC_P630)).toEqual(false);
  expect(isNightIn(TZ.UTC_P630)).toEqual(
    !isEveningIn(TZ.UTC_P630) &&
      !isAfternoonIn(TZ.UTC_P630) &&
      !isMorningIn(TZ.UTC_P630)
  );
  expect(isNightIn(TZ.UTC_P7)).toEqual(false);
  expect(isNightIn(TZ.UTC_P7)).toEqual(
    !isEveningIn(TZ.UTC_P7) &&
      !isAfternoonIn(TZ.UTC_P7) &&
      !isMorningIn(TZ.UTC_P7)
  );
  expect(isNightIn(TZ.UTC_P8)).toEqual(false);
  expect(isNightIn(TZ.UTC_P8)).toEqual(
    !isEveningIn(TZ.UTC_P8) &&
      !isAfternoonIn(TZ.UTC_P8) &&
      !isMorningIn(TZ.UTC_P8)
  );
  expect(isNightIn(TZ.UTC_P9)).toEqual(false);
  expect(isNightIn(TZ.UTC_P9)).toEqual(
    !isEveningIn(TZ.UTC_P9) &&
      !isAfternoonIn(TZ.UTC_P9) &&
      !isMorningIn(TZ.UTC_P9)
  );
  expect(isNightIn(TZ.UTC_P930)).toEqual(false);
  expect(isNightIn(TZ.UTC_P930)).toEqual(
    !isEveningIn(TZ.UTC_P930) &&
      !isAfternoonIn(TZ.UTC_P930) &&
      !isMorningIn(TZ.UTC_P930)
  );
  expect(isNightIn(TZ.UTC_P10)).toEqual(false);
  expect(isNightIn(TZ.UTC_P10)).toEqual(
    !isEveningIn(TZ.UTC_P10) &&
      !isAfternoonIn(TZ.UTC_P10) &&
      !isMorningIn(TZ.UTC_P10)
  );
  expect(isNightIn(TZ.UTC_P1030)).toEqual(false);
  expect(isNightIn(TZ.UTC_P1030)).toEqual(
    !isEveningIn(TZ.UTC_P1030) &&
      !isAfternoonIn(TZ.UTC_P1030) &&
      !isMorningIn(TZ.UTC_P1030)
  );
  expect(isNightIn(TZ.UTC_P12)).toEqual(false);
  expect(isNightIn(TZ.UTC_P12)).toEqual(
    !isEveningIn(TZ.UTC_P12) &&
      !isAfternoonIn(TZ.UTC_P12) &&
      !isMorningIn(TZ.UTC_P12)
  );
  expect(isNightIn(TZ.UTC_P1245)).toEqual(false);
  expect(isNightIn(TZ.UTC_P1245)).toEqual(
    !isEveningIn(TZ.UTC_P1245) &&
      !isAfternoonIn(TZ.UTC_P1245) &&
      !isMorningIn(TZ.UTC_P1245)
  );
  expect(isNightIn(TZ.UTC_P13)).toEqual(false);
  expect(isNightIn(TZ.UTC_P13)).toEqual(
    !isEveningIn(TZ.UTC_P13) &&
      !isAfternoonIn(TZ.UTC_P13) &&
      !isMorningIn(TZ.UTC_P13)
  );
});

test("night in IANATimeZone 2019_09_19_19_38", () => {
  jest.setSystemTime(new Date(DATES.DATE_2019_09_19_19_38));
  expect(isNightIn(TZ.UTC_M11)).toEqual(false);
  expect(isNightIn(TZ.UTC_M11)).toEqual(
    !isEveningIn(TZ.UTC_M11) &&
      !isAfternoonIn(TZ.UTC_M11) &&
      !isMorningIn(TZ.UTC_M11)
  );
  expect(isNightIn(TZ.UTC_M10)).toEqual(false);
  expect(isNightIn(TZ.UTC_M10)).toEqual(
    !isEveningIn(TZ.UTC_M10) &&
      !isAfternoonIn(TZ.UTC_M10) &&
      !isMorningIn(TZ.UTC_M10)
  );
  expect(isNightIn(TZ.UTC_M930)).toEqual(false);
  expect(isNightIn(TZ.UTC_M930)).toEqual(
    !isEveningIn(TZ.UTC_M930) &&
      !isAfternoonIn(TZ.UTC_M930) &&
      !isMorningIn(TZ.UTC_M930)
  );
  expect(isNightIn(TZ.UTC_M9)).toEqual(false);
  expect(isNightIn(TZ.UTC_M9)).toEqual(
    !isEveningIn(TZ.UTC_M9) &&
      !isAfternoonIn(TZ.UTC_M9) &&
      !isMorningIn(TZ.UTC_M9)
  );
  expect(isNightIn(TZ.UTC_M8)).toEqual(false);
  expect(isNightIn(TZ.UTC_M8)).toEqual(
    !isEveningIn(TZ.UTC_M8) &&
      !isAfternoonIn(TZ.UTC_M8) &&
      !isMorningIn(TZ.UTC_M8)
  );
  expect(isNightIn(TZ.UTC_M7)).toEqual(false);
  expect(isNightIn(TZ.UTC_M7)).toEqual(
    !isEveningIn(TZ.UTC_M7) &&
      !isAfternoonIn(TZ.UTC_M7) &&
      !isMorningIn(TZ.UTC_M7)
  );
  expect(isNightIn(TZ.UTC_M6)).toEqual(false);
  expect(isNightIn(TZ.UTC_M6)).toEqual(
    !isEveningIn(TZ.UTC_M6) &&
      !isAfternoonIn(TZ.UTC_M6) &&
      !isMorningIn(TZ.UTC_M6)
  );
  expect(isNightIn(TZ.UTC_M5)).toEqual(false);
  expect(isNightIn(TZ.UTC_M5)).toEqual(
    !isEveningIn(TZ.UTC_M5) &&
      !isAfternoonIn(TZ.UTC_M5) &&
      !isMorningIn(TZ.UTC_M5)
  );
  expect(isNightIn(TZ.UTC_M4)).toEqual(false);
  expect(isNightIn(TZ.UTC_M4)).toEqual(
    !isEveningIn(TZ.UTC_M4) &&
      !isAfternoonIn(TZ.UTC_M4) &&
      !isMorningIn(TZ.UTC_M4)
  );
  expect(isNightIn(TZ.UTC_M330)).toEqual(false);
  expect(isNightIn(TZ.UTC_M330)).toEqual(
    !isEveningIn(TZ.UTC_M330) &&
      !isAfternoonIn(TZ.UTC_M330) &&
      !isMorningIn(TZ.UTC_M330)
  );
  expect(isNightIn(TZ.UTC_M3)).toEqual(false);
  expect(isNightIn(TZ.UTC_M3)).toEqual(
    !isEveningIn(TZ.UTC_M3) &&
      !isAfternoonIn(TZ.UTC_M3) &&
      !isMorningIn(TZ.UTC_M3)
  );
  expect(isNightIn(TZ.UTC_M2)).toEqual(false);
  expect(isNightIn(TZ.UTC_M2)).toEqual(
    !isEveningIn(TZ.UTC_M2) &&
      !isAfternoonIn(TZ.UTC_M2) &&
      !isMorningIn(TZ.UTC_M2)
  );
  expect(isNightIn(TZ.UTC_M1)).toEqual(false);
  expect(isNightIn(TZ.UTC_M1)).toEqual(
    !isEveningIn(TZ.UTC_M1) &&
      !isAfternoonIn(TZ.UTC_M1) &&
      !isMorningIn(TZ.UTC_M1)
  );
  expect(isNightIn(TZ.UTC_0)).toEqual(false);
  expect(isNightIn(TZ.UTC_0)).toEqual(
    !isEveningIn(TZ.UTC_0) && !isAfternoonIn(TZ.UTC_0) && !isMorningIn(TZ.UTC_0)
  );
  expect(isNightIn(TZ.UTC_P1)).toEqual(false);
  expect(isNightIn(TZ.UTC_P1)).toEqual(
    !isEveningIn(TZ.UTC_P1) &&
      !isAfternoonIn(TZ.UTC_P1) &&
      !isMorningIn(TZ.UTC_P1)
  );
  expect(isNightIn(TZ.UTC_P2)).toEqual(false);
  expect(isNightIn(TZ.UTC_P2)).toEqual(
    !isEveningIn(TZ.UTC_P2) &&
      !isAfternoonIn(TZ.UTC_P2) &&
      !isMorningIn(TZ.UTC_P2)
  );
  expect(isNightIn(TZ.UTC_P3)).toEqual(false);
  expect(isNightIn(TZ.UTC_P3)).toEqual(
    !isEveningIn(TZ.UTC_P3) &&
      !isAfternoonIn(TZ.UTC_P3) &&
      !isMorningIn(TZ.UTC_P3)
  );
  expect(isNightIn(TZ.UTC_P330)).toEqual(false);
  expect(isNightIn(TZ.UTC_P330)).toEqual(
    !isEveningIn(TZ.UTC_P330) &&
      !isAfternoonIn(TZ.UTC_P330) &&
      !isMorningIn(TZ.UTC_P330)
  );
  expect(isNightIn(TZ.UTC_P4)).toEqual(false);
  expect(isNightIn(TZ.UTC_P4)).toEqual(
    !isEveningIn(TZ.UTC_P4) &&
      !isAfternoonIn(TZ.UTC_P4) &&
      !isMorningIn(TZ.UTC_P4)
  );
  expect(isNightIn(TZ.UTC_P430)).toEqual(false);
  expect(isNightIn(TZ.UTC_P430)).toEqual(
    !isEveningIn(TZ.UTC_P430) &&
      !isAfternoonIn(TZ.UTC_P430) &&
      !isMorningIn(TZ.UTC_P430)
  );
  expect(isNightIn(TZ.UTC_P5)).toEqual(false);
  expect(isNightIn(TZ.UTC_P5)).toEqual(
    !isEveningIn(TZ.UTC_P5) &&
      !isAfternoonIn(TZ.UTC_P5) &&
      !isMorningIn(TZ.UTC_P5)
  );
  expect(isNightIn(TZ.UTC_P530)).toEqual(false);
  expect(isNightIn(TZ.UTC_P530)).toEqual(
    !isEveningIn(TZ.UTC_P530) &&
      !isAfternoonIn(TZ.UTC_P530) &&
      !isMorningIn(TZ.UTC_P530)
  );
  expect(isNightIn(TZ.UTC_P545)).toEqual(false);
  expect(isNightIn(TZ.UTC_P545)).toEqual(
    !isEveningIn(TZ.UTC_P545) &&
      !isAfternoonIn(TZ.UTC_P545) &&
      !isMorningIn(TZ.UTC_P545)
  );
  expect(isNightIn(TZ.UTC_P6)).toEqual(false);
  expect(isNightIn(TZ.UTC_P6)).toEqual(
    !isEveningIn(TZ.UTC_P6) &&
      !isAfternoonIn(TZ.UTC_P6) &&
      !isMorningIn(TZ.UTC_P6)
  );
  expect(isNightIn(TZ.UTC_P630)).toEqual(false);
  expect(isNightIn(TZ.UTC_P630)).toEqual(
    !isEveningIn(TZ.UTC_P630) &&
      !isAfternoonIn(TZ.UTC_P630) &&
      !isMorningIn(TZ.UTC_P630)
  );
  expect(isNightIn(TZ.UTC_P7)).toEqual(false);
  expect(isNightIn(TZ.UTC_P7)).toEqual(
    !isEveningIn(TZ.UTC_P7) &&
      !isAfternoonIn(TZ.UTC_P7) &&
      !isMorningIn(TZ.UTC_P7)
  );
  expect(isNightIn(TZ.UTC_P8)).toEqual(false);
  expect(isNightIn(TZ.UTC_P8)).toEqual(
    !isEveningIn(TZ.UTC_P8) &&
      !isAfternoonIn(TZ.UTC_P8) &&
      !isMorningIn(TZ.UTC_P8)
  );
  expect(isNightIn(TZ.UTC_P9)).toEqual(false);
  expect(isNightIn(TZ.UTC_P9)).toEqual(
    !isEveningIn(TZ.UTC_P9) &&
      !isAfternoonIn(TZ.UTC_P9) &&
      !isMorningIn(TZ.UTC_P9)
  );
  expect(isNightIn(TZ.UTC_P930)).toEqual(false);
  expect(isNightIn(TZ.UTC_P930)).toEqual(
    !isEveningIn(TZ.UTC_P930) &&
      !isAfternoonIn(TZ.UTC_P930) &&
      !isMorningIn(TZ.UTC_P930)
  );
  expect(isNightIn(TZ.UTC_P10)).toEqual(false);
  expect(isNightIn(TZ.UTC_P10)).toEqual(
    !isEveningIn(TZ.UTC_P10) &&
      !isAfternoonIn(TZ.UTC_P10) &&
      !isMorningIn(TZ.UTC_P10)
  );
  expect(isNightIn(TZ.UTC_P1030)).toEqual(false);
  expect(isNightIn(TZ.UTC_P1030)).toEqual(
    !isEveningIn(TZ.UTC_P1030) &&
      !isAfternoonIn(TZ.UTC_P1030) &&
      !isMorningIn(TZ.UTC_P1030)
  );
  expect(isNightIn(TZ.UTC_P12)).toEqual(false);
  expect(isNightIn(TZ.UTC_P12)).toEqual(
    !isEveningIn(TZ.UTC_P12) &&
      !isAfternoonIn(TZ.UTC_P12) &&
      !isMorningIn(TZ.UTC_P12)
  );
  expect(isNightIn(TZ.UTC_P1245)).toEqual(false);
  expect(isNightIn(TZ.UTC_P1245)).toEqual(
    !isEveningIn(TZ.UTC_P1245) &&
      !isAfternoonIn(TZ.UTC_P1245) &&
      !isMorningIn(TZ.UTC_P1245)
  );
  expect(isNightIn(TZ.UTC_P13)).toEqual(false);
  expect(isNightIn(TZ.UTC_P13)).toEqual(
    !isEveningIn(TZ.UTC_P13) &&
      !isAfternoonIn(TZ.UTC_P13) &&
      !isMorningIn(TZ.UTC_P13)
  );
});

test("night in IANATimeZone 2020_02_20_20_40", () => {
  jest.setSystemTime(new Date(DATES.DATE_2020_02_20_20_40));
  expect(isNightIn(TZ.UTC_M11)).toEqual(false);
  expect(isNightIn(TZ.UTC_M11)).toEqual(
    !isEveningIn(TZ.UTC_M11) &&
      !isAfternoonIn(TZ.UTC_M11) &&
      !isMorningIn(TZ.UTC_M11)
  );
  expect(isNightIn(TZ.UTC_M10)).toEqual(false);
  expect(isNightIn(TZ.UTC_M10)).toEqual(
    !isEveningIn(TZ.UTC_M10) &&
      !isAfternoonIn(TZ.UTC_M10) &&
      !isMorningIn(TZ.UTC_M10)
  );
  expect(isNightIn(TZ.UTC_M930)).toEqual(false);
  expect(isNightIn(TZ.UTC_M930)).toEqual(
    !isEveningIn(TZ.UTC_M930) &&
      !isAfternoonIn(TZ.UTC_M930) &&
      !isMorningIn(TZ.UTC_M930)
  );
  expect(isNightIn(TZ.UTC_M9)).toEqual(false);
  expect(isNightIn(TZ.UTC_M9)).toEqual(
    !isEveningIn(TZ.UTC_M9) &&
      !isAfternoonIn(TZ.UTC_M9) &&
      !isMorningIn(TZ.UTC_M9)
  );
  expect(isNightIn(TZ.UTC_M8)).toEqual(false);
  expect(isNightIn(TZ.UTC_M8)).toEqual(
    !isEveningIn(TZ.UTC_M8) &&
      !isAfternoonIn(TZ.UTC_M8) &&
      !isMorningIn(TZ.UTC_M8)
  );
  expect(isNightIn(TZ.UTC_M7)).toEqual(false);
  expect(isNightIn(TZ.UTC_M7)).toEqual(
    !isEveningIn(TZ.UTC_M7) &&
      !isAfternoonIn(TZ.UTC_M7) &&
      !isMorningIn(TZ.UTC_M7)
  );
  expect(isNightIn(TZ.UTC_M6)).toEqual(false);
  expect(isNightIn(TZ.UTC_M6)).toEqual(
    !isEveningIn(TZ.UTC_M6) &&
      !isAfternoonIn(TZ.UTC_M6) &&
      !isMorningIn(TZ.UTC_M6)
  );
  expect(isNightIn(TZ.UTC_M5)).toEqual(false);
  expect(isNightIn(TZ.UTC_M5)).toEqual(
    !isEveningIn(TZ.UTC_M5) &&
      !isAfternoonIn(TZ.UTC_M5) &&
      !isMorningIn(TZ.UTC_M5)
  );
  expect(isNightIn(TZ.UTC_M4)).toEqual(false);
  expect(isNightIn(TZ.UTC_M4)).toEqual(
    !isEveningIn(TZ.UTC_M4) &&
      !isAfternoonIn(TZ.UTC_M4) &&
      !isMorningIn(TZ.UTC_M4)
  );
  expect(isNightIn(TZ.UTC_M330)).toEqual(false);
  expect(isNightIn(TZ.UTC_M330)).toEqual(
    !isEveningIn(TZ.UTC_M330) &&
      !isAfternoonIn(TZ.UTC_M330) &&
      !isMorningIn(TZ.UTC_M330)
  );
  expect(isNightIn(TZ.UTC_M3)).toEqual(false);
  expect(isNightIn(TZ.UTC_M3)).toEqual(
    !isEveningIn(TZ.UTC_M3) &&
      !isAfternoonIn(TZ.UTC_M3) &&
      !isMorningIn(TZ.UTC_M3)
  );
  expect(isNightIn(TZ.UTC_M2)).toEqual(false);
  expect(isNightIn(TZ.UTC_M2)).toEqual(
    !isEveningIn(TZ.UTC_M2) &&
      !isAfternoonIn(TZ.UTC_M2) &&
      !isMorningIn(TZ.UTC_M2)
  );
  expect(isNightIn(TZ.UTC_M1)).toEqual(false);
  expect(isNightIn(TZ.UTC_M1)).toEqual(
    !isEveningIn(TZ.UTC_M1) &&
      !isAfternoonIn(TZ.UTC_M1) &&
      !isMorningIn(TZ.UTC_M1)
  );
  expect(isNightIn(TZ.UTC_0)).toEqual(false);
  expect(isNightIn(TZ.UTC_0)).toEqual(
    !isEveningIn(TZ.UTC_0) && !isAfternoonIn(TZ.UTC_0) && !isMorningIn(TZ.UTC_0)
  );
  expect(isNightIn(TZ.UTC_P1)).toEqual(false);
  expect(isNightIn(TZ.UTC_P1)).toEqual(
    !isEveningIn(TZ.UTC_P1) &&
      !isAfternoonIn(TZ.UTC_P1) &&
      !isMorningIn(TZ.UTC_P1)
  );
  expect(isNightIn(TZ.UTC_P2)).toEqual(false);
  expect(isNightIn(TZ.UTC_P2)).toEqual(
    !isEveningIn(TZ.UTC_P2) &&
      !isAfternoonIn(TZ.UTC_P2) &&
      !isMorningIn(TZ.UTC_P2)
  );
  expect(isNightIn(TZ.UTC_P3)).toEqual(false);
  expect(isNightIn(TZ.UTC_P3)).toEqual(
    !isEveningIn(TZ.UTC_P3) &&
      !isAfternoonIn(TZ.UTC_P3) &&
      !isMorningIn(TZ.UTC_P3)
  );
  expect(isNightIn(TZ.UTC_P330)).toEqual(false);
  expect(isNightIn(TZ.UTC_P330)).toEqual(
    !isEveningIn(TZ.UTC_P330) &&
      !isAfternoonIn(TZ.UTC_P330) &&
      !isMorningIn(TZ.UTC_P330)
  );
  expect(isNightIn(TZ.UTC_P4)).toEqual(false);
  expect(isNightIn(TZ.UTC_P4)).toEqual(
    !isEveningIn(TZ.UTC_P4) &&
      !isAfternoonIn(TZ.UTC_P4) &&
      !isMorningIn(TZ.UTC_P4)
  );
  expect(isNightIn(TZ.UTC_P430)).toEqual(false);
  expect(isNightIn(TZ.UTC_P430)).toEqual(
    !isEveningIn(TZ.UTC_P430) &&
      !isAfternoonIn(TZ.UTC_P430) &&
      !isMorningIn(TZ.UTC_P430)
  );
  expect(isNightIn(TZ.UTC_P5)).toEqual(false);
  expect(isNightIn(TZ.UTC_P5)).toEqual(
    !isEveningIn(TZ.UTC_P5) &&
      !isAfternoonIn(TZ.UTC_P5) &&
      !isMorningIn(TZ.UTC_P5)
  );
  expect(isNightIn(TZ.UTC_P530)).toEqual(false);
  expect(isNightIn(TZ.UTC_P530)).toEqual(
    !isEveningIn(TZ.UTC_P530) &&
      !isAfternoonIn(TZ.UTC_P530) &&
      !isMorningIn(TZ.UTC_P530)
  );
  expect(isNightIn(TZ.UTC_P545)).toEqual(false);
  expect(isNightIn(TZ.UTC_P545)).toEqual(
    !isEveningIn(TZ.UTC_P545) &&
      !isAfternoonIn(TZ.UTC_P545) &&
      !isMorningIn(TZ.UTC_P545)
  );
  expect(isNightIn(TZ.UTC_P6)).toEqual(false);
  expect(isNightIn(TZ.UTC_P6)).toEqual(
    !isEveningIn(TZ.UTC_P6) &&
      !isAfternoonIn(TZ.UTC_P6) &&
      !isMorningIn(TZ.UTC_P6)
  );
  expect(isNightIn(TZ.UTC_P630)).toEqual(false);
  expect(isNightIn(TZ.UTC_P630)).toEqual(
    !isEveningIn(TZ.UTC_P630) &&
      !isAfternoonIn(TZ.UTC_P630) &&
      !isMorningIn(TZ.UTC_P630)
  );
  expect(isNightIn(TZ.UTC_P7)).toEqual(false);
  expect(isNightIn(TZ.UTC_P7)).toEqual(
    !isEveningIn(TZ.UTC_P7) &&
      !isAfternoonIn(TZ.UTC_P7) &&
      !isMorningIn(TZ.UTC_P7)
  );
  expect(isNightIn(TZ.UTC_P8)).toEqual(false);
  expect(isNightIn(TZ.UTC_P8)).toEqual(
    !isEveningIn(TZ.UTC_P8) &&
      !isAfternoonIn(TZ.UTC_P8) &&
      !isMorningIn(TZ.UTC_P8)
  );
  expect(isNightIn(TZ.UTC_P9)).toEqual(false);
  expect(isNightIn(TZ.UTC_P9)).toEqual(
    !isEveningIn(TZ.UTC_P9) &&
      !isAfternoonIn(TZ.UTC_P9) &&
      !isMorningIn(TZ.UTC_P9)
  );
  expect(isNightIn(TZ.UTC_P930)).toEqual(false);
  expect(isNightIn(TZ.UTC_P930)).toEqual(
    !isEveningIn(TZ.UTC_P930) &&
      !isAfternoonIn(TZ.UTC_P930) &&
      !isMorningIn(TZ.UTC_P930)
  );
  expect(isNightIn(TZ.UTC_P10)).toEqual(false);
  expect(isNightIn(TZ.UTC_P10)).toEqual(
    !isEveningIn(TZ.UTC_P10) &&
      !isAfternoonIn(TZ.UTC_P10) &&
      !isMorningIn(TZ.UTC_P10)
  );
  expect(isNightIn(TZ.UTC_P1030)).toEqual(false);
  expect(isNightIn(TZ.UTC_P1030)).toEqual(
    !isEveningIn(TZ.UTC_P1030) &&
      !isAfternoonIn(TZ.UTC_P1030) &&
      !isMorningIn(TZ.UTC_P1030)
  );
  expect(isNightIn(TZ.UTC_P12)).toEqual(false);
  expect(isNightIn(TZ.UTC_P12)).toEqual(
    !isEveningIn(TZ.UTC_P12) &&
      !isAfternoonIn(TZ.UTC_P12) &&
      !isMorningIn(TZ.UTC_P12)
  );
  expect(isNightIn(TZ.UTC_P1245)).toEqual(false);
  expect(isNightIn(TZ.UTC_P1245)).toEqual(
    !isEveningIn(TZ.UTC_P1245) &&
      !isAfternoonIn(TZ.UTC_P1245) &&
      !isMorningIn(TZ.UTC_P1245)
  );
  expect(isNightIn(TZ.UTC_P13)).toEqual(false);
  expect(isNightIn(TZ.UTC_P13)).toEqual(
    !isEveningIn(TZ.UTC_P13) &&
      !isAfternoonIn(TZ.UTC_P13) &&
      !isMorningIn(TZ.UTC_P13)
  );
});

test("night in IANATimeZone 2021_01_21_21_42", () => {
  jest.setSystemTime(new Date(DATES.DATE_2021_01_21_21_42));
  expect(isNightIn(TZ.UTC_M11)).toEqual(false);
  expect(isNightIn(TZ.UTC_M11)).toEqual(
    !isEveningIn(TZ.UTC_M11) &&
      !isAfternoonIn(TZ.UTC_M11) &&
      !isMorningIn(TZ.UTC_M11)
  );
  expect(isNightIn(TZ.UTC_M10)).toEqual(false);
  expect(isNightIn(TZ.UTC_M10)).toEqual(
    !isEveningIn(TZ.UTC_M10) &&
      !isAfternoonIn(TZ.UTC_M10) &&
      !isMorningIn(TZ.UTC_M10)
  );
  expect(isNightIn(TZ.UTC_M930)).toEqual(false);
  expect(isNightIn(TZ.UTC_M930)).toEqual(
    !isEveningIn(TZ.UTC_M930) &&
      !isAfternoonIn(TZ.UTC_M930) &&
      !isMorningIn(TZ.UTC_M930)
  );
  expect(isNightIn(TZ.UTC_M9)).toEqual(false);
  expect(isNightIn(TZ.UTC_M9)).toEqual(
    !isEveningIn(TZ.UTC_M9) &&
      !isAfternoonIn(TZ.UTC_M9) &&
      !isMorningIn(TZ.UTC_M9)
  );
  expect(isNightIn(TZ.UTC_M8)).toEqual(false);
  expect(isNightIn(TZ.UTC_M8)).toEqual(
    !isEveningIn(TZ.UTC_M8) &&
      !isAfternoonIn(TZ.UTC_M8) &&
      !isMorningIn(TZ.UTC_M8)
  );
  expect(isNightIn(TZ.UTC_M7)).toEqual(false);
  expect(isNightIn(TZ.UTC_M7)).toEqual(
    !isEveningIn(TZ.UTC_M7) &&
      !isAfternoonIn(TZ.UTC_M7) &&
      !isMorningIn(TZ.UTC_M7)
  );
  expect(isNightIn(TZ.UTC_M6)).toEqual(false);
  expect(isNightIn(TZ.UTC_M6)).toEqual(
    !isEveningIn(TZ.UTC_M6) &&
      !isAfternoonIn(TZ.UTC_M6) &&
      !isMorningIn(TZ.UTC_M6)
  );
  expect(isNightIn(TZ.UTC_M5)).toEqual(false);
  expect(isNightIn(TZ.UTC_M5)).toEqual(
    !isEveningIn(TZ.UTC_M5) &&
      !isAfternoonIn(TZ.UTC_M5) &&
      !isMorningIn(TZ.UTC_M5)
  );
  expect(isNightIn(TZ.UTC_M4)).toEqual(false);
  expect(isNightIn(TZ.UTC_M4)).toEqual(
    !isEveningIn(TZ.UTC_M4) &&
      !isAfternoonIn(TZ.UTC_M4) &&
      !isMorningIn(TZ.UTC_M4)
  );
  expect(isNightIn(TZ.UTC_M330)).toEqual(false);
  expect(isNightIn(TZ.UTC_M330)).toEqual(
    !isEveningIn(TZ.UTC_M330) &&
      !isAfternoonIn(TZ.UTC_M330) &&
      !isMorningIn(TZ.UTC_M330)
  );
  expect(isNightIn(TZ.UTC_M3)).toEqual(false);
  expect(isNightIn(TZ.UTC_M3)).toEqual(
    !isEveningIn(TZ.UTC_M3) &&
      !isAfternoonIn(TZ.UTC_M3) &&
      !isMorningIn(TZ.UTC_M3)
  );
  expect(isNightIn(TZ.UTC_M2)).toEqual(false);
  expect(isNightIn(TZ.UTC_M2)).toEqual(
    !isEveningIn(TZ.UTC_M2) &&
      !isAfternoonIn(TZ.UTC_M2) &&
      !isMorningIn(TZ.UTC_M2)
  );
  expect(isNightIn(TZ.UTC_M1)).toEqual(false);
  expect(isNightIn(TZ.UTC_M1)).toEqual(
    !isEveningIn(TZ.UTC_M1) &&
      !isAfternoonIn(TZ.UTC_M1) &&
      !isMorningIn(TZ.UTC_M1)
  );
  expect(isNightIn(TZ.UTC_0)).toEqual(false);
  expect(isNightIn(TZ.UTC_0)).toEqual(
    !isEveningIn(TZ.UTC_0) && !isAfternoonIn(TZ.UTC_0) && !isMorningIn(TZ.UTC_0)
  );
  expect(isNightIn(TZ.UTC_P1)).toEqual(false);
  expect(isNightIn(TZ.UTC_P1)).toEqual(
    !isEveningIn(TZ.UTC_P1) &&
      !isAfternoonIn(TZ.UTC_P1) &&
      !isMorningIn(TZ.UTC_P1)
  );
  expect(isNightIn(TZ.UTC_P2)).toEqual(false);
  expect(isNightIn(TZ.UTC_P2)).toEqual(
    !isEveningIn(TZ.UTC_P2) &&
      !isAfternoonIn(TZ.UTC_P2) &&
      !isMorningIn(TZ.UTC_P2)
  );
  expect(isNightIn(TZ.UTC_P3)).toEqual(false);
  expect(isNightIn(TZ.UTC_P3)).toEqual(
    !isEveningIn(TZ.UTC_P3) &&
      !isAfternoonIn(TZ.UTC_P3) &&
      !isMorningIn(TZ.UTC_P3)
  );
  expect(isNightIn(TZ.UTC_P330)).toEqual(false);
  expect(isNightIn(TZ.UTC_P330)).toEqual(
    !isEveningIn(TZ.UTC_P330) &&
      !isAfternoonIn(TZ.UTC_P330) &&
      !isMorningIn(TZ.UTC_P330)
  );
  expect(isNightIn(TZ.UTC_P4)).toEqual(false);
  expect(isNightIn(TZ.UTC_P4)).toEqual(
    !isEveningIn(TZ.UTC_P4) &&
      !isAfternoonIn(TZ.UTC_P4) &&
      !isMorningIn(TZ.UTC_P4)
  );
  expect(isNightIn(TZ.UTC_P430)).toEqual(false);
  expect(isNightIn(TZ.UTC_P430)).toEqual(
    !isEveningIn(TZ.UTC_P430) &&
      !isAfternoonIn(TZ.UTC_P430) &&
      !isMorningIn(TZ.UTC_P430)
  );
  expect(isNightIn(TZ.UTC_P5)).toEqual(false);
  expect(isNightIn(TZ.UTC_P5)).toEqual(
    !isEveningIn(TZ.UTC_P5) &&
      !isAfternoonIn(TZ.UTC_P5) &&
      !isMorningIn(TZ.UTC_P5)
  );
  expect(isNightIn(TZ.UTC_P530)).toEqual(false);
  expect(isNightIn(TZ.UTC_P530)).toEqual(
    !isEveningIn(TZ.UTC_P530) &&
      !isAfternoonIn(TZ.UTC_P530) &&
      !isMorningIn(TZ.UTC_P530)
  );
  expect(isNightIn(TZ.UTC_P545)).toEqual(false);
  expect(isNightIn(TZ.UTC_P545)).toEqual(
    !isEveningIn(TZ.UTC_P545) &&
      !isAfternoonIn(TZ.UTC_P545) &&
      !isMorningIn(TZ.UTC_P545)
  );
  expect(isNightIn(TZ.UTC_P6)).toEqual(false);
  expect(isNightIn(TZ.UTC_P6)).toEqual(
    !isEveningIn(TZ.UTC_P6) &&
      !isAfternoonIn(TZ.UTC_P6) &&
      !isMorningIn(TZ.UTC_P6)
  );
  expect(isNightIn(TZ.UTC_P630)).toEqual(false);
  expect(isNightIn(TZ.UTC_P630)).toEqual(
    !isEveningIn(TZ.UTC_P630) &&
      !isAfternoonIn(TZ.UTC_P630) &&
      !isMorningIn(TZ.UTC_P630)
  );
  expect(isNightIn(TZ.UTC_P7)).toEqual(false);
  expect(isNightIn(TZ.UTC_P7)).toEqual(
    !isEveningIn(TZ.UTC_P7) &&
      !isAfternoonIn(TZ.UTC_P7) &&
      !isMorningIn(TZ.UTC_P7)
  );
  expect(isNightIn(TZ.UTC_P8)).toEqual(false);
  expect(isNightIn(TZ.UTC_P8)).toEqual(
    !isEveningIn(TZ.UTC_P8) &&
      !isAfternoonIn(TZ.UTC_P8) &&
      !isMorningIn(TZ.UTC_P8)
  );
  expect(isNightIn(TZ.UTC_P9)).toEqual(false);
  expect(isNightIn(TZ.UTC_P9)).toEqual(
    !isEveningIn(TZ.UTC_P9) &&
      !isAfternoonIn(TZ.UTC_P9) &&
      !isMorningIn(TZ.UTC_P9)
  );
  expect(isNightIn(TZ.UTC_P930)).toEqual(false);
  expect(isNightIn(TZ.UTC_P930)).toEqual(
    !isEveningIn(TZ.UTC_P930) &&
      !isAfternoonIn(TZ.UTC_P930) &&
      !isMorningIn(TZ.UTC_P930)
  );
  expect(isNightIn(TZ.UTC_P10)).toEqual(false);
  expect(isNightIn(TZ.UTC_P10)).toEqual(
    !isEveningIn(TZ.UTC_P10) &&
      !isAfternoonIn(TZ.UTC_P10) &&
      !isMorningIn(TZ.UTC_P10)
  );
  expect(isNightIn(TZ.UTC_P1030)).toEqual(false);
  expect(isNightIn(TZ.UTC_P1030)).toEqual(
    !isEveningIn(TZ.UTC_P1030) &&
      !isAfternoonIn(TZ.UTC_P1030) &&
      !isMorningIn(TZ.UTC_P1030)
  );
  expect(isNightIn(TZ.UTC_P12)).toEqual(false);
  expect(isNightIn(TZ.UTC_P12)).toEqual(
    !isEveningIn(TZ.UTC_P12) &&
      !isAfternoonIn(TZ.UTC_P12) &&
      !isMorningIn(TZ.UTC_P12)
  );
  expect(isNightIn(TZ.UTC_P1245)).toEqual(false);
  expect(isNightIn(TZ.UTC_P1245)).toEqual(
    !isEveningIn(TZ.UTC_P1245) &&
      !isAfternoonIn(TZ.UTC_P1245) &&
      !isMorningIn(TZ.UTC_P1245)
  );
  expect(isNightIn(TZ.UTC_P13)).toEqual(false);
  expect(isNightIn(TZ.UTC_P13)).toEqual(
    !isEveningIn(TZ.UTC_P13) &&
      !isAfternoonIn(TZ.UTC_P13) &&
      !isMorningIn(TZ.UTC_P13)
  );
});

test("night in IANATimeZone 2022_02_22_22_44", () => {
  jest.setSystemTime(new Date(DATES.DATE_2022_02_22_22_44));
  expect(isNightIn(TZ.UTC_M11)).toEqual(false);
  expect(isNightIn(TZ.UTC_M11)).toEqual(
    !isEveningIn(TZ.UTC_M11) &&
      !isAfternoonIn(TZ.UTC_M11) &&
      !isMorningIn(TZ.UTC_M11)
  );
  expect(isNightIn(TZ.UTC_M10)).toEqual(false);
  expect(isNightIn(TZ.UTC_M10)).toEqual(
    !isEveningIn(TZ.UTC_M10) &&
      !isAfternoonIn(TZ.UTC_M10) &&
      !isMorningIn(TZ.UTC_M10)
  );
  expect(isNightIn(TZ.UTC_M930)).toEqual(false);
  expect(isNightIn(TZ.UTC_M930)).toEqual(
    !isEveningIn(TZ.UTC_M930) &&
      !isAfternoonIn(TZ.UTC_M930) &&
      !isMorningIn(TZ.UTC_M930)
  );
  expect(isNightIn(TZ.UTC_M9)).toEqual(false);
  expect(isNightIn(TZ.UTC_M9)).toEqual(
    !isEveningIn(TZ.UTC_M9) &&
      !isAfternoonIn(TZ.UTC_M9) &&
      !isMorningIn(TZ.UTC_M9)
  );
  expect(isNightIn(TZ.UTC_M8)).toEqual(false);
  expect(isNightIn(TZ.UTC_M8)).toEqual(
    !isEveningIn(TZ.UTC_M8) &&
      !isAfternoonIn(TZ.UTC_M8) &&
      !isMorningIn(TZ.UTC_M8)
  );
  expect(isNightIn(TZ.UTC_M7)).toEqual(false);
  expect(isNightIn(TZ.UTC_M7)).toEqual(
    !isEveningIn(TZ.UTC_M7) &&
      !isAfternoonIn(TZ.UTC_M7) &&
      !isMorningIn(TZ.UTC_M7)
  );
  expect(isNightIn(TZ.UTC_M6)).toEqual(false);
  expect(isNightIn(TZ.UTC_M6)).toEqual(
    !isEveningIn(TZ.UTC_M6) &&
      !isAfternoonIn(TZ.UTC_M6) &&
      !isMorningIn(TZ.UTC_M6)
  );
  expect(isNightIn(TZ.UTC_M5)).toEqual(false);
  expect(isNightIn(TZ.UTC_M5)).toEqual(
    !isEveningIn(TZ.UTC_M5) &&
      !isAfternoonIn(TZ.UTC_M5) &&
      !isMorningIn(TZ.UTC_M5)
  );
  expect(isNightIn(TZ.UTC_M4)).toEqual(false);
  expect(isNightIn(TZ.UTC_M4)).toEqual(
    !isEveningIn(TZ.UTC_M4) &&
      !isAfternoonIn(TZ.UTC_M4) &&
      !isMorningIn(TZ.UTC_M4)
  );
  expect(isNightIn(TZ.UTC_M330)).toEqual(false);
  expect(isNightIn(TZ.UTC_M330)).toEqual(
    !isEveningIn(TZ.UTC_M330) &&
      !isAfternoonIn(TZ.UTC_M330) &&
      !isMorningIn(TZ.UTC_M330)
  );
  expect(isNightIn(TZ.UTC_M3)).toEqual(false);
  expect(isNightIn(TZ.UTC_M3)).toEqual(
    !isEveningIn(TZ.UTC_M3) &&
      !isAfternoonIn(TZ.UTC_M3) &&
      !isMorningIn(TZ.UTC_M3)
  );
  expect(isNightIn(TZ.UTC_M2)).toEqual(false);
  expect(isNightIn(TZ.UTC_M2)).toEqual(
    !isEveningIn(TZ.UTC_M2) &&
      !isAfternoonIn(TZ.UTC_M2) &&
      !isMorningIn(TZ.UTC_M2)
  );
  expect(isNightIn(TZ.UTC_M1)).toEqual(false);
  expect(isNightIn(TZ.UTC_M1)).toEqual(
    !isEveningIn(TZ.UTC_M1) &&
      !isAfternoonIn(TZ.UTC_M1) &&
      !isMorningIn(TZ.UTC_M1)
  );
  expect(isNightIn(TZ.UTC_0)).toEqual(false);
  expect(isNightIn(TZ.UTC_0)).toEqual(
    !isEveningIn(TZ.UTC_0) && !isAfternoonIn(TZ.UTC_0) && !isMorningIn(TZ.UTC_0)
  );
  expect(isNightIn(TZ.UTC_P1)).toEqual(false);
  expect(isNightIn(TZ.UTC_P1)).toEqual(
    !isEveningIn(TZ.UTC_P1) &&
      !isAfternoonIn(TZ.UTC_P1) &&
      !isMorningIn(TZ.UTC_P1)
  );
  expect(isNightIn(TZ.UTC_P2)).toEqual(false);
  expect(isNightIn(TZ.UTC_P2)).toEqual(
    !isEveningIn(TZ.UTC_P2) &&
      !isAfternoonIn(TZ.UTC_P2) &&
      !isMorningIn(TZ.UTC_P2)
  );
  expect(isNightIn(TZ.UTC_P3)).toEqual(false);
  expect(isNightIn(TZ.UTC_P3)).toEqual(
    !isEveningIn(TZ.UTC_P3) &&
      !isAfternoonIn(TZ.UTC_P3) &&
      !isMorningIn(TZ.UTC_P3)
  );
  expect(isNightIn(TZ.UTC_P330)).toEqual(false);
  expect(isNightIn(TZ.UTC_P330)).toEqual(
    !isEveningIn(TZ.UTC_P330) &&
      !isAfternoonIn(TZ.UTC_P330) &&
      !isMorningIn(TZ.UTC_P330)
  );
  expect(isNightIn(TZ.UTC_P4)).toEqual(false);
  expect(isNightIn(TZ.UTC_P4)).toEqual(
    !isEveningIn(TZ.UTC_P4) &&
      !isAfternoonIn(TZ.UTC_P4) &&
      !isMorningIn(TZ.UTC_P4)
  );
  expect(isNightIn(TZ.UTC_P430)).toEqual(false);
  expect(isNightIn(TZ.UTC_P430)).toEqual(
    !isEveningIn(TZ.UTC_P430) &&
      !isAfternoonIn(TZ.UTC_P430) &&
      !isMorningIn(TZ.UTC_P430)
  );
  expect(isNightIn(TZ.UTC_P5)).toEqual(false);
  expect(isNightIn(TZ.UTC_P5)).toEqual(
    !isEveningIn(TZ.UTC_P5) &&
      !isAfternoonIn(TZ.UTC_P5) &&
      !isMorningIn(TZ.UTC_P5)
  );
  expect(isNightIn(TZ.UTC_P530)).toEqual(false);
  expect(isNightIn(TZ.UTC_P530)).toEqual(
    !isEveningIn(TZ.UTC_P530) &&
      !isAfternoonIn(TZ.UTC_P530) &&
      !isMorningIn(TZ.UTC_P530)
  );
  expect(isNightIn(TZ.UTC_P545)).toEqual(false);
  expect(isNightIn(TZ.UTC_P545)).toEqual(
    !isEveningIn(TZ.UTC_P545) &&
      !isAfternoonIn(TZ.UTC_P545) &&
      !isMorningIn(TZ.UTC_P545)
  );
  expect(isNightIn(TZ.UTC_P6)).toEqual(false);
  expect(isNightIn(TZ.UTC_P6)).toEqual(
    !isEveningIn(TZ.UTC_P6) &&
      !isAfternoonIn(TZ.UTC_P6) &&
      !isMorningIn(TZ.UTC_P6)
  );
  expect(isNightIn(TZ.UTC_P630)).toEqual(false);
  expect(isNightIn(TZ.UTC_P630)).toEqual(
    !isEveningIn(TZ.UTC_P630) &&
      !isAfternoonIn(TZ.UTC_P630) &&
      !isMorningIn(TZ.UTC_P630)
  );
  expect(isNightIn(TZ.UTC_P7)).toEqual(false);
  expect(isNightIn(TZ.UTC_P7)).toEqual(
    !isEveningIn(TZ.UTC_P7) &&
      !isAfternoonIn(TZ.UTC_P7) &&
      !isMorningIn(TZ.UTC_P7)
  );
  expect(isNightIn(TZ.UTC_P8)).toEqual(false);
  expect(isNightIn(TZ.UTC_P8)).toEqual(
    !isEveningIn(TZ.UTC_P8) &&
      !isAfternoonIn(TZ.UTC_P8) &&
      !isMorningIn(TZ.UTC_P8)
  );
  expect(isNightIn(TZ.UTC_P9)).toEqual(false);
  expect(isNightIn(TZ.UTC_P9)).toEqual(
    !isEveningIn(TZ.UTC_P9) &&
      !isAfternoonIn(TZ.UTC_P9) &&
      !isMorningIn(TZ.UTC_P9)
  );
  expect(isNightIn(TZ.UTC_P930)).toEqual(false);
  expect(isNightIn(TZ.UTC_P930)).toEqual(
    !isEveningIn(TZ.UTC_P930) &&
      !isAfternoonIn(TZ.UTC_P930) &&
      !isMorningIn(TZ.UTC_P930)
  );
  expect(isNightIn(TZ.UTC_P10)).toEqual(false);
  expect(isNightIn(TZ.UTC_P10)).toEqual(
    !isEveningIn(TZ.UTC_P10) &&
      !isAfternoonIn(TZ.UTC_P10) &&
      !isMorningIn(TZ.UTC_P10)
  );
  expect(isNightIn(TZ.UTC_P1030)).toEqual(false);
  expect(isNightIn(TZ.UTC_P1030)).toEqual(
    !isEveningIn(TZ.UTC_P1030) &&
      !isAfternoonIn(TZ.UTC_P1030) &&
      !isMorningIn(TZ.UTC_P1030)
  );
  expect(isNightIn(TZ.UTC_P12)).toEqual(false);
  expect(isNightIn(TZ.UTC_P12)).toEqual(
    !isEveningIn(TZ.UTC_P12) &&
      !isAfternoonIn(TZ.UTC_P12) &&
      !isMorningIn(TZ.UTC_P12)
  );
  expect(isNightIn(TZ.UTC_P1245)).toEqual(false);
  expect(isNightIn(TZ.UTC_P1245)).toEqual(
    !isEveningIn(TZ.UTC_P1245) &&
      !isAfternoonIn(TZ.UTC_P1245) &&
      !isMorningIn(TZ.UTC_P1245)
  );
  expect(isNightIn(TZ.UTC_P13)).toEqual(false);
  expect(isNightIn(TZ.UTC_P13)).toEqual(
    !isEveningIn(TZ.UTC_P13) &&
      !isAfternoonIn(TZ.UTC_P13) &&
      !isMorningIn(TZ.UTC_P13)
  );
});

test("night in IANATimeZone 2023_03_23_23_46", () => {
  jest.setSystemTime(new Date(DATES.DATE_2023_03_23_23_46));
  expect(isNightIn(TZ.UTC_M11)).toEqual(false);
  expect(isNightIn(TZ.UTC_M11)).toEqual(
    !isEveningIn(TZ.UTC_M11) &&
      !isAfternoonIn(TZ.UTC_M11) &&
      !isMorningIn(TZ.UTC_M11)
  );
  expect(isNightIn(TZ.UTC_M10)).toEqual(false);
  expect(isNightIn(TZ.UTC_M10)).toEqual(
    !isEveningIn(TZ.UTC_M10) &&
      !isAfternoonIn(TZ.UTC_M10) &&
      !isMorningIn(TZ.UTC_M10)
  );
  expect(isNightIn(TZ.UTC_M930)).toEqual(false);
  expect(isNightIn(TZ.UTC_M930)).toEqual(
    !isEveningIn(TZ.UTC_M930) &&
      !isAfternoonIn(TZ.UTC_M930) &&
      !isMorningIn(TZ.UTC_M930)
  );
  expect(isNightIn(TZ.UTC_M9)).toEqual(false);
  expect(isNightIn(TZ.UTC_M9)).toEqual(
    !isEveningIn(TZ.UTC_M9) &&
      !isAfternoonIn(TZ.UTC_M9) &&
      !isMorningIn(TZ.UTC_M9)
  );
  expect(isNightIn(TZ.UTC_M8)).toEqual(false);
  expect(isNightIn(TZ.UTC_M8)).toEqual(
    !isEveningIn(TZ.UTC_M8) &&
      !isAfternoonIn(TZ.UTC_M8) &&
      !isMorningIn(TZ.UTC_M8)
  );
  expect(isNightIn(TZ.UTC_M7)).toEqual(false);
  expect(isNightIn(TZ.UTC_M7)).toEqual(
    !isEveningIn(TZ.UTC_M7) &&
      !isAfternoonIn(TZ.UTC_M7) &&
      !isMorningIn(TZ.UTC_M7)
  );
  expect(isNightIn(TZ.UTC_M6)).toEqual(false);
  expect(isNightIn(TZ.UTC_M6)).toEqual(
    !isEveningIn(TZ.UTC_M6) &&
      !isAfternoonIn(TZ.UTC_M6) &&
      !isMorningIn(TZ.UTC_M6)
  );
  expect(isNightIn(TZ.UTC_M5)).toEqual(false);
  expect(isNightIn(TZ.UTC_M5)).toEqual(
    !isEveningIn(TZ.UTC_M5) &&
      !isAfternoonIn(TZ.UTC_M5) &&
      !isMorningIn(TZ.UTC_M5)
  );
  expect(isNightIn(TZ.UTC_M4)).toEqual(false);
  expect(isNightIn(TZ.UTC_M4)).toEqual(
    !isEveningIn(TZ.UTC_M4) &&
      !isAfternoonIn(TZ.UTC_M4) &&
      !isMorningIn(TZ.UTC_M4)
  );
  expect(isNightIn(TZ.UTC_M330)).toEqual(false);
  expect(isNightIn(TZ.UTC_M330)).toEqual(
    !isEveningIn(TZ.UTC_M330) &&
      !isAfternoonIn(TZ.UTC_M330) &&
      !isMorningIn(TZ.UTC_M330)
  );
  expect(isNightIn(TZ.UTC_M3)).toEqual(false);
  expect(isNightIn(TZ.UTC_M3)).toEqual(
    !isEveningIn(TZ.UTC_M3) &&
      !isAfternoonIn(TZ.UTC_M3) &&
      !isMorningIn(TZ.UTC_M3)
  );
  expect(isNightIn(TZ.UTC_M2)).toEqual(false);
  expect(isNightIn(TZ.UTC_M2)).toEqual(
    !isEveningIn(TZ.UTC_M2) &&
      !isAfternoonIn(TZ.UTC_M2) &&
      !isMorningIn(TZ.UTC_M2)
  );
  expect(isNightIn(TZ.UTC_M1)).toEqual(false);
  expect(isNightIn(TZ.UTC_M1)).toEqual(
    !isEveningIn(TZ.UTC_M1) &&
      !isAfternoonIn(TZ.UTC_M1) &&
      !isMorningIn(TZ.UTC_M1)
  );
  expect(isNightIn(TZ.UTC_0)).toEqual(false);
  expect(isNightIn(TZ.UTC_0)).toEqual(
    !isEveningIn(TZ.UTC_0) && !isAfternoonIn(TZ.UTC_0) && !isMorningIn(TZ.UTC_0)
  );
  expect(isNightIn(TZ.UTC_P1)).toEqual(false);
  expect(isNightIn(TZ.UTC_P1)).toEqual(
    !isEveningIn(TZ.UTC_P1) &&
      !isAfternoonIn(TZ.UTC_P1) &&
      !isMorningIn(TZ.UTC_P1)
  );
  expect(isNightIn(TZ.UTC_P2)).toEqual(false);
  expect(isNightIn(TZ.UTC_P2)).toEqual(
    !isEveningIn(TZ.UTC_P2) &&
      !isAfternoonIn(TZ.UTC_P2) &&
      !isMorningIn(TZ.UTC_P2)
  );
  expect(isNightIn(TZ.UTC_P3)).toEqual(false);
  expect(isNightIn(TZ.UTC_P3)).toEqual(
    !isEveningIn(TZ.UTC_P3) &&
      !isAfternoonIn(TZ.UTC_P3) &&
      !isMorningIn(TZ.UTC_P3)
  );
  expect(isNightIn(TZ.UTC_P330)).toEqual(false);
  expect(isNightIn(TZ.UTC_P330)).toEqual(
    !isEveningIn(TZ.UTC_P330) &&
      !isAfternoonIn(TZ.UTC_P330) &&
      !isMorningIn(TZ.UTC_P330)
  );
  expect(isNightIn(TZ.UTC_P4)).toEqual(false);
  expect(isNightIn(TZ.UTC_P4)).toEqual(
    !isEveningIn(TZ.UTC_P4) &&
      !isAfternoonIn(TZ.UTC_P4) &&
      !isMorningIn(TZ.UTC_P4)
  );
  expect(isNightIn(TZ.UTC_P430)).toEqual(false);
  expect(isNightIn(TZ.UTC_P430)).toEqual(
    !isEveningIn(TZ.UTC_P430) &&
      !isAfternoonIn(TZ.UTC_P430) &&
      !isMorningIn(TZ.UTC_P430)
  );
  expect(isNightIn(TZ.UTC_P5)).toEqual(false);
  expect(isNightIn(TZ.UTC_P5)).toEqual(
    !isEveningIn(TZ.UTC_P5) &&
      !isAfternoonIn(TZ.UTC_P5) &&
      !isMorningIn(TZ.UTC_P5)
  );
  expect(isNightIn(TZ.UTC_P530)).toEqual(false);
  expect(isNightIn(TZ.UTC_P530)).toEqual(
    !isEveningIn(TZ.UTC_P530) &&
      !isAfternoonIn(TZ.UTC_P530) &&
      !isMorningIn(TZ.UTC_P530)
  );
  expect(isNightIn(TZ.UTC_P545)).toEqual(false);
  expect(isNightIn(TZ.UTC_P545)).toEqual(
    !isEveningIn(TZ.UTC_P545) &&
      !isAfternoonIn(TZ.UTC_P545) &&
      !isMorningIn(TZ.UTC_P545)
  );
  expect(isNightIn(TZ.UTC_P6)).toEqual(false);
  expect(isNightIn(TZ.UTC_P6)).toEqual(
    !isEveningIn(TZ.UTC_P6) &&
      !isAfternoonIn(TZ.UTC_P6) &&
      !isMorningIn(TZ.UTC_P6)
  );
  expect(isNightIn(TZ.UTC_P630)).toEqual(false);
  expect(isNightIn(TZ.UTC_P630)).toEqual(
    !isEveningIn(TZ.UTC_P630) &&
      !isAfternoonIn(TZ.UTC_P630) &&
      !isMorningIn(TZ.UTC_P630)
  );
  expect(isNightIn(TZ.UTC_P7)).toEqual(false);
  expect(isNightIn(TZ.UTC_P7)).toEqual(
    !isEveningIn(TZ.UTC_P7) &&
      !isAfternoonIn(TZ.UTC_P7) &&
      !isMorningIn(TZ.UTC_P7)
  );
  expect(isNightIn(TZ.UTC_P8)).toEqual(false);
  expect(isNightIn(TZ.UTC_P8)).toEqual(
    !isEveningIn(TZ.UTC_P8) &&
      !isAfternoonIn(TZ.UTC_P8) &&
      !isMorningIn(TZ.UTC_P8)
  );
  expect(isNightIn(TZ.UTC_P9)).toEqual(false);
  expect(isNightIn(TZ.UTC_P9)).toEqual(
    !isEveningIn(TZ.UTC_P9) &&
      !isAfternoonIn(TZ.UTC_P9) &&
      !isMorningIn(TZ.UTC_P9)
  );
  expect(isNightIn(TZ.UTC_P930)).toEqual(false);
  expect(isNightIn(TZ.UTC_P930)).toEqual(
    !isEveningIn(TZ.UTC_P930) &&
      !isAfternoonIn(TZ.UTC_P930) &&
      !isMorningIn(TZ.UTC_P930)
  );
  expect(isNightIn(TZ.UTC_P10)).toEqual(false);
  expect(isNightIn(TZ.UTC_P10)).toEqual(
    !isEveningIn(TZ.UTC_P10) &&
      !isAfternoonIn(TZ.UTC_P10) &&
      !isMorningIn(TZ.UTC_P10)
  );
  expect(isNightIn(TZ.UTC_P1030)).toEqual(false);
  expect(isNightIn(TZ.UTC_P1030)).toEqual(
    !isEveningIn(TZ.UTC_P1030) &&
      !isAfternoonIn(TZ.UTC_P1030) &&
      !isMorningIn(TZ.UTC_P1030)
  );
  expect(isNightIn(TZ.UTC_P12)).toEqual(false);
  expect(isNightIn(TZ.UTC_P12)).toEqual(
    !isEveningIn(TZ.UTC_P12) &&
      !isAfternoonIn(TZ.UTC_P12) &&
      !isMorningIn(TZ.UTC_P12)
  );
  expect(isNightIn(TZ.UTC_P1245)).toEqual(false);
  expect(isNightIn(TZ.UTC_P1245)).toEqual(
    !isEveningIn(TZ.UTC_P1245) &&
      !isAfternoonIn(TZ.UTC_P1245) &&
      !isMorningIn(TZ.UTC_P1245)
  );
  expect(isNightIn(TZ.UTC_P13)).toEqual(false);
  expect(isNightIn(TZ.UTC_P13)).toEqual(
    !isEveningIn(TZ.UTC_P13) &&
      !isAfternoonIn(TZ.UTC_P13) &&
      !isMorningIn(TZ.UTC_P13)
  );
});

test("night in IANATimeZone 2024_04_24_00_48", () => {
  jest.setSystemTime(new Date(DATES.DATE_2024_04_24_00_48));
  expect(isNightIn(TZ.UTC_M11)).toEqual(false);
  expect(isNightIn(TZ.UTC_M11)).toEqual(
    !isEveningIn(TZ.UTC_M11) &&
      !isAfternoonIn(TZ.UTC_M11) &&
      !isMorningIn(TZ.UTC_M11)
  );
  expect(isNightIn(TZ.UTC_M10)).toEqual(false);
  expect(isNightIn(TZ.UTC_M10)).toEqual(
    !isEveningIn(TZ.UTC_M10) &&
      !isAfternoonIn(TZ.UTC_M10) &&
      !isMorningIn(TZ.UTC_M10)
  );
  expect(isNightIn(TZ.UTC_M930)).toEqual(false);
  expect(isNightIn(TZ.UTC_M930)).toEqual(
    !isEveningIn(TZ.UTC_M930) &&
      !isAfternoonIn(TZ.UTC_M930) &&
      !isMorningIn(TZ.UTC_M930)
  );
  expect(isNightIn(TZ.UTC_M9)).toEqual(false);
  expect(isNightIn(TZ.UTC_M9)).toEqual(
    !isEveningIn(TZ.UTC_M9) &&
      !isAfternoonIn(TZ.UTC_M9) &&
      !isMorningIn(TZ.UTC_M9)
  );
  expect(isNightIn(TZ.UTC_M8)).toEqual(false);
  expect(isNightIn(TZ.UTC_M8)).toEqual(
    !isEveningIn(TZ.UTC_M8) &&
      !isAfternoonIn(TZ.UTC_M8) &&
      !isMorningIn(TZ.UTC_M8)
  );
  expect(isNightIn(TZ.UTC_M7)).toEqual(false);
  expect(isNightIn(TZ.UTC_M7)).toEqual(
    !isEveningIn(TZ.UTC_M7) &&
      !isAfternoonIn(TZ.UTC_M7) &&
      !isMorningIn(TZ.UTC_M7)
  );
  expect(isNightIn(TZ.UTC_M6)).toEqual(false);
  expect(isNightIn(TZ.UTC_M6)).toEqual(
    !isEveningIn(TZ.UTC_M6) &&
      !isAfternoonIn(TZ.UTC_M6) &&
      !isMorningIn(TZ.UTC_M6)
  );
  expect(isNightIn(TZ.UTC_M5)).toEqual(false);
  expect(isNightIn(TZ.UTC_M5)).toEqual(
    !isEveningIn(TZ.UTC_M5) &&
      !isAfternoonIn(TZ.UTC_M5) &&
      !isMorningIn(TZ.UTC_M5)
  );
  expect(isNightIn(TZ.UTC_M4)).toEqual(false);
  expect(isNightIn(TZ.UTC_M4)).toEqual(
    !isEveningIn(TZ.UTC_M4) &&
      !isAfternoonIn(TZ.UTC_M4) &&
      !isMorningIn(TZ.UTC_M4)
  );
  expect(isNightIn(TZ.UTC_M330)).toEqual(false);
  expect(isNightIn(TZ.UTC_M330)).toEqual(
    !isEveningIn(TZ.UTC_M330) &&
      !isAfternoonIn(TZ.UTC_M330) &&
      !isMorningIn(TZ.UTC_M330)
  );
  expect(isNightIn(TZ.UTC_M3)).toEqual(false);
  expect(isNightIn(TZ.UTC_M3)).toEqual(
    !isEveningIn(TZ.UTC_M3) &&
      !isAfternoonIn(TZ.UTC_M3) &&
      !isMorningIn(TZ.UTC_M3)
  );
  expect(isNightIn(TZ.UTC_M2)).toEqual(false);
  expect(isNightIn(TZ.UTC_M2)).toEqual(
    !isEveningIn(TZ.UTC_M2) &&
      !isAfternoonIn(TZ.UTC_M2) &&
      !isMorningIn(TZ.UTC_M2)
  );
  expect(isNightIn(TZ.UTC_M1)).toEqual(false);
  expect(isNightIn(TZ.UTC_M1)).toEqual(
    !isEveningIn(TZ.UTC_M1) &&
      !isAfternoonIn(TZ.UTC_M1) &&
      !isMorningIn(TZ.UTC_M1)
  );
  expect(isNightIn(TZ.UTC_0)).toEqual(false);
  expect(isNightIn(TZ.UTC_0)).toEqual(
    !isEveningIn(TZ.UTC_0) && !isAfternoonIn(TZ.UTC_0) && !isMorningIn(TZ.UTC_0)
  );
  expect(isNightIn(TZ.UTC_P1)).toEqual(false);
  expect(isNightIn(TZ.UTC_P1)).toEqual(
    !isEveningIn(TZ.UTC_P1) &&
      !isAfternoonIn(TZ.UTC_P1) &&
      !isMorningIn(TZ.UTC_P1)
  );
  expect(isNightIn(TZ.UTC_P2)).toEqual(false);
  expect(isNightIn(TZ.UTC_P2)).toEqual(
    !isEveningIn(TZ.UTC_P2) &&
      !isAfternoonIn(TZ.UTC_P2) &&
      !isMorningIn(TZ.UTC_P2)
  );
  expect(isNightIn(TZ.UTC_P3)).toEqual(false);
  expect(isNightIn(TZ.UTC_P3)).toEqual(
    !isEveningIn(TZ.UTC_P3) &&
      !isAfternoonIn(TZ.UTC_P3) &&
      !isMorningIn(TZ.UTC_P3)
  );
  expect(isNightIn(TZ.UTC_P330)).toEqual(false);
  expect(isNightIn(TZ.UTC_P330)).toEqual(
    !isEveningIn(TZ.UTC_P330) &&
      !isAfternoonIn(TZ.UTC_P330) &&
      !isMorningIn(TZ.UTC_P330)
  );
  expect(isNightIn(TZ.UTC_P4)).toEqual(false);
  expect(isNightIn(TZ.UTC_P4)).toEqual(
    !isEveningIn(TZ.UTC_P4) &&
      !isAfternoonIn(TZ.UTC_P4) &&
      !isMorningIn(TZ.UTC_P4)
  );
  expect(isNightIn(TZ.UTC_P430)).toEqual(false);
  expect(isNightIn(TZ.UTC_P430)).toEqual(
    !isEveningIn(TZ.UTC_P430) &&
      !isAfternoonIn(TZ.UTC_P430) &&
      !isMorningIn(TZ.UTC_P430)
  );
  expect(isNightIn(TZ.UTC_P5)).toEqual(false);
  expect(isNightIn(TZ.UTC_P5)).toEqual(
    !isEveningIn(TZ.UTC_P5) &&
      !isAfternoonIn(TZ.UTC_P5) &&
      !isMorningIn(TZ.UTC_P5)
  );
  expect(isNightIn(TZ.UTC_P530)).toEqual(false);
  expect(isNightIn(TZ.UTC_P530)).toEqual(
    !isEveningIn(TZ.UTC_P530) &&
      !isAfternoonIn(TZ.UTC_P530) &&
      !isMorningIn(TZ.UTC_P530)
  );
  expect(isNightIn(TZ.UTC_P545)).toEqual(false);
  expect(isNightIn(TZ.UTC_P545)).toEqual(
    !isEveningIn(TZ.UTC_P545) &&
      !isAfternoonIn(TZ.UTC_P545) &&
      !isMorningIn(TZ.UTC_P545)
  );
  expect(isNightIn(TZ.UTC_P6)).toEqual(false);
  expect(isNightIn(TZ.UTC_P6)).toEqual(
    !isEveningIn(TZ.UTC_P6) &&
      !isAfternoonIn(TZ.UTC_P6) &&
      !isMorningIn(TZ.UTC_P6)
  );
  expect(isNightIn(TZ.UTC_P630)).toEqual(false);
  expect(isNightIn(TZ.UTC_P630)).toEqual(
    !isEveningIn(TZ.UTC_P630) &&
      !isAfternoonIn(TZ.UTC_P630) &&
      !isMorningIn(TZ.UTC_P630)
  );
  expect(isNightIn(TZ.UTC_P7)).toEqual(false);
  expect(isNightIn(TZ.UTC_P7)).toEqual(
    !isEveningIn(TZ.UTC_P7) &&
      !isAfternoonIn(TZ.UTC_P7) &&
      !isMorningIn(TZ.UTC_P7)
  );
  expect(isNightIn(TZ.UTC_P8)).toEqual(false);
  expect(isNightIn(TZ.UTC_P8)).toEqual(
    !isEveningIn(TZ.UTC_P8) &&
      !isAfternoonIn(TZ.UTC_P8) &&
      !isMorningIn(TZ.UTC_P8)
  );
  expect(isNightIn(TZ.UTC_P9)).toEqual(false);
  expect(isNightIn(TZ.UTC_P9)).toEqual(
    !isEveningIn(TZ.UTC_P9) &&
      !isAfternoonIn(TZ.UTC_P9) &&
      !isMorningIn(TZ.UTC_P9)
  );
  expect(isNightIn(TZ.UTC_P930)).toEqual(false);
  expect(isNightIn(TZ.UTC_P930)).toEqual(
    !isEveningIn(TZ.UTC_P930) &&
      !isAfternoonIn(TZ.UTC_P930) &&
      !isMorningIn(TZ.UTC_P930)
  );
  expect(isNightIn(TZ.UTC_P10)).toEqual(false);
  expect(isNightIn(TZ.UTC_P10)).toEqual(
    !isEveningIn(TZ.UTC_P10) &&
      !isAfternoonIn(TZ.UTC_P10) &&
      !isMorningIn(TZ.UTC_P10)
  );
  expect(isNightIn(TZ.UTC_P1030)).toEqual(false);
  expect(isNightIn(TZ.UTC_P1030)).toEqual(
    !isEveningIn(TZ.UTC_P1030) &&
      !isAfternoonIn(TZ.UTC_P1030) &&
      !isMorningIn(TZ.UTC_P1030)
  );
  expect(isNightIn(TZ.UTC_P12)).toEqual(false);
  expect(isNightIn(TZ.UTC_P12)).toEqual(
    !isEveningIn(TZ.UTC_P12) &&
      !isAfternoonIn(TZ.UTC_P12) &&
      !isMorningIn(TZ.UTC_P12)
  );
  expect(isNightIn(TZ.UTC_P1245)).toEqual(false);
  expect(isNightIn(TZ.UTC_P1245)).toEqual(
    !isEveningIn(TZ.UTC_P1245) &&
      !isAfternoonIn(TZ.UTC_P1245) &&
      !isMorningIn(TZ.UTC_P1245)
  );
  expect(isNightIn(TZ.UTC_P13)).toEqual(false);
  expect(isNightIn(TZ.UTC_P13)).toEqual(
    !isEveningIn(TZ.UTC_P13) &&
      !isAfternoonIn(TZ.UTC_P13) &&
      !isMorningIn(TZ.UTC_P13)
  );
});
