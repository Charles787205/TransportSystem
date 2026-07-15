import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Modules\Planning\Http\Controllers\PlanningController::index
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:16
 * @route '/api/v1/plannings'
 */
const index918d0b4cecfea7ba08467c9ce8fa5be3 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index918d0b4cecfea7ba08467c9ce8fa5be3.url(options),
    method: 'get',
})

index918d0b4cecfea7ba08467c9ce8fa5be3.definition = {
    methods: ["get","head"],
    url: '/api/v1/plannings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Planning\Http\Controllers\PlanningController::index
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:16
 * @route '/api/v1/plannings'
 */
index918d0b4cecfea7ba08467c9ce8fa5be3.url = (options?: RouteQueryOptions) => {
    return index918d0b4cecfea7ba08467c9ce8fa5be3.definition.url + queryParams(options)
}

/**
* @see \Modules\Planning\Http\Controllers\PlanningController::index
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:16
 * @route '/api/v1/plannings'
 */
index918d0b4cecfea7ba08467c9ce8fa5be3.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index918d0b4cecfea7ba08467c9ce8fa5be3.url(options),
    method: 'get',
})
/**
* @see \Modules\Planning\Http\Controllers\PlanningController::index
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:16
 * @route '/api/v1/plannings'
 */
index918d0b4cecfea7ba08467c9ce8fa5be3.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index918d0b4cecfea7ba08467c9ce8fa5be3.url(options),
    method: 'head',
})

    /**
* @see \Modules\Planning\Http\Controllers\PlanningController::index
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:16
 * @route '/api/v1/plannings'
 */
    const index918d0b4cecfea7ba08467c9ce8fa5be3Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index918d0b4cecfea7ba08467c9ce8fa5be3.url(options),
        method: 'get',
    })

            /**
* @see \Modules\Planning\Http\Controllers\PlanningController::index
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:16
 * @route '/api/v1/plannings'
 */
        index918d0b4cecfea7ba08467c9ce8fa5be3Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index918d0b4cecfea7ba08467c9ce8fa5be3.url(options),
            method: 'get',
        })
            /**
* @see \Modules\Planning\Http\Controllers\PlanningController::index
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:16
 * @route '/api/v1/plannings'
 */
        index918d0b4cecfea7ba08467c9ce8fa5be3Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index918d0b4cecfea7ba08467c9ce8fa5be3.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index918d0b4cecfea7ba08467c9ce8fa5be3.form = index918d0b4cecfea7ba08467c9ce8fa5be3Form
    /**
* @see \Modules\Planning\Http\Controllers\PlanningController::index
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:16
 * @route '/plannings'
 */
const index2b72e60d9f04e928c7b635d9a12e94e2 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index2b72e60d9f04e928c7b635d9a12e94e2.url(options),
    method: 'get',
})

index2b72e60d9f04e928c7b635d9a12e94e2.definition = {
    methods: ["get","head"],
    url: '/plannings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Planning\Http\Controllers\PlanningController::index
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:16
 * @route '/plannings'
 */
index2b72e60d9f04e928c7b635d9a12e94e2.url = (options?: RouteQueryOptions) => {
    return index2b72e60d9f04e928c7b635d9a12e94e2.definition.url + queryParams(options)
}

/**
* @see \Modules\Planning\Http\Controllers\PlanningController::index
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:16
 * @route '/plannings'
 */
index2b72e60d9f04e928c7b635d9a12e94e2.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index2b72e60d9f04e928c7b635d9a12e94e2.url(options),
    method: 'get',
})
/**
* @see \Modules\Planning\Http\Controllers\PlanningController::index
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:16
 * @route '/plannings'
 */
index2b72e60d9f04e928c7b635d9a12e94e2.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index2b72e60d9f04e928c7b635d9a12e94e2.url(options),
    method: 'head',
})

    /**
* @see \Modules\Planning\Http\Controllers\PlanningController::index
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:16
 * @route '/plannings'
 */
    const index2b72e60d9f04e928c7b635d9a12e94e2Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index2b72e60d9f04e928c7b635d9a12e94e2.url(options),
        method: 'get',
    })

            /**
* @see \Modules\Planning\Http\Controllers\PlanningController::index
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:16
 * @route '/plannings'
 */
        index2b72e60d9f04e928c7b635d9a12e94e2Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index2b72e60d9f04e928c7b635d9a12e94e2.url(options),
            method: 'get',
        })
            /**
* @see \Modules\Planning\Http\Controllers\PlanningController::index
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:16
 * @route '/plannings'
 */
        index2b72e60d9f04e928c7b635d9a12e94e2Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index2b72e60d9f04e928c7b635d9a12e94e2.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index2b72e60d9f04e928c7b635d9a12e94e2.form = index2b72e60d9f04e928c7b635d9a12e94e2Form

