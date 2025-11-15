import { TimeComparison } from "./TimeComparison";
import { TimeUnit } from "./TimeComparison";

// TODO: provide accreditation for images used.
export function allComparitors() {
    return [
        // https://commons.wikimedia.org/wiki/File:Smith_Matrix_mannequins_(cropped).jpg
        new TimeComparison(
            "The Matrix",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Smith_Matrix_mannequins_%28cropped%29.jpg/960px-Smith_Matrix_mannequins_%28cropped%29.jpg?20190214095020",
            (dur) => `It takes ${dur} to watch The Matrix.`,
            (freq) => `you could have watched The Matrix ${freq} times.`,
            TimeUnit.Minutes,
            136),
        // https://commons.wikimedia.org/wiki/File:Buzz_Aldrin_by_Neil_Armstrong.jpg
        new TimeComparison(
            "Apollo 11",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Buzz_Aldrin_by_Neil_Armstrong.jpg/960px-Buzz_Aldrin_by_Neil_Armstrong.jpg?20190414141141",
            (dur) => `It took ${dur} for Apollo 11 to reach the moon.`,
            (freq) => `Apollo 11 could have made ${freq} trips to the moon.`,
            TimeUnit.Days,
            4),
        // https://commons.wikimedia.org/wiki/File:Soccer_ball_(20174935849).jpg
        new TimeComparison(
            "Football match",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Soccer_ball_%2820174935849%29.jpg/960px-Soccer_ball_%2820174935849%29.jpg?20250130173924",
            (dur) => `It takes ${dur} to play a football match.`,
            (freq) => `you could have played ${freq} football matches.`,
            TimeUnit.Minutes,
            90),
        // https://en.wikipedia.org/wiki/File:Martin_Luther_King_Jr_National_Historic_Site_(36233249121).jpg
        new TimeComparison(
            "I had a dream",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/archive/8/8b/20250207193832%21Martin_Luther_King_Jr_National_Historic_Site_%2836233249121%29.jpg/120px-Martin_Luther_King_Jr_National_Historic_Site_%2836233249121%29.jpg",
            (dur) => `It took ${dur} for Martin Luther King Jr. to deliver the iconic "I have a dream" speech.`,
            (freq) => `you could have made ${freq} similar speeches.`,
            TimeUnit.Minutes,
            17),
        // https://commons.wikimedia.org/wiki/File:To_Kill_a_Mockingbird_(first_edition_cover).jpg
        new TimeComparison(
            "To kill a mockingbird",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/500px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg?20190729060537",
            (dur) => `It takes ${dur} to read 'To Kill a Mockingbird'.`,
            (freq) => `you could have read 'To Kill a Mockingbird' ${freq} times.`,
            TimeUnit.Hours,
            5.5),
    ];
}