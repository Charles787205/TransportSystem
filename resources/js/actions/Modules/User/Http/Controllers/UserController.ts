import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Modules\User\Http\Controllers\UserController::index
 * @see Modules/User/app/Http/Controllers/UserController.php:13
 * @route '/api/v1/users'
 */
const index98c0cbd59f45d2f897c79a0a70c7ac59 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index98c0cbd59f45d2f897c79a0a70c7ac59.url(options),
    method: 'get',
})

index98c0cbd59f45d2f897c79a0a70c7ac59.definition = {
    methods: ["get","head"],
    url: '/api/v1/users',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\User\Http\Controllers\UserController::index
 * @see Modules/User/app/Http/Controllers/UserController.php:13
 * @route '/api/v1/users'
 */
index98c0cbd59f45d2f897c79a0a70c7ac59.url = (options?: RouteQueryOptions) => {
    return index98c0cbd59f45d2f897c79a0a70c7ac59.definition.url + queryParams(options)
}

/**
* @see \Modules\User\Http\Controllers\UserController::index
 * @see Modules/User/app/Http/Controllers/UserController.php:13
 * @route '/api/v1/users'
 */
index98c0cbd59f45d2f897c79a0a70c7ac59.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index98c0cbd59f45d2f897c79a0a70c7ac59.url(options),
    method: 'get',
})
/**
* @see \Modules\User\Http\Controllers\UserController::index
 * @see Modules/User/app/Http/Controllers/UserController.php:13
 * @route '/api/v1/users'
 */
index98c0cbd59f45d2f897c79a0a70c7ac59.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index98c0cbd59f45d2f897c79a0a70c7ac59.url(options),
    method: 'head',
})

    /**
* @see \Modules\User\Http\Controllers\UserController::index
 * @see Modules/User/app/Http/Controllers/UserController.php:13
 * @route '/api/v1/users'
 */
    const index98c0cbd59f45d2f897c79a0a70c7ac59Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index98c0cbd59f45d2f897c79a0a70c7ac59.url(options),
        method: 'get',
    })

            /**
* @see \Modules\User\Http\Controllers\UserController::index
 * @see Modules/User/app/Http/Controllers/UserController.php:13
 * @route '/api/v1/users'
 */
        index98c0cbd59f45d2f897c79a0a70c7ac59Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index98c0cbd59f45d2f897c79a0a70c7ac59.url(options),
            method: 'get',
        })
            /**
* @see \Modules\User\Http\Controllers\UserController::index
 * @see Modules/User/app/Http/Controllers/UserController.php:13
 * @route '/api/v1/users'
 */
        index98c0cbd59f45d2f897c79a0a70c7ac59Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index98c0cbd59f45d2f897c79a0a70c7ac59.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index98c0cbd59f45d2f897c79a0a70c7ac59.form = index98c0cbd59f45d2f897c79a0a70c7ac59Form
    /**
* @see \Modules\User\Http\Controllers\UserController::index
 * @see Modules/User/app/Http/Controllers/UserController.php:13
 * @route '/users'
 */
const index6e8299a085c11017e62ab420951fb27c = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index6e8299a085c11017e62ab420951fb27c.url(options),
    method: 'get',
})

index6e8299a085c11017e62ab420951fb27c.definition = {
    methods: ["get","head"],
    url: '/users',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\User\Http\Controllers\UserController::index
 * @see Modules/User/app/Http/Controllers/UserController.php:13
 * @route '/users'
 */
index6e8299a085c11017e62ab420951fb27c.url = (options?: RouteQueryOptions) => {
    return index6e8299a085c11017e62ab420951fb27c.definition.url + queryParams(options)
}

/**
* @see \Modules\User\Http\Controllers\UserController::index
 * @see Modules/User/app/Http/Controllers/UserController.php:13
 * @route '/users'
 */
index6e8299a085c11017e62ab420951fb27c.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index6e8299a085c11017e62ab420951fb27c.url(options),
    method: 'get',
})
/**
* @see \Modules\User\Http\Controllers\UserController::index
 * @see Modules/User/app/Http/Controllers/UserController.php:13
 * @route '/users'
 */
