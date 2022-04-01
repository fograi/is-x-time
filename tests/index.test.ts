import * as MyTimes from "../src/index";
import * as AWS from "./constants/AWS";
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

test("night time", () => {
  jest.setSystemTime(new Date(DATES.DATE_1999_12_31_23_59));
  expect(MyTimes.isNightTime()).toEqual(true);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATES.DATE_2000_01_01_00_00));
  expect(MyTimes.isNightTime()).toEqual(true);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATES.DATE_2001_01_01_01_02));
  expect(MyTimes.isNightTime()).toEqual(true);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATES.DATE_2002_02_02_02_04));
  expect(MyTimes.isNightTime()).toEqual(true);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATES.DATE_2003_03_03_03_06));
  expect(MyTimes.isNightTime()).toEqual(true);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATES.DATE_2004_04_04_04_08));
  expect(MyTimes.isNightTime()).toEqual(true);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATES.DATE_2005_05_05_05_10));
  expect(MyTimes.isNightTime()).toEqual(true);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATES.DATE_2006_06_06_06_12));
  expect(MyTimes.isNightTime()).toEqual(false);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATES.DATE_2007_07_07_07_14));
  expect(MyTimes.isNightTime()).toEqual(false);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATES.DATE_2008_08_08_08_16));
  expect(MyTimes.isNightTime()).toEqual(false);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATES.DATE_2009_09_09_09_18));
  expect(MyTimes.isNightTime()).toEqual(false);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATES.DATE_2010_10_10_10_20));
  expect(MyTimes.isNightTime()).toEqual(false);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATES.DATE_2011_11_11_11_22));
  expect(MyTimes.isNightTime()).toEqual(false);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATES.DATE_2012_12_12_12_24));
  expect(MyTimes.isNightTime()).toEqual(false);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATES.DATE_2013_03_13_13_26));
  expect(MyTimes.isNightTime()).toEqual(false);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATES.DATE_2014_04_14_14_28));
  expect(MyTimes.isNightTime()).toEqual(false);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATES.DATE_2015_05_15_15_30));
  expect(MyTimes.isNightTime()).toEqual(false);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATES.DATE_2016_06_16_16_32));
  expect(MyTimes.isNightTime()).toEqual(false);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATES.DATE_2017_07_17_17_34));
  expect(MyTimes.isNightTime()).toEqual(false);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATES.DATE_2018_08_18_18_36));
  expect(MyTimes.isNightTime()).toEqual(true);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATES.DATE_2019_09_19_19_38));
  expect(MyTimes.isNightTime()).toEqual(true);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATES.DATE_2020_02_20_20_40));
  expect(MyTimes.isNightTime()).toEqual(true);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATES.DATE_2021_01_21_21_42));
  expect(MyTimes.isNightTime()).toEqual(true);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATES.DATE_2022_02_22_22_44));
  expect(MyTimes.isNightTime()).toEqual(true);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATES.DATE_2023_03_23_23_46));
  expect(MyTimes.isNightTime()).toEqual(true);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATES.DATE_2024_04_24_00_48));
  expect(MyTimes.isNightTime()).toEqual(true);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
});

test("night time in IANATimeZone 1999_12_31_23_59", () => {
  jest.setSystemTime(new Date(DATES.DATE_1999_12_31_23_59));
  expect(MyTimes.isNightTimeIn(TZ.UTC_M11)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_M11)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_M11));
  expect(MyTimes.isNightTimeIn(TZ.UTC_M10)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_M10)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_M10));
  expect(MyTimes.isNightTimeIn(TZ.UTC_M930)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_M930)).toEqual(
    !MyTimes.isDayTimeIn(TZ.UTC_M930)
  );
  expect(MyTimes.isNightTimeIn(TZ.UTC_M9)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_M9)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_M9));
  expect(MyTimes.isNightTimeIn(TZ.UTC_M8)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_M8)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_M8));
  expect(MyTimes.isNightTimeIn(TZ.UTC_M7)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_M7)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_M7));
  expect(MyTimes.isNightTimeIn(TZ.UTC_M6)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_M6)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_M6));
  expect(MyTimes.isNightTimeIn(TZ.UTC_M5)).toEqual(true);
  expect(MyTimes.isNightTimeIn(TZ.UTC_M5)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_M5));
  expect(MyTimes.isNightTimeIn(TZ.UTC_M4)).toEqual(true);
  expect(MyTimes.isNightTimeIn(TZ.UTC_M4)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_M4));
  expect(MyTimes.isNightTimeIn(TZ.UTC_M330)).toEqual(true);
  expect(MyTimes.isNightTimeIn(TZ.UTC_M330)).toEqual(
    !MyTimes.isDayTimeIn(TZ.UTC_M330)
  );
  expect(MyTimes.isNightTimeIn(TZ.UTC_M3)).toEqual(true);
  expect(MyTimes.isNightTimeIn(TZ.UTC_M3)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_M3));
  expect(MyTimes.isNightTimeIn(TZ.UTC_M2)).toEqual(true);
  expect(MyTimes.isNightTimeIn(TZ.UTC_M2)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_M2));
  expect(MyTimes.isNightTimeIn(TZ.UTC_M1)).toEqual(true);
  expect(MyTimes.isNightTimeIn(TZ.UTC_M1)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_M1));
  expect(MyTimes.isNightTimeIn(TZ.UTC_0)).toEqual(true);
  expect(MyTimes.isNightTimeIn(TZ.UTC_0)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_0));
  expect(MyTimes.isNightTimeIn(TZ.UTC_P1)).toEqual(true);
  expect(MyTimes.isNightTimeIn(TZ.UTC_P1)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_P1));
  expect(MyTimes.isNightTimeIn(TZ.UTC_P2)).toEqual(true);
  expect(MyTimes.isNightTimeIn(TZ.UTC_P2)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_P2));
  expect(MyTimes.isNightTimeIn(TZ.UTC_P3)).toEqual(true);
  expect(MyTimes.isNightTimeIn(TZ.UTC_P3)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_P3));
  expect(MyTimes.isNightTimeIn(TZ.UTC_P330)).toEqual(true);
  expect(MyTimes.isNightTimeIn(TZ.UTC_P330)).toEqual(
    !MyTimes.isDayTimeIn(TZ.UTC_P330)
  );
  expect(MyTimes.isNightTimeIn(TZ.UTC_P4)).toEqual(true);
  expect(MyTimes.isNightTimeIn(TZ.UTC_P4)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_P4));
  expect(MyTimes.isNightTimeIn(TZ.UTC_P430)).toEqual(true);
  expect(MyTimes.isNightTimeIn(TZ.UTC_P430)).toEqual(
    !MyTimes.isDayTimeIn(TZ.UTC_P430)
  );
  expect(MyTimes.isNightTimeIn(TZ.UTC_P5)).toEqual(true);
  expect(MyTimes.isNightTimeIn(TZ.UTC_P5)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_P5));
  expect(MyTimes.isNightTimeIn(TZ.UTC_P530)).toEqual(true);
  expect(MyTimes.isNightTimeIn(TZ.UTC_P530)).toEqual(
    !MyTimes.isDayTimeIn(TZ.UTC_P530)
  );
  expect(MyTimes.isNightTimeIn(TZ.UTC_P545)).toEqual(true);
  expect(MyTimes.isNightTimeIn(TZ.UTC_P545)).toEqual(
    !MyTimes.isDayTimeIn(TZ.UTC_P545)
  );
  expect(MyTimes.isNightTimeIn(TZ.UTC_P6)).toEqual(true);
  expect(MyTimes.isNightTimeIn(TZ.UTC_P6)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_P6));
  expect(MyTimes.isNightTimeIn(TZ.UTC_P630)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_P630)).toEqual(
    !MyTimes.isDayTimeIn(TZ.UTC_P630)
  );
  expect(MyTimes.isNightTimeIn(TZ.UTC_P7)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_P7)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_P7));
  expect(MyTimes.isNightTimeIn(TZ.UTC_P8)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_P8)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_P8));
  expect(MyTimes.isNightTimeIn(TZ.UTC_P9)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_P9)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_P9));
  expect(MyTimes.isNightTimeIn(TZ.UTC_P930)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_P930)).toEqual(
    !MyTimes.isDayTimeIn(TZ.UTC_P930)
  );
  expect(MyTimes.isNightTimeIn(TZ.UTC_P10)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_P10)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_P10));
  expect(MyTimes.isNightTimeIn(TZ.UTC_P1030)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_P1030)).toEqual(
    !MyTimes.isDayTimeIn(TZ.UTC_P1030)
  );
  expect(MyTimes.isNightTimeIn(TZ.UTC_P12)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_P12)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_P12));
  expect(MyTimes.isNightTimeIn(TZ.UTC_P1245)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_P1245)).toEqual(
    !MyTimes.isDayTimeIn(TZ.UTC_P1245)
  );
  expect(MyTimes.isNightTimeIn(TZ.UTC_P13)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_P13)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_P13));
});

