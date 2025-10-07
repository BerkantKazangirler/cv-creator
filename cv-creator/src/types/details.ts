interface featuredPostsI {
  postLink: string;
  postText: string;
}

interface positionsI {
  jobTitle: string;
  company: string;
  location: string;
  duration: string;
  companyLink: string;
  companyId: string;
  jobDescription: string;
}

interface educationI {
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
  };
  university: string;
  universityLink: string;
  degree: string;
  description: string | null;
  subDescription: string | null;
}

interface languagesI {
  Language: string;
  Level: string;
}

export interface detailsI {
  about: string;
  featuredPosts: featuredPostsI[];
  positions: positionsI[];
  education: educationI[];
  languages: {
    languages: languagesI[];
    deepLink: string;
  };
}
