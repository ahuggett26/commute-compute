'use client';

import ComparisonOutput from "@/comparison/ComparisonOutput";
import { validNoDays } from "@/validation/DateValidation";
import { validHours, validMinutes } from "@/validation/TimeValidation";
import { FormHelperText, InputAdornment, MenuItem, OutlinedInput, Select } from "@mui/material";
import { useState } from "react";

export default function QuickCalc() {
    const [freq, setFreq] = useState<'weekly' | 'monthly' | 'yearly'>('weekly');
    const [outputFreq, setOutputFreq] = useState<'week' | 'month' | 'year'>('year');
    const [daysInput, setDaysInput] = useState<number>();
    const [hoursInput, setHoursInput] = useState<number>();
    const [minsInput, setMinsInput] = useState<number>();

    const [daysValidation, setDaysValidation] = useState<string>();
    const [hoursValidation, setHoursValidation] = useState<string>();
    const [minsValidation, setMinsValidation] = useState<string>();

    function validateInput(
        value: string,
        validationFunc: () => string,
        setValidationUI: (val: string) => void,
        setInputVal: (val: number) => void
    ) {
        const validationResult = validationFunc();
        setValidationUI(validationResult);
        if (validationResult.length === 0) {
            setInputVal(Number(value));
        }
    }

    return (
        <>
            <h2 className="text-2xl font-semi-bold underline pb-4">Quick Calculate</h2>
            <div className="py-4">
                <p>How often do you commute to work?</p>
                <OutlinedInput
                    id="DaysInput"
                    slotProps={{ input: { inputMode: 'numeric', pattern: '[0-9]*' } }}
                    error={daysValidation !== undefined && daysValidation.length > 0}
                    onChange={(e) => validateInput(e.target.value, () => validNoDays(e.target.value, freq), setDaysValidation, setDaysInput)}
                    endAdornment={<InputAdornment position="end">days</InputAdornment>} />
                <Select value={freq} onChange={(e) => setFreq(e.target.value)}>
                    <MenuItem value={'weekly'}>per week</MenuItem>
                    <MenuItem value={'monthly'}>per month</MenuItem>
                    <MenuItem value={'yearly'}>per year</MenuItem>
                </Select>
                <FormHelperText error={true}>{daysValidation}</FormHelperText>
            </div>
            <div className="py-4">
                <p>How long is your commute?</p>
                <OutlinedInput
                    id="HoursInput"
                    slotProps={{ input: { inputMode: 'numeric', pattern: '[0-9]*' } }}
                    error={hoursValidation !== undefined && hoursValidation.length > 0}
                    onChange={(e) => validateInput(e.target.value, () => validHours(e.target.value), setHoursValidation, setHoursInput)}
                    endAdornment={<InputAdornment position="end">hrs</InputAdornment>} />
                <OutlinedInput
                    id="MinsInput"
                    slotProps={{ input: { inputMode: 'numeric', pattern: '[0-9]*' } }}
                    error={minsValidation !== undefined && minsValidation.length > 0}
                    onChange={(e) => validateInput(e.target.value, () => validMinutes(e.target.value), setMinsValidation, setMinsInput)}
                    endAdornment={<InputAdornment position="end">mins</InputAdornment>} />
                <FormHelperText error={true}>{hoursValidation}</FormHelperText>
                <FormHelperText error={true}>{minsValidation}</FormHelperText>
            </div>

            <div className="pt-10">
                <h3 className="text-xl font-semi-bold underline pb-4">Results</h3>
                {daysInput !== undefined && hoursInput !== undefined && minsInput !== undefined && (
                    <>
                        <p className="inline pe-2">View results over a</p>
                        <Select value={outputFreq} onChange={(e) => setOutputFreq(e.target.value)}>
                            <MenuItem value={'week'}>week</MenuItem>
                            <MenuItem value={'month'}>month</MenuItem>
                            <MenuItem value={'year'}>year</MenuItem>
                        </Select>

                        <ComparisonOutput
                            totalHours={hoursInput}
                            totalMinutes={minsInput}
                            daysPerPeriod={daysInput}
                            inputFreq={freq}
                            outputFreq={outputFreq} />
                    </>
                )}
            </div>
        </>
    )
}