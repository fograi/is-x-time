import { AWSRegionCode } from "./types/aws-region-codes";
import { AWSRegionTZ } from "./constants/aws-region-timezones";
import { isEveningIn } from "./isEveningIn";

export function isEveningInAWS(awsrc: AWSRegionCode) {
  return isEveningIn(AWSRegionTZ[awsrc]);
}
