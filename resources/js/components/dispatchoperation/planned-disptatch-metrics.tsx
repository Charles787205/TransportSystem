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

export default function PlannedDispatchMetrics() {
    return (
        <div className="grid gap-4 md:grid-cols-5">
            <Card>
                <CardHeader className="pb-2">
                    <CardTitle>Planned</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-3xl font-bold">34</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="pb-2">
                    <CardTitle>Dispatches</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-3xl font-bold">34</p>
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
                                        style={{ width: '40%' }}
                                    />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Completed: 40 / 100</p>
                                </TooltipContent>
                            </Tooltip>

                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <div
                                        className="bg-blue-500"
                                        style={{ width: '20%' }}
                                    />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Dispatched: 60 / 100</p>
                                </TooltipContent>
                            </Tooltip>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <div
                                        className="bg-neutral-200"
                                        style={{ width: '40%' }}
                                    />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Remaining: 40 / 100</p>
                                </TooltipContent>
                            </Tooltip>
                        </div>
                    </TooltipProvider>
                </CardContent>
            </Card>
        </div>
    );
}
