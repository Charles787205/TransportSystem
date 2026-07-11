import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Modules\Client\Http\Controllers\ClientController::index
 * @see Modules/Client/app/Http/Controllers/ClientController.php:13
 * @route '/api/v1/clients'
 */
const index7d355ffbb22e82adf0b900d14ee39dc4 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index7d355ffbb22e82adf0b900d14ee39dc4.url(options),
    method: 'get',
})

index7d355ffbb22e82adf0b900d14ee39dc4.definition = {
    methods: ["get","head"],
    url: '/api/v1/clients',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Client\Http\Controllers\ClientController::index
 * @see Modules/Client/app/Http/Controllers/ClientController.php:13
 * @route '/api/v1/clients'
 */
index7d355ffbb22e82adf0b900d14ee39dc4.url = (options?: RouteQueryOptions) => {
    return index7d355ffbb22e82adf0b900d14ee39dc4.definition.url + queryParams(options)
}

/**
* @see \Modules\Client\Http\Controllers\ClientController::index
 * @see Modules/Client/app/Http/Controllers/ClientController.php:13
 * @route '/api/v1/clients'
 */
index7d355ffbb22e82adf0b900d14ee39dc4.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index7d355ffbb22e82adf0b900d14ee39dc4.url(options),
    method: 'get',
})
/**
* @see \Modules\Client\Http\Controllers\ClientController::index
 * @see Modules/Client/app/Http/Controllers/ClientController.php:13
 * @route '/api/v1/clients'
 */
index7d355ffbb22e82adf0b900d14ee39dc4.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index7d355ffbb22e82adf0b900d14ee39dc4.url(options),
    method: 'head',
})

    /**
* @see \Modules\Client\Http\Controllers\ClientController::index
 * @see Modules/Client/app/Http/Controllers/ClientController.php:13
 * @route '/api/v1/clients'
 */
    const index7d355ffbb22e82adf0b900d14ee39dc4Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index7d355ffbb22e82adf0b900d14ee39dc4.url(options),
        method: 'get',
    })

            /**
* @see \Modules\Client\Http\Controllers\ClientController::index
 * @see Modules/Client/app/Http/Controllers/ClientController.php:13
 * @route '/api/v1/clients'
 */
        index7d355ffbb22e82adf0b900d14ee39dc4Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index7d355ffbb22e82adf0b900d14ee39dc4.url(options),
            method: 'get',
        })
            /**
* @see \Modules\Client\Http\Controllers\ClientController::index
 * @see Modules/Client/app/Http/Controllers/ClientController.php:13
 * @route '/api/v1/clients'
 */
        index7d355ffbb22e82adf0b900d14ee39dc4Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index7d355ffbb22e82adf0b900d14ee39dc4.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index7d355ffbb22e82adf0b900d14ee39dc4.form = index7d355ffbb22e82adf0b900d14ee39dc4Form
    /**
* @see \Modules\Client\Http\Controllers\ClientController::index
 * @see Modules/Client/app/Http/Controllers/ClientController.php:13
 * @route '/clients'
 */
const index5c268bd1cbc5dd5a03424a10190e8c18 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index5c268bd1cbc5dd5a03424a10190e8c18.url(options),
    method: 'get',
})

index5c268bd1cbc5dd5a03424a10190e8c18.definition = {
    methods: ["get","head"],
    url: '/clients',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Client\Http\Controllers\ClientController::index
 * @see Modules/Client/app/Http/Controllers/ClientController.php:13
 * @route '/clients'
 */
index5c268bd1cbc5dd5a03424a10190e8c18.url = (options?: RouteQueryOptions) => {
    return index5c268bd1cbc5dd5a03424a10190e8c18.definition.url + queryParams(options)
}

/**
* @see \Modules\Client\Http\Controllers\ClientController::index
 * @see Modules/Client/app/Http/Controllers/ClientController.php:13
 * @route '/clients'
 */
index5c268bd1cbc5dd5a03424a10190e8c18.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index5c268bd1cbc5dd5a03424a10190e8c18.url(options),
    method: 'get',
})
/**
* @see \Modules\Client\Http\Controllers\ClientController::index
 * @see Modules/Client/app/Http/Controllers/ClientController.php:13
 * @route '/clients'
 */
