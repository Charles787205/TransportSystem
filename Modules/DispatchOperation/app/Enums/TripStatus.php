<?php

namespace Modules\DispatchOperation\Enums;

use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript()]
enum TripStatus: string
{
    case Pending = 'pending';
    case InTransitToOrigin = 'intransit to origin';
    case WaitingAtParking = 'waiting at parking';
    case OngoingLoading = 'ongoing loading';
    case InTransitToDestination = 'in transit to destination';
    case WaitingForUnloading = 'waiting for unloading';
    case WaitingForSOC = 'waiting for soc';
    case OngoingUnloading = 'ongoing unloading';

    // finished status
    case Delivered = 'delivered';

    case FoulTrip = 'foul trip';

    case Cancelled = 'cancelled';
}
