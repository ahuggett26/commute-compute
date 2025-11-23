import { CreditLicense, CreditLicenses } from "./Licenses";

export interface ImageWithCredit {
    title: string;
    creditTitle?: string;
    imageUrl: string;
    creditLicense: CreditLicense;
    author?: string;
    authorLink?: string;
}

export class ImagesWithCredits {
    public static THE_MATRIX: ImageWithCredit = {
        title: "The red pill or the blue pill?",
        creditTitle: "Agent Smith - The Matrix",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Smith_Matrix_mannequins_%28cropped%29.jpg/250px-Smith_Matrix_mannequins_%28cropped%29.jpg",
        creditLicense: CreditLicenses.CREATIVE_COMMONS_2_5,
        author: "Marcin Wichary",
        authorLink: "https://www.flickr.com/photos/mwichary/"
    };
    public static APOLLO_11: ImageWithCredit = {
        title: "One small step for man",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Buzz_Aldrin_by_Neil_Armstrong.jpg/250px-Buzz_Aldrin_by_Neil_Armstrong.jpg",
        creditLicense: CreditLicenses.PUBLIC_DOMAIN,
    };
    public static KICKAROUND: ImageWithCredit = {
        title: "Kickaround",
        creditTitle: "Football in a park",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Soccer_ball_%2820174935849%29.jpg/330px-Soccer_ball_%2820174935849%29.jpg",
        creditLicense: CreditLicenses.CREATIVE_COMMONS_2_0,
        author: "J Dimas",
        authorLink: "https://www.flickr.com/people/126731325@N08"
    };
    public static MARTIN_LUTHER_KING_JR: ImageWithCredit = {
        title: "I had a dream",
        creditTitle: "Martin Luther King Jr.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/archive/8/8b/20250207193832%21Martin_Luther_King_Jr_National_Historic_Site_%2836233249121%29.jpg/120px-Martin_Luther_King_Jr_National_Historic_Site_%2836233249121%29.jpg",
        creditLicense: CreditLicenses.CREATIVE_COMMONS_2_0,
        author: "National Park Service",
        authorLink: "https://www.flickr.com/people/42600860@N02"
    };
    public static TO_KILL_A_MOCKINGBIRD: ImageWithCredit = {
        title: "Until I feared I would lose it, I never loved to read",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/500px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg",
        creditLicense: CreditLicenses.PUBLIC_DOMAIN,
    };
    public static HAMLET: ImageWithCredit = {
        title: "To be or not to be",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a8/HamletSkullHCSealous.jpg",
        creditLicense: CreditLicenses.PUBLIC_DOMAIN,
    };
    public static ALL_CREDITS: ImageWithCredit[] = [
        ImagesWithCredits.THE_MATRIX,
        ImagesWithCredits.APOLLO_11,
        ImagesWithCredits.KICKAROUND,
        ImagesWithCredits.MARTIN_LUTHER_KING_JR,
        ImagesWithCredits.TO_KILL_A_MOCKINGBIRD,
        ImagesWithCredits.HAMLET
    ].filter(credit => credit.creditLicense !== CreditLicenses.PUBLIC_DOMAIN);
}