test("night time in IANATimeZone 2000_01_01_00_00", () => {
  jest.setSystemTime(new Date(DATES.DATE_2000_01_01_00_00));
  expect(MyTimes.isNightTimeIn(TZ.UTC_M11)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_M11)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_M11));
  expect(MyTimes.isNightTimeIn(TZ.UTC_M10)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_M10)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_M10));
  expect(MyTimes.isNightTimeIn(TZ.UTC_M930)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_M930)).toEqual(
    !MyTimes.isDayTimeIn(TZ.UTC_M930)
  );
  expect(MyTimes.isNightTimeIn(TZ.UTC_M9)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_M9)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_M9));
  expect(MyTimes.isNightTimeIn(TZ.UTC_M8)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_M8)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_M8));
  expect(MyTimes.isNightTimeIn(TZ.UTC_M7)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_M7)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_M7));
  expect(MyTimes.isNightTimeIn(TZ.UTC_M6)).toEqual(true);
  expect(MyTimes.isNightTimeIn(TZ.UTC_M6)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_M6));
  expect(MyTimes.isNightTimeIn(TZ.UTC_M5)).toEqual(true);
  expect(MyTimes.isNightTimeIn(TZ.UTC_M5)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_M5));
  expect(MyTimes.isNightTimeIn(TZ.UTC_M4)).toEqual(true);
  expect(MyTimes.isNightTimeIn(TZ.UTC_M4)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_M4));
  expect(MyTimes.isNightTimeIn(TZ.UTC_M330)).toEqual(true);
  expect(MyTimes.isNightTimeIn(TZ.UTC_M330)).toEqual(
    !MyTimes.isDayTimeIn(TZ.UTC_M330)
  );
  expect(MyTimes.isNightTimeIn(TZ.UTC_M3)).toEqual(true);
  expect(MyTimes.isNightTimeIn(TZ.UTC_M3)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_M3));
  expect(MyTimes.isNightTimeIn(TZ.UTC_M2)).toEqual(true);
  expect(MyTimes.isNightTimeIn(TZ.UTC_M2)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_M2));
  expect(MyTimes.isNightTimeIn(TZ.UTC_M1)).toEqual(true);
  expect(MyTimes.isNightTimeIn(TZ.UTC_M1)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_M1));
  expect(MyTimes.isNightTimeIn(TZ.UTC_0)).toEqual(true);
  expect(MyTimes.isNightTimeIn(TZ.UTC_0)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_0));
  expect(MyTimes.isNightTimeIn(TZ.UTC_P1)).toEqual(true);
  expect(MyTimes.isNightTimeIn(TZ.UTC_P1)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_P1));
  expect(MyTimes.isNightTimeIn(TZ.UTC_P2)).toEqual(true);
  expect(MyTimes.isNightTimeIn(TZ.UTC_P2)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_P2));
  expect(MyTimes.isNightTimeIn(TZ.UTC_P3)).toEqual(true);
  expect(MyTimes.isNightTimeIn(TZ.UTC_P3)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_P3));
  expect(MyTimes.isNightTimeIn(TZ.UTC_P330)).toEqual(true);
  expect(MyTimes.isNightTimeIn(TZ.UTC_P330)).toEqual(
    !MyTimes.isDayTimeIn(TZ.UTC_P330)
  );
  expect(MyTimes.isNightTimeIn(TZ.UTC_P4)).toEqual(true);
  expect(MyTimes.isNightTimeIn(TZ.UTC_P4)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_P4));
  expect(MyTimes.isNightTimeIn(TZ.UTC_P430)).toEqual(true);
  expect(MyTimes.isNightTimeIn(TZ.UTC_P430)).toEqual(
    !MyTimes.isDayTimeIn(TZ.UTC_P430)
  );
  expect(MyTimes.isNightTimeIn(TZ.UTC_P5)).toEqual(true);
  expect(MyTimes.isNightTimeIn(TZ.UTC_P5)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_P5));
  expect(MyTimes.isNightTimeIn(TZ.UTC_P530)).toEqual(true);
  expect(MyTimes.isNightTimeIn(TZ.UTC_P530)).toEqual(
    !MyTimes.isDayTimeIn(TZ.UTC_P530)
  );
  expect(MyTimes.isNightTimeIn(TZ.UTC_P545)).toEqual(true);
  expect(MyTimes.isNightTimeIn(TZ.UTC_P545)).toEqual(
    !MyTimes.isDayTimeIn(TZ.UTC_P545)
  );
  expect(MyTimes.isNightTimeIn(TZ.UTC_P6)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_P6)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_P6));
  expect(MyTimes.isNightTimeIn(TZ.UTC_P630)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_P630)).toEqual(
    !MyTimes.isDayTimeIn(TZ.UTC_P630)
  );
  expect(MyTimes.isNightTimeIn(TZ.UTC_P7)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_P7)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_P7));
  expect(MyTimes.isNightTimeIn(TZ.UTC_P8)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_P8)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_P8));
  expect(MyTimes.isNightTimeIn(TZ.UTC_P9)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_P9)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_P9));
  expect(MyTimes.isNightTimeIn(TZ.UTC_P930)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_P930)).toEqual(
    !MyTimes.isDayTimeIn(TZ.UTC_P930)
  );
  expect(MyTimes.isNightTimeIn(TZ.UTC_P10)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_P10)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_P10));
  expect(MyTimes.isNightTimeIn(TZ.UTC_P1030)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_P1030)).toEqual(
    !MyTimes.isDayTimeIn(TZ.UTC_P1030)
  );
  expect(MyTimes.isNightTimeIn(TZ.UTC_P12)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_P12)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_P12));
  expect(MyTimes.isNightTimeIn(TZ.UTC_P1245)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_P1245)).toEqual(
    !MyTimes.isDayTimeIn(TZ.UTC_P1245)
  );
  expect(MyTimes.isNightTimeIn(TZ.UTC_P13)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_P13)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_P13));
});

