import * as MyTimes from "../src/index";

/**
 * Covers 26 years, 12 months, 25 days, 26 hours:minutes:seconds.
 * Should be sufficient to test down to 15 minute timezones.
 */
const DATE_1999_12_31_23_59 = "1999-12-31T23:59";
const DATE_2000_01_01_00_00 = "2000-01-01T00:00";
const DATE_2001_01_01_01_02 = "2001-01-01T01:02";
const DATE_2002_02_02_02_04 = "2002-02-02T02:04";
const DATE_2003_03_03_03_06 = "2003-03-03T03:06";
const DATE_2004_04_04_04_08 = "2004-04-04T04:08";
const DATE_2005_05_05_05_10 = "2005-05-05T05:10";
const DATE_2006_06_06_06_12 = "2006-06-06T06:12";
const DATE_2007_07_07_07_14 = "2007-07-07T07:14";
const DATE_2008_08_08_08_16 = "2008-08-08T08:16";
const DATE_2009_09_09_09_18 = "2009-09-09T09:18";
const DATE_2010_10_10_10_20 = "2010-10-10T10:20";
const DATE_2011_11_11_11_22 = "2011-11-11T11:22";
const DATE_2012_12_12_12_24 = "2012-12-12T12:24";
const DATE_2013_03_13_13_26 = "2013-03-13T13:26";
const DATE_2014_04_14_14_28 = "2014-04-14T14:28";
const DATE_2015_05_15_15_30 = "2015-05-15T15:30";
const DATE_2016_06_16_16_32 = "2016-06-16T16:32";
const DATE_2017_07_17_17_34 = "2017-07-17T17:34";
const DATE_2018_08_18_18_36 = "2018-08-18T18:36";
const DATE_2019_09_19_19_38 = "2019-09-19T19:38";
const DATE_2020_02_20_20_40 = "2020-02-20T20:40";
const DATE_2021_01_21_21_42 = "2021-01-21T21:42";
const DATE_2022_02_22_22_44 = "2022-02-22T22:44";
const DATE_2023_03_23_23_46 = "2023-03-23T23:46";
const DATE_2024_04_24_00_48 = "2024-04-24T00:48";

/**
 * Covers most, if not all, unique timezones.
 */
const UTC_M11 = "Pacific/Niue";
const UTC_M10 = "Pacific/Honolulu";
const UTC_M930 = "Pacific/Marquesas";
const UTC_M9 = "Pacific/Gambier";
const UTC_M8 = "America/Vancouver";
const UTC_M7 = "America/Yellowknife";
const UTC_M6 = "America/Belize";
const UTC_M5 = "America/Havana";
const UTC_M4 = "America/Barbados";
const UTC_M330 = "America/St_Johns";
const UTC_M3 = "America/Argentina/Buenos_Aires";
const UTC_M2 = "America/Noronha";
const UTC_M1 = "Atlantic/Cape_Verde";
const UTC_0 = "Atlantic/Faroe";
const UTC_P1 = "Africa/Algiers";
const UTC_P2 = "Africa/Cairo";
const UTC_P3 = "Asia/Baghdad";
const UTC_P330 = "Asia/Tehran";
const UTC_P4 = "Indian/Mauritius";
const UTC_P430 = "Asia/Kabul";
const UTC_P5 = "Indian/Maldives";
const UTC_P530 = "Asia/Kolkata";
const UTC_P545 = "Asia/Kathmandu";
const UTC_P6 = "Asia/Omsk";
const UTC_P630 = "Indian/Cocos";
const UTC_P7 = "Indian/Christmas";
const UTC_P8 = "Asia/Brunei";
const UTC_P845 = "Australia/Eucla";
const UTC_P9 = "Pacific/Palau";
const UTC_P930 = "Australia/Broken_Hill";
const UTC_P10 = "Asia/Vladivostok";
const UTC_P1030 = "Australia/Lord_Howe";
const UTC_P11 = "Pacific/Norfolk";
const UTC_P12 = "Pacific/Fiji";
const UTC_P1245 = "Pacific/Chatham";
const UTC_P13 = "Pacific/Tongatapu";

/**
 * Covers most, if not all, unique AWS regions.
 */
const AWS_US_E_2 = "us-east-2";
const AWS_US_E_1 = "us-east-1";
const AWS_US_W_1 = "us-west-1";
const AWS_US_W_2 = "us-west-2";
const AWS_AF_S_1 = "af-south-1";
const AWS_AP_E_1 = "ap-east-1";
const AWS_AP_SE_3 = "ap-southeast-3";
const AWS_AP_S_1 = "ap-south-1";
const AWS_AP_NE_3 = "ap-northeast-3";
const AWS_AP_NE_2 = "ap-northeast-2";
const AWS_AP_SE_1 = "ap-southeast-1";
const AWS_AP_SE_2 = "ap-southeast-2";
const AWS_AP_NE_1 = "ap-northeast-1";
const AWS_CA_C_1 = "ca-central-1";
const AWS_CN_N_1 = "cn-north-1";
const AWS_CN_NW_1 = "cn-northwest-1";
const AWS_EU_C_1 = "eu-central-1";
const AWS_EU_W_1 = "eu-west-1";
const AWS_EU_W_2 = "eu-west-2";
const AWS_EU_S_1 = "eu-south-1";
const AWS_EU_W_3 = "eu-west-3";
const AWS_EU_N_1 = "eu-north-1";
const AWS_ME_S_1 = "me-south-1";
const AWS_SA_E_1 = "sa-east-1";

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
  jest.setSystemTime(new Date(DATE_1999_12_31_23_59));
  expect(MyTimes.nowHour()).toEqual(23);
  jest.setSystemTime(new Date(DATE_2000_01_01_00_00));
  expect(MyTimes.nowHour()).toEqual(0);
  jest.setSystemTime(new Date(DATE_2001_01_01_01_02));
  expect(MyTimes.nowHour()).toEqual(1);
  jest.setSystemTime(new Date(DATE_2002_02_02_02_04));
  expect(MyTimes.nowHour()).toEqual(2);
  jest.setSystemTime(new Date(DATE_2003_03_03_03_06));
  expect(MyTimes.nowHour()).toEqual(3);
  jest.setSystemTime(new Date(DATE_2004_04_04_04_08));
  expect(MyTimes.nowHour()).toEqual(4);
  jest.setSystemTime(new Date(DATE_2005_05_05_05_10));
  expect(MyTimes.nowHour()).toEqual(5);
  jest.setSystemTime(new Date(DATE_2006_06_06_06_12));
  expect(MyTimes.nowHour()).toEqual(6);
  jest.setSystemTime(new Date(DATE_2007_07_07_07_14));
  expect(MyTimes.nowHour()).toEqual(7);
  jest.setSystemTime(new Date(DATE_2008_08_08_08_16));
  expect(MyTimes.nowHour()).toEqual(8);
  jest.setSystemTime(new Date(DATE_2009_09_09_09_18));
  expect(MyTimes.nowHour()).toEqual(9);
  jest.setSystemTime(new Date(DATE_2010_10_10_10_20));
  expect(MyTimes.nowHour()).toEqual(10);
  jest.setSystemTime(new Date(DATE_2011_11_11_11_22));
  expect(MyTimes.nowHour()).toEqual(11);
  jest.setSystemTime(new Date(DATE_2012_12_12_12_24));
  expect(MyTimes.nowHour()).toEqual(12);
  jest.setSystemTime(new Date(DATE_2013_03_13_13_26));
  expect(MyTimes.nowHour()).toEqual(13);
  jest.setSystemTime(new Date(DATE_2014_04_14_14_28));
  expect(MyTimes.nowHour()).toEqual(14);
  jest.setSystemTime(new Date(DATE_2015_05_15_15_30));
  expect(MyTimes.nowHour()).toEqual(15);
  jest.setSystemTime(new Date(DATE_2016_06_16_16_32));
  expect(MyTimes.nowHour()).toEqual(16);
  jest.setSystemTime(new Date(DATE_2017_07_17_17_34));
  expect(MyTimes.nowHour()).toEqual(17);
  jest.setSystemTime(new Date(DATE_2018_08_18_18_36));
  expect(MyTimes.nowHour()).toEqual(18);
  jest.setSystemTime(new Date(DATE_2019_09_19_19_38));
  expect(MyTimes.nowHour()).toEqual(19);
  jest.setSystemTime(new Date(DATE_2020_02_20_20_40));
  expect(MyTimes.nowHour()).toEqual(20);
  jest.setSystemTime(new Date(DATE_2021_01_21_21_42));
  expect(MyTimes.nowHour()).toEqual(21);
  jest.setSystemTime(new Date(DATE_2022_02_22_22_44));
  expect(MyTimes.nowHour()).toEqual(22);
  jest.setSystemTime(new Date(DATE_2023_03_23_23_46));
  expect(MyTimes.nowHour()).toEqual(23);
  jest.setSystemTime(new Date(DATE_2024_04_24_00_48));
  expect(MyTimes.nowHour()).toEqual(0);
});

