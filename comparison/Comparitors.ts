import { ImagesWithCredits } from "@/Credits/Credits";
import { TimeComparison } from "./TimeComparison";
import { TimeUnit } from "./TimeComparison";

// TODO: provide accreditation for images used.
export function allComparitors() {
    return [
        new TimeComparison(
            ImagesWithCredits.THE_MATRIX,
            (dur) => `It takes ${dur} to watch The Matrix.`,
            (freq) => `you could have watched The Matrix ${freq} times.`,
            TimeUnit.Minutes,
            136),
        new TimeComparison(
            ImagesWithCredits.APOLLO_11,
            (dur) => `It took ${dur} for Apollo 11 to reach the moon.`,
            (freq) => `Apollo 11 could have made ${freq} trips to the moon.`,
            TimeUnit.Days,
            4),
        new TimeComparison(
            ImagesWithCredits.FOOTBALL_MATCH,
            (dur) => `It takes ${dur} to play a football match.`,
            (freq) => `you could have played ${freq} football matches.`,
            TimeUnit.Minutes,
            90),
        // https://en.wikipedia.org/wiki/File:Martin_Luther_King_Jr_National_Historic_Site_(36233249121).jpg
        new TimeComparison(
            ImagesWithCredits.MARTIN_LUTHER_KING_JR,
            (dur) => `It took ${dur} for Martin Luther King Jr. to deliver the iconic "I have a dream" speech.`,
            (freq) => `you could have made ${freq} similar speeches.`,
            TimeUnit.Minutes,
            17),
        new TimeComparison(
            ImagesWithCredits.TO_KILL_A_MOCKINGBIRD,
            (dur) => `It takes ${dur} to read 'To Kill a Mockingbird'.`,
            (freq) => `you could have read 'To Kill a Mockingbird' ${freq} times.`,
            TimeUnit.Hours,
            5.5),
    ];
}