test("night time in IANATimeZone 2001_01_01_01_02", () => {
  jest.setSystemTime(new Date(DATES.DATE_2001_01_01_01_02));
  expect(MyTimes.isNightTimeIn(TZ.UTC_M11)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_M11)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_M11));
  expect(MyTimes.isNightTimeIn(TZ.UTC_M10)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_M10)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_M10));
  expect(MyTimes.isNightTimeIn(TZ.UTC_M930)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_M930)).toEqual(
    !MyTimes.isDayTimeIn(TZ.UTC_M930)
  );
  expect(MyTimes.isNightTimeIn(TZ.UTC_M9)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_M9)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_M9));
  expect(MyTimes.isNightTimeIn(TZ.UTC_M8)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_M8)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_M8));
  expect(MyTimes.isNightTimeIn(TZ.UTC_M7)).toEqual(true);
  expect(MyTimes.isNightTimeIn(TZ.UTC_M7)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_M7));
  expect(MyTimes.isNightTimeIn(TZ.UTC_M6)).toEqual(true);
  expect(MyTimes.isNightTimeIn(TZ.UTC_M6)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_M6));
  expect(MyTimes.isNightTimeIn(TZ.UTC_M5)).toEqual(true);
  expect(MyTimes.isNightTimeIn(TZ.UTC_M5)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_M5));
  expect(MyTimes.isNightTimeIn(TZ.UTC_M4)).toEqual(true);
  expect(MyTimes.isNightTimeIn(TZ.UTC_M4)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_M4));
  expect(MyTimes.isNightTimeIn(TZ.UTC_M330)).toEqual(true);
  expect(MyTimes.isNightTimeIn(TZ.UTC_M330)).toEqual(
    !MyTimes.isDayTimeIn(TZ.UTC_M330)
  );
  expect(MyTimes.isNightTimeIn(TZ.UTC_M3)).toEqual(true);
  expect(MyTimes.isNightTimeIn(TZ.UTC_M3)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_M3));
  expect(MyTimes.isNightTimeIn(TZ.UTC_M2)).toEqual(true);
  expect(MyTimes.isNightTimeIn(TZ.UTC_M2)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_M2));
  expect(MyTimes.isNightTimeIn(TZ.UTC_M1)).toEqual(true);
  expect(MyTimes.isNightTimeIn(TZ.UTC_M1)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_M1));
  expect(MyTimes.isNightTimeIn(TZ.UTC_0)).toEqual(true);
  expect(MyTimes.isNightTimeIn(TZ.UTC_0)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_0));
  expect(MyTimes.isNightTimeIn(TZ.UTC_P1)).toEqual(true);
  expect(MyTimes.isNightTimeIn(TZ.UTC_P1)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_P1));
  expect(MyTimes.isNightTimeIn(TZ.UTC_P2)).toEqual(true);
  expect(MyTimes.isNightTimeIn(TZ.UTC_P2)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_P2));
  expect(MyTimes.isNightTimeIn(TZ.UTC_P3)).toEqual(true);
  expect(MyTimes.isNightTimeIn(TZ.UTC_P3)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_P3));
  expect(MyTimes.isNightTimeIn(TZ.UTC_P330)).toEqual(true);
  expect(MyTimes.isNightTimeIn(TZ.UTC_P330)).toEqual(
    !MyTimes.isDayTimeIn(TZ.UTC_P330)
  );
  expect(MyTimes.isNightTimeIn(TZ.UTC_P4)).toEqual(true);
  expect(MyTimes.isNightTimeIn(TZ.UTC_P4)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_P4));
  expect(MyTimes.isNightTimeIn(TZ.UTC_P430)).toEqual(true);
  expect(MyTimes.isNightTimeIn(TZ.UTC_P430)).toEqual(
    !MyTimes.isDayTimeIn(TZ.UTC_P430)
  );
  expect(MyTimes.isNightTimeIn(TZ.UTC_P5)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_P5)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_P5));
  expect(MyTimes.isNightTimeIn(TZ.UTC_P530)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_P530)).toEqual(
    !MyTimes.isDayTimeIn(TZ.UTC_P530)
  );
  expect(MyTimes.isNightTimeIn(TZ.UTC_P545)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_P545)).toEqual(
    !MyTimes.isDayTimeIn(TZ.UTC_P545)
  );
  expect(MyTimes.isNightTimeIn(TZ.UTC_P6)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_P6)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_P6));
  expect(MyTimes.isNightTimeIn(TZ.UTC_P630)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_P630)).toEqual(
    !MyTimes.isDayTimeIn(TZ.UTC_P630)
  );
  expect(MyTimes.isNightTimeIn(TZ.UTC_P7)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_P7)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_P7));
  expect(MyTimes.isNightTimeIn(TZ.UTC_P8)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_P8)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_P8));
  expect(MyTimes.isNightTimeIn(TZ.UTC_P9)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_P9)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_P9));
  expect(MyTimes.isNightTimeIn(TZ.UTC_P930)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_P930)).toEqual(
    !MyTimes.isDayTimeIn(TZ.UTC_P930)
  );
  expect(MyTimes.isNightTimeIn(TZ.UTC_P10)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_P10)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_P10));
  expect(MyTimes.isNightTimeIn(TZ.UTC_P1030)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_P1030)).toEqual(
    !MyTimes.isDayTimeIn(TZ.UTC_P1030)
  );
  expect(MyTimes.isNightTimeIn(TZ.UTC_P12)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_P12)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_P12));
  expect(MyTimes.isNightTimeIn(TZ.UTC_P1245)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_P1245)).toEqual(
    !MyTimes.isDayTimeIn(TZ.UTC_P1245)
  );
  expect(MyTimes.isNightTimeIn(TZ.UTC_P13)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_P13)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_P13));
});

