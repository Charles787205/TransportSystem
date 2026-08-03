import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

import {
    TooltipProvider,
    Tooltip,
    TooltipTrigger,
    TooltipContent,
} from '../ui/tooltip';

export type DispatchMetrics = {
    planned: number;
    completed: number;
    dispatched: number;
    remaining: number;
    unplanned: number;
};

export default function PlannedDispatchMetrics({ metrics }: { metrics: DispatchMetrics }) {
    const total = metrics.planned || 1; // Prevent division by zero
    const completedPct = (metrics.completed / total) * 100;
    
    // Active planned is dispatches matching plans that are not completed (remaining are not yet dispatched)
    const activePlanned = Math.max(0, metrics.planned - metrics.completed - metrics.remaining);
    const activePlannedPct = (activePlanned / total) * 100;
    const remainingPct = (metrics.remaining / total) * 100;
    console.log(metrics);

    return (
        <div className="grid gap-4 md:grid-cols-6">
            <Card>
                <CardHeader className="pb-2">
                    <CardTitle>Planned</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-3xl font-bold">{metrics.planned}</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="pb-2">
                    <CardTitle>Dispatched</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-3xl font-bold">{metrics.dispatched}</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="pb-2">
                    <CardTitle>Unplanned</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-3xl font-bold">{metrics.unplanned}</p>
                </CardContent>
            </Card>

            <Card className="col-span-3">
                <CardHeader>
                    <CardTitle>Dispatch Status</CardTitle>
                    <CardDescription>
                        Current planned dispatches
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <TooltipProvider>
                        <div className="flex h-3 w-full overflow-hidden rounded-full bg-muted">
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <div
                                        className="bg-green-500"
                                        style={{ width: `${completedPct}%` }}
                                    />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Completed: {metrics.completed} / {metrics.planned}</p>
                                </TooltipContent>
                            </Tooltip>

                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <div
                                        className="bg-blue-500"
                                        style={{ width: `${activePlannedPct}%` }}
                                    />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Active: {activePlanned} / {metrics.planned}</p>
                                </TooltipContent>
                            </Tooltip>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <div
                                        className="bg-neutral-200"
                                        style={{ width: `${remainingPct}%` }}
                                    />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Remaining: {metrics.remaining} / {metrics.planned}</p>
                                </TooltipContent>
                            </Tooltip>
                        </div>
                    </TooltipProvider>
                </CardContent>
            </Card>
        </div>
    );
}
