import * as MyTimes from "../src/index";

const DATE_1999 = "1999-12-31T23:59:59";
const DATE_2000 = "2000-01-01T00:00:00";
const DATE_2001 = "2001-01-01T01:02:02";
const DATE_2002 = "2002-02-02T02:04:04";
const DATE_2003 = "2003-03-03T03:06:06";
const DATE_2004 = "2004-04-04T04:08:08";
const DATE_2005 = "2005-05-05T05:10:10";
const DATE_2006 = "2006-06-06T06:12:12";
const DATE_2007 = "2007-07-07T07:14:14";
const DATE_2008 = "2008-08-08T08:16:16";
const DATE_2009 = "2009-09-09T09:18:18";
const DATE_2010 = "2010-10-10T10:20:20";
const DATE_2011 = "2011-11-11T11:22:22";
const DATE_2012 = "2012-12-12T12:24:24";
const DATE_2013 = "2013-03-13T13:26:26";
const DATE_2014 = "2014-04-14T14:28:28";
const DATE_2015 = "2015-05-15T15:30:30";
const DATE_2016 = "2016-06-16T16:32:32";
const DATE_2017 = "2017-07-17T17:34:34";
const DATE_2018 = "2018-08-18T18:36:36";
const DATE_2019 = "2019-09-19T19:38:38";
const DATE_2020 = "2020-02-20T20:40:40";
const DATE_2021 = "2021-01-21T21:42:42";
const DATE_2022 = "2022-02-22T22:44:44";
const DATE_2023 = "2023-03-23T23:46:46";
const DATE_2024 = "2024-04-24T00:48:48";

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
  jest.setSystemTime(new Date(DATE_1999));
  expect(MyTimes.nowHour()).toEqual(23);
  jest.setSystemTime(new Date(DATE_2000));
  expect(MyTimes.nowHour()).toEqual(0);
  jest.setSystemTime(new Date(DATE_2001));
  expect(MyTimes.nowHour()).toEqual(1);
  jest.setSystemTime(new Date(DATE_2002));
  expect(MyTimes.nowHour()).toEqual(2);
  jest.setSystemTime(new Date(DATE_2003));
  expect(MyTimes.nowHour()).toEqual(3);
  jest.setSystemTime(new Date(DATE_2004));
  expect(MyTimes.nowHour()).toEqual(4);
  jest.setSystemTime(new Date(DATE_2005));
  expect(MyTimes.nowHour()).toEqual(5);
  jest.setSystemTime(new Date(DATE_2006));
  expect(MyTimes.nowHour()).toEqual(6);
  jest.setSystemTime(new Date(DATE_2007));
  expect(MyTimes.nowHour()).toEqual(7);
  jest.setSystemTime(new Date(DATE_2008));
  expect(MyTimes.nowHour()).toEqual(8);
  jest.setSystemTime(new Date(DATE_2009));
  expect(MyTimes.nowHour()).toEqual(9);
  jest.setSystemTime(new Date(DATE_2010));
  expect(MyTimes.nowHour()).toEqual(10);
  jest.setSystemTime(new Date(DATE_2011));
  expect(MyTimes.nowHour()).toEqual(11);
  jest.setSystemTime(new Date(DATE_2012));
  expect(MyTimes.nowHour()).toEqual(12);
  jest.setSystemTime(new Date(DATE_2013));
  expect(MyTimes.nowHour()).toEqual(13);
  jest.setSystemTime(new Date(DATE_2014));
  expect(MyTimes.nowHour()).toEqual(14);
  jest.setSystemTime(new Date(DATE_2015));
  expect(MyTimes.nowHour()).toEqual(15);
  jest.setSystemTime(new Date(DATE_2016));
  expect(MyTimes.nowHour()).toEqual(16);
  jest.setSystemTime(new Date(DATE_2017));
  expect(MyTimes.nowHour()).toEqual(17);
  jest.setSystemTime(new Date(DATE_2018));
  expect(MyTimes.nowHour()).toEqual(18);
  jest.setSystemTime(new Date(DATE_2019));
  expect(MyTimes.nowHour()).toEqual(19);
  jest.setSystemTime(new Date(DATE_2020));
  expect(MyTimes.nowHour()).toEqual(20);
  jest.setSystemTime(new Date(DATE_2021));
  expect(MyTimes.nowHour()).toEqual(21);
  jest.setSystemTime(new Date(DATE_2022));
  expect(MyTimes.nowHour()).toEqual(22);
  jest.setSystemTime(new Date(DATE_2023));
  expect(MyTimes.nowHour()).toEqual(23);
  jest.setSystemTime(new Date(DATE_2024));
  expect(MyTimes.nowHour()).toEqual(0);
});