index6e8299a085c11017e62ab420951fb27c.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index6e8299a085c11017e62ab420951fb27c.url(options),
    method: 'head',
})

    /**
* @see \Modules\User\Http\Controllers\UserController::index
 * @see Modules/User/app/Http/Controllers/UserController.php:13
 * @route '/users'
 */
    const index6e8299a085c11017e62ab420951fb27cForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index6e8299a085c11017e62ab420951fb27c.url(options),
        method: 'get',
    })

            /**
* @see \Modules\User\Http\Controllers\UserController::index
 * @see Modules/User/app/Http/Controllers/UserController.php:13
 * @route '/users'
 */
        index6e8299a085c11017e62ab420951fb27cForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index6e8299a085c11017e62ab420951fb27c.url(options),
            method: 'get',
        })
            /**
* @see \Modules\User\Http\Controllers\UserController::index
 * @see Modules/User/app/Http/Controllers/UserController.php:13
 * @route '/users'
 */
        index6e8299a085c11017e62ab420951fb27cForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index6e8299a085c11017e62ab420951fb27c.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index6e8299a085c11017e62ab420951fb27c.form = index6e8299a085c11017e62ab420951fb27cForm

/**
* Multiple routes resolve to \Modules\User\Http\Controllers\UserController::index, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `index['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const index = {
    '/api/v1/users': index98c0cbd59f45d2f897c79a0a70c7ac59,
    '/users': index6e8299a085c11017e62ab420951fb27c,
}

/**
* @see \Modules\User\Http\Controllers\UserController::store
 * @see Modules/User/app/Http/Controllers/UserController.php:29
 * @route '/api/v1/users'
 */
const store98c0cbd59f45d2f897c79a0a70c7ac59 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store98c0cbd59f45d2f897c79a0a70c7ac59.url(options),
    method: 'post',
})

store98c0cbd59f45d2f897c79a0a70c7ac59.definition = {
    methods: ["post"],
    url: '/api/v1/users',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\User\Http\Controllers\UserController::store
 * @see Modules/User/app/Http/Controllers/UserController.php:29
 * @route '/api/v1/users'
 */
store98c0cbd59f45d2f897c79a0a70c7ac59.url = (options?: RouteQueryOptions) => {
    return store98c0cbd59f45d2f897c79a0a70c7ac59.definition.url + queryParams(options)
}

/**
* @see \Modules\User\Http\Controllers\UserController::store
 * @see Modules/User/app/Http/Controllers/UserController.php:29
 * @route '/api/v1/users'
 */
store98c0cbd59f45d2f897c79a0a70c7ac59.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store98c0cbd59f45d2f897c79a0a70c7ac59.url(options),
    method: 'post',
})

    /**
* @see \Modules\User\Http\Controllers\UserController::store
 * @see Modules/User/app/Http/Controllers/UserController.php:29
 * @route '/api/v1/users'
 */
    const store98c0cbd59f45d2f897c79a0a70c7ac59Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store98c0cbd59f45d2f897c79a0a70c7ac59.url(options),
        method: 'post',
    })

            /**
* @see \Modules\User\Http\Controllers\UserController::store
 * @see Modules/User/app/Http/Controllers/UserController.php:29
 * @route '/api/v1/users'
 */
        store98c0cbd59f45d2f897c79a0a70c7ac59Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store98c0cbd59f45d2f897c79a0a70c7ac59.url(options),
            method: 'post',
        })
    
    store98c0cbd59f45d2f897c79a0a70c7ac59.form = store98c0cbd59f45d2f897c79a0a70c7ac59Form
    /**
* @see \Modules\User\Http\Controllers\UserController::store
 * @see Modules/User/app/Http/Controllers/UserController.php:29
 * @route '/users'
 */
const store6e8299a085c11017e62ab420951fb27c = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store6e8299a085c11017e62ab420951fb27c.url(options),
    method: 'post',
})

store6e8299a085c11017e62ab420951fb27c.definition = {
    methods: ["post"],
    url: '/users',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\User\Http\Controllers\UserController::store
 * @see Modules/User/app/Http/Controllers/UserController.php:29
 * @route '/users'
 */
store6e8299a085c11017e62ab420951fb27c.url = (options?: RouteQueryOptions) => {
    return store6e8299a085c11017e62ab420951fb27c.definition.url + queryParams(options)
}

/**
* @see \Modules\User\Http\Controllers\UserController::store
 * @see Modules/User/app/Http/Controllers/UserController.php:29
 * @route '/users'
 */
store6e8299a085c11017e62ab420951fb27c.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store6e8299a085c11017e62ab420951fb27c.url(options),
    method: 'post',
})

    /**
* @see \Modules\User\Http\Controllers\UserController::store
 * @see Modules/User/app/Http/Controllers/UserController.php:29
 * @route '/users'
 */
    const store6e8299a085c11017e62ab420951fb27cForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store6e8299a085c11017e62ab420951fb27c.url(options),
        method: 'post',
    })

            /**
* @see \Modules\User\Http\Controllers\UserController::store
 * @see Modules/User/app/Http/Controllers/UserController.php:29
 * @route '/users'
 */
        store6e8299a085c11017e62ab420951fb27cForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store6e8299a085c11017e62ab420951fb27c.url(options),
            method: 'post',
        })
    
    store6e8299a085c11017e62ab420951fb27c.form = store6e8299a085c11017e62ab420951fb27cForm

