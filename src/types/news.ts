export interface IMultimediNew {
    url: string;
    format: string;
    height: number;
    width: number;
    type: string;
    subtype: string;
    caption: string;
    copyright: string;
}

export interface INew {
    web_url: string;
    snippet: string;
    lead_paragraph: string;
    abstract: string;
    print_page: string;
    source: string;
    multimedia: Array<IMultimediNew>;
    pub_date: string;
}

export interface ITransformedNew {
    [key: string]: Array<INew>;
}