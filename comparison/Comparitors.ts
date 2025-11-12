import { HistoricalTimeComparison } from "./TimeComparison/HistoricalTimeComparison";
import { TaskTimeComparison } from "./TimeComparison/TaskTimeComparison";
import { TimeUnit } from "./TimeComparison/TimeComparison";

export function allComparitors() {
    return [
        new TaskTimeComparison("The Matrix", "watch The Matrix", TimeUnit.Minutes, 136),
        new HistoricalTimeComparison("Apollo 11", "Apollo 11", "reached the moon", TimeUnit.Days, 4),
        new TaskTimeComparison("Football match", "play a football match", TimeUnit.Minutes, 90, "play XXX football matches"),
        new HistoricalTimeComparison("I had a dream", "Martin Luther King Jr.", "delivered his 'I Have a Dream' speech", TimeUnit.Minutes, 17),
        new TaskTimeComparison("To kill a mockingbird", "read 'To Kill a Mockingbird'", TimeUnit.Hours, 5.5),
    ];
}