import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \Modules\Auth\Http\Controllers\AuthController::index
 * @see Modules/Auth/app/Http/Controllers/AuthController.php:13
 * @route '/auths'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/auths',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Auth\Http\Controllers\AuthController::index
 * @see Modules/Auth/app/Http/Controllers/AuthController.php:13
 * @route '/auths'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Auth\Http\Controllers\AuthController::index
 * @see Modules/Auth/app/Http/Controllers/AuthController.php:13
 * @route '/auths'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \Modules\Auth\Http\Controllers\AuthController::index
 * @see Modules/Auth/app/Http/Controllers/AuthController.php:13
 * @route '/auths'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \Modules\Auth\Http\Controllers\AuthController::index
 * @see Modules/Auth/app/Http/Controllers/AuthController.php:13
 * @route '/auths'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \Modules\Auth\Http\Controllers\AuthController::index
 * @see Modules/Auth/app/Http/Controllers/AuthController.php:13
 * @route '/auths'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \Modules\Auth\Http\Controllers\AuthController::index
 * @see Modules/Auth/app/Http/Controllers/AuthController.php:13
 * @route '/auths'
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
* @see \Modules\Auth\Http\Controllers\AuthController::create
 * @see Modules/Auth/app/Http/Controllers/AuthController.php:19
 * @route '/auths/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/auths/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Auth\Http\Controllers\AuthController::create
 * @see Modules/Auth/app/Http/Controllers/AuthController.php:19
 * @route '/auths/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Auth\Http\Controllers\AuthController::create
 * @see Modules/Auth/app/Http/Controllers/AuthController.php:19
 * @route '/auths/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \Modules\Auth\Http\Controllers\AuthController::create
 * @see Modules/Auth/app/Http/Controllers/AuthController.php:19
 * @route '/auths/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \Modules\Auth\Http\Controllers\AuthController::create
 * @see Modules/Auth/app/Http/Controllers/AuthController.php:19
 * @route '/auths/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \Modules\Auth\Http\Controllers\AuthController::create
 * @see Modules/Auth/app/Http/Controllers/AuthController.php:19
 * @route '/auths/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \Modules\Auth\Http\Controllers\AuthController::create
 * @see Modules/Auth/app/Http/Controllers/AuthController.php:19
 * @route '/auths/create'
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
* @see \Modules\Auth\Http\Controllers\AuthController::store
 * @see Modules/Auth/app/Http/Controllers/AuthController.php:27
 * @route '/auths'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/auths',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Auth\Http\Controllers\AuthController::store
 * @see Modules/Auth/app/Http/Controllers/AuthController.php:27
 * @route '/auths'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Auth\Http\Controllers\AuthController::store
 * @see Modules/Auth/app/Http/Controllers/AuthController.php:27
 * @route '/auths'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \Modules\Auth\Http\Controllers\AuthController::store
 * @see Modules/Auth/app/Http/Controllers/AuthController.php:27
 * @route '/auths'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \Modules\Auth\Http\Controllers\AuthController::store
 * @see Modules/Auth/app/Http/Controllers/AuthController.php:27
 * @route '/auths'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \Modules\Auth\Http\Controllers\AuthController::show
 * @see Modules/Auth/app/Http/Controllers/AuthController.php:32
 * @route '/auths/{auth}'
 */
