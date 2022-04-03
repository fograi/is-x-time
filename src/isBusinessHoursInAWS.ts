import { AWSRegionCode } from "./types/aws-region-codes";
import { AWSRegionTZ } from "./constants/aws-region-timezones";
import { isBusinessHoursIn } from "./isBusinessHoursIn";

export function isBusinessHoursInAWS(awsrc: AWSRegionCode) {
  const tz = AWSRegionTZ.get(awsrc);
  return tz ? isBusinessHoursIn(tz) : tz;
}