index5c268bd1cbc5dd5a03424a10190e8c18.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index5c268bd1cbc5dd5a03424a10190e8c18.url(options),
    method: 'head',
})

    /**
* @see \Modules\Client\Http\Controllers\ClientController::index
 * @see Modules/Client/app/Http/Controllers/ClientController.php:13
 * @route '/clients'
 */
    const index5c268bd1cbc5dd5a03424a10190e8c18Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index5c268bd1cbc5dd5a03424a10190e8c18.url(options),
        method: 'get',
    })

            /**
* @see \Modules\Client\Http\Controllers\ClientController::index
 * @see Modules/Client/app/Http/Controllers/ClientController.php:13
 * @route '/clients'
 */
        index5c268bd1cbc5dd5a03424a10190e8c18Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index5c268bd1cbc5dd5a03424a10190e8c18.url(options),
            method: 'get',
        })
            /**
* @see \Modules\Client\Http\Controllers\ClientController::index
 * @see Modules/Client/app/Http/Controllers/ClientController.php:13
 * @route '/clients'
 */
        index5c268bd1cbc5dd5a03424a10190e8c18Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index5c268bd1cbc5dd5a03424a10190e8c18.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index5c268bd1cbc5dd5a03424a10190e8c18.form = index5c268bd1cbc5dd5a03424a10190e8c18Form

/**
* Multiple routes resolve to \Modules\Client\Http\Controllers\ClientController::index, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `index['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const index = {
    '/api/v1/clients': index7d355ffbb22e82adf0b900d14ee39dc4,
    '/clients': index5c268bd1cbc5dd5a03424a10190e8c18,
}

/**
* @see \Modules\Client\Http\Controllers\ClientController::store
 * @see Modules/Client/app/Http/Controllers/ClientController.php:34
 * @route '/api/v1/clients'
 */
const store7d355ffbb22e82adf0b900d14ee39dc4 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store7d355ffbb22e82adf0b900d14ee39dc4.url(options),
    method: 'post',
})

store7d355ffbb22e82adf0b900d14ee39dc4.definition = {
    methods: ["post"],
    url: '/api/v1/clients',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Client\Http\Controllers\ClientController::store
 * @see Modules/Client/app/Http/Controllers/ClientController.php:34
 * @route '/api/v1/clients'
 */
store7d355ffbb22e82adf0b900d14ee39dc4.url = (options?: RouteQueryOptions) => {
    return store7d355ffbb22e82adf0b900d14ee39dc4.definition.url + queryParams(options)
}

/**
* @see \Modules\Client\Http\Controllers\ClientController::store
 * @see Modules/Client/app/Http/Controllers/ClientController.php:34
 * @route '/api/v1/clients'
 */
store7d355ffbb22e82adf0b900d14ee39dc4.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store7d355ffbb22e82adf0b900d14ee39dc4.url(options),
    method: 'post',
})

    /**
* @see \Modules\Client\Http\Controllers\ClientController::store
 * @see Modules/Client/app/Http/Controllers/ClientController.php:34
 * @route '/api/v1/clients'
 */
    const store7d355ffbb22e82adf0b900d14ee39dc4Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store7d355ffbb22e82adf0b900d14ee39dc4.url(options),
        method: 'post',
    })

            /**
* @see \Modules\Client\Http\Controllers\ClientController::store
 * @see Modules/Client/app/Http/Controllers/ClientController.php:34
 * @route '/api/v1/clients'
 */
        store7d355ffbb22e82adf0b900d14ee39dc4Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store7d355ffbb22e82adf0b900d14ee39dc4.url(options),
            method: 'post',
        })
    
    store7d355ffbb22e82adf0b900d14ee39dc4.form = store7d355ffbb22e82adf0b900d14ee39dc4Form
    /**
* @see \Modules\Client\Http\Controllers\ClientController::store
 * @see Modules/Client/app/Http/Controllers/ClientController.php:34
 * @route '/clients'
 */
const store5c268bd1cbc5dd5a03424a10190e8c18 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store5c268bd1cbc5dd5a03424a10190e8c18.url(options),
    method: 'post',
})

