import { Head, Link } from '@inertiajs/react';
import {
    Mail,
    Phone,
    Calendar,
    Pencil,
    Truck,
    ClipboardList,
    BarChart3,
    Plus,
    Share2
} from 'lucide-react';
import { ArrowLeft } from 'lucide-react';
import {
    Avatar,
    AvatarFallback,
} from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import type { ClientData } from '@/generated/Client';
import { index } from '@/routes/client';

const getInitials = (name: string) =>
    name
        .split(' ')
        .map((part) => part[0])
        .slice(0, 2)
        .join('')
        .toUpperCase();

const Show = ({ client }: { client: ClientData }) => {
    return (
        <>
            <Head title={client.name} />
        
            <div className="space-y-6 p-6">
                {/* Header */}
                <Card>
                    <CardContent className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Link href={index().url} className='cursor-pointer hover:scale-105'>
                  <ArrowLeft />
                </Link>
                            <Avatar className="size-14">
                                <AvatarFallback className="text-lg font-medium">
                                    {getInitials(client.name)}
                                </AvatarFallback>
                            </Avatar>
                            <div>
                                <div className="flex items-center gap-2">
                                    <h1 className="text-xl font-semibold">
                                        {client.name}
                                    </h1>
                                    <Badge
                                        variant={
                                            client.active
                                                ? 'default'
                                                : 'secondary'
                                        }
                                    >
                                        {client.active}
                                    </Badge>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    Client since{' '}
                                    {new Date(
                                        client.createdAt,
                                    ).toLocaleDateString('en-US', {
                                        month: 'long',
                                        year: 'numeric',
                                    })}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm">
                                <Pencil className="size-4" />
                                Edit
                            </Button>
                            <Button variant="destructive" size="sm">
                                
                                Set Inactive
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                {/* Contact info */}
                <Card>
                    <CardHeader>
                        <CardTitle>Contact information</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                            <div className="flex items-center gap-3">
                                <div className="flex size-9 items-center justify-center rounded-md bg-muted">
                                    <Mail className="size-4 text-muted-foreground" />
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground">
                                        Email
                                    </p>
                                    <p className="text-sm font-medium">
                                        {client.email}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="flex size-9 items-center justify-center rounded-md bg-muted">
                                    <Phone className="size-4 text-muted-foreground" />
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground">
                                        Phone
                                    </p>
                                    <p className="text-sm font-medium">
                                        {client.phoneNumber}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="flex size-9 items-center justify-center rounded-md bg-muted">
                                    <Calendar className="size-4 text-muted-foreground" />
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground">
                                        Client ID
                                    </p>
                                    <p className="text-sm font-medium">
                                        #{client.id}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Separator />
                {/* Business Units */}
                 <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between">
                            <CardTitle className="flex items-center gap-2">
                                <Share2 className="size-4" />
                                Business Units
                            </CardTitle>
                            <Button variant="ghost" size="sm">
                                <Plus className="size-4" />
                                Add
                            </Button>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col items-center justify-center gap-2 rounded-md border border-dashed py-10 text-center">
                                <Share2 className="size-8 text-muted-foreground" />
                                <p className="text-sm text-muted-foreground">
                                    Table sa business Units diri
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between">
                            <CardTitle className="flex items-center gap-2">
                                <Truck className="size-4" />
                                Deliveries
                            </CardTitle>
                            <Button variant="ghost" size="sm">
                                View all
                            </Button>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col items-center justify-center gap-2 rounded-md border border-dashed py-10 text-center">
                                <Truck className="size-8 text-muted-foreground" />
                                <p className="text-sm text-muted-foreground">
                                    No deliveries recorded yet.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                {/* Plans, deliveries, charts */}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between">
                            <CardTitle className="flex items-center gap-2">
                                <ClipboardList className="size-4" />
                                Plans
                            </CardTitle>
                            <Button variant="ghost" size="sm">
                                <Plus className="size-4" />
                                Add
                            </Button>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col items-center justify-center gap-2 rounded-md border border-dashed py-10 text-center">
                                <ClipboardList className="size-8 text-muted-foreground" />
                                <p className="text-sm text-muted-foreground">
                                    No plans yet for this client.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between">
                            <CardTitle className="flex items-center gap-2">
                                <Truck className="size-4" />
                                Deliveries
                            </CardTitle>
                            <Button variant="ghost" size="sm">
                                View all
                            </Button>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col items-center justify-center gap-2 rounded-md border border-dashed py-10 text-center">
                                <Truck className="size-8 text-muted-foreground" />
                                <p className="text-sm text-muted-foreground">
                                    No deliveries recorded yet.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <BarChart3 className="size-4" />
                            Delivery activity
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex h-64 flex-col items-center justify-center gap-2 rounded-md border border-dashed text-center">
                            <BarChart3 className="size-8 text-muted-foreground" />
                            <p className="text-sm text-muted-foreground">
                                Chart will render here once delivery data is
                                available.
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    );
};

export default Show;