import { AWSRegionCode } from "./types/aws-region-codes";
import { AWSRegionTZ } from "./constants/aws-region-timezones";
import { isDayShiftIn } from "./isDayShiftIn";

export function isDayShiftInAWS(awsrc: AWSRegionCode) {
  const tz = AWSRegionTZ.get(awsrc);
  return tz ? isDayShiftIn(tz) : tz;
}