/**
* Multiple routes resolve to \Modules\User\Http\Controllers\UserController::store, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `store['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const store = {
    '/api/v1/users': store98c0cbd59f45d2f897c79a0a70c7ac59,
    '/users': store6e8299a085c11017e62ab420951fb27c,
}

/**
* @see \Modules\User\Http\Controllers\UserController::show
 * @see Modules/User/app/Http/Controllers/UserController.php:34
 * @route '/api/v1/users/{user}'
 */
const show404721aa0166e3065b7a4674fba481b9 = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show404721aa0166e3065b7a4674fba481b9.url(args, options),
    method: 'get',
})

show404721aa0166e3065b7a4674fba481b9.definition = {
    methods: ["get","head"],
    url: '/api/v1/users/{user}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\User\Http\Controllers\UserController::show
 * @see Modules/User/app/Http/Controllers/UserController.php:34
 * @route '/api/v1/users/{user}'
 */
show404721aa0166e3065b7a4674fba481b9.url = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { user: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    user: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        user: args.user,
                }

    return show404721aa0166e3065b7a4674fba481b9.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\User\Http\Controllers\UserController::show
 * @see Modules/User/app/Http/Controllers/UserController.php:34
 * @route '/api/v1/users/{user}'
 */
show404721aa0166e3065b7a4674fba481b9.get = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show404721aa0166e3065b7a4674fba481b9.url(args, options),
    method: 'get',
})
/**
* @see \Modules\User\Http\Controllers\UserController::show
 * @see Modules/User/app/Http/Controllers/UserController.php:34
 * @route '/api/v1/users/{user}'
 */
show404721aa0166e3065b7a4674fba481b9.head = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show404721aa0166e3065b7a4674fba481b9.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\User\Http\Controllers\UserController::show
 * @see Modules/User/app/Http/Controllers/UserController.php:34
 * @route '/api/v1/users/{user}'
 */
    const show404721aa0166e3065b7a4674fba481b9Form = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show404721aa0166e3065b7a4674fba481b9.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\User\Http\Controllers\UserController::show
 * @see Modules/User/app/Http/Controllers/UserController.php:34
 * @route '/api/v1/users/{user}'
 */
        show404721aa0166e3065b7a4674fba481b9Form.get = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show404721aa0166e3065b7a4674fba481b9.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\User\Http\Controllers\UserController::show
 * @see Modules/User/app/Http/Controllers/UserController.php:34
 * @route '/api/v1/users/{user}'
 */
        show404721aa0166e3065b7a4674fba481b9Form.head = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show404721aa0166e3065b7a4674fba481b9.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show404721aa0166e3065b7a4674fba481b9.form = show404721aa0166e3065b7a4674fba481b9Form
    /**
* @see \Modules\User\Http\Controllers\UserController::show
 * @see Modules/User/app/Http/Controllers/UserController.php:34
 * @route '/users/{user}'
 */
const showf898f2daa993cc45af847e1a1f899673 = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showf898f2daa993cc45af847e1a1f899673.url(args, options),
    method: 'get',
})

showf898f2daa993cc45af847e1a1f899673.definition = {
    methods: ["get","head"],
    url: '/users/{user}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\User\Http\Controllers\UserController::show
 * @see Modules/User/app/Http/Controllers/UserController.php:34
 * @route '/users/{user}'
 */
showf898f2daa993cc45af847e1a1f899673.url = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { user: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    user: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        user: args.user,
                }

    return showf898f2daa993cc45af847e1a1f899673.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\User\Http\Controllers\UserController::show
 * @see Modules/User/app/Http/Controllers/UserController.php:34
 * @route '/users/{user}'
 */
showf898f2daa993cc45af847e1a1f899673.get = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showf898f2daa993cc45af847e1a1f899673.url(args, options),
    method: 'get',
})
/**
* @see \Modules\User\Http\Controllers\UserController::show
 * @see Modules/User/app/Http/Controllers/UserController.php:34
 * @route '/users/{user}'
 */
