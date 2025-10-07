interface CurrentPositionsI {
  logoURL: string;
  name: string;
  url: string;
  urn: string;
}

interface supportedLocalesI {
  country: string;
  language: string;
}

export interface OverviewI {
  CurrentPositions: CurrentPositionsI[];
  backgroundImageURL: string;
  connectionsCount: number;
  creator: boolean;
  firstName: string;
  followerCount: number;
  fullName: string;
  headline: string;
  influencer: boolean;
  isTopVoice: boolean;
  joined: number;
  lastName: string;
  location: {
    city: string;
    countryCode: string;
    countryName: string;
    fullLocation: string;
    geoCountryUrn: string;
    geoRegionUrn: string;
    region: string;
  };
  premium: boolean;
  profileID: string;
  profilePictureURL: string;
  publicIdentifier: string;
  qualityProfile: boolean;
  supportedLocales: supportedLocalesI[];
  urn: string;
}
