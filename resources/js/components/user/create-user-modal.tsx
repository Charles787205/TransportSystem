import { Form, usePage } from '@inertiajs/react';
import { Check, Copy, KeyRound, Plus } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Field, FieldError } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import type { RoleData } from '@/generated/User';
import { store } from '@/routes/user';

const CreateUserModal = ({ roles = [] }: { roles?: RoleData[] }) => {
    const [open, setOpen] = useState(false);
    const [copied, setCopied] = useState(false);

    const { flash } = usePage<{
        flash?: { createdPassword?: string };
    }>().props;

    const createdPassword = flash?.createdPassword;

    const handleCopy = () => {
        if (createdPassword) {
            navigator.clipboard.writeText(createdPassword);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const handleOpenChange = (isOpen: boolean) => {
        setOpen(isOpen);

        if (!isOpen) {
            setCopied(false);
        }
    };

    return (
        <Dialog open={open} onOpenChange={handleOpenChange}>
            <DialogTrigger asChild>
                <Button className="flex gap-2">
                    <Plus />
                    Add User
                </Button>
            </DialogTrigger>

            <DialogContent>
                {createdPassword ? (
                    <div className="flex flex-col gap-4 py-2">
                        <DialogHeader>
                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                                <KeyRound className="h-6 w-6" />
                            </div>
                            <DialogTitle className="text-center text-xl font-bold">
                                User Created Successfully
                            </DialogTitle>
                        </DialogHeader>

                        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-center">
                            <p className="mb-2 text-sm text-slate-600">
                                The password is{' '}
                                <span className="font-mono font-bold text-slate-900">
                                    {createdPassword}
                                </span>{' '}
                                for the confirmation.
                            </p>
                            <div className="mt-3 flex items-center justify-center gap-2">
                                <code className="rounded border border-slate-200 bg-white px-3 py-1.5 font-mono text-base font-bold text-primary shadow-xs">
                                    {createdPassword}
                                </code>
                                <Button
                                    type="button"
                                    variant="outline"
                                    size="sm"
                                    onClick={handleCopy}
                                    className="gap-1.5"
                                >
                                    {copied ? (
                                        <>
                                            <Check className="h-4 w-4 text-emerald-600" />
                                            Copied!
                                        </>
                                    ) : (
                                        <>
                                            <Copy className="h-4 w-4" />
                                            Copy
                                        </>
                                    )}
                                </Button>
                            </div>
                        </div>

                        <p className="text-center text-xs text-muted-foreground">
                            Please copy this temporary password and send it to
                            the new user.
                        </p>

                        <div className="mt-2 flex justify-end">
                            <DialogClose asChild>
                                <Button className="w-full sm:w-auto">
                                    Done
                                </Button>
                            </DialogClose>
                        </div>
                    </div>
                ) : (
                    <>
                        <DialogHeader>
                            <DialogTitle>Add User</DialogTitle>
                        </DialogHeader>

                        <Form {...store.form()}>
                            {({ errors, processing }) => (
                                <div className="flex flex-col gap-4">
                                    <Field>
                                        <Label htmlFor="name">Name</Label>
                                        <Input
                                            id="name"
                                            name="name"
                                            data-invalid={!!errors.name}
                                            aria-invalid={!!errors.name}
                                        />
                                        <FieldError>{errors.name}</FieldError>
                                    </Field>

                                    <Field>
                                        <Label htmlFor="email">Email</Label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            data-invalid={!!errors.email}
                                            aria-invalid={!!errors.email}
                                        />
                                        <FieldError>{errors.email}</FieldError>
                                    </Field>

                                    <Field>
                                        <Label htmlFor="role_id">Role</Label>
                                        <Select name="role_id">
                                            <SelectTrigger
                                                id="role_id"
                                                data-invalid={!!errors.role_id}
                                                aria-invalid={!!errors.role_id}
                                                className="w-full"
                                            >
                                                <SelectValue placeholder="Select a role" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {roles.map((role) => (
                                                    <SelectItem
                                                        key={role.id}
                                                        value={String(role.id)}
                                                    >
                                                        {role.name}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <FieldError>{errors.role_id}</FieldError>
                                    </Field>

                                    <div className="ml-auto flex gap-2 pt-2">
                                        <DialogClose asChild>
                                            <Button
                                                type="button"
                                                variant="ghost"
                                            >
                                                Cancel
                                            </Button>
                                        </DialogClose>
                                        <Button
                                            disabled={processing}
                                            type="submit"
                                        >
                                            Create User
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </Form>
                    </>
                )}
            </DialogContent>
        </Dialog>
    );
};

export default CreateUserModal;
