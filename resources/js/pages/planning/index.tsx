import { router } from '@inertiajs/react'
import { Search, ClipboardList, MapPin, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import type { BusinessUnitData } from '@/generated/Client'
import type { DestinationData } from '@/generated/Client'
import type { PaginatedPlanData } from '@/generated/Planning'
import { index } from '@/routes/planning'

const ALL = 'all'

export default function PlanningPage({
  paginatedPlans,
  businessUnits,
  destinations,
  filters,
}: {
  paginatedPlans: PaginatedPlanData
  businessUnits: BusinessUnitData[]
  destinations: DestinationData[]
  filters?: {
    search?: string
    business_unit_id?: string
  destination_id?: string
  }
}) {
  const { plans, from, to, total, links } = paginatedPlans

  const [search, setSearch] = useState(filters?.search ?? '')
  const [businessUnitId, setBusinessUnitId] = useState(
    filters?.business_unit_id ?? ALL,
  )
  const [destinationId, setDestinationId] = useState(
    filters?.destination_id ?? ALL,
  )
  const isFirstRender = useRef(true)

  const applyFilters = (next: {
    search?: string
    business_unit_id?: string
    destination_id?: string
  }) => {
    router.get(
      index().url,
      {
        search: next.search || undefined,
        business_unit_id:
          next.business_unit_id && next.business_unit_id !== ALL
            ? next.business_unit_id
            : undefined,
        destination_id:
          next.destination_id && next.destination_id !== ALL
            ? next.destination_id
            : undefined,
      },
      { preserveState: true, preserveScroll: true, replace: true },
    )
  }

  // Debounce search input only; filters apply immediately on change
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false

      return
    }

    const timeout = setTimeout(() => {
      applyFilters({
        search,
        business_unit_id: businessUnitId,
        destination_id: destinationId,
      })
    }, 350)

    return () => clearTimeout(timeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])

  const handleBusinessUnitChange = (value: string) => {
    setBusinessUnitId(value)
    applyFilters({ search, business_unit_id: value, destination_id: destinationId })
  }

  const handleDestinationChange = (value: string) => {
    setDestinationId(value)
    applyFilters({ search, business_unit_id: businessUnitId, destination_id: value })
  }

  const clearFilters = () => {
    setSearch('')
    setBusinessUnitId(ALL)
    setDestinationId(ALL)
    applyFilters({})
  }

  const hasActiveFilters =
    search || businessUnitId !== ALL || destinationId !== ALL
  console.log({
    plans: plans,
    businessUnits: businessUnits,
    destinations: destinations,
    filters: filters
  })

 

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex w-full">
        <div>
          <h1 className="text-xl font-semibold text-slate-900">Planning</h1>
          <p className="text-sm text-slate-500">
            View and manage dispatch plans across business units
          </p>
        </div>
        <Button className='ml-auto'>
          Somehitng
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
          <p className="text-sm text-slate-500">Total plans</p>
          <p className="mt-1 text-2xl font-semibold text-slate-900">
            {total}
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
          <p className="text-sm text-slate-500">Business units</p>
          <p className="mt-1 text-2xl font-semibold text-slate-900">
            {businessUnits.length}
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
          <p className="text-sm text-slate-500">Destinations</p>
          <p className="mt-1 text-2xl font-semibold text-slate-900">
            {destinations.length}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <div className="relative max-w-sm flex-1">
          <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search plans..."
            className="pl-9"
          />
        </div>

        <Select value={businessUnitId} onValueChange={handleBusinessUnitChange}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Business unit" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={ALL}>All business units</SelectItem>
            {businessUnits.map((bu) => (
              <SelectItem key={bu.id} value={String(bu.id)}>
                {bu.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={destinationId} onValueChange={handleDestinationChange}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Destination" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={ALL}>All destinations</SelectItem>
            {destinations.map((d) => (
              <SelectItem key={d.id} value={String(d.id)}>
                {d.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {hasActiveFilters && (
          <Button variant="ghost" size="sm" onClick={clearFilters}>
            <X className="h-3.5 w-3.5" />
            Clear
          </Button>
        )}
      </div>

      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50 hover:bg-gray-50">
              <TableHead className="text-xs font-medium tracking-wide text-slate-500 uppercase">
                Business Unit
              </TableHead>
              <TableHead className="text-xs font-medium tracking-wide text-slate-500 uppercase">
                Destination
              </TableHead>
              <TableHead className="text-xs font-medium tracking-wide text-slate-500 uppercase">
                Dispatch Date
              </TableHead>
              <TableHead className="text-xs font-medium tracking-wide text-slate-500 uppercase">
                Status
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {plans.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} className="py-10 text-center text-slate-400">
                  <div className="flex flex-col items-center gap-2">
                    <ClipboardList className="h-8 w-8 opacity-30" />
                    No plans found.
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              plans.map((plan) => {
                const isActive =
                  plan.businessUnit.active === 'true' ||
                  plan.businessUnit.active === '1'

                return (
                  <TableRow key={plan.id} className="border-gray-100 hover:bg-blue-50">
                    <TableCell className="font-medium text-slate-900">
                      {plan.businessUnit.name}
                    </TableCell>
                    <TableCell className="text-slate-600">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5 text-slate-400" />
                        {plan.destination.name}
                      </div>
                    </TableCell>
                    <TableCell className="text-slate-600">
                     "dispatch  "
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={isActive ? 'default' : 'secondary'}
                        className={
                          isActive
                            ? 'border-transparent bg-emerald-100 text-emerald-700'
                            : 'border-transparent bg-slate-100 text-slate-500'
                        }
                      >
                        {isActive ? 'Active' : 'Inactive'}
                      </Badge>
                    </TableCell>
                  </TableRow>
                )
              })
            )}
          </TableBody>
        </Table>
      </div>

      {plans.length > 0 && (
        <div className="flex items-center justify-between">
          <p className="text-sm text-slate-500">
            Showing <span className="font-medium text-slate-900">{from}</span>–
            <span className="font-medium text-slate-900">{to}</span> of{' '}
            <span className="font-medium text-slate-900">{total}</span>
          </p>

          <Pagination className="mx-0 w-auto">
            <PaginationContent>
              {links.map((link, index) => {
                const isPrev = link.label?.includes('Previous')
                const isNext = link.label?.includes('Next')
                const isEllipsis = link.label === '...'

                if (isEllipsis) {
                  return (
                    <PaginationItem key={index}>
                      <PaginationEllipsis />
                    </PaginationItem>
                  )
                }

                const go = (e: React.MouseEvent) => {
                  e.preventDefault()

                  if (link.url) {
router.visit(link.url, { preserveScroll: true })
}
                }

                if (isPrev) {
                  return (
                    <PaginationItem key={index}>
                      <PaginationPrevious
                        href={link.url ?? '#'}
                        className={!link.url ? 'pointer-events-none opacity-40' : ''}
                        onClick={go}
                      />
                    </PaginationItem>
                  )
                }

                if (isNext) {
                  return (
                    <PaginationItem key={index}>
                      <PaginationNext
                        href={link.url ?? '#'}
                        className={!link.url ? 'pointer-events-none opacity-40' : ''}
                        onClick={go}
                      />
                    </PaginationItem>
                  )
                }

                return (
                  <PaginationItem key={index}>
                    <PaginationLink
                      href={link.url ?? '#'}
                      isActive={!!link.active}
                      onClick={go}
                    >
                      {link.label}
                    </PaginationLink>
                  </PaginationItem>
                )
              })}
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  )
}