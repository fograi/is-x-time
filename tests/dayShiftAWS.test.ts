import {
  isDayShiftInAWS,
  isEveningShiftInAWS,
  isNightShiftInAWS,
} from "../src/index";
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

test("afternoon in AWS 1999_12_31_23_59", () => {
  jest.setSystemTime(new Date(DATES.DATE_1999_12_31_23_59));
  expect(isDayShiftInAWS(AWS.AWS_US_E_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_US_E_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_E_2) && !isNightShiftInAWS(AWS.AWS_US_E_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_US_E_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_US_E_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_E_1) && !isNightShiftInAWS(AWS.AWS_US_E_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_US_W_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_US_W_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_W_1) && !isNightShiftInAWS(AWS.AWS_US_W_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_US_W_2)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_US_W_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_W_2) && !isNightShiftInAWS(AWS.AWS_US_W_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_AF_S_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AF_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AF_S_1) && !isNightShiftInAWS(AWS.AWS_AF_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_E_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_E_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_E_1) && !isNightShiftInAWS(AWS.AWS_AP_E_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_3)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_3)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_SE_3) && !isNightShiftInAWS(AWS.AWS_AP_SE_3)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_S_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_S_1) && !isNightShiftInAWS(AWS.AWS_AP_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_3)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_3)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_NE_3) && !isNightShiftInAWS(AWS.AWS_AP_NE_3)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_2)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_NE_2) && !isNightShiftInAWS(AWS.AWS_AP_NE_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_SE_1) && !isNightShiftInAWS(AWS.AWS_AP_SE_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_2)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_SE_2) && !isNightShiftInAWS(AWS.AWS_AP_SE_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_NE_1) && !isNightShiftInAWS(AWS.AWS_AP_NE_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_CA_C_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_CA_C_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_CA_C_1) && !isNightShiftInAWS(AWS.AWS_CA_C_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_CN_N_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_CN_N_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_CN_N_1) && !isNightShiftInAWS(AWS.AWS_CN_N_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_CN_NW_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_CN_NW_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_CN_NW_1) && !isNightShiftInAWS(AWS.AWS_CN_NW_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_C_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_C_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_C_1) && !isNightShiftInAWS(AWS.AWS_EU_C_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_W_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_W_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_W_1) && !isNightShiftInAWS(AWS.AWS_EU_W_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_W_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_W_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_W_2) && !isNightShiftInAWS(AWS.AWS_EU_W_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_S_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_S_1) && !isNightShiftInAWS(AWS.AWS_EU_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_W_3)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_W_3)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_W_3) && !isNightShiftInAWS(AWS.AWS_EU_W_3)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_N_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_N_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_N_1) && !isNightShiftInAWS(AWS.AWS_EU_N_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_ME_S_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_ME_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_ME_S_1) && !isNightShiftInAWS(AWS.AWS_ME_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_SA_E_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_SA_E_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_SA_E_1) && !isNightShiftInAWS(AWS.AWS_SA_E_1)
  );
});

test("afternoon in AWS 2000_01_01_00_00", () => {
  jest.setSystemTime(new Date(DATES.DATE_2000_01_01_00_00));
  expect(isDayShiftInAWS(AWS.AWS_US_E_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_US_E_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_E_2) && !isNightShiftInAWS(AWS.AWS_US_E_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_US_E_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_US_E_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_E_1) && !isNightShiftInAWS(AWS.AWS_US_E_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_US_W_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_US_W_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_W_1) && !isNightShiftInAWS(AWS.AWS_US_W_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_US_W_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_US_W_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_W_2) && !isNightShiftInAWS(AWS.AWS_US_W_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_AF_S_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AF_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AF_S_1) && !isNightShiftInAWS(AWS.AWS_AF_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_E_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AP_E_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_E_1) && !isNightShiftInAWS(AWS.AWS_AP_E_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_3)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_3)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_SE_3) && !isNightShiftInAWS(AWS.AWS_AP_SE_3)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_S_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_S_1) && !isNightShiftInAWS(AWS.AWS_AP_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_3)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_3)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_NE_3) && !isNightShiftInAWS(AWS.AWS_AP_NE_3)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_2)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_NE_2) && !isNightShiftInAWS(AWS.AWS_AP_NE_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_SE_1) && !isNightShiftInAWS(AWS.AWS_AP_SE_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_2)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_SE_2) && !isNightShiftInAWS(AWS.AWS_AP_SE_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_NE_1) && !isNightShiftInAWS(AWS.AWS_AP_NE_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_CA_C_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_CA_C_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_CA_C_1) && !isNightShiftInAWS(AWS.AWS_CA_C_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_CN_N_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_CN_N_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_CN_N_1) && !isNightShiftInAWS(AWS.AWS_CN_N_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_CN_NW_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_CN_NW_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_CN_NW_1) && !isNightShiftInAWS(AWS.AWS_CN_NW_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_C_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_C_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_C_1) && !isNightShiftInAWS(AWS.AWS_EU_C_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_W_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_W_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_W_1) && !isNightShiftInAWS(AWS.AWS_EU_W_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_W_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_W_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_W_2) && !isNightShiftInAWS(AWS.AWS_EU_W_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_S_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_S_1) && !isNightShiftInAWS(AWS.AWS_EU_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_W_3)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_W_3)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_W_3) && !isNightShiftInAWS(AWS.AWS_EU_W_3)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_N_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_N_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_N_1) && !isNightShiftInAWS(AWS.AWS_EU_N_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_ME_S_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_ME_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_ME_S_1) && !isNightShiftInAWS(AWS.AWS_ME_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_SA_E_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_SA_E_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_SA_E_1) && !isNightShiftInAWS(AWS.AWS_SA_E_1)
  );
});

test("afternoon in AWS 2001_01_01_01_02", () => {
  jest.setSystemTime(new Date(DATES.DATE_2001_01_01_01_02));
  expect(isDayShiftInAWS(AWS.AWS_US_E_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_US_E_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_E_2) && !isNightShiftInAWS(AWS.AWS_US_E_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_US_E_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_US_E_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_E_1) && !isNightShiftInAWS(AWS.AWS_US_E_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_US_W_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_US_W_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_W_1) && !isNightShiftInAWS(AWS.AWS_US_W_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_US_W_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_US_W_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_W_2) && !isNightShiftInAWS(AWS.AWS_US_W_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_AF_S_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AF_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AF_S_1) && !isNightShiftInAWS(AWS.AWS_AF_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_E_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AP_E_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_E_1) && !isNightShiftInAWS(AWS.AWS_AP_E_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_3)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_3)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_SE_3) && !isNightShiftInAWS(AWS.AWS_AP_SE_3)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_S_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_S_1) && !isNightShiftInAWS(AWS.AWS_AP_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_3)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_3)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_NE_3) && !isNightShiftInAWS(AWS.AWS_AP_NE_3)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_2)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_NE_2) && !isNightShiftInAWS(AWS.AWS_AP_NE_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_SE_1) && !isNightShiftInAWS(AWS.AWS_AP_SE_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_2)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_SE_2) && !isNightShiftInAWS(AWS.AWS_AP_SE_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_NE_1) && !isNightShiftInAWS(AWS.AWS_AP_NE_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_CA_C_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_CA_C_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_CA_C_1) && !isNightShiftInAWS(AWS.AWS_CA_C_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_CN_N_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_CN_N_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_CN_N_1) && !isNightShiftInAWS(AWS.AWS_CN_N_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_CN_NW_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_CN_NW_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_CN_NW_1) && !isNightShiftInAWS(AWS.AWS_CN_NW_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_C_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_C_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_C_1) && !isNightShiftInAWS(AWS.AWS_EU_C_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_W_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_W_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_W_1) && !isNightShiftInAWS(AWS.AWS_EU_W_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_W_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_W_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_W_2) && !isNightShiftInAWS(AWS.AWS_EU_W_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_S_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_S_1) && !isNightShiftInAWS(AWS.AWS_EU_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_W_3)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_W_3)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_W_3) && !isNightShiftInAWS(AWS.AWS_EU_W_3)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_N_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_N_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_N_1) && !isNightShiftInAWS(AWS.AWS_EU_N_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_ME_S_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_ME_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_ME_S_1) && !isNightShiftInAWS(AWS.AWS_ME_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_SA_E_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_SA_E_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_SA_E_1) && !isNightShiftInAWS(AWS.AWS_SA_E_1)
  );
});

