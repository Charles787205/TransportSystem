import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::index
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:13
 * @route '/api/v1/dispatchoperations'
 */
const index55c6c70f2693902cc00268886257b069 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index55c6c70f2693902cc00268886257b069.url(options),
    method: 'get',
})

index55c6c70f2693902cc00268886257b069.definition = {
    methods: ["get","head"],
    url: '/api/v1/dispatchoperations',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::index
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:13
 * @route '/api/v1/dispatchoperations'
 */
index55c6c70f2693902cc00268886257b069.url = (options?: RouteQueryOptions) => {
    return index55c6c70f2693902cc00268886257b069.definition.url + queryParams(options)
}

/**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::index
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:13
 * @route '/api/v1/dispatchoperations'
 */
index55c6c70f2693902cc00268886257b069.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index55c6c70f2693902cc00268886257b069.url(options),
    method: 'get',
})
/**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::index
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:13
 * @route '/api/v1/dispatchoperations'
 */
index55c6c70f2693902cc00268886257b069.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index55c6c70f2693902cc00268886257b069.url(options),
    method: 'head',
})

    /**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::index
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:13
 * @route '/api/v1/dispatchoperations'
 */
    const index55c6c70f2693902cc00268886257b069Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index55c6c70f2693902cc00268886257b069.url(options),
        method: 'get',
    })

            /**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::index
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:13
 * @route '/api/v1/dispatchoperations'
 */
        index55c6c70f2693902cc00268886257b069Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index55c6c70f2693902cc00268886257b069.url(options),
            method: 'get',
        })
            /**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::index
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:13
 * @route '/api/v1/dispatchoperations'
 */
        index55c6c70f2693902cc00268886257b069Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index55c6c70f2693902cc00268886257b069.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index55c6c70f2693902cc00268886257b069.form = index55c6c70f2693902cc00268886257b069Form
    /**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::index
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:13
 * @route '/dispatchoperations'
 */
const index7bdfdfaa6fde323b39e54ffbb0e76e51 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index7bdfdfaa6fde323b39e54ffbb0e76e51.url(options),
    method: 'get',
})

index7bdfdfaa6fde323b39e54ffbb0e76e51.definition = {
    methods: ["get","head"],
    url: '/dispatchoperations',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::index
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:13
 * @route '/dispatchoperations'
 */
index7bdfdfaa6fde323b39e54ffbb0e76e51.url = (options?: RouteQueryOptions) => {
    return index7bdfdfaa6fde323b39e54ffbb0e76e51.definition.url + queryParams(options)
}

/**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::index
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:13
 * @route '/dispatchoperations'
 */
index7bdfdfaa6fde323b39e54ffbb0e76e51.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index7bdfdfaa6fde323b39e54ffbb0e76e51.url(options),
    method: 'get',
})
/**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::index
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:13
 * @route '/dispatchoperations'
 */
index7bdfdfaa6fde323b39e54ffbb0e76e51.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index7bdfdfaa6fde323b39e54ffbb0e76e51.url(options),
    method: 'head',
})

    /**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::index
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:13
 * @route '/dispatchoperations'
 */
    const index7bdfdfaa6fde323b39e54ffbb0e76e51Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index7bdfdfaa6fde323b39e54ffbb0e76e51.url(options),
        method: 'get',
    })

            /**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::index
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:13
 * @route '/dispatchoperations'
 */
        index7bdfdfaa6fde323b39e54ffbb0e76e51Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index7bdfdfaa6fde323b39e54ffbb0e76e51.url(options),
            method: 'get',
        })
            /**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::index
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:13
 * @route '/dispatchoperations'
 */
        index7bdfdfaa6fde323b39e54ffbb0e76e51Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index7bdfdfaa6fde323b39e54ffbb0e76e51.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index7bdfdfaa6fde323b39e54ffbb0e76e51.form = index7bdfdfaa6fde323b39e54ffbb0e76e51Form

/**
* Multiple routes resolve to \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::index, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `index['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const index = {
    '/api/v1/dispatchoperations': index55c6c70f2693902cc00268886257b069,
    '/dispatchoperations': index7bdfdfaa6fde323b39e54ffbb0e76e51,
}

/**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::store
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:29
 * @route '/api/v1/dispatchoperations'
 */
