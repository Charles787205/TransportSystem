import { Form } from '@inertiajs/react'
import { Plus } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'


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
import { Switch } from '@/components/ui/switch'
import { store } from '@/routes/client/bu'


export default function CreateBusinessUnitModal({
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
          Add business unit
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>New Business Unit</DialogTitle>
          <DialogDescription>
            Add a business unit under this client.
          </DialogDescription>
        </DialogHeader>

        <Form
          {...store.form({client: clientId})}
          resetOnSuccess
          onSuccess={() => {
            setOpen(false)
            toast.success('Business unit created')
          }}
          onError={(error) => {
            console.log(error);
          }}
          className="space-y-4"
        >
          {({ errors, processing }) => (
            <>
              <div data-invalid={!!errors.name} className="space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="client_id" name="client_id" value={clientId} hidden/>
                <Input
                  id="name"
                  name="name"
                  placeholder="e.g. North Distribution Hub"
                  aria-invalid={!!errors.name}
                />
                <InputError message={errors.name} />
              </div>

              <div data-invalid={!!errors.touchpoint} className="space-y-1.5">
                <Label htmlFor="touchpoint">Touchpoint</Label>
                <Input
                  id="touchpoint"
                  name="touchpoint"
                  placeholder="e.g. Warehouse A, Gate 3"
                  aria-invalid={!!errors.touchpoint}
                />
                <InputError message={errors.touchpoint} />
              </div>

              <div
                data-invalid={!!errors.active}
                className="flex items-center justify-between rounded-md border border-gray-200 px-3 py-2.5"
              >
                <div>
                  <Label htmlFor="active">Active</Label>
                  <p className="text-xs text-slate-500">
                    Inactive units are hidden from active operations
                  </p>
                </div>
                <Switch id="active" name="active" defaultChecked />
                <InputError message={errors.active} />
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
                  {processing ? 'Creating...' : 'Create business unit'}
                </Button>
              </DialogFooter>
            </>
          )}
        </Form>
      </DialogContent>
    </Dialog>
  )
}