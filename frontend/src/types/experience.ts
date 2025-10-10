interface positionsI {
  companyName: string;
  companyId: string;
  companyLink: string;
  companyLogo: string;
  location: string;
  title: string;
  subTitle: string;
  description: string;
  duration: string;
  durationParsed: {
    start: {
      year: number;
      month: number;
      day: number;
    };
    end: {
      year: number;
      month: number;
      day: number;
    };
    present: boolean;
    period: string;
  };
}

export interface experienceI {
  companyName: string;
  companyId: string;
  companyLink: string;
  companyLogo: string;
  location: string;
  title: string;
  subTitle: string;
  description: string;
  duration: string;
  durationParsed: {
    start: {
      year: number;
      month: number;
      day: number;
    };
    end: {
      year: number;
      month: number;
      day: number;
    };
    present: boolean;
    period: string;
  };
  positions?: positionsI[];
  isMultiPositions?: boolean;
  totalDuration?: string;
}