const store55c6c70f2693902cc00268886257b069 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store55c6c70f2693902cc00268886257b069.url(options),
    method: 'post',
})

store55c6c70f2693902cc00268886257b069.definition = {
    methods: ["post"],
    url: '/api/v1/dispatchoperations',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::store
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:29
 * @route '/api/v1/dispatchoperations'
 */
store55c6c70f2693902cc00268886257b069.url = (options?: RouteQueryOptions) => {
    return store55c6c70f2693902cc00268886257b069.definition.url + queryParams(options)
}

/**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::store
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:29
 * @route '/api/v1/dispatchoperations'
 */
store55c6c70f2693902cc00268886257b069.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store55c6c70f2693902cc00268886257b069.url(options),
    method: 'post',
})

    /**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::store
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:29
 * @route '/api/v1/dispatchoperations'
 */
    const store55c6c70f2693902cc00268886257b069Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store55c6c70f2693902cc00268886257b069.url(options),
        method: 'post',
    })

            /**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::store
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:29
 * @route '/api/v1/dispatchoperations'
 */
        store55c6c70f2693902cc00268886257b069Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store55c6c70f2693902cc00268886257b069.url(options),
            method: 'post',
        })
    
    store55c6c70f2693902cc00268886257b069.form = store55c6c70f2693902cc00268886257b069Form
    /**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::store
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:29
 * @route '/dispatchoperations'
 */
const store7bdfdfaa6fde323b39e54ffbb0e76e51 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store7bdfdfaa6fde323b39e54ffbb0e76e51.url(options),
    method: 'post',
})

store7bdfdfaa6fde323b39e54ffbb0e76e51.definition = {
    methods: ["post"],
    url: '/dispatchoperations',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::store
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:29
 * @route '/dispatchoperations'
 */
store7bdfdfaa6fde323b39e54ffbb0e76e51.url = (options?: RouteQueryOptions) => {
    return store7bdfdfaa6fde323b39e54ffbb0e76e51.definition.url + queryParams(options)
}

/**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::store
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:29
 * @route '/dispatchoperations'
 */
store7bdfdfaa6fde323b39e54ffbb0e76e51.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store7bdfdfaa6fde323b39e54ffbb0e76e51.url(options),
    method: 'post',
})

    /**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::store
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:29
 * @route '/dispatchoperations'
 */
    const store7bdfdfaa6fde323b39e54ffbb0e76e51Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store7bdfdfaa6fde323b39e54ffbb0e76e51.url(options),
        method: 'post',
    })

            /**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::store
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:29
 * @route '/dispatchoperations'
 */
        store7bdfdfaa6fde323b39e54ffbb0e76e51Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store7bdfdfaa6fde323b39e54ffbb0e76e51.url(options),
            method: 'post',
        })
    
    store7bdfdfaa6fde323b39e54ffbb0e76e51.form = store7bdfdfaa6fde323b39e54ffbb0e76e51Form

/**
* Multiple routes resolve to \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::store, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `store['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const store = {
    '/api/v1/dispatchoperations': store55c6c70f2693902cc00268886257b069,
    '/dispatchoperations': store7bdfdfaa6fde323b39e54ffbb0e76e51,
}

/**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::show
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:34
 * @route '/api/v1/dispatchoperations/{dispatchoperation}'
 */
const showfd7be789153e00638011b3bc7211a97d = (args: { dispatchoperation: string | number } | [dispatchoperation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showfd7be789153e00638011b3bc7211a97d.url(args, options),
    method: 'get',
})