test("now hour in IANATimeZone", () => {
  jest.setSystemTime(new Date(DATE_1999_12_31_23_59));
  expect(MyTimes.nowHourIn(UTC_M11)).toEqual(12);
  expect(MyTimes.nowHourIn(UTC_M10)).toEqual(13);
  expect(MyTimes.nowHourIn(UTC_M930)).toEqual(14);
  expect(MyTimes.nowHourIn(UTC_M9)).toEqual(14);
  expect(MyTimes.nowHourIn(UTC_M8)).toEqual(15);
  expect(MyTimes.nowHourIn(UTC_M7)).toEqual(16);
  expect(MyTimes.nowHourIn(UTC_M6)).toEqual(17);
  expect(MyTimes.nowHourIn(UTC_M5)).toEqual(18);
  expect(MyTimes.nowHourIn(UTC_M4)).toEqual(19);
  expect(MyTimes.nowHourIn(UTC_M330)).toEqual(20);
  expect(MyTimes.nowHourIn(UTC_M3)).toEqual(20);
  expect(MyTimes.nowHourIn(UTC_M2)).toEqual(22);
  expect(MyTimes.nowHourIn(UTC_M1)).toEqual(22);
  expect(MyTimes.nowHourIn(UTC_0)).toEqual(23);
  expect(MyTimes.nowHourIn(UTC_P1)).toEqual(0);
  expect(MyTimes.nowHourIn(UTC_P2)).toEqual(1);
  expect(MyTimes.nowHourIn(UTC_P3)).toEqual(2);
  expect(MyTimes.nowHourIn(UTC_P330)).toEqual(3);
  expect(MyTimes.nowHourIn(UTC_P4)).toEqual(3);
  expect(MyTimes.nowHourIn(UTC_P430)).toEqual(4);
  expect(MyTimes.nowHourIn(UTC_P5)).toEqual(4);
  expect(MyTimes.nowHourIn(UTC_P530)).toEqual(5);
  expect(MyTimes.nowHourIn(UTC_P545)).toEqual(5);
  expect(MyTimes.nowHourIn(UTC_P6)).toEqual(5);
  expect(MyTimes.nowHourIn(UTC_P630)).toEqual(6);
  expect(MyTimes.nowHourIn(UTC_P7)).toEqual(6);
  expect(MyTimes.nowHourIn(UTC_P8)).toEqual(7);
  expect(MyTimes.nowHourIn(UTC_P845)).toEqual(8);
  expect(MyTimes.nowHourIn(UTC_P9)).toEqual(8);
  expect(MyTimes.nowHourIn(UTC_P930)).toEqual(10);
  expect(MyTimes.nowHourIn(UTC_P10)).toEqual(9);
  expect(MyTimes.nowHourIn(UTC_P1030)).toEqual(10);
  expect(MyTimes.nowHourIn(UTC_P11)).toEqual(11);
  expect(MyTimes.nowHourIn(UTC_P12)).toEqual(12);
  expect(MyTimes.nowHourIn(UTC_P1245)).toEqual(13);
  expect(MyTimes.nowHourIn(UTC_P13)).toEqual(13);
  jest.setSystemTime(new Date(DATE_2000_01_01_00_00));
  expect(MyTimes.nowHourIn(UTC_M11)).toEqual(13);
  expect(MyTimes.nowHourIn(UTC_M10)).toEqual(14);
  expect(MyTimes.nowHourIn(UTC_M930)).toEqual(14);
  expect(MyTimes.nowHourIn(UTC_M9)).toEqual(15);
  expect(MyTimes.nowHourIn(UTC_M8)).toEqual(16);
  expect(MyTimes.nowHourIn(UTC_M7)).toEqual(17);
  expect(MyTimes.nowHourIn(UTC_M6)).toEqual(18);
  expect(MyTimes.nowHourIn(UTC_M5)).toEqual(19);
  expect(MyTimes.nowHourIn(UTC_M4)).toEqual(20);
  expect(MyTimes.nowHourIn(UTC_M330)).toEqual(20);
  expect(MyTimes.nowHourIn(UTC_M3)).toEqual(21);
  expect(MyTimes.nowHourIn(UTC_M2)).toEqual(23);
  expect(MyTimes.nowHourIn(UTC_M1)).toEqual(23);
  expect(MyTimes.nowHourIn(UTC_0)).toEqual(0);
  expect(MyTimes.nowHourIn(UTC_P1)).toEqual(1);
  expect(MyTimes.nowHourIn(UTC_P2)).toEqual(2);
  expect(MyTimes.nowHourIn(UTC_P3)).toEqual(3);
  expect(MyTimes.nowHourIn(UTC_P330)).toEqual(3);
  expect(MyTimes.nowHourIn(UTC_P4)).toEqual(4);
  expect(MyTimes.nowHourIn(UTC_P430)).toEqual(4);
  expect(MyTimes.nowHourIn(UTC_P5)).toEqual(5);
  expect(MyTimes.nowHourIn(UTC_P530)).toEqual(5);
  expect(MyTimes.nowHourIn(UTC_P545)).toEqual(5);
  expect(MyTimes.nowHourIn(UTC_P6)).toEqual(6);
  expect(MyTimes.nowHourIn(UTC_P630)).toEqual(6);
  expect(MyTimes.nowHourIn(UTC_P7)).toEqual(7);
  expect(MyTimes.nowHourIn(UTC_P8)).toEqual(8);
  expect(MyTimes.nowHourIn(UTC_P845)).toEqual(8);
  expect(MyTimes.nowHourIn(UTC_P9)).toEqual(9);
  expect(MyTimes.nowHourIn(UTC_P930)).toEqual(10);
  expect(MyTimes.nowHourIn(UTC_P10)).toEqual(10);
  expect(MyTimes.nowHourIn(UTC_P1030)).toEqual(11);
  expect(MyTimes.nowHourIn(UTC_P11)).toEqual(11);
  expect(MyTimes.nowHourIn(UTC_P12)).toEqual(13);
  expect(MyTimes.nowHourIn(UTC_P1245)).toEqual(13);
  expect(MyTimes.nowHourIn(UTC_P13)).toEqual(14);
  jest.setSystemTime(new Date(DATE_2001_01_01_01_02));
  expect(MyTimes.nowHourIn(UTC_M11)).toEqual(14);
  expect(MyTimes.nowHourIn(UTC_M10)).toEqual(15);
  expect(MyTimes.nowHourIn(UTC_M930)).toEqual(15);
  expect(MyTimes.nowHourIn(UTC_M9)).toEqual(16);
  expect(MyTimes.nowHourIn(UTC_M8)).toEqual(17);
  expect(MyTimes.nowHourIn(UTC_M7)).toEqual(18);
  expect(MyTimes.nowHourIn(UTC_M6)).toEqual(19);
  expect(MyTimes.nowHourIn(UTC_M5)).toEqual(20);
  expect(MyTimes.nowHourIn(UTC_M4)).toEqual(21);
  expect(MyTimes.nowHourIn(UTC_M330)).toEqual(21);
  expect(MyTimes.nowHourIn(UTC_M3)).toEqual(22);
  expect(MyTimes.nowHourIn(UTC_M2)).toEqual(23);
  expect(MyTimes.nowHourIn(UTC_M1)).toEqual(0);
  expect(MyTimes.nowHourIn(UTC_0)).toEqual(1);
  expect(MyTimes.nowHourIn(UTC_P1)).toEqual(2);
  expect(MyTimes.nowHourIn(UTC_P2)).toEqual(3);
  expect(MyTimes.nowHourIn(UTC_P3)).toEqual(4);
  expect(MyTimes.nowHourIn(UTC_P330)).toEqual(4);
  expect(MyTimes.nowHourIn(UTC_P4)).toEqual(5);
  expect(MyTimes.nowHourIn(UTC_P430)).toEqual(5);
  expect(MyTimes.nowHourIn(UTC_P5)).toEqual(6);
  expect(MyTimes.nowHourIn(UTC_P530)).toEqual(6);
  expect(MyTimes.nowHourIn(UTC_P545)).toEqual(6);
  expect(MyTimes.nowHourIn(UTC_P6)).toEqual(7);
  expect(MyTimes.nowHourIn(UTC_P630)).toEqual(7);
  expect(MyTimes.nowHourIn(UTC_P7)).toEqual(8);
  expect(MyTimes.nowHourIn(UTC_P8)).toEqual(9);
  expect(MyTimes.nowHourIn(UTC_P845)).toEqual(9);
  expect(MyTimes.nowHourIn(UTC_P9)).toEqual(10);
  expect(MyTimes.nowHourIn(UTC_P930)).toEqual(11);
  expect(MyTimes.nowHourIn(UTC_P10)).toEqual(11);
  expect(MyTimes.nowHourIn(UTC_P1030)).toEqual(12);
  expect(MyTimes.nowHourIn(UTC_P11)).toEqual(12);
  expect(MyTimes.nowHourIn(UTC_P12)).toEqual(13);
  expect(MyTimes.nowHourIn(UTC_P1245)).toEqual(14);
  expect(MyTimes.nowHourIn(UTC_P13)).toEqual(15);
  jest.setSystemTime(new Date(DATE_2002_02_02_02_04));
  expect(MyTimes.nowHourIn(UTC_M11)).toEqual(15);
  expect(MyTimes.nowHourIn(UTC_M10)).toEqual(16);
  expect(MyTimes.nowHourIn(UTC_M930)).toEqual(16);
  expect(MyTimes.nowHourIn(UTC_M9)).toEqual(17);
  expect(MyTimes.nowHourIn(UTC_M8)).toEqual(18);
  expect(MyTimes.nowHourIn(UTC_M7)).toEqual(19);
  expect(MyTimes.nowHourIn(UTC_M6)).toEqual(20);
  expect(MyTimes.nowHourIn(UTC_M5)).toEqual(21);
  expect(MyTimes.nowHourIn(UTC_M4)).toEqual(22);
  expect(MyTimes.nowHourIn(UTC_M330)).toEqual(22);
  expect(MyTimes.nowHourIn(UTC_M3)).toEqual(23);
  expect(MyTimes.nowHourIn(UTC_M2)).toEqual(1);
  expect(MyTimes.nowHourIn(UTC_M1)).toEqual(1);
  expect(MyTimes.nowHourIn(UTC_0)).toEqual(2);
  expect(MyTimes.nowHourIn(UTC_P1)).toEqual(3);
  expect(MyTimes.nowHourIn(UTC_P2)).toEqual(4);
  expect(MyTimes.nowHourIn(UTC_P3)).toEqual(5);
  expect(MyTimes.nowHourIn(UTC_P330)).toEqual(5);
  expect(MyTimes.nowHourIn(UTC_P4)).toEqual(6);
  expect(MyTimes.nowHourIn(UTC_P430)).toEqual(6);
  expect(MyTimes.nowHourIn(UTC_P5)).toEqual(7);
  expect(MyTimes.nowHourIn(UTC_P530)).toEqual(7);
  expect(MyTimes.nowHourIn(UTC_P545)).toEqual(7);
  expect(MyTimes.nowHourIn(UTC_P6)).toEqual(8);
  expect(MyTimes.nowHourIn(UTC_P630)).toEqual(8);
  expect(MyTimes.nowHourIn(UTC_P7)).toEqual(9);
  expect(MyTimes.nowHourIn(UTC_P8)).toEqual(10);
  expect(MyTimes.nowHourIn(UTC_P845)).toEqual(10);
  expect(MyTimes.nowHourIn(UTC_P9)).toEqual(11);
  expect(MyTimes.nowHourIn(UTC_P930)).toEqual(12);
  expect(MyTimes.nowHourIn(UTC_P10)).toEqual(12);
  expect(MyTimes.nowHourIn(UTC_P1030)).toEqual(13);
  expect(MyTimes.nowHourIn(UTC_P11)).toEqual(13);
  expect(MyTimes.nowHourIn(UTC_P12)).toEqual(14);
  expect(MyTimes.nowHourIn(UTC_P1245)).toEqual(15);
  expect(MyTimes.nowHourIn(UTC_P13)).toEqual(15);
  jest.setSystemTime(new Date(DATE_2003_03_03_03_06));
  expect(MyTimes.nowHourIn(UTC_M11)).toEqual(16);
  expect(MyTimes.nowHourIn(UTC_M10)).toEqual(17);
  expect(MyTimes.nowHourIn(UTC_M930)).toEqual(17);
  expect(MyTimes.nowHourIn(UTC_M9)).toEqual(18);
  expect(MyTimes.nowHourIn(UTC_M8)).toEqual(19);
  expect(MyTimes.nowHourIn(UTC_M7)).toEqual(20);
  expect(MyTimes.nowHourIn(UTC_M6)).toEqual(21);
  expect(MyTimes.nowHourIn(UTC_M5)).toEqual(22);
  expect(MyTimes.nowHourIn(UTC_M4)).toEqual(23);
  expect(MyTimes.nowHourIn(UTC_M330)).toEqual(23);
  expect(MyTimes.nowHourIn(UTC_M3)).toEqual(0);
  expect(MyTimes.nowHourIn(UTC_M2)).toEqual(1);
  expect(MyTimes.nowHourIn(UTC_M1)).toEqual(2);
  expect(MyTimes.nowHourIn(UTC_0)).toEqual(3);
  expect(MyTimes.nowHourIn(UTC_P1)).toEqual(4);
  expect(MyTimes.nowHourIn(UTC_P2)).toEqual(5);
  expect(MyTimes.nowHourIn(UTC_P3)).toEqual(6);
  expect(MyTimes.nowHourIn(UTC_P330)).toEqual(6);
  expect(MyTimes.nowHourIn(UTC_P4)).toEqual(7);
  expect(MyTimes.nowHourIn(UTC_P430)).toEqual(7);
  expect(MyTimes.nowHourIn(UTC_P5)).toEqual(8);
  expect(MyTimes.nowHourIn(UTC_P530)).toEqual(8);
  expect(MyTimes.nowHourIn(UTC_P545)).toEqual(8);
  expect(MyTimes.nowHourIn(UTC_P6)).toEqual(9);
  expect(MyTimes.nowHourIn(UTC_P630)).toEqual(9);
  expect(MyTimes.nowHourIn(UTC_P7)).toEqual(10);
  expect(MyTimes.nowHourIn(UTC_P8)).toEqual(11);
  expect(MyTimes.nowHourIn(UTC_P845)).toEqual(11);
  expect(MyTimes.nowHourIn(UTC_P9)).toEqual(12);
  expect(MyTimes.nowHourIn(UTC_P930)).toEqual(13);
  expect(MyTimes.nowHourIn(UTC_P10)).toEqual(13);
  expect(MyTimes.nowHourIn(UTC_P1030)).toEqual(14);
  expect(MyTimes.nowHourIn(UTC_P11)).toEqual(14);
  expect(MyTimes.nowHourIn(UTC_P12)).toEqual(15);
  expect(MyTimes.nowHourIn(UTC_P1245)).toEqual(16);
  expect(MyTimes.nowHourIn(UTC_P13)).toEqual(16);
  jest.setSystemTime(new Date(DATE_2004_04_04_04_08));
  expect(MyTimes.nowHourIn(UTC_M11)).toEqual(17);
  expect(MyTimes.nowHourIn(UTC_M10)).toEqual(18);
  expect(MyTimes.nowHourIn(UTC_M930)).toEqual(18);
  expect(MyTimes.nowHourIn(UTC_M9)).toEqual(19);
  expect(MyTimes.nowHourIn(UTC_M8)).toEqual(20);
  expect(MyTimes.nowHourIn(UTC_M7)).toEqual(21);
  expect(MyTimes.nowHourIn(UTC_M6)).toEqual(22);
  expect(MyTimes.nowHourIn(UTC_M5)).toEqual(0);
  expect(MyTimes.nowHourIn(UTC_M4)).toEqual(0);
  expect(MyTimes.nowHourIn(UTC_M330)).toEqual(1);
  expect(MyTimes.nowHourIn(UTC_M3)).toEqual(1);
  expect(MyTimes.nowHourIn(UTC_M2)).toEqual(2);
  expect(MyTimes.nowHourIn(UTC_M1)).toEqual(3);
  expect(MyTimes.nowHourIn(UTC_0)).toEqual(5);
  expect(MyTimes.nowHourIn(UTC_P1)).toEqual(5);
  expect(MyTimes.nowHourIn(UTC_P2)).toEqual(6);
  expect(MyTimes.nowHourIn(UTC_P3)).toEqual(8);
  expect(MyTimes.nowHourIn(UTC_P330)).toEqual(8);
  expect(MyTimes.nowHourIn(UTC_P4)).toEqual(8);
  expect(MyTimes.nowHourIn(UTC_P430)).toEqual(8);
  expect(MyTimes.nowHourIn(UTC_P5)).toEqual(9);
  expect(MyTimes.nowHourIn(UTC_P530)).toEqual(9);
  expect(MyTimes.nowHourIn(UTC_P545)).toEqual(9);
  expect(MyTimes.nowHourIn(UTC_P6)).toEqual(11);
  expect(MyTimes.nowHourIn(UTC_P630)).toEqual(10);
  expect(MyTimes.nowHourIn(UTC_P7)).toEqual(11);
  expect(MyTimes.nowHourIn(UTC_P8)).toEqual(12);
  expect(MyTimes.nowHourIn(UTC_P845)).toEqual(12);
  expect(MyTimes.nowHourIn(UTC_P9)).toEqual(13);
  expect(MyTimes.nowHourIn(UTC_P930)).toEqual(13);
  expect(MyTimes.nowHourIn(UTC_P10)).toEqual(15);
  expect(MyTimes.nowHourIn(UTC_P1030)).toEqual(14);
  expect(MyTimes.nowHourIn(UTC_P11)).toEqual(15);
  expect(MyTimes.nowHourIn(UTC_P12)).toEqual(16);
  expect(MyTimes.nowHourIn(UTC_P1245)).toEqual(16);
  expect(MyTimes.nowHourIn(UTC_P13)).toEqual(17);
  jest.setSystemTime(new Date(DATE_2005_05_05_05_10));
  expect(MyTimes.nowHourIn(UTC_M11)).toEqual(18);
  expect(MyTimes.nowHourIn(UTC_M10)).toEqual(19);
  expect(MyTimes.nowHourIn(UTC_M930)).toEqual(19);
  expect(MyTimes.nowHourIn(UTC_M9)).toEqual(20);
  expect(MyTimes.nowHourIn(UTC_M8)).toEqual(22);
  expect(MyTimes.nowHourIn(UTC_M7)).toEqual(23);
  expect(MyTimes.nowHourIn(UTC_M6)).toEqual(23);
  expect(MyTimes.nowHourIn(UTC_M5)).toEqual(1);
  expect(MyTimes.nowHourIn(UTC_M4)).toEqual(1);
  expect(MyTimes.nowHourIn(UTC_M330)).toEqual(2);
  expect(MyTimes.nowHourIn(UTC_M3)).toEqual(2);
  expect(MyTimes.nowHourIn(UTC_M2)).toEqual(3);
  expect(MyTimes.nowHourIn(UTC_M1)).toEqual(4);
  expect(MyTimes.nowHourIn(UTC_0)).toEqual(6);
  expect(MyTimes.nowHourIn(UTC_P1)).toEqual(6);
  expect(MyTimes.nowHourIn(UTC_P2)).toEqual(8);
  expect(MyTimes.nowHourIn(UTC_P3)).toEqual(9);
  expect(MyTimes.nowHourIn(UTC_P330)).toEqual(9);
  expect(MyTimes.nowHourIn(UTC_P4)).toEqual(9);
  expect(MyTimes.nowHourIn(UTC_P430)).toEqual(9);
  expect(MyTimes.nowHourIn(UTC_P5)).toEqual(10);
  expect(MyTimes.nowHourIn(UTC_P530)).toEqual(10);
  expect(MyTimes.nowHourIn(UTC_P545)).toEqual(10);
  expect(MyTimes.nowHourIn(UTC_P6)).toEqual(12);
  expect(MyTimes.nowHourIn(UTC_P630)).toEqual(11);
  expect(MyTimes.nowHourIn(UTC_P7)).toEqual(12);
  expect(MyTimes.nowHourIn(UTC_P8)).toEqual(13);
  expect(MyTimes.nowHourIn(UTC_P845)).toEqual(13);
  expect(MyTimes.nowHourIn(UTC_P9)).toEqual(14);
  expect(MyTimes.nowHourIn(UTC_P930)).toEqual(14);
  expect(MyTimes.nowHourIn(UTC_P10)).toEqual(16);
  expect(MyTimes.nowHourIn(UTC_P1030)).toEqual(15);
  expect(MyTimes.nowHourIn(UTC_P11)).toEqual(16);
  expect(MyTimes.nowHourIn(UTC_P12)).toEqual(17);
  expect(MyTimes.nowHourIn(UTC_P1245)).toEqual(17);
  expect(MyTimes.nowHourIn(UTC_P13)).toEqual(18);
  jest.setSystemTime(new Date(DATE_2006_06_06_06_12));
  expect(MyTimes.nowHourIn(UTC_M11)).toEqual(19);
  expect(MyTimes.nowHourIn(UTC_M10)).toEqual(20);
  expect(MyTimes.nowHourIn(UTC_M930)).toEqual(20);
  expect(MyTimes.nowHourIn(UTC_M9)).toEqual(21);
  expect(MyTimes.nowHourIn(UTC_M8)).toEqual(23);
  expect(MyTimes.nowHourIn(UTC_M7)).toEqual(0);
  expect(MyTimes.nowHourIn(UTC_M6)).toEqual(0);
  expect(MyTimes.nowHourIn(UTC_M5)).toEqual(2);
  expect(MyTimes.nowHourIn(UTC_M4)).toEqual(2);
  expect(MyTimes.nowHourIn(UTC_M330)).toEqual(3);
  expect(MyTimes.nowHourIn(UTC_M3)).toEqual(3);
  expect(MyTimes.nowHourIn(UTC_M2)).toEqual(4);
  expect(MyTimes.nowHourIn(UTC_M1)).toEqual(5);
  expect(MyTimes.nowHourIn(UTC_0)).toEqual(7);
  expect(MyTimes.nowHourIn(UTC_P1)).toEqual(7);
  expect(MyTimes.nowHourIn(UTC_P2)).toEqual(9);
  expect(MyTimes.nowHourIn(UTC_P3)).toEqual(10);
  expect(MyTimes.nowHourIn(UTC_P330)).toEqual(9);
  expect(MyTimes.nowHourIn(UTC_P4)).toEqual(10);
  expect(MyTimes.nowHourIn(UTC_P430)).toEqual(10);
  expect(MyTimes.nowHourIn(UTC_P5)).toEqual(11);
  expect(MyTimes.nowHourIn(UTC_P530)).toEqual(11);
  expect(MyTimes.nowHourIn(UTC_P545)).toEqual(11);
  expect(MyTimes.nowHourIn(UTC_P6)).toEqual(13);
  expect(MyTimes.nowHourIn(UTC_P630)).toEqual(12);
  expect(MyTimes.nowHourIn(UTC_P7)).toEqual(13);
  expect(MyTimes.nowHourIn(UTC_P8)).toEqual(14);
  expect(MyTimes.nowHourIn(UTC_P845)).toEqual(14);
  expect(MyTimes.nowHourIn(UTC_P9)).toEqual(15);
  expect(MyTimes.nowHourIn(UTC_P930)).toEqual(15);
  expect(MyTimes.nowHourIn(UTC_P10)).toEqual(17);
  expect(MyTimes.nowHourIn(UTC_P1030)).toEqual(16);
  expect(MyTimes.nowHourIn(UTC_P11)).toEqual(17);
  expect(MyTimes.nowHourIn(UTC_P12)).toEqual(18);
  expect(MyTimes.nowHourIn(UTC_P1245)).toEqual(18);
  expect(MyTimes.nowHourIn(UTC_P13)).toEqual(19);
  jest.setSystemTime(new Date(DATE_2007_07_07_07_14));
  expect(MyTimes.nowHourIn(UTC_M11)).toEqual(20);
  expect(MyTimes.nowHourIn(UTC_M10)).toEqual(21);
  expect(MyTimes.nowHourIn(UTC_M930)).toEqual(21);
  expect(MyTimes.nowHourIn(UTC_M9)).toEqual(22);
  expect(MyTimes.nowHourIn(UTC_M8)).toEqual(0);
  expect(MyTimes.nowHourIn(UTC_M7)).toEqual(1);
  expect(MyTimes.nowHourIn(UTC_M6)).toEqual(1);
  expect(MyTimes.nowHourIn(UTC_M5)).toEqual(3);
  expect(MyTimes.nowHourIn(UTC_M4)).toEqual(3);
  expect(MyTimes.nowHourIn(UTC_M330)).toEqual(4);
  expect(MyTimes.nowHourIn(UTC_M3)).toEqual(4);
  expect(MyTimes.nowHourIn(UTC_M2)).toEqual(5);
  expect(MyTimes.nowHourIn(UTC_M1)).toEqual(6);
  expect(MyTimes.nowHourIn(UTC_0)).toEqual(8);
  expect(MyTimes.nowHourIn(UTC_P1)).toEqual(8);
  expect(MyTimes.nowHourIn(UTC_P2)).toEqual(10);
  expect(MyTimes.nowHourIn(UTC_P3)).toEqual(11);
  expect(MyTimes.nowHourIn(UTC_P330)).toEqual(10);
  expect(MyTimes.nowHourIn(UTC_P4)).toEqual(11);
  expect(MyTimes.nowHourIn(UTC_P430)).toEqual(11);
  expect(MyTimes.nowHourIn(UTC_P5)).toEqual(12);
  expect(MyTimes.nowHourIn(UTC_P530)).toEqual(12);
  expect(MyTimes.nowHourIn(UTC_P545)).toEqual(12);
  expect(MyTimes.nowHourIn(UTC_P6)).toEqual(14);
  expect(MyTimes.nowHourIn(UTC_P630)).toEqual(13);
  expect(MyTimes.nowHourIn(UTC_P7)).toEqual(14);
  expect(MyTimes.nowHourIn(UTC_P8)).toEqual(15);
  expect(MyTimes.nowHourIn(UTC_P845)).toEqual(15);
  expect(MyTimes.nowHourIn(UTC_P9)).toEqual(16);
  expect(MyTimes.nowHourIn(UTC_P930)).toEqual(16);
  expect(MyTimes.nowHourIn(UTC_P10)).toEqual(18);
  expect(MyTimes.nowHourIn(UTC_P1030)).toEqual(17);
  expect(MyTimes.nowHourIn(UTC_P11)).toEqual(18);
  expect(MyTimes.nowHourIn(UTC_P12)).toEqual(19);
  expect(MyTimes.nowHourIn(UTC_P1245)).toEqual(19);
  expect(MyTimes.nowHourIn(UTC_P13)).toEqual(20);
  jest.setSystemTime(new Date(DATE_2008_08_08_08_16));
  expect(MyTimes.nowHourIn(UTC_M11)).toEqual(21);
  expect(MyTimes.nowHourIn(UTC_M10)).toEqual(22);
  expect(MyTimes.nowHourIn(UTC_M930)).toEqual(22);
  expect(MyTimes.nowHourIn(UTC_M9)).toEqual(23);
  expect(MyTimes.nowHourIn(UTC_M8)).toEqual(1);
  expect(MyTimes.nowHourIn(UTC_M7)).toEqual(2);
  expect(MyTimes.nowHourIn(UTC_M6)).toEqual(2);
  expect(MyTimes.nowHourIn(UTC_M5)).toEqual(4);
  expect(MyTimes.nowHourIn(UTC_M4)).toEqual(4);
  expect(MyTimes.nowHourIn(UTC_M330)).toEqual(5);
  expect(MyTimes.nowHourIn(UTC_M3)).toEqual(5);
  expect(MyTimes.nowHourIn(UTC_M2)).toEqual(6);
  expect(MyTimes.nowHourIn(UTC_M1)).toEqual(7);
  expect(MyTimes.nowHourIn(UTC_0)).toEqual(9);
  expect(MyTimes.nowHourIn(UTC_P1)).toEqual(9);
  expect(MyTimes.nowHourIn(UTC_P2)).toEqual(11);
  expect(MyTimes.nowHourIn(UTC_P3)).toEqual(11);
  expect(MyTimes.nowHourIn(UTC_P330)).toEqual(12);
  expect(MyTimes.nowHourIn(UTC_P4)).toEqual(12);
  expect(MyTimes.nowHourIn(UTC_P430)).toEqual(12);
  expect(MyTimes.nowHourIn(UTC_P5)).toEqual(13);
  expect(MyTimes.nowHourIn(UTC_P530)).toEqual(13);
  expect(MyTimes.nowHourIn(UTC_P545)).toEqual(14);
  expect(MyTimes.nowHourIn(UTC_P6)).toEqual(15);
  expect(MyTimes.nowHourIn(UTC_P630)).toEqual(14);
  expect(MyTimes.nowHourIn(UTC_P7)).toEqual(15);
  expect(MyTimes.nowHourIn(UTC_P8)).toEqual(16);
  expect(MyTimes.nowHourIn(UTC_P845)).toEqual(17);
  expect(MyTimes.nowHourIn(UTC_P9)).toEqual(17);
  expect(MyTimes.nowHourIn(UTC_P930)).toEqual(17);
  expect(MyTimes.nowHourIn(UTC_P10)).toEqual(19);
  expect(MyTimes.nowHourIn(UTC_P1030)).toEqual(18);
  expect(MyTimes.nowHourIn(UTC_P11)).toEqual(19);
  expect(MyTimes.nowHourIn(UTC_P12)).toEqual(20);
  expect(MyTimes.nowHourIn(UTC_P1245)).toEqual(21);
  expect(MyTimes.nowHourIn(UTC_P13)).toEqual(21);
  jest.setSystemTime(new Date(DATE_2009_09_09_09_18));
  expect(MyTimes.nowHourIn(UTC_M11)).toEqual(22);
  expect(MyTimes.nowHourIn(UTC_M10)).toEqual(23);
  expect(MyTimes.nowHourIn(UTC_M930)).toEqual(23);
  expect(MyTimes.nowHourIn(UTC_M9)).toEqual(0);
  expect(MyTimes.nowHourIn(UTC_M8)).toEqual(2);
  expect(MyTimes.nowHourIn(UTC_M7)).toEqual(3);
  expect(MyTimes.nowHourIn(UTC_M6)).toEqual(3);
  expect(MyTimes.nowHourIn(UTC_M5)).toEqual(5);
  expect(MyTimes.nowHourIn(UTC_M4)).toEqual(5);
  expect(MyTimes.nowHourIn(UTC_M330)).toEqual(6);
  expect(MyTimes.nowHourIn(UTC_M3)).toEqual(6);
  expect(MyTimes.nowHourIn(UTC_M2)).toEqual(7);
  expect(MyTimes.nowHourIn(UTC_M1)).toEqual(8);
  expect(MyTimes.nowHourIn(UTC_0)).toEqual(10);
  expect(MyTimes.nowHourIn(UTC_P1)).toEqual(10);
  expect(MyTimes.nowHourIn(UTC_P2)).toEqual(11);
  expect(MyTimes.nowHourIn(UTC_P3)).toEqual(12);
  expect(MyTimes.nowHourIn(UTC_P330)).toEqual(13);
  expect(MyTimes.nowHourIn(UTC_P4)).toEqual(13);
  expect(MyTimes.nowHourIn(UTC_P430)).toEqual(13);
  expect(MyTimes.nowHourIn(UTC_P5)).toEqual(14);
  expect(MyTimes.nowHourIn(UTC_P530)).toEqual(14);
  expect(MyTimes.nowHourIn(UTC_P545)).toEqual(15);
  expect(MyTimes.nowHourIn(UTC_P6)).toEqual(16);
  expect(MyTimes.nowHourIn(UTC_P630)).toEqual(15);
  expect(MyTimes.nowHourIn(UTC_P7)).toEqual(16);
  expect(MyTimes.nowHourIn(UTC_P8)).toEqual(17);
  expect(MyTimes.nowHourIn(UTC_P845)).toEqual(18);
  expect(MyTimes.nowHourIn(UTC_P9)).toEqual(18);
  expect(MyTimes.nowHourIn(UTC_P930)).toEqual(18);
  expect(MyTimes.nowHourIn(UTC_P10)).toEqual(20);
  expect(MyTimes.nowHourIn(UTC_P1030)).toEqual(19);
  expect(MyTimes.nowHourIn(UTC_P11)).toEqual(20);
  expect(MyTimes.nowHourIn(UTC_P12)).toEqual(21);
  expect(MyTimes.nowHourIn(UTC_P1245)).toEqual(22);
  expect(MyTimes.nowHourIn(UTC_P13)).toEqual(22);
  jest.setSystemTime(new Date(DATE_2010_10_10_10_20));
  expect(MyTimes.nowHourIn(UTC_M11)).toEqual(23);
  expect(MyTimes.nowHourIn(UTC_M10)).toEqual(0);
  expect(MyTimes.nowHourIn(UTC_M930)).toEqual(0);
  expect(MyTimes.nowHourIn(UTC_M9)).toEqual(1);
  expect(MyTimes.nowHourIn(UTC_M8)).toEqual(3);
  expect(MyTimes.nowHourIn(UTC_M7)).toEqual(4);
  expect(MyTimes.nowHourIn(UTC_M6)).toEqual(4);
  expect(MyTimes.nowHourIn(UTC_M5)).toEqual(6);
  expect(MyTimes.nowHourIn(UTC_M4)).toEqual(6);
  expect(MyTimes.nowHourIn(UTC_M330)).toEqual(7);
  expect(MyTimes.nowHourIn(UTC_M3)).toEqual(7);
  expect(MyTimes.nowHourIn(UTC_M2)).toEqual(8);
  expect(MyTimes.nowHourIn(UTC_M1)).toEqual(9);
  expect(MyTimes.nowHourIn(UTC_0)).toEqual(11);
  expect(MyTimes.nowHourIn(UTC_P1)).toEqual(11);
  expect(MyTimes.nowHourIn(UTC_P2)).toEqual(12);
  expect(MyTimes.nowHourIn(UTC_P3)).toEqual(13);
  expect(MyTimes.nowHourIn(UTC_P330)).toEqual(13);
  expect(MyTimes.nowHourIn(UTC_P4)).toEqual(14);
  expect(MyTimes.nowHourIn(UTC_P430)).toEqual(14);
  expect(MyTimes.nowHourIn(UTC_P5)).toEqual(15);
  expect(MyTimes.nowHourIn(UTC_P530)).toEqual(15);
  expect(MyTimes.nowHourIn(UTC_P545)).toEqual(16);
  expect(MyTimes.nowHourIn(UTC_P6)).toEqual(17);
  expect(MyTimes.nowHourIn(UTC_P630)).toEqual(16);
  expect(MyTimes.nowHourIn(UTC_P7)).toEqual(17);
  expect(MyTimes.nowHourIn(UTC_P8)).toEqual(18);
  expect(MyTimes.nowHourIn(UTC_P845)).toEqual(19);
  expect(MyTimes.nowHourIn(UTC_P9)).toEqual(19);
  expect(MyTimes.nowHourIn(UTC_P930)).toEqual(20);
  expect(MyTimes.nowHourIn(UTC_P10)).toEqual(21);
  expect(MyTimes.nowHourIn(UTC_P1030)).toEqual(21);
  expect(MyTimes.nowHourIn(UTC_P11)).toEqual(21);
  expect(MyTimes.nowHourIn(UTC_P12)).toEqual(22);
  expect(MyTimes.nowHourIn(UTC_P1245)).toEqual(0);
  expect(MyTimes.nowHourIn(UTC_P13)).toEqual(23);
  jest.setSystemTime(new Date(DATE_2011_11_11_11_22));
  expect(MyTimes.nowHourIn(UTC_M11)).toEqual(0);
  expect(MyTimes.nowHourIn(UTC_M10)).toEqual(1);
  expect(MyTimes.nowHourIn(UTC_M930)).toEqual(1);
  expect(MyTimes.nowHourIn(UTC_M9)).toEqual(2);
  expect(MyTimes.nowHourIn(UTC_M8)).toEqual(3);
  expect(MyTimes.nowHourIn(UTC_M7)).toEqual(4);
  expect(MyTimes.nowHourIn(UTC_M6)).toEqual(5);
  expect(MyTimes.nowHourIn(UTC_M5)).toEqual(7);
  expect(MyTimes.nowHourIn(UTC_M4)).toEqual(7);
  expect(MyTimes.nowHourIn(UTC_M330)).toEqual(7);
  expect(MyTimes.nowHourIn(UTC_M3)).toEqual(8);
  expect(MyTimes.nowHourIn(UTC_M2)).toEqual(9);
  expect(MyTimes.nowHourIn(UTC_M1)).toEqual(10);
  expect(MyTimes.nowHourIn(UTC_0)).toEqual(11);
  expect(MyTimes.nowHourIn(UTC_P1)).toEqual(12);
  expect(MyTimes.nowHourIn(UTC_P2)).toEqual(13);
  expect(MyTimes.nowHourIn(UTC_P3)).toEqual(14);
  expect(MyTimes.nowHourIn(UTC_P330)).toEqual(14);
  expect(MyTimes.nowHourIn(UTC_P4)).toEqual(15);
  expect(MyTimes.nowHourIn(UTC_P430)).toEqual(15);
  expect(MyTimes.nowHourIn(UTC_P5)).toEqual(16);
  expect(MyTimes.nowHourIn(UTC_P530)).toEqual(16);
  expect(MyTimes.nowHourIn(UTC_P545)).toEqual(17);
  expect(MyTimes.nowHourIn(UTC_P6)).toEqual(18);
  expect(MyTimes.nowHourIn(UTC_P630)).toEqual(17);
  expect(MyTimes.nowHourIn(UTC_P7)).toEqual(18);
  expect(MyTimes.nowHourIn(UTC_P8)).toEqual(19);
  expect(MyTimes.nowHourIn(UTC_P845)).toEqual(20);
  expect(MyTimes.nowHourIn(UTC_P9)).toEqual(20);
  expect(MyTimes.nowHourIn(UTC_P930)).toEqual(21);
  expect(MyTimes.nowHourIn(UTC_P10)).toEqual(22);
  expect(MyTimes.nowHourIn(UTC_P1030)).toEqual(22);
  expect(MyTimes.nowHourIn(UTC_P11)).toEqual(22);
  expect(MyTimes.nowHourIn(UTC_P12)).toEqual(0);
  expect(MyTimes.nowHourIn(UTC_P1245)).toEqual(1);
  expect(MyTimes.nowHourIn(UTC_P13)).toEqual(0);
  jest.setSystemTime(new Date(DATE_2012_12_12_12_24));
  expect(MyTimes.nowHourIn(UTC_M11)).toEqual(1);
  expect(MyTimes.nowHourIn(UTC_M10)).toEqual(2);
  expect(MyTimes.nowHourIn(UTC_M930)).toEqual(2);
  expect(MyTimes.nowHourIn(UTC_M9)).toEqual(3);
  expect(MyTimes.nowHourIn(UTC_M8)).toEqual(4);
  expect(MyTimes.nowHourIn(UTC_M7)).toEqual(5);
  expect(MyTimes.nowHourIn(UTC_M6)).toEqual(6);
  expect(MyTimes.nowHourIn(UTC_M5)).toEqual(7);
  expect(MyTimes.nowHourIn(UTC_M4)).toEqual(8);
  expect(MyTimes.nowHourIn(UTC_M330)).toEqual(8);
  expect(MyTimes.nowHourIn(UTC_M3)).toEqual(9);
  expect(MyTimes.nowHourIn(UTC_M2)).toEqual(10);
  expect(MyTimes.nowHourIn(UTC_M1)).toEqual(11);
  expect(MyTimes.nowHourIn(UTC_0)).toEqual(12);
  expect(MyTimes.nowHourIn(UTC_P1)).toEqual(13);
  expect(MyTimes.nowHourIn(UTC_P2)).toEqual(14);
  expect(MyTimes.nowHourIn(UTC_P3)).toEqual(15);
  expect(MyTimes.nowHourIn(UTC_P330)).toEqual(15);
  expect(MyTimes.nowHourIn(UTC_P4)).toEqual(16);
  expect(MyTimes.nowHourIn(UTC_P430)).toEqual(16);
  expect(MyTimes.nowHourIn(UTC_P5)).toEqual(17);
  expect(MyTimes.nowHourIn(UTC_P530)).toEqual(17);
  expect(MyTimes.nowHourIn(UTC_P545)).toEqual(18);
  expect(MyTimes.nowHourIn(UTC_P6)).toEqual(19);
  expect(MyTimes.nowHourIn(UTC_P630)).toEqual(18);
  expect(MyTimes.nowHourIn(UTC_P7)).toEqual(19);
  expect(MyTimes.nowHourIn(UTC_P8)).toEqual(20);
  expect(MyTimes.nowHourIn(UTC_P845)).toEqual(21);
  expect(MyTimes.nowHourIn(UTC_P9)).toEqual(21);
  expect(MyTimes.nowHourIn(UTC_P930)).toEqual(22);
  expect(MyTimes.nowHourIn(UTC_P10)).toEqual(23);
  expect(MyTimes.nowHourIn(UTC_P1030)).toEqual(23);
  expect(MyTimes.nowHourIn(UTC_P11)).toEqual(23);
  expect(MyTimes.nowHourIn(UTC_P12)).toEqual(1);
  expect(MyTimes.nowHourIn(UTC_P1245)).toEqual(2);
  expect(MyTimes.nowHourIn(UTC_P13)).toEqual(1);
  jest.setSystemTime(new Date(DATE_2013_03_13_13_26));
  expect(MyTimes.nowHourIn(UTC_M11)).toEqual(2);
  expect(MyTimes.nowHourIn(UTC_M10)).toEqual(3);
  expect(MyTimes.nowHourIn(UTC_M930)).toEqual(3);
  expect(MyTimes.nowHourIn(UTC_M9)).toEqual(4);
  expect(MyTimes.nowHourIn(UTC_M8)).toEqual(6);
  expect(MyTimes.nowHourIn(UTC_M7)).toEqual(7);
  expect(MyTimes.nowHourIn(UTC_M6)).toEqual(7);
  expect(MyTimes.nowHourIn(UTC_M5)).toEqual(9);
  expect(MyTimes.nowHourIn(UTC_M4)).toEqual(9);
  expect(MyTimes.nowHourIn(UTC_M330)).toEqual(10);
  expect(MyTimes.nowHourIn(UTC_M3)).toEqual(10);
  expect(MyTimes.nowHourIn(UTC_M2)).toEqual(11);
  expect(MyTimes.nowHourIn(UTC_M1)).toEqual(12);
  expect(MyTimes.nowHourIn(UTC_0)).toEqual(13);
  expect(MyTimes.nowHourIn(UTC_P1)).toEqual(14);
  expect(MyTimes.nowHourIn(UTC_P2)).toEqual(15);
  expect(MyTimes.nowHourIn(UTC_P3)).toEqual(16);
  expect(MyTimes.nowHourIn(UTC_P330)).toEqual(16);
  expect(MyTimes.nowHourIn(UTC_P4)).toEqual(17);
  expect(MyTimes.nowHourIn(UTC_P430)).toEqual(17);
  expect(MyTimes.nowHourIn(UTC_P5)).toEqual(18);
  expect(MyTimes.nowHourIn(UTC_P530)).toEqual(18);
  expect(MyTimes.nowHourIn(UTC_P545)).toEqual(19);
  expect(MyTimes.nowHourIn(UTC_P6)).toEqual(20);
  expect(MyTimes.nowHourIn(UTC_P630)).toEqual(19);
  expect(MyTimes.nowHourIn(UTC_P7)).toEqual(20);
  expect(MyTimes.nowHourIn(UTC_P8)).toEqual(21);
  expect(MyTimes.nowHourIn(UTC_P845)).toEqual(22);
  expect(MyTimes.nowHourIn(UTC_P9)).toEqual(22);
  expect(MyTimes.nowHourIn(UTC_P930)).toEqual(23);
  expect(MyTimes.nowHourIn(UTC_P10)).toEqual(0);
  expect(MyTimes.nowHourIn(UTC_P1030)).toEqual(0);
  expect(MyTimes.nowHourIn(UTC_P11)).toEqual(0);
  expect(MyTimes.nowHourIn(UTC_P12)).toEqual(1);
  expect(MyTimes.nowHourIn(UTC_P1245)).toEqual(3);
  expect(MyTimes.nowHourIn(UTC_P13)).toEqual(2);
  jest.setSystemTime(new Date(DATE_2014_04_14_14_28));
  expect(MyTimes.nowHourIn(UTC_M11)).toEqual(3);
  expect(MyTimes.nowHourIn(UTC_M10)).toEqual(4);
  expect(MyTimes.nowHourIn(UTC_M930)).toEqual(4);
  expect(MyTimes.nowHourIn(UTC_M9)).toEqual(5);
  expect(MyTimes.nowHourIn(UTC_M8)).toEqual(7);
  expect(MyTimes.nowHourIn(UTC_M7)).toEqual(8);
  expect(MyTimes.nowHourIn(UTC_M6)).toEqual(8);
  expect(MyTimes.nowHourIn(UTC_M5)).toEqual(10);
  expect(MyTimes.nowHourIn(UTC_M4)).toEqual(10);
  expect(MyTimes.nowHourIn(UTC_M330)).toEqual(11);
  expect(MyTimes.nowHourIn(UTC_M3)).toEqual(11);
  expect(MyTimes.nowHourIn(UTC_M2)).toEqual(12);
  expect(MyTimes.nowHourIn(UTC_M1)).toEqual(13);
  expect(MyTimes.nowHourIn(UTC_0)).toEqual(15);
  expect(MyTimes.nowHourIn(UTC_P1)).toEqual(15);
  expect(MyTimes.nowHourIn(UTC_P2)).toEqual(16);
  expect(MyTimes.nowHourIn(UTC_P3)).toEqual(17);
  expect(MyTimes.nowHourIn(UTC_P330)).toEqual(18);
  expect(MyTimes.nowHourIn(UTC_P4)).toEqual(18);
  expect(MyTimes.nowHourIn(UTC_P430)).toEqual(18);
  expect(MyTimes.nowHourIn(UTC_P5)).toEqual(19);
  expect(MyTimes.nowHourIn(UTC_P530)).toEqual(19);
  expect(MyTimes.nowHourIn(UTC_P545)).toEqual(20);
  expect(MyTimes.nowHourIn(UTC_P6)).toEqual(21);
  expect(MyTimes.nowHourIn(UTC_P630)).toEqual(20);
  expect(MyTimes.nowHourIn(UTC_P7)).toEqual(21);
  expect(MyTimes.nowHourIn(UTC_P8)).toEqual(22);
  expect(MyTimes.nowHourIn(UTC_P845)).toEqual(23);
  expect(MyTimes.nowHourIn(UTC_P9)).toEqual(23);
  expect(MyTimes.nowHourIn(UTC_P930)).toEqual(23);
  expect(MyTimes.nowHourIn(UTC_P10)).toEqual(1);
  expect(MyTimes.nowHourIn(UTC_P1030)).toEqual(0);
  expect(MyTimes.nowHourIn(UTC_P11)).toEqual(1);
  expect(MyTimes.nowHourIn(UTC_P12)).toEqual(2);
  expect(MyTimes.nowHourIn(UTC_P1245)).toEqual(3);
  expect(MyTimes.nowHourIn(UTC_P13)).toEqual(3);
  jest.setSystemTime(new Date(DATE_2015_05_15_15_30));
  expect(MyTimes.nowHourIn(UTC_M11)).toEqual(4);
  expect(MyTimes.nowHourIn(UTC_M10)).toEqual(5);
  expect(MyTimes.nowHourIn(UTC_M930)).toEqual(6);
  expect(MyTimes.nowHourIn(UTC_M9)).toEqual(6);
  expect(MyTimes.nowHourIn(UTC_M8)).toEqual(8);
  expect(MyTimes.nowHourIn(UTC_M7)).toEqual(9);
  expect(MyTimes.nowHourIn(UTC_M6)).toEqual(9);
  expect(MyTimes.nowHourIn(UTC_M5)).toEqual(11);
  expect(MyTimes.nowHourIn(UTC_M4)).toEqual(11);
  expect(MyTimes.nowHourIn(UTC_M330)).toEqual(13);
  expect(MyTimes.nowHourIn(UTC_M3)).toEqual(12);
  expect(MyTimes.nowHourIn(UTC_M2)).toEqual(13);
  expect(MyTimes.nowHourIn(UTC_M1)).toEqual(14);
  expect(MyTimes.nowHourIn(UTC_0)).toEqual(16);
  expect(MyTimes.nowHourIn(UTC_P1)).toEqual(16);
  expect(MyTimes.nowHourIn(UTC_P2)).toEqual(17);
  expect(MyTimes.nowHourIn(UTC_P3)).toEqual(18);
  expect(MyTimes.nowHourIn(UTC_P330)).toEqual(20);
  expect(MyTimes.nowHourIn(UTC_P4)).toEqual(19);
  expect(MyTimes.nowHourIn(UTC_P430)).toEqual(20);
  expect(MyTimes.nowHourIn(UTC_P5)).toEqual(20);
  expect(MyTimes.nowHourIn(UTC_P530)).toEqual(21);
  expect(MyTimes.nowHourIn(UTC_P545)).toEqual(21);
  expect(MyTimes.nowHourIn(UTC_P6)).toEqual(21);
  expect(MyTimes.nowHourIn(UTC_P630)).toEqual(22);
  expect(MyTimes.nowHourIn(UTC_P7)).toEqual(22);
  expect(MyTimes.nowHourIn(UTC_P8)).toEqual(23);
  expect(MyTimes.nowHourIn(UTC_P845)).toEqual(0);
  expect(MyTimes.nowHourIn(UTC_P9)).toEqual(0);
  expect(MyTimes.nowHourIn(UTC_P930)).toEqual(1);
  expect(MyTimes.nowHourIn(UTC_P10)).toEqual(1);
  expect(MyTimes.nowHourIn(UTC_P1030)).toEqual(2);
  expect(MyTimes.nowHourIn(UTC_P11)).toEqual(3);
  expect(MyTimes.nowHourIn(UTC_P12)).toEqual(3);
  expect(MyTimes.nowHourIn(UTC_P1245)).toEqual(4);
  expect(MyTimes.nowHourIn(UTC_P13)).toEqual(4);
  jest.setSystemTime(new Date(DATE_2016_06_16_16_32));
  expect(MyTimes.nowHourIn(UTC_M11)).toEqual(5);
  expect(MyTimes.nowHourIn(UTC_M10)).toEqual(6);
  expect(MyTimes.nowHourIn(UTC_M930)).toEqual(7);
  expect(MyTimes.nowHourIn(UTC_M9)).toEqual(7);
  expect(MyTimes.nowHourIn(UTC_M8)).toEqual(9);
  expect(MyTimes.nowHourIn(UTC_M7)).toEqual(10);
  expect(MyTimes.nowHourIn(UTC_M6)).toEqual(10);
  expect(MyTimes.nowHourIn(UTC_M5)).toEqual(12);
  expect(MyTimes.nowHourIn(UTC_M4)).toEqual(12);
  expect(MyTimes.nowHourIn(UTC_M330)).toEqual(14);
  expect(MyTimes.nowHourIn(UTC_M3)).toEqual(13);
  expect(MyTimes.nowHourIn(UTC_M2)).toEqual(14);
  expect(MyTimes.nowHourIn(UTC_M1)).toEqual(15);
  expect(MyTimes.nowHourIn(UTC_0)).toEqual(17);
  expect(MyTimes.nowHourIn(UTC_P1)).toEqual(17);
  expect(MyTimes.nowHourIn(UTC_P2)).toEqual(18);
  expect(MyTimes.nowHourIn(UTC_P3)).toEqual(19);
  expect(MyTimes.nowHourIn(UTC_P330)).toEqual(21);
  expect(MyTimes.nowHourIn(UTC_P4)).toEqual(20);
  expect(MyTimes.nowHourIn(UTC_P430)).toEqual(21);
  expect(MyTimes.nowHourIn(UTC_P5)).toEqual(21);
  expect(MyTimes.nowHourIn(UTC_P530)).toEqual(22);
  expect(MyTimes.nowHourIn(UTC_P545)).toEqual(22);
  expect(MyTimes.nowHourIn(UTC_P6)).toEqual(22);
  expect(MyTimes.nowHourIn(UTC_P630)).toEqual(23);
  expect(MyTimes.nowHourIn(UTC_P7)).toEqual(23);
  expect(MyTimes.nowHourIn(UTC_P8)).toEqual(0);
  expect(MyTimes.nowHourIn(UTC_P845)).toEqual(1);
  expect(MyTimes.nowHourIn(UTC_P9)).toEqual(1);
  expect(MyTimes.nowHourIn(UTC_P930)).toEqual(2);
  expect(MyTimes.nowHourIn(UTC_P10)).toEqual(2);
  expect(MyTimes.nowHourIn(UTC_P1030)).toEqual(3);
  expect(MyTimes.nowHourIn(UTC_P11)).toEqual(3);
  expect(MyTimes.nowHourIn(UTC_P12)).toEqual(4);
  expect(MyTimes.nowHourIn(UTC_P1245)).toEqual(5);
  expect(MyTimes.nowHourIn(UTC_P13)).toEqual(5);
  jest.setSystemTime(new Date(DATE_2017_07_17_17_34));
  expect(MyTimes.nowHourIn(UTC_M11)).toEqual(6);
  expect(MyTimes.nowHourIn(UTC_M10)).toEqual(7);
  expect(MyTimes.nowHourIn(UTC_M930)).toEqual(8);
  expect(MyTimes.nowHourIn(UTC_M9)).toEqual(8);
  expect(MyTimes.nowHourIn(UTC_M8)).toEqual(10);
  expect(MyTimes.nowHourIn(UTC_M7)).toEqual(11);
  expect(MyTimes.nowHourIn(UTC_M6)).toEqual(11);
  expect(MyTimes.nowHourIn(UTC_M5)).toEqual(13);
  expect(MyTimes.nowHourIn(UTC_M4)).toEqual(13);
  expect(MyTimes.nowHourIn(UTC_M330)).toEqual(15);
  expect(MyTimes.nowHourIn(UTC_M3)).toEqual(14);
  expect(MyTimes.nowHourIn(UTC_M2)).toEqual(15);
  expect(MyTimes.nowHourIn(UTC_M1)).toEqual(16);
  expect(MyTimes.nowHourIn(UTC_0)).toEqual(18);
  expect(MyTimes.nowHourIn(UTC_P1)).toEqual(18);
  expect(MyTimes.nowHourIn(UTC_P2)).toEqual(19);
  expect(MyTimes.nowHourIn(UTC_P3)).toEqual(20);
  expect(MyTimes.nowHourIn(UTC_P330)).toEqual(22);
  expect(MyTimes.nowHourIn(UTC_P4)).toEqual(21);
  expect(MyTimes.nowHourIn(UTC_P430)).toEqual(22);
  expect(MyTimes.nowHourIn(UTC_P5)).toEqual(22);
  expect(MyTimes.nowHourIn(UTC_P530)).toEqual(23);
  expect(MyTimes.nowHourIn(UTC_P545)).toEqual(23);
  expect(MyTimes.nowHourIn(UTC_P6)).toEqual(23);
  expect(MyTimes.nowHourIn(UTC_P630)).toEqual(0);
  expect(MyTimes.nowHourIn(UTC_P7)).toEqual(0);
  expect(MyTimes.nowHourIn(UTC_P8)).toEqual(1);
  expect(MyTimes.nowHourIn(UTC_P845)).toEqual(2);
  expect(MyTimes.nowHourIn(UTC_P9)).toEqual(2);
  expect(MyTimes.nowHourIn(UTC_P930)).toEqual(3);
  expect(MyTimes.nowHourIn(UTC_P10)).toEqual(3);
  expect(MyTimes.nowHourIn(UTC_P1030)).toEqual(4);
  expect(MyTimes.nowHourIn(UTC_P11)).toEqual(4);
  expect(MyTimes.nowHourIn(UTC_P12)).toEqual(5);
  expect(MyTimes.nowHourIn(UTC_P1245)).toEqual(6);
  expect(MyTimes.nowHourIn(UTC_P13)).toEqual(6);
  jest.setSystemTime(new Date(DATE_2018_08_18_18_36));
  expect(MyTimes.nowHourIn(UTC_M11)).toEqual(7);
  expect(MyTimes.nowHourIn(UTC_M10)).toEqual(8);
  expect(MyTimes.nowHourIn(UTC_M930)).toEqual(9);
  expect(MyTimes.nowHourIn(UTC_M9)).toEqual(9);
  expect(MyTimes.nowHourIn(UTC_M8)).toEqual(11);
  expect(MyTimes.nowHourIn(UTC_M7)).toEqual(12);
  expect(MyTimes.nowHourIn(UTC_M6)).toEqual(12);
  expect(MyTimes.nowHourIn(UTC_M5)).toEqual(14);
  expect(MyTimes.nowHourIn(UTC_M4)).toEqual(14);
  expect(MyTimes.nowHourIn(UTC_M330)).toEqual(16);
  expect(MyTimes.nowHourIn(UTC_M3)).toEqual(15);
  expect(MyTimes.nowHourIn(UTC_M2)).toEqual(16);
  expect(MyTimes.nowHourIn(UTC_M1)).toEqual(17);
  expect(MyTimes.nowHourIn(UTC_0)).toEqual(19);
  expect(MyTimes.nowHourIn(UTC_P1)).toEqual(19);
  expect(MyTimes.nowHourIn(UTC_P2)).toEqual(20);
  expect(MyTimes.nowHourIn(UTC_P3)).toEqual(21);
  expect(MyTimes.nowHourIn(UTC_P330)).toEqual(23);
  expect(MyTimes.nowHourIn(UTC_P4)).toEqual(22);
  expect(MyTimes.nowHourIn(UTC_P430)).toEqual(23);
  expect(MyTimes.nowHourIn(UTC_P5)).toEqual(23);
  expect(MyTimes.nowHourIn(UTC_P530)).toEqual(0);
  expect(MyTimes.nowHourIn(UTC_P545)).toEqual(0);
  expect(MyTimes.nowHourIn(UTC_P6)).toEqual(0);
  expect(MyTimes.nowHourIn(UTC_P630)).toEqual(1);
  expect(MyTimes.nowHourIn(UTC_P7)).toEqual(1);
  expect(MyTimes.nowHourIn(UTC_P8)).toEqual(2);
  expect(MyTimes.nowHourIn(UTC_P845)).toEqual(3);
  expect(MyTimes.nowHourIn(UTC_P9)).toEqual(3);
  expect(MyTimes.nowHourIn(UTC_P930)).toEqual(4);
  expect(MyTimes.nowHourIn(UTC_P10)).toEqual(4);
  expect(MyTimes.nowHourIn(UTC_P1030)).toEqual(5);
  expect(MyTimes.nowHourIn(UTC_P11)).toEqual(5);
  expect(MyTimes.nowHourIn(UTC_P12)).toEqual(6);
  expect(MyTimes.nowHourIn(UTC_P1245)).toEqual(7);
  expect(MyTimes.nowHourIn(UTC_P13)).toEqual(7);
  jest.setSystemTime(new Date(DATE_2019_09_19_19_38));
  expect(MyTimes.nowHourIn(UTC_M11)).toEqual(8);
  expect(MyTimes.nowHourIn(UTC_M10)).toEqual(9);
  expect(MyTimes.nowHourIn(UTC_M930)).toEqual(10);
  expect(MyTimes.nowHourIn(UTC_M9)).toEqual(10);
  expect(MyTimes.nowHourIn(UTC_M8)).toEqual(12);
  expect(MyTimes.nowHourIn(UTC_M7)).toEqual(13);
  expect(MyTimes.nowHourIn(UTC_M6)).toEqual(13);
  expect(MyTimes.nowHourIn(UTC_M5)).toEqual(15);
  expect(MyTimes.nowHourIn(UTC_M4)).toEqual(15);
  expect(MyTimes.nowHourIn(UTC_M330)).toEqual(17);
  expect(MyTimes.nowHourIn(UTC_M3)).toEqual(16);
  expect(MyTimes.nowHourIn(UTC_M2)).toEqual(17);
  expect(MyTimes.nowHourIn(UTC_M1)).toEqual(18);
  expect(MyTimes.nowHourIn(UTC_0)).toEqual(20);
  expect(MyTimes.nowHourIn(UTC_P1)).toEqual(20);
  expect(MyTimes.nowHourIn(UTC_P2)).toEqual(21);
  expect(MyTimes.nowHourIn(UTC_P3)).toEqual(22);
  expect(MyTimes.nowHourIn(UTC_P330)).toEqual(0);
  expect(MyTimes.nowHourIn(UTC_P4)).toEqual(23);
  expect(MyTimes.nowHourIn(UTC_P430)).toEqual(0);
  expect(MyTimes.nowHourIn(UTC_P5)).toEqual(0);
  expect(MyTimes.nowHourIn(UTC_P530)).toEqual(1);
  expect(MyTimes.nowHourIn(UTC_P545)).toEqual(1);
  expect(MyTimes.nowHourIn(UTC_P6)).toEqual(1);
  expect(MyTimes.nowHourIn(UTC_P630)).toEqual(2);
  expect(MyTimes.nowHourIn(UTC_P7)).toEqual(2);
  expect(MyTimes.nowHourIn(UTC_P8)).toEqual(3);
  expect(MyTimes.nowHourIn(UTC_P845)).toEqual(4);
  expect(MyTimes.nowHourIn(UTC_P9)).toEqual(4);
  expect(MyTimes.nowHourIn(UTC_P930)).toEqual(5);
  expect(MyTimes.nowHourIn(UTC_P10)).toEqual(5);
  expect(MyTimes.nowHourIn(UTC_P1030)).toEqual(6);
  expect(MyTimes.nowHourIn(UTC_P11)).toEqual(6);
  expect(MyTimes.nowHourIn(UTC_P12)).toEqual(7);
  expect(MyTimes.nowHourIn(UTC_P1245)).toEqual(8);
  expect(MyTimes.nowHourIn(UTC_P13)).toEqual(8);
  jest.setSystemTime(new Date(DATE_2020_02_20_20_40));
  expect(MyTimes.nowHourIn(UTC_M11)).toEqual(9);
  expect(MyTimes.nowHourIn(UTC_M10)).toEqual(10);
  expect(MyTimes.nowHourIn(UTC_M930)).toEqual(11);
  expect(MyTimes.nowHourIn(UTC_M9)).toEqual(11);
  expect(MyTimes.nowHourIn(UTC_M8)).toEqual(12);
  expect(MyTimes.nowHourIn(UTC_M7)).toEqual(13);
  expect(MyTimes.nowHourIn(UTC_M6)).toEqual(14);
  expect(MyTimes.nowHourIn(UTC_M5)).toEqual(15);
  expect(MyTimes.nowHourIn(UTC_M4)).toEqual(16);
  expect(MyTimes.nowHourIn(UTC_M330)).toEqual(17);
  expect(MyTimes.nowHourIn(UTC_M3)).toEqual(17);
  expect(MyTimes.nowHourIn(UTC_M2)).toEqual(18);
  expect(MyTimes.nowHourIn(UTC_M1)).toEqual(19);
  expect(MyTimes.nowHourIn(UTC_0)).toEqual(20);
  expect(MyTimes.nowHourIn(UTC_P1)).toEqual(21);
  expect(MyTimes.nowHourIn(UTC_P2)).toEqual(22);
  expect(MyTimes.nowHourIn(UTC_P3)).toEqual(23);
  expect(MyTimes.nowHourIn(UTC_P330)).toEqual(0);
  expect(MyTimes.nowHourIn(UTC_P4)).toEqual(0);
  expect(MyTimes.nowHourIn(UTC_P430)).toEqual(1);
  expect(MyTimes.nowHourIn(UTC_P5)).toEqual(1);
  expect(MyTimes.nowHourIn(UTC_P530)).toEqual(2);
  expect(MyTimes.nowHourIn(UTC_P545)).toEqual(2);
  expect(MyTimes.nowHourIn(UTC_P6)).toEqual(2);
  expect(MyTimes.nowHourIn(UTC_P630)).toEqual(3);
  expect(MyTimes.nowHourIn(UTC_P7)).toEqual(3);
  expect(MyTimes.nowHourIn(UTC_P8)).toEqual(4);
  expect(MyTimes.nowHourIn(UTC_P845)).toEqual(5);
  expect(MyTimes.nowHourIn(UTC_P9)).toEqual(5);
  expect(MyTimes.nowHourIn(UTC_P930)).toEqual(7);
  expect(MyTimes.nowHourIn(UTC_P10)).toEqual(6);
  expect(MyTimes.nowHourIn(UTC_P1030)).toEqual(7);
  expect(MyTimes.nowHourIn(UTC_P11)).toEqual(8);
  expect(MyTimes.nowHourIn(UTC_P12)).toEqual(8);
  expect(MyTimes.nowHourIn(UTC_P1245)).toEqual(10);
  expect(MyTimes.nowHourIn(UTC_P13)).toEqual(9);
  jest.setSystemTime(new Date(DATE_2021_01_21_21_42));
  expect(MyTimes.nowHourIn(UTC_M11)).toEqual(10);
  expect(MyTimes.nowHourIn(UTC_M10)).toEqual(11);
  expect(MyTimes.nowHourIn(UTC_M930)).toEqual(12);
  expect(MyTimes.nowHourIn(UTC_M9)).toEqual(12);
  expect(MyTimes.nowHourIn(UTC_M8)).toEqual(13);
  expect(MyTimes.nowHourIn(UTC_M7)).toEqual(14);
  expect(MyTimes.nowHourIn(UTC_M6)).toEqual(15);
  expect(MyTimes.nowHourIn(UTC_M5)).toEqual(16);
  expect(MyTimes.nowHourIn(UTC_M4)).toEqual(17);
  expect(MyTimes.nowHourIn(UTC_M330)).toEqual(18);
  expect(MyTimes.nowHourIn(UTC_M3)).toEqual(18);
  expect(MyTimes.nowHourIn(UTC_M2)).toEqual(19);
  expect(MyTimes.nowHourIn(UTC_M1)).toEqual(20);
  expect(MyTimes.nowHourIn(UTC_0)).toEqual(21);
  expect(MyTimes.nowHourIn(UTC_P1)).toEqual(22);
  expect(MyTimes.nowHourIn(UTC_P2)).toEqual(23);
  expect(MyTimes.nowHourIn(UTC_P3)).toEqual(0);
  expect(MyTimes.nowHourIn(UTC_P330)).toEqual(1);
  expect(MyTimes.nowHourIn(UTC_P4)).toEqual(1);
  expect(MyTimes.nowHourIn(UTC_P430)).toEqual(2);
  expect(MyTimes.nowHourIn(UTC_P5)).toEqual(2);
  expect(MyTimes.nowHourIn(UTC_P530)).toEqual(3);
  expect(MyTimes.nowHourIn(UTC_P545)).toEqual(3);
  expect(MyTimes.nowHourIn(UTC_P6)).toEqual(3);
  expect(MyTimes.nowHourIn(UTC_P630)).toEqual(4);
  expect(MyTimes.nowHourIn(UTC_P7)).toEqual(4);
  expect(MyTimes.nowHourIn(UTC_P8)).toEqual(5);
  expect(MyTimes.nowHourIn(UTC_P845)).toEqual(6);
  expect(MyTimes.nowHourIn(UTC_P9)).toEqual(6);
  expect(MyTimes.nowHourIn(UTC_P930)).toEqual(8);
  expect(MyTimes.nowHourIn(UTC_P10)).toEqual(7);
  expect(MyTimes.nowHourIn(UTC_P1030)).toEqual(8);
  expect(MyTimes.nowHourIn(UTC_P11)).toEqual(9);
  expect(MyTimes.nowHourIn(UTC_P12)).toEqual(9);
  expect(MyTimes.nowHourIn(UTC_P1245)).toEqual(11);
  expect(MyTimes.nowHourIn(UTC_P13)).toEqual(10);
  jest.setSystemTime(new Date(DATE_2022_02_22_22_44));
  expect(MyTimes.nowHourIn(UTC_M11)).toEqual(11);
  expect(MyTimes.nowHourIn(UTC_M10)).toEqual(12);
  expect(MyTimes.nowHourIn(UTC_M930)).toEqual(13);
  expect(MyTimes.nowHourIn(UTC_M9)).toEqual(13);
  expect(MyTimes.nowHourIn(UTC_M8)).toEqual(14);
  expect(MyTimes.nowHourIn(UTC_M7)).toEqual(15);
  expect(MyTimes.nowHourIn(UTC_M6)).toEqual(16);
  expect(MyTimes.nowHourIn(UTC_M5)).toEqual(17);
  expect(MyTimes.nowHourIn(UTC_M4)).toEqual(18);
  expect(MyTimes.nowHourIn(UTC_M330)).toEqual(19);
  expect(MyTimes.nowHourIn(UTC_M3)).toEqual(19);
  expect(MyTimes.nowHourIn(UTC_M2)).toEqual(20);
  expect(MyTimes.nowHourIn(UTC_M1)).toEqual(21);
  expect(MyTimes.nowHourIn(UTC_0)).toEqual(22);
  expect(MyTimes.nowHourIn(UTC_P1)).toEqual(23);
  expect(MyTimes.nowHourIn(UTC_P2)).toEqual(0);
  expect(MyTimes.nowHourIn(UTC_P3)).toEqual(1);
  expect(MyTimes.nowHourIn(UTC_P330)).toEqual(2);
  expect(MyTimes.nowHourIn(UTC_P4)).toEqual(2);
  expect(MyTimes.nowHourIn(UTC_P430)).toEqual(3);
  expect(MyTimes.nowHourIn(UTC_P5)).toEqual(3);
  expect(MyTimes.nowHourIn(UTC_P530)).toEqual(4);
  expect(MyTimes.nowHourIn(UTC_P545)).toEqual(4);
  expect(MyTimes.nowHourIn(UTC_P6)).toEqual(4);
  expect(MyTimes.nowHourIn(UTC_P630)).toEqual(5);
  expect(MyTimes.nowHourIn(UTC_P7)).toEqual(5);
  expect(MyTimes.nowHourIn(UTC_P8)).toEqual(6);
  expect(MyTimes.nowHourIn(UTC_P845)).toEqual(7);
  expect(MyTimes.nowHourIn(UTC_P9)).toEqual(7);
  expect(MyTimes.nowHourIn(UTC_P930)).toEqual(9);
  expect(MyTimes.nowHourIn(UTC_P10)).toEqual(8);
  expect(MyTimes.nowHourIn(UTC_P1030)).toEqual(9);
  expect(MyTimes.nowHourIn(UTC_P11)).toEqual(10);
  expect(MyTimes.nowHourIn(UTC_P12)).toEqual(10);
  expect(MyTimes.nowHourIn(UTC_P1245)).toEqual(12);
  expect(MyTimes.nowHourIn(UTC_P13)).toEqual(11);
  jest.setSystemTime(new Date(DATE_2023_03_23_23_46));
  expect(MyTimes.nowHourIn(UTC_M11)).toEqual(12);
  expect(MyTimes.nowHourIn(UTC_M10)).toEqual(13);
  expect(MyTimes.nowHourIn(UTC_M930)).toEqual(14);
  expect(MyTimes.nowHourIn(UTC_M9)).toEqual(14);
  expect(MyTimes.nowHourIn(UTC_M8)).toEqual(16);
  expect(MyTimes.nowHourIn(UTC_M7)).toEqual(17);
  expect(MyTimes.nowHourIn(UTC_M6)).toEqual(17);
  expect(MyTimes.nowHourIn(UTC_M5)).toEqual(19);
  expect(MyTimes.nowHourIn(UTC_M4)).toEqual(19);
  expect(MyTimes.nowHourIn(UTC_M330)).toEqual(21);
  expect(MyTimes.nowHourIn(UTC_M3)).toEqual(20);
  expect(MyTimes.nowHourIn(UTC_M2)).toEqual(21);
  expect(MyTimes.nowHourIn(UTC_M1)).toEqual(22);
  expect(MyTimes.nowHourIn(UTC_0)).toEqual(23);
  expect(MyTimes.nowHourIn(UTC_P1)).toEqual(0);
  expect(MyTimes.nowHourIn(UTC_P2)).toEqual(1);
  expect(MyTimes.nowHourIn(UTC_P3)).toEqual(2);
  expect(MyTimes.nowHourIn(UTC_P330)).toEqual(4);
  expect(MyTimes.nowHourIn(UTC_P4)).toEqual(3);
  expect(MyTimes.nowHourIn(UTC_P430)).toEqual(4);
  expect(MyTimes.nowHourIn(UTC_P5)).toEqual(4);
  expect(MyTimes.nowHourIn(UTC_P530)).toEqual(5);
  expect(MyTimes.nowHourIn(UTC_P545)).toEqual(5);
  expect(MyTimes.nowHourIn(UTC_P6)).toEqual(5);
  expect(MyTimes.nowHourIn(UTC_P630)).toEqual(6);
  expect(MyTimes.nowHourIn(UTC_P7)).toEqual(6);
  expect(MyTimes.nowHourIn(UTC_P8)).toEqual(7);
  expect(MyTimes.nowHourIn(UTC_P845)).toEqual(8);
  expect(MyTimes.nowHourIn(UTC_P9)).toEqual(8);
  expect(MyTimes.nowHourIn(UTC_P930)).toEqual(10);
  expect(MyTimes.nowHourIn(UTC_P10)).toEqual(9);
  expect(MyTimes.nowHourIn(UTC_P1030)).toEqual(10);
  expect(MyTimes.nowHourIn(UTC_P11)).toEqual(11);
  expect(MyTimes.nowHourIn(UTC_P12)).toEqual(11);
  expect(MyTimes.nowHourIn(UTC_P1245)).toEqual(13);
  expect(MyTimes.nowHourIn(UTC_P13)).toEqual(12);
  jest.setSystemTime(new Date(DATE_2024_04_24_00_48));
  expect(MyTimes.nowHourIn(UTC_M11)).toEqual(13);
  expect(MyTimes.nowHourIn(UTC_M10)).toEqual(14);
  expect(MyTimes.nowHourIn(UTC_M930)).toEqual(15);
  expect(MyTimes.nowHourIn(UTC_M9)).toEqual(15);
  expect(MyTimes.nowHourIn(UTC_M8)).toEqual(17);
  expect(MyTimes.nowHourIn(UTC_M7)).toEqual(18);
  expect(MyTimes.nowHourIn(UTC_M6)).toEqual(18);
  expect(MyTimes.nowHourIn(UTC_M5)).toEqual(20);
  expect(MyTimes.nowHourIn(UTC_M4)).toEqual(20);
  expect(MyTimes.nowHourIn(UTC_M330)).toEqual(22);
  expect(MyTimes.nowHourIn(UTC_M3)).toEqual(21);
  expect(MyTimes.nowHourIn(UTC_M2)).toEqual(22);
  expect(MyTimes.nowHourIn(UTC_M1)).toEqual(23);
  expect(MyTimes.nowHourIn(UTC_0)).toEqual(1);
  expect(MyTimes.nowHourIn(UTC_P1)).toEqual(1);
  expect(MyTimes.nowHourIn(UTC_P2)).toEqual(2);
  expect(MyTimes.nowHourIn(UTC_P3)).toEqual(3);
  expect(MyTimes.nowHourIn(UTC_P330)).toEqual(5);
  expect(MyTimes.nowHourIn(UTC_P4)).toEqual(4);
  expect(MyTimes.nowHourIn(UTC_P430)).toEqual(5);
  expect(MyTimes.nowHourIn(UTC_P5)).toEqual(5);
  expect(MyTimes.nowHourIn(UTC_P530)).toEqual(6);
  expect(MyTimes.nowHourIn(UTC_P545)).toEqual(6);
  expect(MyTimes.nowHourIn(UTC_P6)).toEqual(6);
  expect(MyTimes.nowHourIn(UTC_P630)).toEqual(7);
  expect(MyTimes.nowHourIn(UTC_P7)).toEqual(7);
  expect(MyTimes.nowHourIn(UTC_P8)).toEqual(8);
  expect(MyTimes.nowHourIn(UTC_P845)).toEqual(9);
  expect(MyTimes.nowHourIn(UTC_P9)).toEqual(9);
  expect(MyTimes.nowHourIn(UTC_P930)).toEqual(10);
  expect(MyTimes.nowHourIn(UTC_P10)).toEqual(10);
  expect(MyTimes.nowHourIn(UTC_P1030)).toEqual(11);
  expect(MyTimes.nowHourIn(UTC_P11)).toEqual(11);
  expect(MyTimes.nowHourIn(UTC_P12)).toEqual(12);
  expect(MyTimes.nowHourIn(UTC_P1245)).toEqual(13);
  expect(MyTimes.nowHourIn(UTC_P13)).toEqual(13);
});