showf898f2daa993cc45af847e1a1f899673.head = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showf898f2daa993cc45af847e1a1f899673.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\User\Http\Controllers\UserController::show
 * @see Modules/User/app/Http/Controllers/UserController.php:34
 * @route '/users/{user}'
 */
    const showf898f2daa993cc45af847e1a1f899673Form = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: showf898f2daa993cc45af847e1a1f899673.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\User\Http\Controllers\UserController::show
 * @see Modules/User/app/Http/Controllers/UserController.php:34
 * @route '/users/{user}'
 */
        showf898f2daa993cc45af847e1a1f899673Form.get = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showf898f2daa993cc45af847e1a1f899673.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\User\Http\Controllers\UserController::show
 * @see Modules/User/app/Http/Controllers/UserController.php:34
 * @route '/users/{user}'
 */
        showf898f2daa993cc45af847e1a1f899673Form.head = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showf898f2daa993cc45af847e1a1f899673.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    showf898f2daa993cc45af847e1a1f899673.form = showf898f2daa993cc45af847e1a1f899673Form

/**
* Multiple routes resolve to \Modules\User\Http\Controllers\UserController::show, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `show['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const show = {
    '/api/v1/users/{user}': show404721aa0166e3065b7a4674fba481b9,
    '/users/{user}': showf898f2daa993cc45af847e1a1f899673,
}

/**
* @see \Modules\User\Http\Controllers\UserController::update
 * @see Modules/User/app/Http/Controllers/UserController.php:50
 * @route '/api/v1/users/{user}'
 */
const update404721aa0166e3065b7a4674fba481b9 = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update404721aa0166e3065b7a4674fba481b9.url(args, options),
    method: 'put',
})

update404721aa0166e3065b7a4674fba481b9.definition = {
    methods: ["put","patch"],
    url: '/api/v1/users/{user}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\User\Http\Controllers\UserController::update
 * @see Modules/User/app/Http/Controllers/UserController.php:50
 * @route '/api/v1/users/{user}'
 */
update404721aa0166e3065b7a4674fba481b9.url = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { user: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    user: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        user: args.user,
                }

    return update404721aa0166e3065b7a4674fba481b9.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\User\Http\Controllers\UserController::update
 * @see Modules/User/app/Http/Controllers/UserController.php:50
 * @route '/api/v1/users/{user}'
 */
update404721aa0166e3065b7a4674fba481b9.put = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update404721aa0166e3065b7a4674fba481b9.url(args, options),
    method: 'put',
})
/**
* @see \Modules\User\Http\Controllers\UserController::update
 * @see Modules/User/app/Http/Controllers/UserController.php:50
 * @route '/api/v1/users/{user}'
 */
update404721aa0166e3065b7a4674fba481b9.patch = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update404721aa0166e3065b7a4674fba481b9.url(args, options),
    method: 'patch',
})

    /**
* @see \Modules\User\Http\Controllers\UserController::update
 * @see Modules/User/app/Http/Controllers/UserController.php:50
 * @route '/api/v1/users/{user}'
 */
    const update404721aa0166e3065b7a4674fba481b9Form = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update404721aa0166e3065b7a4674fba481b9.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Modules\User\Http\Controllers\UserController::update
 * @see Modules/User/app/Http/Controllers/UserController.php:50
 * @route '/api/v1/users/{user}'
 */
        update404721aa0166e3065b7a4674fba481b9Form.put = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update404721aa0166e3065b7a4674fba481b9.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \Modules\User\Http\Controllers\UserController::update
 * @see Modules/User/app/Http/Controllers/UserController.php:50
 * @route '/api/v1/users/{user}'
 */
        update404721aa0166e3065b7a4674fba481b9Form.patch = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update404721aa0166e3065b7a4674fba481b9.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update404721aa0166e3065b7a4674fba481b9.form = update404721aa0166e3065b7a4674fba481b9Form
    /**
* @see \Modules\User\Http\Controllers\UserController::update
 * @see Modules/User/app/Http/Controllers/UserController.php:50
 * @route '/users/{user}'
 */
const updatef898f2daa993cc45af847e1a1f899673 = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updatef898f2daa993cc45af847e1a1f899673.url(args, options),
    method: 'put',
})

