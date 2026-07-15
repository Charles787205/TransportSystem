import {  router } from '@inertiajs/react'
import {Link} from '@inertiajs/react';
import {  MapPin, ArrowLeft } from 'lucide-react'
import CreateDestinationModal from '@/components/client/create-destination-modal'

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

import type { PaginatedDestinationData } from '@/generated/Client'
import  { show as clientShow } from '@/routes/client'
export default function DestinationPage({
  clientId,
  destinations,
}: {
  clientId: number,
  destinations: PaginatedDestinationData
}) {
  const { data, from, to, total, links } = destinations
  console.log(destinations);

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex gap-2">
            <Link className='hover:scale-105'  href={clientShow.url({client: clientId})}>
              <ArrowLeft className=''/>
            </Link>
          <h1 className="text-xl font-semibold text-slate-900">
            Destinations
          </h1>
          </div>
          <p className="text-sm text-slate-500">
            Manage delivery destinations
          </p>
        </div>
        <CreateDestinationModal clientId={clientId} />
      </div>

      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50 hover:bg-gray-50">
              <TableHead className="text-xs font-medium tracking-wide text-slate-500 uppercase">
                Name
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.length === 0 ? (
              <TableRow>
                <TableCell className="py-10 text-center text-slate-400">
                  <div className="flex flex-col items-center gap-2">
                    <MapPin className="h-8 w-8 opacity-30" />
                    No destinations found.
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              data.map((destination) => (
                <TableRow
                  key={destination.id}
                  className="border-gray-100 hover:bg-blue-50"
                >
                  <TableCell className="font-medium text-slate-900">
                    {destination.name}
                  </TableCell>
                </TableRow>
              ))
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