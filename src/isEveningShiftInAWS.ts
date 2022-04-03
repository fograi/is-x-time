import { AWSRegionCode } from "./types/aws-region-codes";
import { AWSRegionTZ } from "./constants/aws-region-timezones";
import { isEveningShiftIn } from "./isEveningShiftIn";

export function isEveningShiftInAWS(awsrc: AWSRegionCode) {
  const tz = AWSRegionTZ.get(awsrc);
  return tz ? isEveningShiftIn(tz) : tz;
}
