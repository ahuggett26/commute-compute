export interface CreditLicense {
    name: string,
    link: string
}

export class CreditLicenses {
    public static PUBLIC_DOMAIN: CreditLicense = {
        name: "Public Domain",
        link: "https://en.wikipedia.org/wiki/Public_domain"
    };
    public static CREATIVE_COMMONS_2_0: CreditLicense = {
        name: "Creative Commons Attribution 2.0 Generic",
        link: "https://creativecommons.org/licenses/by/2.0/deed.en"
    };
    public static CREATIVE_COMMONS_2_5: CreditLicense = {
        name: "Creative Commons Attribution 2.5 Generic",
        link: "https://creativecommons.org/licenses/by/2.5/deed.en"
    };
}