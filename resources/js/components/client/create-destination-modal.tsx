import { Form } from '@inertiajs/react'
import { Plus } from 'lucide-react'
import { useState } from 'react'


import InputError from '@/components/input-error'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { store } from '@/routes/client/destination';

export default function CreateDestinationModal({
  clientId,
}: {
  clientId: number
}) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-blue-800 hover:bg-blue-900">
          <Plus className="h-4 w-4" />
          Add destination
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>New Destination</DialogTitle>
          <DialogDescription>
            Add a delivery destination under this client.
          </DialogDescription>
        </DialogHeader>

        <Form
          {...store({client: clientId})}
          resetOnSuccess
          onSuccess={() => {
            setOpen(false)
            
          }}
          onError={(error) => {
            console.log(error)
          }}
          className="space-y-4"
        >
          {({ errors, processing }) => (
            <>
              <div data-invalid={!!errors.name} className="space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="client_id"
                  name="client_id"
                  value={clientId}
                  hidden
                />
                <Input
                  id="name"
                  name="name"
                  placeholder="e.g. Cebu Warehouse"
                  aria-invalid={!!errors.name}
                />
                <InputError message={errors.name} />
              </div>

              <DialogFooter>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={processing}
                  className="bg-blue-800 hover:bg-blue-900"
                >
                  {processing ? 'Creating...' : 'Create destination'}
                </Button>
              </DialogFooter>
            </>
          )}
        </Form>
      </DialogContent>
    </Dialog>
  )
}