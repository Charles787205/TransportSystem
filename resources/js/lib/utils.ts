import type { InertiaLinkProps } from '@inertiajs/react';
import { clsx } from 'clsx';
import type { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function toUrl(url: NonNullable<InertiaLinkProps['href']>): string {
    return typeof url === 'string' ? url : url.url;
}

/**
 * Safely parse a date/time string, normalizing SQL (space) and ISO formats.
 */
export function parseDate(value: string | null | undefined): Date | null {
    if (!value) {
        return null;
    }

    const trimmed = String(value).trim();
    if (!trimmed) {
        return null;
    }

    // Normalize 'YYYY-MM-DD HH:mm:ss' to 'YYYY-MM-DDTHH:mm:ss' for cross-browser parsing
    const normalized = trimmed.includes(' ') && !trimmed.includes('T')
        ? trimmed.replace(' ', 'T')
        : trimmed;

    const date = new Date(normalized);
    if (!isNaN(date.getTime())) {
        return date;
    }

    return null;
}

/**
 * Formats a date string (e.g. "2026-09-21") into "Sep 21, 2026".
 */
export function formatDate(value: string | null | undefined, fallback: string = '—'): string {
    const date = parseDate(value);
    if (!date) {
        return fallback;
    }

    return date.toLocaleDateString('en-PH', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });
}

/**
 * Formats a timestamp value that may be:
 * - Full datetime: "2026-09-21 08:30:00" or "2026-09-21T08:30" -> "Sep 21, 8:30 AM"
 * - Time only: "08:30:00" or "08:30" -> "8:30 AM"
 * Never returns "Invalid Date".
 */
export function formatTime(value: string | null | undefined, fallback: string = '—'): string {
    if (!value) {
        return fallback;
    }

    const trimmed = String(value).trim();
    if (!trimmed) {
        return fallback;
    }

    // Full datetime strings (with '-' or 'T')
    if (trimmed.includes('-') || trimmed.includes('T')) {
        const date = parseDate(trimmed);
        if (date) {
            return date.toLocaleString('en-PH', {
                month: 'short',
                day: 'numeric',
                hour: 'numeric',
                minute: '2-digit',
            });
        }
    }

    // Time-only strings (e.g. "08:30" or "08:30:00")
    const parts = trimmed.split(':');
    if (parts.length >= 2) {
        const hours = Number(parts[0]);
        const minutes = Number(parts[1]);

        if (!isNaN(hours) && !isNaN(minutes)) {
            const date = new Date();
            date.setHours(hours, minutes, 0, 0);

            if (!isNaN(date.getTime())) {
                return date.toLocaleTimeString('en-PH', {
                    hour: 'numeric',
                    minute: '2-digit',
                });
            }
        }
    }

    // Fallback: try parsing as generic date
    const fallbackDate = parseDate(trimmed);
    if (fallbackDate) {
        return fallbackDate.toLocaleString('en-PH', {
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
        });
    }

    return fallback;
}

/**
 * Formats a date-time string into a short localized string, e.g. "9/21/2026, 8:30 AM".
 */
export function formatDateTime(value: string | null | undefined, fallback: string = '—'): string {
    const date = parseDate(value);
    if (!date) {
        return fallback;
    }

    return date.toLocaleString('en-PH', {
        dateStyle: 'short',
        timeStyle: 'short',
    });
}

