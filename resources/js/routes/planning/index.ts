import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \Modules\Planning\Http\Controllers\PlanningController::index
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:16
 * @route '/plannings'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/plannings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Planning\Http\Controllers\PlanningController::index
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:16
 * @route '/plannings'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Planning\Http\Controllers\PlanningController::index
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:16
 * @route '/plannings'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \Modules\Planning\Http\Controllers\PlanningController::index
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:16
 * @route '/plannings'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \Modules\Planning\Http\Controllers\PlanningController::index
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:16
 * @route '/plannings'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \Modules\Planning\Http\Controllers\PlanningController::index
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:16
 * @route '/plannings'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \Modules\Planning\Http\Controllers\PlanningController::index
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:16
 * @route '/plannings'
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
* @see \Modules\Planning\Http\Controllers\PlanningController::create
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:26
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
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:26
 * @route '/plannings/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Planning\Http\Controllers\PlanningController::create
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:26
 * @route '/plannings/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \Modules\Planning\Http\Controllers\PlanningController::create
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:26
 * @route '/plannings/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \Modules\Planning\Http\Controllers\PlanningController::create
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:26
 * @route '/plannings/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \Modules\Planning\Http\Controllers\PlanningController::create
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:26
 * @route '/plannings/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \Modules\Planning\Http\Controllers\PlanningController::create
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:26
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
* @see \Modules\Planning\Http\Controllers\PlanningController::store
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:34
 * @route '/plannings'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/plannings',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Planning\Http\Controllers\PlanningController::store
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:34
 * @route '/plannings'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Planning\Http\Controllers\PlanningController::store
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:34
 * @route '/plannings'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \Modules\Planning\Http\Controllers\PlanningController::store
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:34
 * @route '/plannings'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \Modules\Planning\Http\Controllers\PlanningController::store
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:34
 * @route '/plannings'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \Modules\Planning\Http\Controllers\PlanningController::show
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:39
 * @route '/plannings/{planning}'
 */
export const show = (args: { planning: string | number } | [planning: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/plannings/{planning}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Planning\Http\Controllers\PlanningController::show
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:39
 * @route '/plannings/{planning}'
 */
show.url = (args: { planning: string | number } | [planning: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return show.definition.url
            .replace('{planning}', parsedArgs.planning.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Planning\Http\Controllers\PlanningController::show
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:39
 * @route '/plannings/{planning}'
 */
show.get = (args: { planning: string | number } | [planning: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Planning\Http\Controllers\PlanningController::show
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:39
 * @route '/plannings/{planning}'
 */
show.head = (args: { planning: string | number } | [planning: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Planning\Http\Controllers\PlanningController::show
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:39
 * @route '/plannings/{planning}'
 */
    const showForm = (args: { planning: string | number } | [planning: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Planning\Http\Controllers\PlanningController::show
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:39
 * @route '/plannings/{planning}'
 */
        showForm.get = (args: { planning: string | number } | [planning: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Planning\Http\Controllers\PlanningController::show
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:39
 * @route '/plannings/{planning}'
 */
        showForm.head = (args: { planning: string | number } | [planning: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Planning\Http\Controllers\PlanningController::edit
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:47
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
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:47
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
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:47
 * @route '/plannings/{planning}/edit'
 */
edit.get = (args: { planning: string | number } | [planning: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \Modules\Planning\Http\Controllers\PlanningController::edit
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:47
 * @route '/plannings/{planning}/edit'
 */
edit.head = (args: { planning: string | number } | [planning: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \Modules\Planning\Http\Controllers\PlanningController::edit
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:47
 * @route '/plannings/{planning}/edit'
 */
    const editForm = (args: { planning: string | number } | [planning: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \Modules\Planning\Http\Controllers\PlanningController::edit
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:47
 * @route '/plannings/{planning}/edit'
 */
        editForm.get = (args: { planning: string | number } | [planning: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \Modules\Planning\Http\Controllers\PlanningController::edit
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:47
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
/**
* @see \Modules\Planning\Http\Controllers\PlanningController::update
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:55
 * @route '/plannings/{planning}'
 */
export const update = (args: { planning: string | number } | [planning: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/plannings/{planning}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Planning\Http\Controllers\PlanningController::update
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:55
 * @route '/plannings/{planning}'
 */
update.url = (args: { planning: string | number } | [planning: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return update.definition.url
            .replace('{planning}', parsedArgs.planning.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Planning\Http\Controllers\PlanningController::update
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:55
 * @route '/plannings/{planning}'
 */
update.put = (args: { planning: string | number } | [planning: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \Modules\Planning\Http\Controllers\PlanningController::update
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:55
 * @route '/plannings/{planning}'
 */
update.patch = (args: { planning: string | number } | [planning: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \Modules\Planning\Http\Controllers\PlanningController::update
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:55
 * @route '/plannings/{planning}'
 */
    const updateForm = (args: { planning: string | number } | [planning: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Modules\Planning\Http\Controllers\PlanningController::update
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:55
 * @route '/plannings/{planning}'
 */
        updateForm.put = (args: { planning: string | number } | [planning: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \Modules\Planning\Http\Controllers\PlanningController::update
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:55
 * @route '/plannings/{planning}'
 */
        updateForm.patch = (args: { planning: string | number } | [planning: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\Planning\Http\Controllers\PlanningController::destroy
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:60
 * @route '/plannings/{planning}'
 */
export const destroy = (args: { planning: string | number } | [planning: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/plannings/{planning}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Planning\Http\Controllers\PlanningController::destroy
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:60
 * @route '/plannings/{planning}'
 */
destroy.url = (args: { planning: string | number } | [planning: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return destroy.definition.url
            .replace('{planning}', parsedArgs.planning.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Planning\Http\Controllers\PlanningController::destroy
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:60
 * @route '/plannings/{planning}'
 */
destroy.delete = (args: { planning: string | number } | [planning: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \Modules\Planning\Http\Controllers\PlanningController::destroy
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:60
 * @route '/plannings/{planning}'
 */
    const destroyForm = (args: { planning: string | number } | [planning: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Modules\Planning\Http\Controllers\PlanningController::destroy
 * @see Modules/Planning/app/Http/Controllers/PlanningController.php:60
 * @route '/plannings/{planning}'
 */
        destroyForm.delete = (args: { planning: string | number } | [planning: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const planning = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default planning