updatef898f2daa993cc45af847e1a1f899673.definition = {
    methods: ["put","patch"],
    url: '/users/{user}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\User\Http\Controllers\UserController::update
 * @see Modules/User/app/Http/Controllers/UserController.php:50
 * @route '/users/{user}'
 */
updatef898f2daa993cc45af847e1a1f899673.url = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { user: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    user: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        user: args.user,
                }

    return updatef898f2daa993cc45af847e1a1f899673.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\User\Http\Controllers\UserController::update
 * @see Modules/User/app/Http/Controllers/UserController.php:50
 * @route '/users/{user}'
 */
updatef898f2daa993cc45af847e1a1f899673.put = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updatef898f2daa993cc45af847e1a1f899673.url(args, options),
    method: 'put',
})
/**
* @see \Modules\User\Http\Controllers\UserController::update
 * @see Modules/User/app/Http/Controllers/UserController.php:50
 * @route '/users/{user}'
 */
updatef898f2daa993cc45af847e1a1f899673.patch = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updatef898f2daa993cc45af847e1a1f899673.url(args, options),
    method: 'patch',
})

    /**
* @see \Modules\User\Http\Controllers\UserController::update
 * @see Modules/User/app/Http/Controllers/UserController.php:50
 * @route '/users/{user}'
 */
    const updatef898f2daa993cc45af847e1a1f899673Form = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: updatef898f2daa993cc45af847e1a1f899673.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Modules\User\Http\Controllers\UserController::update
 * @see Modules/User/app/Http/Controllers/UserController.php:50
 * @route '/users/{user}'
 */
        updatef898f2daa993cc45af847e1a1f899673Form.put = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updatef898f2daa993cc45af847e1a1f899673.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \Modules\User\Http\Controllers\UserController::update
 * @see Modules/User/app/Http/Controllers/UserController.php:50
 * @route '/users/{user}'
 */
        updatef898f2daa993cc45af847e1a1f899673Form.patch = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updatef898f2daa993cc45af847e1a1f899673.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    updatef898f2daa993cc45af847e1a1f899673.form = updatef898f2daa993cc45af847e1a1f899673Form

/**
* Multiple routes resolve to \Modules\User\Http\Controllers\UserController::update, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `update['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const update = {
    '/api/v1/users/{user}': update404721aa0166e3065b7a4674fba481b9,
    '/users/{user}': updatef898f2daa993cc45af847e1a1f899673,
}

/**
* @see \Modules\User\Http\Controllers\UserController::destroy
 * @see Modules/User/app/Http/Controllers/UserController.php:55
 * @route '/api/v1/users/{user}'
 */
const destroy404721aa0166e3065b7a4674fba481b9 = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy404721aa0166e3065b7a4674fba481b9.url(args, options),
    method: 'delete',
})

destroy404721aa0166e3065b7a4674fba481b9.definition = {
    methods: ["delete"],
    url: '/api/v1/users/{user}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\User\Http\Controllers\UserController::destroy
 * @see Modules/User/app/Http/Controllers/UserController.php:55
 * @route '/api/v1/users/{user}'
 */
destroy404721aa0166e3065b7a4674fba481b9.url = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { user: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    user: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        user: args.user,
                }

    return destroy404721aa0166e3065b7a4674fba481b9.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\User\Http\Controllers\UserController::destroy
 * @see Modules/User/app/Http/Controllers/UserController.php:55
 * @route '/api/v1/users/{user}'
 */
destroy404721aa0166e3065b7a4674fba481b9.delete = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy404721aa0166e3065b7a4674fba481b9.url(args, options),
    method: 'delete',
})

    /**
* @see \Modules\User\Http\Controllers\UserController::destroy
 * @see Modules/User/app/Http/Controllers/UserController.php:55
 * @route '/api/v1/users/{user}'
 */
    const destroy404721aa0166e3065b7a4674fba481b9Form = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy404721aa0166e3065b7a4674fba481b9.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Modules\User\Http\Controllers\UserController::destroy
 * @see Modules/User/app/Http/Controllers/UserController.php:55
 * @route '/api/v1/users/{user}'
 */
        destroy404721aa0166e3065b7a4674fba481b9Form.delete = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy404721aa0166e3065b7a4674fba481b9.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy404721aa0166e3065b7a4674fba481b9.form = destroy404721aa0166e3065b7a4674fba481b9Form
    /**
* @see \Modules\User\Http\Controllers\UserController::destroy
 * @see Modules/User/app/Http/Controllers/UserController.php:55
 * @route '/users/{user}'
 */