test("now hour in AWSRegionCode", () => {
  jest.setSystemTime(new Date(DATE_1999_12_31_23_59));
  expect(MyTimes.nowHourInAWS(AWS_US_E_2)).toEqual(18);
  expect(MyTimes.nowHourInAWS(AWS_US_E_1)).toEqual(18);
  expect(MyTimes.nowHourInAWS(AWS_US_W_1)).toEqual(15);
  expect(MyTimes.nowHourInAWS(AWS_US_W_2)).toEqual(15);
  expect(MyTimes.nowHourInAWS(AWS_AF_S_1)).toEqual(1);
  expect(MyTimes.nowHourInAWS(AWS_AP_E_1)).toEqual(7);
  expect(MyTimes.nowHourInAWS(AWS_AP_SE_3)).toEqual(6);
  expect(MyTimes.nowHourInAWS(AWS_AP_S_1)).toEqual(5);
  expect(MyTimes.nowHourInAWS(AWS_AP_NE_3)).toEqual(8);
  expect(MyTimes.nowHourInAWS(AWS_AP_NE_2)).toEqual(8);
  expect(MyTimes.nowHourInAWS(AWS_AP_SE_1)).toEqual(7);
  expect(MyTimes.nowHourInAWS(AWS_AP_SE_2)).toEqual(10);
  expect(MyTimes.nowHourInAWS(AWS_AP_NE_1)).toEqual(8);
  expect(MyTimes.nowHourInAWS(AWS_CA_C_1)).toEqual(18);
  expect(MyTimes.nowHourInAWS(AWS_CN_N_1)).toEqual(7);
  expect(MyTimes.nowHourInAWS(AWS_CN_NW_1)).toEqual(7);
  expect(MyTimes.nowHourInAWS(AWS_EU_C_1)).toEqual(0);
  expect(MyTimes.nowHourInAWS(AWS_EU_W_1)).toEqual(23);
  expect(MyTimes.nowHourInAWS(AWS_EU_W_2)).toEqual(23);
  expect(MyTimes.nowHourInAWS(AWS_EU_S_1)).toEqual(0);
  expect(MyTimes.nowHourInAWS(AWS_EU_W_3)).toEqual(0);
  expect(MyTimes.nowHourInAWS(AWS_EU_N_1)).toEqual(0);
  expect(MyTimes.nowHourInAWS(AWS_ME_S_1)).toEqual(2);
  expect(MyTimes.nowHourInAWS(AWS_SA_E_1)).toEqual(21);
  jest.setSystemTime(new Date(DATE_2000_01_01_00_00));
  expect(MyTimes.nowHourInAWS(AWS_US_E_2)).toEqual(19);
  expect(MyTimes.nowHourInAWS(AWS_US_E_1)).toEqual(19);
  expect(MyTimes.nowHourInAWS(AWS_US_W_1)).toEqual(16);
  expect(MyTimes.nowHourInAWS(AWS_US_W_2)).toEqual(16);
  expect(MyTimes.nowHourInAWS(AWS_AF_S_1)).toEqual(2);
  expect(MyTimes.nowHourInAWS(AWS_AP_E_1)).toEqual(8);
  expect(MyTimes.nowHourInAWS(AWS_AP_SE_3)).toEqual(7);
  expect(MyTimes.nowHourInAWS(AWS_AP_S_1)).toEqual(5);
  expect(MyTimes.nowHourInAWS(AWS_AP_NE_3)).toEqual(9);
  expect(MyTimes.nowHourInAWS(AWS_AP_NE_2)).toEqual(9);
  expect(MyTimes.nowHourInAWS(AWS_AP_SE_1)).toEqual(8);
  expect(MyTimes.nowHourInAWS(AWS_AP_SE_2)).toEqual(11);
  expect(MyTimes.nowHourInAWS(AWS_AP_NE_1)).toEqual(9);
  expect(MyTimes.nowHourInAWS(AWS_CA_C_1)).toEqual(19);
  expect(MyTimes.nowHourInAWS(AWS_CN_N_1)).toEqual(8);
  expect(MyTimes.nowHourInAWS(AWS_CN_NW_1)).toEqual(8);
  expect(MyTimes.nowHourInAWS(AWS_EU_C_1)).toEqual(1);
  expect(MyTimes.nowHourInAWS(AWS_EU_W_1)).toEqual(0);
  expect(MyTimes.nowHourInAWS(AWS_EU_W_2)).toEqual(0);
  expect(MyTimes.nowHourInAWS(AWS_EU_S_1)).toEqual(1);
  expect(MyTimes.nowHourInAWS(AWS_EU_W_3)).toEqual(1);
  expect(MyTimes.nowHourInAWS(AWS_EU_N_1)).toEqual(1);
  expect(MyTimes.nowHourInAWS(AWS_ME_S_1)).toEqual(3);
  expect(MyTimes.nowHourInAWS(AWS_SA_E_1)).toEqual(22);
  jest.setSystemTime(new Date(DATE_2001_01_01_01_02));
  expect(MyTimes.nowHourInAWS(AWS_US_E_2)).toEqual(20);
  expect(MyTimes.nowHourInAWS(AWS_US_E_1)).toEqual(20);
  expect(MyTimes.nowHourInAWS(AWS_US_W_1)).toEqual(17);
  expect(MyTimes.nowHourInAWS(AWS_US_W_2)).toEqual(17);
  expect(MyTimes.nowHourInAWS(AWS_AF_S_1)).toEqual(3);
  expect(MyTimes.nowHourInAWS(AWS_AP_E_1)).toEqual(9);
  expect(MyTimes.nowHourInAWS(AWS_AP_SE_3)).toEqual(8);
  expect(MyTimes.nowHourInAWS(AWS_AP_S_1)).toEqual(6);
  expect(MyTimes.nowHourInAWS(AWS_AP_NE_3)).toEqual(10);
  expect(MyTimes.nowHourInAWS(AWS_AP_NE_2)).toEqual(10);
  expect(MyTimes.nowHourInAWS(AWS_AP_SE_1)).toEqual(9);
  expect(MyTimes.nowHourInAWS(AWS_AP_SE_2)).toEqual(12);
  expect(MyTimes.nowHourInAWS(AWS_AP_NE_1)).toEqual(10);
  expect(MyTimes.nowHourInAWS(AWS_CA_C_1)).toEqual(20);
  expect(MyTimes.nowHourInAWS(AWS_CN_N_1)).toEqual(9);
  expect(MyTimes.nowHourInAWS(AWS_CN_NW_1)).toEqual(9);
  expect(MyTimes.nowHourInAWS(AWS_EU_C_1)).toEqual(2);
  expect(MyTimes.nowHourInAWS(AWS_EU_W_1)).toEqual(1);
  expect(MyTimes.nowHourInAWS(AWS_EU_W_2)).toEqual(1);
  expect(MyTimes.nowHourInAWS(AWS_EU_S_1)).toEqual(2);
  expect(MyTimes.nowHourInAWS(AWS_EU_W_3)).toEqual(2);
  expect(MyTimes.nowHourInAWS(AWS_EU_N_1)).toEqual(2);
  expect(MyTimes.nowHourInAWS(AWS_ME_S_1)).toEqual(4);
  expect(MyTimes.nowHourInAWS(AWS_SA_E_1)).toEqual(23);
  jest.setSystemTime(new Date(DATE_2002_02_02_02_04));
  expect(MyTimes.nowHourInAWS(AWS_US_E_2)).toEqual(21);
  expect(MyTimes.nowHourInAWS(AWS_US_E_1)).toEqual(21);
  expect(MyTimes.nowHourInAWS(AWS_US_W_1)).toEqual(18);
  expect(MyTimes.nowHourInAWS(AWS_US_W_2)).toEqual(18);
  expect(MyTimes.nowHourInAWS(AWS_AF_S_1)).toEqual(4);
  expect(MyTimes.nowHourInAWS(AWS_AP_E_1)).toEqual(10);
  expect(MyTimes.nowHourInAWS(AWS_AP_SE_3)).toEqual(9);
  expect(MyTimes.nowHourInAWS(AWS_AP_S_1)).toEqual(7);
  expect(MyTimes.nowHourInAWS(AWS_AP_NE_3)).toEqual(11);
  expect(MyTimes.nowHourInAWS(AWS_AP_NE_2)).toEqual(11);
  expect(MyTimes.nowHourInAWS(AWS_AP_SE_1)).toEqual(10);
  expect(MyTimes.nowHourInAWS(AWS_AP_SE_2)).toEqual(13);
  expect(MyTimes.nowHourInAWS(AWS_AP_NE_1)).toEqual(11);
  expect(MyTimes.nowHourInAWS(AWS_CA_C_1)).toEqual(21);
  expect(MyTimes.nowHourInAWS(AWS_CN_N_1)).toEqual(10);
  expect(MyTimes.nowHourInAWS(AWS_CN_NW_1)).toEqual(10);
  expect(MyTimes.nowHourInAWS(AWS_EU_C_1)).toEqual(3);
  expect(MyTimes.nowHourInAWS(AWS_EU_W_1)).toEqual(2);
  expect(MyTimes.nowHourInAWS(AWS_EU_W_2)).toEqual(2);
  expect(MyTimes.nowHourInAWS(AWS_EU_S_1)).toEqual(3);
  expect(MyTimes.nowHourInAWS(AWS_EU_W_3)).toEqual(3);
  expect(MyTimes.nowHourInAWS(AWS_EU_N_1)).toEqual(3);
  expect(MyTimes.nowHourInAWS(AWS_ME_S_1)).toEqual(5);
  expect(MyTimes.nowHourInAWS(AWS_SA_E_1)).toEqual(0);
  jest.setSystemTime(new Date(DATE_2003_03_03_03_06));
  expect(MyTimes.nowHourInAWS(AWS_US_E_2)).toEqual(22);
  expect(MyTimes.nowHourInAWS(AWS_US_E_1)).toEqual(22);
  expect(MyTimes.nowHourInAWS(AWS_US_W_1)).toEqual(19);
  expect(MyTimes.nowHourInAWS(AWS_US_W_2)).toEqual(19);
  expect(MyTimes.nowHourInAWS(AWS_AF_S_1)).toEqual(5);
  expect(MyTimes.nowHourInAWS(AWS_AP_E_1)).toEqual(11);
  expect(MyTimes.nowHourInAWS(AWS_AP_SE_3)).toEqual(10);
  expect(MyTimes.nowHourInAWS(AWS_AP_S_1)).toEqual(8);
  expect(MyTimes.nowHourInAWS(AWS_AP_NE_3)).toEqual(12);
  expect(MyTimes.nowHourInAWS(AWS_AP_NE_2)).toEqual(12);
  expect(MyTimes.nowHourInAWS(AWS_AP_SE_1)).toEqual(11);
  expect(MyTimes.nowHourInAWS(AWS_AP_SE_2)).toEqual(14);
  expect(MyTimes.nowHourInAWS(AWS_AP_NE_1)).toEqual(12);
  expect(MyTimes.nowHourInAWS(AWS_CA_C_1)).toEqual(22);
  expect(MyTimes.nowHourInAWS(AWS_CN_N_1)).toEqual(11);
  expect(MyTimes.nowHourInAWS(AWS_CN_NW_1)).toEqual(11);
  expect(MyTimes.nowHourInAWS(AWS_EU_C_1)).toEqual(4);
  expect(MyTimes.nowHourInAWS(AWS_EU_W_1)).toEqual(3);
  expect(MyTimes.nowHourInAWS(AWS_EU_W_2)).toEqual(3);
  expect(MyTimes.nowHourInAWS(AWS_EU_S_1)).toEqual(4);
  expect(MyTimes.nowHourInAWS(AWS_EU_W_3)).toEqual(4);
  expect(MyTimes.nowHourInAWS(AWS_EU_N_1)).toEqual(4);
  expect(MyTimes.nowHourInAWS(AWS_ME_S_1)).toEqual(6);
  expect(MyTimes.nowHourInAWS(AWS_SA_E_1)).toEqual(0);
  jest.setSystemTime(new Date(DATE_2004_04_04_04_08));
  expect(MyTimes.nowHourInAWS(AWS_US_E_2)).toEqual(23);
  expect(MyTimes.nowHourInAWS(AWS_US_E_1)).toEqual(23);
  expect(MyTimes.nowHourInAWS(AWS_US_W_1)).toEqual(20);
  expect(MyTimes.nowHourInAWS(AWS_US_W_2)).toEqual(20);
  expect(MyTimes.nowHourInAWS(AWS_AF_S_1)).toEqual(6);
  expect(MyTimes.nowHourInAWS(AWS_AP_E_1)).toEqual(12);
  expect(MyTimes.nowHourInAWS(AWS_AP_SE_3)).toEqual(11);
  expect(MyTimes.nowHourInAWS(AWS_AP_S_1)).toEqual(9);
  expect(MyTimes.nowHourInAWS(AWS_AP_NE_3)).toEqual(13);
  expect(MyTimes.nowHourInAWS(AWS_AP_NE_2)).toEqual(13);
  expect(MyTimes.nowHourInAWS(AWS_AP_SE_1)).toEqual(12);
  expect(MyTimes.nowHourInAWS(AWS_AP_SE_2)).toEqual(14);
  expect(MyTimes.nowHourInAWS(AWS_AP_NE_1)).toEqual(13);
  expect(MyTimes.nowHourInAWS(AWS_CA_C_1)).toEqual(23);
  expect(MyTimes.nowHourInAWS(AWS_CN_N_1)).toEqual(12);
  expect(MyTimes.nowHourInAWS(AWS_CN_NW_1)).toEqual(12);
  expect(MyTimes.nowHourInAWS(AWS_EU_C_1)).toEqual(6);
  expect(MyTimes.nowHourInAWS(AWS_EU_W_1)).toEqual(5);
  expect(MyTimes.nowHourInAWS(AWS_EU_W_2)).toEqual(5);
  expect(MyTimes.nowHourInAWS(AWS_EU_S_1)).toEqual(6);
  expect(MyTimes.nowHourInAWS(AWS_EU_W_3)).toEqual(6);
  expect(MyTimes.nowHourInAWS(AWS_EU_N_1)).toEqual(6);
  expect(MyTimes.nowHourInAWS(AWS_ME_S_1)).toEqual(7);
  expect(MyTimes.nowHourInAWS(AWS_SA_E_1)).toEqual(1);
  jest.setSystemTime(new Date(DATE_2005_05_05_05_10));
  expect(MyTimes.nowHourInAWS(AWS_US_E_2)).toEqual(1);
  expect(MyTimes.nowHourInAWS(AWS_US_E_1)).toEqual(1);
  expect(MyTimes.nowHourInAWS(AWS_US_W_1)).toEqual(22);
  expect(MyTimes.nowHourInAWS(AWS_US_W_2)).toEqual(22);
  expect(MyTimes.nowHourInAWS(AWS_AF_S_1)).toEqual(8);
  expect(MyTimes.nowHourInAWS(AWS_AP_E_1)).toEqual(13);
  expect(MyTimes.nowHourInAWS(AWS_AP_SE_3)).toEqual(12);
  expect(MyTimes.nowHourInAWS(AWS_AP_S_1)).toEqual(10);
  expect(MyTimes.nowHourInAWS(AWS_AP_NE_3)).toEqual(14);
  expect(MyTimes.nowHourInAWS(AWS_AP_NE_2)).toEqual(14);
  expect(MyTimes.nowHourInAWS(AWS_AP_SE_1)).toEqual(13);
  expect(MyTimes.nowHourInAWS(AWS_AP_SE_2)).toEqual(15);
  expect(MyTimes.nowHourInAWS(AWS_AP_NE_1)).toEqual(14);
  expect(MyTimes.nowHourInAWS(AWS_CA_C_1)).toEqual(1);
  expect(MyTimes.nowHourInAWS(AWS_CN_N_1)).toEqual(13);
  expect(MyTimes.nowHourInAWS(AWS_CN_NW_1)).toEqual(13);
  expect(MyTimes.nowHourInAWS(AWS_EU_C_1)).toEqual(7);
  expect(MyTimes.nowHourInAWS(AWS_EU_W_1)).toEqual(6);
  expect(MyTimes.nowHourInAWS(AWS_EU_W_2)).toEqual(6);
  expect(MyTimes.nowHourInAWS(AWS_EU_S_1)).toEqual(7);
  expect(MyTimes.nowHourInAWS(AWS_EU_W_3)).toEqual(7);
  expect(MyTimes.nowHourInAWS(AWS_EU_N_1)).toEqual(7);
  expect(MyTimes.nowHourInAWS(AWS_ME_S_1)).toEqual(8);
  expect(MyTimes.nowHourInAWS(AWS_SA_E_1)).toEqual(2);
  jest.setSystemTime(new Date(DATE_2006_06_06_06_12));
  expect(MyTimes.nowHourInAWS(AWS_US_E_2)).toEqual(2);
  expect(MyTimes.nowHourInAWS(AWS_US_E_1)).toEqual(2);
  expect(MyTimes.nowHourInAWS(AWS_US_W_1)).toEqual(23);
  expect(MyTimes.nowHourInAWS(AWS_US_W_2)).toEqual(23);
  expect(MyTimes.nowHourInAWS(AWS_AF_S_1)).toEqual(9);
  expect(MyTimes.nowHourInAWS(AWS_AP_E_1)).toEqual(14);
  expect(MyTimes.nowHourInAWS(AWS_AP_SE_3)).toEqual(13);
  expect(MyTimes.nowHourInAWS(AWS_AP_S_1)).toEqual(11);
  expect(MyTimes.nowHourInAWS(AWS_AP_NE_3)).toEqual(15);
  expect(MyTimes.nowHourInAWS(AWS_AP_NE_2)).toEqual(15);
  expect(MyTimes.nowHourInAWS(AWS_AP_SE_1)).toEqual(14);
  expect(MyTimes.nowHourInAWS(AWS_AP_SE_2)).toEqual(16);
  expect(MyTimes.nowHourInAWS(AWS_AP_NE_1)).toEqual(15);
  expect(MyTimes.nowHourInAWS(AWS_CA_C_1)).toEqual(2);
  expect(MyTimes.nowHourInAWS(AWS_CN_N_1)).toEqual(14);
  expect(MyTimes.nowHourInAWS(AWS_CN_NW_1)).toEqual(14);
  expect(MyTimes.nowHourInAWS(AWS_EU_C_1)).toEqual(8);
  expect(MyTimes.nowHourInAWS(AWS_EU_W_1)).toEqual(7);
  expect(MyTimes.nowHourInAWS(AWS_EU_W_2)).toEqual(7);
  expect(MyTimes.nowHourInAWS(AWS_EU_S_1)).toEqual(8);
  expect(MyTimes.nowHourInAWS(AWS_EU_W_3)).toEqual(8);
  expect(MyTimes.nowHourInAWS(AWS_EU_N_1)).toEqual(8);
  expect(MyTimes.nowHourInAWS(AWS_ME_S_1)).toEqual(9);
  expect(MyTimes.nowHourInAWS(AWS_SA_E_1)).toEqual(3);
  jest.setSystemTime(new Date(DATE_2007_07_07_07_14));
  expect(MyTimes.nowHourInAWS(AWS_US_E_2)).toEqual(3);
  expect(MyTimes.nowHourInAWS(AWS_US_E_1)).toEqual(3);
  expect(MyTimes.nowHourInAWS(AWS_US_W_1)).toEqual(0);
  expect(MyTimes.nowHourInAWS(AWS_US_W_2)).toEqual(0);
  expect(MyTimes.nowHourInAWS(AWS_AF_S_1)).toEqual(10);
  expect(MyTimes.nowHourInAWS(AWS_AP_E_1)).toEqual(15);
  expect(MyTimes.nowHourInAWS(AWS_AP_SE_3)).toEqual(14);
  expect(MyTimes.nowHourInAWS(AWS_AP_S_1)).toEqual(12);
  expect(MyTimes.nowHourInAWS(AWS_AP_NE_3)).toEqual(16);
  expect(MyTimes.nowHourInAWS(AWS_AP_NE_2)).toEqual(16);
  expect(MyTimes.nowHourInAWS(AWS_AP_SE_1)).toEqual(15);
  expect(MyTimes.nowHourInAWS(AWS_AP_SE_2)).toEqual(17);
  expect(MyTimes.nowHourInAWS(AWS_AP_NE_1)).toEqual(16);
  expect(MyTimes.nowHourInAWS(AWS_CA_C_1)).toEqual(3);
  expect(MyTimes.nowHourInAWS(AWS_CN_N_1)).toEqual(15);
  expect(MyTimes.nowHourInAWS(AWS_CN_NW_1)).toEqual(15);
  expect(MyTimes.nowHourInAWS(AWS_EU_C_1)).toEqual(9);
  expect(MyTimes.nowHourInAWS(AWS_EU_W_1)).toEqual(8);
  expect(MyTimes.nowHourInAWS(AWS_EU_W_2)).toEqual(8);
  expect(MyTimes.nowHourInAWS(AWS_EU_S_1)).toEqual(9);
  expect(MyTimes.nowHourInAWS(AWS_EU_W_3)).toEqual(9);
  expect(MyTimes.nowHourInAWS(AWS_EU_N_1)).toEqual(9);
  expect(MyTimes.nowHourInAWS(AWS_ME_S_1)).toEqual(10);
  expect(MyTimes.nowHourInAWS(AWS_SA_E_1)).toEqual(4);
  jest.setSystemTime(new Date(DATE_2008_08_08_08_16));
  expect(MyTimes.nowHourInAWS(AWS_US_E_2)).toEqual(4);
  expect(MyTimes.nowHourInAWS(AWS_US_E_1)).toEqual(4);
  expect(MyTimes.nowHourInAWS(AWS_US_W_1)).toEqual(1);
  expect(MyTimes.nowHourInAWS(AWS_US_W_2)).toEqual(1);
  expect(MyTimes.nowHourInAWS(AWS_AF_S_1)).toEqual(11);
  expect(MyTimes.nowHourInAWS(AWS_AP_E_1)).toEqual(16);
  expect(MyTimes.nowHourInAWS(AWS_AP_SE_3)).toEqual(15);
  expect(MyTimes.nowHourInAWS(AWS_AP_S_1)).toEqual(13);
  expect(MyTimes.nowHourInAWS(AWS_AP_NE_3)).toEqual(17);
  expect(MyTimes.nowHourInAWS(AWS_AP_NE_2)).toEqual(17);
  expect(MyTimes.nowHourInAWS(AWS_AP_SE_1)).toEqual(16);
  expect(MyTimes.nowHourInAWS(AWS_AP_SE_2)).toEqual(18);
  expect(MyTimes.nowHourInAWS(AWS_AP_NE_1)).toEqual(17);
  expect(MyTimes.nowHourInAWS(AWS_CA_C_1)).toEqual(4);
  expect(MyTimes.nowHourInAWS(AWS_CN_N_1)).toEqual(16);
  expect(MyTimes.nowHourInAWS(AWS_CN_NW_1)).toEqual(16);
  expect(MyTimes.nowHourInAWS(AWS_EU_C_1)).toEqual(10);
  expect(MyTimes.nowHourInAWS(AWS_EU_W_1)).toEqual(9);
  expect(MyTimes.nowHourInAWS(AWS_EU_W_2)).toEqual(9);
  expect(MyTimes.nowHourInAWS(AWS_EU_S_1)).toEqual(10);
  expect(MyTimes.nowHourInAWS(AWS_EU_W_3)).toEqual(10);
  expect(MyTimes.nowHourInAWS(AWS_EU_N_1)).toEqual(10);
  expect(MyTimes.nowHourInAWS(AWS_ME_S_1)).toEqual(11);
  expect(MyTimes.nowHourInAWS(AWS_SA_E_1)).toEqual(5);
  jest.setSystemTime(new Date(DATE_2009_09_09_09_18));
  expect(MyTimes.nowHourInAWS(AWS_US_E_2)).toEqual(5);
  expect(MyTimes.nowHourInAWS(AWS_US_E_1)).toEqual(5);
  expect(MyTimes.nowHourInAWS(AWS_US_W_1)).toEqual(2);
  expect(MyTimes.nowHourInAWS(AWS_US_W_2)).toEqual(2);
  expect(MyTimes.nowHourInAWS(AWS_AF_S_1)).toEqual(11);
  expect(MyTimes.nowHourInAWS(AWS_AP_E_1)).toEqual(17);
  expect(MyTimes.nowHourInAWS(AWS_AP_SE_3)).toEqual(16);
  expect(MyTimes.nowHourInAWS(AWS_AP_S_1)).toEqual(14);
  expect(MyTimes.nowHourInAWS(AWS_AP_NE_3)).toEqual(18);
  expect(MyTimes.nowHourInAWS(AWS_AP_NE_2)).toEqual(18);
  expect(MyTimes.nowHourInAWS(AWS_AP_SE_1)).toEqual(17);
  expect(MyTimes.nowHourInAWS(AWS_AP_SE_2)).toEqual(19);
  expect(MyTimes.nowHourInAWS(AWS_AP_NE_1)).toEqual(18);
  expect(MyTimes.nowHourInAWS(AWS_CA_C_1)).toEqual(5);
  expect(MyTimes.nowHourInAWS(AWS_CN_N_1)).toEqual(17);
  expect(MyTimes.nowHourInAWS(AWS_CN_NW_1)).toEqual(17);
  expect(MyTimes.nowHourInAWS(AWS_EU_C_1)).toEqual(11);
  expect(MyTimes.nowHourInAWS(AWS_EU_W_1)).toEqual(10);
  expect(MyTimes.nowHourInAWS(AWS_EU_W_2)).toEqual(10);
  expect(MyTimes.nowHourInAWS(AWS_EU_S_1)).toEqual(11);
  expect(MyTimes.nowHourInAWS(AWS_EU_W_3)).toEqual(11);
  expect(MyTimes.nowHourInAWS(AWS_EU_N_1)).toEqual(11);
  expect(MyTimes.nowHourInAWS(AWS_ME_S_1)).toEqual(12);
  expect(MyTimes.nowHourInAWS(AWS_SA_E_1)).toEqual(6);
  jest.setSystemTime(new Date(DATE_2010_10_10_10_20));
  expect(MyTimes.nowHourInAWS(AWS_US_E_2)).toEqual(6);
  expect(MyTimes.nowHourInAWS(AWS_US_E_1)).toEqual(6);
  expect(MyTimes.nowHourInAWS(AWS_US_W_1)).toEqual(3);
  expect(MyTimes.nowHourInAWS(AWS_US_W_2)).toEqual(3);
  expect(MyTimes.nowHourInAWS(AWS_AF_S_1)).toEqual(12);
  expect(MyTimes.nowHourInAWS(AWS_AP_E_1)).toEqual(18);
  expect(MyTimes.nowHourInAWS(AWS_AP_SE_3)).toEqual(17);
  expect(MyTimes.nowHourInAWS(AWS_AP_S_1)).toEqual(15);
  expect(MyTimes.nowHourInAWS(AWS_AP_NE_3)).toEqual(19);
  expect(MyTimes.nowHourInAWS(AWS_AP_NE_2)).toEqual(19);
  expect(MyTimes.nowHourInAWS(AWS_AP_SE_1)).toEqual(18);
  expect(MyTimes.nowHourInAWS(AWS_AP_SE_2)).toEqual(21);
  expect(MyTimes.nowHourInAWS(AWS_AP_NE_1)).toEqual(19);
  expect(MyTimes.nowHourInAWS(AWS_CA_C_1)).toEqual(6);
  expect(MyTimes.nowHourInAWS(AWS_CN_N_1)).toEqual(18);
  expect(MyTimes.nowHourInAWS(AWS_CN_NW_1)).toEqual(18);
  expect(MyTimes.nowHourInAWS(AWS_EU_C_1)).toEqual(12);
  expect(MyTimes.nowHourInAWS(AWS_EU_W_1)).toEqual(11);
  expect(MyTimes.nowHourInAWS(AWS_EU_W_2)).toEqual(11);
  expect(MyTimes.nowHourInAWS(AWS_EU_S_1)).toEqual(12);
  expect(MyTimes.nowHourInAWS(AWS_EU_W_3)).toEqual(12);
  expect(MyTimes.nowHourInAWS(AWS_EU_N_1)).toEqual(12);
  expect(MyTimes.nowHourInAWS(AWS_ME_S_1)).toEqual(13);
  expect(MyTimes.nowHourInAWS(AWS_SA_E_1)).toEqual(7);
  jest.setSystemTime(new Date(DATE_2011_11_11_11_22));
  expect(MyTimes.nowHourInAWS(AWS_US_E_2)).toEqual(6);
  expect(MyTimes.nowHourInAWS(AWS_US_E_1)).toEqual(6);
  expect(MyTimes.nowHourInAWS(AWS_US_W_1)).toEqual(3);
  expect(MyTimes.nowHourInAWS(AWS_US_W_2)).toEqual(3);
  expect(MyTimes.nowHourInAWS(AWS_AF_S_1)).toEqual(13);
  expect(MyTimes.nowHourInAWS(AWS_AP_E_1)).toEqual(19);
  expect(MyTimes.nowHourInAWS(AWS_AP_SE_3)).toEqual(18);
  expect(MyTimes.nowHourInAWS(AWS_AP_S_1)).toEqual(16);
  expect(MyTimes.nowHourInAWS(AWS_AP_NE_3)).toEqual(20);
  expect(MyTimes.nowHourInAWS(AWS_AP_NE_2)).toEqual(20);
  expect(MyTimes.nowHourInAWS(AWS_AP_SE_1)).toEqual(19);
  expect(MyTimes.nowHourInAWS(AWS_AP_SE_2)).toEqual(22);
  expect(MyTimes.nowHourInAWS(AWS_AP_NE_1)).toEqual(20);
  expect(MyTimes.nowHourInAWS(AWS_CA_C_1)).toEqual(6);
  expect(MyTimes.nowHourInAWS(AWS_CN_N_1)).toEqual(19);
  expect(MyTimes.nowHourInAWS(AWS_CN_NW_1)).toEqual(19);
  expect(MyTimes.nowHourInAWS(AWS_EU_C_1)).toEqual(12);
  expect(MyTimes.nowHourInAWS(AWS_EU_W_1)).toEqual(11);
  expect(MyTimes.nowHourInAWS(AWS_EU_W_2)).toEqual(11);
  expect(MyTimes.nowHourInAWS(AWS_EU_S_1)).toEqual(12);
  expect(MyTimes.nowHourInAWS(AWS_EU_W_3)).toEqual(12);
  expect(MyTimes.nowHourInAWS(AWS_EU_N_1)).toEqual(12);
  expect(MyTimes.nowHourInAWS(AWS_ME_S_1)).toEqual(14);
  expect(MyTimes.nowHourInAWS(AWS_SA_E_1)).toEqual(9);
  jest.setSystemTime(new Date(DATE_2012_12_12_12_24));
  expect(MyTimes.nowHourInAWS(AWS_US_E_2)).toEqual(7);
  expect(MyTimes.nowHourInAWS(AWS_US_E_1)).toEqual(7);
  expect(MyTimes.nowHourInAWS(AWS_US_W_1)).toEqual(4);
  expect(MyTimes.nowHourInAWS(AWS_US_W_2)).toEqual(4);
  expect(MyTimes.nowHourInAWS(AWS_AF_S_1)).toEqual(14);
  expect(MyTimes.nowHourInAWS(AWS_AP_E_1)).toEqual(20);
  expect(MyTimes.nowHourInAWS(AWS_AP_SE_3)).toEqual(19);
  expect(MyTimes.nowHourInAWS(AWS_AP_S_1)).toEqual(17);
  expect(MyTimes.nowHourInAWS(AWS_AP_NE_3)).toEqual(21);
  expect(MyTimes.nowHourInAWS(AWS_AP_NE_2)).toEqual(21);
  expect(MyTimes.nowHourInAWS(AWS_AP_SE_1)).toEqual(20);
  expect(MyTimes.nowHourInAWS(AWS_AP_SE_2)).toEqual(23);
  expect(MyTimes.nowHourInAWS(AWS_AP_NE_1)).toEqual(21);
  expect(MyTimes.nowHourInAWS(AWS_CA_C_1)).toEqual(7);
  expect(MyTimes.nowHourInAWS(AWS_CN_N_1)).toEqual(20);
  expect(MyTimes.nowHourInAWS(AWS_CN_NW_1)).toEqual(20);
  expect(MyTimes.nowHourInAWS(AWS_EU_C_1)).toEqual(13);
  expect(MyTimes.nowHourInAWS(AWS_EU_W_1)).toEqual(12);
  expect(MyTimes.nowHourInAWS(AWS_EU_W_2)).toEqual(12);
  expect(MyTimes.nowHourInAWS(AWS_EU_S_1)).toEqual(13);
  expect(MyTimes.nowHourInAWS(AWS_EU_W_3)).toEqual(13);
  expect(MyTimes.nowHourInAWS(AWS_EU_N_1)).toEqual(13);
  expect(MyTimes.nowHourInAWS(AWS_ME_S_1)).toEqual(15);
  expect(MyTimes.nowHourInAWS(AWS_SA_E_1)).toEqual(10);
  jest.setSystemTime(new Date(DATE_2013_03_13_13_26));
  expect(MyTimes.nowHourInAWS(AWS_US_E_2)).toEqual(9);
  expect(MyTimes.nowHourInAWS(AWS_US_E_1)).toEqual(9);
  expect(MyTimes.nowHourInAWS(AWS_US_W_1)).toEqual(6);
  expect(MyTimes.nowHourInAWS(AWS_US_W_2)).toEqual(6);
  expect(MyTimes.nowHourInAWS(AWS_AF_S_1)).toEqual(15);
  expect(MyTimes.nowHourInAWS(AWS_AP_E_1)).toEqual(21);
  expect(MyTimes.nowHourInAWS(AWS_AP_SE_3)).toEqual(20);
  expect(MyTimes.nowHourInAWS(AWS_AP_S_1)).toEqual(18);
  expect(MyTimes.nowHourInAWS(AWS_AP_NE_3)).toEqual(22);
  expect(MyTimes.nowHourInAWS(AWS_AP_NE_2)).toEqual(22);
  expect(MyTimes.nowHourInAWS(AWS_AP_SE_1)).toEqual(21);
  expect(MyTimes.nowHourInAWS(AWS_AP_SE_2)).toEqual(0);
  expect(MyTimes.nowHourInAWS(AWS_AP_NE_1)).toEqual(22);
  expect(MyTimes.nowHourInAWS(AWS_CA_C_1)).toEqual(9);
  expect(MyTimes.nowHourInAWS(AWS_CN_N_1)).toEqual(21);
  expect(MyTimes.nowHourInAWS(AWS_CN_NW_1)).toEqual(21);
  expect(MyTimes.nowHourInAWS(AWS_EU_C_1)).toEqual(14);
  expect(MyTimes.nowHourInAWS(AWS_EU_W_1)).toEqual(13);
  expect(MyTimes.nowHourInAWS(AWS_EU_W_2)).toEqual(13);
  expect(MyTimes.nowHourInAWS(AWS_EU_S_1)).toEqual(14);
  expect(MyTimes.nowHourInAWS(AWS_EU_W_3)).toEqual(14);
  expect(MyTimes.nowHourInAWS(AWS_EU_N_1)).toEqual(14);
  expect(MyTimes.nowHourInAWS(AWS_ME_S_1)).toEqual(16);
  expect(MyTimes.nowHourInAWS(AWS_SA_E_1)).toEqual(10);
  jest.setSystemTime(new Date(DATE_2014_04_14_14_28));
  expect(MyTimes.nowHourInAWS(AWS_US_E_2)).toEqual(10);
  expect(MyTimes.nowHourInAWS(AWS_US_E_1)).toEqual(10);
  expect(MyTimes.nowHourInAWS(AWS_US_W_1)).toEqual(7);
  expect(MyTimes.nowHourInAWS(AWS_US_W_2)).toEqual(7);
  expect(MyTimes.nowHourInAWS(AWS_AF_S_1)).toEqual(16);
  expect(MyTimes.nowHourInAWS(AWS_AP_E_1)).toEqual(22);
  expect(MyTimes.nowHourInAWS(AWS_AP_SE_3)).toEqual(21);
  expect(MyTimes.nowHourInAWS(AWS_AP_S_1)).toEqual(19);
  expect(MyTimes.nowHourInAWS(AWS_AP_NE_3)).toEqual(23);
  expect(MyTimes.nowHourInAWS(AWS_AP_NE_2)).toEqual(23);
  expect(MyTimes.nowHourInAWS(AWS_AP_SE_1)).toEqual(22);
  expect(MyTimes.nowHourInAWS(AWS_AP_SE_2)).toEqual(0);
  expect(MyTimes.nowHourInAWS(AWS_AP_NE_1)).toEqual(23);
  expect(MyTimes.nowHourInAWS(AWS_CA_C_1)).toEqual(10);
  expect(MyTimes.nowHourInAWS(AWS_CN_N_1)).toEqual(22);
  expect(MyTimes.nowHourInAWS(AWS_CN_NW_1)).toEqual(22);
  expect(MyTimes.nowHourInAWS(AWS_EU_C_1)).toEqual(16);
  expect(MyTimes.nowHourInAWS(AWS_EU_W_1)).toEqual(15);
  expect(MyTimes.nowHourInAWS(AWS_EU_W_2)).toEqual(15);
  expect(MyTimes.nowHourInAWS(AWS_EU_S_1)).toEqual(16);
  expect(MyTimes.nowHourInAWS(AWS_EU_W_3)).toEqual(16);
  expect(MyTimes.nowHourInAWS(AWS_EU_N_1)).toEqual(16);
  expect(MyTimes.nowHourInAWS(AWS_ME_S_1)).toEqual(17);
  expect(MyTimes.nowHourInAWS(AWS_SA_E_1)).toEqual(11);
  jest.setSystemTime(new Date(DATE_2015_05_15_15_30));
  expect(MyTimes.nowHourInAWS(AWS_US_E_2)).toEqual(11);
  expect(MyTimes.nowHourInAWS(AWS_US_E_1)).toEqual(11);
  expect(MyTimes.nowHourInAWS(AWS_US_W_1)).toEqual(8);
  expect(MyTimes.nowHourInAWS(AWS_US_W_2)).toEqual(8);
  expect(MyTimes.nowHourInAWS(AWS_AF_S_1)).toEqual(17);
  expect(MyTimes.nowHourInAWS(AWS_AP_E_1)).toEqual(23);
  expect(MyTimes.nowHourInAWS(AWS_AP_SE_3)).toEqual(22);
  expect(MyTimes.nowHourInAWS(AWS_AP_S_1)).toEqual(21);
  expect(MyTimes.nowHourInAWS(AWS_AP_NE_3)).toEqual(0);
  expect(MyTimes.nowHourInAWS(AWS_AP_NE_2)).toEqual(0);
  expect(MyTimes.nowHourInAWS(AWS_AP_SE_1)).toEqual(23);
  expect(MyTimes.nowHourInAWS(AWS_AP_SE_2)).toEqual(1);
  expect(MyTimes.nowHourInAWS(AWS_AP_NE_1)).toEqual(0);
  expect(MyTimes.nowHourInAWS(AWS_CA_C_1)).toEqual(11);
  expect(MyTimes.nowHourInAWS(AWS_CN_N_1)).toEqual(23);
  expect(MyTimes.nowHourInAWS(AWS_CN_NW_1)).toEqual(23);
  expect(MyTimes.nowHourInAWS(AWS_EU_C_1)).toEqual(17);
  expect(MyTimes.nowHourInAWS(AWS_EU_W_1)).toEqual(16);
  expect(MyTimes.nowHourInAWS(AWS_EU_W_2)).toEqual(16);
  expect(MyTimes.nowHourInAWS(AWS_EU_S_1)).toEqual(17);
  expect(MyTimes.nowHourInAWS(AWS_EU_W_3)).toEqual(17);
  expect(MyTimes.nowHourInAWS(AWS_EU_N_1)).toEqual(17);
  expect(MyTimes.nowHourInAWS(AWS_ME_S_1)).toEqual(18);
  expect(MyTimes.nowHourInAWS(AWS_SA_E_1)).toEqual(12);
  jest.setSystemTime(new Date(DATE_2016_06_16_16_32));
  expect(MyTimes.nowHourInAWS(AWS_US_E_2)).toEqual(12);
  expect(MyTimes.nowHourInAWS(AWS_US_E_1)).toEqual(12);
  expect(MyTimes.nowHourInAWS(AWS_US_W_1)).toEqual(9);
  expect(MyTimes.nowHourInAWS(AWS_US_W_2)).toEqual(9);
  expect(MyTimes.nowHourInAWS(AWS_AF_S_1)).toEqual(18);
  expect(MyTimes.nowHourInAWS(AWS_AP_E_1)).toEqual(0);
  expect(MyTimes.nowHourInAWS(AWS_AP_SE_3)).toEqual(23);
  expect(MyTimes.nowHourInAWS(AWS_AP_S_1)).toEqual(22);
  expect(MyTimes.nowHourInAWS(AWS_AP_NE_3)).toEqual(1);
  expect(MyTimes.nowHourInAWS(AWS_AP_NE_2)).toEqual(1);
  expect(MyTimes.nowHourInAWS(AWS_AP_SE_1)).toEqual(0);
  expect(MyTimes.nowHourInAWS(AWS_AP_SE_2)).toEqual(2);
  expect(MyTimes.nowHourInAWS(AWS_AP_NE_1)).toEqual(1);
  expect(MyTimes.nowHourInAWS(AWS_CA_C_1)).toEqual(12);
  expect(MyTimes.nowHourInAWS(AWS_CN_N_1)).toEqual(0);
  expect(MyTimes.nowHourInAWS(AWS_CN_NW_1)).toEqual(0);
  expect(MyTimes.nowHourInAWS(AWS_EU_C_1)).toEqual(18);
  expect(MyTimes.nowHourInAWS(AWS_EU_W_1)).toEqual(17);
  expect(MyTimes.nowHourInAWS(AWS_EU_W_2)).toEqual(17);
  expect(MyTimes.nowHourInAWS(AWS_EU_S_1)).toEqual(18);
  expect(MyTimes.nowHourInAWS(AWS_EU_W_3)).toEqual(18);
  expect(MyTimes.nowHourInAWS(AWS_EU_N_1)).toEqual(18);
  expect(MyTimes.nowHourInAWS(AWS_ME_S_1)).toEqual(19);
  expect(MyTimes.nowHourInAWS(AWS_SA_E_1)).toEqual(13);
  jest.setSystemTime(new Date(DATE_2017_07_17_17_34));
  expect(MyTimes.nowHourInAWS(AWS_US_E_2)).toEqual(13);
  expect(MyTimes.nowHourInAWS(AWS_US_E_1)).toEqual(13);
  expect(MyTimes.nowHourInAWS(AWS_US_W_1)).toEqual(10);
  expect(MyTimes.nowHourInAWS(AWS_US_W_2)).toEqual(10);
  expect(MyTimes.nowHourInAWS(AWS_AF_S_1)).toEqual(19);
  expect(MyTimes.nowHourInAWS(AWS_AP_E_1)).toEqual(1);
  expect(MyTimes.nowHourInAWS(AWS_AP_SE_3)).toEqual(0);
  expect(MyTimes.nowHourInAWS(AWS_AP_S_1)).toEqual(23);
  expect(MyTimes.nowHourInAWS(AWS_AP_NE_3)).toEqual(2);
  expect(MyTimes.nowHourInAWS(AWS_AP_NE_2)).toEqual(2);
  expect(MyTimes.nowHourInAWS(AWS_AP_SE_1)).toEqual(1);
  expect(MyTimes.nowHourInAWS(AWS_AP_SE_2)).toEqual(3);
  expect(MyTimes.nowHourInAWS(AWS_AP_NE_1)).toEqual(2);
  expect(MyTimes.nowHourInAWS(AWS_CA_C_1)).toEqual(13);
  expect(MyTimes.nowHourInAWS(AWS_CN_N_1)).toEqual(1);
  expect(MyTimes.nowHourInAWS(AWS_CN_NW_1)).toEqual(1);
  expect(MyTimes.nowHourInAWS(AWS_EU_C_1)).toEqual(19);
  expect(MyTimes.nowHourInAWS(AWS_EU_W_1)).toEqual(18);
  expect(MyTimes.nowHourInAWS(AWS_EU_W_2)).toEqual(18);
  expect(MyTimes.nowHourInAWS(AWS_EU_S_1)).toEqual(19);
  expect(MyTimes.nowHourInAWS(AWS_EU_W_3)).toEqual(19);
  expect(MyTimes.nowHourInAWS(AWS_EU_N_1)).toEqual(19);
  expect(MyTimes.nowHourInAWS(AWS_ME_S_1)).toEqual(20);
  expect(MyTimes.nowHourInAWS(AWS_SA_E_1)).toEqual(14);
  jest.setSystemTime(new Date(DATE_2018_08_18_18_36));
  expect(MyTimes.nowHourInAWS(AWS_US_E_2)).toEqual(14);
  expect(MyTimes.nowHourInAWS(AWS_US_E_1)).toEqual(14);
  expect(MyTimes.nowHourInAWS(AWS_US_W_1)).toEqual(11);
  expect(MyTimes.nowHourInAWS(AWS_US_W_2)).toEqual(11);
  expect(MyTimes.nowHourInAWS(AWS_AF_S_1)).toEqual(20);
  expect(MyTimes.nowHourInAWS(AWS_AP_E_1)).toEqual(2);
  expect(MyTimes.nowHourInAWS(AWS_AP_SE_3)).toEqual(1);
  expect(MyTimes.nowHourInAWS(AWS_AP_S_1)).toEqual(0);
  expect(MyTimes.nowHourInAWS(AWS_AP_NE_3)).toEqual(3);
  expect(MyTimes.nowHourInAWS(AWS_AP_NE_2)).toEqual(3);
  expect(MyTimes.nowHourInAWS(AWS_AP_SE_1)).toEqual(2);
  expect(MyTimes.nowHourInAWS(AWS_AP_SE_2)).toEqual(4);
  expect(MyTimes.nowHourInAWS(AWS_AP_NE_1)).toEqual(3);
  expect(MyTimes.nowHourInAWS(AWS_CA_C_1)).toEqual(14);
  expect(MyTimes.nowHourInAWS(AWS_CN_N_1)).toEqual(2);
  expect(MyTimes.nowHourInAWS(AWS_CN_NW_1)).toEqual(2);
  expect(MyTimes.nowHourInAWS(AWS_EU_C_1)).toEqual(20);
  expect(MyTimes.nowHourInAWS(AWS_EU_W_1)).toEqual(19);
  expect(MyTimes.nowHourInAWS(AWS_EU_W_2)).toEqual(19);
  expect(MyTimes.nowHourInAWS(AWS_EU_S_1)).toEqual(20);
  expect(MyTimes.nowHourInAWS(AWS_EU_W_3)).toEqual(20);
  expect(MyTimes.nowHourInAWS(AWS_EU_N_1)).toEqual(20);
  expect(MyTimes.nowHourInAWS(AWS_ME_S_1)).toEqual(21);
  expect(MyTimes.nowHourInAWS(AWS_SA_E_1)).toEqual(15);
  jest.setSystemTime(new Date(DATE_2019_09_19_19_38));
  expect(MyTimes.nowHourInAWS(AWS_US_E_2)).toEqual(15);
  expect(MyTimes.nowHourInAWS(AWS_US_E_1)).toEqual(15);
  expect(MyTimes.nowHourInAWS(AWS_US_W_1)).toEqual(12);
  expect(MyTimes.nowHourInAWS(AWS_US_W_2)).toEqual(12);
  expect(MyTimes.nowHourInAWS(AWS_AF_S_1)).toEqual(21);
  expect(MyTimes.nowHourInAWS(AWS_AP_E_1)).toEqual(3);
  expect(MyTimes.nowHourInAWS(AWS_AP_SE_3)).toEqual(2);
  expect(MyTimes.nowHourInAWS(AWS_AP_S_1)).toEqual(1);
  expect(MyTimes.nowHourInAWS(AWS_AP_NE_3)).toEqual(4);
  expect(MyTimes.nowHourInAWS(AWS_AP_NE_2)).toEqual(4);
  expect(MyTimes.nowHourInAWS(AWS_AP_SE_1)).toEqual(3);
  expect(MyTimes.nowHourInAWS(AWS_AP_SE_2)).toEqual(5);
  expect(MyTimes.nowHourInAWS(AWS_AP_NE_1)).toEqual(4);
  expect(MyTimes.nowHourInAWS(AWS_CA_C_1)).toEqual(15);
  expect(MyTimes.nowHourInAWS(AWS_CN_N_1)).toEqual(3);
  expect(MyTimes.nowHourInAWS(AWS_CN_NW_1)).toEqual(3);
  expect(MyTimes.nowHourInAWS(AWS_EU_C_1)).toEqual(21);
  expect(MyTimes.nowHourInAWS(AWS_EU_W_1)).toEqual(20);
  expect(MyTimes.nowHourInAWS(AWS_EU_W_2)).toEqual(20);
  expect(MyTimes.nowHourInAWS(AWS_EU_S_1)).toEqual(21);
  expect(MyTimes.nowHourInAWS(AWS_EU_W_3)).toEqual(21);
  expect(MyTimes.nowHourInAWS(AWS_EU_N_1)).toEqual(21);
  expect(MyTimes.nowHourInAWS(AWS_ME_S_1)).toEqual(22);
  expect(MyTimes.nowHourInAWS(AWS_SA_E_1)).toEqual(16);
  jest.setSystemTime(new Date(DATE_2020_02_20_20_40));
  expect(MyTimes.nowHourInAWS(AWS_US_E_2)).toEqual(15);
  expect(MyTimes.nowHourInAWS(AWS_US_E_1)).toEqual(15);
  expect(MyTimes.nowHourInAWS(AWS_US_W_1)).toEqual(12);
  expect(MyTimes.nowHourInAWS(AWS_US_W_2)).toEqual(12);
  expect(MyTimes.nowHourInAWS(AWS_AF_S_1)).toEqual(22);
  expect(MyTimes.nowHourInAWS(AWS_AP_E_1)).toEqual(4);
  expect(MyTimes.nowHourInAWS(AWS_AP_SE_3)).toEqual(3);
  expect(MyTimes.nowHourInAWS(AWS_AP_S_1)).toEqual(2);
  expect(MyTimes.nowHourInAWS(AWS_AP_NE_3)).toEqual(5);
  expect(MyTimes.nowHourInAWS(AWS_AP_NE_2)).toEqual(5);
  expect(MyTimes.nowHourInAWS(AWS_AP_SE_1)).toEqual(4);
  expect(MyTimes.nowHourInAWS(AWS_AP_SE_2)).toEqual(7);
  expect(MyTimes.nowHourInAWS(AWS_AP_NE_1)).toEqual(5);
  expect(MyTimes.nowHourInAWS(AWS_CA_C_1)).toEqual(15);
  expect(MyTimes.nowHourInAWS(AWS_CN_N_1)).toEqual(4);
  expect(MyTimes.nowHourInAWS(AWS_CN_NW_1)).toEqual(4);
  expect(MyTimes.nowHourInAWS(AWS_EU_C_1)).toEqual(21);
  expect(MyTimes.nowHourInAWS(AWS_EU_W_1)).toEqual(20);
  expect(MyTimes.nowHourInAWS(AWS_EU_W_2)).toEqual(20);
  expect(MyTimes.nowHourInAWS(AWS_EU_S_1)).toEqual(21);
  expect(MyTimes.nowHourInAWS(AWS_EU_W_3)).toEqual(21);
  expect(MyTimes.nowHourInAWS(AWS_EU_N_1)).toEqual(21);
  expect(MyTimes.nowHourInAWS(AWS_ME_S_1)).toEqual(23);
  expect(MyTimes.nowHourInAWS(AWS_SA_E_1)).toEqual(17);
  jest.setSystemTime(new Date(DATE_2021_01_21_21_42));
  expect(MyTimes.nowHourInAWS(AWS_US_E_2)).toEqual(16);
  expect(MyTimes.nowHourInAWS(AWS_US_E_1)).toEqual(16);
  expect(MyTimes.nowHourInAWS(AWS_US_W_1)).toEqual(13);
  expect(MyTimes.nowHourInAWS(AWS_US_W_2)).toEqual(13);
  expect(MyTimes.nowHourInAWS(AWS_AF_S_1)).toEqual(23);
  expect(MyTimes.nowHourInAWS(AWS_AP_E_1)).toEqual(5);
  expect(MyTimes.nowHourInAWS(AWS_AP_SE_3)).toEqual(4);
  expect(MyTimes.nowHourInAWS(AWS_AP_S_1)).toEqual(3);
  expect(MyTimes.nowHourInAWS(AWS_AP_NE_3)).toEqual(6);
  expect(MyTimes.nowHourInAWS(AWS_AP_NE_2)).toEqual(6);
  expect(MyTimes.nowHourInAWS(AWS_AP_SE_1)).toEqual(5);
  expect(MyTimes.nowHourInAWS(AWS_AP_SE_2)).toEqual(8);
  expect(MyTimes.nowHourInAWS(AWS_AP_NE_1)).toEqual(6);
  expect(MyTimes.nowHourInAWS(AWS_CA_C_1)).toEqual(16);
  expect(MyTimes.nowHourInAWS(AWS_CN_N_1)).toEqual(5);
  expect(MyTimes.nowHourInAWS(AWS_CN_NW_1)).toEqual(5);
  expect(MyTimes.nowHourInAWS(AWS_EU_C_1)).toEqual(22);
  expect(MyTimes.nowHourInAWS(AWS_EU_W_1)).toEqual(21);
  expect(MyTimes.nowHourInAWS(AWS_EU_W_2)).toEqual(21);
  expect(MyTimes.nowHourInAWS(AWS_EU_S_1)).toEqual(22);
  expect(MyTimes.nowHourInAWS(AWS_EU_W_3)).toEqual(22);
  expect(MyTimes.nowHourInAWS(AWS_EU_N_1)).toEqual(22);
  expect(MyTimes.nowHourInAWS(AWS_ME_S_1)).toEqual(0);
  expect(MyTimes.nowHourInAWS(AWS_SA_E_1)).toEqual(18);
  jest.setSystemTime(new Date(DATE_2022_02_22_22_44));
  expect(MyTimes.nowHourInAWS(AWS_US_E_2)).toEqual(17);
  expect(MyTimes.nowHourInAWS(AWS_US_E_1)).toEqual(17);
  expect(MyTimes.nowHourInAWS(AWS_US_W_1)).toEqual(14);
  expect(MyTimes.nowHourInAWS(AWS_US_W_2)).toEqual(14);
  expect(MyTimes.nowHourInAWS(AWS_AF_S_1)).toEqual(0);
  expect(MyTimes.nowHourInAWS(AWS_AP_E_1)).toEqual(6);
  expect(MyTimes.nowHourInAWS(AWS_AP_SE_3)).toEqual(5);
  expect(MyTimes.nowHourInAWS(AWS_AP_S_1)).toEqual(4);
  expect(MyTimes.nowHourInAWS(AWS_AP_NE_3)).toEqual(7);
  expect(MyTimes.nowHourInAWS(AWS_AP_NE_2)).toEqual(7);
  expect(MyTimes.nowHourInAWS(AWS_AP_SE_1)).toEqual(6);
  expect(MyTimes.nowHourInAWS(AWS_AP_SE_2)).toEqual(9);
  expect(MyTimes.nowHourInAWS(AWS_AP_NE_1)).toEqual(7);
  expect(MyTimes.nowHourInAWS(AWS_CA_C_1)).toEqual(17);
  expect(MyTimes.nowHourInAWS(AWS_CN_N_1)).toEqual(6);
  expect(MyTimes.nowHourInAWS(AWS_CN_NW_1)).toEqual(6);
  expect(MyTimes.nowHourInAWS(AWS_EU_C_1)).toEqual(23);
  expect(MyTimes.nowHourInAWS(AWS_EU_W_1)).toEqual(22);
  expect(MyTimes.nowHourInAWS(AWS_EU_W_2)).toEqual(22);
  expect(MyTimes.nowHourInAWS(AWS_EU_S_1)).toEqual(23);
  expect(MyTimes.nowHourInAWS(AWS_EU_W_3)).toEqual(23);
  expect(MyTimes.nowHourInAWS(AWS_EU_N_1)).toEqual(23);
  expect(MyTimes.nowHourInAWS(AWS_ME_S_1)).toEqual(1);
  expect(MyTimes.nowHourInAWS(AWS_SA_E_1)).toEqual(19);
  jest.setSystemTime(new Date(DATE_2023_03_23_23_46));
  expect(MyTimes.nowHourInAWS(AWS_US_E_2)).toEqual(19);
  expect(MyTimes.nowHourInAWS(AWS_US_E_1)).toEqual(19);
  expect(MyTimes.nowHourInAWS(AWS_US_W_1)).toEqual(16);
  expect(MyTimes.nowHourInAWS(AWS_US_W_2)).toEqual(16);
  expect(MyTimes.nowHourInAWS(AWS_AF_S_1)).toEqual(1);
  expect(MyTimes.nowHourInAWS(AWS_AP_E_1)).toEqual(7);
  expect(MyTimes.nowHourInAWS(AWS_AP_SE_3)).toEqual(6);
  expect(MyTimes.nowHourInAWS(AWS_AP_S_1)).toEqual(5);
  expect(MyTimes.nowHourInAWS(AWS_AP_NE_3)).toEqual(8);
  expect(MyTimes.nowHourInAWS(AWS_AP_NE_2)).toEqual(8);
  expect(MyTimes.nowHourInAWS(AWS_AP_SE_1)).toEqual(7);
  expect(MyTimes.nowHourInAWS(AWS_AP_SE_2)).toEqual(10);
  expect(MyTimes.nowHourInAWS(AWS_AP_NE_1)).toEqual(8);
  expect(MyTimes.nowHourInAWS(AWS_CA_C_1)).toEqual(19);
  expect(MyTimes.nowHourInAWS(AWS_CN_N_1)).toEqual(7);
  expect(MyTimes.nowHourInAWS(AWS_CN_NW_1)).toEqual(7);
  expect(MyTimes.nowHourInAWS(AWS_EU_C_1)).toEqual(0);
  expect(MyTimes.nowHourInAWS(AWS_EU_W_1)).toEqual(23);
  expect(MyTimes.nowHourInAWS(AWS_EU_W_2)).toEqual(23);
  expect(MyTimes.nowHourInAWS(AWS_EU_S_1)).toEqual(0);
  expect(MyTimes.nowHourInAWS(AWS_EU_W_3)).toEqual(0);
  expect(MyTimes.nowHourInAWS(AWS_EU_N_1)).toEqual(0);
  expect(MyTimes.nowHourInAWS(AWS_ME_S_1)).toEqual(2);
  expect(MyTimes.nowHourInAWS(AWS_SA_E_1)).toEqual(20);
  jest.setSystemTime(new Date(DATE_2024_04_24_00_48));
  expect(MyTimes.nowHourInAWS(AWS_US_E_2)).toEqual(20);
  expect(MyTimes.nowHourInAWS(AWS_US_E_1)).toEqual(20);
  expect(MyTimes.nowHourInAWS(AWS_US_W_1)).toEqual(17);
  expect(MyTimes.nowHourInAWS(AWS_US_W_2)).toEqual(17);
  expect(MyTimes.nowHourInAWS(AWS_AF_S_1)).toEqual(2);
  expect(MyTimes.nowHourInAWS(AWS_AP_E_1)).toEqual(8);
  expect(MyTimes.nowHourInAWS(AWS_AP_SE_3)).toEqual(7);
  expect(MyTimes.nowHourInAWS(AWS_AP_S_1)).toEqual(6);
  expect(MyTimes.nowHourInAWS(AWS_AP_NE_3)).toEqual(9);
  expect(MyTimes.nowHourInAWS(AWS_AP_NE_2)).toEqual(9);
  expect(MyTimes.nowHourInAWS(AWS_AP_SE_1)).toEqual(8);
  expect(MyTimes.nowHourInAWS(AWS_AP_SE_2)).toEqual(10);
  expect(MyTimes.nowHourInAWS(AWS_AP_NE_1)).toEqual(9);
  expect(MyTimes.nowHourInAWS(AWS_CA_C_1)).toEqual(20);
  expect(MyTimes.nowHourInAWS(AWS_CN_N_1)).toEqual(8);
  expect(MyTimes.nowHourInAWS(AWS_CN_NW_1)).toEqual(8);
  expect(MyTimes.nowHourInAWS(AWS_EU_C_1)).toEqual(2);
  expect(MyTimes.nowHourInAWS(AWS_EU_W_1)).toEqual(1);
  expect(MyTimes.nowHourInAWS(AWS_EU_W_2)).toEqual(1);
  expect(MyTimes.nowHourInAWS(AWS_EU_S_1)).toEqual(2);
  expect(MyTimes.nowHourInAWS(AWS_EU_W_3)).toEqual(2);
  expect(MyTimes.nowHourInAWS(AWS_EU_N_1)).toEqual(2);
  expect(MyTimes.nowHourInAWS(AWS_ME_S_1)).toEqual(3);
  expect(MyTimes.nowHourInAWS(AWS_SA_E_1)).toEqual(21);
});