test("now hour in IANATimeZone", () => {
  jest.setSystemTime(new Date(DATE_1999));
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
  jest.setSystemTime(new Date(DATE_2000));
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
});

test("now hour in AWSRegionCode", () => {
  jest.setSystemTime(new Date(DATE_1999));
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
  jest.setSystemTime(new Date(DATE_2000));
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
});

test("day time", () => {
  jest.setSystemTime(new Date(DATE_1999));
  expect(MyTimes.isDayTime()).toEqual(false);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date(DATE_2000));
  expect(MyTimes.isDayTime()).toEqual(false);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date(DATE_2001));
  expect(MyTimes.isDayTime()).toEqual(false);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date(DATE_2002));
  expect(MyTimes.isDayTime()).toEqual(false);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date(DATE_2003));
  expect(MyTimes.isDayTime()).toEqual(false);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date(DATE_2004));
  expect(MyTimes.isDayTime()).toEqual(false);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date(DATE_2005));
  expect(MyTimes.isDayTime()).toEqual(false);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date(DATE_2006));
  expect(MyTimes.isDayTime()).toEqual(true);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date(DATE_2007));
  expect(MyTimes.isDayTime()).toEqual(true);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date(DATE_2008));
  expect(MyTimes.isDayTime()).toEqual(true);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date(DATE_2009));
  expect(MyTimes.isDayTime()).toEqual(true);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date(DATE_2010));
  expect(MyTimes.isDayTime()).toEqual(true);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date(DATE_2011));
  expect(MyTimes.isDayTime()).toEqual(true);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date(DATE_2012));
  expect(MyTimes.isDayTime()).toEqual(true);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date(DATE_2013));
  expect(MyTimes.isDayTime()).toEqual(true);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date(DATE_2014));
  expect(MyTimes.isDayTime()).toEqual(true);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date(DATE_2015));
  expect(MyTimes.isDayTime()).toEqual(true);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date(DATE_2016));
  expect(MyTimes.isDayTime()).toEqual(true);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date(DATE_2017));
  expect(MyTimes.isDayTime()).toEqual(true);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date(DATE_2018));
  expect(MyTimes.isDayTime()).toEqual(false);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date(DATE_2019));
  expect(MyTimes.isDayTime()).toEqual(false);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date(DATE_2020));
  expect(MyTimes.isDayTime()).toEqual(false);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date(DATE_2021));
  expect(MyTimes.isDayTime()).toEqual(false);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date(DATE_2022));
  expect(MyTimes.isDayTime()).toEqual(false);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date(DATE_2023));
  expect(MyTimes.isDayTime()).toEqual(false);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
  jest.setSystemTime(new Date(DATE_2024));
  expect(MyTimes.isDayTime()).toEqual(false);
  expect(MyTimes.isDayTime()).toEqual(!MyTimes.isNightTime());
});

