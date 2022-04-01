import * as MyTimes from "../src/index";
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

test("now hour", () => {
  jest.setSystemTime(new Date(DATES.DATE_1999_12_31_23_59));
  expect(MyTimes.nowHour()).toEqual(23);
  jest.setSystemTime(new Date(DATES.DATE_2000_01_01_00_00));
  expect(MyTimes.nowHour()).toEqual(0);
  jest.setSystemTime(new Date(DATES.DATE_2001_01_01_01_02));
  expect(MyTimes.nowHour()).toEqual(1);
  jest.setSystemTime(new Date(DATES.DATE_2002_02_02_02_04));
  expect(MyTimes.nowHour()).toEqual(2);
  jest.setSystemTime(new Date(DATES.DATE_2003_03_03_03_06));
  expect(MyTimes.nowHour()).toEqual(3);
  jest.setSystemTime(new Date(DATES.DATE_2004_04_04_04_08));
  expect(MyTimes.nowHour()).toEqual(4);
  jest.setSystemTime(new Date(DATES.DATE_2005_05_05_05_10));
  expect(MyTimes.nowHour()).toEqual(5);
  jest.setSystemTime(new Date(DATES.DATE_2006_06_06_06_12));
  expect(MyTimes.nowHour()).toEqual(6);
  jest.setSystemTime(new Date(DATES.DATE_2007_07_07_07_14));
  expect(MyTimes.nowHour()).toEqual(7);
  jest.setSystemTime(new Date(DATES.DATE_2008_08_08_08_16));
  expect(MyTimes.nowHour()).toEqual(8);
  jest.setSystemTime(new Date(DATES.DATE_2009_09_09_09_18));
  expect(MyTimes.nowHour()).toEqual(9);
  jest.setSystemTime(new Date(DATES.DATE_2010_10_10_10_20));
  expect(MyTimes.nowHour()).toEqual(10);
  jest.setSystemTime(new Date(DATES.DATE_2011_11_11_11_22));
  expect(MyTimes.nowHour()).toEqual(11);
  jest.setSystemTime(new Date(DATES.DATE_2012_12_12_12_24));
  expect(MyTimes.nowHour()).toEqual(12);
  jest.setSystemTime(new Date(DATES.DATE_2013_03_13_13_26));
  expect(MyTimes.nowHour()).toEqual(13);
  jest.setSystemTime(new Date(DATES.DATE_2014_04_14_14_28));
  expect(MyTimes.nowHour()).toEqual(14);
  jest.setSystemTime(new Date(DATES.DATE_2015_05_15_15_30));
  expect(MyTimes.nowHour()).toEqual(15);
  jest.setSystemTime(new Date(DATES.DATE_2016_06_16_16_32));
  expect(MyTimes.nowHour()).toEqual(16);
  jest.setSystemTime(new Date(DATES.DATE_2017_07_17_17_34));
  expect(MyTimes.nowHour()).toEqual(17);
  jest.setSystemTime(new Date(DATES.DATE_2018_08_18_18_36));
  expect(MyTimes.nowHour()).toEqual(18);
  jest.setSystemTime(new Date(DATES.DATE_2019_09_19_19_38));
  expect(MyTimes.nowHour()).toEqual(19);
  jest.setSystemTime(new Date(DATES.DATE_2020_02_20_20_40));
  expect(MyTimes.nowHour()).toEqual(20);
  jest.setSystemTime(new Date(DATES.DATE_2021_01_21_21_42));
  expect(MyTimes.nowHour()).toEqual(21);
  jest.setSystemTime(new Date(DATES.DATE_2022_02_22_22_44));
  expect(MyTimes.nowHour()).toEqual(22);
  jest.setSystemTime(new Date(DATES.DATE_2023_03_23_23_46));
  expect(MyTimes.nowHour()).toEqual(23);
  jest.setSystemTime(new Date(DATES.DATE_2024_04_24_00_48));
  expect(MyTimes.nowHour()).toEqual(0);
});