test("afternoon in AWS 2002_02_02_02_04", () => {
  jest.setSystemTime(new Date(DATES.DATE_2002_02_02_02_04));
  expect(isDayShiftInAWS(AWS.AWS_US_E_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_US_E_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_E_2) && !isNightShiftInAWS(AWS.AWS_US_E_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_US_E_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_US_E_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_E_1) && !isNightShiftInAWS(AWS.AWS_US_E_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_US_W_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_US_W_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_W_1) && !isNightShiftInAWS(AWS.AWS_US_W_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_US_W_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_US_W_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_W_2) && !isNightShiftInAWS(AWS.AWS_US_W_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_AF_S_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AF_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AF_S_1) && !isNightShiftInAWS(AWS.AWS_AF_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_E_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AP_E_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_E_1) && !isNightShiftInAWS(AWS.AWS_AP_E_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_3)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_3)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_SE_3) && !isNightShiftInAWS(AWS.AWS_AP_SE_3)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_S_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_S_1) && !isNightShiftInAWS(AWS.AWS_AP_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_3)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_3)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_NE_3) && !isNightShiftInAWS(AWS.AWS_AP_NE_3)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_2)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_NE_2) && !isNightShiftInAWS(AWS.AWS_AP_NE_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_SE_1) && !isNightShiftInAWS(AWS.AWS_AP_SE_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_2)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_SE_2) && !isNightShiftInAWS(AWS.AWS_AP_SE_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_NE_1) && !isNightShiftInAWS(AWS.AWS_AP_NE_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_CA_C_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_CA_C_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_CA_C_1) && !isNightShiftInAWS(AWS.AWS_CA_C_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_CN_N_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_CN_N_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_CN_N_1) && !isNightShiftInAWS(AWS.AWS_CN_N_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_CN_NW_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_CN_NW_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_CN_NW_1) && !isNightShiftInAWS(AWS.AWS_CN_NW_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_C_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_C_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_C_1) && !isNightShiftInAWS(AWS.AWS_EU_C_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_W_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_W_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_W_1) && !isNightShiftInAWS(AWS.AWS_EU_W_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_W_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_W_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_W_2) && !isNightShiftInAWS(AWS.AWS_EU_W_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_S_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_S_1) && !isNightShiftInAWS(AWS.AWS_EU_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_W_3)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_W_3)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_W_3) && !isNightShiftInAWS(AWS.AWS_EU_W_3)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_N_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_N_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_N_1) && !isNightShiftInAWS(AWS.AWS_EU_N_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_ME_S_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_ME_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_ME_S_1) && !isNightShiftInAWS(AWS.AWS_ME_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_SA_E_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_SA_E_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_SA_E_1) && !isNightShiftInAWS(AWS.AWS_SA_E_1)
  );
});

test("afternoon in AWS 2003_03_03_03_06", () => {
  jest.setSystemTime(new Date(DATES.DATE_2003_03_03_03_06));
  expect(isDayShiftInAWS(AWS.AWS_US_E_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_US_E_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_E_2) && !isNightShiftInAWS(AWS.AWS_US_E_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_US_E_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_US_E_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_E_1) && !isNightShiftInAWS(AWS.AWS_US_E_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_US_W_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_US_W_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_W_1) && !isNightShiftInAWS(AWS.AWS_US_W_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_US_W_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_US_W_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_W_2) && !isNightShiftInAWS(AWS.AWS_US_W_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_AF_S_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AF_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AF_S_1) && !isNightShiftInAWS(AWS.AWS_AF_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_E_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AP_E_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_E_1) && !isNightShiftInAWS(AWS.AWS_AP_E_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_3)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_3)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_SE_3) && !isNightShiftInAWS(AWS.AWS_AP_SE_3)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_S_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AP_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_S_1) && !isNightShiftInAWS(AWS.AWS_AP_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_3)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_3)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_NE_3) && !isNightShiftInAWS(AWS.AWS_AP_NE_3)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_2)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_NE_2) && !isNightShiftInAWS(AWS.AWS_AP_NE_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_SE_1) && !isNightShiftInAWS(AWS.AWS_AP_SE_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_2)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_SE_2) && !isNightShiftInAWS(AWS.AWS_AP_SE_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_NE_1) && !isNightShiftInAWS(AWS.AWS_AP_NE_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_CA_C_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_CA_C_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_CA_C_1) && !isNightShiftInAWS(AWS.AWS_CA_C_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_CN_N_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_CN_N_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_CN_N_1) && !isNightShiftInAWS(AWS.AWS_CN_N_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_CN_NW_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_CN_NW_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_CN_NW_1) && !isNightShiftInAWS(AWS.AWS_CN_NW_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_C_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_C_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_C_1) && !isNightShiftInAWS(AWS.AWS_EU_C_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_W_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_W_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_W_1) && !isNightShiftInAWS(AWS.AWS_EU_W_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_W_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_W_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_W_2) && !isNightShiftInAWS(AWS.AWS_EU_W_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_S_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_S_1) && !isNightShiftInAWS(AWS.AWS_EU_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_W_3)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_W_3)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_W_3) && !isNightShiftInAWS(AWS.AWS_EU_W_3)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_N_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_N_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_N_1) && !isNightShiftInAWS(AWS.AWS_EU_N_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_ME_S_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_ME_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_ME_S_1) && !isNightShiftInAWS(AWS.AWS_ME_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_SA_E_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_SA_E_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_SA_E_1) && !isNightShiftInAWS(AWS.AWS_SA_E_1)
  );
});

test("afternoon in AWS 2004_04_04_04_08", () => {
  jest.setSystemTime(new Date(DATES.DATE_2004_04_04_04_08));
  expect(isDayShiftInAWS(AWS.AWS_US_E_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_US_E_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_E_2) && !isNightShiftInAWS(AWS.AWS_US_E_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_US_E_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_US_E_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_E_1) && !isNightShiftInAWS(AWS.AWS_US_E_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_US_W_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_US_W_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_W_1) && !isNightShiftInAWS(AWS.AWS_US_W_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_US_W_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_US_W_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_W_2) && !isNightShiftInAWS(AWS.AWS_US_W_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_AF_S_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AF_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AF_S_1) && !isNightShiftInAWS(AWS.AWS_AF_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_E_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AP_E_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_E_1) && !isNightShiftInAWS(AWS.AWS_AP_E_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_3)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_3)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_SE_3) && !isNightShiftInAWS(AWS.AWS_AP_SE_3)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_S_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AP_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_S_1) && !isNightShiftInAWS(AWS.AWS_AP_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_3)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_3)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_NE_3) && !isNightShiftInAWS(AWS.AWS_AP_NE_3)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_2)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_NE_2) && !isNightShiftInAWS(AWS.AWS_AP_NE_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_SE_1) && !isNightShiftInAWS(AWS.AWS_AP_SE_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_2)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_SE_2) && !isNightShiftInAWS(AWS.AWS_AP_SE_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_NE_1) && !isNightShiftInAWS(AWS.AWS_AP_NE_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_CA_C_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_CA_C_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_CA_C_1) && !isNightShiftInAWS(AWS.AWS_CA_C_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_CN_N_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_CN_N_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_CN_N_1) && !isNightShiftInAWS(AWS.AWS_CN_N_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_CN_NW_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_CN_NW_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_CN_NW_1) && !isNightShiftInAWS(AWS.AWS_CN_NW_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_C_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_C_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_C_1) && !isNightShiftInAWS(AWS.AWS_EU_C_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_W_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_W_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_W_1) && !isNightShiftInAWS(AWS.AWS_EU_W_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_W_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_W_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_W_2) && !isNightShiftInAWS(AWS.AWS_EU_W_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_S_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_S_1) && !isNightShiftInAWS(AWS.AWS_EU_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_W_3)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_W_3)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_W_3) && !isNightShiftInAWS(AWS.AWS_EU_W_3)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_N_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_N_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_N_1) && !isNightShiftInAWS(AWS.AWS_EU_N_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_ME_S_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_ME_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_ME_S_1) && !isNightShiftInAWS(AWS.AWS_ME_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_SA_E_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_SA_E_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_SA_E_1) && !isNightShiftInAWS(AWS.AWS_SA_E_1)
  );
});