test("day time in IANATimeZone", () => {
  jest.setSystemTime(new Date(DATE_1999));
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(!MyTimes.isNightTimeIn(UTC_M11));
  expect(MyTimes.isDayTimeIn(UTC_M10)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_M10)).toEqual(!MyTimes.isNightTimeIn(UTC_M10));
  expect(MyTimes.isDayTimeIn(UTC_M930)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_M930)).toEqual(!MyTimes.isNightTimeIn(UTC_M930));
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
  expect(MyTimes.isDayTimeIn(UTC_M330)).toEqual(!MyTimes.isNightTimeIn(UTC_M330));
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
  expect(MyTimes.isDayTimeIn(UTC_P330)).toEqual(!MyTimes.isNightTimeIn(UTC_P330));
  expect(MyTimes.isDayTimeIn(UTC_P4)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_P4)).toEqual(!MyTimes.isNightTimeIn(UTC_P4));
  expect(MyTimes.isDayTimeIn(UTC_P430)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_P430)).toEqual(!MyTimes.isNightTimeIn(UTC_P430));
  expect(MyTimes.isDayTimeIn(UTC_P5)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_P5)).toEqual(!MyTimes.isNightTimeIn(UTC_P5));
  expect(MyTimes.isDayTimeIn(UTC_P530)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_P530)).toEqual(!MyTimes.isNightTimeIn(UTC_P530));
  expect(MyTimes.isDayTimeIn(UTC_P545)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_P545)).toEqual(!MyTimes.isNightTimeIn(UTC_P545));
  expect(MyTimes.isDayTimeIn(UTC_P6)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_P6)).toEqual(!MyTimes.isNightTimeIn(UTC_P6));
  expect(MyTimes.isDayTimeIn(UTC_P630)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P630)).toEqual(!MyTimes.isNightTimeIn(UTC_P630));
  expect(MyTimes.isDayTimeIn(UTC_P7)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P7)).toEqual(!MyTimes.isNightTimeIn(UTC_P7));
  expect(MyTimes.isDayTimeIn(UTC_P8)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P8)).toEqual(!MyTimes.isNightTimeIn(UTC_P8));
  expect(MyTimes.isDayTimeIn(UTC_P9)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P9)).toEqual(!MyTimes.isNightTimeIn(UTC_P9));
  expect(MyTimes.isDayTimeIn(UTC_P930)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P930)).toEqual(!MyTimes.isNightTimeIn(UTC_P930));
  expect(MyTimes.isDayTimeIn(UTC_P10)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P10)).toEqual(!MyTimes.isNightTimeIn(UTC_P10));
  expect(MyTimes.isDayTimeIn(UTC_P1030)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P1030)).toEqual(!MyTimes.isNightTimeIn(UTC_P1030));
  expect(MyTimes.isDayTimeIn(UTC_P12)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P12)).toEqual(!MyTimes.isNightTimeIn(UTC_P12));
  expect(MyTimes.isDayTimeIn(UTC_P1245)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P1245)).toEqual(!MyTimes.isNightTimeIn(UTC_P1245));
  expect(MyTimes.isDayTimeIn(UTC_P13)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P13)).toEqual(!MyTimes.isNightTimeIn(UTC_P13));
  jest.setSystemTime(new Date(DATE_2000));
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(!MyTimes.isNightTimeIn(UTC_M11));
  expect(MyTimes.isDayTimeIn(UTC_M10)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_M10)).toEqual(!MyTimes.isNightTimeIn(UTC_M10));
  expect(MyTimes.isDayTimeIn(UTC_M930)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_M930)).toEqual(!MyTimes.isNightTimeIn(UTC_M930));
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
  expect(MyTimes.isDayTimeIn(UTC_M330)).toEqual(!MyTimes.isNightTimeIn(UTC_M330));
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
  expect(MyTimes.isDayTimeIn(UTC_P330)).toEqual(!MyTimes.isNightTimeIn(UTC_P330));
  expect(MyTimes.isDayTimeIn(UTC_P4)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_P4)).toEqual(!MyTimes.isNightTimeIn(UTC_P4));
  expect(MyTimes.isDayTimeIn(UTC_P430)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_P430)).toEqual(!MyTimes.isNightTimeIn(UTC_P430));
  expect(MyTimes.isDayTimeIn(UTC_P5)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_P5)).toEqual(!MyTimes.isNightTimeIn(UTC_P5));
  expect(MyTimes.isDayTimeIn(UTC_P530)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_P530)).toEqual(!MyTimes.isNightTimeIn(UTC_P530));
  expect(MyTimes.isDayTimeIn(UTC_P545)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_P545)).toEqual(!MyTimes.isNightTimeIn(UTC_P545));
  expect(MyTimes.isDayTimeIn(UTC_P6)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P6)).toEqual(!MyTimes.isNightTimeIn(UTC_P6));
  expect(MyTimes.isDayTimeIn(UTC_P630)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P630)).toEqual(!MyTimes.isNightTimeIn(UTC_P630));
  expect(MyTimes.isDayTimeIn(UTC_P7)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P7)).toEqual(!MyTimes.isNightTimeIn(UTC_P7));
  expect(MyTimes.isDayTimeIn(UTC_P8)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P8)).toEqual(!MyTimes.isNightTimeIn(UTC_P8));
  expect(MyTimes.isDayTimeIn(UTC_P9)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P9)).toEqual(!MyTimes.isNightTimeIn(UTC_P9));
  expect(MyTimes.isDayTimeIn(UTC_P930)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P930)).toEqual(!MyTimes.isNightTimeIn(UTC_P930));
  expect(MyTimes.isDayTimeIn(UTC_P10)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P10)).toEqual(!MyTimes.isNightTimeIn(UTC_P10));
  expect(MyTimes.isDayTimeIn(UTC_P1030)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P1030)).toEqual(!MyTimes.isNightTimeIn(UTC_P1030));
  expect(MyTimes.isDayTimeIn(UTC_P12)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P12)).toEqual(!MyTimes.isNightTimeIn(UTC_P12));
  expect(MyTimes.isDayTimeIn(UTC_P1245)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P1245)).toEqual(!MyTimes.isNightTimeIn(UTC_P1245));
  expect(MyTimes.isDayTimeIn(UTC_P13)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P13)).toEqual(!MyTimes.isNightTimeIn(UTC_P13));
  jest.setSystemTime(new Date(DATE_2001));
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(!MyTimes.isNightTimeIn(UTC_M11));
  expect(MyTimes.isDayTimeIn(UTC_M10)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_M10)).toEqual(!MyTimes.isNightTimeIn(UTC_M10));
  expect(MyTimes.isDayTimeIn(UTC_M930)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_M930)).toEqual(!MyTimes.isNightTimeIn(UTC_M930));
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
  expect(MyTimes.isDayTimeIn(UTC_M330)).toEqual(!MyTimes.isNightTimeIn(UTC_M330));
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
  expect(MyTimes.isDayTimeIn(UTC_P330)).toEqual(!MyTimes.isNightTimeIn(UTC_P330));
  expect(MyTimes.isDayTimeIn(UTC_P4)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_P4)).toEqual(!MyTimes.isNightTimeIn(UTC_P4));
  expect(MyTimes.isDayTimeIn(UTC_P430)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_P430)).toEqual(!MyTimes.isNightTimeIn(UTC_P430));
  expect(MyTimes.isDayTimeIn(UTC_P5)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P5)).toEqual(!MyTimes.isNightTimeIn(UTC_P5));
  expect(MyTimes.isDayTimeIn(UTC_P530)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P530)).toEqual(!MyTimes.isNightTimeIn(UTC_P530));
  expect(MyTimes.isDayTimeIn(UTC_P545)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P545)).toEqual(!MyTimes.isNightTimeIn(UTC_P545));
  expect(MyTimes.isDayTimeIn(UTC_P6)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P6)).toEqual(!MyTimes.isNightTimeIn(UTC_P6));
  expect(MyTimes.isDayTimeIn(UTC_P630)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P630)).toEqual(!MyTimes.isNightTimeIn(UTC_P630));
  expect(MyTimes.isDayTimeIn(UTC_P7)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P7)).toEqual(!MyTimes.isNightTimeIn(UTC_P7));
  expect(MyTimes.isDayTimeIn(UTC_P8)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P8)).toEqual(!MyTimes.isNightTimeIn(UTC_P8));
  expect(MyTimes.isDayTimeIn(UTC_P9)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P9)).toEqual(!MyTimes.isNightTimeIn(UTC_P9));
  expect(MyTimes.isDayTimeIn(UTC_P930)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P930)).toEqual(!MyTimes.isNightTimeIn(UTC_P930));
  expect(MyTimes.isDayTimeIn(UTC_P10)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P10)).toEqual(!MyTimes.isNightTimeIn(UTC_P10));
  expect(MyTimes.isDayTimeIn(UTC_P1030)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P1030)).toEqual(!MyTimes.isNightTimeIn(UTC_P1030));
  expect(MyTimes.isDayTimeIn(UTC_P12)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P12)).toEqual(!MyTimes.isNightTimeIn(UTC_P12));
  expect(MyTimes.isDayTimeIn(UTC_P1245)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P1245)).toEqual(!MyTimes.isNightTimeIn(UTC_P1245));
  expect(MyTimes.isDayTimeIn(UTC_P13)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P13)).toEqual(!MyTimes.isNightTimeIn(UTC_P13));
  jest.setSystemTime(new Date(DATE_2002));
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(!MyTimes.isNightTimeIn(UTC_M11));
  expect(MyTimes.isDayTimeIn(UTC_M10)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_M10)).toEqual(!MyTimes.isNightTimeIn(UTC_M10));
  expect(MyTimes.isDayTimeIn(UTC_M930)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_M930)).toEqual(!MyTimes.isNightTimeIn(UTC_M930));
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
  expect(MyTimes.isDayTimeIn(UTC_M330)).toEqual(!MyTimes.isNightTimeIn(UTC_M330));
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
  expect(MyTimes.isDayTimeIn(UTC_P330)).toEqual(!MyTimes.isNightTimeIn(UTC_P330));
  expect(MyTimes.isDayTimeIn(UTC_P4)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P4)).toEqual(!MyTimes.isNightTimeIn(UTC_P4));
  expect(MyTimes.isDayTimeIn(UTC_P430)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P430)).toEqual(!MyTimes.isNightTimeIn(UTC_P430));
  expect(MyTimes.isDayTimeIn(UTC_P5)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P5)).toEqual(!MyTimes.isNightTimeIn(UTC_P5));
  expect(MyTimes.isDayTimeIn(UTC_P530)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P530)).toEqual(!MyTimes.isNightTimeIn(UTC_P530));
  expect(MyTimes.isDayTimeIn(UTC_P545)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P545)).toEqual(!MyTimes.isNightTimeIn(UTC_P545));
  expect(MyTimes.isDayTimeIn(UTC_P6)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P6)).toEqual(!MyTimes.isNightTimeIn(UTC_P6));
  expect(MyTimes.isDayTimeIn(UTC_P630)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P630)).toEqual(!MyTimes.isNightTimeIn(UTC_P630));
  expect(MyTimes.isDayTimeIn(UTC_P7)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P7)).toEqual(!MyTimes.isNightTimeIn(UTC_P7));
  expect(MyTimes.isDayTimeIn(UTC_P8)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P8)).toEqual(!MyTimes.isNightTimeIn(UTC_P8));
  expect(MyTimes.isDayTimeIn(UTC_P9)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P9)).toEqual(!MyTimes.isNightTimeIn(UTC_P9));
  expect(MyTimes.isDayTimeIn(UTC_P930)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P930)).toEqual(!MyTimes.isNightTimeIn(UTC_P930));
  expect(MyTimes.isDayTimeIn(UTC_P10)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P10)).toEqual(!MyTimes.isNightTimeIn(UTC_P10));
  expect(MyTimes.isDayTimeIn(UTC_P1030)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P1030)).toEqual(!MyTimes.isNightTimeIn(UTC_P1030));
  expect(MyTimes.isDayTimeIn(UTC_P12)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P12)).toEqual(!MyTimes.isNightTimeIn(UTC_P12));
  expect(MyTimes.isDayTimeIn(UTC_P1245)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P1245)).toEqual(!MyTimes.isNightTimeIn(UTC_P1245));
  expect(MyTimes.isDayTimeIn(UTC_P13)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_P13)).toEqual(!MyTimes.isNightTimeIn(UTC_P13));
  jest.setSystemTime(new Date(DATE_2003));
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(!MyTimes.isNightTimeIn(UTC_M11));
  jest.setSystemTime(new Date(DATE_2004));
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(!MyTimes.isNightTimeIn(UTC_M11));
  jest.setSystemTime(new Date(DATE_2005));
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(!MyTimes.isNightTimeIn(UTC_M11));
  jest.setSystemTime(new Date(DATE_2006));
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(!MyTimes.isNightTimeIn(UTC_M11));
  jest.setSystemTime(new Date(DATE_2007));
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(!MyTimes.isNightTimeIn(UTC_M11));
  jest.setSystemTime(new Date(DATE_2008));
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(!MyTimes.isNightTimeIn(UTC_M11));
  jest.setSystemTime(new Date(DATE_2009));
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(!MyTimes.isNightTimeIn(UTC_M11));
  jest.setSystemTime(new Date(DATE_2010));
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(!MyTimes.isNightTimeIn(UTC_M11));
  jest.setSystemTime(new Date(DATE_2011));
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(!MyTimes.isNightTimeIn(UTC_M11));
  jest.setSystemTime(new Date(DATE_2012));
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(!MyTimes.isNightTimeIn(UTC_M11));
  jest.setSystemTime(new Date(DATE_2013));
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(!MyTimes.isNightTimeIn(UTC_M11));
  jest.setSystemTime(new Date(DATE_2014));
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(!MyTimes.isNightTimeIn(UTC_M11));
  jest.setSystemTime(new Date(DATE_2015));
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(!MyTimes.isNightTimeIn(UTC_M11));
  jest.setSystemTime(new Date(DATE_2016));
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(false);
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(!MyTimes.isNightTimeIn(UTC_M11));
  jest.setSystemTime(new Date(DATE_2017));
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(!MyTimes.isNightTimeIn(UTC_M11));
  jest.setSystemTime(new Date(DATE_2018));
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(!MyTimes.isNightTimeIn(UTC_M11));
  jest.setSystemTime(new Date(DATE_2019));
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(!MyTimes.isNightTimeIn(UTC_M11));
  jest.setSystemTime(new Date(DATE_2020));
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(!MyTimes.isNightTimeIn(UTC_M11));
  jest.setSystemTime(new Date(DATE_2021));
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(!MyTimes.isNightTimeIn(UTC_M11));
  jest.setSystemTime(new Date(DATE_2022));
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(!MyTimes.isNightTimeIn(UTC_M11));
  jest.setSystemTime(new Date(DATE_2023));
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(!MyTimes.isNightTimeIn(UTC_M11));
  jest.setSystemTime(new Date(DATE_2024));
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(true);
  expect(MyTimes.isDayTimeIn(UTC_M11)).toEqual(!MyTimes.isNightTimeIn(UTC_M11));
});

