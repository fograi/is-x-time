import { isNightTime, isDayTime } from "../src/index";
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

test("night time 1999_12_31_23_59", () => {
  jest.setSystemTime(new Date(DATES.DATE_1999_12_31_23_59));
  expect(isNightTime()).toEqual(true);
  expect(isNightTime()).toEqual(!isDayTime());
});

test("night time 2000_01_01_00_00", () => {
  jest.setSystemTime(new Date(DATES.DATE_2000_01_01_00_00));
  expect(isNightTime()).toEqual(true);
  expect(isNightTime()).toEqual(!isDayTime());
});

test("night time 2001_01_01_01_02", () => {
  jest.setSystemTime(new Date(DATES.DATE_2001_01_01_01_02));
  expect(isNightTime()).toEqual(true);
  expect(isNightTime()).toEqual(!isDayTime());
});

test("night time 2002_02_02_02_04", () => {
  jest.setSystemTime(new Date(DATES.DATE_2002_02_02_02_04));
  expect(isNightTime()).toEqual(true);
  expect(isNightTime()).toEqual(!isDayTime());
});

test("night time 2003_03_03_03_06", () => {
  jest.setSystemTime(new Date(DATES.DATE_2003_03_03_03_06));
  expect(isNightTime()).toEqual(true);
  expect(isNightTime()).toEqual(!isDayTime());
});

test("night time 2004_04_04_04_08", () => {
  jest.setSystemTime(new Date(DATES.DATE_2004_04_04_04_08));
  expect(isNightTime()).toEqual(true);
  expect(isNightTime()).toEqual(!isDayTime());
});

test("night time 2005_05_05_05_10", () => {
  jest.setSystemTime(new Date(DATES.DATE_2005_05_05_05_10));
  expect(isNightTime()).toEqual(true);
  expect(isNightTime()).toEqual(!isDayTime());
});

test("night time 2006_06_06_06_12", () => {
  jest.setSystemTime(new Date(DATES.DATE_2006_06_06_06_12));
  expect(isNightTime()).toEqual(false);
  expect(isNightTime()).toEqual(!isDayTime());
});

test("night time 2007_07_07_07_14", () => {
  jest.setSystemTime(new Date(DATES.DATE_2007_07_07_07_14));
  expect(isNightTime()).toEqual(false);
  expect(isNightTime()).toEqual(!isDayTime());
});

test("night time 2008_08_08_08_16", () => {
  jest.setSystemTime(new Date(DATES.DATE_2008_08_08_08_16));
  expect(isNightTime()).toEqual(false);
  expect(isNightTime()).toEqual(!isDayTime());
});

test("night time 2009_09_09_09_18", () => {
  jest.setSystemTime(new Date(DATES.DATE_2009_09_09_09_18));
  expect(isNightTime()).toEqual(false);
  expect(isNightTime()).toEqual(!isDayTime());
});

test("night time 2010_10_10_10_20", () => {
  jest.setSystemTime(new Date(DATES.DATE_2010_10_10_10_20));
  expect(isNightTime()).toEqual(false);
  expect(isNightTime()).toEqual(!isDayTime());
});

test("night time 2011_11_11_11_22", () => {
  jest.setSystemTime(new Date(DATES.DATE_2011_11_11_11_22));
  expect(isNightTime()).toEqual(false);
  expect(isNightTime()).toEqual(!isDayTime());
});

test("night time 2012_12_12_12_24", () => {
  jest.setSystemTime(new Date(DATES.DATE_2012_12_12_12_24));
  expect(isNightTime()).toEqual(false);
  expect(isNightTime()).toEqual(!isDayTime());
});

test("night time 2013_03_13_13_26", () => {
  jest.setSystemTime(new Date(DATES.DATE_2013_03_13_13_26));
  expect(isNightTime()).toEqual(false);
  expect(isNightTime()).toEqual(!isDayTime());
});

test("night time 2014_04_14_14_28", () => {
  jest.setSystemTime(new Date(DATES.DATE_2014_04_14_14_28));
  expect(isNightTime()).toEqual(false);
  expect(isNightTime()).toEqual(!isDayTime());
});

test("night time 2015_05_15_15_30", () => {
  jest.setSystemTime(new Date(DATES.DATE_2015_05_15_15_30));
  expect(isNightTime()).toEqual(false);
  expect(isNightTime()).toEqual(!isDayTime());
});

test("night time 2016_06_16_16_32", () => {
  jest.setSystemTime(new Date(DATES.DATE_2016_06_16_16_32));
  expect(isNightTime()).toEqual(false);
  expect(isNightTime()).toEqual(!isDayTime());
});

test("night time 2017_07_17_17_34", () => {
  jest.setSystemTime(new Date(DATES.DATE_2017_07_17_17_34));
  expect(isNightTime()).toEqual(false);
  expect(isNightTime()).toEqual(!isDayTime());
});

test("night time 2018_08_18_18_36", () => {
  jest.setSystemTime(new Date(DATES.DATE_2018_08_18_18_36));
  expect(isNightTime()).toEqual(true);
  expect(isNightTime()).toEqual(!isDayTime());
});

test("night time 2019_09_19_19_38", () => {
  jest.setSystemTime(new Date(DATES.DATE_2019_09_19_19_38));
  expect(isNightTime()).toEqual(true);
  expect(isNightTime()).toEqual(!isDayTime());
});

test("night time 2020_02_20_20_40", () => {
  jest.setSystemTime(new Date(DATES.DATE_2020_02_20_20_40));
  expect(isNightTime()).toEqual(true);
  expect(isNightTime()).toEqual(!isDayTime());
});

test("night time 2021_01_21_21_42", () => {
  jest.setSystemTime(new Date(DATES.DATE_2021_01_21_21_42));
  expect(isNightTime()).toEqual(true);
  expect(isNightTime()).toEqual(!isDayTime());
});

test("night time 2022_02_22_22_44", () => {
  jest.setSystemTime(new Date(DATES.DATE_2022_02_22_22_44));
  expect(isNightTime()).toEqual(true);
  expect(isNightTime()).toEqual(!isDayTime());
});

test("night time 2023_03_23_23_46", () => {
  jest.setSystemTime(new Date(DATES.DATE_2023_03_23_23_46));
  expect(isNightTime()).toEqual(true);
  expect(isNightTime()).toEqual(!isDayTime());
});

test("night time 2024_04_24_00_48", () => {
  jest.setSystemTime(new Date(DATES.DATE_2024_04_24_00_48));
  expect(isNightTime()).toEqual(true);
  expect(isNightTime()).toEqual(!isDayTime());
});
