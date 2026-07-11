import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::index
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:13
 * @route '/api/v1/dispatchoperations'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/v1/dispatchoperations',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::index
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:13
 * @route '/api/v1/dispatchoperations'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::index
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:13
 * @route '/api/v1/dispatchoperations'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::index
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:13
 * @route '/api/v1/dispatchoperations'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::index
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:13
 * @route '/api/v1/dispatchoperations'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::index
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:13
 * @route '/api/v1/dispatchoperations'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::index
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:13
 * @route '/api/v1/dispatchoperations'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::store
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:29
 * @route '/api/v1/dispatchoperations'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/v1/dispatchoperations',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::store
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:29
 * @route '/api/v1/dispatchoperations'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::store
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:29
 * @route '/api/v1/dispatchoperations'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::store
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:29
 * @route '/api/v1/dispatchoperations'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::store
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:29
 * @route '/api/v1/dispatchoperations'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::show
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:34
 * @route '/api/v1/dispatchoperations/{dispatchoperation}'
 */
export const show = (args: { dispatchoperation: string | number } | [dispatchoperation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/v1/dispatchoperations/{dispatchoperation}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::show
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:34
 * @route '/api/v1/dispatchoperations/{dispatchoperation}'
 */
show.url = (args: { dispatchoperation: string | number } | [dispatchoperation: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return show.definition.url
            .replace('{dispatchoperation}', parsedArgs.dispatchoperation.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::show
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:34
 * @route '/api/v1/dispatchoperations/{dispatchoperation}'
 */
show.get = (args: { dispatchoperation: string | number } | [dispatchoperation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::show
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:34
 * @route '/api/v1/dispatchoperations/{dispatchoperation}'
 */
show.head = (args: { dispatchoperation: string | number } | [dispatchoperation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::show
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:34
 * @route '/api/v1/dispatchoperations/{dispatchoperation}'
 */
    const showForm = (args: { dispatchoperation: string | number } | [dispatchoperation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::show
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:34
 * @route '/api/v1/dispatchoperations/{dispatchoperation}'
 */
        showForm.get = (args: { dispatchoperation: string | number } | [dispatchoperation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::show
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:34
 * @route '/api/v1/dispatchoperations/{dispatchoperation}'
 */
        showForm.head = (args: { dispatchoperation: string | number } | [dispatchoperation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::update
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:50
 * @route '/api/v1/dispatchoperations/{dispatchoperation}'
 */
export const update = (args: { dispatchoperation: string | number } | [dispatchoperation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/v1/dispatchoperations/{dispatchoperation}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::update
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:50
 * @route '/api/v1/dispatchoperations/{dispatchoperation}'
 */
update.url = (args: { dispatchoperation: string | number } | [dispatchoperation: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return update.definition.url
            .replace('{dispatchoperation}', parsedArgs.dispatchoperation.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::update
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:50
 * @route '/api/v1/dispatchoperations/{dispatchoperation}'
 */
update.put = (args: { dispatchoperation: string | number } | [dispatchoperation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::update
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:50
 * @route '/api/v1/dispatchoperations/{dispatchoperation}'
 */
update.patch = (args: { dispatchoperation: string | number } | [dispatchoperation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::update
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:50
 * @route '/api/v1/dispatchoperations/{dispatchoperation}'
 */
    const updateForm = (args: { dispatchoperation: string | number } | [dispatchoperation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
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
        updateForm.put = (args: { dispatchoperation: string | number } | [dispatchoperation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
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
        updateForm.patch = (args: { dispatchoperation: string | number } | [dispatchoperation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::destroy
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:55
 * @route '/api/v1/dispatchoperations/{dispatchoperation}'
 */
export const destroy = (args: { dispatchoperation: string | number } | [dispatchoperation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/v1/dispatchoperations/{dispatchoperation}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::destroy
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:55
 * @route '/api/v1/dispatchoperations/{dispatchoperation}'
 */
destroy.url = (args: { dispatchoperation: string | number } | [dispatchoperation: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return destroy.definition.url
            .replace('{dispatchoperation}', parsedArgs.dispatchoperation.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::destroy
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:55
 * @route '/api/v1/dispatchoperations/{dispatchoperation}'
 */
destroy.delete = (args: { dispatchoperation: string | number } | [dispatchoperation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::destroy
 * @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:55
 * @route '/api/v1/dispatchoperations/{dispatchoperation}'
 */
    const destroyForm = (args: { dispatchoperation: string | number } | [dispatchoperation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
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
        destroyForm.delete = (args: { dispatchoperation: string | number } | [dispatchoperation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const dispatchoperation = {
    index: Object.assign(index, index),
store: Object.assign(store, store),
show: Object.assign(show, show),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default dispatchoperation