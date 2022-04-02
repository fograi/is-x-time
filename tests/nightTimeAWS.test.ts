import * as MyTimes from "../src/index";
import * as AWS from "./constants/AWS";
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