test("night time", () => {
  jest.setSystemTime(new Date(DATE_1999));
  expect(MyTimes.isNightTime()).toEqual(true);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATE_2000));
  expect(MyTimes.isNightTime()).toEqual(true);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATE_2001));
  expect(MyTimes.isNightTime()).toEqual(true);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATE_2002));
  expect(MyTimes.isNightTime()).toEqual(true);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATE_2003));
  expect(MyTimes.isNightTime()).toEqual(true);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATE_2004));
  expect(MyTimes.isNightTime()).toEqual(true);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATE_2005));
  expect(MyTimes.isNightTime()).toEqual(true);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATE_2006));
  expect(MyTimes.isNightTime()).toEqual(false);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATE_2007));
  expect(MyTimes.isNightTime()).toEqual(false);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATE_2008));
  expect(MyTimes.isNightTime()).toEqual(false);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATE_2009));
  expect(MyTimes.isNightTime()).toEqual(false);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATE_2010));
  expect(MyTimes.isNightTime()).toEqual(false);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATE_2011));
  expect(MyTimes.isNightTime()).toEqual(false);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATE_2012));
  expect(MyTimes.isNightTime()).toEqual(false);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATE_2013));
  expect(MyTimes.isNightTime()).toEqual(false);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATE_2014));
  expect(MyTimes.isNightTime()).toEqual(false);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATE_2015));
  expect(MyTimes.isNightTime()).toEqual(false);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATE_2016));
  expect(MyTimes.isNightTime()).toEqual(false);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATE_2017));
  expect(MyTimes.isNightTime()).toEqual(false);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATE_2018));
  expect(MyTimes.isNightTime()).toEqual(true);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATE_2019));
  expect(MyTimes.isNightTime()).toEqual(true);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATE_2020));
  expect(MyTimes.isNightTime()).toEqual(true);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATE_2021));
  expect(MyTimes.isNightTime()).toEqual(true);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATE_2022));
  expect(MyTimes.isNightTime()).toEqual(true);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATE_2023));
  expect(MyTimes.isNightTime()).toEqual(true);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
  jest.setSystemTime(new Date(DATE_2024));
  expect(MyTimes.isNightTime()).toEqual(true);
  expect(MyTimes.isNightTime()).toEqual(!MyTimes.isDayTime());
});

