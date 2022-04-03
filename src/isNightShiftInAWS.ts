import { AWSRegionCode } from "./types/aws-region-codes";
import { AWSRegionTZ } from "./constants/aws-region-timezones";
import { isNightShiftIn } from "./isNightShiftIn";

export function isNightShiftInAWS(awsrc: AWSRegionCode) {
  const tz = AWSRegionTZ.get(awsrc);
  return tz ? isNightShiftIn(tz) : tz;
}
