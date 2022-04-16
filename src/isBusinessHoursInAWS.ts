import { AWSRegionCode } from "./types/aws-region-codes";
import { AWSRegionTZ } from "./constants/aws-region-timezones";
import { isBusinessHoursIn } from "./isBusinessHoursIn";

export function isBusinessHoursInAWS(awsrc: AWSRegionCode) {
  return isBusinessHoursIn(AWSRegionTZ[awsrc]);
}
