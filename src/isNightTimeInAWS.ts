import { AWSRegionCode } from "./types/aws-region-codes";
import { AWSRegionTZ } from "./constants/aws-region-timezones";
import { isNightTimeIn } from "./isNightTimeIn";

export function isNightTimeInAWS(awsrc: AWSRegionCode) {
  const tz = AWSRegionTZ.get(awsrc);
  return tz ? isNightTimeIn(tz) : tz;
}
