'use client';

import { validNoDays } from "@/validation/DateValidation";
import { validHours, validMinutes } from "@/validation/TimeValidation";
import { FormHelperText, InputAdornment, MenuItem, OutlinedInput, Select } from "@mui/material";
import { useState } from "react";

export default function QuickCalc() {
    const [freq, setFreq] = useState<'weekly' | 'monthly' | 'yearly'>('weekly');
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

    function totalTimingResults() {
        // We can assume freq, days, hours and mins are correct
        const minsPerDay = (hoursInput! * 60 + minsInput!) * 2;
        const minsPerFreq = minsPerDay * daysInput!;

        let minsPerWeek: number;
        let minsPerMonth: number;
        let minsPerYear: number;
        switch (freq) {
            case 'weekly':
                minsPerWeek = minsPerFreq;
                minsPerMonth = minsPerFreq * 4.3;
                minsPerYear = minsPerFreq * 52;
                break;
            case 'monthly':
                minsPerWeek = minsPerFreq / 4.3;
                minsPerMonth = minsPerFreq;
                minsPerYear = minsPerFreq * 12;
                break;
            case 'yearly':
                minsPerWeek = minsPerFreq / 52;
                minsPerMonth = minsPerFreq / 12;
                minsPerYear = minsPerFreq;
                break;
        }

        return (
            <div>
                <p>Your commute takes:</p>
                <ul className="list-disc list-inside">
                    <li>{Math.round(minsPerWeek)} minutes per week</li>
                    <li>{Math.round(minsPerMonth)} minutes per month</li>
                    <li>{Math.round(minsPerYear)} minutes per year</li>
                </ul>
                <p>or...</p>
                <ul className="list-disc list-inside">
                    <li>{(minsPerWeek / 60).toFixed(1)} hours per week</li>
                    <li>{(minsPerMonth / 60).toFixed(1)} hours per month</li>
                    <li>{(minsPerYear / 60).toFixed(1)} hours per year</li>
                </ul>
            </div>
        )
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
                {daysInput !== undefined && hoursInput !== undefined && minsInput !== undefined && totalTimingResults()}
            </div>
        </>
    )
}