store5c268bd1cbc5dd5a03424a10190e8c18.definition = {
    methods: ["post"],
    url: '/clients',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Client\Http\Controllers\ClientController::store
 * @see Modules/Client/app/Http/Controllers/ClientController.php:34
 * @route '/clients'
 */
store5c268bd1cbc5dd5a03424a10190e8c18.url = (options?: RouteQueryOptions) => {
    return store5c268bd1cbc5dd5a03424a10190e8c18.definition.url + queryParams(options)
}

/**
* @see \Modules\Client\Http\Controllers\ClientController::store
 * @see Modules/Client/app/Http/Controllers/ClientController.php:34
 * @route '/clients'
 */
store5c268bd1cbc5dd5a03424a10190e8c18.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store5c268bd1cbc5dd5a03424a10190e8c18.url(options),
    method: 'post',
})

    /**
* @see \Modules\Client\Http\Controllers\ClientController::store
 * @see Modules/Client/app/Http/Controllers/ClientController.php:34
 * @route '/clients'
 */
    const store5c268bd1cbc5dd5a03424a10190e8c18Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store5c268bd1cbc5dd5a03424a10190e8c18.url(options),
        method: 'post',
    })

            /**
* @see \Modules\Client\Http\Controllers\ClientController::store
 * @see Modules/Client/app/Http/Controllers/ClientController.php:34
 * @route '/clients'
 */
        store5c268bd1cbc5dd5a03424a10190e8c18Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store5c268bd1cbc5dd5a03424a10190e8c18.url(options),
            method: 'post',
        })
    
    store5c268bd1cbc5dd5a03424a10190e8c18.form = store5c268bd1cbc5dd5a03424a10190e8c18Form

/**
* Multiple routes resolve to \Modules\Client\Http\Controllers\ClientController::store, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `store['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const store = {
    '/api/v1/clients': store7d355ffbb22e82adf0b900d14ee39dc4,
    '/clients': store5c268bd1cbc5dd5a03424a10190e8c18,
}

/**
* @see \Modules\Client\Http\Controllers\ClientController::show
 * @see Modules/Client/app/Http/Controllers/ClientController.php:39
 * @route '/api/v1/clients/{client}'
 */
const showea31b889094195d46e90e7157acd1e61 = (args: { client: string | number } | [client: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showea31b889094195d46e90e7157acd1e61.url(args, options),
    method: 'get',
})

