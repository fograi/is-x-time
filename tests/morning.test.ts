import { isMorning, isNight, isAfternoon, isEvening } from "../src/index";
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

test("morning 1999_12_31_23_59", () => {
  jest.setSystemTime(new Date(DATES.DATE_1999_12_31_23_59));
  expect(isMorning()).toEqual(false);
  expect(isMorning()).toEqual(!isNight() && !isAfternoon() && !isEvening());
});

test("morning 2000_01_01_00_00", () => {
  jest.setSystemTime(new Date(DATES.DATE_2000_01_01_00_00));
  expect(isMorning()).toEqual(false);
  expect(isMorning()).toEqual(!isNight() && !isAfternoon() && !isEvening());
});

test("morning 2001_01_01_01_02", () => {
  jest.setSystemTime(new Date(DATES.DATE_2001_01_01_01_02));
  expect(isMorning()).toEqual(false);
  expect(isMorning()).toEqual(!isNight() && !isAfternoon() && !isEvening());
});

test("morning 2002_02_02_02_04", () => {
  jest.setSystemTime(new Date(DATES.DATE_2002_02_02_02_04));
  expect(isMorning()).toEqual(false);
  expect(isMorning()).toEqual(!isNight() && !isAfternoon() && !isEvening());
});

test("morning 2003_03_03_03_06", () => {
  jest.setSystemTime(new Date(DATES.DATE_2003_03_03_03_06));
  expect(isMorning()).toEqual(false);
  expect(isMorning()).toEqual(!isNight() && !isAfternoon() && !isEvening());
});

test("morning 2004_04_04_04_08", () => {
  jest.setSystemTime(new Date(DATES.DATE_2004_04_04_04_08));
  expect(isMorning()).toEqual(false);
  expect(isMorning()).toEqual(!isNight() && !isAfternoon() && !isEvening());
});

test("morning 2005_05_05_05_10", () => {
  jest.setSystemTime(new Date(DATES.DATE_2005_05_05_05_10));
  expect(isMorning()).toEqual(false);
  expect(isMorning()).toEqual(!isNight() && !isAfternoon() && !isEvening());
});

test("morning 2006_06_06_06_12", () => {
  jest.setSystemTime(new Date(DATES.DATE_2006_06_06_06_12));
  expect(isMorning()).toEqual(true);
  expect(isMorning()).toEqual(!isNight() && !isAfternoon() && !isEvening());
});

test("morning 2007_07_07_07_14", () => {
  jest.setSystemTime(new Date(DATES.DATE_2007_07_07_07_14));
  expect(isMorning()).toEqual(true);
  expect(isMorning()).toEqual(!isNight() && !isAfternoon() && !isEvening());
});

test("morning 2008_08_08_08_16", () => {
  jest.setSystemTime(new Date(DATES.DATE_2008_08_08_08_16));
  expect(isMorning()).toEqual(true);
  expect(isMorning()).toEqual(!isNight() && !isAfternoon() && !isEvening());
});

test("morning 2009_09_09_09_18", () => {
  jest.setSystemTime(new Date(DATES.DATE_2009_09_09_09_18));
  expect(isMorning()).toEqual(true);
  expect(isMorning()).toEqual(!isNight() && !isAfternoon() && !isEvening());
});

test("morning 2010_10_10_10_20", () => {
  jest.setSystemTime(new Date(DATES.DATE_2010_10_10_10_20));
  expect(isMorning()).toEqual(true);
  expect(isMorning()).toEqual(!isNight() && !isAfternoon() && !isEvening());
});

test("morning 2011_11_11_11_22", () => {
  jest.setSystemTime(new Date(DATES.DATE_2011_11_11_11_22));
  expect(isMorning()).toEqual(true);
  expect(isMorning()).toEqual(!isNight() && !isAfternoon() && !isEvening());
});

test("morning 2012_12_12_12_24", () => {
  jest.setSystemTime(new Date(DATES.DATE_2012_12_12_12_24));
  expect(isMorning()).toEqual(false);
  expect(isMorning()).toEqual(!isNight() && !isAfternoon() && !isEvening());
});

test("morning 2013_03_13_13_26", () => {
  jest.setSystemTime(new Date(DATES.DATE_2013_03_13_13_26));
  expect(isMorning()).toEqual(false);
  expect(isMorning()).toEqual(!isNight() && !isAfternoon() && !isEvening());
});

test("morning 2014_04_14_14_28", () => {
  jest.setSystemTime(new Date(DATES.DATE_2014_04_14_14_28));
  expect(isMorning()).toEqual(false);
  expect(isMorning()).toEqual(!isNight() && !isAfternoon() && !isEvening());
});

test("morning 2015_05_15_15_30", () => {
  jest.setSystemTime(new Date(DATES.DATE_2015_05_15_15_30));
  expect(isMorning()).toEqual(false);
  expect(isMorning()).toEqual(!isNight() && !isAfternoon() && !isEvening());
});

test("morning 2016_06_16_16_32", () => {
  jest.setSystemTime(new Date(DATES.DATE_2016_06_16_16_32));
  expect(isMorning()).toEqual(false);
  expect(isMorning()).toEqual(!isNight() && !isAfternoon() && !isEvening());
});

test("morning 2017_07_17_17_34", () => {
  jest.setSystemTime(new Date(DATES.DATE_2017_07_17_17_34));
  expect(isMorning()).toEqual(false);
  expect(isMorning()).toEqual(!isNight() && !isAfternoon() && !isEvening());
});

test("morning 2018_08_18_18_36", () => {
  jest.setSystemTime(new Date(DATES.DATE_2018_08_18_18_36));
  expect(isMorning()).toEqual(false);
  expect(isMorning()).toEqual(!isNight() && !isAfternoon() && !isEvening());
});

test("morning 2019_09_19_19_38", () => {
  jest.setSystemTime(new Date(DATES.DATE_2019_09_19_19_38));
  expect(isMorning()).toEqual(false);
  expect(isMorning()).toEqual(!isNight() && !isAfternoon() && !isEvening());
});

test("morning 2020_02_20_20_40", () => {
  jest.setSystemTime(new Date(DATES.DATE_2020_02_20_20_40));
  expect(isMorning()).toEqual(false);
  expect(isMorning()).toEqual(!isNight() && !isAfternoon() && !isEvening());
});

test("morning 2021_01_21_21_42", () => {
  jest.setSystemTime(new Date(DATES.DATE_2021_01_21_21_42));
  expect(isMorning()).toEqual(false);
  expect(isMorning()).toEqual(!isNight() && !isAfternoon() && !isEvening());
});

test("morning 2022_02_22_22_44", () => {
  jest.setSystemTime(new Date(DATES.DATE_2022_02_22_22_44));
  expect(isMorning()).toEqual(false);
  expect(isMorning()).toEqual(!isNight() && !isAfternoon() && !isEvening());
});

test("morning 2023_03_23_23_46", () => {
  jest.setSystemTime(new Date(DATES.DATE_2023_03_23_23_46));
  expect(isMorning()).toEqual(false);
  expect(isMorning()).toEqual(!isNight() && !isAfternoon() && !isEvening());
});

test("morning 2024_04_24_00_48", () => {
  jest.setSystemTime(new Date(DATES.DATE_2024_04_24_00_48));
  expect(isMorning()).toEqual(false);
  expect(isMorning()).toEqual(!isNight() && !isAfternoon() && !isEvening());
});