/**
* Multiple routes resolve to \Modules\Planning\Http\Controllers\PlanningController::index, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `index['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const index = {
    '/api/v1/plannings': index918d0b4cecfea7ba08467c9ce8fa5be3,
    '/plannings': index2b72e60d9f04e928c7b635d9a12e94e2,
}

/**
* @see \Modules\Planning\Http\Controllers\PlanningController::store
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:41
 * @route '/api/v1/plannings'
 */
const store918d0b4cecfea7ba08467c9ce8fa5be3 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store918d0b4cecfea7ba08467c9ce8fa5be3.url(options),
    method: 'post',
})

store918d0b4cecfea7ba08467c9ce8fa5be3.definition = {
    methods: ["post"],
    url: '/api/v1/plannings',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Planning\Http\Controllers\PlanningController::store
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:41
 * @route '/api/v1/plannings'
 */
store918d0b4cecfea7ba08467c9ce8fa5be3.url = (options?: RouteQueryOptions) => {
    return store918d0b4cecfea7ba08467c9ce8fa5be3.definition.url + queryParams(options)
}

/**
* @see \Modules\Planning\Http\Controllers\PlanningController::store
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:41
 * @route '/api/v1/plannings'
 */
store918d0b4cecfea7ba08467c9ce8fa5be3.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store918d0b4cecfea7ba08467c9ce8fa5be3.url(options),
    method: 'post',
})

    /**
* @see \Modules\Planning\Http\Controllers\PlanningController::store
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:41
 * @route '/api/v1/plannings'
 */
    const store918d0b4cecfea7ba08467c9ce8fa5be3Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store918d0b4cecfea7ba08467c9ce8fa5be3.url(options),
        method: 'post',
    })

            /**
* @see \Modules\Planning\Http\Controllers\PlanningController::store
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:41
 * @route '/api/v1/plannings'
 */
        store918d0b4cecfea7ba08467c9ce8fa5be3Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store918d0b4cecfea7ba08467c9ce8fa5be3.url(options),
            method: 'post',
        })
    
    store918d0b4cecfea7ba08467c9ce8fa5be3.form = store918d0b4cecfea7ba08467c9ce8fa5be3Form
    /**
* @see \Modules\Planning\Http\Controllers\PlanningController::store
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:41
 * @route '/plannings'
 */
const store2b72e60d9f04e928c7b635d9a12e94e2 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store2b72e60d9f04e928c7b635d9a12e94e2.url(options),
    method: 'post',
})

store2b72e60d9f04e928c7b635d9a12e94e2.definition = {
    methods: ["post"],
    url: '/plannings',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Planning\Http\Controllers\PlanningController::store
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:41
 * @route '/plannings'
 */
store2b72e60d9f04e928c7b635d9a12e94e2.url = (options?: RouteQueryOptions) => {
    return store2b72e60d9f04e928c7b635d9a12e94e2.definition.url + queryParams(options)
}

/**
* @see \Modules\Planning\Http\Controllers\PlanningController::store
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:41
 * @route '/plannings'
 */
store2b72e60d9f04e928c7b635d9a12e94e2.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store2b72e60d9f04e928c7b635d9a12e94e2.url(options),
    method: 'post',
})

    /**
* @see \Modules\Planning\Http\Controllers\PlanningController::store
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:41
 * @route '/plannings'
 */
    const store2b72e60d9f04e928c7b635d9a12e94e2Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store2b72e60d9f04e928c7b635d9a12e94e2.url(options),
        method: 'post',
    })

            /**
* @see \Modules\Planning\Http\Controllers\PlanningController::store
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:41
 * @route '/plannings'
 */
        store2b72e60d9f04e928c7b635d9a12e94e2Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store2b72e60d9f04e928c7b635d9a12e94e2.url(options),
            method: 'post',
        })
    
    store2b72e60d9f04e928c7b635d9a12e94e2.form = store2b72e60d9f04e928c7b635d9a12e94e2Form

/**
* Multiple routes resolve to \Modules\Planning\Http\Controllers\PlanningController::store, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `store['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const store = {
    '/api/v1/plannings': store918d0b4cecfea7ba08467c9ce8fa5be3,
    '/plannings': store2b72e60d9f04e928c7b635d9a12e94e2,
}

/**
* @see \Modules\Planning\Http\Controllers\PlanningController::show
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:46
 * @route '/api/v1/plannings/{planning}'
 */
