import { isDayShift, isEveningShift, isNightShift } from "../src/index";
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

test("day shift 1999_12_31_23_59", () => {
  jest.setSystemTime(new Date(DATES.DATE_1999_12_31_23_59));
  expect(isDayShift()).toEqual(false);
  expect(isDayShift()).toEqual(!isEveningShift() && !isNightShift());
});

test("day shift 2000_01_01_00_00", () => {
  jest.setSystemTime(new Date(DATES.DATE_2000_01_01_00_00));
  expect(isDayShift()).toEqual(false);
  expect(isDayShift()).toEqual(!isEveningShift() && !isNightShift());
});

test("day shift 2001_01_01_01_02", () => {
  jest.setSystemTime(new Date(DATES.DATE_2001_01_01_01_02));
  expect(isDayShift()).toEqual(false);
  expect(isDayShift()).toEqual(!isEveningShift() && !isNightShift());
});

test("day shift 2002_02_02_02_04", () => {
  jest.setSystemTime(new Date(DATES.DATE_2002_02_02_02_04));
  expect(isDayShift()).toEqual(false);
  expect(isDayShift()).toEqual(!isEveningShift() && !isNightShift());
});

test("day shift 2003_03_03_03_06", () => {
  jest.setSystemTime(new Date(DATES.DATE_2003_03_03_03_06));
  expect(isDayShift()).toEqual(false);
  expect(isDayShift()).toEqual(!isEveningShift() && !isNightShift());
});

test("day shift 2004_04_04_04_08", () => {
  jest.setSystemTime(new Date(DATES.DATE_2004_04_04_04_08));
  expect(isDayShift()).toEqual(false);
  expect(isDayShift()).toEqual(!isEveningShift() && !isNightShift());
});

test("day shift 2005_05_05_05_10", () => {
  jest.setSystemTime(new Date(DATES.DATE_2005_05_05_05_10));
  expect(isDayShift()).toEqual(false);
  expect(isDayShift()).toEqual(!isEveningShift() && !isNightShift());
});

test("day shift 2006_06_06_06_12", () => {
  jest.setSystemTime(new Date(DATES.DATE_2006_06_06_06_12));
  expect(isDayShift()).toEqual(false);
  expect(isDayShift()).toEqual(!isEveningShift() && !isNightShift());
});

test("day shift 2007_07_07_07_14", () => {
  jest.setSystemTime(new Date(DATES.DATE_2007_07_07_07_14));
  expect(isDayShift()).toEqual(false);
  expect(isDayShift()).toEqual(!isEveningShift() && !isNightShift());
});

test("day shift 2008_08_08_08_16", () => {
  jest.setSystemTime(new Date(DATES.DATE_2008_08_08_08_16));
  expect(isDayShift()).toEqual(true);
  expect(isDayShift()).toEqual(!isEveningShift() && !isNightShift());
});

test("day shift 2009_09_09_09_18", () => {
  jest.setSystemTime(new Date(DATES.DATE_2009_09_09_09_18));
  expect(isDayShift()).toEqual(true);
  expect(isDayShift()).toEqual(!isEveningShift() && !isNightShift());
});

test("day shift 2010_10_10_10_20", () => {
  jest.setSystemTime(new Date(DATES.DATE_2010_10_10_10_20));
  expect(isDayShift()).toEqual(true);
  expect(isDayShift()).toEqual(!isEveningShift() && !isNightShift());
});

test("day shift 2011_11_11_11_22", () => {
  jest.setSystemTime(new Date(DATES.DATE_2011_11_11_11_22));
  expect(isDayShift()).toEqual(true);
  expect(isDayShift()).toEqual(!isEveningShift() && !isNightShift());
});

test("day shift 2012_12_12_12_24", () => {
  jest.setSystemTime(new Date(DATES.DATE_2012_12_12_12_24));
  expect(isDayShift()).toEqual(true);
  expect(isDayShift()).toEqual(!isEveningShift() && !isNightShift());
});

test("day shift 2013_03_13_13_26", () => {
  jest.setSystemTime(new Date(DATES.DATE_2013_03_13_13_26));
  expect(isDayShift()).toEqual(true);
  expect(isDayShift()).toEqual(!isEveningShift() && !isNightShift());
});

test("day shift 2014_04_14_14_28", () => {
  jest.setSystemTime(new Date(DATES.DATE_2014_04_14_14_28));
  expect(isDayShift()).toEqual(true);
  expect(isDayShift()).toEqual(!isEveningShift() && !isNightShift());
});

test("day shift 2015_05_15_15_30", () => {
  jest.setSystemTime(new Date(DATES.DATE_2015_05_15_15_30));
  expect(isDayShift()).toEqual(true);
  expect(isDayShift()).toEqual(!isEveningShift() && !isNightShift());
});

test("day shift 2016_06_16_16_32", () => {
  jest.setSystemTime(new Date(DATES.DATE_2016_06_16_16_32));
  expect(isDayShift()).toEqual(false);
  expect(isDayShift()).toEqual(!isEveningShift() && !isNightShift());
});

test("day shift 2017_07_17_17_34", () => {
  jest.setSystemTime(new Date(DATES.DATE_2017_07_17_17_34));
  expect(isDayShift()).toEqual(false);
  expect(isDayShift()).toEqual(!isEveningShift() && !isNightShift());
});

test("day shift 2018_08_18_18_36", () => {
  jest.setSystemTime(new Date(DATES.DATE_2018_08_18_18_36));
  expect(isDayShift()).toEqual(false);
  expect(isDayShift()).toEqual(!isEveningShift() && !isNightShift());
});

test("day shift 2019_09_19_19_38", () => {
  jest.setSystemTime(new Date(DATES.DATE_2019_09_19_19_38));
  expect(isDayShift()).toEqual(false);
  expect(isDayShift()).toEqual(!isEveningShift() && !isNightShift());
});

test("day shift 2020_02_20_20_40", () => {
  jest.setSystemTime(new Date(DATES.DATE_2020_02_20_20_40));
  expect(isDayShift()).toEqual(false);
  expect(isDayShift()).toEqual(!isEveningShift() && !isNightShift());
});

test("day shift 2021_01_21_21_42", () => {
  jest.setSystemTime(new Date(DATES.DATE_2021_01_21_21_42));
  expect(isDayShift()).toEqual(false);
  expect(isDayShift()).toEqual(!isEveningShift() && !isNightShift());
});

test("day shift 2022_02_22_22_44", () => {
  jest.setSystemTime(new Date(DATES.DATE_2022_02_22_22_44));
  expect(isDayShift()).toEqual(false);
  expect(isDayShift()).toEqual(!isEveningShift() && !isNightShift());
});

test("day shift 2023_03_23_23_46", () => {
  jest.setSystemTime(new Date(DATES.DATE_2023_03_23_23_46));
  expect(isDayShift()).toEqual(false);
  expect(isDayShift()).toEqual(!isEveningShift() && !isNightShift());
});

test("day shift 2024_04_24_00_48", () => {
  jest.setSystemTime(new Date(DATES.DATE_2024_04_24_00_48));
  expect(isDayShift()).toEqual(false);
  expect(isDayShift()).toEqual(!isEveningShift() && !isNightShift());
});