test("night", () => {
  jest.setSystemTime(new Date(DATE_1999));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2000));
  expect(MyTimes.isNight()).toEqual(true);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2001));
  expect(MyTimes.isNight()).toEqual(true);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2002));
  expect(MyTimes.isNight()).toEqual(true);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2003));
  expect(MyTimes.isNight()).toEqual(true);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2004));
  expect(MyTimes.isNight()).toEqual(true);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2005));
  expect(MyTimes.isNight()).toEqual(true);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2006));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2007));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2008));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2009));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2010));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2011));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2012));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2013));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2014));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2015));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2016));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2017));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2018));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2019));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2020));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2021));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2022));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2023));
  expect(MyTimes.isNight()).toEqual(false);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2024));
  expect(MyTimes.isNight()).toEqual(true);
  expect(MyTimes.isNight()).toEqual(
    !MyTimes.isMorning() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
});

test("morning", () => {
  jest.setSystemTime(new Date(DATE_1999));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2000));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2001));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2002));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2003));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2004));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2005));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2006));
  expect(MyTimes.isMorning()).toEqual(true);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2007));
  expect(MyTimes.isMorning()).toEqual(true);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2008));
  expect(MyTimes.isMorning()).toEqual(true);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2009));
  expect(MyTimes.isMorning()).toEqual(true);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2010));
  expect(MyTimes.isMorning()).toEqual(true);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2011));
  expect(MyTimes.isMorning()).toEqual(true);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2012));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2013));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2014));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2015));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2016));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2017));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2018));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2019));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2020));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2021));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2022));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2023));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2024));
  expect(MyTimes.isMorning()).toEqual(false);
  expect(MyTimes.isMorning()).toEqual(
    !MyTimes.isNight() && !MyTimes.isAfternoon() && !MyTimes.isEvening()
  );
});

