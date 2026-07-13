import { router } from '@inertiajs/react'
import { Search, Building2, MapPin } from 'lucide-react'

import {  show } from '@/actions/Modules/Client/Http/Controllers/ClientBusinessUnitController';
import CreateBusinessUnitModal from '@/components/client/create-bu-modal';
import { Badge } from '@/components/ui/badge'

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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import type { PaginatedBusinessUnitData } from '@/generated/Client'
export default function BusinessUnitsPage({
  clientId,
  businessUnits,
}: {
  clientId: number,
  businessUnits: PaginatedBusinessUnitData
}) {
  const { data, from, to, total, links } = businessUnits

  const activeCount = data.filter(
    (bu) => bu.active === 'true' || bu.active === '1',
  ).length

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-slate-900">
            Business Units
          </h1>
          <p className="text-sm text-slate-500">
            Manage client business units and touchpoints
          </p>
        </div>
      <CreateBusinessUnitModal clientId={clientId}/>
       
      </div>

      <div className="relative max-w-sm">
        <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-slate-400" />
        <Input placeholder="Search business units..." className="pl-9" />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
          <p className="text-sm text-slate-500">Total units</p>
          <p className="mt-1 text-2xl font-semibold text-slate-900">
            {total}
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
          <p className="text-sm text-slate-500">Active</p>
          <p className="mt-1 text-2xl font-semibold text-slate-900">
            {activeCount}
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
          <p className="text-sm text-slate-500">Showing</p>
          <p className="mt-1 text-2xl font-semibold text-slate-900">
            {from ?? 0}–{to ?? 0}
          </p>
        </div>
      </div>

      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50 hover:bg-gray-50">
              <TableHead className="text-xs font-medium tracking-wide text-slate-500 uppercase">
                Business Unit
              </TableHead>
              <TableHead className="text-xs font-medium tracking-wide text-slate-500 uppercase">
                Client ID
              </TableHead>
              <TableHead className="text-xs font-medium tracking-wide text-slate-500 uppercase">
                Touchpoint
              </TableHead>
              <TableHead className="text-xs font-medium tracking-wide text-slate-500 uppercase">
                Status
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} className="py-10 text-center text-slate-400">
                  <div className="flex flex-col items-center gap-2">
                    <Building2 className="h-8 w-8 opacity-30" />
                    No business units found.
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              data.map((bu, index) => {
                const isActive = bu.active === 'true' || bu.active === '1'

                return (
                  <TableRow
                    key={`${bu.clientId}-${index}`}
                    onClick={() => router.visit(show({client:bu.clientId,bu: bu.id}))}
                    className="cursor-pointer border-gray-100 hover:bg-blue-100"
                  >
                    <TableCell className="font-medium text-slate-900">
                      {bu.name}
                    </TableCell>
                    <TableCell className="text-slate-600">
                      {bu.clientId}
                    </TableCell>
                    <TableCell className="text-slate-600">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5 text-slate-400" />
                        {bu.touchpoint}
                      </div>
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

      {data.length > 0 && (
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

                if (isPrev) {
                  return (
                    <PaginationItem key={index}>
                      <PaginationPrevious
                        href={link.url ?? '#'}
                        className={!link.url ? 'pointer-events-none opacity-40' : ''}
                        onClick={(e) => {
                          e.preventDefault()

                          if (link.url) {
                            router.visit(link.url, { preserveScroll: true })
                            }
                        }}
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
                        onClick={(e) => {
                          e.preventDefault()

                          if (link.url) {
                            router.visit(link.url, { preserveScroll: true })
                            }
                        }}
                      />
                    </PaginationItem>
                  )
                }

                return (
                  <PaginationItem key={index}>
                    <PaginationLink
                      href={link.url ?? '#'}
                      isActive={!!link.active}
                      onClick={(e) => {
                        e.preventDefault()

                        if (link.url) {
                          router.visit(link.url, { preserveScroll: true })
                          }
                      }}
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