test("night time in IANATimeZone 2002_02_02_02_04", () => {
  jest.setSystemTime(new Date(DATES.DATE_2002_02_02_02_04));
  expect(MyTimes.isNightTimeIn(TZ.UTC_M11)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_M11)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_M11));
  expect(MyTimes.isNightTimeIn(TZ.UTC_M10)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_M10)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_M10));
  expect(MyTimes.isNightTimeIn(TZ.UTC_M930)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_M930)).toEqual(
    !MyTimes.isDayTimeIn(TZ.UTC_M930)
  );
  expect(MyTimes.isNightTimeIn(TZ.UTC_M9)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_M9)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_M9));
  expect(MyTimes.isNightTimeIn(TZ.UTC_M8)).toEqual(true);
  expect(MyTimes.isNightTimeIn(TZ.UTC_M8)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_M8));
  expect(MyTimes.isNightTimeIn(TZ.UTC_M7)).toEqual(true);
  expect(MyTimes.isNightTimeIn(TZ.UTC_M7)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_M7));
  expect(MyTimes.isNightTimeIn(TZ.UTC_M6)).toEqual(true);
  expect(MyTimes.isNightTimeIn(TZ.UTC_M6)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_M6));
  expect(MyTimes.isNightTimeIn(TZ.UTC_M5)).toEqual(true);
  expect(MyTimes.isNightTimeIn(TZ.UTC_M5)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_M5));
  expect(MyTimes.isNightTimeIn(TZ.UTC_M4)).toEqual(true);
  expect(MyTimes.isNightTimeIn(TZ.UTC_M4)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_M4));
  expect(MyTimes.isNightTimeIn(TZ.UTC_M330)).toEqual(true);
  expect(MyTimes.isNightTimeIn(TZ.UTC_M330)).toEqual(
    !MyTimes.isDayTimeIn(TZ.UTC_M330)
  );
  expect(MyTimes.isNightTimeIn(TZ.UTC_M3)).toEqual(true);
  expect(MyTimes.isNightTimeIn(TZ.UTC_M3)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_M3));
  expect(MyTimes.isNightTimeIn(TZ.UTC_M2)).toEqual(true);
  expect(MyTimes.isNightTimeIn(TZ.UTC_M2)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_M2));
  expect(MyTimes.isNightTimeIn(TZ.UTC_M1)).toEqual(true);
  expect(MyTimes.isNightTimeIn(TZ.UTC_M1)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_M1));
  expect(MyTimes.isNightTimeIn(TZ.UTC_0)).toEqual(true);
  expect(MyTimes.isNightTimeIn(TZ.UTC_0)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_0));
  expect(MyTimes.isNightTimeIn(TZ.UTC_P1)).toEqual(true);
  expect(MyTimes.isNightTimeIn(TZ.UTC_P1)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_P1));
  expect(MyTimes.isNightTimeIn(TZ.UTC_P2)).toEqual(true);
  expect(MyTimes.isNightTimeIn(TZ.UTC_P2)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_P2));
  expect(MyTimes.isNightTimeIn(TZ.UTC_P3)).toEqual(true);
  expect(MyTimes.isNightTimeIn(TZ.UTC_P3)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_P3));
  expect(MyTimes.isNightTimeIn(TZ.UTC_P330)).toEqual(true);
  expect(MyTimes.isNightTimeIn(TZ.UTC_P330)).toEqual(
    !MyTimes.isDayTimeIn(TZ.UTC_P330)
  );
  expect(MyTimes.isNightTimeIn(TZ.UTC_P4)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_P4)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_P4));
  expect(MyTimes.isNightTimeIn(TZ.UTC_P430)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_P430)).toEqual(
    !MyTimes.isDayTimeIn(TZ.UTC_P430)
  );
  expect(MyTimes.isNightTimeIn(TZ.UTC_P5)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_P5)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_P5));
  expect(MyTimes.isNightTimeIn(TZ.UTC_P530)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_P530)).toEqual(
    !MyTimes.isDayTimeIn(TZ.UTC_P530)
  );
  expect(MyTimes.isNightTimeIn(TZ.UTC_P545)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_P545)).toEqual(
    !MyTimes.isDayTimeIn(TZ.UTC_P545)
  );
  expect(MyTimes.isNightTimeIn(TZ.UTC_P6)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_P6)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_P6));
  expect(MyTimes.isNightTimeIn(TZ.UTC_P630)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_P630)).toEqual(
    !MyTimes.isDayTimeIn(TZ.UTC_P630)
  );
  expect(MyTimes.isNightTimeIn(TZ.UTC_P7)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_P7)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_P7));
  expect(MyTimes.isNightTimeIn(TZ.UTC_P8)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_P8)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_P8));
  expect(MyTimes.isNightTimeIn(TZ.UTC_P9)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_P9)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_P9));
  expect(MyTimes.isNightTimeIn(TZ.UTC_P930)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_P930)).toEqual(
    !MyTimes.isDayTimeIn(TZ.UTC_P930)
  );
  expect(MyTimes.isNightTimeIn(TZ.UTC_P10)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_P10)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_P10));
  expect(MyTimes.isNightTimeIn(TZ.UTC_P1030)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_P1030)).toEqual(
    !MyTimes.isDayTimeIn(TZ.UTC_P1030)
  );
  expect(MyTimes.isNightTimeIn(TZ.UTC_P12)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_P12)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_P12));
  expect(MyTimes.isNightTimeIn(TZ.UTC_P1245)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_P1245)).toEqual(
    !MyTimes.isDayTimeIn(TZ.UTC_P1245)
  );
  expect(MyTimes.isNightTimeIn(TZ.UTC_P13)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_P13)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_P13));
});

test("night time in IANATimeZone 2003_03_03_03_06", () => {
  jest.setSystemTime(new Date(DATES.DATE_2003_03_03_03_06));
  expect(MyTimes.isNightTimeIn(TZ.UTC_M11)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_M11)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_M11));
});

test("night time in IANATimeZone 2004_04_04_04_08", () => {
  jest.setSystemTime(new Date(DATES.DATE_2004_04_04_04_08));
  expect(MyTimes.isNightTimeIn(TZ.UTC_M11)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_M11)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_M11));
});

test("night time in IANATimeZone 2005_05_05_05_10", () => {
  jest.setSystemTime(new Date(DATES.DATE_2005_05_05_05_10));
  expect(MyTimes.isNightTimeIn(TZ.UTC_M11)).toEqual(true);
  expect(MyTimes.isNightTimeIn(TZ.UTC_M11)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_M11));
});

test("night time in IANATimeZone 2006_06_06_06_12", () => {
  jest.setSystemTime(new Date(DATES.DATE_2006_06_06_06_12));
  expect(MyTimes.isNightTimeIn(TZ.UTC_M11)).toEqual(true);
  expect(MyTimes.isNightTimeIn(TZ.UTC_M11)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_M11));
});

test("night time in IANATimeZone 2007_07_07_07_14", () => {
  jest.setSystemTime(new Date(DATES.DATE_2007_07_07_07_14));
  expect(MyTimes.isNightTimeIn(TZ.UTC_M11)).toEqual(true);
  expect(MyTimes.isNightTimeIn(TZ.UTC_M11)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_M11));
});

test("night time in IANATimeZone 2008_08_08_08_16", () => {
  jest.setSystemTime(new Date(DATES.DATE_2008_08_08_08_16));
  expect(MyTimes.isNightTimeIn(TZ.UTC_M11)).toEqual(true);
  expect(MyTimes.isNightTimeIn(TZ.UTC_M11)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_M11));
});