showea31b889094195d46e90e7157acd1e61.definition = {
    methods: ["get","head"],
    url: '/api/v1/clients/{client}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Client\Http\Controllers\ClientController::show
 * @see Modules/Client/app/Http/Controllers/ClientController.php:39
 * @route '/api/v1/clients/{client}'
 */
showea31b889094195d46e90e7157acd1e61.url = (args: { client: string | number } | [client: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { client: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    client: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        client: args.client,
                }

    return showea31b889094195d46e90e7157acd1e61.definition.url
            .replace('{client}', parsedArgs.client.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Client\Http\Controllers\ClientController::show
 * @see Modules/Client/app/Http/Controllers/ClientController.php:39
 * @route '/api/v1/clients/{client}'
 */
showea31b889094195d46e90e7157acd1e61.get = (args: { client: string | number } | [client: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showea31b889094195d46e90e7157acd1e61.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Client\Http\Controllers\ClientController::show
 * @see Modules/Client/app/Http/Controllers/ClientController.php:39
 * @route '/api/v1/clients/{client}'
 */
showea31b889094195d46e90e7157acd1e61.head = (args: { client: string | number } | [client: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showea31b889094195d46e90e7157acd1e61.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Client\Http\Controllers\ClientController::show
 * @see Modules/Client/app/Http/Controllers/ClientController.php:39
 * @route '/api/v1/clients/{client}'
 */
    const showea31b889094195d46e90e7157acd1e61Form = (args: { client: string | number } | [client: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: showea31b889094195d46e90e7157acd1e61.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Client\Http\Controllers\ClientController::show
 * @see Modules/Client/app/Http/Controllers/ClientController.php:39
 * @route '/api/v1/clients/{client}'
 */
        showea31b889094195d46e90e7157acd1e61Form.get = (args: { client: string | number } | [client: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showea31b889094195d46e90e7157acd1e61.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Client\Http\Controllers\ClientController::show
 * @see Modules/Client/app/Http/Controllers/ClientController.php:39
 * @route '/api/v1/clients/{client}'
 */
        showea31b889094195d46e90e7157acd1e61Form.head = (args: { client: string | number } | [client: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showea31b889094195d46e90e7157acd1e61.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    showea31b889094195d46e90e7157acd1e61.form = showea31b889094195d46e90e7157acd1e61Form
    /**
* @see \Modules\Client\Http\Controllers\ClientController::show
 * @see Modules/Client/app/Http/Controllers/ClientController.php:39
 * @route '/clients/{client}'
 */
const show70e3494bda45dc4c18102ecad7998ceb = (args: { client: string | number } | [client: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show70e3494bda45dc4c18102ecad7998ceb.url(args, options),
    method: 'get',
})

show70e3494bda45dc4c18102ecad7998ceb.definition = {
    methods: ["get","head"],
    url: '/clients/{client}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Client\Http\Controllers\ClientController::show
 * @see Modules/Client/app/Http/Controllers/ClientController.php:39
 * @route '/clients/{client}'
 */
show70e3494bda45dc4c18102ecad7998ceb.url = (args: { client: string | number } | [client: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { client: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    client: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        client: args.client,
                }

    return show70e3494bda45dc4c18102ecad7998ceb.definition.url
            .replace('{client}', parsedArgs.client.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Client\Http\Controllers\ClientController::show
 * @see Modules/Client/app/Http/Controllers/ClientController.php:39
 * @route '/clients/{client}'
 */
show70e3494bda45dc4c18102ecad7998ceb.get = (args: { client: string | number } | [client: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show70e3494bda45dc4c18102ecad7998ceb.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Client\Http\Controllers\ClientController::show
 * @see Modules/Client/app/Http/Controllers/ClientController.php:39
 * @route '/clients/{client}'
 */
show70e3494bda45dc4c18102ecad7998ceb.head = (args: { client: string | number } | [client: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show70e3494bda45dc4c18102ecad7998ceb.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Client\Http\Controllers\ClientController::show
 * @see Modules/Client/app/Http/Controllers/ClientController.php:39
 * @route '/clients/{client}'
 */
    const show70e3494bda45dc4c18102ecad7998cebForm = (args: { client: string | number } | [client: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show70e3494bda45dc4c18102ecad7998ceb.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Client\Http\Controllers\ClientController::show
 * @see Modules/Client/app/Http/Controllers/ClientController.php:39
 * @route '/clients/{client}'
 */
        show70e3494bda45dc4c18102ecad7998cebForm.get = (args: { client: string | number } | [client: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show70e3494bda45dc4c18102ecad7998ceb.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Client\Http\Controllers\ClientController::show
 * @see Modules/Client/app/Http/Controllers/ClientController.php:39
 * @route '/clients/{client}'
 */
        show70e3494bda45dc4c18102ecad7998cebForm.head = (args: { client: string | number } | [client: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show70e3494bda45dc4c18102ecad7998ceb.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show70e3494bda45dc4c18102ecad7998ceb.form = show70e3494bda45dc4c18102ecad7998cebForm

/**
* Multiple routes resolve to \Modules\Client\Http\Controllers\ClientController::show, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `show['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const show = {
    '/api/v1/clients/{client}': showea31b889094195d46e90e7157acd1e61,
    '/clients/{client}': show70e3494bda45dc4c18102ecad7998ceb,
}

/**
* @see \Modules\Client\Http\Controllers\ClientController::update
 * @see Modules/Client/app/Http/Controllers/ClientController.php:55
 * @route '/api/v1/clients/{client}'
 */
const updateea31b889094195d46e90e7157acd1e61 = (args: { client: string | number } | [client: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateea31b889094195d46e90e7157acd1e61.url(args, options),
    method: 'put',
})

updateea31b889094195d46e90e7157acd1e61.definition = {
    methods: ["put","patch"],
    url: '/api/v1/clients/{client}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Client\Http\Controllers\ClientController::update
 * @see Modules/Client/app/Http/Controllers/ClientController.php:55
 * @route '/api/v1/clients/{client}'
 */
updateea31b889094195d46e90e7157acd1e61.url = (args: { client: string | number } | [client: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { client: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    client: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        client: args.client,
                }

    return updateea31b889094195d46e90e7157acd1e61.definition.url
            .replace('{client}', parsedArgs.client.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Client\Http\Controllers\ClientController::update
 * @see Modules/Client/app/Http/Controllers/ClientController.php:55
 * @route '/api/v1/clients/{client}'
 */
updateea31b889094195d46e90e7157acd1e61.put = (args: { client: string | number } | [client: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateea31b889094195d46e90e7157acd1e61.url(args, options),
    method: 'put',
})
/**
* @see \Modules\Client\Http\Controllers\ClientController::update
 * @see Modules/Client/app/Http/Controllers/ClientController.php:55
 * @route '/api/v1/clients/{client}'
 */
updateea31b889094195d46e90e7157acd1e61.patch = (args: { client: string | number } | [client: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateea31b889094195d46e90e7157acd1e61.url(args, options),
    method: 'patch',
})

    /**
* @see \Modules\Client\Http\Controllers\ClientController::update
 * @see Modules/Client/app/Http/Controllers/ClientController.php:55
 * @route '/api/v1/clients/{client}'
 */
    const updateea31b889094195d46e90e7157acd1e61Form = (args: { client: string | number } | [client: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: updateea31b889094195d46e90e7157acd1e61.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Modules\Client\Http\Controllers\ClientController::update
 * @see Modules/Client/app/Http/Controllers/ClientController.php:55
 * @route '/api/v1/clients/{client}'
 */
        updateea31b889094195d46e90e7157acd1e61Form.put = (args: { client: string | number } | [client: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updateea31b889094195d46e90e7157acd1e61.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \Modules\Client\Http\Controllers\ClientController::update
 * @see Modules/Client/app/Http/Controllers/ClientController.php:55
 * @route '/api/v1/clients/{client}'
 */
        updateea31b889094195d46e90e7157acd1e61Form.patch = (args: { client: string | number } | [client: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updateea31b889094195d46e90e7157acd1e61.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    updateea31b889094195d46e90e7157acd1e61.form = updateea31b889094195d46e90e7157acd1e61Form
    /**
* @see \Modules\Client\Http\Controllers\ClientController::update
 * @see Modules/Client/app/Http/Controllers/ClientController.php:55
 * @route '/clients/{client}'
 */
const update70e3494bda45dc4c18102ecad7998ceb = (args: { client: string | number } | [client: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update70e3494bda45dc4c18102ecad7998ceb.url(args, options),
    method: 'put',
})

update70e3494bda45dc4c18102ecad7998ceb.definition = {
    methods: ["put","patch"],
    url: '/clients/{client}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Client\Http\Controllers\ClientController::update
 * @see Modules/Client/app/Http/Controllers/ClientController.php:55
 * @route '/clients/{client}'
 */
update70e3494bda45dc4c18102ecad7998ceb.url = (args: { client: string | number } | [client: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { client: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    client: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        client: args.client,
                }

    return update70e3494bda45dc4c18102ecad7998ceb.definition.url
            .replace('{client}', parsedArgs.client.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Client\Http\Controllers\ClientController::update
 * @see Modules/Client/app/Http/Controllers/ClientController.php:55
 * @route '/clients/{client}'
 */
update70e3494bda45dc4c18102ecad7998ceb.put = (args: { client: string | number } | [client: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update70e3494bda45dc4c18102ecad7998ceb.url(args, options),
    method: 'put',
})
/**
* @see \Modules\Client\Http\Controllers\ClientController::update
 * @see Modules/Client/app/Http/Controllers/ClientController.php:55
 * @route '/clients/{client}'
 */
update70e3494bda45dc4c18102ecad7998ceb.patch = (args: { client: string | number } | [client: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update70e3494bda45dc4c18102ecad7998ceb.url(args, options),
    method: 'patch',
})

    /**
* @see \Modules\Client\Http\Controllers\ClientController::update
 * @see Modules/Client/app/Http/Controllers/ClientController.php:55
 * @route '/clients/{client}'
 */
    const update70e3494bda45dc4c18102ecad7998cebForm = (args: { client: string | number } | [client: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update70e3494bda45dc4c18102ecad7998ceb.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Modules\Client\Http\Controllers\ClientController::update
 * @see Modules/Client/app/Http/Controllers/ClientController.php:55
 * @route '/clients/{client}'
 */
        update70e3494bda45dc4c18102ecad7998cebForm.put = (args: { client: string | number } | [client: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update70e3494bda45dc4c18102ecad7998ceb.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \Modules\Client\Http\Controllers\ClientController::update
 * @see Modules/Client/app/Http/Controllers/ClientController.php:55
 * @route '/clients/{client}'
 */
        update70e3494bda45dc4c18102ecad7998cebForm.patch = (args: { client: string | number } | [client: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update70e3494bda45dc4c18102ecad7998ceb.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update70e3494bda45dc4c18102ecad7998ceb.form = update70e3494bda45dc4c18102ecad7998cebForm

/**
* Multiple routes resolve to \Modules\Client\Http\Controllers\ClientController::update, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `update['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const update = {
    '/api/v1/clients/{client}': updateea31b889094195d46e90e7157acd1e61,
    '/clients/{client}': update70e3494bda45dc4c18102ecad7998ceb,
}

/**
* @see \Modules\Client\Http\Controllers\ClientController::destroy
 * @see Modules/Client/app/Http/Controllers/ClientController.php:60
 * @route '/api/v1/clients/{client}'
 */
const destroyea31b889094195d46e90e7157acd1e61 = (args: { client: string | number } | [client: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyea31b889094195d46e90e7157acd1e61.url(args, options),
    method: 'delete',
})

destroyea31b889094195d46e90e7157acd1e61.definition = {
    methods: ["delete"],
    url: '/api/v1/clients/{client}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Client\Http\Controllers\ClientController::destroy
 * @see Modules/Client/app/Http/Controllers/ClientController.php:60
 * @route '/api/v1/clients/{client}'
 */
destroyea31b889094195d46e90e7157acd1e61.url = (args: { client: string | number } | [client: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { client: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    client: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        client: args.client,
                }

    return destroyea31b889094195d46e90e7157acd1e61.definition.url
            .replace('{client}', parsedArgs.client.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Client\Http\Controllers\ClientController::destroy
 * @see Modules/Client/app/Http/Controllers/ClientController.php:60
 * @route '/api/v1/clients/{client}'
 */
destroyea31b889094195d46e90e7157acd1e61.delete = (args: { client: string | number } | [client: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyea31b889094195d46e90e7157acd1e61.url(args, options),
    method: 'delete',
})

    /**
* @see \Modules\Client\Http\Controllers\ClientController::destroy
 * @see Modules/Client/app/Http/Controllers/ClientController.php:60
 * @route '/api/v1/clients/{client}'
 */
    const destroyea31b889094195d46e90e7157acd1e61Form = (args: { client: string | number } | [client: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroyea31b889094195d46e90e7157acd1e61.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Modules\Client\Http\Controllers\ClientController::destroy
 * @see Modules/Client/app/Http/Controllers/ClientController.php:60
 * @route '/api/v1/clients/{client}'
 */
        destroyea31b889094195d46e90e7157acd1e61Form.delete = (args: { client: string | number } | [client: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroyea31b889094195d46e90e7157acd1e61.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroyea31b889094195d46e90e7157acd1e61.form = destroyea31b889094195d46e90e7157acd1e61Form
    /**
* @see \Modules\Client\Http\Controllers\ClientController::destroy
 * @see Modules/Client/app/Http/Controllers/ClientController.php:60
 * @route '/clients/{client}'
 */
const destroy70e3494bda45dc4c18102ecad7998ceb = (args: { client: string | number } | [client: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy70e3494bda45dc4c18102ecad7998ceb.url(args, options),
    method: 'delete',
})

destroy70e3494bda45dc4c18102ecad7998ceb.definition = {
    methods: ["delete"],
    url: '/clients/{client}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Client\Http\Controllers\ClientController::destroy
 * @see Modules/Client/app/Http/Controllers/ClientController.php:60
 * @route '/clients/{client}'
 */
destroy70e3494bda45dc4c18102ecad7998ceb.url = (args: { client: string | number } | [client: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { client: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    client: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        client: args.client,
                }

    return destroy70e3494bda45dc4c18102ecad7998ceb.definition.url
            .replace('{client}', parsedArgs.client.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Client\Http\Controllers\ClientController::destroy
 * @see Modules/Client/app/Http/Controllers/ClientController.php:60
 * @route '/clients/{client}'
 */
destroy70e3494bda45dc4c18102ecad7998ceb.delete = (args: { client: string | number } | [client: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy70e3494bda45dc4c18102ecad7998ceb.url(args, options),
    method: 'delete',
})

    /**
* @see \Modules\Client\Http\Controllers\ClientController::destroy
 * @see Modules/Client/app/Http/Controllers/ClientController.php:60
 * @route '/clients/{client}'
 */
    const destroy70e3494bda45dc4c18102ecad7998cebForm = (args: { client: string | number } | [client: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy70e3494bda45dc4c18102ecad7998ceb.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Modules\Client\Http\Controllers\ClientController::destroy
 * @see Modules/Client/app/Http/Controllers/ClientController.php:60
 * @route '/clients/{client}'
 */
        destroy70e3494bda45dc4c18102ecad7998cebForm.delete = (args: { client: string | number } | [client: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy70e3494bda45dc4c18102ecad7998ceb.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy70e3494bda45dc4c18102ecad7998ceb.form = destroy70e3494bda45dc4c18102ecad7998cebForm

/**
* Multiple routes resolve to \Modules\Client\Http\Controllers\ClientController::destroy, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `destroy['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const destroy = {
    '/api/v1/clients/{client}': destroyea31b889094195d46e90e7157acd1e61,
    '/clients/{client}': destroy70e3494bda45dc4c18102ecad7998ceb,
}

/**
* @see \Modules\Client\Http\Controllers\ClientController::create
 * @see Modules/Client/app/Http/Controllers/ClientController.php:24
 * @route '/clients/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/clients/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Client\Http\Controllers\ClientController::create
 * @see Modules/Client/app/Http/Controllers/ClientController.php:24
 * @route '/clients/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Client\Http\Controllers\ClientController::create
 * @see Modules/Client/app/Http/Controllers/ClientController.php:24
 * @route '/clients/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \Modules\Client\Http\Controllers\ClientController::create
 * @see Modules/Client/app/Http/Controllers/ClientController.php:24
 * @route '/clients/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \Modules\Client\Http\Controllers\ClientController::create
 * @see Modules/Client/app/Http/Controllers/ClientController.php:24
 * @route '/clients/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \Modules\Client\Http\Controllers\ClientController::create
 * @see Modules/Client/app/Http/Controllers/ClientController.php:24
 * @route '/clients/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \Modules\Client\Http\Controllers\ClientController::create
 * @see Modules/Client/app/Http/Controllers/ClientController.php:24
 * @route '/clients/create'
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
* @see \Modules\Client\Http\Controllers\ClientController::edit
 * @see Modules/Client/app/Http/Controllers/ClientController.php:47
 * @route '/clients/{client}/edit'
 */
export const edit = (args: { client: string | number } | [client: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/clients/{client}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Client\Http\Controllers\ClientController::edit
 * @see Modules/Client/app/Http/Controllers/ClientController.php:47
 * @route '/clients/{client}/edit'
 */
edit.url = (args: { client: string | number } | [client: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { client: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    client: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        client: args.client,
                }

    return edit.definition.url
            .replace('{client}', parsedArgs.client.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Client\Http\Controllers\ClientController::edit
 * @see Modules/Client/app/Http/Controllers/ClientController.php:47
 * @route '/clients/{client}/edit'
 */
edit.get = (args: { client: string | number } | [client: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Client\Http\Controllers\ClientController::edit
 * @see Modules/Client/app/Http/Controllers/ClientController.php:47
 * @route '/clients/{client}/edit'
 */
edit.head = (args: { client: string | number } | [client: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Client\Http\Controllers\ClientController::edit
 * @see Modules/Client/app/Http/Controllers/ClientController.php:47
 * @route '/clients/{client}/edit'
 */
    const editForm = (args: { client: string | number } | [client: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Client\Http\Controllers\ClientController::edit
 * @see Modules/Client/app/Http/Controllers/ClientController.php:47
 * @route '/clients/{client}/edit'
 */
        editForm.get = (args: { client: string | number } | [client: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Client\Http\Controllers\ClientController::edit
 * @see Modules/Client/app/Http/Controllers/ClientController.php:47
 * @route '/clients/{client}/edit'
 */
        editForm.head = (args: { client: string | number } | [client: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
const ClientController = { index, store, show, update, destroy, create, edit }

export default ClientController