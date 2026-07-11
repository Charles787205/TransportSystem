import { Form, Head, Link } from '@inertiajs/react';
import { Loader2, ArrowLeft } from 'lucide-react';
import {
    store,
    index,
} from '@/actions/Modules/Vendor/Http/Controllers/VendorVehicleController';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    Field,
    FieldError,
    FieldGroup,
    FieldLabel,
    FieldSet,
    FieldSeparator,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

interface CreateProps {
    vendorId: number;
}

const TRUCK_TYPES = [
    { value: '4-wheeler', label: '4-Wheeler' },
    { value: '6-wheeler', label: '6-Wheeler' },
    { value: '10-wheeler', label: '10-Wheeler' },
    { value: 'van', label: 'Van' },
];

const Create = ({ vendorId }: CreateProps) => {
    return (
        <div className="mx-auto w-full max-w-4xl space-y-6 p-6">
            <Head title="Add Truck" />

            <div>
                <div className="flex">
                    <Link
                        href={index(vendorId)}
                        className="-ml-5 flex h-8 w-8 items-center justify-center rounded-md text-slate-500 hover:bg-gray-100 hover:text-slate-900"
                    >
                        <ArrowLeft className="h-4 w-4" />
                    </Link>
                    <h1 className="text-2xl font-semibold tracking-tight">
                        Add Truck
                    </h1>
                </div>
                <p className="text-sm text-muted-foreground">
                    Register a new truck under this vendor.
                </p>
            </div>

            <Form
                {...store.form(vendorId)}
                options={{ preserveScroll: true }}
                resetOnSuccess
                className="space-y-6"
            >
                {({ errors, processing, recentlySuccessful }) => (
                    <>
                        {/* Truck Details */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Truck Details</CardTitle>
                                <CardDescription>
                                    Basic information about the truck.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <FieldGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <Field data-invalid={!!errors.plate_number}>
                                        <FieldLabel htmlFor="plate_number">
                                            Plate Number
                                        </FieldLabel>
                                        <Input
                                            id="plate_number"
                                            name="plate_number"
                                            placeholder="ABC-1234"
                                            aria-invalid={!!errors.plate_number}
                                            className="focus-visible:border-blue-700 focus-visible:ring-blue-700/10"
                                        />
                                        {errors.plate_number && (
                                            <FieldError>
                                                {errors.plate_number}
                                            </FieldError>
                                        )}
                                    </Field>

                                    <Field data-invalid={!!errors.type}>
                                        <FieldLabel htmlFor="type">
                                            Type
                                        </FieldLabel>
                                        <Select name="type">
                                            <SelectTrigger
                                                id="type"
                                                aria-invalid={!!errors.type}
                                                className="w-full focus-visible:border-blue-700 focus-visible:ring-blue-700/10"
                                            >
                                                <SelectValue placeholder="Select truck type" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {TRUCK_TYPES.map((t) => (
                                                    <SelectItem
                                                        key={t.value}
                                                        value={t.value}
                                                    >
                                                        {t.label}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        {errors.type && (
                                            <FieldError>
                                                {errors.type}
                                            </FieldError>
                                        )}
                                    </Field>

                                    <Field
                                        data-invalid={!!errors.engine_number}
                                    >
                                        <FieldLabel htmlFor="engine_number">
                                            Engine Number
                                        </FieldLabel>
                                        <Input
                                            id="engine_number"
                                            name="engine_number"
                                            aria-invalid={
                                                !!errors.engine_number
                                            }
                                            className="focus-visible:border-blue-700 focus-visible:ring-blue-700/10"
                                        />
                                        {errors.engine_number && (
                                            <FieldError>
                                                {errors.engine_number}
                                            </FieldError>
                                        )}
                                    </Field>

                                    <Field
                                        data-invalid={!!errors.chassis_number}
                                    >
                                        <FieldLabel htmlFor="chassis_number">
                                            Chassis Number
                                        </FieldLabel>
                                        <Input
                                            id="chassis_number"
                                            name="chassis_number"
                                            aria-invalid={
                                                !!errors.chassis_number
                                            }
                                            className="focus-visible:border-blue-700 focus-visible:ring-blue-700/10"
                                        />
                                        {errors.chassis_number && (
                                            <FieldError>
                                                {errors.chassis_number}
                                            </FieldError>
                                        )}
                                    </Field>

                                    <Field data-invalid={!!errors.year_model}>
                                        <FieldLabel htmlFor="year_model">
                                            Year Model
                                        </FieldLabel>
                                        <Input
                                            id="year_model"
                                            name="year_model"
                                            placeholder="2024"
                                            aria-invalid={!!errors.year_model}
                                            className="focus-visible:border-blue-700 focus-visible:ring-blue-700/10"
                                        />
                                        {errors.year_model && (
                                            <FieldError>
                                                {errors.year_model}
                                            </FieldError>
                                        )}
                                    </Field>

                                    <Field data-invalid={!!errors.owners_name}>
                                        <FieldLabel htmlFor="owners_name">
                                            Owner's Name
                                        </FieldLabel>
                                        <Input
                                            id="owners_name"
                                            name="owners_name"
                                            aria-invalid={!!errors.owners_name}
                                            className="focus-visible:border-blue-700 focus-visible:ring-blue-700/10"
                                        />
                                        {errors.owners_name && (
                                            <FieldError>
                                                {errors.owners_name}
                                            </FieldError>
                                        )}
                                    </Field>

                                    <Field data-invalid={!!errors.make}>
                                        <FieldLabel htmlFor="make">
                                            Make
                                        </FieldLabel>
                                        <Input
                                            id="make"
                                            name="make"
                                            aria-invalid={!!errors.make}
                                            className="focus-visible:border-blue-700 focus-visible:ring-blue-700/10"
                                        />
                                        {errors.make && (
                                            <FieldError>
                                                {errors.make}
                                            </FieldError>
                                        )}
                                    </Field>

                                    <Field
                                        className="sm:col-span-2"
                                        data-invalid={
                                            !!errors.registered_address
                                        }
                                    >
                                        <FieldLabel htmlFor="registered_address">
                                            Registered Address
                                        </FieldLabel>
                                        <Input
                                            id="registered_address"
                                            name="registered_address"
                                            aria-invalid={
                                                !!errors.registered_address
                                            }
                                            className="focus-visible:border-blue-700 focus-visible:ring-blue-700/10"
                                        />
                                        {errors.registered_address && (
                                            <FieldError>
                                                {errors.registered_address}
                                            </FieldError>
                                        )}
                                    </Field>
                                </FieldGroup>
                            </CardContent>
                        </Card>

                        {/* Insurance */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Insurance</CardTitle>
                                <CardDescription>
                                    Insurance coverage details.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <FieldGroup className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                                    <Field
                                        className="sm:col-span-2"
                                        data-invalid={
                                            !!errors['insurance.provider_name']
                                        }
                                    >
                                        <FieldLabel htmlFor="insurance.provider_name">
                                            Provider Name
                                        </FieldLabel>
                                        <Input
                                            id="insurance.provider_name"
                                            name="insurance[provider_name]"
                                            aria-invalid={
                                                !!errors[
                                                    'insurance.provider_name'
                                                ]
                                            }
                                            className="focus-visible:border-blue-700 focus-visible:ring-blue-700/10"
                                        />
                                        {errors['insurance.provider_name'] && (
                                            <FieldError>
                                                {
                                                    errors[
                                                        'insurance.provider_name'
                                                    ]
                                                }
                                            </FieldError>
                                        )}
                                    </Field>
                                    <Field
                                        className="sm:col-span-1"
                                        data-invalid={
                                            !!errors['insurance.policy_number']
                                        }
                                    >
                                        <FieldLabel htmlFor="insurance.policy_number">
                                            Policy Number
                                        </FieldLabel>
                                        <Input
                                            id="insurance.policy_number"
                                            name="insurance[policy_number]"
                                            aria-invalid={
                                                !!errors[
                                                    'insurance.policy_number'
                                                ]
                                            }
                                            className="focus-visible:border-blue-700 focus-visible:ring-blue-700/10"
                                        />
                                        {errors['insurance.policy_number'] && (
                                            <FieldError>
                                                {
                                                    errors[
                                                        'insurance.policy_number'
                                                    ]
                                                }
                                            </FieldError>
                                        )}
                                    </Field>

                                    <Field
                                        data-invalid={
                                            !!errors['insurance.start_date']
                                        }
                                    >
                                        <FieldLabel htmlFor="insurance.start_date">
                                            Start Date
                                        </FieldLabel>
                                        <Input
                                            type="date"
                                            id="insurance.start_date"
                                            name="insurance[start_date]"
                                            aria-invalid={
                                                !!errors['insurance.start_date']
                                            }
                                            className="focus-visible:border-blue-700 focus-visible:ring-blue-700/10"
                                        />
                                        {errors['insurance.start_date'] && (
                                            <FieldError>
                                                {errors['insurance.start_date']}
                                            </FieldError>
                                        )}
                                    </Field>

                                    <Field
                                        data-invalid={
                                            !!errors['insurance.end_date']
                                        }
                                    >
                                        <FieldLabel htmlFor="insurance.end_date">
                                            End Date
                                        </FieldLabel>
                                        <Input
                                            type="date"
                                            id="insurance.end_date"
                                            name="insurance[end_date]"
                                            aria-invalid={
                                                !!errors['insurance.end_date']
                                            }
                                            className="focus-visible:border-blue-700 focus-visible:ring-blue-700/10"
                                        />
                                        {errors['insurance.end_date'] && (
                                            <FieldError>
                                                {errors['insurance.end_date']}
                                            </FieldError>
                                        )}
                                    </Field>
                                </FieldGroup>
                            </CardContent>
                        </Card>

                        {/* Registration */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Registration</CardTitle>
                                <CardDescription>
                                    CR, OR, and LTFRB registration details.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <FieldSet>
                                    <FieldGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                        <Field
                                            data-invalid={
                                                !!errors[
                                                    'registration.cr_number'
                                                ]
                                            }
                                        >
                                            <FieldLabel htmlFor="registration.cr_number">
                                                CR Number
                                            </FieldLabel>
                                            <Input
                                                id="registration.cr_number"
                                                name="registration[cr_number]"
                                                aria-invalid={
                                                    !!errors[
                                                        'registration.cr_number'
                                                    ]
                                                }
                                                className="focus-visible:border-blue-700 focus-visible:ring-blue-700/10"
                                            />
                                            {errors[
                                                'registration.cr_number'
                                            ] && (
                                                <FieldError>
                                                    {
                                                        errors[
                                                            'registration.cr_number'
                                                        ]
                                                    }
                                                </FieldError>
                                            )}
                                        </Field>

                                        <Field
                                            data-invalid={
                                                !!errors['registration.cr_date']
                                            }
                                        >
                                            <FieldLabel htmlFor="registration.cr_date">
                                                CR Date
                                            </FieldLabel>
                                            <Input
                                                type="date"
                                                id="registration.cr_date"
                                                name="registration[cr_date]"
                                                aria-invalid={
                                                    !!errors[
                                                        'registration.cr_date'
                                                    ]
                                                }
                                                className="focus-visible:border-blue-700 focus-visible:ring-blue-700/10"
                                            />
                                            {errors['registration.cr_date'] && (
                                                <FieldError>
                                                    {
                                                        errors[
                                                            'registration.cr_date'
                                                        ]
                                                    }
                                                </FieldError>
                                            )}
                                        </Field>

                                        <Field
                                            data-invalid={
                                                !!errors[
                                                    'registration.or_number'
                                                ]
                                            }
                                        >
                                            <FieldLabel htmlFor="registration.or_number">
                                                OR Number
                                            </FieldLabel>
                                            <Input
                                                id="registration.or_number"
                                                name="registration[or_number]"
                                                aria-invalid={
                                                    !!errors[
                                                        'registration.or_number'
                                                    ]
                                                }
                                                className="focus-visible:border-blue-700 focus-visible:ring-blue-700/10"
                                            />
                                            {errors[
                                                'registration.or_number'
                                            ] && (
                                                <FieldError>
                                                    {
                                                        errors[
                                                            'registration.or_number'
                                                        ]
                                                    }
                                                </FieldError>
                                            )}
                                        </Field>

                                        <Field
                                            data-invalid={
                                                !!errors['registration.or_date']
                                            }
                                        >
                                            <FieldLabel htmlFor="registration.or_date">
                                                OR Date
                                            </FieldLabel>
                                            <Input
                                                type="date"
                                                id="registration.or_date"
                                                name="registration[or_date]"
                                                aria-invalid={
                                                    !!errors[
                                                        'registration.or_date'
                                                    ]
                                                }
                                                className="focus-visible:border-blue-700 focus-visible:ring-blue-700/10"
                                            />
                                            {errors['registration.or_date'] && (
                                                <FieldError>
                                                    {
                                                        errors[
                                                            'registration.or_date'
                                                        ]
                                                    }
                                                </FieldError>
                                            )}
                                        </Field>

                                        <Field
                                            data-invalid={
                                                !!errors[
                                                    'registration.ltfrb_date'
                                                ]
                                            }
                                        >
                                            <FieldLabel htmlFor="registration.ltfrb_date">
                                                LTFRB Date
                                            </FieldLabel>
                                            <Input
                                                type="date"
                                                id="registration.ltfrb_date"
                                                name="registration[ltfrb_date]"
                                                aria-invalid={
                                                    !!errors[
                                                        'registration.ltfrb_date'
                                                    ]
                                                }
                                                className="focus-visible:border-blue-700 focus-visible:ring-blue-700/10"
                                            />
                                            {errors[
                                                'registration.ltfrb_date'
                                            ] && (
                                                <FieldError>
                                                    {
                                                        errors[
                                                            'registration.ltfrb_date'
                                                        ]
                                                    }
                                                </FieldError>
                                            )}
                                        </Field>

                                        <Field
                                            data-invalid={
                                                !!errors[
                                                    'registration.case_number'
                                                ]
                                            }
                                        >
                                            <FieldLabel htmlFor="registration.case_number">
                                                Case Number
                                            </FieldLabel>
                                            <Input
                                                id="registration.case_number"
                                                name="registration[case_number]"
                                                aria-invalid={
                                                    !!errors[
                                                        'registration.case_number'
                                                    ]
                                                }
                                                className="focus-visible:border-blue-700 focus-visible:ring-blue-700/10"
                                            />
                                            {errors[
                                                'registration.case_number'
                                            ] && (
                                                <FieldError>
                                                    {
                                                        errors[
                                                            'registration.case_number'
                                                        ]
                                                    }
                                                </FieldError>
                                            )}
                                        </Field>
                                    </FieldGroup>
                                </FieldSet>

                                <input
                                    className="hidden"
                                    readOnly
                                    type="number"
                                    name="vendor_id"
                                    id="vendor_id"
                                    value={vendorId}
                                />
                            </CardContent>
                        </Card>

                        <FieldSeparator />

                        <div className="flex items-center justify-end gap-3">
                            <Button variant="outline" asChild type="button">
                                <Link href={`/vendors/${vendorId}/vehicles`}>
                                    Cancel
                                </Link>
                            </Button>
                            <Button type="submit" disabled={processing}>
                                {processing && (
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                )}
                                Save Truck
                            </Button>
                        </div>

                        {recentlySuccessful && (
                            <p className="text-right text-sm text-muted-foreground">
                                Saved.
                            </p>
                        )}
                    </>
                )}
            </Form>
        </div>
    );
};

export default Create;