test("night time in IANATimeZone 2009_09_09_09_18", () => {
  jest.setSystemTime(new Date(DATES.DATE_2009_09_09_09_18));
  expect(MyTimes.isNightTimeIn(TZ.UTC_M11)).toEqual(true);
  expect(MyTimes.isNightTimeIn(TZ.UTC_M11)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_M11));
});

test("night time in IANATimeZone 2010_10_10_10_20", () => {
  jest.setSystemTime(new Date(DATES.DATE_2010_10_10_10_20));
  expect(MyTimes.isNightTimeIn(TZ.UTC_M11)).toEqual(true);
  expect(MyTimes.isNightTimeIn(TZ.UTC_M11)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_M11));
});

test("night time in IANATimeZone 2011_11_11_11_22", () => {
  jest.setSystemTime(new Date(DATES.DATE_2011_11_11_11_22));
  expect(MyTimes.isNightTimeIn(TZ.UTC_M11)).toEqual(true);
  expect(MyTimes.isNightTimeIn(TZ.UTC_M11)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_M11));
});

test("night time in IANATimeZone 2012_12_12_12_24", () => {
  jest.setSystemTime(new Date(DATES.DATE_2012_12_12_12_24));
  expect(MyTimes.isNightTimeIn(TZ.UTC_M11)).toEqual(true);
  expect(MyTimes.isNightTimeIn(TZ.UTC_M11)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_M11));
});

test("night time in IANATimeZone 2013_03_13_13_26", () => {
  jest.setSystemTime(new Date(DATES.DATE_2013_03_13_13_26));
  expect(MyTimes.isNightTimeIn(TZ.UTC_M11)).toEqual(true);
  expect(MyTimes.isNightTimeIn(TZ.UTC_M11)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_M11));
});

test("night time in IANATimeZone 2014_04_14_14_28", () => {
  jest.setSystemTime(new Date(DATES.DATE_2014_04_14_14_28));
  expect(MyTimes.isNightTimeIn(TZ.UTC_M11)).toEqual(true);
  expect(MyTimes.isNightTimeIn(TZ.UTC_M11)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_M11));
});

test("night time in IANATimeZone 2015_05_15_15_30", () => {
  jest.setSystemTime(new Date(DATES.DATE_2015_05_15_15_30));
  expect(MyTimes.isNightTimeIn(TZ.UTC_M11)).toEqual(true);
  expect(MyTimes.isNightTimeIn(TZ.UTC_M11)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_M11));
});

test("night time in IANATimeZone 2016_06_16_16_32", () => {
  jest.setSystemTime(new Date(DATES.DATE_2016_06_16_16_32));
  expect(MyTimes.isNightTimeIn(TZ.UTC_M11)).toEqual(true);
  expect(MyTimes.isNightTimeIn(TZ.UTC_M11)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_M11));
});

test("night time in IANATimeZone 2017_07_17_17_34", () => {
  jest.setSystemTime(new Date(DATES.DATE_2017_07_17_17_34));
  expect(MyTimes.isNightTimeIn(TZ.UTC_M11)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_M11)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_M11));
});

test("night time in IANATimeZone 2018_08_18_18_36", () => {
  jest.setSystemTime(new Date(DATES.DATE_2018_08_18_18_36));
  expect(MyTimes.isNightTimeIn(TZ.UTC_M11)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_M11)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_M11));
});

test("night time in IANATimeZone 2019_09_19_19_38", () => {
  jest.setSystemTime(new Date(DATES.DATE_2019_09_19_19_38));
  expect(MyTimes.isNightTimeIn(TZ.UTC_M11)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_M11)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_M11));
});

test("night time in IANATimeZone 2020_02_20_20_40", () => {
  jest.setSystemTime(new Date(DATES.DATE_2020_02_20_20_40));
  expect(MyTimes.isNightTimeIn(TZ.UTC_M11)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_M11)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_M11));
});

test("night time in IANATimeZone 2021_01_21_21_42", () => {
  jest.setSystemTime(new Date(DATES.DATE_2021_01_21_21_42));
  expect(MyTimes.isNightTimeIn(TZ.UTC_M11)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_M11)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_M11));
});

test("night time in IANATimeZone 2022_02_22_22_44", () => {
  jest.setSystemTime(new Date(DATES.DATE_2022_02_22_22_44));
  expect(MyTimes.isNightTimeIn(TZ.UTC_M11)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_M11)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_M11));
});

test("night time in IANATimeZone 2023_03_23_23_46", () => {
  jest.setSystemTime(new Date(DATES.DATE_2023_03_23_23_46));
  expect(MyTimes.isNightTimeIn(TZ.UTC_M11)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_M11)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_M11));
});

test("night time in IANATimeZone 2024_04_24_00_48", () => {
  jest.setSystemTime(new Date(DATES.DATE_2024_04_24_00_48));
  expect(MyTimes.isNightTimeIn(TZ.UTC_M11)).toEqual(false);
  expect(MyTimes.isNightTimeIn(TZ.UTC_M11)).toEqual(!MyTimes.isDayTimeIn(TZ.UTC_M11));
});