test("afternoon", () => {
  jest.setSystemTime(new Date(DATE_1999));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2000));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2001));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2002));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2003));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2004));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2005));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2006));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2007));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2008));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2009));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2010));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2011));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2012));
  expect(MyTimes.isAfternoon()).toEqual(true);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2013));
  expect(MyTimes.isAfternoon()).toEqual(true);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2014));
  expect(MyTimes.isAfternoon()).toEqual(true);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2015));
  expect(MyTimes.isAfternoon()).toEqual(true);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2016));
  expect(MyTimes.isAfternoon()).toEqual(true);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2017));
  expect(MyTimes.isAfternoon()).toEqual(true);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2018));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2019));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2020));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2021));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2022));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2023));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
  jest.setSystemTime(new Date(DATE_2024));
  expect(MyTimes.isAfternoon()).toEqual(false);
  expect(MyTimes.isAfternoon()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isEvening()
  );
});

test("evening", () => {
  jest.setSystemTime(new Date(DATE_1999));
  expect(MyTimes.isEvening()).toEqual(true);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATE_2000));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATE_2001));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATE_2002));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATE_2003));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATE_2004));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATE_2005));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATE_2006));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATE_2007));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATE_2008));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATE_2009));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATE_2010));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATE_2011));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATE_2012));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATE_2013));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATE_2014));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATE_2015));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATE_2016));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATE_2017));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATE_2018));
  expect(MyTimes.isEvening()).toEqual(true);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATE_2019));
  expect(MyTimes.isEvening()).toEqual(true);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATE_2020));
  expect(MyTimes.isEvening()).toEqual(true);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATE_2021));
  expect(MyTimes.isEvening()).toEqual(true);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATE_2022));
  expect(MyTimes.isEvening()).toEqual(true);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATE_2023));
  expect(MyTimes.isEvening()).toEqual(true);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
  jest.setSystemTime(new Date(DATE_2024));
  expect(MyTimes.isEvening()).toEqual(false);
  expect(MyTimes.isEvening()).toEqual(
    !MyTimes.isNight() && !MyTimes.isMorning() && !MyTimes.isAfternoon()
  );
});

