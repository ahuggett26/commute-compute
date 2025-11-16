'use client';

import ComparisonOutput from "@/comparison/ComparisonOutput";
import { validNoDays } from "@/validation/DateValidation";
import { validHours, validMinutes } from "@/validation/TimeValidation";
import { Divider, FormHelperText, InputAdornment, MenuItem, OutlinedInput, Select, Typography } from "@mui/material";
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
            <Typography variant="h4" className="pb-4">Quick Calculate</Typography>
            <div className="py-4">
                <Typography>How often do you commute to work?</Typography>
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
                <Typography>How long is your commute?</Typography>
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

            <Divider variant="middle" className="pt-5" />

            <div className="pt-5">
                <Typography variant="h5" className="pb-4">Results</Typography>
                {daysInput !== undefined && hoursInput !== undefined && minsInput !== undefined && (
                    <>
                        <Typography className="inline pe-2">View results over a</Typography>
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