const showeecf9e4d65336087f6b128ba535395a2 = (args: { planning: string | number } | [planning: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showeecf9e4d65336087f6b128ba535395a2.url(args, options),
    method: 'get',
})

showeecf9e4d65336087f6b128ba535395a2.definition = {
    methods: ["get","head"],
    url: '/api/v1/plannings/{planning}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Planning\Http\Controllers\PlanningController::show
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:46
 * @route '/api/v1/plannings/{planning}'
 */
showeecf9e4d65336087f6b128ba535395a2.url = (args: { planning: string | number } | [planning: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { planning: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    planning: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        planning: args.planning,
                }

    return showeecf9e4d65336087f6b128ba535395a2.definition.url
            .replace('{planning}', parsedArgs.planning.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Planning\Http\Controllers\PlanningController::show
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:46
 * @route '/api/v1/plannings/{planning}'
 */
showeecf9e4d65336087f6b128ba535395a2.get = (args: { planning: string | number } | [planning: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showeecf9e4d65336087f6b128ba535395a2.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Planning\Http\Controllers\PlanningController::show
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:46
 * @route '/api/v1/plannings/{planning}'
 */
showeecf9e4d65336087f6b128ba535395a2.head = (args: { planning: string | number } | [planning: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showeecf9e4d65336087f6b128ba535395a2.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Planning\Http\Controllers\PlanningController::show
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:46
 * @route '/api/v1/plannings/{planning}'
 */
    const showeecf9e4d65336087f6b128ba535395a2Form = (args: { planning: string | number } | [planning: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: showeecf9e4d65336087f6b128ba535395a2.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Planning\Http\Controllers\PlanningController::show
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:46
 * @route '/api/v1/plannings/{planning}'
 */
        showeecf9e4d65336087f6b128ba535395a2Form.get = (args: { planning: string | number } | [planning: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showeecf9e4d65336087f6b128ba535395a2.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Planning\Http\Controllers\PlanningController::show
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:46
 * @route '/api/v1/plannings/{planning}'
 */
        showeecf9e4d65336087f6b128ba535395a2Form.head = (args: { planning: string | number } | [planning: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showeecf9e4d65336087f6b128ba535395a2.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    showeecf9e4d65336087f6b128ba535395a2.form = showeecf9e4d65336087f6b128ba535395a2Form
    /**
* @see \Modules\Planning\Http\Controllers\PlanningController::show
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:46
 * @route '/plannings/{planning}'
 */
const show5d54ea4164fcdb2cb18ef7755ca7d78a = (args: { planning: string | number } | [planning: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show5d54ea4164fcdb2cb18ef7755ca7d78a.url(args, options),
    method: 'get',
})

show5d54ea4164fcdb2cb18ef7755ca7d78a.definition = {
    methods: ["get","head"],
    url: '/plannings/{planning}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Planning\Http\Controllers\PlanningController::show
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:46
 * @route '/plannings/{planning}'
 */
show5d54ea4164fcdb2cb18ef7755ca7d78a.url = (args: { planning: string | number } | [planning: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { planning: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    planning: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        planning: args.planning,
                }

    return show5d54ea4164fcdb2cb18ef7755ca7d78a.definition.url
            .replace('{planning}', parsedArgs.planning.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Planning\Http\Controllers\PlanningController::show
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:46
 * @route '/plannings/{planning}'
 */
show5d54ea4164fcdb2cb18ef7755ca7d78a.get = (args: { planning: string | number } | [planning: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show5d54ea4164fcdb2cb18ef7755ca7d78a.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Planning\Http\Controllers\PlanningController::show
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:46
 * @route '/plannings/{planning}'
 */
show5d54ea4164fcdb2cb18ef7755ca7d78a.head = (args: { planning: string | number } | [planning: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show5d54ea4164fcdb2cb18ef7755ca7d78a.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Planning\Http\Controllers\PlanningController::show
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:46
 * @route '/plannings/{planning}'
 */
    const show5d54ea4164fcdb2cb18ef7755ca7d78aForm = (args: { planning: string | number } | [planning: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show5d54ea4164fcdb2cb18ef7755ca7d78a.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Planning\Http\Controllers\PlanningController::show
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:46
 * @route '/plannings/{planning}'
 */
        show5d54ea4164fcdb2cb18ef7755ca7d78aForm.get = (args: { planning: string | number } | [planning: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show5d54ea4164fcdb2cb18ef7755ca7d78a.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Planning\Http\Controllers\PlanningController::show
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:46
 * @route '/plannings/{planning}'
 */
        show5d54ea4164fcdb2cb18ef7755ca7d78aForm.head = (args: { planning: string | number } | [planning: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show5d54ea4164fcdb2cb18ef7755ca7d78a.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show5d54ea4164fcdb2cb18ef7755ca7d78a.form = show5d54ea4164fcdb2cb18ef7755ca7d78aForm

/**
* Multiple routes resolve to \Modules\Planning\Http\Controllers\PlanningController::show, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `show['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const show = {
    '/api/v1/plannings/{planning}': showeecf9e4d65336087f6b128ba535395a2,
    '/plannings/{planning}': show5d54ea4164fcdb2cb18ef7755ca7d78a,
}

/**
* @see \Modules\Planning\Http\Controllers\PlanningController::update
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:62
 * @route '/api/v1/plannings/{planning}'
 */
const updateeecf9e4d65336087f6b128ba535395a2 = (args: { planning: string | number } | [planning: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateeecf9e4d65336087f6b128ba535395a2.url(args, options),
    method: 'put',
})

updateeecf9e4d65336087f6b128ba535395a2.definition = {
    methods: ["put","patch"],
    url: '/api/v1/plannings/{planning}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Planning\Http\Controllers\PlanningController::update
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:62
 * @route '/api/v1/plannings/{planning}'
 */
updateeecf9e4d65336087f6b128ba535395a2.url = (args: { planning: string | number } | [planning: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { planning: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    planning: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        planning: args.planning,
                }

    return updateeecf9e4d65336087f6b128ba535395a2.definition.url
            .replace('{planning}', parsedArgs.planning.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Planning\Http\Controllers\PlanningController::update
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:62
 * @route '/api/v1/plannings/{planning}'
 */
updateeecf9e4d65336087f6b128ba535395a2.put = (args: { planning: string | number } | [planning: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateeecf9e4d65336087f6b128ba535395a2.url(args, options),
    method: 'put',
})
/**
* @see \Modules\Planning\Http\Controllers\PlanningController::update
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:62
 * @route '/api/v1/plannings/{planning}'
 */
updateeecf9e4d65336087f6b128ba535395a2.patch = (args: { planning: string | number } | [planning: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateeecf9e4d65336087f6b128ba535395a2.url(args, options),
    method: 'patch',
})

    /**
* @see \Modules\Planning\Http\Controllers\PlanningController::update
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:62
 * @route '/api/v1/plannings/{planning}'
 */
    const updateeecf9e4d65336087f6b128ba535395a2Form = (args: { planning: string | number } | [planning: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: updateeecf9e4d65336087f6b128ba535395a2.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Modules\Planning\Http\Controllers\PlanningController::update
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:62
 * @route '/api/v1/plannings/{planning}'
 */
        updateeecf9e4d65336087f6b128ba535395a2Form.put = (args: { planning: string | number } | [planning: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updateeecf9e4d65336087f6b128ba535395a2.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \Modules\Planning\Http\Controllers\PlanningController::update
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:62
 * @route '/api/v1/plannings/{planning}'
 */
        updateeecf9e4d65336087f6b128ba535395a2Form.patch = (args: { planning: string | number } | [planning: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updateeecf9e4d65336087f6b128ba535395a2.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    updateeecf9e4d65336087f6b128ba535395a2.form = updateeecf9e4d65336087f6b128ba535395a2Form
    /**
* @see \Modules\Planning\Http\Controllers\PlanningController::update
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:62
 * @route '/plannings/{planning}'
 */
const update5d54ea4164fcdb2cb18ef7755ca7d78a = (args: { planning: string | number } | [planning: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update5d54ea4164fcdb2cb18ef7755ca7d78a.url(args, options),
    method: 'put',
})

update5d54ea4164fcdb2cb18ef7755ca7d78a.definition = {
    methods: ["put","patch"],
    url: '/plannings/{planning}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Planning\Http\Controllers\PlanningController::update
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:62
 * @route '/plannings/{planning}'
 */
update5d54ea4164fcdb2cb18ef7755ca7d78a.url = (args: { planning: string | number } | [planning: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { planning: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    planning: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        planning: args.planning,
                }

    return update5d54ea4164fcdb2cb18ef7755ca7d78a.definition.url
            .replace('{planning}', parsedArgs.planning.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Planning\Http\Controllers\PlanningController::update
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:62
 * @route '/plannings/{planning}'
 */
update5d54ea4164fcdb2cb18ef7755ca7d78a.put = (args: { planning: string | number } | [planning: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update5d54ea4164fcdb2cb18ef7755ca7d78a.url(args, options),
    method: 'put',
})
/**
* @see \Modules\Planning\Http\Controllers\PlanningController::update
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:62
 * @route '/plannings/{planning}'
 */
update5d54ea4164fcdb2cb18ef7755ca7d78a.patch = (args: { planning: string | number } | [planning: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update5d54ea4164fcdb2cb18ef7755ca7d78a.url(args, options),
    method: 'patch',
})

    /**
* @see \Modules\Planning\Http\Controllers\PlanningController::update
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:62
 * @route '/plannings/{planning}'
 */
    const update5d54ea4164fcdb2cb18ef7755ca7d78aForm = (args: { planning: string | number } | [planning: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update5d54ea4164fcdb2cb18ef7755ca7d78a.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Modules\Planning\Http\Controllers\PlanningController::update
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:62
 * @route '/plannings/{planning}'
 */
        update5d54ea4164fcdb2cb18ef7755ca7d78aForm.put = (args: { planning: string | number } | [planning: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update5d54ea4164fcdb2cb18ef7755ca7d78a.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \Modules\Planning\Http\Controllers\PlanningController::update
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:62
 * @route '/plannings/{planning}'
 */
        update5d54ea4164fcdb2cb18ef7755ca7d78aForm.patch = (args: { planning: string | number } | [planning: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update5d54ea4164fcdb2cb18ef7755ca7d78a.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update5d54ea4164fcdb2cb18ef7755ca7d78a.form = update5d54ea4164fcdb2cb18ef7755ca7d78aForm

/**
* Multiple routes resolve to \Modules\Planning\Http\Controllers\PlanningController::update, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `update['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const update = {
    '/api/v1/plannings/{planning}': updateeecf9e4d65336087f6b128ba535395a2,
    '/plannings/{planning}': update5d54ea4164fcdb2cb18ef7755ca7d78a,
}

/**
* @see \Modules\Planning\Http\Controllers\PlanningController::destroy
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:67
 * @route '/api/v1/plannings/{planning}'
 */
const destroyeecf9e4d65336087f6b128ba535395a2 = (args: { planning: string | number } | [planning: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyeecf9e4d65336087f6b128ba535395a2.url(args, options),
    method: 'delete',
})

destroyeecf9e4d65336087f6b128ba535395a2.definition = {
    methods: ["delete"],
    url: '/api/v1/plannings/{planning}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Planning\Http\Controllers\PlanningController::destroy
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:67
 * @route '/api/v1/plannings/{planning}'
 */
destroyeecf9e4d65336087f6b128ba535395a2.url = (args: { planning: string | number } | [planning: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { planning: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    planning: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        planning: args.planning,
                }

    return destroyeecf9e4d65336087f6b128ba535395a2.definition.url
            .replace('{planning}', parsedArgs.planning.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Planning\Http\Controllers\PlanningController::destroy
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:67
 * @route '/api/v1/plannings/{planning}'
 */
destroyeecf9e4d65336087f6b128ba535395a2.delete = (args: { planning: string | number } | [planning: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyeecf9e4d65336087f6b128ba535395a2.url(args, options),
    method: 'delete',
})

    /**
* @see \Modules\Planning\Http\Controllers\PlanningController::destroy
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:67
 * @route '/api/v1/plannings/{planning}'
 */
    const destroyeecf9e4d65336087f6b128ba535395a2Form = (args: { planning: string | number } | [planning: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroyeecf9e4d65336087f6b128ba535395a2.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Modules\Planning\Http\Controllers\PlanningController::destroy
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:67
 * @route '/api/v1/plannings/{planning}'
 */
        destroyeecf9e4d65336087f6b128ba535395a2Form.delete = (args: { planning: string | number } | [planning: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroyeecf9e4d65336087f6b128ba535395a2.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroyeecf9e4d65336087f6b128ba535395a2.form = destroyeecf9e4d65336087f6b128ba535395a2Form
    /**
* @see \Modules\Planning\Http\Controllers\PlanningController::destroy
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:67
 * @route '/plannings/{planning}'
 */
const destroy5d54ea4164fcdb2cb18ef7755ca7d78a = (args: { planning: string | number } | [planning: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy5d54ea4164fcdb2cb18ef7755ca7d78a.url(args, options),
    method: 'delete',
})

destroy5d54ea4164fcdb2cb18ef7755ca7d78a.definition = {
    methods: ["delete"],
    url: '/plannings/{planning}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Planning\Http\Controllers\PlanningController::destroy
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:67
 * @route '/plannings/{planning}'
 */
destroy5d54ea4164fcdb2cb18ef7755ca7d78a.url = (args: { planning: string | number } | [planning: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { planning: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    planning: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        planning: args.planning,
                }

    return destroy5d54ea4164fcdb2cb18ef7755ca7d78a.definition.url
            .replace('{planning}', parsedArgs.planning.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Planning\Http\Controllers\PlanningController::destroy
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:67
 * @route '/plannings/{planning}'
 */
destroy5d54ea4164fcdb2cb18ef7755ca7d78a.delete = (args: { planning: string | number } | [planning: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy5d54ea4164fcdb2cb18ef7755ca7d78a.url(args, options),
    method: 'delete',
})

    /**
* @see \Modules\Planning\Http\Controllers\PlanningController::destroy
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:67
 * @route '/plannings/{planning}'
 */
    const destroy5d54ea4164fcdb2cb18ef7755ca7d78aForm = (args: { planning: string | number } | [planning: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy5d54ea4164fcdb2cb18ef7755ca7d78a.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Modules\Planning\Http\Controllers\PlanningController::destroy
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:67
 * @route '/plannings/{planning}'
 */
        destroy5d54ea4164fcdb2cb18ef7755ca7d78aForm.delete = (args: { planning: string | number } | [planning: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy5d54ea4164fcdb2cb18ef7755ca7d78a.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy5d54ea4164fcdb2cb18ef7755ca7d78a.form = destroy5d54ea4164fcdb2cb18ef7755ca7d78aForm

/**
* Multiple routes resolve to \Modules\Planning\Http\Controllers\PlanningController::destroy, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `destroy['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const destroy = {
    '/api/v1/plannings/{planning}': destroyeecf9e4d65336087f6b128ba535395a2,
    '/plannings/{planning}': destroy5d54ea4164fcdb2cb18ef7755ca7d78a,
}

/**
* @see \Modules\Planning\Http\Controllers\PlanningController::create
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:33
 * @route '/plannings/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/plannings/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Planning\Http\Controllers\PlanningController::create
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:33
 * @route '/plannings/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Planning\Http\Controllers\PlanningController::create
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:33
 * @route '/plannings/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \Modules\Planning\Http\Controllers\PlanningController::create
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:33
 * @route '/plannings/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \Modules\Planning\Http\Controllers\PlanningController::create
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:33
 * @route '/plannings/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \Modules\Planning\Http\Controllers\PlanningController::create
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:33
 * @route '/plannings/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \Modules\Planning\Http\Controllers\PlanningController::create
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:33
 * @route '/plannings/create'
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
* @see \Modules\Planning\Http\Controllers\PlanningController::edit
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:54
 * @route '/plannings/{planning}/edit'
 */
export const edit = (args: { planning: string | number } | [planning: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/plannings/{planning}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Planning\Http\Controllers\PlanningController::edit
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:54
 * @route '/plannings/{planning}/edit'
 */
edit.url = (args: { planning: string | number } | [planning: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { planning: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    planning: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        planning: args.planning,
                }

    return edit.definition.url
            .replace('{planning}', parsedArgs.planning.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Planning\Http\Controllers\PlanningController::edit
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:54
 * @route '/plannings/{planning}/edit'
 */
edit.get = (args: { planning: string | number } | [planning: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Planning\Http\Controllers\PlanningController::edit
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:54
 * @route '/plannings/{planning}/edit'
 */
edit.head = (args: { planning: string | number } | [planning: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Planning\Http\Controllers\PlanningController::edit
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:54
 * @route '/plannings/{planning}/edit'
 */
    const editForm = (args: { planning: string | number } | [planning: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Planning\Http\Controllers\PlanningController::edit
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:54
 * @route '/plannings/{planning}/edit'
 */
        editForm.get = (args: { planning: string | number } | [planning: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Planning\Http\Controllers\PlanningController::edit
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:54
 * @route '/plannings/{planning}/edit'
 */
        editForm.head = (args: { planning: string | number } | [planning: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
const PlanningController = { index, store, show, update, destroy, create, edit }

export default PlanningController