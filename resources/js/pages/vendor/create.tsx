import { Form, Head } from '@inertiajs/react';
import { ArrowLeft } from 'lucide-react';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { index, store } from '@/routes/vendor';
import { Link } from '@inertiajs/react';

export default function CreatePage() {
    return (
        <div className="flex flex-col gap-6 p-6">
            <Head title="Add vendor" />

            <div className="flex items-center gap-2">
                <Link
                    href={index()}
                    className="flex h-8 w-8 items-center justify-center rounded-md text-slate-500 hover:bg-gray-100 hover:text-slate-900"
                >
                    <ArrowLeft className="h-4 w-4" />
                </Link>
                <div>
                    <h1 className="text-xl font-semibold text-slate-900">
                        Add vendor
                    </h1>
                    <p className="text-sm text-slate-500">
                        Register a new transport vendor
                    </p>
                </div>
            </div>

            <Card className="max-w-xl border-gray-200 shadow-sm">
                <CardHeader>
                    <CardTitle className="text-base font-semibold text-slate-900">
                        Vendor details
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <Form {...store.form()} className="flex flex-col gap-5">
                        {({ processing, errors }) => (
                            <>
                                <div className="flex flex-col gap-1.5">
                                    <Label htmlFor="name">Vendor name</Label>
                                    <Input
                                        id="name"
                                        name="name"
                                        required
                                        autoFocus
                                        placeholder="Pacific Freight Co."
                                        className="focus-visible:border-blue-700 focus-visible:ring-blue-700/10"
                                    />
                                    <InputError message={errors.name} />
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="ops@vendor.com"
                                        className="focus-visible:border-blue-700 focus-visible:ring-blue-700/10"
                                    />
                                    <InputError message={errors.email} />
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <Label htmlFor="phoneNumber">
                                        Phone number
                                    </Label>
                                    <Input
                                        id="phone_number"
                                        type="tel"
                                        name="phone_number"
                                        required
                                        placeholder="+63 917 555 0142"
                                        className="focus-visible:border-blue-700 focus-visible:ring-blue-700/10"
                                    />
                                    <InputError message={errors.phone_number} />
                                </div>

                                <div className="flex items-center justify-end gap-2 border-t border-gray-100 pt-4">
                                    <Button variant="ghost" asChild>
                                        <Link href={index()}>Cancel</Link>
                                    </Button>
                                    <Button
                                        type="submit"
                                        disabled={processing}
                                        className="bg-blue-800 hover:bg-blue-900"
                                    >
                                        {processing && <Spinner />}
                                        Save vendor
                                    </Button>
                                </div>
                            </>
                        )}
                    </Form>
                </CardContent>
            </Card>
        </div>
    );
}