showfd7be789153e00638011b3bc7211a97d.definition = {
    methods: ["get","head"],
    url: '/api/v1/dispatchoperations/{dispatchoperation}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::show
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:34
 * @route '/api/v1/dispatchoperations/{dispatchoperation}'
 */
showfd7be789153e00638011b3bc7211a97d.url = (args: { dispatchoperation: string | number } | [dispatchoperation: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { dispatchoperation: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    dispatchoperation: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        dispatchoperation: args.dispatchoperation,
                }

    return showfd7be789153e00638011b3bc7211a97d.definition.url
            .replace('{dispatchoperation}', parsedArgs.dispatchoperation.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::show
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:34
 * @route '/api/v1/dispatchoperations/{dispatchoperation}'
 */
showfd7be789153e00638011b3bc7211a97d.get = (args: { dispatchoperation: string | number } | [dispatchoperation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showfd7be789153e00638011b3bc7211a97d.url(args, options),
    method: 'get',
})
/**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::show
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:34
 * @route '/api/v1/dispatchoperations/{dispatchoperation}'
 */
showfd7be789153e00638011b3bc7211a97d.head = (args: { dispatchoperation: string | number } | [dispatchoperation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showfd7be789153e00638011b3bc7211a97d.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::show
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:34
 * @route '/api/v1/dispatchoperations/{dispatchoperation}'
 */
    const showfd7be789153e00638011b3bc7211a97dForm = (args: { dispatchoperation: string | number } | [dispatchoperation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: showfd7be789153e00638011b3bc7211a97d.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::show
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:34
 * @route '/api/v1/dispatchoperations/{dispatchoperation}'
 */
        showfd7be789153e00638011b3bc7211a97dForm.get = (args: { dispatchoperation: string | number } | [dispatchoperation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showfd7be789153e00638011b3bc7211a97d.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::show
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:34
 * @route '/api/v1/dispatchoperations/{dispatchoperation}'
 */
        showfd7be789153e00638011b3bc7211a97dForm.head = (args: { dispatchoperation: string | number } | [dispatchoperation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showfd7be789153e00638011b3bc7211a97d.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    showfd7be789153e00638011b3bc7211a97d.form = showfd7be789153e00638011b3bc7211a97dForm
    /**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::show
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:34
 * @route '/dispatchoperations/{dispatchoperation}'
 */
const showbabc9871226ee5f70e217ffbc9acfae3 = (args: { dispatchoperation: string | number } | [dispatchoperation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showbabc9871226ee5f70e217ffbc9acfae3.url(args, options),
    method: 'get',
})

showbabc9871226ee5f70e217ffbc9acfae3.definition = {
    methods: ["get","head"],
    url: '/dispatchoperations/{dispatchoperation}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::show
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:34
 * @route '/dispatchoperations/{dispatchoperation}'
 */
showbabc9871226ee5f70e217ffbc9acfae3.url = (args: { dispatchoperation: string | number } | [dispatchoperation: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { dispatchoperation: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    dispatchoperation: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        dispatchoperation: args.dispatchoperation,
                }

    return showbabc9871226ee5f70e217ffbc9acfae3.definition.url
            .replace('{dispatchoperation}', parsedArgs.dispatchoperation.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::show
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:34
 * @route '/dispatchoperations/{dispatchoperation}'
 */
showbabc9871226ee5f70e217ffbc9acfae3.get = (args: { dispatchoperation: string | number } | [dispatchoperation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showbabc9871226ee5f70e217ffbc9acfae3.url(args, options),
    method: 'get',
})
/**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::show
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:34
 * @route '/dispatchoperations/{dispatchoperation}'
 */
showbabc9871226ee5f70e217ffbc9acfae3.head = (args: { dispatchoperation: string | number } | [dispatchoperation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showbabc9871226ee5f70e217ffbc9acfae3.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::show
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:34
 * @route '/dispatchoperations/{dispatchoperation}'
 */
    const showbabc9871226ee5f70e217ffbc9acfae3Form = (args: { dispatchoperation: string | number } | [dispatchoperation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: showbabc9871226ee5f70e217ffbc9acfae3.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::show
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:34
 * @route '/dispatchoperations/{dispatchoperation}'
 */
        showbabc9871226ee5f70e217ffbc9acfae3Form.get = (args: { dispatchoperation: string | number } | [dispatchoperation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showbabc9871226ee5f70e217ffbc9acfae3.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::show
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:34
 * @route '/dispatchoperations/{dispatchoperation}'
 */
        showbabc9871226ee5f70e217ffbc9acfae3Form.head = (args: { dispatchoperation: string | number } | [dispatchoperation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showbabc9871226ee5f70e217ffbc9acfae3.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    showbabc9871226ee5f70e217ffbc9acfae3.form = showbabc9871226ee5f70e217ffbc9acfae3Form

/**
* Multiple routes resolve to \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::show, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `show['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const show = {
    '/api/v1/dispatchoperations/{dispatchoperation}': showfd7be789153e00638011b3bc7211a97d,
    '/dispatchoperations/{dispatchoperation}': showbabc9871226ee5f70e217ffbc9acfae3,
}

/**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::update
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:50
 * @route '/api/v1/dispatchoperations/{dispatchoperation}'
 */
const updatefd7be789153e00638011b3bc7211a97d = (args: { dispatchoperation: string | number } | [dispatchoperation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updatefd7be789153e00638011b3bc7211a97d.url(args, options),
    method: 'put',
})

updatefd7be789153e00638011b3bc7211a97d.definition = {
    methods: ["put","patch"],
    url: '/api/v1/dispatchoperations/{dispatchoperation}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::update
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:50
 * @route '/api/v1/dispatchoperations/{dispatchoperation}'
 */
updatefd7be789153e00638011b3bc7211a97d.url = (args: { dispatchoperation: string | number } | [dispatchoperation: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { dispatchoperation: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    dispatchoperation: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        dispatchoperation: args.dispatchoperation,
                }

    return updatefd7be789153e00638011b3bc7211a97d.definition.url
            .replace('{dispatchoperation}', parsedArgs.dispatchoperation.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::update
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:50
 * @route '/api/v1/dispatchoperations/{dispatchoperation}'
 */
updatefd7be789153e00638011b3bc7211a97d.put = (args: { dispatchoperation: string | number } | [dispatchoperation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updatefd7be789153e00638011b3bc7211a97d.url(args, options),
    method: 'put',
})
/**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::update
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:50
 * @route '/api/v1/dispatchoperations/{dispatchoperation}'
 */
updatefd7be789153e00638011b3bc7211a97d.patch = (args: { dispatchoperation: string | number } | [dispatchoperation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updatefd7be789153e00638011b3bc7211a97d.url(args, options),
    method: 'patch',
})

    /**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::update
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:50
 * @route '/api/v1/dispatchoperations/{dispatchoperation}'
 */
    const updatefd7be789153e00638011b3bc7211a97dForm = (args: { dispatchoperation: string | number } | [dispatchoperation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: updatefd7be789153e00638011b3bc7211a97d.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::update
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:50
 * @route '/api/v1/dispatchoperations/{dispatchoperation}'
 */
        updatefd7be789153e00638011b3bc7211a97dForm.put = (args: { dispatchoperation: string | number } | [dispatchoperation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updatefd7be789153e00638011b3bc7211a97d.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::update
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:50
 * @route '/api/v1/dispatchoperations/{dispatchoperation}'
 */
        updatefd7be789153e00638011b3bc7211a97dForm.patch = (args: { dispatchoperation: string | number } | [dispatchoperation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updatefd7be789153e00638011b3bc7211a97d.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    updatefd7be789153e00638011b3bc7211a97d.form = updatefd7be789153e00638011b3bc7211a97dForm
    /**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::update
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:50
 * @route '/dispatchoperations/{dispatchoperation}'
 */
const updatebabc9871226ee5f70e217ffbc9acfae3 = (args: { dispatchoperation: string | number } | [dispatchoperation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updatebabc9871226ee5f70e217ffbc9acfae3.url(args, options),
    method: 'put',
})

updatebabc9871226ee5f70e217ffbc9acfae3.definition = {
    methods: ["put","patch"],
    url: '/dispatchoperations/{dispatchoperation}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::update
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:50
 * @route '/dispatchoperations/{dispatchoperation}'
 */
updatebabc9871226ee5f70e217ffbc9acfae3.url = (args: { dispatchoperation: string | number } | [dispatchoperation: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { dispatchoperation: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    dispatchoperation: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        dispatchoperation: args.dispatchoperation,
                }

    return updatebabc9871226ee5f70e217ffbc9acfae3.definition.url
            .replace('{dispatchoperation}', parsedArgs.dispatchoperation.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::update
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:50
 * @route '/dispatchoperations/{dispatchoperation}'
 */
updatebabc9871226ee5f70e217ffbc9acfae3.put = (args: { dispatchoperation: string | number } | [dispatchoperation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updatebabc9871226ee5f70e217ffbc9acfae3.url(args, options),
    method: 'put',
})
/**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::update
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:50
 * @route '/dispatchoperations/{dispatchoperation}'
 */
updatebabc9871226ee5f70e217ffbc9acfae3.patch = (args: { dispatchoperation: string | number } | [dispatchoperation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updatebabc9871226ee5f70e217ffbc9acfae3.url(args, options),
    method: 'patch',
})

    /**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::update
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:50
 * @route '/dispatchoperations/{dispatchoperation}'
 */
    const updatebabc9871226ee5f70e217ffbc9acfae3Form = (args: { dispatchoperation: string | number } | [dispatchoperation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: updatebabc9871226ee5f70e217ffbc9acfae3.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::update
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:50
 * @route '/dispatchoperations/{dispatchoperation}'
 */
        updatebabc9871226ee5f70e217ffbc9acfae3Form.put = (args: { dispatchoperation: string | number } | [dispatchoperation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updatebabc9871226ee5f70e217ffbc9acfae3.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::update
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:50
 * @route '/dispatchoperations/{dispatchoperation}'
 */
        updatebabc9871226ee5f70e217ffbc9acfae3Form.patch = (args: { dispatchoperation: string | number } | [dispatchoperation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updatebabc9871226ee5f70e217ffbc9acfae3.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    updatebabc9871226ee5f70e217ffbc9acfae3.form = updatebabc9871226ee5f70e217ffbc9acfae3Form

/**
* Multiple routes resolve to \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::update, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `update['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const update = {
    '/api/v1/dispatchoperations/{dispatchoperation}': updatefd7be789153e00638011b3bc7211a97d,
    '/dispatchoperations/{dispatchoperation}': updatebabc9871226ee5f70e217ffbc9acfae3,
}

/**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::destroy
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:55
 * @route '/api/v1/dispatchoperations/{dispatchoperation}'
 */
const destroyfd7be789153e00638011b3bc7211a97d = (args: { dispatchoperation: string | number } | [dispatchoperation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyfd7be789153e00638011b3bc7211a97d.url(args, options),
    method: 'delete',
})

destroyfd7be789153e00638011b3bc7211a97d.definition = {
    methods: ["delete"],
    url: '/api/v1/dispatchoperations/{dispatchoperation}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::destroy
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:55
 * @route '/api/v1/dispatchoperations/{dispatchoperation}'
 */
destroyfd7be789153e00638011b3bc7211a97d.url = (args: { dispatchoperation: string | number } | [dispatchoperation: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { dispatchoperation: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    dispatchoperation: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        dispatchoperation: args.dispatchoperation,
                }

    return destroyfd7be789153e00638011b3bc7211a97d.definition.url
            .replace('{dispatchoperation}', parsedArgs.dispatchoperation.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::destroy
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:55
 * @route '/api/v1/dispatchoperations/{dispatchoperation}'
 */
destroyfd7be789153e00638011b3bc7211a97d.delete = (args: { dispatchoperation: string | number } | [dispatchoperation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyfd7be789153e00638011b3bc7211a97d.url(args, options),
    method: 'delete',
})

    /**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::destroy
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:55
 * @route '/api/v1/dispatchoperations/{dispatchoperation}'
 */
    const destroyfd7be789153e00638011b3bc7211a97dForm = (args: { dispatchoperation: string | number } | [dispatchoperation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroyfd7be789153e00638011b3bc7211a97d.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::destroy
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:55
 * @route '/api/v1/dispatchoperations/{dispatchoperation}'
 */
        destroyfd7be789153e00638011b3bc7211a97dForm.delete = (args: { dispatchoperation: string | number } | [dispatchoperation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroyfd7be789153e00638011b3bc7211a97d.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroyfd7be789153e00638011b3bc7211a97d.form = destroyfd7be789153e00638011b3bc7211a97dForm
    /**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::destroy
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:55
 * @route '/dispatchoperations/{dispatchoperation}'
 */
const destroybabc9871226ee5f70e217ffbc9acfae3 = (args: { dispatchoperation: string | number } | [dispatchoperation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroybabc9871226ee5f70e217ffbc9acfae3.url(args, options),
    method: 'delete',
})

destroybabc9871226ee5f70e217ffbc9acfae3.definition = {
    methods: ["delete"],
    url: '/dispatchoperations/{dispatchoperation}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::destroy
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:55
 * @route '/dispatchoperations/{dispatchoperation}'
 */
destroybabc9871226ee5f70e217ffbc9acfae3.url = (args: { dispatchoperation: string | number } | [dispatchoperation: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { dispatchoperation: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    dispatchoperation: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        dispatchoperation: args.dispatchoperation,
                }

    return destroybabc9871226ee5f70e217ffbc9acfae3.definition.url
            .replace('{dispatchoperation}', parsedArgs.dispatchoperation.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::destroy
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:55
 * @route '/dispatchoperations/{dispatchoperation}'
 */
destroybabc9871226ee5f70e217ffbc9acfae3.delete = (args: { dispatchoperation: string | number } | [dispatchoperation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroybabc9871226ee5f70e217ffbc9acfae3.url(args, options),
    method: 'delete',
})

    /**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::destroy
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:55
 * @route '/dispatchoperations/{dispatchoperation}'
 */
    const destroybabc9871226ee5f70e217ffbc9acfae3Form = (args: { dispatchoperation: string | number } | [dispatchoperation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroybabc9871226ee5f70e217ffbc9acfae3.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::destroy
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:55
 * @route '/dispatchoperations/{dispatchoperation}'
 */
        destroybabc9871226ee5f70e217ffbc9acfae3Form.delete = (args: { dispatchoperation: string | number } | [dispatchoperation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroybabc9871226ee5f70e217ffbc9acfae3.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroybabc9871226ee5f70e217ffbc9acfae3.form = destroybabc9871226ee5f70e217ffbc9acfae3Form

/**
* Multiple routes resolve to \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::destroy, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `destroy['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const destroy = {
    '/api/v1/dispatchoperations/{dispatchoperation}': destroyfd7be789153e00638011b3bc7211a97d,
    '/dispatchoperations/{dispatchoperation}': destroybabc9871226ee5f70e217ffbc9acfae3,
}

/**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::create
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:21
 * @route '/dispatchoperations/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dispatchoperations/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::create
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:21
 * @route '/dispatchoperations/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::create
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:21
 * @route '/dispatchoperations/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::create
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:21
 * @route '/dispatchoperations/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::create
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:21
 * @route '/dispatchoperations/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::create
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:21
 * @route '/dispatchoperations/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::create
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:21
 * @route '/dispatchoperations/create'
 */
        createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    create.form = createForm
/**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::edit
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:42
 * @route '/dispatchoperations/{dispatchoperation}/edit'
 */
export const edit = (args: { dispatchoperation: string | number } | [dispatchoperation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dispatchoperations/{dispatchoperation}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::edit
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:42
 * @route '/dispatchoperations/{dispatchoperation}/edit'
 */
edit.url = (args: { dispatchoperation: string | number } | [dispatchoperation: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { dispatchoperation: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    dispatchoperation: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        dispatchoperation: args.dispatchoperation,
                }

    return edit.definition.url
            .replace('{dispatchoperation}', parsedArgs.dispatchoperation.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::edit
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:42
 * @route '/dispatchoperations/{dispatchoperation}/edit'
 */
edit.get = (args: { dispatchoperation: string | number } | [dispatchoperation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::edit
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:42
 * @route '/dispatchoperations/{dispatchoperation}/edit'
 */
edit.head = (args: { dispatchoperation: string | number } | [dispatchoperation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::edit
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:42
 * @route '/dispatchoperations/{dispatchoperation}/edit'
 */
    const editForm = (args: { dispatchoperation: string | number } | [dispatchoperation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::edit
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:42
 * @route '/dispatchoperations/{dispatchoperation}/edit'
 */
        editForm.get = (args: { dispatchoperation: string | number } | [dispatchoperation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::edit
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:42
 * @route '/dispatchoperations/{dispatchoperation}/edit'
 */
        editForm.head = (args: { dispatchoperation: string | number } | [dispatchoperation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
const DispatchOperationController = { index, store, show, update, destroy, create, edit }

export default DispatchOperationController