test("afternoon in AWS 2005_05_05_05_10", () => {
  jest.setSystemTime(new Date(DATES.DATE_2005_05_05_05_10));
  expect(isDayShiftInAWS(AWS.AWS_US_E_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_US_E_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_E_2) && !isNightShiftInAWS(AWS.AWS_US_E_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_US_E_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_US_E_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_E_1) && !isNightShiftInAWS(AWS.AWS_US_E_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_US_W_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_US_W_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_W_1) && !isNightShiftInAWS(AWS.AWS_US_W_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_US_W_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_US_W_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_W_2) && !isNightShiftInAWS(AWS.AWS_US_W_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_AF_S_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AF_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AF_S_1) && !isNightShiftInAWS(AWS.AWS_AF_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_E_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AP_E_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_E_1) && !isNightShiftInAWS(AWS.AWS_AP_E_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_3)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_3)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_SE_3) && !isNightShiftInAWS(AWS.AWS_AP_SE_3)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_S_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AP_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_S_1) && !isNightShiftInAWS(AWS.AWS_AP_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_3)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_3)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_NE_3) && !isNightShiftInAWS(AWS.AWS_AP_NE_3)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_2)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_NE_2) && !isNightShiftInAWS(AWS.AWS_AP_NE_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_SE_1) && !isNightShiftInAWS(AWS.AWS_AP_SE_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_2)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_SE_2) && !isNightShiftInAWS(AWS.AWS_AP_SE_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_NE_1) && !isNightShiftInAWS(AWS.AWS_AP_NE_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_CA_C_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_CA_C_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_CA_C_1) && !isNightShiftInAWS(AWS.AWS_CA_C_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_CN_N_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_CN_N_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_CN_N_1) && !isNightShiftInAWS(AWS.AWS_CN_N_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_CN_NW_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_CN_NW_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_CN_NW_1) && !isNightShiftInAWS(AWS.AWS_CN_NW_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_C_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_C_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_C_1) && !isNightShiftInAWS(AWS.AWS_EU_C_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_W_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_W_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_W_1) && !isNightShiftInAWS(AWS.AWS_EU_W_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_W_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_W_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_W_2) && !isNightShiftInAWS(AWS.AWS_EU_W_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_S_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_S_1) && !isNightShiftInAWS(AWS.AWS_EU_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_W_3)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_W_3)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_W_3) && !isNightShiftInAWS(AWS.AWS_EU_W_3)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_N_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_N_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_N_1) && !isNightShiftInAWS(AWS.AWS_EU_N_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_ME_S_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_ME_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_ME_S_1) && !isNightShiftInAWS(AWS.AWS_ME_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_SA_E_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_SA_E_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_SA_E_1) && !isNightShiftInAWS(AWS.AWS_SA_E_1)
  );
});

test("afternoon in AWS 2006_06_06_06_12", () => {
  jest.setSystemTime(new Date(DATES.DATE_2006_06_06_06_12));
  expect(isDayShiftInAWS(AWS.AWS_US_E_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_US_E_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_E_2) && !isNightShiftInAWS(AWS.AWS_US_E_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_US_E_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_US_E_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_E_1) && !isNightShiftInAWS(AWS.AWS_US_E_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_US_W_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_US_W_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_W_1) && !isNightShiftInAWS(AWS.AWS_US_W_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_US_W_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_US_W_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_W_2) && !isNightShiftInAWS(AWS.AWS_US_W_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_AF_S_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AF_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AF_S_1) && !isNightShiftInAWS(AWS.AWS_AF_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_E_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AP_E_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_E_1) && !isNightShiftInAWS(AWS.AWS_AP_E_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_3)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_3)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_SE_3) && !isNightShiftInAWS(AWS.AWS_AP_SE_3)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_S_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AP_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_S_1) && !isNightShiftInAWS(AWS.AWS_AP_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_3)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_3)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_NE_3) && !isNightShiftInAWS(AWS.AWS_AP_NE_3)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_2)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_NE_2) && !isNightShiftInAWS(AWS.AWS_AP_NE_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_SE_1) && !isNightShiftInAWS(AWS.AWS_AP_SE_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_SE_2) && !isNightShiftInAWS(AWS.AWS_AP_SE_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_NE_1) && !isNightShiftInAWS(AWS.AWS_AP_NE_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_CA_C_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_CA_C_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_CA_C_1) && !isNightShiftInAWS(AWS.AWS_CA_C_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_CN_N_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_CN_N_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_CN_N_1) && !isNightShiftInAWS(AWS.AWS_CN_N_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_CN_NW_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_CN_NW_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_CN_NW_1) && !isNightShiftInAWS(AWS.AWS_CN_NW_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_C_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_EU_C_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_C_1) && !isNightShiftInAWS(AWS.AWS_EU_C_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_W_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_W_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_W_1) && !isNightShiftInAWS(AWS.AWS_EU_W_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_W_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_W_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_W_2) && !isNightShiftInAWS(AWS.AWS_EU_W_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_S_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_EU_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_S_1) && !isNightShiftInAWS(AWS.AWS_EU_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_W_3)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_EU_W_3)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_W_3) && !isNightShiftInAWS(AWS.AWS_EU_W_3)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_N_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_EU_N_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_N_1) && !isNightShiftInAWS(AWS.AWS_EU_N_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_ME_S_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_ME_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_ME_S_1) && !isNightShiftInAWS(AWS.AWS_ME_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_SA_E_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_SA_E_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_SA_E_1) && !isNightShiftInAWS(AWS.AWS_SA_E_1)
  );
});

test("afternoon in AWS 2007_07_07_07_14", () => {
  jest.setSystemTime(new Date(DATES.DATE_2007_07_07_07_14));
  expect(isDayShiftInAWS(AWS.AWS_US_E_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_US_E_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_E_2) && !isNightShiftInAWS(AWS.AWS_US_E_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_US_E_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_US_E_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_E_1) && !isNightShiftInAWS(AWS.AWS_US_E_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_US_W_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_US_W_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_W_1) && !isNightShiftInAWS(AWS.AWS_US_W_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_US_W_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_US_W_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_W_2) && !isNightShiftInAWS(AWS.AWS_US_W_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_AF_S_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AF_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AF_S_1) && !isNightShiftInAWS(AWS.AWS_AF_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_E_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AP_E_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_E_1) && !isNightShiftInAWS(AWS.AWS_AP_E_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_3)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_3)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_SE_3) && !isNightShiftInAWS(AWS.AWS_AP_SE_3)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_S_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AP_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_S_1) && !isNightShiftInAWS(AWS.AWS_AP_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_3)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_3)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_NE_3) && !isNightShiftInAWS(AWS.AWS_AP_NE_3)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_NE_2) && !isNightShiftInAWS(AWS.AWS_AP_NE_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_SE_1) && !isNightShiftInAWS(AWS.AWS_AP_SE_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_SE_2) && !isNightShiftInAWS(AWS.AWS_AP_SE_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_NE_1) && !isNightShiftInAWS(AWS.AWS_AP_NE_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_CA_C_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_CA_C_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_CA_C_1) && !isNightShiftInAWS(AWS.AWS_CA_C_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_CN_N_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_CN_N_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_CN_N_1) && !isNightShiftInAWS(AWS.AWS_CN_N_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_CN_NW_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_CN_NW_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_CN_NW_1) && !isNightShiftInAWS(AWS.AWS_CN_NW_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_C_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_EU_C_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_C_1) && !isNightShiftInAWS(AWS.AWS_EU_C_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_W_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_EU_W_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_W_1) && !isNightShiftInAWS(AWS.AWS_EU_W_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_W_2)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_EU_W_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_W_2) && !isNightShiftInAWS(AWS.AWS_EU_W_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_S_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_EU_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_S_1) && !isNightShiftInAWS(AWS.AWS_EU_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_W_3)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_EU_W_3)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_W_3) && !isNightShiftInAWS(AWS.AWS_EU_W_3)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_N_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_EU_N_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_N_1) && !isNightShiftInAWS(AWS.AWS_EU_N_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_ME_S_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_ME_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_ME_S_1) && !isNightShiftInAWS(AWS.AWS_ME_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_SA_E_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_SA_E_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_SA_E_1) && !isNightShiftInAWS(AWS.AWS_SA_E_1)
  );
});

test("afternoon in AWS 2008_08_08_08_16", () => {
  jest.setSystemTime(new Date(DATES.DATE_2008_08_08_08_16));
  expect(isDayShiftInAWS(AWS.AWS_US_E_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_US_E_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_E_2) && !isNightShiftInAWS(AWS.AWS_US_E_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_US_E_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_US_E_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_E_1) && !isNightShiftInAWS(AWS.AWS_US_E_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_US_W_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_US_W_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_W_1) && !isNightShiftInAWS(AWS.AWS_US_W_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_US_W_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_US_W_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_W_2) && !isNightShiftInAWS(AWS.AWS_US_W_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_AF_S_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AF_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AF_S_1) && !isNightShiftInAWS(AWS.AWS_AF_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_E_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_E_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_E_1) && !isNightShiftInAWS(AWS.AWS_AP_E_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_3)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_3)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_SE_3) && !isNightShiftInAWS(AWS.AWS_AP_SE_3)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_S_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AP_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_S_1) && !isNightShiftInAWS(AWS.AWS_AP_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_3)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_3)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_NE_3) && !isNightShiftInAWS(AWS.AWS_AP_NE_3)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_NE_2) && !isNightShiftInAWS(AWS.AWS_AP_NE_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_SE_1) && !isNightShiftInAWS(AWS.AWS_AP_SE_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_SE_2) && !isNightShiftInAWS(AWS.AWS_AP_SE_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_NE_1) && !isNightShiftInAWS(AWS.AWS_AP_NE_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_CA_C_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_CA_C_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_CA_C_1) && !isNightShiftInAWS(AWS.AWS_CA_C_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_CN_N_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_CN_N_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_CN_N_1) && !isNightShiftInAWS(AWS.AWS_CN_N_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_CN_NW_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_CN_NW_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_CN_NW_1) && !isNightShiftInAWS(AWS.AWS_CN_NW_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_C_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_EU_C_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_C_1) && !isNightShiftInAWS(AWS.AWS_EU_C_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_W_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_EU_W_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_W_1) && !isNightShiftInAWS(AWS.AWS_EU_W_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_W_2)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_EU_W_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_W_2) && !isNightShiftInAWS(AWS.AWS_EU_W_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_S_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_EU_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_S_1) && !isNightShiftInAWS(AWS.AWS_EU_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_W_3)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_EU_W_3)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_W_3) && !isNightShiftInAWS(AWS.AWS_EU_W_3)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_N_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_EU_N_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_N_1) && !isNightShiftInAWS(AWS.AWS_EU_N_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_ME_S_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_ME_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_ME_S_1) && !isNightShiftInAWS(AWS.AWS_ME_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_SA_E_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_SA_E_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_SA_E_1) && !isNightShiftInAWS(AWS.AWS_SA_E_1)
  );
});

