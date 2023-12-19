export interface IRootParams {
  locale: string;
  langHeader: ILangHeader[];
  langFooter: ILangFooter;
}

export interface ILangHeader {
  label: string;
  path: string;
}

export interface ILangFooter {
  copyright: string;
  contactTitle: string;
}