export const show = (args: { auth: string | number } | [auth: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/auths/{auth}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Auth\Http\Controllers\AuthController::show
 * @see Modules/Auth/app/Http/Controllers/AuthController.php:32
 * @route '/auths/{auth}'
 */
show.url = (args: { auth: string | number } | [auth: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { auth: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    auth: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        auth: args.auth,
                }

    return show.definition.url
            .replace('{auth}', parsedArgs.auth.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Auth\Http\Controllers\AuthController::show
 * @see Modules/Auth/app/Http/Controllers/AuthController.php:32
 * @route '/auths/{auth}'
 */
show.get = (args: { auth: string | number } | [auth: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Auth\Http\Controllers\AuthController::show
 * @see Modules/Auth/app/Http/Controllers/AuthController.php:32
 * @route '/auths/{auth}'
 */
show.head = (args: { auth: string | number } | [auth: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Auth\Http\Controllers\AuthController::show
 * @see Modules/Auth/app/Http/Controllers/AuthController.php:32
 * @route '/auths/{auth}'
 */
    const showForm = (args: { auth: string | number } | [auth: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Auth\Http\Controllers\AuthController::show
 * @see Modules/Auth/app/Http/Controllers/AuthController.php:32
 * @route '/auths/{auth}'
 */
        showForm.get = (args: { auth: string | number } | [auth: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Auth\Http\Controllers\AuthController::show
 * @see Modules/Auth/app/Http/Controllers/AuthController.php:32
 * @route '/auths/{auth}'
 */
        showForm.head = (args: { auth: string | number } | [auth: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Auth\Http\Controllers\AuthController::edit
 * @see Modules/Auth/app/Http/Controllers/AuthController.php:40
 * @route '/auths/{auth}/edit'
 */
export const edit = (args: { auth: string | number } | [auth: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/auths/{auth}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Auth\Http\Controllers\AuthController::edit
 * @see Modules/Auth/app/Http/Controllers/AuthController.php:40
 * @route '/auths/{auth}/edit'
 */
edit.url = (args: { auth: string | number } | [auth: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { auth: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    auth: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        auth: args.auth,
                }

    return edit.definition.url
            .replace('{auth}', parsedArgs.auth.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Auth\Http\Controllers\AuthController::edit
 * @see Modules/Auth/app/Http/Controllers/AuthController.php:40
 * @route '/auths/{auth}/edit'
 */
edit.get = (args: { auth: string | number } | [auth: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Auth\Http\Controllers\AuthController::edit
 * @see Modules/Auth/app/Http/Controllers/AuthController.php:40
 * @route '/auths/{auth}/edit'
 */
edit.head = (args: { auth: string | number } | [auth: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Auth\Http\Controllers\AuthController::edit
 * @see Modules/Auth/app/Http/Controllers/AuthController.php:40
 * @route '/auths/{auth}/edit'
 */
    const editForm = (args: { auth: string | number } | [auth: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Auth\Http\Controllers\AuthController::edit
 * @see Modules/Auth/app/Http/Controllers/AuthController.php:40
 * @route '/auths/{auth}/edit'
 */
        editForm.get = (args: { auth: string | number } | [auth: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Auth\Http\Controllers\AuthController::edit
 * @see Modules/Auth/app/Http/Controllers/AuthController.php:40
 * @route '/auths/{auth}/edit'
 */
        editForm.head = (args: { auth: string | number } | [auth: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Auth\Http\Controllers\AuthController::update
 * @see Modules/Auth/app/Http/Controllers/AuthController.php:48
 * @route '/auths/{auth}'
 */
export const update = (args: { auth: string | number } | [auth: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/auths/{auth}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Auth\Http\Controllers\AuthController::update
 * @see Modules/Auth/app/Http/Controllers/AuthController.php:48
 * @route '/auths/{auth}'
 */
update.url = (args: { auth: string | number } | [auth: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { auth: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    auth: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        auth: args.auth,
                }

    return update.definition.url
            .replace('{auth}', parsedArgs.auth.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Auth\Http\Controllers\AuthController::update
 * @see Modules/Auth/app/Http/Controllers/AuthController.php:48
 * @route '/auths/{auth}'
 */
update.put = (args: { auth: string | number } | [auth: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \Modules\Auth\Http\Controllers\AuthController::update
 * @see Modules/Auth/app/Http/Controllers/AuthController.php:48
 * @route '/auths/{auth}'
 */
update.patch = (args: { auth: string | number } | [auth: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \Modules\Auth\Http\Controllers\AuthController::update
 * @see Modules/Auth/app/Http/Controllers/AuthController.php:48
 * @route '/auths/{auth}'
 */
    const updateForm = (args: { auth: string | number } | [auth: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Modules\Auth\Http\Controllers\AuthController::update
 * @see Modules/Auth/app/Http/Controllers/AuthController.php:48
 * @route '/auths/{auth}'
 */
        updateForm.put = (args: { auth: string | number } | [auth: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \Modules\Auth\Http\Controllers\AuthController::update
 * @see Modules/Auth/app/Http/Controllers/AuthController.php:48
 * @route '/auths/{auth}'
 */
        updateForm.patch = (args: { auth: string | number } | [auth: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\Auth\Http\Controllers\AuthController::destroy
 * @see Modules/Auth/app/Http/Controllers/AuthController.php:53
 * @route '/auths/{auth}'
 */
export const destroy = (args: { auth: string | number } | [auth: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/auths/{auth}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Auth\Http\Controllers\AuthController::destroy
 * @see Modules/Auth/app/Http/Controllers/AuthController.php:53
 * @route '/auths/{auth}'
 */
destroy.url = (args: { auth: string | number } | [auth: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { auth: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    auth: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        auth: args.auth,
                }

    return destroy.definition.url
            .replace('{auth}', parsedArgs.auth.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Auth\Http\Controllers\AuthController::destroy
 * @see Modules/Auth/app/Http/Controllers/AuthController.php:53
 * @route '/auths/{auth}'
 */
destroy.delete = (args: { auth: string | number } | [auth: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \Modules\Auth\Http\Controllers\AuthController::destroy
 * @see Modules/Auth/app/Http/Controllers/AuthController.php:53
 * @route '/auths/{auth}'
 */
    const destroyForm = (args: { auth: string | number } | [auth: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Modules\Auth\Http\Controllers\AuthController::destroy
 * @see Modules/Auth/app/Http/Controllers/AuthController.php:53
 * @route '/auths/{auth}'
 */
        destroyForm.delete = (args: { auth: string | number } | [auth: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const auth = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default auth