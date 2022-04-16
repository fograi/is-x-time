import { AWSRegionCode } from "./types/aws-region-codes";
import { AWSRegionTZ } from "./constants/aws-region-timezones";
import { isNightShiftIn } from "./isNightShiftIn";

export function isNightShiftInAWS(awsrc: AWSRegionCode) {
  return isNightShiftIn(AWSRegionTZ[awsrc]);
}