test("business hours", () => {
  jest.setSystemTime(new Date(DATE_1999));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date(DATE_2000));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date(DATE_2001));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date(DATE_2002));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date(DATE_2003));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date(DATE_2004));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date(DATE_2005));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date(DATE_2006));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date(DATE_2007));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date(DATE_2008));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date(DATE_2009));
  expect(MyTimes.isBusinessHours()).toEqual(true);
  jest.setSystemTime(new Date(DATE_2010));
  expect(MyTimes.isBusinessHours()).toEqual(true);
  jest.setSystemTime(new Date(DATE_2011));
  expect(MyTimes.isBusinessHours()).toEqual(true);
  jest.setSystemTime(new Date(DATE_2012));
  expect(MyTimes.isBusinessHours()).toEqual(true);
  jest.setSystemTime(new Date(DATE_2013));
  expect(MyTimes.isBusinessHours()).toEqual(true);
  jest.setSystemTime(new Date(DATE_2014));
  expect(MyTimes.isBusinessHours()).toEqual(true);
  jest.setSystemTime(new Date(DATE_2015));
  expect(MyTimes.isBusinessHours()).toEqual(true);
  jest.setSystemTime(new Date(DATE_2016));
  expect(MyTimes.isBusinessHours()).toEqual(true);
  jest.setSystemTime(new Date(DATE_2017));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date(DATE_2018));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date(DATE_2019));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date(DATE_2020));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date(DATE_2021));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date(DATE_2022));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date(DATE_2023));
  expect(MyTimes.isBusinessHours()).toEqual(false);
  jest.setSystemTime(new Date(DATE_2024));
  expect(MyTimes.isBusinessHours()).toEqual(false);
});

