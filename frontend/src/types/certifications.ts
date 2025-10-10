export interface certificationsI {
  issuedBy: string;
  certificationLink: string;
  certificationName: string;
  issuedDate: string;
  issuerId: string;
  issuerLink: string;
  issuedDateParsed: {
    year: number;
    month: number;
    day: number;
  };
}