test("night time in AWSRegionCode 1999_12_31_23_59", () => {
  jest.setSystemTime(new Date(DATES.DATE_1999_12_31_23_59));
  expect(MyTimes.isNightTimeInAWS(AWS.AWS_US_E_2)).toEqual(true);
  expect(MyTimes.isNightTimeInAWS(AWS.AWS_US_E_2)).toEqual(
    !MyTimes.isDayTimeInAWS(AWS.AWS_US_E_2)
  );
  expect(MyTimes.isNightTimeInAWS(AWS.AWS_US_E_1)).toEqual(true);
  expect(MyTimes.isNightTimeInAWS(AWS.AWS_US_E_1)).toEqual(
    !MyTimes.isDayTimeInAWS(AWS.AWS_US_E_1)
  );
  expect(MyTimes.isNightTimeInAWS(AWS.AWS_US_W_1)).toEqual(false);
  expect(MyTimes.isNightTimeInAWS(AWS.AWS_US_W_1)).toEqual(
    !MyTimes.isDayTimeInAWS(AWS.AWS_US_W_1)
  );
  expect(MyTimes.isNightTimeInAWS(AWS.AWS_US_W_2)).toEqual(false);
  expect(MyTimes.isNightTimeInAWS(AWS.AWS_US_W_2)).toEqual(
    !MyTimes.isDayTimeInAWS(AWS.AWS_US_W_2)
  );
  expect(MyTimes.isNightTimeInAWS(AWS.AWS_AF_S_1)).toEqual(true);
  expect(MyTimes.isNightTimeInAWS(AWS.AWS_AF_S_1)).toEqual(
    !MyTimes.isDayTimeInAWS(AWS.AWS_AF_S_1)
  );
  expect(MyTimes.isNightTimeInAWS(AWS.AWS_AP_E_1)).toEqual(false);
  expect(MyTimes.isNightTimeInAWS(AWS.AWS_AP_E_1)).toEqual(
    !MyTimes.isDayTimeInAWS(AWS.AWS_AP_E_1)
  );
  expect(MyTimes.isNightTimeInAWS(AWS.AWS_AP_SE_3)).toEqual(false);
  expect(MyTimes.isNightTimeInAWS(AWS.AWS_AP_SE_3)).toEqual(
    !MyTimes.isDayTimeInAWS(AWS.AWS_AP_SE_3)
  );
  expect(MyTimes.isNightTimeInAWS(AWS.AWS_AP_S_1)).toEqual(true);
  expect(MyTimes.isNightTimeInAWS(AWS.AWS_AP_S_1)).toEqual(
    !MyTimes.isDayTimeInAWS(AWS.AWS_AP_S_1)
  );
  expect(MyTimes.isNightTimeInAWS(AWS.AWS_AP_NE_3)).toEqual(false);
  expect(MyTimes.isNightTimeInAWS(AWS.AWS_AP_NE_3)).toEqual(
    !MyTimes.isDayTimeInAWS(AWS.AWS_AP_NE_3)
  );
  expect(MyTimes.isNightTimeInAWS(AWS.AWS_AP_NE_2)).toEqual(false);
  expect(MyTimes.isNightTimeInAWS(AWS.AWS_AP_NE_2)).toEqual(
    !MyTimes.isDayTimeInAWS(AWS.AWS_AP_NE_2)
  );
  expect(MyTimes.isNightTimeInAWS(AWS.AWS_AP_SE_1)).toEqual(false);
  expect(MyTimes.isNightTimeInAWS(AWS.AWS_AP_SE_1)).toEqual(
    !MyTimes.isDayTimeInAWS(AWS.AWS_AP_SE_1)
  );
  expect(MyTimes.isNightTimeInAWS(AWS.AWS_AP_SE_2)).toEqual(false);
  expect(MyTimes.isNightTimeInAWS(AWS.AWS_AP_SE_2)).toEqual(
    !MyTimes.isDayTimeInAWS(AWS.AWS_AP_SE_2)
  );
  expect(MyTimes.isNightTimeInAWS(AWS.AWS_AP_NE_1)).toEqual(false);
  expect(MyTimes.isNightTimeInAWS(AWS.AWS_AP_NE_1)).toEqual(
    !MyTimes.isDayTimeInAWS(AWS.AWS_AP_NE_1)
  );
  expect(MyTimes.isNightTimeInAWS(AWS.AWS_CA_C_1)).toEqual(true);
  expect(MyTimes.isNightTimeInAWS(AWS.AWS_CA_C_1)).toEqual(
    !MyTimes.isDayTimeInAWS(AWS.AWS_CA_C_1)
  );
  expect(MyTimes.isNightTimeInAWS(AWS.AWS_CN_N_1)).toEqual(false);
  expect(MyTimes.isNightTimeInAWS(AWS.AWS_CN_N_1)).toEqual(
    !MyTimes.isDayTimeInAWS(AWS.AWS_CN_N_1)
  );
  expect(MyTimes.isNightTimeInAWS(AWS.AWS_CN_NW_1)).toEqual(false);
  expect(MyTimes.isNightTimeInAWS(AWS.AWS_CN_NW_1)).toEqual(
    !MyTimes.isDayTimeInAWS(AWS.AWS_CN_NW_1)
  );
  expect(MyTimes.isNightTimeInAWS(AWS.AWS_EU_C_1)).toEqual(true);
  expect(MyTimes.isNightTimeInAWS(AWS.AWS_EU_C_1)).toEqual(
    !MyTimes.isDayTimeInAWS(AWS.AWS_EU_C_1)
  );
  expect(MyTimes.isNightTimeInAWS(AWS.AWS_EU_W_1)).toEqual(true);
  expect(MyTimes.isNightTimeInAWS(AWS.AWS_EU_W_1)).toEqual(
    !MyTimes.isDayTimeInAWS(AWS.AWS_EU_W_1)
  );
  expect(MyTimes.isNightTimeInAWS(AWS.AWS_EU_W_2)).toEqual(true);
  expect(MyTimes.isNightTimeInAWS(AWS.AWS_EU_W_2)).toEqual(
    !MyTimes.isDayTimeInAWS(AWS.AWS_EU_W_2)
  );
  expect(MyTimes.isNightTimeInAWS(AWS.AWS_EU_S_1)).toEqual(true);
  expect(MyTimes.isNightTimeInAWS(AWS.AWS_EU_S_1)).toEqual(
    !MyTimes.isDayTimeInAWS(AWS.AWS_EU_S_1)
  );
  expect(MyTimes.isNightTimeInAWS(AWS.AWS_EU_W_3)).toEqual(true);
  expect(MyTimes.isNightTimeInAWS(AWS.AWS_EU_W_3)).toEqual(
    !MyTimes.isDayTimeInAWS(AWS.AWS_EU_W_3)
  );
  expect(MyTimes.isNightTimeInAWS(AWS.AWS_EU_N_1)).toEqual(true);
  expect(MyTimes.isNightTimeInAWS(AWS.AWS_EU_N_1)).toEqual(
    !MyTimes.isDayTimeInAWS(AWS.AWS_EU_N_1)
  );
  expect(MyTimes.isNightTimeInAWS(AWS.AWS_ME_S_1)).toEqual(true);
  expect(MyTimes.isNightTimeInAWS(AWS.AWS_ME_S_1)).toEqual(
    !MyTimes.isDayTimeInAWS(AWS.AWS_ME_S_1)
  );
  expect(MyTimes.isNightTimeInAWS(AWS.AWS_SA_E_1)).toEqual(true);
  expect(MyTimes.isNightTimeInAWS(AWS.AWS_SA_E_1)).toEqual(
    !MyTimes.isDayTimeInAWS(AWS.AWS_SA_E_1)
  );
});

test("night", () => {
  jest.setSystemTime(new Date(DATES.DATE_1999_12_31_23_59));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATES.DATE_2000_01_01_00_00));
  expect(MyTimes.isNight()).toEqual(true);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATES.DATE_2001_01_01_01_02));
  expect(MyTimes.isNight()).toEqual(true);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATES.DATE_2002_02_02_02_04));
  expect(MyTimes.isNight()).toEqual(true);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATES.DATE_2003_03_03_03_06));
  expect(MyTimes.isNight()).toEqual(true);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATES.DATE_2004_04_04_04_08));
  expect(MyTimes.isNight()).toEqual(true);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATES.DATE_2005_05_05_05_10));
  expect(MyTimes.isNight()).toEqual(true);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATES.DATE_2006_06_06_06_12));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATES.DATE_2007_07_07_07_14));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATES.DATE_2008_08_08_08_16));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATES.DATE_2009_09_09_09_18));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATES.DATE_2010_10_10_10_20));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATES.DATE_2011_11_11_11_22));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATES.DATE_2012_12_12_12_24));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATES.DATE_2013_03_13_13_26));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATES.DATE_2014_04_14_14_28));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATES.DATE_2015_05_15_15_30));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATES.DATE_2016_06_16_16_32));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATES.DATE_2017_07_17_17_34));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATES.DATE_2018_08_18_18_36));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATES.DATE_2019_09_19_19_38));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATES.DATE_2020_02_20_20_40));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATES.DATE_2021_01_21_21_42));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATES.DATE_2022_02_22_22_44));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATES.DATE_2023_03_23_23_46));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATES.DATE_2024_04_24_00_48));
  expect(MyTimes.isNight()).toEqual(true);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
});

