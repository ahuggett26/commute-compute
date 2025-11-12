import { HistoricalTimeComparison } from "./TimeComparison/HistoricalTimeComparison";
import { TaskTimeComparison } from "./TimeComparison/TaskTimeComparison";
import { TimeUnit } from "./TimeComparison/TimeComparison";

// TODO: provide accreditation for images used.
export function allComparitors() {
    return [
        // https://commons.wikimedia.org/wiki/File:Smith_Matrix_mannequins_(cropped).jpg
        new TaskTimeComparison(
            "The Matrix", 
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Smith_Matrix_mannequins_%28cropped%29.jpg/960px-Smith_Matrix_mannequins_%28cropped%29.jpg?20190214095020",
            "watch The Matrix", 
            TimeUnit.Minutes, 
            136),
        // https://commons.wikimedia.org/wiki/File:Buzz_Aldrin_by_Neil_Armstrong.jpg
        new HistoricalTimeComparison(
            "Apollo 11", 
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Buzz_Aldrin_by_Neil_Armstrong.jpg/960px-Buzz_Aldrin_by_Neil_Armstrong.jpg?20190414141141",
            "Apollo 11", 
            "reached the moon", 
            TimeUnit.Days, 
            4),
        // https://commons.wikimedia.org/wiki/File:Soccer_ball_(20174935849).jpg
        new TaskTimeComparison(
            "Football match", 
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Soccer_ball_%2820174935849%29.jpg/960px-Soccer_ball_%2820174935849%29.jpg?20250130173924",
            "play a football match", 
            TimeUnit.Minutes, 
            90, 
            "play XXX football matches"),
        // https://en.wikipedia.org/wiki/File:Martin_Luther_King_Jr_National_Historic_Site_(36233249121).jpg
        new HistoricalTimeComparison(
            "I had a dream",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/archive/8/8b/20250207193832%21Martin_Luther_King_Jr_National_Historic_Site_%2836233249121%29.jpg/120px-Martin_Luther_King_Jr_National_Historic_Site_%2836233249121%29.jpg", 
            "Martin Luther King Jr.", 
            "delivered his 'I Have a Dream' speech", 
            TimeUnit.Minutes, 
            17),
        // https://commons.wikimedia.org/wiki/File:To_Kill_a_Mockingbird_(first_edition_cover).jpg
        new TaskTimeComparison(
            "To kill a mockingbird",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/500px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg?20190729060537",
            "read 'To Kill a Mockingbird'",
             TimeUnit.Hours, 
             5.5),
    ];
}