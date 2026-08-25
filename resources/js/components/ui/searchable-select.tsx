import * as React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from '@/components/ui/command';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';

export type SearchableSelectOption = {
    id: number | string;
    label: string;
    isAvailable?: boolean;
    activeStatus?: string | null;
    vendorId?: number | null;
    driverId?: number | null;
    isRecommended?: boolean;
    recommendedBadge?: string;
};

type SearchableSelectProps = {
    name?: string;
    options: SearchableSelectOption[];
    value: string;
    onValueChange: (value: string) => void;
    placeholder?: string;
    searchPlaceholder?: string;
    emptyText?: string;
    disabled?: boolean;
    className?: string;
    id?: string;
    'aria-invalid'?: boolean;
};

export function SearchableSelect({
    name,
    options,
    value,
    onValueChange,
    placeholder = 'Select option...',
    searchPlaceholder = 'Search...',
    emptyText = 'No results found.',
    disabled = false,
    className,
    id,
    'aria-invalid': ariaInvalid,
}: SearchableSelectProps) {
    const [open, setOpen] = React.useState(false);

    // Sort options: recommended items first, then available items, then unavailable items
    const sortedOptions = React.useMemo(() => {
        return [...options].sort((a, b) => {
            const recA = a.isRecommended ? 0 : 1;
            const recB = b.isRecommended ? 0 : 1;
            if (recA !== recB) return recA - recB;

            const availA = a.isAvailable !== false ? 0 : 1;
            const availB = b.isAvailable !== false ? 0 : 1;
            if (availA !== availB) return availA - availB;
            return a.label.localeCompare(b.label);
        });
    }, [options]);

    const selectedOption = options.find((opt) => String(opt.id) === String(value));

    return (
        <div className="relative w-full">
            {name && <input type="hidden" name={name} value={value} />}
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        id={id}
                        type="button"
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        aria-invalid={ariaInvalid}
                        disabled={disabled}
                        className={cn(
                            'w-full justify-between font-normal border-input hover:bg-accent/50',
                            !selectedOption && 'text-muted-foreground',
                            ariaInvalid && 'border-destructive ring-destructive/20',
                            className
                        )}
                    >
                        <span className="truncate">
                            {selectedOption ? selectedOption.label : placeholder}
                        </span>
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[--radix-popover-trigger-width] p-0" align="start">
                    <Command>
                        <CommandInput placeholder={searchPlaceholder} />
                        <CommandList>
                            <CommandEmpty>{emptyText}</CommandEmpty>
                            <CommandGroup>
                                {sortedOptions.map((option) => {
                                    const isDisabled = option.isAvailable === false;
                                    const isSelected = String(option.id) === String(value);

                                    return (
                                        <CommandItem
                                            key={option.id}
                                            value={`${option.label} ${option.id}`}
                                            disabled={isDisabled}
                                            onSelect={() => {
                                                if (isDisabled) return;
                                                onValueChange(String(option.id));
                                                setOpen(false);
                                            }}
                                            className={cn(
                                                'flex items-center justify-between gap-2 cursor-pointer',
                                                isDisabled && 'opacity-60 cursor-not-allowed bg-muted/30'
                                            )}
                                        >
                                            <div className="flex items-center gap-2 truncate">
                                                <Check
                                                    className={cn(
                                                        'h-4 w-4 shrink-0',
                                                        isSelected ? 'opacity-100' : 'opacity-0'
                                                    )}
                                                />
                                                <span className="truncate">{option.label}</span>
                                            </div>
                                            <div className="flex items-center gap-2 shrink-0">
                                                {option.isRecommended && option.recommendedBadge && (
                                                    <Badge
                                                        variant="outline"
                                                        className="text-[10px] py-0 px-1.5 bg-blue-50 text-blue-700 border-blue-300 font-medium shrink-0"
                                                    >
                                                        {option.recommendedBadge}
                                                    </Badge>
                                                )}
                                                {option.activeStatus && (
                                                    <Badge
                                                        variant="outline"
                                                        className="text-[10px] py-0 px-1.5 bg-amber-50 text-amber-700 border-amber-300 capitalize shrink-0"
                                                    >
                                                        {option.activeStatus}
                                                    </Badge>
                                                )}
                                            </div>
                                        </CommandItem>
                                    );
                                })}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        </div>
    );
}