test("morning", () => {
  jest.setSystemTime(new Date(DATES.DATE_1999_12_31_23_59));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATES.DATE_2000_01_01_00_00));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATES.DATE_2001_01_01_01_02));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATES.DATE_2002_02_02_02_04));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATES.DATE_2003_03_03_03_06));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATES.DATE_2004_04_04_04_08));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATES.DATE_2005_05_05_05_10));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATES.DATE_2006_06_06_06_12));
  expect(MyTimes.isMorning()).toEqual(true);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATES.DATE_2007_07_07_07_14));
  expect(MyTimes.isMorning()).toEqual(true);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATES.DATE_2008_08_08_08_16));
  expect(MyTimes.isMorning()).toEqual(true);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATES.DATE_2009_09_09_09_18));
  expect(MyTimes.isMorning()).toEqual(true);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATES.DATE_2010_10_10_10_20));
  expect(MyTimes.isMorning()).toEqual(true);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATES.DATE_2011_11_11_11_22));
  expect(MyTimes.isMorning()).toEqual(true);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATES.DATE_2012_12_12_12_24));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATES.DATE_2013_03_13_13_26));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATES.DATE_2014_04_14_14_28));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATES.DATE_2015_05_15_15_30));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATES.DATE_2016_06_16_16_32));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATES.DATE_2017_07_17_17_34));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATES.DATE_2018_08_18_18_36));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATES.DATE_2019_09_19_19_38));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATES.DATE_2020_02_20_20_40));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATES.DATE_2021_01_21_21_42));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATES.DATE_2022_02_22_22_44));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATES.DATE_2023_03_23_23_46));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATES.DATE_2024_04_24_00_48));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
});

test("afternoon", () => {
  jest.setSystemTime(new Date(DATES.DATE_1999_12_31_23_59));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATES.DATE_2000_01_01_00_00));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATES.DATE_2001_01_01_01_02));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATES.DATE_2002_02_02_02_04));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATES.DATE_2003_03_03_03_06));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATES.DATE_2004_04_04_04_08));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATES.DATE_2005_05_05_05_10));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATES.DATE_2006_06_06_06_12));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATES.DATE_2007_07_07_07_14));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATES.DATE_2008_08_08_08_16));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATES.DATE_2009_09_09_09_18));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATES.DATE_2010_10_10_10_20));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATES.DATE_2011_11_11_11_22));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATES.DATE_2012_12_12_12_24));
  expect(MyTimes.isAfternoon()).toEqual(true);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATES.DATE_2013_03_13_13_26));
  expect(MyTimes.isAfternoon()).toEqual(true);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATES.DATE_2014_04_14_14_28));
  expect(MyTimes.isAfternoon()).toEqual(true);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATES.DATE_2015_05_15_15_30));
  expect(MyTimes.isAfternoon()).toEqual(true);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATES.DATE_2016_06_16_16_32));
  expect(MyTimes.isAfternoon()).toEqual(true);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATES.DATE_2017_07_17_17_34));
  expect(MyTimes.isAfternoon()).toEqual(true);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATES.DATE_2018_08_18_18_36));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATES.DATE_2019_09_19_19_38));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATES.DATE_2020_02_20_20_40));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATES.DATE_2021_01_21_21_42));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATES.DATE_2022_02_22_22_44));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATES.DATE_2023_03_23_23_46));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATES.DATE_2024_04_24_00_48));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
});

test("evening", () => {
  jest.setSystemTime(new Date(DATES.DATE_1999_12_31_23_59));
  expect(MyTimes.isEvening()).toEqual(true);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATES.DATE_2000_01_01_00_00));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATES.DATE_2001_01_01_01_02));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATES.DATE_2002_02_02_02_04));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATES.DATE_2003_03_03_03_06));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATES.DATE_2004_04_04_04_08));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATES.DATE_2005_05_05_05_10));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATES.DATE_2006_06_06_06_12));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATES.DATE_2007_07_07_07_14));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATES.DATE_2008_08_08_08_16));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATES.DATE_2009_09_09_09_18));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATES.DATE_2010_10_10_10_20));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATES.DATE_2011_11_11_11_22));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATES.DATE_2012_12_12_12_24));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATES.DATE_2013_03_13_13_26));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATES.DATE_2014_04_14_14_28));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATES.DATE_2015_05_15_15_30));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATES.DATE_2016_06_16_16_32));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATES.DATE_2017_07_17_17_34));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATES.DATE_2018_08_18_18_36));
  expect(MyTimes.isEvening()).toEqual(true);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATES.DATE_2019_09_19_19_38));
  expect(MyTimes.isEvening()).toEqual(true);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATES.DATE_2020_02_20_20_40));
  expect(MyTimes.isEvening()).toEqual(true);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATES.DATE_2021_01_21_21_42));
  expect(MyTimes.isEvening()).toEqual(true);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATES.DATE_2022_02_22_22_44));
  expect(MyTimes.isEvening()).toEqual(true);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATES.DATE_2023_03_23_23_46));
  expect(MyTimes.isEvening()).toEqual(true);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATES.DATE_2024_04_24_00_48));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
});

