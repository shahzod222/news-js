export type DataType = {
    articles: articleType[];
    sources: sourceType[];
};

export type articleType = {
    author: string;
    publishedAt: string;
    source: sourceType;
    title: string;
    url: string;
    description: string;
    urlToImage: string;
};

export type sourceType = {
    id: string;
    name: string;
};

export type noNullDiv = NonNullable<HTMLDivElement>;
export type noNullLi = NonNullable<HTMLLIElement>;
export type noNullHeading = NonNullable<HTMLHeadingElement>;
export type noNullP = NonNullable<HTMLParagraphElement>;
export type noNullA = NonNullable<HTMLAnchorElement>;