test("afternoon in AWS 2009_09_09_09_18", () => {
  jest.setSystemTime(new Date(DATES.DATE_2009_09_09_09_18));
  expect(isDayShiftInAWS(AWS.AWS_US_E_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_US_E_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_E_2) && !isNightShiftInAWS(AWS.AWS_US_E_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_US_E_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_US_E_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_E_1) && !isNightShiftInAWS(AWS.AWS_US_E_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_US_W_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_US_W_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_W_1) && !isNightShiftInAWS(AWS.AWS_US_W_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_US_W_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_US_W_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_W_2) && !isNightShiftInAWS(AWS.AWS_US_W_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_AF_S_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AF_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AF_S_1) && !isNightShiftInAWS(AWS.AWS_AF_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_E_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_E_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_E_1) && !isNightShiftInAWS(AWS.AWS_AP_E_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_3)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_3)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_SE_3) && !isNightShiftInAWS(AWS.AWS_AP_SE_3)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_S_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AP_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_S_1) && !isNightShiftInAWS(AWS.AWS_AP_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_3)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_3)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_NE_3) && !isNightShiftInAWS(AWS.AWS_AP_NE_3)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_NE_2) && !isNightShiftInAWS(AWS.AWS_AP_NE_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_SE_1) && !isNightShiftInAWS(AWS.AWS_AP_SE_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_SE_2) && !isNightShiftInAWS(AWS.AWS_AP_SE_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_NE_1) && !isNightShiftInAWS(AWS.AWS_AP_NE_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_CA_C_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_CA_C_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_CA_C_1) && !isNightShiftInAWS(AWS.AWS_CA_C_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_CN_N_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_CN_N_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_CN_N_1) && !isNightShiftInAWS(AWS.AWS_CN_N_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_CN_NW_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_CN_NW_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_CN_NW_1) && !isNightShiftInAWS(AWS.AWS_CN_NW_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_C_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_EU_C_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_C_1) && !isNightShiftInAWS(AWS.AWS_EU_C_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_W_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_EU_W_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_W_1) && !isNightShiftInAWS(AWS.AWS_EU_W_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_W_2)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_EU_W_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_W_2) && !isNightShiftInAWS(AWS.AWS_EU_W_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_S_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_EU_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_S_1) && !isNightShiftInAWS(AWS.AWS_EU_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_W_3)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_EU_W_3)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_W_3) && !isNightShiftInAWS(AWS.AWS_EU_W_3)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_N_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_EU_N_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_N_1) && !isNightShiftInAWS(AWS.AWS_EU_N_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_ME_S_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_ME_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_ME_S_1) && !isNightShiftInAWS(AWS.AWS_ME_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_SA_E_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_SA_E_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_SA_E_1) && !isNightShiftInAWS(AWS.AWS_SA_E_1)
  );
});

test("afternoon in AWS 2010_10_10_10_20", () => {
  jest.setSystemTime(new Date(DATES.DATE_2010_10_10_10_20));
  expect(isDayShiftInAWS(AWS.AWS_US_E_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_US_E_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_E_2) && !isNightShiftInAWS(AWS.AWS_US_E_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_US_E_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_US_E_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_E_1) && !isNightShiftInAWS(AWS.AWS_US_E_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_US_W_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_US_W_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_W_1) && !isNightShiftInAWS(AWS.AWS_US_W_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_US_W_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_US_W_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_W_2) && !isNightShiftInAWS(AWS.AWS_US_W_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_AF_S_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AF_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AF_S_1) && !isNightShiftInAWS(AWS.AWS_AF_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_E_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_E_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_E_1) && !isNightShiftInAWS(AWS.AWS_AP_E_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_3)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_3)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_SE_3) && !isNightShiftInAWS(AWS.AWS_AP_SE_3)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_S_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AP_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_S_1) && !isNightShiftInAWS(AWS.AWS_AP_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_3)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_3)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_NE_3) && !isNightShiftInAWS(AWS.AWS_AP_NE_3)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_NE_2) && !isNightShiftInAWS(AWS.AWS_AP_NE_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_SE_1) && !isNightShiftInAWS(AWS.AWS_AP_SE_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_SE_2) && !isNightShiftInAWS(AWS.AWS_AP_SE_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_NE_1) && !isNightShiftInAWS(AWS.AWS_AP_NE_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_CA_C_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_CA_C_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_CA_C_1) && !isNightShiftInAWS(AWS.AWS_CA_C_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_CN_N_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_CN_N_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_CN_N_1) && !isNightShiftInAWS(AWS.AWS_CN_N_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_CN_NW_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_CN_NW_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_CN_NW_1) && !isNightShiftInAWS(AWS.AWS_CN_NW_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_C_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_EU_C_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_C_1) && !isNightShiftInAWS(AWS.AWS_EU_C_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_W_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_EU_W_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_W_1) && !isNightShiftInAWS(AWS.AWS_EU_W_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_W_2)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_EU_W_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_W_2) && !isNightShiftInAWS(AWS.AWS_EU_W_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_S_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_EU_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_S_1) && !isNightShiftInAWS(AWS.AWS_EU_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_W_3)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_EU_W_3)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_W_3) && !isNightShiftInAWS(AWS.AWS_EU_W_3)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_N_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_EU_N_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_N_1) && !isNightShiftInAWS(AWS.AWS_EU_N_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_ME_S_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_ME_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_ME_S_1) && !isNightShiftInAWS(AWS.AWS_ME_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_SA_E_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_SA_E_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_SA_E_1) && !isNightShiftInAWS(AWS.AWS_SA_E_1)
  );
});

test("afternoon in AWS 2011_11_11_11_22", () => {
  jest.setSystemTime(new Date(DATES.DATE_2011_11_11_11_22));
  expect(isDayShiftInAWS(AWS.AWS_US_E_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_US_E_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_E_2) && !isNightShiftInAWS(AWS.AWS_US_E_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_US_E_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_US_E_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_E_1) && !isNightShiftInAWS(AWS.AWS_US_E_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_US_W_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_US_W_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_W_1) && !isNightShiftInAWS(AWS.AWS_US_W_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_US_W_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_US_W_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_W_2) && !isNightShiftInAWS(AWS.AWS_US_W_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_AF_S_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AF_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AF_S_1) && !isNightShiftInAWS(AWS.AWS_AF_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_E_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_E_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_E_1) && !isNightShiftInAWS(AWS.AWS_AP_E_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_3)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_3)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_SE_3) && !isNightShiftInAWS(AWS.AWS_AP_SE_3)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_S_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_S_1) && !isNightShiftInAWS(AWS.AWS_AP_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_3)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_3)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_NE_3) && !isNightShiftInAWS(AWS.AWS_AP_NE_3)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_NE_2) && !isNightShiftInAWS(AWS.AWS_AP_NE_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_SE_1) && !isNightShiftInAWS(AWS.AWS_AP_SE_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_SE_2) && !isNightShiftInAWS(AWS.AWS_AP_SE_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_NE_1) && !isNightShiftInAWS(AWS.AWS_AP_NE_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_CA_C_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_CA_C_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_CA_C_1) && !isNightShiftInAWS(AWS.AWS_CA_C_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_CN_N_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_CN_N_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_CN_N_1) && !isNightShiftInAWS(AWS.AWS_CN_N_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_CN_NW_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_CN_NW_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_CN_NW_1) && !isNightShiftInAWS(AWS.AWS_CN_NW_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_C_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_EU_C_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_C_1) && !isNightShiftInAWS(AWS.AWS_EU_C_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_W_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_EU_W_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_W_1) && !isNightShiftInAWS(AWS.AWS_EU_W_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_W_2)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_EU_W_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_W_2) && !isNightShiftInAWS(AWS.AWS_EU_W_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_S_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_EU_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_S_1) && !isNightShiftInAWS(AWS.AWS_EU_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_W_3)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_EU_W_3)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_W_3) && !isNightShiftInAWS(AWS.AWS_EU_W_3)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_N_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_EU_N_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_N_1) && !isNightShiftInAWS(AWS.AWS_EU_N_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_ME_S_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_ME_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_ME_S_1) && !isNightShiftInAWS(AWS.AWS_ME_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_SA_E_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_SA_E_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_SA_E_1) && !isNightShiftInAWS(AWS.AWS_SA_E_1)
  );
});