test("business hours", () => {
  jest.setSystemTime(new Date(DATES.DATE_1999_12_31_23_59));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date(DATES.DATE_2000_01_01_00_00));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date(DATES.DATE_2001_01_01_01_02));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date(DATES.DATE_2002_02_02_02_04));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date(DATES.DATE_2003_03_03_03_06));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date(DATES.DATE_2004_04_04_04_08));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date(DATES.DATE_2005_05_05_05_10));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date(DATES.DATE_2006_06_06_06_12));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date(DATES.DATE_2007_07_07_07_14));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date(DATES.DATE_2008_08_08_08_16));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date(DATES.DATE_2009_09_09_09_18));
  expect(MyTimes.isBusinessHours()).toEqual(true);
  jest.setSystemTime(new Date(DATES.DATE_2010_10_10_10_20));
  expect(MyTimes.isBusinessHours()).toEqual(true);
  jest.setSystemTime(new Date(DATES.DATE_2011_11_11_11_22));
  expect(MyTimes.isBusinessHours()).toEqual(true);
  jest.setSystemTime(new Date(DATES.DATE_2012_12_12_12_24));
  expect(MyTimes.isBusinessHours()).toEqual(true);
  jest.setSystemTime(new Date(DATES.DATE_2013_03_13_13_26));
  expect(MyTimes.isBusinessHours()).toEqual(true);
  jest.setSystemTime(new Date(DATES.DATE_2014_04_14_14_28));
  expect(MyTimes.isBusinessHours()).toEqual(true);
  jest.setSystemTime(new Date(DATES.DATE_2015_05_15_15_30));
  expect(MyTimes.isBusinessHours()).toEqual(true);
  jest.setSystemTime(new Date(DATES.DATE_2016_06_16_16_32));
  expect(MyTimes.isBusinessHours()).toEqual(true);
  jest.setSystemTime(new Date(DATES.DATE_2017_07_17_17_34));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date(DATES.DATE_2018_08_18_18_36));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date(DATES.DATE_2019_09_19_19_38));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date(DATES.DATE_2020_02_20_20_40));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date(DATES.DATE_2021_01_21_21_42));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date(DATES.DATE_2022_02_22_22_44));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date(DATES.DATE_2023_03_23_23_46));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date(DATES.DATE_2024_04_24_00_48));
  expect(MyTimes.isBusinessHours()).toEqual(false);
});

test("day shift", () => {
  jest.setSystemTime(new Date(DATES.DATE_1999_12_31_23_59));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATES.DATE_2000_01_01_00_00));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATES.DATE_2001_01_01_01_02));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATES.DATE_2002_02_02_02_04));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATES.DATE_2003_03_03_03_06));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATES.DATE_2004_04_04_04_08));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATES.DATE_2005_05_05_05_10));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATES.DATE_2006_06_06_06_12));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATES.DATE_2007_07_07_07_14));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATES.DATE_2008_08_08_08_16));
  expect(MyTimes.isDayShift()).toEqual(true);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATES.DATE_2009_09_09_09_18));
  expect(MyTimes.isDayShift()).toEqual(true);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATES.DATE_2010_10_10_10_20));
  expect(MyTimes.isDayShift()).toEqual(true);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATES.DATE_2011_11_11_11_22));
  expect(MyTimes.isDayShift()).toEqual(true);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATES.DATE_2012_12_12_12_24));
  expect(MyTimes.isDayShift()).toEqual(true);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATES.DATE_2013_03_13_13_26));
  expect(MyTimes.isDayShift()).toEqual(true);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATES.DATE_2014_04_14_14_28));
  expect(MyTimes.isDayShift()).toEqual(true);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATES.DATE_2015_05_15_15_30));
  expect(MyTimes.isDayShift()).toEqual(true);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATES.DATE_2016_06_16_16_32));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATES.DATE_2017_07_17_17_34));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATES.DATE_2018_08_18_18_36));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATES.DATE_2019_09_19_19_38));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATES.DATE_2020_02_20_20_40));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATES.DATE_2021_01_21_21_42));
  jest.setSystemTime(new Date(DATES.DATE_2022_02_22_22_44));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATES.DATE_2023_03_23_23_46));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATES.DATE_2024_04_24_00_48));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
});

test("evening shift", () => {
  jest.setSystemTime(new Date(DATES.DATE_1999_12_31_23_59));
  expect(MyTimes.isEveningShift()).toEqual(true);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATES.DATE_2000_01_01_00_00));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATES.DATE_2001_01_01_01_02));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATES.DATE_2002_02_02_02_04));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATES.DATE_2003_03_03_03_06));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATES.DATE_2004_04_04_04_08));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATES.DATE_2005_05_05_05_10));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATES.DATE_2006_06_06_06_12));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATES.DATE_2007_07_07_07_14));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATES.DATE_2008_08_08_08_16));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATES.DATE_2009_09_09_09_18));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATES.DATE_2010_10_10_10_20));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATES.DATE_2011_11_11_11_22));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATES.DATE_2012_12_12_12_24));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATES.DATE_2013_03_13_13_26));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATES.DATE_2014_04_14_14_28));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATES.DATE_2015_05_15_15_30));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATES.DATE_2016_06_16_16_32));
  expect(MyTimes.isEveningShift()).toEqual(true);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATES.DATE_2017_07_17_17_34));
  expect(MyTimes.isEveningShift()).toEqual(true);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATES.DATE_2018_08_18_18_36));
  expect(MyTimes.isEveningShift()).toEqual(true);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATES.DATE_2019_09_19_19_38));
  expect(MyTimes.isEveningShift()).toEqual(true);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATES.DATE_2020_02_20_20_40));
  expect(MyTimes.isEveningShift()).toEqual(true);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATES.DATE_2021_01_21_21_42));
  expect(MyTimes.isEveningShift()).toEqual(true);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATES.DATE_2022_02_22_22_44));
  expect(MyTimes.isEveningShift()).toEqual(true);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATES.DATE_2023_03_23_23_46));
  expect(MyTimes.isEveningShift()).toEqual(true);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATES.DATE_2024_04_24_00_48));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
});

test("night shift", () => {
  jest.setSystemTime(new Date(DATES.DATE_1999_12_31_23_59));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATES.DATE_2000_01_01_00_00));
  expect(MyTimes.isNightShift()).toEqual(true);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATES.DATE_2001_01_01_01_02));
  expect(MyTimes.isNightShift()).toEqual(true);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATES.DATE_2002_02_02_02_04));
  expect(MyTimes.isNightShift()).toEqual(true);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATES.DATE_2003_03_03_03_06));
  expect(MyTimes.isNightShift()).toEqual(true);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATES.DATE_2004_04_04_04_08));
  expect(MyTimes.isNightShift()).toEqual(true);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATES.DATE_2005_05_05_05_10));
  expect(MyTimes.isNightShift()).toEqual(true);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATES.DATE_2006_06_06_06_12));
  expect(MyTimes.isNightShift()).toEqual(true);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATES.DATE_2007_07_07_07_14));
  expect(MyTimes.isNightShift()).toEqual(true);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATES.DATE_2008_08_08_08_16));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATES.DATE_2009_09_09_09_18));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATES.DATE_2010_10_10_10_20));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATES.DATE_2011_11_11_11_22));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATES.DATE_2012_12_12_12_24));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATES.DATE_2013_03_13_13_26));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATES.DATE_2014_04_14_14_28));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATES.DATE_2015_05_15_15_30));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATES.DATE_2016_06_16_16_32));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATES.DATE_2017_07_17_17_34));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATES.DATE_2018_08_18_18_36));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATES.DATE_2019_09_19_19_38));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATES.DATE_2020_02_20_20_40));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATES.DATE_2021_01_21_21_42));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATES.DATE_2022_02_22_22_44));
  expect(MyTimes.isEveningShift()).toEqual(true);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATES.DATE_2023_03_23_23_46));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATES.DATE_2024_04_24_00_48));
  expect(MyTimes.isNightShift()).toEqual(true);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
});
