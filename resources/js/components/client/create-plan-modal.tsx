import { usePage } from "@inertiajs/react"
import { Form } from "@inertiajs/react"
import { format } from "date-fns"
import { Check, ChevronsUpDown, CalendarIcon } from "lucide-react"
import { useState } from "react"
import type { BusinessUnitData, DestinationData } from "@/generated/Client"

// Adjust this import to your actual Wayfinder-generated action,
// e.g. Modules\Planning\Http\Controllers\PlanController::store

import { cn } from "@/lib/utils"
import { store as storePlan } from "@/routes/planning"

import InputError from "../input-error"
import { Button } from "../ui/button"
import { Calendar } from "../ui/calendar"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
  DialogClose
} from "../ui/dialog"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../ui/popover"


const CreatePlanModal = () => {
  const { businessUnits, destinations } = usePage<{
    businessUnits: BusinessUnitData[]
    destinations: DestinationData[]
  }>().props

  const [businessUnitId, setBusinessUnitId] = useState<number | null>(null)
  const [businessUnitOpen, setBusinessUnitOpen] = useState(false)

  const [destinationId, setDestinationId] = useState<number | null>(null)
  const [destinationOpen, setDestinationOpen] = useState(false)

  const [dispatchDate, setDispatchDate] = useState<Date | undefined>()
  const [dateOpen, setDateOpen] = useState(false)

  const selectedBusinessUnit = businessUnits.find((b) => b.id === businessUnitId)
  const selectedDestination = destinations.find((d) => d.id === destinationId)
   const [open, setOpen] = useState(false)

  return (
    <Dialog open={open}  onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className='ml-auto'>
          Add Plan
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Create Plan</DialogTitle>
          <DialogDescription>
            Assign a business unit, destination, and vehicles for this plan.
          </DialogDescription>
        </DialogHeader>

        <Form
          {...storePlan.form()}
          onSuccess={() => setOpen(false)}
          resetOnSuccess
          className="space-y-4"
        >
          {({ errors, processing }) => (
            <>
              {/* Business Unit combobox */}
              <div className="grid gap-2">
                <Label htmlFor="business_unit_id">Business Unit</Label>
                <Popover open={businessUnitOpen} onOpenChange={setBusinessUnitOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={businessUnitOpen}
                      data-invalid={!!errors.business_unit_id}
                      aria-invalid={!!errors.business_unit_id}
                      className="w-full justify-between font-normal"
                    >
                      {selectedBusinessUnit ? selectedBusinessUnit.name : "Select business unit..."}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
                    <Command>
                      <CommandInput placeholder="Search business units..." />
                      <CommandList>
                        <CommandEmpty>No business unit found.</CommandEmpty>
                        <CommandGroup>
                          {businessUnits.map((unit) => (
                            <CommandItem
                              key={unit.id}
                              value={unit.name}
                              onSelect={() => {
                                setBusinessUnitId(unit.id)
                                setBusinessUnitOpen(false)
                              }}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  businessUnitId === unit.id ? "opacity-100" : "opacity-0"
                                )}
                              />
                              {unit.name}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
                <input type="hidden" name="business_unit_id" value={businessUnitId ?? ""} />
                <InputError message={errors.business_unit_id} />
              </div>

              {/* Destination combobox */}
              <div className="grid gap-2">
                <Label htmlFor="destination_id">Destination</Label>
                <Popover open={destinationOpen} onOpenChange={setDestinationOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={destinationOpen}
                      data-invalid={!!errors.destination_id}
                      aria-invalid={!!errors.destination_id}
                      className="w-full justify-between font-normal"
                    >
                      {selectedDestination ? selectedDestination.name : "Select destination..."}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
                    <Command>
                      <CommandInput placeholder="Search destinations..." />
                      <CommandList>
                        <CommandEmpty>No destination found.</CommandEmpty>
                        <CommandGroup>
                          {destinations.map((dest) => (
                            <CommandItem
                              key={dest.id}
                              value={dest.name}
                              onSelect={() => {
                                setDestinationId(dest.id)
                                setDestinationOpen(false)
                              }}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  destinationId === dest.id ? "opacity-100" : "opacity-0"
                                )}
                              />
                              {dest.name}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
                <input type="hidden" name="destination_id" value={destinationId ?? ""} />
                <InputError message={errors.destination_id} />
              </div>

              {/* Number of vehicles */}
              <div className="grid gap-2">
                <Label htmlFor="number_of_vehicles">Number of Vehicles</Label>
                <Input
                  id="number_of_vehicles"
                  name="number_of_vehicles"
                  type="number"
                  min={1}
                  data-invalid={!!errors.number_of_vehicles}
                  aria-invalid={!!errors.number_of_vehicles}
                />
                <InputError message={errors.number_of_vehicles} />
              </div>

              {/* Dispatch date */}
              <div className="grid gap-2">
                <Label htmlFor="dispatch_date">Dispatch Date</Label>
                <Popover open={dateOpen} onOpenChange={setDateOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      data-invalid={!!errors.dispatch_date}
                      aria-invalid={!!errors.dispatch_date}
                      className={cn(
                        "w-full justify-start font-normal",
                        !dispatchDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {dispatchDate ? format(dispatchDate, "PPP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={dispatchDate}
                      onSelect={(date) => {
                        setDispatchDate(date)
                        setDateOpen(false)
                      }}
                      
                    />
                  </PopoverContent>
                </Popover>
                <input
                  type="hidden"
                  name="dispatch_date"
                  value={dispatchDate ? format(dispatchDate, "yyyy-MM-dd") : ""}
                />
                <InputError message={errors.dispatch_date} />
              </div>

              <DialogFooter>
                <DialogClose>
                  Cancel
                </DialogClose>
                <Button type="submit" disabled={processing} className="bg-blue-800 hover:bg-blue-900">
                  {processing ? "Creating..." : "Create Plan"}
                </Button>
              </DialogFooter>
            </>
          )}
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default CreatePlanModal