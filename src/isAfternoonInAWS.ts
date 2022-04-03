import { AWSRegionCode } from "./types/aws-region-codes";
import { AWSRegionTZ } from "./constants/aws-region-timezones";
import { isAfternoonIn } from "./isAfternoonIn";

export function isAfternoonInAWS(awsrc: AWSRegionCode) {
  const tz = AWSRegionTZ.get(awsrc);
  return tz ? isAfternoonIn(tz) : tz;
}