test("day time", () => {
  jest.setSystemTime(new Date(DATE_1999_12_31_23_59));
  expect(MyTimes.isDayTime()).toEqual(false);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date(DATE_2000_01_01_00_00));
  expect(MyTimes.isDayTime()).toEqual(false);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date(DATE_2001_01_01_01_02));
  expect(MyTimes.isDayTime()).toEqual(false);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date(DATE_2002_02_02_02_04));
  expect(MyTimes.isDayTime()).toEqual(false);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date(DATE_2003_03_03_03_06));
  expect(MyTimes.isDayTime()).toEqual(false);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date(DATE_2004_04_04_04_08));
  expect(MyTimes.isDayTime()).toEqual(false);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date(DATE_2005_05_05_05_10));
  expect(MyTimes.isDayTime()).toEqual(false);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date(DATE_2006_06_06_06_12));
  expect(MyTimes.isDayTime()).toEqual(true);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date(DATE_2007_07_07_07_14));
  expect(MyTimes.isDayTime()).toEqual(true);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date(DATE_2008_08_08_08_16));
  expect(MyTimes.isDayTime()).toEqual(true);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date(DATE_2009_09_09_09_18));
  expect(MyTimes.isDayTime()).toEqual(true);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date(DATE_2010_10_10_10_20));
  expect(MyTimes.isDayTime()).toEqual(true);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date(DATE_2011_11_11_11_22));
  expect(MyTimes.isDayTime()).toEqual(true);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date(DATE_2012_12_12_12_24));
  expect(MyTimes.isDayTime()).toEqual(true);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date(DATE_2013_03_13_13_26));
  expect(MyTimes.isDayTime()).toEqual(true);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date(DATE_2014_04_14_14_28));
  expect(MyTimes.isDayTime()).toEqual(true);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date(DATE_2015_05_15_15_30));
  expect(MyTimes.isDayTime()).toEqual(true);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date(DATE_2016_06_16_16_32));
  expect(MyTimes.isDayTime()).toEqual(true);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date(DATE_2017_07_17_17_34));
  expect(MyTimes.isDayTime()).toEqual(true);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date(DATE_2018_08_18_18_36));
  expect(MyTimes.isDayTime()).toEqual(false);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date(DATE_2019_09_19_19_38));
  expect(MyTimes.isDayTime()).toEqual(false);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date(DATE_2020_02_20_20_40));
  expect(MyTimes.isDayTime()).toEqual(false);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date(DATE_2021_01_21_21_42));
  expect(MyTimes.isDayTime()).toEqual(false);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date(DATE_2022_02_22_22_44));
  expect(MyTimes.isDayTime()).toEqual(false);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date(DATE_2023_03_23_23_46));
  expect(MyTimes.isDayTime()).toEqual(false);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date(DATE_2024_04_24_00_48));
  expect(MyTimes.isDayTime()).toEqual(false);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
});

