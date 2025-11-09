import { HistoricalTimeComparison } from "./TimeComparison/HistoricalTimeComparison";
import { TaskTimeComparison } from "./TimeComparison/TaskTimeComparison";
import { TimeUnit } from "./TimeComparison/TimeComparison";

export function allComparitors() {
    return [
        new TaskTimeComparison("watch The Matrix", TimeUnit.Minutes, 136),
        new HistoricalTimeComparison("Apollo 11", "reached the moon", TimeUnit.Days, 4),
    ];
}