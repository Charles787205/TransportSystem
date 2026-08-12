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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export default function CreateLocationModal({
  clientId,
}: {
  clientId: number
}) {
  const [open, setOpen] = useState(false)
  const [touchpoint, setTouchpoint] = useState<string>('')
  const [type, setType] = useState<string>('')

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-blue-800 hover:bg-blue-900">
          <Plus className="h-4 w-4 mr-2" />
          Add Location
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>New Location</DialogTitle>
          <DialogDescription>
            Add a new physical location under this client.
          </DialogDescription>
        </DialogHeader>

        <Form
          action={`/clients/${clientId}/locations`}
          method="post"
          resetOnSuccess
          onSuccess={() => {
            setOpen(false)
            setTouchpoint('')
            setType('')
            toast.success('Location created successfully')
          }}
          onError={(error) => {
            console.log(error);
          }}
          className="space-y-4"
        >
          {({ errors, processing }) => (
            <>
              <Input id="client_id" name="client_id" value={clientId} hidden readOnly />
              <input type="hidden" name="touchpoint" value={touchpoint} />
              <input type="hidden" name="type" value={type} />

              <div data-invalid={!!errors.name} className="space-y-1.5">
                <Label htmlFor="name">Location Name *</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="e.g. North Distribution Hub"
                  aria-invalid={!!errors.name}
                  required
                />
                <InputError message={errors.name} />
              </div>

              <div data-invalid={!!errors.touchpoint} className="space-y-1.5">
                <Label htmlFor="touchpoint-select">Touchpoint</Label>
                <Select value={touchpoint} onValueChange={setTouchpoint}>
                  <SelectTrigger id="touchpoint-select" className="w-full">
                    <SelectValue placeholder="Select Touchpoint" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="FM">FM</SelectItem>
                    <SelectItem value="MFM">MFM</SelectItem>
                    <SelectItem value="MM">MM</SelectItem>
                  </SelectContent>
                </Select>
                <InputError message={errors.touchpoint} />
              </div>

              <div data-invalid={!!errors.type} className="space-y-1.5">
                <Label htmlFor="type-select">Location Type</Label>
                <Select value={type} onValueChange={setType}>
                  <SelectTrigger id="type-select" className="w-full">
                    <SelectValue placeholder="Select Location Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="BU">BU</SelectItem>
                    <SelectItem value="Hub">Hub</SelectItem>
                  </SelectContent>
                </Select>
                <InputError message={errors.type} />
              </div>

              <div data-invalid={!!errors.address} className="space-y-1.5">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  name="address"
                  placeholder="e.g. 123 Logistics Blvd, Suite 100"
                  aria-invalid={!!errors.address}
                />
                <InputError message={errors.address} />
              </div>

              <input type="hidden" name="active" value="1" />

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
                  {processing ? 'Creating...' : 'Create Location'}
                </Button>
              </DialogFooter>
            </>
          )}
        </Form>
      </DialogContent>
    </Dialog>
  )
}
