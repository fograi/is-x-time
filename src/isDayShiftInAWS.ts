import { AWSRegionCode } from "./types/aws-region-codes";
import { AWSRegionTZ } from "./constants/aws-region-timezones";
import { isDayShiftIn } from "./isDayShiftIn";

export function isDayShiftInAWS(awsrc: AWSRegionCode) {
  return isDayShiftIn(AWSRegionTZ[awsrc]);
}
