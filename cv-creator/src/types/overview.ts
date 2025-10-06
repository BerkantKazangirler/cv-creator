export interface OverviewI {
  CurrentPositions: {
    logoURL: string;
    name: string;
    url: string;
    urn: string;
  };
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
  supportedLocales: {
    country: string;
    language: string;
  };
  urn: string;
}