test("afternoon in AWS 2012_12_12_12_24", () => {
  jest.setSystemTime(new Date(DATES.DATE_2012_12_12_12_24));
  expect(isDayShiftInAWS(AWS.AWS_US_E_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_US_E_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_E_2) && !isNightShiftInAWS(AWS.AWS_US_E_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_US_E_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_US_E_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_E_1) && !isNightShiftInAWS(AWS.AWS_US_E_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_US_W_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_US_W_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_W_1) && !isNightShiftInAWS(AWS.AWS_US_W_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_US_W_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_US_W_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_W_2) && !isNightShiftInAWS(AWS.AWS_US_W_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_AF_S_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AF_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AF_S_1) && !isNightShiftInAWS(AWS.AWS_AF_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_E_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_E_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_E_1) && !isNightShiftInAWS(AWS.AWS_AP_E_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_3)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_3)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_SE_3) && !isNightShiftInAWS(AWS.AWS_AP_SE_3)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_S_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_S_1) && !isNightShiftInAWS(AWS.AWS_AP_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_3)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_3)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_NE_3) && !isNightShiftInAWS(AWS.AWS_AP_NE_3)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_NE_2) && !isNightShiftInAWS(AWS.AWS_AP_NE_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_SE_1) && !isNightShiftInAWS(AWS.AWS_AP_SE_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_SE_2) && !isNightShiftInAWS(AWS.AWS_AP_SE_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_NE_1) && !isNightShiftInAWS(AWS.AWS_AP_NE_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_CA_C_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_CA_C_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_CA_C_1) && !isNightShiftInAWS(AWS.AWS_CA_C_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_CN_N_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_CN_N_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_CN_N_1) && !isNightShiftInAWS(AWS.AWS_CN_N_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_CN_NW_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_CN_NW_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_CN_NW_1) && !isNightShiftInAWS(AWS.AWS_CN_NW_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_C_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_EU_C_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_C_1) && !isNightShiftInAWS(AWS.AWS_EU_C_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_W_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_EU_W_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_W_1) && !isNightShiftInAWS(AWS.AWS_EU_W_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_W_2)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_EU_W_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_W_2) && !isNightShiftInAWS(AWS.AWS_EU_W_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_S_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_EU_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_S_1) && !isNightShiftInAWS(AWS.AWS_EU_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_W_3)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_EU_W_3)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_W_3) && !isNightShiftInAWS(AWS.AWS_EU_W_3)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_N_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_EU_N_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_N_1) && !isNightShiftInAWS(AWS.AWS_EU_N_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_ME_S_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_ME_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_ME_S_1) && !isNightShiftInAWS(AWS.AWS_ME_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_SA_E_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_SA_E_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_SA_E_1) && !isNightShiftInAWS(AWS.AWS_SA_E_1)
  );
});

test("afternoon in AWS 2013_03_13_13_26", () => {
  jest.setSystemTime(new Date(DATES.DATE_2013_03_13_13_26));
  expect(isDayShiftInAWS(AWS.AWS_US_E_2)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_US_E_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_E_2) && !isNightShiftInAWS(AWS.AWS_US_E_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_US_E_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_US_E_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_E_1) && !isNightShiftInAWS(AWS.AWS_US_E_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_US_W_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_US_W_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_W_1) && !isNightShiftInAWS(AWS.AWS_US_W_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_US_W_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_US_W_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_W_2) && !isNightShiftInAWS(AWS.AWS_US_W_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_AF_S_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AF_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AF_S_1) && !isNightShiftInAWS(AWS.AWS_AF_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_E_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_E_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_E_1) && !isNightShiftInAWS(AWS.AWS_AP_E_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_3)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_3)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_SE_3) && !isNightShiftInAWS(AWS.AWS_AP_SE_3)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_S_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_S_1) && !isNightShiftInAWS(AWS.AWS_AP_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_3)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_3)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_NE_3) && !isNightShiftInAWS(AWS.AWS_AP_NE_3)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_NE_2) && !isNightShiftInAWS(AWS.AWS_AP_NE_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_SE_1) && !isNightShiftInAWS(AWS.AWS_AP_SE_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_SE_2) && !isNightShiftInAWS(AWS.AWS_AP_SE_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_NE_1) && !isNightShiftInAWS(AWS.AWS_AP_NE_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_CA_C_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_CA_C_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_CA_C_1) && !isNightShiftInAWS(AWS.AWS_CA_C_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_CN_N_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_CN_N_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_CN_N_1) && !isNightShiftInAWS(AWS.AWS_CN_N_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_CN_NW_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_CN_NW_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_CN_NW_1) && !isNightShiftInAWS(AWS.AWS_CN_NW_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_C_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_EU_C_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_C_1) && !isNightShiftInAWS(AWS.AWS_EU_C_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_W_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_EU_W_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_W_1) && !isNightShiftInAWS(AWS.AWS_EU_W_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_W_2)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_EU_W_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_W_2) && !isNightShiftInAWS(AWS.AWS_EU_W_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_S_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_EU_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_S_1) && !isNightShiftInAWS(AWS.AWS_EU_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_W_3)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_EU_W_3)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_W_3) && !isNightShiftInAWS(AWS.AWS_EU_W_3)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_N_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_EU_N_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_N_1) && !isNightShiftInAWS(AWS.AWS_EU_N_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_ME_S_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_ME_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_ME_S_1) && !isNightShiftInAWS(AWS.AWS_ME_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_SA_E_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_SA_E_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_SA_E_1) && !isNightShiftInAWS(AWS.AWS_SA_E_1)
  );
});

test("afternoon in AWS 2014_04_14_14_28", () => {
  jest.setSystemTime(new Date(DATES.DATE_2014_04_14_14_28));
  expect(isDayShiftInAWS(AWS.AWS_US_E_2)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_US_E_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_E_2) && !isNightShiftInAWS(AWS.AWS_US_E_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_US_E_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_US_E_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_E_1) && !isNightShiftInAWS(AWS.AWS_US_E_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_US_W_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_US_W_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_W_1) && !isNightShiftInAWS(AWS.AWS_US_W_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_US_W_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_US_W_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_W_2) && !isNightShiftInAWS(AWS.AWS_US_W_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_AF_S_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AF_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AF_S_1) && !isNightShiftInAWS(AWS.AWS_AF_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_E_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_E_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_E_1) && !isNightShiftInAWS(AWS.AWS_AP_E_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_3)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_3)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_SE_3) && !isNightShiftInAWS(AWS.AWS_AP_SE_3)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_S_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_S_1) && !isNightShiftInAWS(AWS.AWS_AP_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_3)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_3)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_NE_3) && !isNightShiftInAWS(AWS.AWS_AP_NE_3)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_NE_2) && !isNightShiftInAWS(AWS.AWS_AP_NE_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_SE_1) && !isNightShiftInAWS(AWS.AWS_AP_SE_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_SE_2) && !isNightShiftInAWS(AWS.AWS_AP_SE_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_NE_1) && !isNightShiftInAWS(AWS.AWS_AP_NE_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_CA_C_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_CA_C_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_CA_C_1) && !isNightShiftInAWS(AWS.AWS_CA_C_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_CN_N_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_CN_N_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_CN_N_1) && !isNightShiftInAWS(AWS.AWS_CN_N_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_CN_NW_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_CN_NW_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_CN_NW_1) && !isNightShiftInAWS(AWS.AWS_CN_NW_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_C_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_C_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_C_1) && !isNightShiftInAWS(AWS.AWS_EU_C_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_W_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_EU_W_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_W_1) && !isNightShiftInAWS(AWS.AWS_EU_W_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_W_2)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_EU_W_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_W_2) && !isNightShiftInAWS(AWS.AWS_EU_W_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_S_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_S_1) && !isNightShiftInAWS(AWS.AWS_EU_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_W_3)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_W_3)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_W_3) && !isNightShiftInAWS(AWS.AWS_EU_W_3)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_N_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_N_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_N_1) && !isNightShiftInAWS(AWS.AWS_EU_N_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_ME_S_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_ME_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_ME_S_1) && !isNightShiftInAWS(AWS.AWS_ME_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_SA_E_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_SA_E_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_SA_E_1) && !isNightShiftInAWS(AWS.AWS_SA_E_1)
  );
});