const destroyf898f2daa993cc45af847e1a1f899673 = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyf898f2daa993cc45af847e1a1f899673.url(args, options),
    method: 'delete',
})

destroyf898f2daa993cc45af847e1a1f899673.definition = {
    methods: ["delete"],
    url: '/users/{user}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\User\Http\Controllers\UserController::destroy
 * @see Modules/User/app/Http/Controllers/UserController.php:55
 * @route '/users/{user}'
 */
destroyf898f2daa993cc45af847e1a1f899673.url = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { user: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    user: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        user: args.user,
                }

    return destroyf898f2daa993cc45af847e1a1f899673.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\User\Http\Controllers\UserController::destroy
 * @see Modules/User/app/Http/Controllers/UserController.php:55
 * @route '/users/{user}'
 */
destroyf898f2daa993cc45af847e1a1f899673.delete = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyf898f2daa993cc45af847e1a1f899673.url(args, options),
    method: 'delete',
})

    /**
* @see \Modules\User\Http\Controllers\UserController::destroy
 * @see Modules/User/app/Http/Controllers/UserController.php:55
 * @route '/users/{user}'
 */
    const destroyf898f2daa993cc45af847e1a1f899673Form = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroyf898f2daa993cc45af847e1a1f899673.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Modules\User\Http\Controllers\UserController::destroy
 * @see Modules/User/app/Http/Controllers/UserController.php:55
 * @route '/users/{user}'
 */
        destroyf898f2daa993cc45af847e1a1f899673Form.delete = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroyf898f2daa993cc45af847e1a1f899673.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroyf898f2daa993cc45af847e1a1f899673.form = destroyf898f2daa993cc45af847e1a1f899673Form

/**
* Multiple routes resolve to \Modules\User\Http\Controllers\UserController::destroy, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `destroy['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const destroy = {
    '/api/v1/users/{user}': destroy404721aa0166e3065b7a4674fba481b9,
    '/users/{user}': destroyf898f2daa993cc45af847e1a1f899673,
}

/**
* @see \Modules\User\Http\Controllers\UserController::create
 * @see Modules/User/app/Http/Controllers/UserController.php:21
 * @route '/users/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/users/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\User\Http\Controllers\UserController::create
 * @see Modules/User/app/Http/Controllers/UserController.php:21
 * @route '/users/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\User\Http\Controllers\UserController::create
 * @see Modules/User/app/Http/Controllers/UserController.php:21
 * @route '/users/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \Modules\User\Http\Controllers\UserController::create
 * @see Modules/User/app/Http/Controllers/UserController.php:21
 * @route '/users/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \Modules\User\Http\Controllers\UserController::create
 * @see Modules/User/app/Http/Controllers/UserController.php:21
 * @route '/users/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \Modules\User\Http\Controllers\UserController::create
 * @see Modules/User/app/Http/Controllers/UserController.php:21
 * @route '/users/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \Modules\User\Http\Controllers\UserController::create
 * @see Modules/User/app/Http/Controllers/UserController.php:21
 * @route '/users/create'
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
* @see \Modules\User\Http\Controllers\UserController::edit
 * @see Modules/User/app/Http/Controllers/UserController.php:42
 * @route '/users/{user}/edit'
 */
export const edit = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/users/{user}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\User\Http\Controllers\UserController::edit
 * @see Modules/User/app/Http/Controllers/UserController.php:42
 * @route '/users/{user}/edit'
 */
edit.url = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { user: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    user: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        user: args.user,
                }

    return edit.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\User\Http\Controllers\UserController::edit
 * @see Modules/User/app/Http/Controllers/UserController.php:42
 * @route '/users/{user}/edit'
 */
edit.get = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \Modules\User\Http\Controllers\UserController::edit
 * @see Modules/User/app/Http/Controllers/UserController.php:42
 * @route '/users/{user}/edit'
 */
edit.head = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\User\Http\Controllers\UserController::edit
 * @see Modules/User/app/Http/Controllers/UserController.php:42
 * @route '/users/{user}/edit'
 */
    const editForm = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\User\Http\Controllers\UserController::edit
 * @see Modules/User/app/Http/Controllers/UserController.php:42
 * @route '/users/{user}/edit'
 */
        editForm.get = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\User\Http\Controllers\UserController::edit
 * @see Modules/User/app/Http/Controllers/UserController.php:42
 * @route '/users/{user}/edit'
 */
        editForm.head = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
const UserController = { index, store, show, update, destroy, create, edit }

export default UserController