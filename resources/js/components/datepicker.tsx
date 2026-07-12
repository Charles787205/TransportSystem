import { format } from 'date-fns';
import { useState } from 'react';
import InputError from './input-error';
import { Button } from './ui/button';
import { Calendar } from './ui/calendar';
import { Calendar as CalendarIcon } from "lucide-react"
import { Field, FieldLabel } from './ui/field';
import { Popover, PopoverTrigger, PopoverContent } from './ui/popover';
const DatePicker = ({
    name,
    label,
    error,
}: {
    name: string;
    label: string;
    error: string;
}) => {
    const [date, setDate] = useState<Date | undefined>();

    return (
        <Field className="">
            <FieldLabel htmlFor={`date-picker-${name}`}>{label}</FieldLabel>
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        id={`date-picker-${name}`}
                        className="justify-start font-normal"
                    >
                        {date ? format(date, 'PPP') : 'Pick a date'}
                    <CalendarIcon className='ml-auto'/>
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        captionLayout="dropdown"
                        endMonth={new Date(2100,11)}
                    />
                </PopoverContent>
            </Popover>
            {date && (
                <input
                    type="hidden"
                    name={name}
                    value={format(date, 'yyyy-MM-dd')}
                />
            )}
            <InputError message={error} />
        </Field>
    );
};

export default DatePicker;
