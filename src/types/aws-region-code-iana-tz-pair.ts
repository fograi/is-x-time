import { AWSRegionCode } from "../types/aws-region-codes";
import { IANATimeZone } from "../types/iana-tz";

export type AWSRegionIANATZPair = {
  [key in AWSRegionCode]: IANATimeZone;
};
