import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Modules\Vendor\Http\Controllers\VendorVehicleController::index
 * @see Modules/Vendor/app/Http/Controllers/VendorVehicleController.php:24
 * @route '/vendors/{vendor}/vehicles'
 */
export const index = (args: { vendor: number | { id: number } } | [vendor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/vendors/{vendor}/vehicles',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Vendor\Http\Controllers\VendorVehicleController::index
 * @see Modules/Vendor/app/Http/Controllers/VendorVehicleController.php:24
 * @route '/vendors/{vendor}/vehicles'
 */
index.url = (args: { vendor: number | { id: number } } | [vendor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { vendor: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { vendor: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    vendor: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        vendor: typeof args.vendor === 'object'
                ? args.vendor.id
                : args.vendor,
                }

    return index.definition.url
            .replace('{vendor}', parsedArgs.vendor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorVehicleController::index
 * @see Modules/Vendor/app/Http/Controllers/VendorVehicleController.php:24
 * @route '/vendors/{vendor}/vehicles'
 */
index.get = (args: { vendor: number | { id: number } } | [vendor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Vendor\Http\Controllers\VendorVehicleController::index
 * @see Modules/Vendor/app/Http/Controllers/VendorVehicleController.php:24
 * @route '/vendors/{vendor}/vehicles'
 */
index.head = (args: { vendor: number | { id: number } } | [vendor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Vendor\Http\Controllers\VendorVehicleController::index
 * @see Modules/Vendor/app/Http/Controllers/VendorVehicleController.php:24
 * @route '/vendors/{vendor}/vehicles'
 */
    const indexForm = (args: { vendor: number | { id: number } } | [vendor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Vendor\Http\Controllers\VendorVehicleController::index
 * @see Modules/Vendor/app/Http/Controllers/VendorVehicleController.php:24
 * @route '/vendors/{vendor}/vehicles'
 */
        indexForm.get = (args: { vendor: number | { id: number } } | [vendor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Vendor\Http\Controllers\VendorVehicleController::index
 * @see Modules/Vendor/app/Http/Controllers/VendorVehicleController.php:24
 * @route '/vendors/{vendor}/vehicles'
 */
        indexForm.head = (args: { vendor: number | { id: number } } | [vendor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \Modules\Vendor\Http\Controllers\VendorVehicleController::create
 * @see Modules/Vendor/app/Http/Controllers/VendorVehicleController.php:33
 * @route '/vendors/{vendor}/vehicles/create'
 */
export const create = (args: { vendor: number | { id: number } } | [vendor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/vendors/{vendor}/vehicles/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Vendor\Http\Controllers\VendorVehicleController::create
 * @see Modules/Vendor/app/Http/Controllers/VendorVehicleController.php:33
 * @route '/vendors/{vendor}/vehicles/create'
 */
create.url = (args: { vendor: number | { id: number } } | [vendor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { vendor: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { vendor: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    vendor: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        vendor: typeof args.vendor === 'object'
                ? args.vendor.id
                : args.vendor,
                }

    return create.definition.url
            .replace('{vendor}', parsedArgs.vendor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorVehicleController::create
 * @see Modules/Vendor/app/Http/Controllers/VendorVehicleController.php:33
 * @route '/vendors/{vendor}/vehicles/create'
 */
create.get = (args: { vendor: number | { id: number } } | [vendor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Vendor\Http\Controllers\VendorVehicleController::create
 * @see Modules/Vendor/app/Http/Controllers/VendorVehicleController.php:33
 * @route '/vendors/{vendor}/vehicles/create'
 */
create.head = (args: { vendor: number | { id: number } } | [vendor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Vendor\Http\Controllers\VendorVehicleController::create
 * @see Modules/Vendor/app/Http/Controllers/VendorVehicleController.php:33
 * @route '/vendors/{vendor}/vehicles/create'
 */
    const createForm = (args: { vendor: number | { id: number } } | [vendor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Vendor\Http\Controllers\VendorVehicleController::create
 * @see Modules/Vendor/app/Http/Controllers/VendorVehicleController.php:33
 * @route '/vendors/{vendor}/vehicles/create'
 */
        createForm.get = (args: { vendor: number | { id: number } } | [vendor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Vendor\Http\Controllers\VendorVehicleController::create
 * @see Modules/Vendor/app/Http/Controllers/VendorVehicleController.php:33
 * @route '/vendors/{vendor}/vehicles/create'
 */
        createForm.head = (args: { vendor: number | { id: number } } | [vendor: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    create.form = createForm
/**
* @see \Modules\Vendor\Http\Controllers\VendorVehicleController::store
 * @see Modules/Vendor/app/Http/Controllers/VendorVehicleController.php:41
 * @route '/vendors/{vendor}/vehicles'
 */
export const store = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/vendors/{vendor}/vehicles',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Vendor\Http\Controllers\VendorVehicleController::store
 * @see Modules/Vendor/app/Http/Controllers/VendorVehicleController.php:41
 * @route '/vendors/{vendor}/vehicles'
 */
store.url = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { vendor: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    vendor: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        vendor: args.vendor,
                }

    return store.definition.url
            .replace('{vendor}', parsedArgs.vendor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorVehicleController::store
 * @see Modules/Vendor/app/Http/Controllers/VendorVehicleController.php:41
 * @route '/vendors/{vendor}/vehicles'
 */
store.post = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

    /**
* @see \Modules\Vendor\Http\Controllers\VendorVehicleController::store
 * @see Modules/Vendor/app/Http/Controllers/VendorVehicleController.php:41
 * @route '/vendors/{vendor}/vehicles'
 */
    const storeForm = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(args, options),
        method: 'post',
    })

            /**
* @see \Modules\Vendor\Http\Controllers\VendorVehicleController::store
 * @see Modules/Vendor/app/Http/Controllers/VendorVehicleController.php:41
 * @route '/vendors/{vendor}/vehicles'
 */
        storeForm.post = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(args, options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \Modules\Vendor\Http\Controllers\VendorVehicleController::show
 * @see Modules/Vendor/app/Http/Controllers/VendorVehicleController.php:49
 * @route '/vendors/{vendor}/vehicles/{vehicle}'
 */
export const show = (args: { vendor: number | { id: number }, vehicle: number | { id: number } } | [vendor: number | { id: number }, vehicle: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/vendors/{vendor}/vehicles/{vehicle}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Vendor\Http\Controllers\VendorVehicleController::show
 * @see Modules/Vendor/app/Http/Controllers/VendorVehicleController.php:49
 * @route '/vendors/{vendor}/vehicles/{vehicle}'
 */
show.url = (args: { vendor: number | { id: number }, vehicle: number | { id: number } } | [vendor: number | { id: number }, vehicle: number | { id: number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    vendor: args[0],
                    vehicle: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        vendor: typeof args.vendor === 'object'
                ? args.vendor.id
                : args.vendor,
                                vehicle: typeof args.vehicle === 'object'
                ? args.vehicle.id
                : args.vehicle,
                }

    return show.definition.url
            .replace('{vendor}', parsedArgs.vendor.toString())
            .replace('{vehicle}', parsedArgs.vehicle.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorVehicleController::show
 * @see Modules/Vendor/app/Http/Controllers/VendorVehicleController.php:49
 * @route '/vendors/{vendor}/vehicles/{vehicle}'
 */
show.get = (args: { vendor: number | { id: number }, vehicle: number | { id: number } } | [vendor: number | { id: number }, vehicle: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Vendor\Http\Controllers\VendorVehicleController::show
 * @see Modules/Vendor/app/Http/Controllers/VendorVehicleController.php:49
 * @route '/vendors/{vendor}/vehicles/{vehicle}'
 */
show.head = (args: { vendor: number | { id: number }, vehicle: number | { id: number } } | [vendor: number | { id: number }, vehicle: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Vendor\Http\Controllers\VendorVehicleController::show
 * @see Modules/Vendor/app/Http/Controllers/VendorVehicleController.php:49
 * @route '/vendors/{vendor}/vehicles/{vehicle}'
 */
    const showForm = (args: { vendor: number | { id: number }, vehicle: number | { id: number } } | [vendor: number | { id: number }, vehicle: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Vendor\Http\Controllers\VendorVehicleController::show
 * @see Modules/Vendor/app/Http/Controllers/VendorVehicleController.php:49
 * @route '/vendors/{vendor}/vehicles/{vehicle}'
 */
        showForm.get = (args: { vendor: number | { id: number }, vehicle: number | { id: number } } | [vendor: number | { id: number }, vehicle: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Vendor\Http\Controllers\VendorVehicleController::show
 * @see Modules/Vendor/app/Http/Controllers/VendorVehicleController.php:49
 * @route '/vendors/{vendor}/vehicles/{vehicle}'
 */
        showForm.head = (args: { vendor: number | { id: number }, vehicle: number | { id: number } } | [vendor: number | { id: number }, vehicle: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
/**
* @see \Modules\Vendor\Http\Controllers\VendorVehicleController::edit
 * @see Modules/Vendor/app/Http/Controllers/VendorVehicleController.php:83
 * @route '/vendors/{vendor}/vehicles/{vehicle}/edit'
 */
export const edit = (args: { vendor: number | { id: number }, vehicle: number | { id: number } } | [vendor: number | { id: number }, vehicle: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/vendors/{vendor}/vehicles/{vehicle}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Vendor\Http\Controllers\VendorVehicleController::edit
 * @see Modules/Vendor/app/Http/Controllers/VendorVehicleController.php:83
 * @route '/vendors/{vendor}/vehicles/{vehicle}/edit'
 */
edit.url = (args: { vendor: number | { id: number }, vehicle: number | { id: number } } | [vendor: number | { id: number }, vehicle: number | { id: number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    vendor: args[0],
                    vehicle: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        vendor: typeof args.vendor === 'object'
                ? args.vendor.id
                : args.vendor,
                                vehicle: typeof args.vehicle === 'object'
                ? args.vehicle.id
                : args.vehicle,
                }

    return edit.definition.url
            .replace('{vendor}', parsedArgs.vendor.toString())
            .replace('{vehicle}', parsedArgs.vehicle.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorVehicleController::edit
 * @see Modules/Vendor/app/Http/Controllers/VendorVehicleController.php:83
 * @route '/vendors/{vendor}/vehicles/{vehicle}/edit'
 */
edit.get = (args: { vendor: number | { id: number }, vehicle: number | { id: number } } | [vendor: number | { id: number }, vehicle: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Vendor\Http\Controllers\VendorVehicleController::edit
 * @see Modules/Vendor/app/Http/Controllers/VendorVehicleController.php:83
 * @route '/vendors/{vendor}/vehicles/{vehicle}/edit'
 */
edit.head = (args: { vendor: number | { id: number }, vehicle: number | { id: number } } | [vendor: number | { id: number }, vehicle: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Vendor\Http\Controllers\VendorVehicleController::edit
 * @see Modules/Vendor/app/Http/Controllers/VendorVehicleController.php:83
 * @route '/vendors/{vendor}/vehicles/{vehicle}/edit'
 */
    const editForm = (args: { vendor: number | { id: number }, vehicle: number | { id: number } } | [vendor: number | { id: number }, vehicle: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Vendor\Http\Controllers\VendorVehicleController::edit
 * @see Modules/Vendor/app/Http/Controllers/VendorVehicleController.php:83
 * @route '/vendors/{vendor}/vehicles/{vehicle}/edit'
 */
        editForm.get = (args: { vendor: number | { id: number }, vehicle: number | { id: number } } | [vendor: number | { id: number }, vehicle: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Vendor\Http\Controllers\VendorVehicleController::edit
 * @see Modules/Vendor/app/Http/Controllers/VendorVehicleController.php:83
 * @route '/vendors/{vendor}/vehicles/{vehicle}/edit'
 */
        editForm.head = (args: { vendor: number | { id: number }, vehicle: number | { id: number } } | [vendor: number | { id: number }, vehicle: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
/**
* @see \Modules\Vendor\Http\Controllers\VendorVehicleController::update
 * @see Modules/Vendor/app/Http/Controllers/VendorVehicleController.php:91
 * @route '/vendors/{vendor}/vehicles/{vehicle}'
 */
export const update = (args: { vendor: string | number, vehicle: string | number } | [vendor: string | number, vehicle: string | number ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/vendors/{vendor}/vehicles/{vehicle}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Vendor\Http\Controllers\VendorVehicleController::update
 * @see Modules/Vendor/app/Http/Controllers/VendorVehicleController.php:91
 * @route '/vendors/{vendor}/vehicles/{vehicle}'
 */
update.url = (args: { vendor: string | number, vehicle: string | number } | [vendor: string | number, vehicle: string | number ], options?: RouteQueryOptions) => {
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

    return update.definition.url
            .replace('{vendor}', parsedArgs.vendor.toString())
            .replace('{vehicle}', parsedArgs.vehicle.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorVehicleController::update
 * @see Modules/Vendor/app/Http/Controllers/VendorVehicleController.php:91
 * @route '/vendors/{vendor}/vehicles/{vehicle}'
 */
update.put = (args: { vendor: string | number, vehicle: string | number } | [vendor: string | number, vehicle: string | number ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \Modules\Vendor\Http\Controllers\VendorVehicleController::update
 * @see Modules/Vendor/app/Http/Controllers/VendorVehicleController.php:91
 * @route '/vendors/{vendor}/vehicles/{vehicle}'
 */
update.patch = (args: { vendor: string | number, vehicle: string | number } | [vendor: string | number, vehicle: string | number ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \Modules\Vendor\Http\Controllers\VendorVehicleController::update
 * @see Modules/Vendor/app/Http/Controllers/VendorVehicleController.php:91
 * @route '/vendors/{vendor}/vehicles/{vehicle}'
 */
    const updateForm = (args: { vendor: string | number, vehicle: string | number } | [vendor: string | number, vehicle: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Modules\Vendor\Http\Controllers\VendorVehicleController::update
 * @see Modules/Vendor/app/Http/Controllers/VendorVehicleController.php:91
 * @route '/vendors/{vendor}/vehicles/{vehicle}'
 */
        updateForm.put = (args: { vendor: string | number, vehicle: string | number } | [vendor: string | number, vehicle: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \Modules\Vendor\Http\Controllers\VendorVehicleController::update
 * @see Modules/Vendor/app/Http/Controllers/VendorVehicleController.php:91
 * @route '/vendors/{vendor}/vehicles/{vehicle}'
 */
        updateForm.patch = (args: { vendor: string | number, vehicle: string | number } | [vendor: string | number, vehicle: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \Modules\Vendor\Http\Controllers\VendorVehicleController::destroy
 * @see Modules/Vendor/app/Http/Controllers/VendorVehicleController.php:96
 * @route '/vendors/{vendor}/vehicles/{vehicle}'
 */
export const destroy = (args: { vendor: string | number, vehicle: string | number } | [vendor: string | number, vehicle: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/vendors/{vendor}/vehicles/{vehicle}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Vendor\Http\Controllers\VendorVehicleController::destroy
 * @see Modules/Vendor/app/Http/Controllers/VendorVehicleController.php:96
 * @route '/vendors/{vendor}/vehicles/{vehicle}'
 */
destroy.url = (args: { vendor: string | number, vehicle: string | number } | [vendor: string | number, vehicle: string | number ], options?: RouteQueryOptions) => {
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

    return destroy.definition.url
            .replace('{vendor}', parsedArgs.vendor.toString())
            .replace('{vehicle}', parsedArgs.vehicle.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorVehicleController::destroy
 * @see Modules/Vendor/app/Http/Controllers/VendorVehicleController.php:96
 * @route '/vendors/{vendor}/vehicles/{vehicle}'
 */
destroy.delete = (args: { vendor: string | number, vehicle: string | number } | [vendor: string | number, vehicle: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \Modules\Vendor\Http\Controllers\VendorVehicleController::destroy
 * @see Modules/Vendor/app/Http/Controllers/VendorVehicleController.php:96
 * @route '/vendors/{vendor}/vehicles/{vehicle}'
 */
    const destroyForm = (args: { vendor: string | number, vehicle: string | number } | [vendor: string | number, vehicle: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Modules\Vendor\Http\Controllers\VendorVehicleController::destroy
 * @see Modules/Vendor/app/Http/Controllers/VendorVehicleController.php:96
 * @route '/vendors/{vendor}/vehicles/{vehicle}'
 */
        destroyForm.delete = (args: { vendor: string | number, vehicle: string | number } | [vendor: string | number, vehicle: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
/**
* @see \Modules\Vendor\Http\Controllers\VendorVehicleController::attachDriver
 * @see Modules/Vendor/app/Http/Controllers/VendorVehicleController.php:66
 * @route '/vendors/{vendor}/vehicles/{vehicle}/attach-vehicle-to-driver'
 */
export const attachDriver = (args: { vendor: string | number, vehicle: string | number } | [vendor: string | number, vehicle: string | number ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: attachDriver.url(args, options),
    method: 'patch',
})

attachDriver.definition = {
    methods: ["patch"],
    url: '/vendors/{vendor}/vehicles/{vehicle}/attach-vehicle-to-driver',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Modules\Vendor\Http\Controllers\VendorVehicleController::attachDriver
 * @see Modules/Vendor/app/Http/Controllers/VendorVehicleController.php:66
 * @route '/vendors/{vendor}/vehicles/{vehicle}/attach-vehicle-to-driver'
 */
attachDriver.url = (args: { vendor: string | number, vehicle: string | number } | [vendor: string | number, vehicle: string | number ], options?: RouteQueryOptions) => {
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

    return attachDriver.definition.url
            .replace('{vendor}', parsedArgs.vendor.toString())
            .replace('{vehicle}', parsedArgs.vehicle.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorVehicleController::attachDriver
 * @see Modules/Vendor/app/Http/Controllers/VendorVehicleController.php:66
 * @route '/vendors/{vendor}/vehicles/{vehicle}/attach-vehicle-to-driver'
 */
attachDriver.patch = (args: { vendor: string | number, vehicle: string | number } | [vendor: string | number, vehicle: string | number ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: attachDriver.url(args, options),
    method: 'patch',
})

    /**
* @see \Modules\Vendor\Http\Controllers\VendorVehicleController::attachDriver
 * @see Modules/Vendor/app/Http/Controllers/VendorVehicleController.php:66
 * @route '/vendors/{vendor}/vehicles/{vehicle}/attach-vehicle-to-driver'
 */
    const attachDriverForm = (args: { vendor: string | number, vehicle: string | number } | [vendor: string | number, vehicle: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: attachDriver.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PATCH',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Modules\Vendor\Http\Controllers\VendorVehicleController::attachDriver
 * @see Modules/Vendor/app/Http/Controllers/VendorVehicleController.php:66
 * @route '/vendors/{vendor}/vehicles/{vehicle}/attach-vehicle-to-driver'
 */
        attachDriverForm.patch = (args: { vendor: string | number, vehicle: string | number } | [vendor: string | number, vehicle: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: attachDriver.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    attachDriver.form = attachDriverForm
const VendorVehicleController = { index, create, store, show, edit, update, destroy, attachDriver }

export default VendorVehicleController