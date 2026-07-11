import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \Modules\Vendor\Http\Controllers\VendorVehicleController::attachVehicleToDriver
 * @see Modules/Vendor/app/Http/Controllers/VendorVehicleController.php:66
 * @route '/vendors/{vendor}/vehicles/{vehicle}/attach-vehicle-to-driver'
 */
export const attachVehicleToDriver = (args: { vendor: string | number, vehicle: string | number } | [vendor: string | number, vehicle: string | number ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: attachVehicleToDriver.url(args, options),
    method: 'patch',
})

attachVehicleToDriver.definition = {
    methods: ["patch"],
    url: '/vendors/{vendor}/vehicles/{vehicle}/attach-vehicle-to-driver',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Modules\Vendor\Http\Controllers\VendorVehicleController::attachVehicleToDriver
 * @see Modules/Vendor/app/Http/Controllers/VendorVehicleController.php:66
 * @route '/vendors/{vendor}/vehicles/{vehicle}/attach-vehicle-to-driver'
 */
attachVehicleToDriver.url = (args: { vendor: string | number, vehicle: string | number } | [vendor: string | number, vehicle: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    vendor: args[0],
                    vehicle: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        vendor: args.vendor,
                                vehicle: args.vehicle,
                }

    return attachVehicleToDriver.definition.url
            .replace('{vendor}', parsedArgs.vendor.toString())
            .replace('{vehicle}', parsedArgs.vehicle.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorVehicleController::attachVehicleToDriver
 * @see Modules/Vendor/app/Http/Controllers/VendorVehicleController.php:66
 * @route '/vendors/{vendor}/vehicles/{vehicle}/attach-vehicle-to-driver'
 */
attachVehicleToDriver.patch = (args: { vendor: string | number, vehicle: string | number } | [vendor: string | number, vehicle: string | number ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: attachVehicleToDriver.url(args, options),
    method: 'patch',
})

    /**
* @see \Modules\Vendor\Http\Controllers\VendorVehicleController::attachVehicleToDriver
 * @see Modules/Vendor/app/Http/Controllers/VendorVehicleController.php:66
 * @route '/vendors/{vendor}/vehicles/{vehicle}/attach-vehicle-to-driver'
 */
    const attachVehicleToDriverForm = (args: { vendor: string | number, vehicle: string | number } | [vendor: string | number, vehicle: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: attachVehicleToDriver.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PATCH',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Modules\Vendor\Http\Controllers\VendorVehicleController::attachVehicleToDriver
 * @see Modules/Vendor/app/Http/Controllers/VendorVehicleController.php:66
 * @route '/vendors/{vendor}/vehicles/{vehicle}/attach-vehicle-to-driver'
 */
        attachVehicleToDriverForm.patch = (args: { vendor: string | number, vehicle: string | number } | [vendor: string | number, vehicle: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: attachVehicleToDriver.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    attachVehicleToDriver.form = attachVehicleToDriverForm
const vendors = {
    attachVehicleToDriver: Object.assign(attachVehicleToDriver, attachVehicleToDriver),
}

export default vendors