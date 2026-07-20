import { usePage } from "@inertiajs/react"
import { format } from "date-fns"
import { Truck, MapPin, Calendar, User } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from "recharts"

// TODO: swap for the generated DispatchData once the backend DTO exists
interface DispatchData {
  id: number
  vehicleId: number
  driverId: number
  businessUnitId: number
  destinationId: number
  serviceType: string
  dispatchDate: string
  assignedCallTime: string
  linehaulTripNo: number
  odometerStart: number
  odometerEnd: number
  vehicle?: { plateNumber: string }
  driver?: { name: string }
}

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
  
} from "@/components/ui/chart"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import type { PlanData } from "@/generated/Planning"
import type { PlanWithBUandDestinationData } from "@/generated/Planning"

const chartConfig = {
  count: {
    label: "Vehicles",
    color: "hsl(var(--chart-1))",
  },
} 

const PlanningDetailPage = ({ plan }: { plan: PlanWithBUandDestinationData }) => {
  const { dispatches } = usePage<{ dispatches: DispatchData[] }>().props
  console.log(plan)
  // Dispatches that actually belong to this plan (same BU, destination, date)
  const matchingDispatches = dispatches?.filter(
  (d) =>
      d.businessUnitId === plan.businessUnitId &&
      d.destinationId === plan.destinationId &&
      d.dispatchDate === plan.dispatchDate
  )

  const dispatchedCount = matchingDispatches.length
  const requiredCount = plan.numberOfVehicles
  const fulfilled = dispatchedCount >= requiredCount
  const progressPct = Math.min((dispatchedCount / requiredCount) * 100, 100)

  const chartData = [
    { label: "Required", count: requiredCount },
    { label: "Dispatched", count: dispatchedCount },
  ]

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Plan Detail</h1>
          <p className="text-muted-foreground text-sm">
            Overview of dispatch coverage for this plan
          </p>
        </div>
        <Badge
          variant={fulfilled ? "default" : "destructive"}
          className={fulfilled ? "bg-blue-800 hover:bg-blue-800" : ""}
        >
          {fulfilled ? "Fully Dispatched" : "Understaffed"}
        </Badge>
      </div>

      {/* Plan overview cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Business Unit
            </CardTitle>
            <Truck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            {/* TODO: swap for plan.businessUnit?.name once relation is included in the DTO */}
            <div className="text-lg font-semibold">#{plan.businessUnit.name}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Destination
            </CardTitle>
            <MapPin className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            {/* TODO: swap for plan.destination?.name once relation is included in the DTO */}
            <div className="text-lg font-semibold">#{plan.destination.name}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Dispatch Date
            </CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-lg font-semibold">
              {format(new Date(plan.dispatchDate), "PPP")}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Vehicle coverage progress */}
      <Card>
        <CardHeader>
          <CardTitle>Vehicle Coverage</CardTitle>
          <CardDescription>
            {dispatchedCount} of {requiredCount} required vehicles dispatched
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <Progress
            value={progressPct}
            className={fulfilled ? "[&>div]:bg-blue-800" : "[&>div]:bg-amber-500"}
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>{dispatchedCount} dispatched</span>
            <span>{requiredCount} needed</span>
          </div>
        </CardContent>
      </Card>

      {/* Chart comparing dispatched vs required */}
      <Card>
        <CardHeader>
          <CardTitle>Dispatched vs Required</CardTitle>
          <CardDescription>Vehicle count comparison for this plan</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[220px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis dataKey="label" tickLine={false} axisLine={false} />
                <YAxis allowDecimals={false} tickLine={false} axisLine={false} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="count" fill="var(--color-count)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <Separator />

      {/* Dispatch list */}
      <Card>
        <CardHeader>
          <CardTitle>Dispatches</CardTitle>
          <CardDescription>
            Vehicles assigned to this business unit, destination, and date
          </CardDescription>
        </CardHeader>
        <CardContent>
          {matchingDispatches.length === 0 ? (
            <p className="text-sm text-muted-foreground py-8 text-center">
              No dispatches recorded yet for this plan.
            </p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Vehicle</TableHead>
                  <TableHead>Driver</TableHead>
                  <TableHead>Service Type</TableHead>
                  <TableHead>Call Time</TableHead>
                  <TableHead>Trip No.</TableHead>
                  <TableHead className="text-right">Odometer (Start / End)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {matchingDispatches.map((dispatch) => (
                  <TableRow key={dispatch.id}>
                    <TableCell className="font-medium">
                      {dispatch.vehicle?.plateNumber ?? `#${dispatch.vehicleId}`}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1.5">
                        <User className="h-3.5 w-3.5 text-muted-foreground" />
                        {dispatch.driver?.name ?? `#${dispatch.driverId}`}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary">{dispatch.serviceType}</Badge>
                    </TableCell>
                    <TableCell>{dispatch.assignedCallTime}</TableCell>
                    <TableCell>{dispatch.linehaulTripNo}</TableCell>
                    <TableCell className="text-right">
                      {dispatch.odometerStart} / {dispatch.odometerEnd}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export default PlanningDetailPage