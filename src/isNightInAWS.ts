import { AWSRegionCode } from "./types/aws-region-codes";
import { AWSRegionTZ } from "./constants/aws-region-timezones";
import { isNightIn } from "./isNightIn";

export function isNightInAWS(awsrc: AWSRegionCode) {
  return isNightIn(AWSRegionTZ[awsrc]);
}
