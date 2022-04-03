import { AWSRegionCode } from "./types/aws-region-codes";
import { AWSRegionTZ } from "./constants/aws-region-timezones";
import { isMorningIn } from "./isMorningIn";

export function isMorningInAWS(awsrc: AWSRegionCode) {
  const tz = AWSRegionTZ.get(awsrc);
  return tz ? isMorningIn(tz) : tz;
}