test("day time in IANATimeZone", () => {
  jest.setSystemTime(new Date(DATE_1999_12_31_23_59));
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(!MyTimes.isNightTimeIn(UTC_M11));
  expect(MyTimes.isDayTimeIn(UTC_M10)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_M10)).toEqual(!MyTimes.isNightTimeIn(UTC_M10));
  expect(MyTimes.isDayTimeIn(UTC_M930)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_M930)).toEqual(
    !MyTimes.isNightTimeIn(UTC_M930)
  );
  expect(MyTimes.isDayTimeIn(UTC_M9)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_M9)).toEqual(!MyTimes.isNightTimeIn(UTC_M9));
  expect(MyTimes.isDayTimeIn(UTC_M8)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_M8)).toEqual(!MyTimes.isNightTimeIn(UTC_M8));
  expect(MyTimes.isDayTimeIn(UTC_M7)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_M7)).toEqual(!MyTimes.isNightTimeIn(UTC_M7));
  expect(MyTimes.isDayTimeIn(UTC_M6)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_M6)).toEqual(!MyTimes.isNightTimeIn(UTC_M6));
  expect(MyTimes.isDayTimeIn(UTC_M5)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_M5)).toEqual(!MyTimes.isNightTimeIn(UTC_M5));
  expect(MyTimes.isDayTimeIn(UTC_M4)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_M4)).toEqual(!MyTimes.isNightTimeIn(UTC_M4));
  expect(MyTimes.isDayTimeIn(UTC_M330)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_M330)).toEqual(
    !MyTimes.isNightTimeIn(UTC_M330)
  );
  expect(MyTimes.isDayTimeIn(UTC_M3)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_M3)).toEqual(!MyTimes.isNightTimeIn(UTC_M3));
  expect(MyTimes.isDayTimeIn(UTC_M2)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_M2)).toEqual(!MyTimes.isNightTimeIn(UTC_M2));
  expect(MyTimes.isDayTimeIn(UTC_M1)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_M1)).toEqual(!MyTimes.isNightTimeIn(UTC_M1));
  expect(MyTimes.isDayTimeIn(UTC_0)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_0)).toEqual(!MyTimes.isNightTimeIn(UTC_0));
  expect(MyTimes.isDayTimeIn(UTC_P1)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_P1)).toEqual(!MyTimes.isNightTimeIn(UTC_P1));
  expect(MyTimes.isDayTimeIn(UTC_P2)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_P2)).toEqual(!MyTimes.isNightTimeIn(UTC_P2));
  expect(MyTimes.isDayTimeIn(UTC_P3)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_P3)).toEqual(!MyTimes.isNightTimeIn(UTC_P3));
  expect(MyTimes.isDayTimeIn(UTC_P330)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_P330)).toEqual(
    !MyTimes.isNightTimeIn(UTC_P330)
  );
  expect(MyTimes.isDayTimeIn(UTC_P4)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_P4)).toEqual(!MyTimes.isNightTimeIn(UTC_P4));
  expect(MyTimes.isDayTimeIn(UTC_P430)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_P430)).toEqual(
    !MyTimes.isNightTimeIn(UTC_P430)
  );
  expect(MyTimes.isDayTimeIn(UTC_P5)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_P5)).toEqual(!MyTimes.isNightTimeIn(UTC_P5));
  expect(MyTimes.isDayTimeIn(UTC_P530)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_P530)).toEqual(
    !MyTimes.isNightTimeIn(UTC_P530)
  );
  expect(MyTimes.isDayTimeIn(UTC_P545)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_P545)).toEqual(
    !MyTimes.isNightTimeIn(UTC_P545)
  );
  expect(MyTimes.isDayTimeIn(UTC_P6)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_P6)).toEqual(!MyTimes.isNightTimeIn(UTC_P6));
  expect(MyTimes.isDayTimeIn(UTC_P630)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P630)).toEqual(
    !MyTimes.isNightTimeIn(UTC_P630)
  );
  expect(MyTimes.isDayTimeIn(UTC_P7)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P7)).toEqual(!MyTimes.isNightTimeIn(UTC_P7));
  expect(MyTimes.isDayTimeIn(UTC_P8)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P8)).toEqual(!MyTimes.isNightTimeIn(UTC_P8));
  expect(MyTimes.isDayTimeIn(UTC_P9)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P9)).toEqual(!MyTimes.isNightTimeIn(UTC_P9));
  expect(MyTimes.isDayTimeIn(UTC_P930)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P930)).toEqual(
    !MyTimes.isNightTimeIn(UTC_P930)
  );
  expect(MyTimes.isDayTimeIn(UTC_P10)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P10)).toEqual(!MyTimes.isNightTimeIn(UTC_P10));
  expect(MyTimes.isDayTimeIn(UTC_P1030)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P1030)).toEqual(
    !MyTimes.isNightTimeIn(UTC_P1030)
  );
  expect(MyTimes.isDayTimeIn(UTC_P12)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P12)).toEqual(!MyTimes.isNightTimeIn(UTC_P12));
  expect(MyTimes.isDayTimeIn(UTC_P1245)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P1245)).toEqual(
    !MyTimes.isNightTimeIn(UTC_P1245)
  );
  expect(MyTimes.isDayTimeIn(UTC_P13)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P13)).toEqual(!MyTimes.isNightTimeIn(UTC_P13));
  jest.setSystemTime(new Date(DATE_2000_01_01_00_00));
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(!MyTimes.isNightTimeIn(UTC_M11));
  expect(MyTimes.isDayTimeIn(UTC_M10)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_M10)).toEqual(!MyTimes.isNightTimeIn(UTC_M10));
  expect(MyTimes.isDayTimeIn(UTC_M930)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_M930)).toEqual(
    !MyTimes.isNightTimeIn(UTC_M930)
  );
  expect(MyTimes.isDayTimeIn(UTC_M9)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_M9)).toEqual(!MyTimes.isNightTimeIn(UTC_M9));
  expect(MyTimes.isDayTimeIn(UTC_M8)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_M8)).toEqual(!MyTimes.isNightTimeIn(UTC_M8));
  expect(MyTimes.isDayTimeIn(UTC_M7)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_M7)).toEqual(!MyTimes.isNightTimeIn(UTC_M7));
  expect(MyTimes.isDayTimeIn(UTC_M6)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_M6)).toEqual(!MyTimes.isNightTimeIn(UTC_M6));
  expect(MyTimes.isDayTimeIn(UTC_M5)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_M5)).toEqual(!MyTimes.isNightTimeIn(UTC_M5));
  expect(MyTimes.isDayTimeIn(UTC_M4)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_M4)).toEqual(!MyTimes.isNightTimeIn(UTC_M4));
  expect(MyTimes.isDayTimeIn(UTC_M330)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_M330)).toEqual(
    !MyTimes.isNightTimeIn(UTC_M330)
  );
  expect(MyTimes.isDayTimeIn(UTC_M3)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_M3)).toEqual(!MyTimes.isNightTimeIn(UTC_M3));
  expect(MyTimes.isDayTimeIn(UTC_M2)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_M2)).toEqual(!MyTimes.isNightTimeIn(UTC_M2));
  expect(MyTimes.isDayTimeIn(UTC_M1)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_M1)).toEqual(!MyTimes.isNightTimeIn(UTC_M1));
  expect(MyTimes.isDayTimeIn(UTC_0)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_0)).toEqual(!MyTimes.isNightTimeIn(UTC_0));
  expect(MyTimes.isDayTimeIn(UTC_P1)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_P1)).toEqual(!MyTimes.isNightTimeIn(UTC_P1));
  expect(MyTimes.isDayTimeIn(UTC_P2)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_P2)).toEqual(!MyTimes.isNightTimeIn(UTC_P2));
  expect(MyTimes.isDayTimeIn(UTC_P3)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_P3)).toEqual(!MyTimes.isNightTimeIn(UTC_P3));
  expect(MyTimes.isDayTimeIn(UTC_P330)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_P330)).toEqual(
    !MyTimes.isNightTimeIn(UTC_P330)
  );
  expect(MyTimes.isDayTimeIn(UTC_P4)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_P4)).toEqual(!MyTimes.isNightTimeIn(UTC_P4));
  expect(MyTimes.isDayTimeIn(UTC_P430)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_P430)).toEqual(
    !MyTimes.isNightTimeIn(UTC_P430)
  );
  expect(MyTimes.isDayTimeIn(UTC_P5)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_P5)).toEqual(!MyTimes.isNightTimeIn(UTC_P5));
  expect(MyTimes.isDayTimeIn(UTC_P530)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_P530)).toEqual(
    !MyTimes.isNightTimeIn(UTC_P530)
  );
  expect(MyTimes.isDayTimeIn(UTC_P545)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_P545)).toEqual(
    !MyTimes.isNightTimeIn(UTC_P545)
  );
  expect(MyTimes.isDayTimeIn(UTC_P6)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P6)).toEqual(!MyTimes.isNightTimeIn(UTC_P6));
  expect(MyTimes.isDayTimeIn(UTC_P630)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P630)).toEqual(
    !MyTimes.isNightTimeIn(UTC_P630)
  );
  expect(MyTimes.isDayTimeIn(UTC_P7)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P7)).toEqual(!MyTimes.isNightTimeIn(UTC_P7));
  expect(MyTimes.isDayTimeIn(UTC_P8)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P8)).toEqual(!MyTimes.isNightTimeIn(UTC_P8));
  expect(MyTimes.isDayTimeIn(UTC_P9)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P9)).toEqual(!MyTimes.isNightTimeIn(UTC_P9));
  expect(MyTimes.isDayTimeIn(UTC_P930)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P930)).toEqual(
    !MyTimes.isNightTimeIn(UTC_P930)
  );
  expect(MyTimes.isDayTimeIn(UTC_P10)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P10)).toEqual(!MyTimes.isNightTimeIn(UTC_P10));
  expect(MyTimes.isDayTimeIn(UTC_P1030)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P1030)).toEqual(
    !MyTimes.isNightTimeIn(UTC_P1030)
  );
  expect(MyTimes.isDayTimeIn(UTC_P12)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P12)).toEqual(!MyTimes.isNightTimeIn(UTC_P12));
  expect(MyTimes.isDayTimeIn(UTC_P1245)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P1245)).toEqual(
    !MyTimes.isNightTimeIn(UTC_P1245)
  );
  expect(MyTimes.isDayTimeIn(UTC_P13)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P13)).toEqual(!MyTimes.isNightTimeIn(UTC_P13));
  jest.setSystemTime(new Date(DATE_2001_01_01_01_02));
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(!MyTimes.isNightTimeIn(UTC_M11));
  expect(MyTimes.isDayTimeIn(UTC_M10)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_M10)).toEqual(!MyTimes.isNightTimeIn(UTC_M10));
  expect(MyTimes.isDayTimeIn(UTC_M930)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_M930)).toEqual(
    !MyTimes.isNightTimeIn(UTC_M930)
  );
  expect(MyTimes.isDayTimeIn(UTC_M9)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_M9)).toEqual(!MyTimes.isNightTimeIn(UTC_M9));
  expect(MyTimes.isDayTimeIn(UTC_M8)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_M8)).toEqual(!MyTimes.isNightTimeIn(UTC_M8));
  expect(MyTimes.isDayTimeIn(UTC_M7)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_M7)).toEqual(!MyTimes.isNightTimeIn(UTC_M7));
  expect(MyTimes.isDayTimeIn(UTC_M6)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_M6)).toEqual(!MyTimes.isNightTimeIn(UTC_M6));
  expect(MyTimes.isDayTimeIn(UTC_M5)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_M5)).toEqual(!MyTimes.isNightTimeIn(UTC_M5));
  expect(MyTimes.isDayTimeIn(UTC_M4)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_M4)).toEqual(!MyTimes.isNightTimeIn(UTC_M4));
  expect(MyTimes.isDayTimeIn(UTC_M330)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_M330)).toEqual(
    !MyTimes.isNightTimeIn(UTC_M330)
  );
  expect(MyTimes.isDayTimeIn(UTC_M3)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_M3)).toEqual(!MyTimes.isNightTimeIn(UTC_M3));
  expect(MyTimes.isDayTimeIn(UTC_M2)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_M2)).toEqual(!MyTimes.isNightTimeIn(UTC_M2));
  expect(MyTimes.isDayTimeIn(UTC_M1)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_M1)).toEqual(!MyTimes.isNightTimeIn(UTC_M1));
  expect(MyTimes.isDayTimeIn(UTC_0)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_0)).toEqual(!MyTimes.isNightTimeIn(UTC_0));
  expect(MyTimes.isDayTimeIn(UTC_P1)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_P1)).toEqual(!MyTimes.isNightTimeIn(UTC_P1));
  expect(MyTimes.isDayTimeIn(UTC_P2)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_P2)).toEqual(!MyTimes.isNightTimeIn(UTC_P2));
  expect(MyTimes.isDayTimeIn(UTC_P3)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_P3)).toEqual(!MyTimes.isNightTimeIn(UTC_P3));
  expect(MyTimes.isDayTimeIn(UTC_P330)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_P330)).toEqual(
    !MyTimes.isNightTimeIn(UTC_P330)
  );
  expect(MyTimes.isDayTimeIn(UTC_P4)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_P4)).toEqual(!MyTimes.isNightTimeIn(UTC_P4));
  expect(MyTimes.isDayTimeIn(UTC_P430)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_P430)).toEqual(
    !MyTimes.isNightTimeIn(UTC_P430)
  );
  expect(MyTimes.isDayTimeIn(UTC_P5)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P5)).toEqual(!MyTimes.isNightTimeIn(UTC_P5));
  expect(MyTimes.isDayTimeIn(UTC_P530)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P530)).toEqual(
    !MyTimes.isNightTimeIn(UTC_P530)
  );
  expect(MyTimes.isDayTimeIn(UTC_P545)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P545)).toEqual(
    !MyTimes.isNightTimeIn(UTC_P545)
  );
  expect(MyTimes.isDayTimeIn(UTC_P6)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P6)).toEqual(!MyTimes.isNightTimeIn(UTC_P6));
  expect(MyTimes.isDayTimeIn(UTC_P630)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P630)).toEqual(
    !MyTimes.isNightTimeIn(UTC_P630)
  );
  expect(MyTimes.isDayTimeIn(UTC_P7)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P7)).toEqual(!MyTimes.isNightTimeIn(UTC_P7));
  expect(MyTimes.isDayTimeIn(UTC_P8)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P8)).toEqual(!MyTimes.isNightTimeIn(UTC_P8));
  expect(MyTimes.isDayTimeIn(UTC_P9)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P9)).toEqual(!MyTimes.isNightTimeIn(UTC_P9));
  expect(MyTimes.isDayTimeIn(UTC_P930)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P930)).toEqual(
    !MyTimes.isNightTimeIn(UTC_P930)
  );
  expect(MyTimes.isDayTimeIn(UTC_P10)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P10)).toEqual(!MyTimes.isNightTimeIn(UTC_P10));
  expect(MyTimes.isDayTimeIn(UTC_P1030)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P1030)).toEqual(
    !MyTimes.isNightTimeIn(UTC_P1030)
  );
  expect(MyTimes.isDayTimeIn(UTC_P12)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P12)).toEqual(!MyTimes.isNightTimeIn(UTC_P12));
  expect(MyTimes.isDayTimeIn(UTC_P1245)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P1245)).toEqual(
    !MyTimes.isNightTimeIn(UTC_P1245)
  );
  expect(MyTimes.isDayTimeIn(UTC_P13)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P13)).toEqual(!MyTimes.isNightTimeIn(UTC_P13));
  jest.setSystemTime(new Date(DATE_2002_02_02_02_04));
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(!MyTimes.isNightTimeIn(UTC_M11));
  expect(MyTimes.isDayTimeIn(UTC_M10)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_M10)).toEqual(!MyTimes.isNightTimeIn(UTC_M10));
  expect(MyTimes.isDayTimeIn(UTC_M930)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_M930)).toEqual(
    !MyTimes.isNightTimeIn(UTC_M930)
  );
  expect(MyTimes.isDayTimeIn(UTC_M9)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_M9)).toEqual(!MyTimes.isNightTimeIn(UTC_M9));
  expect(MyTimes.isDayTimeIn(UTC_M8)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_M8)).toEqual(!MyTimes.isNightTimeIn(UTC_M8));
  expect(MyTimes.isDayTimeIn(UTC_M7)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_M7)).toEqual(!MyTimes.isNightTimeIn(UTC_M7));
  expect(MyTimes.isDayTimeIn(UTC_M6)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_M6)).toEqual(!MyTimes.isNightTimeIn(UTC_M6));
  expect(MyTimes.isDayTimeIn(UTC_M5)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_M5)).toEqual(!MyTimes.isNightTimeIn(UTC_M5));
  expect(MyTimes.isDayTimeIn(UTC_M4)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_M4)).toEqual(!MyTimes.isNightTimeIn(UTC_M4));
  expect(MyTimes.isDayTimeIn(UTC_M330)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_M330)).toEqual(
    !MyTimes.isNightTimeIn(UTC_M330)
  );
  expect(MyTimes.isDayTimeIn(UTC_M3)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_M3)).toEqual(!MyTimes.isNightTimeIn(UTC_M3));
  expect(MyTimes.isDayTimeIn(UTC_M2)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_M2)).toEqual(!MyTimes.isNightTimeIn(UTC_M2));
  expect(MyTimes.isDayTimeIn(UTC_M1)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_M1)).toEqual(!MyTimes.isNightTimeIn(UTC_M1));
  expect(MyTimes.isDayTimeIn(UTC_0)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_0)).toEqual(!MyTimes.isNightTimeIn(UTC_0));
  expect(MyTimes.isDayTimeIn(UTC_P1)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_P1)).toEqual(!MyTimes.isNightTimeIn(UTC_P1));
  expect(MyTimes.isDayTimeIn(UTC_P2)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_P2)).toEqual(!MyTimes.isNightTimeIn(UTC_P2));
  expect(MyTimes.isDayTimeIn(UTC_P3)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_P3)).toEqual(!MyTimes.isNightTimeIn(UTC_P3));
  expect(MyTimes.isDayTimeIn(UTC_P330)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_P330)).toEqual(
    !MyTimes.isNightTimeIn(UTC_P330)
  );
  expect(MyTimes.isDayTimeIn(UTC_P4)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P4)).toEqual(!MyTimes.isNightTimeIn(UTC_P4));
  expect(MyTimes.isDayTimeIn(UTC_P430)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P430)).toEqual(
    !MyTimes.isNightTimeIn(UTC_P430)
  );
  expect(MyTimes.isDayTimeIn(UTC_P5)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P5)).toEqual(!MyTimes.isNightTimeIn(UTC_P5));
  expect(MyTimes.isDayTimeIn(UTC_P530)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P530)).toEqual(
    !MyTimes.isNightTimeIn(UTC_P530)
  );
  expect(MyTimes.isDayTimeIn(UTC_P545)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P545)).toEqual(
    !MyTimes.isNightTimeIn(UTC_P545)
  );
  expect(MyTimes.isDayTimeIn(UTC_P6)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P6)).toEqual(!MyTimes.isNightTimeIn(UTC_P6));
  expect(MyTimes.isDayTimeIn(UTC_P630)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P630)).toEqual(
    !MyTimes.isNightTimeIn(UTC_P630)
  );
  expect(MyTimes.isDayTimeIn(UTC_P7)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P7)).toEqual(!MyTimes.isNightTimeIn(UTC_P7));
  expect(MyTimes.isDayTimeIn(UTC_P8)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P8)).toEqual(!MyTimes.isNightTimeIn(UTC_P8));
  expect(MyTimes.isDayTimeIn(UTC_P9)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P9)).toEqual(!MyTimes.isNightTimeIn(UTC_P9));
  expect(MyTimes.isDayTimeIn(UTC_P930)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P930)).toEqual(
    !MyTimes.isNightTimeIn(UTC_P930)
  );
  expect(MyTimes.isDayTimeIn(UTC_P10)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P10)).toEqual(!MyTimes.isNightTimeIn(UTC_P10));
  expect(MyTimes.isDayTimeIn(UTC_P1030)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P1030)).toEqual(
    !MyTimes.isNightTimeIn(UTC_P1030)
  );
  expect(MyTimes.isDayTimeIn(UTC_P12)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P12)).toEqual(!MyTimes.isNightTimeIn(UTC_P12));
  expect(MyTimes.isDayTimeIn(UTC_P1245)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P1245)).toEqual(
    !MyTimes.isNightTimeIn(UTC_P1245)
  );
  expect(MyTimes.isDayTimeIn(UTC_P13)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P13)).toEqual(!MyTimes.isNightTimeIn(UTC_P13));
  jest.setSystemTime(new Date(DATE_2003_03_03_03_06));
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(!MyTimes.isNightTimeIn(UTC_M11));
  jest.setSystemTime(new Date(DATE_2004_04_04_04_08));
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(!MyTimes.isNightTimeIn(UTC_M11));
  jest.setSystemTime(new Date(DATE_2005_05_05_05_10));
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(!MyTimes.isNightTimeIn(UTC_M11));
  jest.setSystemTime(new Date(DATE_2006_06_06_06_12));
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(!MyTimes.isNightTimeIn(UTC_M11));
  jest.setSystemTime(new Date(DATE_2007_07_07_07_14));
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(!MyTimes.isNightTimeIn(UTC_M11));
  jest.setSystemTime(new Date(DATE_2008_08_08_08_16));
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(!MyTimes.isNightTimeIn(UTC_M11));
  jest.setSystemTime(new Date(DATE_2009_09_09_09_18));
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(!MyTimes.isNightTimeIn(UTC_M11));
  jest.setSystemTime(new Date(DATE_2010_10_10_10_20));
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(!MyTimes.isNightTimeIn(UTC_M11));
  jest.setSystemTime(new Date(DATE_2011_11_11_11_22));
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(!MyTimes.isNightTimeIn(UTC_M11));
  jest.setSystemTime(new Date(DATE_2012_12_12_12_24));
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(!MyTimes.isNightTimeIn(UTC_M11));
  jest.setSystemTime(new Date(DATE_2013_03_13_13_26));
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(!MyTimes.isNightTimeIn(UTC_M11));
  jest.setSystemTime(new Date(DATE_2014_04_14_14_28));
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(!MyTimes.isNightTimeIn(UTC_M11));
  jest.setSystemTime(new Date(DATE_2015_05_15_15_30));
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(!MyTimes.isNightTimeIn(UTC_M11));
  jest.setSystemTime(new Date(DATE_2016_06_16_16_32));
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(!MyTimes.isNightTimeIn(UTC_M11));
  jest.setSystemTime(new Date(DATE_2017_07_17_17_34));
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(!MyTimes.isNightTimeIn(UTC_M11));
  jest.setSystemTime(new Date(DATE_2018_08_18_18_36));
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(!MyTimes.isNightTimeIn(UTC_M11));
  jest.setSystemTime(new Date(DATE_2019_09_19_19_38));
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(!MyTimes.isNightTimeIn(UTC_M11));
  jest.setSystemTime(new Date(DATE_2020_02_20_20_40));
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(!MyTimes.isNightTimeIn(UTC_M11));
  jest.setSystemTime(new Date(DATE_2021_01_21_21_42));
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(!MyTimes.isNightTimeIn(UTC_M11));
  jest.setSystemTime(new Date(DATE_2022_02_22_22_44));
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(!MyTimes.isNightTimeIn(UTC_M11));
  jest.setSystemTime(new Date(DATE_2023_03_23_23_46));
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(!MyTimes.isNightTimeIn(UTC_M11));
  jest.setSystemTime(new Date(DATE_2024_04_24_00_48));
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(!MyTimes.isNightTimeIn(UTC_M11));
});

