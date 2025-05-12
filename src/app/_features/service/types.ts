export interface TermsGuideProsp {
  title: string;
  data: {
    section: number;
    title: string;
    list: {
      content: string;
    }[];
  }[];
}
