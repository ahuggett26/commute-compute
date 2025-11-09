import { HistoricalTimeComparison } from "./TimeComparison/HistoricalTimeComparison";
import { TaskTimeComparison } from "./TimeComparison/TaskTimeComparison";
import { TimeUnit } from "./TimeComparison/TimeComparison";

export function allComparitors() {
    return [
        new TaskTimeComparison("watch The Matrix", TimeUnit.Minutes, 136),
        new HistoricalTimeComparison("Apollo 11", "reached the moon", TimeUnit.Days, 4),
        new TaskTimeComparison("play a football match", TimeUnit.Minutes, 90, "play XXX football matches"),
        new HistoricalTimeComparison("Martin Luther King Jr.", "delivered his 'I Have a Dream' speech", TimeUnit.Minutes, 17),
        new TaskTimeComparison("read 'To Kill a Mockingbird'", TimeUnit.Hours, 5.5),
    ];
}