test("day time in AWSRegionCode", () => {
  jest.setSystemTime(new Date(DATE_1999_12_31_23_59));
  expect(MyTimes.isDayTimeInAWS(AWS_US_E_2)).toEqual(false);
  expect(MyTimes.isDayTimeInAWS(AWS_US_E_2)).toEqual(
    !MyTimes.isNightTimeInAWS(AWS_US_E_2)
  );
  expect(MyTimes.isDayTimeInAWS(AWS_US_E_1)).toEqual(false);
  expect(MyTimes.isDayTimeInAWS(AWS_US_E_1)).toEqual(
    !MyTimes.isNightTimeInAWS(AWS_US_E_1)
  );
  expect(MyTimes.isDayTimeInAWS(AWS_US_W_1)).toEqual(true);
  expect(MyTimes.isDayTimeInAWS(AWS_US_W_1)).toEqual(
    !MyTimes.isNightTimeInAWS(AWS_US_W_1)
  );
  expect(MyTimes.isDayTimeInAWS(AWS_US_W_2)).toEqual(true);
  expect(MyTimes.isDayTimeInAWS(AWS_US_W_2)).toEqual(
    !MyTimes.isNightTimeInAWS(AWS_US_W_2)
  );
  expect(MyTimes.isDayTimeInAWS(AWS_AF_S_1)).toEqual(false);
  expect(MyTimes.isDayTimeInAWS(AWS_AF_S_1)).toEqual(
    !MyTimes.isNightTimeInAWS(AWS_AF_S_1)
  );
  expect(MyTimes.isDayTimeInAWS(AWS_AP_E_1)).toEqual(true);
  expect(MyTimes.isDayTimeInAWS(AWS_AP_E_1)).toEqual(
    !MyTimes.isNightTimeInAWS(AWS_AP_E_1)
  );
  expect(MyTimes.isDayTimeInAWS(AWS_AP_SE_3)).toEqual(true);
  expect(MyTimes.isDayTimeInAWS(AWS_AP_SE_3)).toEqual(
    !MyTimes.isNightTimeInAWS(AWS_AP_SE_3)
  );
  expect(MyTimes.isDayTimeInAWS(AWS_AP_S_1)).toEqual(false);
  expect(MyTimes.isDayTimeInAWS(AWS_AP_S_1)).toEqual(
    !MyTimes.isNightTimeInAWS(AWS_AP_S_1)
  );
  expect(MyTimes.isDayTimeInAWS(AWS_AP_NE_3)).toEqual(true);
  expect(MyTimes.isDayTimeInAWS(AWS_AP_NE_3)).toEqual(
    !MyTimes.isNightTimeInAWS(AWS_AP_NE_3)
  );
  expect(MyTimes.isDayTimeInAWS(AWS_AP_NE_2)).toEqual(true);
  expect(MyTimes.isDayTimeInAWS(AWS_AP_NE_2)).toEqual(
    !MyTimes.isNightTimeInAWS(AWS_AP_NE_2)
  );
  expect(MyTimes.isDayTimeInAWS(AWS_AP_SE_1)).toEqual(true);
  expect(MyTimes.isDayTimeInAWS(AWS_AP_SE_1)).toEqual(
    !MyTimes.isNightTimeInAWS(AWS_AP_SE_1)
  );
  expect(MyTimes.isDayTimeInAWS(AWS_AP_SE_2)).toEqual(true);
  expect(MyTimes.isDayTimeInAWS(AWS_AP_SE_2)).toEqual(
    !MyTimes.isNightTimeInAWS(AWS_AP_SE_2)
  );
  expect(MyTimes.isDayTimeInAWS(AWS_AP_NE_1)).toEqual(true);
  expect(MyTimes.isDayTimeInAWS(AWS_AP_NE_1)).toEqual(
    !MyTimes.isNightTimeInAWS(AWS_AP_NE_1)
  );
  expect(MyTimes.isDayTimeInAWS(AWS_CA_C_1)).toEqual(false);
  expect(MyTimes.isDayTimeInAWS(AWS_CA_C_1)).toEqual(
    !MyTimes.isNightTimeInAWS(AWS_CA_C_1)
  );
  expect(MyTimes.isDayTimeInAWS(AWS_CN_N_1)).toEqual(true);
  expect(MyTimes.isDayTimeInAWS(AWS_CN_N_1)).toEqual(
    !MyTimes.isNightTimeInAWS(AWS_CN_N_1)
  );
  expect(MyTimes.isDayTimeInAWS(AWS_CN_NW_1)).toEqual(true);
  expect(MyTimes.isDayTimeInAWS(AWS_CN_NW_1)).toEqual(
    !MyTimes.isNightTimeInAWS(AWS_CN_NW_1)
  );
  expect(MyTimes.isDayTimeInAWS(AWS_EU_C_1)).toEqual(false);
  expect(MyTimes.isDayTimeInAWS(AWS_EU_C_1)).toEqual(
    !MyTimes.isNightTimeInAWS(AWS_EU_C_1)
  );
  expect(MyTimes.isDayTimeInAWS(AWS_EU_W_1)).toEqual(false);
  expect(MyTimes.isDayTimeInAWS(AWS_EU_W_1)).toEqual(
    !MyTimes.isNightTimeInAWS(AWS_EU_W_1)
  );
  expect(MyTimes.isDayTimeInAWS(AWS_EU_W_2)).toEqual(false);
  expect(MyTimes.isDayTimeInAWS(AWS_EU_W_2)).toEqual(
    !MyTimes.isNightTimeInAWS(AWS_EU_W_2)
  );
  expect(MyTimes.isDayTimeInAWS(AWS_EU_S_1)).toEqual(false);
  expect(MyTimes.isDayTimeInAWS(AWS_EU_S_1)).toEqual(
    !MyTimes.isNightTimeInAWS(AWS_EU_S_1)
  );
  expect(MyTimes.isDayTimeInAWS(AWS_EU_W_3)).toEqual(false);
  expect(MyTimes.isDayTimeInAWS(AWS_EU_W_3)).toEqual(
    !MyTimes.isNightTimeInAWS(AWS_EU_W_3)
  );
  expect(MyTimes.isDayTimeInAWS(AWS_EU_N_1)).toEqual(false);
  expect(MyTimes.isDayTimeInAWS(AWS_EU_N_1)).toEqual(
    !MyTimes.isNightTimeInAWS(AWS_EU_N_1)
  );
  expect(MyTimes.isDayTimeInAWS(AWS_ME_S_1)).toEqual(false);
  expect(MyTimes.isDayTimeInAWS(AWS_ME_S_1)).toEqual(
    !MyTimes.isNightTimeInAWS(AWS_ME_S_1)
  );
  expect(MyTimes.isDayTimeInAWS(AWS_SA_E_1)).toEqual(false);
  expect(MyTimes.isDayTimeInAWS(AWS_SA_E_1)).toEqual(
    !MyTimes.isNightTimeInAWS(AWS_SA_E_1)
  );
});