test("afternoon in AWS 2015_05_15_15_30", () => {
  jest.setSystemTime(new Date(DATES.DATE_2015_05_15_15_30));
  expect(isDayShiftInAWS(AWS.AWS_US_E_2)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_US_E_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_E_2) && !isNightShiftInAWS(AWS.AWS_US_E_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_US_E_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_US_E_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_E_1) && !isNightShiftInAWS(AWS.AWS_US_E_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_US_W_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_US_W_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_W_1) && !isNightShiftInAWS(AWS.AWS_US_W_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_US_W_2)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_US_W_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_W_2) && !isNightShiftInAWS(AWS.AWS_US_W_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_AF_S_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AF_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AF_S_1) && !isNightShiftInAWS(AWS.AWS_AF_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_E_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_E_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_E_1) && !isNightShiftInAWS(AWS.AWS_AP_E_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_3)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_3)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_SE_3) && !isNightShiftInAWS(AWS.AWS_AP_SE_3)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_S_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_S_1) && !isNightShiftInAWS(AWS.AWS_AP_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_3)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_3)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_NE_3) && !isNightShiftInAWS(AWS.AWS_AP_NE_3)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_NE_2) && !isNightShiftInAWS(AWS.AWS_AP_NE_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_SE_1) && !isNightShiftInAWS(AWS.AWS_AP_SE_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_SE_2) && !isNightShiftInAWS(AWS.AWS_AP_SE_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_NE_1) && !isNightShiftInAWS(AWS.AWS_AP_NE_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_CA_C_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_CA_C_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_CA_C_1) && !isNightShiftInAWS(AWS.AWS_CA_C_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_CN_N_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_CN_N_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_CN_N_1) && !isNightShiftInAWS(AWS.AWS_CN_N_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_CN_NW_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_CN_NW_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_CN_NW_1) && !isNightShiftInAWS(AWS.AWS_CN_NW_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_C_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_C_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_C_1) && !isNightShiftInAWS(AWS.AWS_EU_C_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_W_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_W_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_W_1) && !isNightShiftInAWS(AWS.AWS_EU_W_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_W_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_W_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_W_2) && !isNightShiftInAWS(AWS.AWS_EU_W_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_S_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_S_1) && !isNightShiftInAWS(AWS.AWS_EU_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_W_3)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_W_3)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_W_3) && !isNightShiftInAWS(AWS.AWS_EU_W_3)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_N_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_N_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_N_1) && !isNightShiftInAWS(AWS.AWS_EU_N_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_ME_S_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_ME_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_ME_S_1) && !isNightShiftInAWS(AWS.AWS_ME_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_SA_E_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_SA_E_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_SA_E_1) && !isNightShiftInAWS(AWS.AWS_SA_E_1)
  );
});

test("afternoon in AWS 2016_06_16_16_32", () => {
  jest.setSystemTime(new Date(DATES.DATE_2016_06_16_16_32));
  expect(isDayShiftInAWS(AWS.AWS_US_E_2)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_US_E_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_E_2) && !isNightShiftInAWS(AWS.AWS_US_E_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_US_E_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_US_E_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_E_1) && !isNightShiftInAWS(AWS.AWS_US_E_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_US_W_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_US_W_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_W_1) && !isNightShiftInAWS(AWS.AWS_US_W_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_US_W_2)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_US_W_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_W_2) && !isNightShiftInAWS(AWS.AWS_US_W_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_AF_S_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AF_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AF_S_1) && !isNightShiftInAWS(AWS.AWS_AF_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_E_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_E_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_E_1) && !isNightShiftInAWS(AWS.AWS_AP_E_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_3)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_3)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_SE_3) && !isNightShiftInAWS(AWS.AWS_AP_SE_3)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_S_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_S_1) && !isNightShiftInAWS(AWS.AWS_AP_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_3)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_3)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_NE_3) && !isNightShiftInAWS(AWS.AWS_AP_NE_3)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_NE_2) && !isNightShiftInAWS(AWS.AWS_AP_NE_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_SE_1) && !isNightShiftInAWS(AWS.AWS_AP_SE_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_SE_2) && !isNightShiftInAWS(AWS.AWS_AP_SE_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_NE_1) && !isNightShiftInAWS(AWS.AWS_AP_NE_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_CA_C_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_CA_C_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_CA_C_1) && !isNightShiftInAWS(AWS.AWS_CA_C_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_CN_N_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_CN_N_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_CN_N_1) && !isNightShiftInAWS(AWS.AWS_CN_N_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_CN_NW_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_CN_NW_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_CN_NW_1) && !isNightShiftInAWS(AWS.AWS_CN_NW_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_C_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_C_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_C_1) && !isNightShiftInAWS(AWS.AWS_EU_C_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_W_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_W_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_W_1) && !isNightShiftInAWS(AWS.AWS_EU_W_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_W_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_W_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_W_2) && !isNightShiftInAWS(AWS.AWS_EU_W_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_S_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_S_1) && !isNightShiftInAWS(AWS.AWS_EU_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_W_3)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_W_3)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_W_3) && !isNightShiftInAWS(AWS.AWS_EU_W_3)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_N_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_N_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_N_1) && !isNightShiftInAWS(AWS.AWS_EU_N_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_ME_S_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_ME_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_ME_S_1) && !isNightShiftInAWS(AWS.AWS_ME_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_SA_E_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_SA_E_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_SA_E_1) && !isNightShiftInAWS(AWS.AWS_SA_E_1)
  );
});

test("afternoon in AWS 2017_07_17_17_34", () => {
  jest.setSystemTime(new Date(DATES.DATE_2017_07_17_17_34));
  expect(isDayShiftInAWS(AWS.AWS_US_E_2)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_US_E_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_E_2) && !isNightShiftInAWS(AWS.AWS_US_E_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_US_E_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_US_E_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_E_1) && !isNightShiftInAWS(AWS.AWS_US_E_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_US_W_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_US_W_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_W_1) && !isNightShiftInAWS(AWS.AWS_US_W_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_US_W_2)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_US_W_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_W_2) && !isNightShiftInAWS(AWS.AWS_US_W_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_AF_S_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AF_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AF_S_1) && !isNightShiftInAWS(AWS.AWS_AF_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_E_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_E_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_E_1) && !isNightShiftInAWS(AWS.AWS_AP_E_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_3)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_3)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_SE_3) && !isNightShiftInAWS(AWS.AWS_AP_SE_3)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_S_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_S_1) && !isNightShiftInAWS(AWS.AWS_AP_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_3)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_3)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_NE_3) && !isNightShiftInAWS(AWS.AWS_AP_NE_3)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_NE_2) && !isNightShiftInAWS(AWS.AWS_AP_NE_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_SE_1) && !isNightShiftInAWS(AWS.AWS_AP_SE_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_SE_2) && !isNightShiftInAWS(AWS.AWS_AP_SE_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_NE_1) && !isNightShiftInAWS(AWS.AWS_AP_NE_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_CA_C_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_CA_C_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_CA_C_1) && !isNightShiftInAWS(AWS.AWS_CA_C_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_CN_N_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_CN_N_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_CN_N_1) && !isNightShiftInAWS(AWS.AWS_CN_N_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_CN_NW_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_CN_NW_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_CN_NW_1) && !isNightShiftInAWS(AWS.AWS_CN_NW_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_C_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_C_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_C_1) && !isNightShiftInAWS(AWS.AWS_EU_C_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_W_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_W_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_W_1) && !isNightShiftInAWS(AWS.AWS_EU_W_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_W_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_W_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_W_2) && !isNightShiftInAWS(AWS.AWS_EU_W_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_S_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_S_1) && !isNightShiftInAWS(AWS.AWS_EU_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_W_3)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_W_3)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_W_3) && !isNightShiftInAWS(AWS.AWS_EU_W_3)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_N_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_N_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_N_1) && !isNightShiftInAWS(AWS.AWS_EU_N_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_ME_S_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_ME_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_ME_S_1) && !isNightShiftInAWS(AWS.AWS_ME_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_SA_E_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_SA_E_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_SA_E_1) && !isNightShiftInAWS(AWS.AWS_SA_E_1)
  );
});

test("afternoon in AWS 2018_08_18_18_36", () => {
  jest.setSystemTime(new Date(DATES.DATE_2018_08_18_18_36));
  expect(isDayShiftInAWS(AWS.AWS_US_E_2)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_US_E_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_E_2) && !isNightShiftInAWS(AWS.AWS_US_E_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_US_E_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_US_E_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_E_1) && !isNightShiftInAWS(AWS.AWS_US_E_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_US_W_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_US_W_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_W_1) && !isNightShiftInAWS(AWS.AWS_US_W_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_US_W_2)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_US_W_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_W_2) && !isNightShiftInAWS(AWS.AWS_US_W_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_AF_S_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AF_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AF_S_1) && !isNightShiftInAWS(AWS.AWS_AF_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_E_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_E_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_E_1) && !isNightShiftInAWS(AWS.AWS_AP_E_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_3)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_3)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_SE_3) && !isNightShiftInAWS(AWS.AWS_AP_SE_3)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_S_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_S_1) && !isNightShiftInAWS(AWS.AWS_AP_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_3)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_3)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_NE_3) && !isNightShiftInAWS(AWS.AWS_AP_NE_3)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_NE_2) && !isNightShiftInAWS(AWS.AWS_AP_NE_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_SE_1) && !isNightShiftInAWS(AWS.AWS_AP_SE_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_SE_2) && !isNightShiftInAWS(AWS.AWS_AP_SE_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_NE_1) && !isNightShiftInAWS(AWS.AWS_AP_NE_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_CA_C_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_CA_C_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_CA_C_1) && !isNightShiftInAWS(AWS.AWS_CA_C_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_CN_N_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_CN_N_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_CN_N_1) && !isNightShiftInAWS(AWS.AWS_CN_N_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_CN_NW_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_CN_NW_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_CN_NW_1) && !isNightShiftInAWS(AWS.AWS_CN_NW_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_C_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_C_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_C_1) && !isNightShiftInAWS(AWS.AWS_EU_C_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_W_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_W_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_W_1) && !isNightShiftInAWS(AWS.AWS_EU_W_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_W_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_W_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_W_2) && !isNightShiftInAWS(AWS.AWS_EU_W_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_S_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_S_1) && !isNightShiftInAWS(AWS.AWS_EU_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_W_3)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_W_3)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_W_3) && !isNightShiftInAWS(AWS.AWS_EU_W_3)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_N_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_N_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_N_1) && !isNightShiftInAWS(AWS.AWS_EU_N_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_ME_S_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_ME_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_ME_S_1) && !isNightShiftInAWS(AWS.AWS_ME_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_SA_E_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_SA_E_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_SA_E_1) && !isNightShiftInAWS(AWS.AWS_SA_E_1)
  );
});

