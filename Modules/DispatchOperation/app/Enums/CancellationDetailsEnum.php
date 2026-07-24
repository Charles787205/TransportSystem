<?php

namespace Modules\DispatchOperation\Enums;

enum CancellationDetailsEnum: string
{
    case RefusalOfTrip = 'refusal of trip';
    case Coding = 'coding';
    case VehicleBreakdown = 'vehicle breakdown';
    case PersonnelOnLeave = 'personnel on leave';
    case Resigned = 'resigned';
    case CancelledByClient = 'cancelled by client';
    case NotAvailable = 'not available';
    case RescueUrgent = 'rescue urgent';
    case WaterLeak = 'water leak';
    case AppIssue = 'client app issue';
    case DueToBad = 'due to bad';
    case DriverNotAvailable = 'driver not available';
    case Unrecognized = 'unrecognized';
    case ApprehendedByEnforcement = 'apprehended by enforcement';
}