test("night time", () => {
  jest.setSystemTime(new Date(DATE_1999_12_31_23_59));
  expect(MyTimes.isNightTime()).toEqual(true);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATE_2000_01_01_00_00));
  expect(MyTimes.isNightTime()).toEqual(true);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATE_2001_01_01_01_02));
  expect(MyTimes.isNightTime()).toEqual(true);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATE_2002_02_02_02_04));
  expect(MyTimes.isNightTime()).toEqual(true);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATE_2003_03_03_03_06));
  expect(MyTimes.isNightTime()).toEqual(true);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATE_2004_04_04_04_08));
  expect(MyTimes.isNightTime()).toEqual(true);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATE_2005_05_05_05_10));
  expect(MyTimes.isNightTime()).toEqual(true);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATE_2006_06_06_06_12));
  expect(MyTimes.isNightTime()).toEqual(false);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATE_2007_07_07_07_14));
  expect(MyTimes.isNightTime()).toEqual(false);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATE_2008_08_08_08_16));
  expect(MyTimes.isNightTime()).toEqual(false);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATE_2009_09_09_09_18));
  expect(MyTimes.isNightTime()).toEqual(false);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATE_2010_10_10_10_20));
  expect(MyTimes.isNightTime()).toEqual(false);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATE_2011_11_11_11_22));
  expect(MyTimes.isNightTime()).toEqual(false);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATE_2012_12_12_12_24));
  expect(MyTimes.isNightTime()).toEqual(false);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATE_2013_03_13_13_26));
  expect(MyTimes.isNightTime()).toEqual(false);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATE_2014_04_14_14_28));
  expect(MyTimes.isNightTime()).toEqual(false);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATE_2015_05_15_15_30));
  expect(MyTimes.isNightTime()).toEqual(false);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATE_2016_06_16_16_32));
  expect(MyTimes.isNightTime()).toEqual(false);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATE_2017_07_17_17_34));
  expect(MyTimes.isNightTime()).toEqual(false);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATE_2018_08_18_18_36));
  expect(MyTimes.isNightTime()).toEqual(true);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATE_2019_09_19_19_38));
  expect(MyTimes.isNightTime()).toEqual(true);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATE_2020_02_20_20_40));
  expect(MyTimes.isNightTime()).toEqual(true);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATE_2021_01_21_21_42));
  expect(MyTimes.isNightTime()).toEqual(true);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATE_2022_02_22_22_44));
  expect(MyTimes.isNightTime()).toEqual(true);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATE_2023_03_23_23_46));
  expect(MyTimes.isNightTime()).toEqual(true);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATE_2024_04_24_00_48));
  expect(MyTimes.isNightTime()).toEqual(true);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
});

test("night time in IANATimeZone", () => {
  jest.setSystemTime(new Date(DATE_1999_12_31_23_59));
  expect(MyTimes.isNightTimeIn(UTC_M11)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_M11)).toEqual(!MyTimes.isDayTimeIn(UTC_M11));
  expect(MyTimes.isNightTimeIn(UTC_M10)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_M10)).toEqual(!MyTimes.isDayTimeIn(UTC_M10));
  expect(MyTimes.isNightTimeIn(UTC_M930)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_M930)).toEqual(
    !MyTimes.isDayTimeIn(UTC_M930)
  );
  expect(MyTimes.isNightTimeIn(UTC_M9)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_M9)).toEqual(!MyTimes.isDayTimeIn(UTC_M9));
  expect(MyTimes.isNightTimeIn(UTC_M8)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_M8)).toEqual(!MyTimes.isDayTimeIn(UTC_M8));
  expect(MyTimes.isNightTimeIn(UTC_M7)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_M7)).toEqual(!MyTimes.isDayTimeIn(UTC_M7));
  expect(MyTimes.isNightTimeIn(UTC_M6)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_M6)).toEqual(!MyTimes.isDayTimeIn(UTC_M6));
  expect(MyTimes.isNightTimeIn(UTC_M5)).toEqual(true);
  expect(MyTimes.isNightTimeIn(UTC_M5)).toEqual(!MyTimes.isDayTimeIn(UTC_M5));
  expect(MyTimes.isNightTimeIn(UTC_M4)).toEqual(true);
  expect(MyTimes.isNightTimeIn(UTC_M4)).toEqual(!MyTimes.isDayTimeIn(UTC_M4));
  expect(MyTimes.isNightTimeIn(UTC_M330)).toEqual(true);
  expect(MyTimes.isNightTimeIn(UTC_M330)).toEqual(
    !MyTimes.isDayTimeIn(UTC_M330)
  );
  expect(MyTimes.isNightTimeIn(UTC_M3)).toEqual(true);
  expect(MyTimes.isNightTimeIn(UTC_M3)).toEqual(!MyTimes.isDayTimeIn(UTC_M3));
  expect(MyTimes.isNightTimeIn(UTC_M2)).toEqual(true);
  expect(MyTimes.isNightTimeIn(UTC_M2)).toEqual(!MyTimes.isDayTimeIn(UTC_M2));
  expect(MyTimes.isNightTimeIn(UTC_M1)).toEqual(true);
  expect(MyTimes.isNightTimeIn(UTC_M1)).toEqual(!MyTimes.isDayTimeIn(UTC_M1));
  expect(MyTimes.isNightTimeIn(UTC_0)).toEqual(true);
  expect(MyTimes.isNightTimeIn(UTC_0)).toEqual(!MyTimes.isDayTimeIn(UTC_0));
  expect(MyTimes.isNightTimeIn(UTC_P1)).toEqual(true);
  expect(MyTimes.isNightTimeIn(UTC_P1)).toEqual(!MyTimes.isDayTimeIn(UTC_P1));
  expect(MyTimes.isNightTimeIn(UTC_P2)).toEqual(true);
  expect(MyTimes.isNightTimeIn(UTC_P2)).toEqual(!MyTimes.isDayTimeIn(UTC_P2));
  expect(MyTimes.isNightTimeIn(UTC_P3)).toEqual(true);
  expect(MyTimes.isNightTimeIn(UTC_P3)).toEqual(!MyTimes.isDayTimeIn(UTC_P3));
  expect(MyTimes.isNightTimeIn(UTC_P330)).toEqual(true);
  expect(MyTimes.isNightTimeIn(UTC_P330)).toEqual(
    !MyTimes.isDayTimeIn(UTC_P330)
  );
  expect(MyTimes.isNightTimeIn(UTC_P4)).toEqual(true);
  expect(MyTimes.isNightTimeIn(UTC_P4)).toEqual(!MyTimes.isDayTimeIn(UTC_P4));
  expect(MyTimes.isNightTimeIn(UTC_P430)).toEqual(true);
  expect(MyTimes.isNightTimeIn(UTC_P430)).toEqual(
    !MyTimes.isDayTimeIn(UTC_P430)
  );
  expect(MyTimes.isNightTimeIn(UTC_P5)).toEqual(true);
  expect(MyTimes.isNightTimeIn(UTC_P5)).toEqual(!MyTimes.isDayTimeIn(UTC_P5));
  expect(MyTimes.isNightTimeIn(UTC_P530)).toEqual(true);
  expect(MyTimes.isNightTimeIn(UTC_P530)).toEqual(
    !MyTimes.isDayTimeIn(UTC_P530)
  );
  expect(MyTimes.isNightTimeIn(UTC_P545)).toEqual(true);
  expect(MyTimes.isNightTimeIn(UTC_P545)).toEqual(
    !MyTimes.isDayTimeIn(UTC_P545)
  );
  expect(MyTimes.isNightTimeIn(UTC_P6)).toEqual(true);
  expect(MyTimes.isNightTimeIn(UTC_P6)).toEqual(!MyTimes.isDayTimeIn(UTC_P6));
  expect(MyTimes.isNightTimeIn(UTC_P630)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_P630)).toEqual(
    !MyTimes.isDayTimeIn(UTC_P630)
  );
  expect(MyTimes.isNightTimeIn(UTC_P7)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_P7)).toEqual(!MyTimes.isDayTimeIn(UTC_P7));
  expect(MyTimes.isNightTimeIn(UTC_P8)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_P8)).toEqual(!MyTimes.isDayTimeIn(UTC_P8));
  expect(MyTimes.isNightTimeIn(UTC_P9)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_P9)).toEqual(!MyTimes.isDayTimeIn(UTC_P9));
  expect(MyTimes.isNightTimeIn(UTC_P930)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_P930)).toEqual(
    !MyTimes.isDayTimeIn(UTC_P930)
  );
  expect(MyTimes.isNightTimeIn(UTC_P10)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_P10)).toEqual(!MyTimes.isDayTimeIn(UTC_P10));
  expect(MyTimes.isNightTimeIn(UTC_P1030)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_P1030)).toEqual(
    !MyTimes.isDayTimeIn(UTC_P1030)
  );
  expect(MyTimes.isNightTimeIn(UTC_P12)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_P12)).toEqual(!MyTimes.isDayTimeIn(UTC_P12));
  expect(MyTimes.isNightTimeIn(UTC_P1245)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_P1245)).toEqual(
    !MyTimes.isDayTimeIn(UTC_P1245)
  );
  expect(MyTimes.isNightTimeIn(UTC_P13)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_P13)).toEqual(!MyTimes.isDayTimeIn(UTC_P13));
  jest.setSystemTime(new Date(DATE_2000_01_01_00_00));
  expect(MyTimes.isNightTimeIn(UTC_M11)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_M11)).toEqual(!MyTimes.isDayTimeIn(UTC_M11));
  expect(MyTimes.isNightTimeIn(UTC_M10)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_M10)).toEqual(!MyTimes.isDayTimeIn(UTC_M10));
  expect(MyTimes.isNightTimeIn(UTC_M930)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_M930)).toEqual(
    !MyTimes.isDayTimeIn(UTC_M930)
  );
  expect(MyTimes.isNightTimeIn(UTC_M9)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_M9)).toEqual(!MyTimes.isDayTimeIn(UTC_M9));
  expect(MyTimes.isNightTimeIn(UTC_M8)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_M8)).toEqual(!MyTimes.isDayTimeIn(UTC_M8));
  expect(MyTimes.isNightTimeIn(UTC_M7)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_M7)).toEqual(!MyTimes.isDayTimeIn(UTC_M7));
  expect(MyTimes.isNightTimeIn(UTC_M6)).toEqual(true);
  expect(MyTimes.isNightTimeIn(UTC_M6)).toEqual(!MyTimes.isDayTimeIn(UTC_M6));
  expect(MyTimes.isNightTimeIn(UTC_M5)).toEqual(true);
  expect(MyTimes.isNightTimeIn(UTC_M5)).toEqual(!MyTimes.isDayTimeIn(UTC_M5));
  expect(MyTimes.isNightTimeIn(UTC_M4)).toEqual(true);
  expect(MyTimes.isNightTimeIn(UTC_M4)).toEqual(!MyTimes.isDayTimeIn(UTC_M4));
  expect(MyTimes.isNightTimeIn(UTC_M330)).toEqual(true);
  expect(MyTimes.isNightTimeIn(UTC_M330)).toEqual(
    !MyTimes.isDayTimeIn(UTC_M330)
  );
  expect(MyTimes.isNightTimeIn(UTC_M3)).toEqual(true);
  expect(MyTimes.isNightTimeIn(UTC_M3)).toEqual(!MyTimes.isDayTimeIn(UTC_M3));
  expect(MyTimes.isNightTimeIn(UTC_M2)).toEqual(true);
  expect(MyTimes.isNightTimeIn(UTC_M2)).toEqual(!MyTimes.isDayTimeIn(UTC_M2));
  expect(MyTimes.isNightTimeIn(UTC_M1)).toEqual(true);
  expect(MyTimes.isNightTimeIn(UTC_M1)).toEqual(!MyTimes.isDayTimeIn(UTC_M1));
  expect(MyTimes.isNightTimeIn(UTC_0)).toEqual(true);
  expect(MyTimes.isNightTimeIn(UTC_0)).toEqual(!MyTimes.isDayTimeIn(UTC_0));
  expect(MyTimes.isNightTimeIn(UTC_P1)).toEqual(true);
  expect(MyTimes.isNightTimeIn(UTC_P1)).toEqual(!MyTimes.isDayTimeIn(UTC_P1));
  expect(MyTimes.isNightTimeIn(UTC_P2)).toEqual(true);
  expect(MyTimes.isNightTimeIn(UTC_P2)).toEqual(!MyTimes.isDayTimeIn(UTC_P2));
  expect(MyTimes.isNightTimeIn(UTC_P3)).toEqual(true);
  expect(MyTimes.isNightTimeIn(UTC_P3)).toEqual(!MyTimes.isDayTimeIn(UTC_P3));
  expect(MyTimes.isNightTimeIn(UTC_P330)).toEqual(true);
  expect(MyTimes.isNightTimeIn(UTC_P330)).toEqual(
    !MyTimes.isDayTimeIn(UTC_P330)
  );
  expect(MyTimes.isNightTimeIn(UTC_P4)).toEqual(true);
  expect(MyTimes.isNightTimeIn(UTC_P4)).toEqual(!MyTimes.isDayTimeIn(UTC_P4));
  expect(MyTimes.isNightTimeIn(UTC_P430)).toEqual(true);
  expect(MyTimes.isNightTimeIn(UTC_P430)).toEqual(
    !MyTimes.isDayTimeIn(UTC_P430)
  );
  expect(MyTimes.isNightTimeIn(UTC_P5)).toEqual(true);
  expect(MyTimes.isNightTimeIn(UTC_P5)).toEqual(!MyTimes.isDayTimeIn(UTC_P5));
  expect(MyTimes.isNightTimeIn(UTC_P530)).toEqual(true);
  expect(MyTimes.isNightTimeIn(UTC_P530)).toEqual(
    !MyTimes.isDayTimeIn(UTC_P530)
  );
  expect(MyTimes.isNightTimeIn(UTC_P545)).toEqual(true);
  expect(MyTimes.isNightTimeIn(UTC_P545)).toEqual(
    !MyTimes.isDayTimeIn(UTC_P545)
  );
  expect(MyTimes.isNightTimeIn(UTC_P6)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_P6)).toEqual(!MyTimes.isDayTimeIn(UTC_P6));
  expect(MyTimes.isNightTimeIn(UTC_P630)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_P630)).toEqual(
    !MyTimes.isDayTimeIn(UTC_P630)
  );
  expect(MyTimes.isNightTimeIn(UTC_P7)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_P7)).toEqual(!MyTimes.isDayTimeIn(UTC_P7));
  expect(MyTimes.isNightTimeIn(UTC_P8)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_P8)).toEqual(!MyTimes.isDayTimeIn(UTC_P8));
  expect(MyTimes.isNightTimeIn(UTC_P9)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_P9)).toEqual(!MyTimes.isDayTimeIn(UTC_P9));
  expect(MyTimes.isNightTimeIn(UTC_P930)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_P930)).toEqual(
    !MyTimes.isDayTimeIn(UTC_P930)
  );
  expect(MyTimes.isNightTimeIn(UTC_P10)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_P10)).toEqual(!MyTimes.isDayTimeIn(UTC_P10));
  expect(MyTimes.isNightTimeIn(UTC_P1030)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_P1030)).toEqual(
    !MyTimes.isDayTimeIn(UTC_P1030)
  );
  expect(MyTimes.isNightTimeIn(UTC_P12)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_P12)).toEqual(!MyTimes.isDayTimeIn(UTC_P12));
  expect(MyTimes.isNightTimeIn(UTC_P1245)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_P1245)).toEqual(
    !MyTimes.isDayTimeIn(UTC_P1245)
  );
  expect(MyTimes.isNightTimeIn(UTC_P13)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_P13)).toEqual(!MyTimes.isDayTimeIn(UTC_P13));
  jest.setSystemTime(new Date(DATE_2001_01_01_01_02));
  expect(MyTimes.isNightTimeIn(UTC_M11)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_M11)).toEqual(!MyTimes.isDayTimeIn(UTC_M11));
  expect(MyTimes.isNightTimeIn(UTC_M10)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_M10)).toEqual(!MyTimes.isDayTimeIn(UTC_M10));
  expect(MyTimes.isNightTimeIn(UTC_M930)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_M930)).toEqual(
    !MyTimes.isDayTimeIn(UTC_M930)
  );
  expect(MyTimes.isNightTimeIn(UTC_M9)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_M9)).toEqual(!MyTimes.isDayTimeIn(UTC_M9));
  expect(MyTimes.isNightTimeIn(UTC_M8)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_M8)).toEqual(!MyTimes.isDayTimeIn(UTC_M8));
  expect(MyTimes.isNightTimeIn(UTC_M7)).toEqual(true);
  expect(MyTimes.isNightTimeIn(UTC_M7)).toEqual(!MyTimes.isDayTimeIn(UTC_M7));
  expect(MyTimes.isNightTimeIn(UTC_M6)).toEqual(true);
  expect(MyTimes.isNightTimeIn(UTC_M6)).toEqual(!MyTimes.isDayTimeIn(UTC_M6));
  expect(MyTimes.isNightTimeIn(UTC_M5)).toEqual(true);
  expect(MyTimes.isNightTimeIn(UTC_M5)).toEqual(!MyTimes.isDayTimeIn(UTC_M5));
  expect(MyTimes.isNightTimeIn(UTC_M4)).toEqual(true);
  expect(MyTimes.isNightTimeIn(UTC_M4)).toEqual(!MyTimes.isDayTimeIn(UTC_M4));
  expect(MyTimes.isNightTimeIn(UTC_M330)).toEqual(true);
  expect(MyTimes.isNightTimeIn(UTC_M330)).toEqual(
    !MyTimes.isDayTimeIn(UTC_M330)
  );
  expect(MyTimes.isNightTimeIn(UTC_M3)).toEqual(true);
  expect(MyTimes.isNightTimeIn(UTC_M3)).toEqual(!MyTimes.isDayTimeIn(UTC_M3));
  expect(MyTimes.isNightTimeIn(UTC_M2)).toEqual(true);
  expect(MyTimes.isNightTimeIn(UTC_M2)).toEqual(!MyTimes.isDayTimeIn(UTC_M2));
  expect(MyTimes.isNightTimeIn(UTC_M1)).toEqual(true);
  expect(MyTimes.isNightTimeIn(UTC_M1)).toEqual(!MyTimes.isDayTimeIn(UTC_M1));
  expect(MyTimes.isNightTimeIn(UTC_0)).toEqual(true);
  expect(MyTimes.isNightTimeIn(UTC_0)).toEqual(!MyTimes.isDayTimeIn(UTC_0));
  expect(MyTimes.isNightTimeIn(UTC_P1)).toEqual(true);
  expect(MyTimes.isNightTimeIn(UTC_P1)).toEqual(!MyTimes.isDayTimeIn(UTC_P1));
  expect(MyTimes.isNightTimeIn(UTC_P2)).toEqual(true);
  expect(MyTimes.isNightTimeIn(UTC_P2)).toEqual(!MyTimes.isDayTimeIn(UTC_P2));
  expect(MyTimes.isNightTimeIn(UTC_P3)).toEqual(true);
  expect(MyTimes.isNightTimeIn(UTC_P3)).toEqual(!MyTimes.isDayTimeIn(UTC_P3));
  expect(MyTimes.isNightTimeIn(UTC_P330)).toEqual(true);
  expect(MyTimes.isNightTimeIn(UTC_P330)).toEqual(
    !MyTimes.isDayTimeIn(UTC_P330)
  );
  expect(MyTimes.isNightTimeIn(UTC_P4)).toEqual(true);
  expect(MyTimes.isNightTimeIn(UTC_P4)).toEqual(!MyTimes.isDayTimeIn(UTC_P4));
  expect(MyTimes.isNightTimeIn(UTC_P430)).toEqual(true);
  expect(MyTimes.isNightTimeIn(UTC_P430)).toEqual(
    !MyTimes.isDayTimeIn(UTC_P430)
  );
  expect(MyTimes.isNightTimeIn(UTC_P5)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_P5)).toEqual(!MyTimes.isDayTimeIn(UTC_P5));
  expect(MyTimes.isNightTimeIn(UTC_P530)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_P530)).toEqual(
    !MyTimes.isDayTimeIn(UTC_P530)
  );
  expect(MyTimes.isNightTimeIn(UTC_P545)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_P545)).toEqual(
    !MyTimes.isDayTimeIn(UTC_P545)
  );
  expect(MyTimes.isNightTimeIn(UTC_P6)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_P6)).toEqual(!MyTimes.isDayTimeIn(UTC_P6));
  expect(MyTimes.isNightTimeIn(UTC_P630)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_P630)).toEqual(
    !MyTimes.isDayTimeIn(UTC_P630)
  );
  expect(MyTimes.isNightTimeIn(UTC_P7)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_P7)).toEqual(!MyTimes.isDayTimeIn(UTC_P7));
  expect(MyTimes.isNightTimeIn(UTC_P8)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_P8)).toEqual(!MyTimes.isDayTimeIn(UTC_P8));
  expect(MyTimes.isNightTimeIn(UTC_P9)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_P9)).toEqual(!MyTimes.isDayTimeIn(UTC_P9));
  expect(MyTimes.isNightTimeIn(UTC_P930)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_P930)).toEqual(
    !MyTimes.isDayTimeIn(UTC_P930)
  );
  expect(MyTimes.isNightTimeIn(UTC_P10)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_P10)).toEqual(!MyTimes.isDayTimeIn(UTC_P10));
  expect(MyTimes.isNightTimeIn(UTC_P1030)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_P1030)).toEqual(
    !MyTimes.isDayTimeIn(UTC_P1030)
  );
  expect(MyTimes.isNightTimeIn(UTC_P12)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_P12)).toEqual(!MyTimes.isDayTimeIn(UTC_P12));
  expect(MyTimes.isNightTimeIn(UTC_P1245)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_P1245)).toEqual(
    !MyTimes.isDayTimeIn(UTC_P1245)
  );
  expect(MyTimes.isNightTimeIn(UTC_P13)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_P13)).toEqual(!MyTimes.isDayTimeIn(UTC_P13));
  jest.setSystemTime(new Date(DATE_2002_02_02_02_04));
  expect(MyTimes.isNightTimeIn(UTC_M11)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_M11)).toEqual(!MyTimes.isDayTimeIn(UTC_M11));
  expect(MyTimes.isNightTimeIn(UTC_M10)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_M10)).toEqual(!MyTimes.isDayTimeIn(UTC_M10));
  expect(MyTimes.isNightTimeIn(UTC_M930)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_M930)).toEqual(
    !MyTimes.isDayTimeIn(UTC_M930)
  );
  expect(MyTimes.isNightTimeIn(UTC_M9)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_M9)).toEqual(!MyTimes.isDayTimeIn(UTC_M9));
  expect(MyTimes.isNightTimeIn(UTC_M8)).toEqual(true);
  expect(MyTimes.isNightTimeIn(UTC_M8)).toEqual(!MyTimes.isDayTimeIn(UTC_M8));
  expect(MyTimes.isNightTimeIn(UTC_M7)).toEqual(true);
  expect(MyTimes.isNightTimeIn(UTC_M7)).toEqual(!MyTimes.isDayTimeIn(UTC_M7));
  expect(MyTimes.isNightTimeIn(UTC_M6)).toEqual(true);
  expect(MyTimes.isNightTimeIn(UTC_M6)).toEqual(!MyTimes.isDayTimeIn(UTC_M6));
  expect(MyTimes.isNightTimeIn(UTC_M5)).toEqual(true);
  expect(MyTimes.isNightTimeIn(UTC_M5)).toEqual(!MyTimes.isDayTimeIn(UTC_M5));
  expect(MyTimes.isNightTimeIn(UTC_M4)).toEqual(true);
  expect(MyTimes.isNightTimeIn(UTC_M4)).toEqual(!MyTimes.isDayTimeIn(UTC_M4));
  expect(MyTimes.isNightTimeIn(UTC_M330)).toEqual(true);
  expect(MyTimes.isNightTimeIn(UTC_M330)).toEqual(
    !MyTimes.isDayTimeIn(UTC_M330)
  );
  expect(MyTimes.isNightTimeIn(UTC_M3)).toEqual(true);
  expect(MyTimes.isNightTimeIn(UTC_M3)).toEqual(!MyTimes.isDayTimeIn(UTC_M3));
  expect(MyTimes.isNightTimeIn(UTC_M2)).toEqual(true);
  expect(MyTimes.isNightTimeIn(UTC_M2)).toEqual(!MyTimes.isDayTimeIn(UTC_M2));
  expect(MyTimes.isNightTimeIn(UTC_M1)).toEqual(true);
  expect(MyTimes.isNightTimeIn(UTC_M1)).toEqual(!MyTimes.isDayTimeIn(UTC_M1));
  expect(MyTimes.isNightTimeIn(UTC_0)).toEqual(true);
  expect(MyTimes.isNightTimeIn(UTC_0)).toEqual(!MyTimes.isDayTimeIn(UTC_0));
  expect(MyTimes.isNightTimeIn(UTC_P1)).toEqual(true);
  expect(MyTimes.isNightTimeIn(UTC_P1)).toEqual(!MyTimes.isDayTimeIn(UTC_P1));
  expect(MyTimes.isNightTimeIn(UTC_P2)).toEqual(true);
  expect(MyTimes.isNightTimeIn(UTC_P2)).toEqual(!MyTimes.isDayTimeIn(UTC_P2));
  expect(MyTimes.isNightTimeIn(UTC_P3)).toEqual(true);
  expect(MyTimes.isNightTimeIn(UTC_P3)).toEqual(!MyTimes.isDayTimeIn(UTC_P3));
  expect(MyTimes.isNightTimeIn(UTC_P330)).toEqual(true);
  expect(MyTimes.isNightTimeIn(UTC_P330)).toEqual(
    !MyTimes.isDayTimeIn(UTC_P330)
  );
  expect(MyTimes.isNightTimeIn(UTC_P4)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_P4)).toEqual(!MyTimes.isDayTimeIn(UTC_P4));
  expect(MyTimes.isNightTimeIn(UTC_P430)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_P430)).toEqual(
    !MyTimes.isDayTimeIn(UTC_P430)
  );
  expect(MyTimes.isNightTimeIn(UTC_P5)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_P5)).toEqual(!MyTimes.isDayTimeIn(UTC_P5));
  expect(MyTimes.isNightTimeIn(UTC_P530)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_P530)).toEqual(
    !MyTimes.isDayTimeIn(UTC_P530)
  );
  expect(MyTimes.isNightTimeIn(UTC_P545)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_P545)).toEqual(
    !MyTimes.isDayTimeIn(UTC_P545)
  );
  expect(MyTimes.isNightTimeIn(UTC_P6)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_P6)).toEqual(!MyTimes.isDayTimeIn(UTC_P6));
  expect(MyTimes.isNightTimeIn(UTC_P630)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_P630)).toEqual(
    !MyTimes.isDayTimeIn(UTC_P630)
  );
  expect(MyTimes.isNightTimeIn(UTC_P7)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_P7)).toEqual(!MyTimes.isDayTimeIn(UTC_P7));
  expect(MyTimes.isNightTimeIn(UTC_P8)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_P8)).toEqual(!MyTimes.isDayTimeIn(UTC_P8));
  expect(MyTimes.isNightTimeIn(UTC_P9)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_P9)).toEqual(!MyTimes.isDayTimeIn(UTC_P9));
  expect(MyTimes.isNightTimeIn(UTC_P930)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_P930)).toEqual(
    !MyTimes.isDayTimeIn(UTC_P930)
  );
  expect(MyTimes.isNightTimeIn(UTC_P10)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_P10)).toEqual(!MyTimes.isDayTimeIn(UTC_P10));
  expect(MyTimes.isNightTimeIn(UTC_P1030)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_P1030)).toEqual(
    !MyTimes.isDayTimeIn(UTC_P1030)
  );
  expect(MyTimes.isNightTimeIn(UTC_P12)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_P12)).toEqual(!MyTimes.isDayTimeIn(UTC_P12));
  expect(MyTimes.isNightTimeIn(UTC_P1245)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_P1245)).toEqual(
    !MyTimes.isDayTimeIn(UTC_P1245)
  );
  expect(MyTimes.isNightTimeIn(UTC_P13)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_P13)).toEqual(!MyTimes.isDayTimeIn(UTC_P13));
  jest.setSystemTime(new Date(DATE_2003_03_03_03_06));
  expect(MyTimes.isNightTimeIn(UTC_M11)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_M11)).toEqual(!MyTimes.isDayTimeIn(UTC_M11));
  jest.setSystemTime(new Date(DATE_2004_04_04_04_08));
  expect(MyTimes.isNightTimeIn(UTC_M11)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_M11)).toEqual(!MyTimes.isDayTimeIn(UTC_M11));
  jest.setSystemTime(new Date(DATE_2005_05_05_05_10));
  expect(MyTimes.isNightTimeIn(UTC_M11)).toEqual(true);
  expect(MyTimes.isNightTimeIn(UTC_M11)).toEqual(!MyTimes.isDayTimeIn(UTC_M11));
  jest.setSystemTime(new Date(DATE_2006_06_06_06_12));
  expect(MyTimes.isNightTimeIn(UTC_M11)).toEqual(true);
  expect(MyTimes.isNightTimeIn(UTC_M11)).toEqual(!MyTimes.isDayTimeIn(UTC_M11));
  jest.setSystemTime(new Date(DATE_2007_07_07_07_14));
  expect(MyTimes.isNightTimeIn(UTC_M11)).toEqual(true);
  expect(MyTimes.isNightTimeIn(UTC_M11)).toEqual(!MyTimes.isDayTimeIn(UTC_M11));
  jest.setSystemTime(new Date(DATE_2008_08_08_08_16));
  expect(MyTimes.isNightTimeIn(UTC_M11)).toEqual(true);
  expect(MyTimes.isNightTimeIn(UTC_M11)).toEqual(!MyTimes.isDayTimeIn(UTC_M11));
  jest.setSystemTime(new Date(DATE_2009_09_09_09_18));
  expect(MyTimes.isNightTimeIn(UTC_M11)).toEqual(true);
  expect(MyTimes.isNightTimeIn(UTC_M11)).toEqual(!MyTimes.isDayTimeIn(UTC_M11));
  jest.setSystemTime(new Date(DATE_2010_10_10_10_20));
  expect(MyTimes.isNightTimeIn(UTC_M11)).toEqual(true);
  expect(MyTimes.isNightTimeIn(UTC_M11)).toEqual(!MyTimes.isDayTimeIn(UTC_M11));
  jest.setSystemTime(new Date(DATE_2011_11_11_11_22));
  expect(MyTimes.isNightTimeIn(UTC_M11)).toEqual(true);
  expect(MyTimes.isNightTimeIn(UTC_M11)).toEqual(!MyTimes.isDayTimeIn(UTC_M11));
  jest.setSystemTime(new Date(DATE_2012_12_12_12_24));
  expect(MyTimes.isNightTimeIn(UTC_M11)).toEqual(true);
  expect(MyTimes.isNightTimeIn(UTC_M11)).toEqual(!MyTimes.isDayTimeIn(UTC_M11));
  jest.setSystemTime(new Date(DATE_2013_03_13_13_26));
  expect(MyTimes.isNightTimeIn(UTC_M11)).toEqual(true);
  expect(MyTimes.isNightTimeIn(UTC_M11)).toEqual(!MyTimes.isDayTimeIn(UTC_M11));
  jest.setSystemTime(new Date(DATE_2014_04_14_14_28));
  expect(MyTimes.isNightTimeIn(UTC_M11)).toEqual(true);
  expect(MyTimes.isNightTimeIn(UTC_M11)).toEqual(!MyTimes.isDayTimeIn(UTC_M11));
  jest.setSystemTime(new Date(DATE_2015_05_15_15_30));
  expect(MyTimes.isNightTimeIn(UTC_M11)).toEqual(true);
  expect(MyTimes.isNightTimeIn(UTC_M11)).toEqual(!MyTimes.isDayTimeIn(UTC_M11));
  jest.setSystemTime(new Date(DATE_2016_06_16_16_32));
  expect(MyTimes.isNightTimeIn(UTC_M11)).toEqual(true);
  expect(MyTimes.isNightTimeIn(UTC_M11)).toEqual(!MyTimes.isDayTimeIn(UTC_M11));
  jest.setSystemTime(new Date(DATE_2017_07_17_17_34));
  expect(MyTimes.isNightTimeIn(UTC_M11)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_M11)).toEqual(!MyTimes.isDayTimeIn(UTC_M11));
  jest.setSystemTime(new Date(DATE_2018_08_18_18_36));
  expect(MyTimes.isNightTimeIn(UTC_M11)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_M11)).toEqual(!MyTimes.isDayTimeIn(UTC_M11));
  jest.setSystemTime(new Date(DATE_2019_09_19_19_38));
  expect(MyTimes.isNightTimeIn(UTC_M11)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_M11)).toEqual(!MyTimes.isDayTimeIn(UTC_M11));
  jest.setSystemTime(new Date(DATE_2020_02_20_20_40));
  expect(MyTimes.isNightTimeIn(UTC_M11)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_M11)).toEqual(!MyTimes.isDayTimeIn(UTC_M11));
  jest.setSystemTime(new Date(DATE_2021_01_21_21_42));
  expect(MyTimes.isNightTimeIn(UTC_M11)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_M11)).toEqual(!MyTimes.isDayTimeIn(UTC_M11));
  jest.setSystemTime(new Date(DATE_2022_02_22_22_44));
  expect(MyTimes.isNightTimeIn(UTC_M11)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_M11)).toEqual(!MyTimes.isDayTimeIn(UTC_M11));
  jest.setSystemTime(new Date(DATE_2023_03_23_23_46));
  expect(MyTimes.isNightTimeIn(UTC_M11)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_M11)).toEqual(!MyTimes.isDayTimeIn(UTC_M11));
  jest.setSystemTime(new Date(DATE_2024_04_24_00_48));
  expect(MyTimes.isNightTimeIn(UTC_M11)).toEqual(false);
  expect(MyTimes.isNightTimeIn(UTC_M11)).toEqual(!MyTimes.isDayTimeIn(UTC_M11));
});