test("day shift", () => {
  jest.setSystemTime(new Date(DATE_1999));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2000));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2001));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2002));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2003));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2004));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2005));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2006));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2007));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2008));
  expect(MyTimes.isDayShift()).toEqual(true);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2009));
  expect(MyTimes.isDayShift()).toEqual(true);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2010));
  expect(MyTimes.isDayShift()).toEqual(true);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2011));
  expect(MyTimes.isDayShift()).toEqual(true);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2012));
  expect(MyTimes.isDayShift()).toEqual(true);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2013));
  expect(MyTimes.isDayShift()).toEqual(true);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2014));
  expect(MyTimes.isDayShift()).toEqual(true);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2015));
  expect(MyTimes.isDayShift()).toEqual(true);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2016));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2017));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2018));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2019));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2020));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2021));
  jest.setSystemTime(new Date(DATE_2022));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2023));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2024));
  expect(MyTimes.isDayShift()).toEqual(false);
  expect(MyTimes.isDayShift()).toEqual(
    !MyTimes.isEveningShift() && !MyTimes.isNightShift()
  );
});

test("evening shift", () => {
  jest.setSystemTime(new Date(DATE_1999));
  expect(MyTimes.isEveningShift()).toEqual(true);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2000));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2001));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2002));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2003));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2004));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2005));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2006));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2007));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2008));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2009));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2010));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2011));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2012));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2013));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2014));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2015));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2016));
  expect(MyTimes.isEveningShift()).toEqual(true);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2017));
  expect(MyTimes.isEveningShift()).toEqual(true);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2018));
  expect(MyTimes.isEveningShift()).toEqual(true);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2019));
  expect(MyTimes.isEveningShift()).toEqual(true);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2020));
  expect(MyTimes.isEveningShift()).toEqual(true);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2021));
  expect(MyTimes.isEveningShift()).toEqual(true);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2022));
  expect(MyTimes.isEveningShift()).toEqual(true);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2023));
  expect(MyTimes.isEveningShift()).toEqual(true);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2024));
  expect(MyTimes.isEveningShift()).toEqual(false);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
});

test("night shift", () => {
  jest.setSystemTime(new Date(DATE_1999));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATE_2000));
  expect(MyTimes.isNightShift()).toEqual(true);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATE_2001));
  expect(MyTimes.isNightShift()).toEqual(true);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATE_2002));
  expect(MyTimes.isNightShift()).toEqual(true);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATE_2003));
  expect(MyTimes.isNightShift()).toEqual(true);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATE_2004));
  expect(MyTimes.isNightShift()).toEqual(true);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATE_2005));
  expect(MyTimes.isNightShift()).toEqual(true);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATE_2006));
  expect(MyTimes.isNightShift()).toEqual(true);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATE_2007));
  expect(MyTimes.isNightShift()).toEqual(true);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATE_2008));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATE_2009));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATE_2010));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATE_2011));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATE_2012));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATE_2013));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATE_2014));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATE_2015));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATE_2016));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATE_2017));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATE_2018));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATE_2019));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATE_2020));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATE_2021));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATE_2022));
  expect(MyTimes.isEveningShift()).toEqual(true);
  expect(MyTimes.isEveningShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isNightShift()
  );
  jest.setSystemTime(new Date(DATE_2023));
  expect(MyTimes.isNightShift()).toEqual(false);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
  jest.setSystemTime(new Date(DATE_2024));
  expect(MyTimes.isNightShift()).toEqual(true);
  expect(MyTimes.isNightShift()).toEqual(
    !MyTimes.isDayShift() && !MyTimes.isEveningShift()
  );
});