test("afternoon in AWS 2019_09_19_19_38", () => {
  jest.setSystemTime(new Date(DATES.DATE_2019_09_19_19_38));
  expect(isDayShiftInAWS(AWS.AWS_US_E_2)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_US_E_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_E_2) && !isNightShiftInAWS(AWS.AWS_US_E_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_US_E_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_US_E_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_E_1) && !isNightShiftInAWS(AWS.AWS_US_E_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_US_W_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_US_W_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_W_1) && !isNightShiftInAWS(AWS.AWS_US_W_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_US_W_2)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_US_W_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_W_2) && !isNightShiftInAWS(AWS.AWS_US_W_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_AF_S_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AF_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AF_S_1) && !isNightShiftInAWS(AWS.AWS_AF_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_E_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_E_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_E_1) && !isNightShiftInAWS(AWS.AWS_AP_E_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_3)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_3)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_SE_3) && !isNightShiftInAWS(AWS.AWS_AP_SE_3)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_S_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_S_1) && !isNightShiftInAWS(AWS.AWS_AP_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_3)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_3)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_NE_3) && !isNightShiftInAWS(AWS.AWS_AP_NE_3)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_NE_2) && !isNightShiftInAWS(AWS.AWS_AP_NE_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_SE_1) && !isNightShiftInAWS(AWS.AWS_AP_SE_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_SE_2) && !isNightShiftInAWS(AWS.AWS_AP_SE_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_NE_1) && !isNightShiftInAWS(AWS.AWS_AP_NE_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_CA_C_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_CA_C_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_CA_C_1) && !isNightShiftInAWS(AWS.AWS_CA_C_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_CN_N_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_CN_N_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_CN_N_1) && !isNightShiftInAWS(AWS.AWS_CN_N_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_CN_NW_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_CN_NW_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_CN_NW_1) && !isNightShiftInAWS(AWS.AWS_CN_NW_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_C_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_C_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_C_1) && !isNightShiftInAWS(AWS.AWS_EU_C_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_W_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_W_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_W_1) && !isNightShiftInAWS(AWS.AWS_EU_W_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_W_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_W_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_W_2) && !isNightShiftInAWS(AWS.AWS_EU_W_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_S_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_S_1) && !isNightShiftInAWS(AWS.AWS_EU_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_W_3)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_W_3)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_W_3) && !isNightShiftInAWS(AWS.AWS_EU_W_3)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_N_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_N_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_N_1) && !isNightShiftInAWS(AWS.AWS_EU_N_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_ME_S_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_ME_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_ME_S_1) && !isNightShiftInAWS(AWS.AWS_ME_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_SA_E_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_SA_E_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_SA_E_1) && !isNightShiftInAWS(AWS.AWS_SA_E_1)
  );
});

test("afternoon in AWS 2020_02_20_20_40", () => {
  jest.setSystemTime(new Date(DATES.DATE_2020_02_20_20_40));
  expect(isDayShiftInAWS(AWS.AWS_US_E_2)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_US_E_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_E_2) && !isNightShiftInAWS(AWS.AWS_US_E_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_US_E_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_US_E_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_E_1) && !isNightShiftInAWS(AWS.AWS_US_E_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_US_W_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_US_W_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_W_1) && !isNightShiftInAWS(AWS.AWS_US_W_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_US_W_2)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_US_W_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_W_2) && !isNightShiftInAWS(AWS.AWS_US_W_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_AF_S_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AF_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AF_S_1) && !isNightShiftInAWS(AWS.AWS_AF_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_E_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_E_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_E_1) && !isNightShiftInAWS(AWS.AWS_AP_E_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_3)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_3)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_SE_3) && !isNightShiftInAWS(AWS.AWS_AP_SE_3)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_S_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_S_1) && !isNightShiftInAWS(AWS.AWS_AP_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_3)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_3)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_NE_3) && !isNightShiftInAWS(AWS.AWS_AP_NE_3)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_NE_2) && !isNightShiftInAWS(AWS.AWS_AP_NE_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_SE_1) && !isNightShiftInAWS(AWS.AWS_AP_SE_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_SE_2) && !isNightShiftInAWS(AWS.AWS_AP_SE_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_NE_1) && !isNightShiftInAWS(AWS.AWS_AP_NE_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_CA_C_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_CA_C_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_CA_C_1) && !isNightShiftInAWS(AWS.AWS_CA_C_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_CN_N_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_CN_N_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_CN_N_1) && !isNightShiftInAWS(AWS.AWS_CN_N_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_CN_NW_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_CN_NW_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_CN_NW_1) && !isNightShiftInAWS(AWS.AWS_CN_NW_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_C_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_C_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_C_1) && !isNightShiftInAWS(AWS.AWS_EU_C_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_W_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_W_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_W_1) && !isNightShiftInAWS(AWS.AWS_EU_W_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_W_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_W_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_W_2) && !isNightShiftInAWS(AWS.AWS_EU_W_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_S_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_S_1) && !isNightShiftInAWS(AWS.AWS_EU_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_W_3)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_W_3)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_W_3) && !isNightShiftInAWS(AWS.AWS_EU_W_3)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_N_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_N_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_N_1) && !isNightShiftInAWS(AWS.AWS_EU_N_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_ME_S_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_ME_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_ME_S_1) && !isNightShiftInAWS(AWS.AWS_ME_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_SA_E_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_SA_E_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_SA_E_1) && !isNightShiftInAWS(AWS.AWS_SA_E_1)
  );
});

test("afternoon in AWS 2021_01_21_21_42", () => {
  jest.setSystemTime(new Date(DATES.DATE_2021_01_21_21_42));
  expect(isDayShiftInAWS(AWS.AWS_US_E_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_US_E_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_E_2) && !isNightShiftInAWS(AWS.AWS_US_E_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_US_E_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_US_E_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_E_1) && !isNightShiftInAWS(AWS.AWS_US_E_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_US_W_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_US_W_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_W_1) && !isNightShiftInAWS(AWS.AWS_US_W_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_US_W_2)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_US_W_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_W_2) && !isNightShiftInAWS(AWS.AWS_US_W_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_AF_S_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AF_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AF_S_1) && !isNightShiftInAWS(AWS.AWS_AF_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_E_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_E_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_E_1) && !isNightShiftInAWS(AWS.AWS_AP_E_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_3)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_3)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_SE_3) && !isNightShiftInAWS(AWS.AWS_AP_SE_3)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_S_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_S_1) && !isNightShiftInAWS(AWS.AWS_AP_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_3)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_3)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_NE_3) && !isNightShiftInAWS(AWS.AWS_AP_NE_3)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_NE_2) && !isNightShiftInAWS(AWS.AWS_AP_NE_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_SE_1) && !isNightShiftInAWS(AWS.AWS_AP_SE_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_2)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_SE_2) && !isNightShiftInAWS(AWS.AWS_AP_SE_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_NE_1) && !isNightShiftInAWS(AWS.AWS_AP_NE_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_CA_C_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_CA_C_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_CA_C_1) && !isNightShiftInAWS(AWS.AWS_CA_C_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_CN_N_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_CN_N_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_CN_N_1) && !isNightShiftInAWS(AWS.AWS_CN_N_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_CN_NW_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_CN_NW_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_CN_NW_1) && !isNightShiftInAWS(AWS.AWS_CN_NW_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_C_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_C_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_C_1) && !isNightShiftInAWS(AWS.AWS_EU_C_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_W_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_W_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_W_1) && !isNightShiftInAWS(AWS.AWS_EU_W_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_W_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_W_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_W_2) && !isNightShiftInAWS(AWS.AWS_EU_W_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_S_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_S_1) && !isNightShiftInAWS(AWS.AWS_EU_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_W_3)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_W_3)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_W_3) && !isNightShiftInAWS(AWS.AWS_EU_W_3)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_N_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_N_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_N_1) && !isNightShiftInAWS(AWS.AWS_EU_N_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_ME_S_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_ME_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_ME_S_1) && !isNightShiftInAWS(AWS.AWS_ME_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_SA_E_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_SA_E_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_SA_E_1) && !isNightShiftInAWS(AWS.AWS_SA_E_1)
  );
});

