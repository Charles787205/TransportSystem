<?php

namespace Modules\Vendor\Enums;

enum DriverStatusEnum: string
{
    case ACTIVE = 'Active';
    case BACK_OUT = 'Back-out';
    case DEACTIVATED = 'Deactivated';
    case FOR_ACCOUNT_CREATION = 'For Account Creation';
    case FOR_MODIFICATION = 'For Modification';
    case INACTIVE = 'Inactive';
    case RESIGNED = 'Resigned';
    case SUSPENDED_STUCK_UP = 'Suspended Stuck-Up';
    case TEMPORARY_STOP_HIRING = 'Temporary Stop Hiring';
    case UNDER_ASSESSMENT = 'Under Assesment';
}