test("night time in AWSRegionCode", () => {
  jest.setSystemTime(new Date(DATE_1999_12_31_23_59));
  expect(MyTimes.isNightTimeInAWS(AWS_US_E_2)).toEqual(true);
  expect(MyTimes.isNightTimeInAWS(AWS_US_E_2)).toEqual(
    !MyTimes.isDayTimeInAWS(AWS_US_E_2)
  );
  expect(MyTimes.isNightTimeInAWS(AWS_US_E_1)).toEqual(true);
  expect(MyTimes.isNightTimeInAWS(AWS_US_E_1)).toEqual(
    !MyTimes.isDayTimeInAWS(AWS_US_E_1)
  );
  expect(MyTimes.isNightTimeInAWS(AWS_US_W_1)).toEqual(false);
  expect(MyTimes.isNightTimeInAWS(AWS_US_W_1)).toEqual(
    !MyTimes.isDayTimeInAWS(AWS_US_W_1)
  );
  expect(MyTimes.isNightTimeInAWS(AWS_US_W_2)).toEqual(false);
  expect(MyTimes.isNightTimeInAWS(AWS_US_W_2)).toEqual(
    !MyTimes.isDayTimeInAWS(AWS_US_W_2)
  );
  expect(MyTimes.isNightTimeInAWS(AWS_AF_S_1)).toEqual(true);
  expect(MyTimes.isNightTimeInAWS(AWS_AF_S_1)).toEqual(
    !MyTimes.isDayTimeInAWS(AWS_AF_S_1)
  );
  expect(MyTimes.isNightTimeInAWS(AWS_AP_E_1)).toEqual(false);
  expect(MyTimes.isNightTimeInAWS(AWS_AP_E_1)).toEqual(
    !MyTimes.isDayTimeInAWS(AWS_AP_E_1)
  );
  expect(MyTimes.isNightTimeInAWS(AWS_AP_SE_3)).toEqual(false);
  expect(MyTimes.isNightTimeInAWS(AWS_AP_SE_3)).toEqual(
    !MyTimes.isDayTimeInAWS(AWS_AP_SE_3)
  );
  expect(MyTimes.isNightTimeInAWS(AWS_AP_S_1)).toEqual(true);
  expect(MyTimes.isNightTimeInAWS(AWS_AP_S_1)).toEqual(
    !MyTimes.isDayTimeInAWS(AWS_AP_S_1)
  );
  expect(MyTimes.isNightTimeInAWS(AWS_AP_NE_3)).toEqual(false);
  expect(MyTimes.isNightTimeInAWS(AWS_AP_NE_3)).toEqual(
    !MyTimes.isDayTimeInAWS(AWS_AP_NE_3)
  );
  expect(MyTimes.isNightTimeInAWS(AWS_AP_NE_2)).toEqual(false);
  expect(MyTimes.isNightTimeInAWS(AWS_AP_NE_2)).toEqual(
    !MyTimes.isDayTimeInAWS(AWS_AP_NE_2)
  );
  expect(MyTimes.isNightTimeInAWS(AWS_AP_SE_1)).toEqual(false);
  expect(MyTimes.isNightTimeInAWS(AWS_AP_SE_1)).toEqual(
    !MyTimes.isDayTimeInAWS(AWS_AP_SE_1)
  );
  expect(MyTimes.isNightTimeInAWS(AWS_AP_SE_2)).toEqual(false);
  expect(MyTimes.isNightTimeInAWS(AWS_AP_SE_2)).toEqual(
    !MyTimes.isDayTimeInAWS(AWS_AP_SE_2)
  );
  expect(MyTimes.isNightTimeInAWS(AWS_AP_NE_1)).toEqual(false);
  expect(MyTimes.isNightTimeInAWS(AWS_AP_NE_1)).toEqual(
    !MyTimes.isDayTimeInAWS(AWS_AP_NE_1)
  );
  expect(MyTimes.isNightTimeInAWS(AWS_CA_C_1)).toEqual(true);
  expect(MyTimes.isNightTimeInAWS(AWS_CA_C_1)).toEqual(
    !MyTimes.isDayTimeInAWS(AWS_CA_C_1)
  );
  expect(MyTimes.isNightTimeInAWS(AWS_CN_N_1)).toEqual(false);
  expect(MyTimes.isNightTimeInAWS(AWS_CN_N_1)).toEqual(
    !MyTimes.isDayTimeInAWS(AWS_CN_N_1)
  );
  expect(MyTimes.isNightTimeInAWS(AWS_CN_NW_1)).toEqual(false);
  expect(MyTimes.isNightTimeInAWS(AWS_CN_NW_1)).toEqual(
    !MyTimes.isDayTimeInAWS(AWS_CN_NW_1)
  );
  expect(MyTimes.isNightTimeInAWS(AWS_EU_C_1)).toEqual(true);
  expect(MyTimes.isNightTimeInAWS(AWS_EU_C_1)).toEqual(
    !MyTimes.isDayTimeInAWS(AWS_EU_C_1)
  );
  expect(MyTimes.isNightTimeInAWS(AWS_EU_W_1)).toEqual(true);
  expect(MyTimes.isNightTimeInAWS(AWS_EU_W_1)).toEqual(
    !MyTimes.isDayTimeInAWS(AWS_EU_W_1)
  );
  expect(MyTimes.isNightTimeInAWS(AWS_EU_W_2)).toEqual(true);
  expect(MyTimes.isNightTimeInAWS(AWS_EU_W_2)).toEqual(
    !MyTimes.isDayTimeInAWS(AWS_EU_W_2)
  );
  expect(MyTimes.isNightTimeInAWS(AWS_EU_S_1)).toEqual(true);
  expect(MyTimes.isNightTimeInAWS(AWS_EU_S_1)).toEqual(
    !MyTimes.isDayTimeInAWS(AWS_EU_S_1)
  );
  expect(MyTimes.isNightTimeInAWS(AWS_EU_W_3)).toEqual(true);
  expect(MyTimes.isNightTimeInAWS(AWS_EU_W_3)).toEqual(
    !MyTimes.isDayTimeInAWS(AWS_EU_W_3)
  );
  expect(MyTimes.isNightTimeInAWS(AWS_EU_N_1)).toEqual(true);
  expect(MyTimes.isNightTimeInAWS(AWS_EU_N_1)).toEqual(
    !MyTimes.isDayTimeInAWS(AWS_EU_N_1)
  );
  expect(MyTimes.isNightTimeInAWS(AWS_ME_S_1)).toEqual(true);
  expect(MyTimes.isNightTimeInAWS(AWS_ME_S_1)).toEqual(
    !MyTimes.isDayTimeInAWS(AWS_ME_S_1)
  );
  expect(MyTimes.isNightTimeInAWS(AWS_SA_E_1)).toEqual(true);
  expect(MyTimes.isNightTimeInAWS(AWS_SA_E_1)).toEqual(
    !MyTimes.isDayTimeInAWS(AWS_SA_E_1)
  );
});

test("night", () => {
  jest.setSystemTime(new Date(DATE_1999_12_31_23_59));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2000_01_01_00_00));
  expect(MyTimes.isNight()).toEqual(true);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2001_01_01_01_02));
  expect(MyTimes.isNight()).toEqual(true);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2002_02_02_02_04));
  expect(MyTimes.isNight()).toEqual(true);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2003_03_03_03_06));
  expect(MyTimes.isNight()).toEqual(true);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2004_04_04_04_08));
  expect(MyTimes.isNight()).toEqual(true);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2005_05_05_05_10));
  expect(MyTimes.isNight()).toEqual(true);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2006_06_06_06_12));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2007_07_07_07_14));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2008_08_08_08_16));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2009_09_09_09_18));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2010_10_10_10_20));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2011_11_11_11_22));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2012_12_12_12_24));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2013_03_13_13_26));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2014_04_14_14_28));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2015_05_15_15_30));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2016_06_16_16_32));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2017_07_17_17_34));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2018_08_18_18_36));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2019_09_19_19_38));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2020_02_20_20_40));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2021_01_21_21_42));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2022_02_22_22_44));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2023_03_23_23_46));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2024_04_24_00_48));
  expect(MyTimes.isNight()).toEqual(true);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
});

test("morning", () => {
  jest.setSystemTime(new Date(DATE_1999_12_31_23_59));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2000_01_01_00_00));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2001_01_01_01_02));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2002_02_02_02_04));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2003_03_03_03_06));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2004_04_04_04_08));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2005_05_05_05_10));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2006_06_06_06_12));
  expect(MyTimes.isMorning()).toEqual(true);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2007_07_07_07_14));
  expect(MyTimes.isMorning()).toEqual(true);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2008_08_08_08_16));
  expect(MyTimes.isMorning()).toEqual(true);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2009_09_09_09_18));
  expect(MyTimes.isMorning()).toEqual(true);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2010_10_10_10_20));
  expect(MyTimes.isMorning()).toEqual(true);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2011_11_11_11_22));
  expect(MyTimes.isMorning()).toEqual(true);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2012_12_12_12_24));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2013_03_13_13_26));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2014_04_14_14_28));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2015_05_15_15_30));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2016_06_16_16_32));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2017_07_17_17_34));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2018_08_18_18_36));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2019_09_19_19_38));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2020_02_20_20_40));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2021_01_21_21_42));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2022_02_22_22_44));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2023_03_23_23_46));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2024_04_24_00_48));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
});

test("afternoon", () => {
  jest.setSystemTime(new Date(DATE_1999_12_31_23_59));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2000_01_01_00_00));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2001_01_01_01_02));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2002_02_02_02_04));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2003_03_03_03_06));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2004_04_04_04_08));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2005_05_05_05_10));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2006_06_06_06_12));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2007_07_07_07_14));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2008_08_08_08_16));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2009_09_09_09_18));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2010_10_10_10_20));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2011_11_11_11_22));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2012_12_12_12_24));
  expect(MyTimes.isAfternoon()).toEqual(true);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2013_03_13_13_26));
  expect(MyTimes.isAfternoon()).toEqual(true);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2014_04_14_14_28));
  expect(MyTimes.isAfternoon()).toEqual(true);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2015_05_15_15_30));
  expect(MyTimes.isAfternoon()).toEqual(true);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2016_06_16_16_32));
  expect(MyTimes.isAfternoon()).toEqual(true);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2017_07_17_17_34));
  expect(MyTimes.isAfternoon()).toEqual(true);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2018_08_18_18_36));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2019_09_19_19_38));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2020_02_20_20_40));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2021_01_21_21_42));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2022_02_22_22_44));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2023_03_23_23_46));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2024_04_24_00_48));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
});

test("evening", () => {
  jest.setSystemTime(new Date(DATE_1999_12_31_23_59));
  expect(MyTimes.isEvening()).toEqual(true);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATE_2000_01_01_00_00));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATE_2001_01_01_01_02));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATE_2002_02_02_02_04));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATE_2003_03_03_03_06));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATE_2004_04_04_04_08));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATE_2005_05_05_05_10));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATE_2006_06_06_06_12));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATE_2007_07_07_07_14));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATE_2008_08_08_08_16));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATE_2009_09_09_09_18));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATE_2010_10_10_10_20));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATE_2011_11_11_11_22));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATE_2012_12_12_12_24));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATE_2013_03_13_13_26));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATE_2014_04_14_14_28));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATE_2015_05_15_15_30));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATE_2016_06_16_16_32));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATE_2017_07_17_17_34));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATE_2018_08_18_18_36));
  expect(MyTimes.isEvening()).toEqual(true);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATE_2019_09_19_19_38));
  expect(MyTimes.isEvening()).toEqual(true);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATE_2020_02_20_20_40));
  expect(MyTimes.isEvening()).toEqual(true);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATE_2021_01_21_21_42));
  expect(MyTimes.isEvening()).toEqual(true);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATE_2022_02_22_22_44));
  expect(MyTimes.isEvening()).toEqual(true);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATE_2023_03_23_23_46));
  expect(MyTimes.isEvening()).toEqual(true);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATE_2024_04_24_00_48));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
});

test("business hours", () => {
  jest.setSystemTime(new Date(DATE_1999_12_31_23_59));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date(DATE_2000_01_01_00_00));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date(DATE_2001_01_01_01_02));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date(DATE_2002_02_02_02_04));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date(DATE_2003_03_03_03_06));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date(DATE_2004_04_04_04_08));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date(DATE_2005_05_05_05_10));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date(DATE_2006_06_06_06_12));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date(DATE_2007_07_07_07_14));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date(DATE_2008_08_08_08_16));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date(DATE_2009_09_09_09_18));
  expect(MyTimes.isBusinessHours()).toEqual(true);
  jest.setSystemTime(new Date(DATE_2010_10_10_10_20));
  expect(MyTimes.isBusinessHours()).toEqual(true);
  jest.setSystemTime(new Date(DATE_2011_11_11_11_22));
  expect(MyTimes.isBusinessHours()).toEqual(true);
  jest.setSystemTime(new Date(DATE_2012_12_12_12_24));
  expect(MyTimes.isBusinessHours()).toEqual(true);
  jest.setSystemTime(new Date(DATE_2013_03_13_13_26));
  expect(MyTimes.isBusinessHours()).toEqual(true);
  jest.setSystemTime(new Date(DATE_2014_04_14_14_28));
  expect(MyTimes.isBusinessHours()).toEqual(true);
  jest.setSystemTime(new Date(DATE_2015_05_15_15_30));
  expect(MyTimes.isBusinessHours()).toEqual(true);
  jest.setSystemTime(new Date(DATE_2016_06_16_16_32));
  expect(MyTimes.isBusinessHours()).toEqual(true);
  jest.setSystemTime(new Date(DATE_2017_07_17_17_34));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date(DATE_2018_08_18_18_36));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date(DATE_2019_09_19_19_38));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date(DATE_2020_02_20_20_40));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date(DATE_2021_01_21_21_42));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date(DATE_2022_02_22_22_44));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date(DATE_2023_03_23_23_46));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date(DATE_2024_04_24_00_48));
  expect(MyTimes.isBusinessHours()).toEqual(false);
});

test("day shift", () => {
  jest.setSystemTime(new Date(DATE_1999_12_31_23_59));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2000_01_01_00_00));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2001_01_01_01_02));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2002_02_02_02_04));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2003_03_03_03_06));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2004_04_04_04_08));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2005_05_05_05_10));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2006_06_06_06_12));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2007_07_07_07_14));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2008_08_08_08_16));
  expect(MyTimes.isDayShift()).toEqual(true);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2009_09_09_09_18));
  expect(MyTimes.isDayShift()).toEqual(true);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2010_10_10_10_20));
  expect(MyTimes.isDayShift()).toEqual(true);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2011_11_11_11_22));
  expect(MyTimes.isDayShift()).toEqual(true);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2012_12_12_12_24));
  expect(MyTimes.isDayShift()).toEqual(true);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2013_03_13_13_26));
  expect(MyTimes.isDayShift()).toEqual(true);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2014_04_14_14_28));
  expect(MyTimes.isDayShift()).toEqual(true);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2015_05_15_15_30));
  expect(MyTimes.isDayShift()).toEqual(true);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2016_06_16_16_32));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2017_07_17_17_34));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2018_08_18_18_36));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2019_09_19_19_38));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2020_02_20_20_40));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2021_01_21_21_42));
  jest.setSystemTime(new Date(DATE_2022_02_22_22_44));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2023_03_23_23_46));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2024_04_24_00_48));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
});

test("evening shift", () => {
  jest.setSystemTime(new Date(DATE_1999_12_31_23_59));
  expect(MyTimes.isEveningShift()).toEqual(true);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2000_01_01_00_00));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2001_01_01_01_02));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2002_02_02_02_04));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2003_03_03_03_06));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2004_04_04_04_08));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2005_05_05_05_10));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2006_06_06_06_12));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2007_07_07_07_14));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2008_08_08_08_16));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2009_09_09_09_18));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2010_10_10_10_20));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2011_11_11_11_22));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2012_12_12_12_24));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2013_03_13_13_26));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2014_04_14_14_28));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2015_05_15_15_30));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2016_06_16_16_32));
  expect(MyTimes.isEveningShift()).toEqual(true);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2017_07_17_17_34));
  expect(MyTimes.isEveningShift()).toEqual(true);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2018_08_18_18_36));
  expect(MyTimes.isEveningShift()).toEqual(true);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2019_09_19_19_38));
  expect(MyTimes.isEveningShift()).toEqual(true);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2020_02_20_20_40));
  expect(MyTimes.isEveningShift()).toEqual(true);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2021_01_21_21_42));
  expect(MyTimes.isEveningShift()).toEqual(true);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2022_02_22_22_44));
  expect(MyTimes.isEveningShift()).toEqual(true);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2023_03_23_23_46));
  expect(MyTimes.isEveningShift()).toEqual(true);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2024_04_24_00_48));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
});

test("night shift", () => {
  jest.setSystemTime(new Date(DATE_1999_12_31_23_59));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATE_2000_01_01_00_00));
  expect(MyTimes.isNightShift()).toEqual(true);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATE_2001_01_01_01_02));
  expect(MyTimes.isNightShift()).toEqual(true);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATE_2002_02_02_02_04));
  expect(MyTimes.isNightShift()).toEqual(true);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATE_2003_03_03_03_06));
  expect(MyTimes.isNightShift()).toEqual(true);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATE_2004_04_04_04_08));
  expect(MyTimes.isNightShift()).toEqual(true);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATE_2005_05_05_05_10));
  expect(MyTimes.isNightShift()).toEqual(true);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATE_2006_06_06_06_12));
  expect(MyTimes.isNightShift()).toEqual(true);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATE_2007_07_07_07_14));
  expect(MyTimes.isNightShift()).toEqual(true);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATE_2008_08_08_08_16));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATE_2009_09_09_09_18));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATE_2010_10_10_10_20));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATE_2011_11_11_11_22));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATE_2012_12_12_12_24));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATE_2013_03_13_13_26));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATE_2014_04_14_14_28));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATE_2015_05_15_15_30));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATE_2016_06_16_16_32));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATE_2017_07_17_17_34));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATE_2018_08_18_18_36));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATE_2019_09_19_19_38));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATE_2020_02_20_20_40));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATE_2021_01_21_21_42));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATE_2022_02_22_22_44));
  expect(MyTimes.isEveningShift()).toEqual(true);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2023_03_23_23_46));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATE_2024_04_24_00_48));
  expect(MyTimes.isNightShift()).toEqual(true);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
});