test("afternoon in AWS 2022_02_22_22_44", () => {
  jest.setSystemTime(new Date(DATES.DATE_2022_02_22_22_44));
  expect(isDayShiftInAWS(AWS.AWS_US_E_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_US_E_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_E_2) && !isNightShiftInAWS(AWS.AWS_US_E_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_US_E_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_US_E_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_E_1) && !isNightShiftInAWS(AWS.AWS_US_E_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_US_W_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_US_W_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_W_1) && !isNightShiftInAWS(AWS.AWS_US_W_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_US_W_2)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_US_W_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_W_2) && !isNightShiftInAWS(AWS.AWS_US_W_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_AF_S_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AF_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AF_S_1) && !isNightShiftInAWS(AWS.AWS_AF_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_E_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_E_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_E_1) && !isNightShiftInAWS(AWS.AWS_AP_E_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_3)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_3)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_SE_3) && !isNightShiftInAWS(AWS.AWS_AP_SE_3)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_S_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_S_1) && !isNightShiftInAWS(AWS.AWS_AP_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_3)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_3)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_NE_3) && !isNightShiftInAWS(AWS.AWS_AP_NE_3)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_NE_2) && !isNightShiftInAWS(AWS.AWS_AP_NE_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_SE_1) && !isNightShiftInAWS(AWS.AWS_AP_SE_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_2)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_SE_2) && !isNightShiftInAWS(AWS.AWS_AP_SE_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_NE_1) && !isNightShiftInAWS(AWS.AWS_AP_NE_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_CA_C_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_CA_C_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_CA_C_1) && !isNightShiftInAWS(AWS.AWS_CA_C_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_CN_N_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_CN_N_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_CN_N_1) && !isNightShiftInAWS(AWS.AWS_CN_N_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_CN_NW_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_CN_NW_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_CN_NW_1) && !isNightShiftInAWS(AWS.AWS_CN_NW_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_C_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_C_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_C_1) && !isNightShiftInAWS(AWS.AWS_EU_C_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_W_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_W_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_W_1) && !isNightShiftInAWS(AWS.AWS_EU_W_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_W_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_W_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_W_2) && !isNightShiftInAWS(AWS.AWS_EU_W_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_S_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_S_1) && !isNightShiftInAWS(AWS.AWS_EU_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_W_3)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_W_3)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_W_3) && !isNightShiftInAWS(AWS.AWS_EU_W_3)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_N_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_N_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_N_1) && !isNightShiftInAWS(AWS.AWS_EU_N_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_ME_S_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_ME_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_ME_S_1) && !isNightShiftInAWS(AWS.AWS_ME_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_SA_E_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_SA_E_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_SA_E_1) && !isNightShiftInAWS(AWS.AWS_SA_E_1)
  );
});

test("afternoon in AWS 2023_03_23_23_46", () => {
  jest.setSystemTime(new Date(DATES.DATE_2023_03_23_23_46));
  expect(isDayShiftInAWS(AWS.AWS_US_E_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_US_E_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_E_2) && !isNightShiftInAWS(AWS.AWS_US_E_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_US_E_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_US_E_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_E_1) && !isNightShiftInAWS(AWS.AWS_US_E_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_US_W_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_US_W_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_W_1) && !isNightShiftInAWS(AWS.AWS_US_W_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_US_W_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_US_W_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_W_2) && !isNightShiftInAWS(AWS.AWS_US_W_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_AF_S_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AF_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AF_S_1) && !isNightShiftInAWS(AWS.AWS_AF_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_E_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_E_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_E_1) && !isNightShiftInAWS(AWS.AWS_AP_E_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_3)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_3)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_SE_3) && !isNightShiftInAWS(AWS.AWS_AP_SE_3)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_S_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_S_1) && !isNightShiftInAWS(AWS.AWS_AP_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_3)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_3)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_NE_3) && !isNightShiftInAWS(AWS.AWS_AP_NE_3)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_2)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_NE_2) && !isNightShiftInAWS(AWS.AWS_AP_NE_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_SE_1) && !isNightShiftInAWS(AWS.AWS_AP_SE_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_2)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_SE_2) && !isNightShiftInAWS(AWS.AWS_AP_SE_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_NE_1) && !isNightShiftInAWS(AWS.AWS_AP_NE_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_CA_C_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_CA_C_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_CA_C_1) && !isNightShiftInAWS(AWS.AWS_CA_C_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_CN_N_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_CN_N_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_CN_N_1) && !isNightShiftInAWS(AWS.AWS_CN_N_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_CN_NW_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_CN_NW_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_CN_NW_1) && !isNightShiftInAWS(AWS.AWS_CN_NW_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_C_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_C_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_C_1) && !isNightShiftInAWS(AWS.AWS_EU_C_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_W_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_W_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_W_1) && !isNightShiftInAWS(AWS.AWS_EU_W_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_W_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_W_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_W_2) && !isNightShiftInAWS(AWS.AWS_EU_W_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_S_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_S_1) && !isNightShiftInAWS(AWS.AWS_EU_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_W_3)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_W_3)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_W_3) && !isNightShiftInAWS(AWS.AWS_EU_W_3)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_N_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_N_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_N_1) && !isNightShiftInAWS(AWS.AWS_EU_N_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_ME_S_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_ME_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_ME_S_1) && !isNightShiftInAWS(AWS.AWS_ME_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_SA_E_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_SA_E_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_SA_E_1) && !isNightShiftInAWS(AWS.AWS_SA_E_1)
  );
});

test("afternoon in AWS 2024_04_24_00_48", () => {
  jest.setSystemTime(new Date(DATES.DATE_2024_04_24_00_48));
  expect(isDayShiftInAWS(AWS.AWS_US_E_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_US_E_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_E_2) && !isNightShiftInAWS(AWS.AWS_US_E_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_US_E_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_US_E_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_E_1) && !isNightShiftInAWS(AWS.AWS_US_E_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_US_W_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_US_W_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_W_1) && !isNightShiftInAWS(AWS.AWS_US_W_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_US_W_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_US_W_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_US_W_2) && !isNightShiftInAWS(AWS.AWS_US_W_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_AF_S_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AF_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AF_S_1) && !isNightShiftInAWS(AWS.AWS_AF_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_E_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AP_E_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_E_1) && !isNightShiftInAWS(AWS.AWS_AP_E_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_3)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_3)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_SE_3) && !isNightShiftInAWS(AWS.AWS_AP_SE_3)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_S_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_AP_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_S_1) && !isNightShiftInAWS(AWS.AWS_AP_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_3)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_3)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_NE_3) && !isNightShiftInAWS(AWS.AWS_AP_NE_3)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_2)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_NE_2) && !isNightShiftInAWS(AWS.AWS_AP_NE_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_SE_1) && !isNightShiftInAWS(AWS.AWS_AP_SE_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_2)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AP_SE_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_SE_2) && !isNightShiftInAWS(AWS.AWS_AP_SE_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_AP_NE_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_AP_NE_1) && !isNightShiftInAWS(AWS.AWS_AP_NE_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_CA_C_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_CA_C_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_CA_C_1) && !isNightShiftInAWS(AWS.AWS_CA_C_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_CN_N_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_CN_N_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_CN_N_1) && !isNightShiftInAWS(AWS.AWS_CN_N_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_CN_NW_1)).toEqual(true);
  expect(isDayShiftInAWS(AWS.AWS_CN_NW_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_CN_NW_1) && !isNightShiftInAWS(AWS.AWS_CN_NW_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_C_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_C_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_C_1) && !isNightShiftInAWS(AWS.AWS_EU_C_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_W_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_W_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_W_1) && !isNightShiftInAWS(AWS.AWS_EU_W_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_W_2)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_W_2)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_W_2) && !isNightShiftInAWS(AWS.AWS_EU_W_2)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_S_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_S_1) && !isNightShiftInAWS(AWS.AWS_EU_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_W_3)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_W_3)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_W_3) && !isNightShiftInAWS(AWS.AWS_EU_W_3)
  );
  expect(isDayShiftInAWS(AWS.AWS_EU_N_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_EU_N_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_EU_N_1) && !isNightShiftInAWS(AWS.AWS_EU_N_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_ME_S_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_ME_S_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_ME_S_1) && !isNightShiftInAWS(AWS.AWS_ME_S_1)
  );
  expect(isDayShiftInAWS(AWS.AWS_SA_E_1)).toEqual(false);
  expect(isDayShiftInAWS(AWS.AWS_SA_E_1)).toEqual(
    !isEveningShiftInAWS(AWS.AWS_SA_E_1) && !isNightShiftInAWS(AWS.AWS_SA_E_1)
  );
});
