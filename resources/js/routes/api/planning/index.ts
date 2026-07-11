import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \Modules\Planning\Http\Controllers\PlanningController::index
* @see Modules/Planning/app/Http/Controllers/PlanningController.php:16
* @route '/api/v1/plannings'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/v1/plannings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Planning\Http\Controllers\PlanningController::index
* @see Modules/Planning/app/Http/Controllers/PlanningController.php:16
* @route '/api/v1/plannings'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Planning\Http\Controllers\PlanningController::index
* @see Modules/Planning/app/Http/Controllers/PlanningController.php:16
* @route '/api/v1/plannings'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Planning\Http\Controllers\PlanningController::index
* @see Modules/Planning/app/Http/Controllers/PlanningController.php:16
* @route '/api/v1/plannings'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Planning\Http\Controllers\PlanningController::index
* @see Modules/Planning/app/Http/Controllers/PlanningController.php:16
* @route '/api/v1/plannings'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Planning\Http\Controllers\PlanningController::index
* @see Modules/Planning/app/Http/Controllers/PlanningController.php:16
* @route '/api/v1/plannings'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Planning\Http\Controllers\PlanningController::index
* @see Modules/Planning/app/Http/Controllers/PlanningController.php:16
* @route '/api/v1/plannings'
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
* @see \Modules\Planning\Http\Controllers\PlanningController::store
* @see Modules/Planning/app/Http/Controllers/PlanningController.php:34
* @route '/api/v1/plannings'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/v1/plannings',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Planning\Http\Controllers\PlanningController::store
* @see Modules/Planning/app/Http/Controllers/PlanningController.php:34
* @route '/api/v1/plannings'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Planning\Http\Controllers\PlanningController::store
* @see Modules/Planning/app/Http/Controllers/PlanningController.php:34
* @route '/api/v1/plannings'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Planning\Http\Controllers\PlanningController::store
* @see Modules/Planning/app/Http/Controllers/PlanningController.php:34
* @route '/api/v1/plannings'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Planning\Http\Controllers\PlanningController::store
* @see Modules/Planning/app/Http/Controllers/PlanningController.php:34
* @route '/api/v1/plannings'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Modules\Planning\Http\Controllers\PlanningController::show
* @see Modules/Planning/app/Http/Controllers/PlanningController.php:39
* @route '/api/v1/plannings/{planning}'
*/
export const show = (args: { planning: string | number } | [planning: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/v1/plannings/{planning}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Planning\Http\Controllers\PlanningController::show
* @see Modules/Planning/app/Http/Controllers/PlanningController.php:39
* @route '/api/v1/plannings/{planning}'
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
* @route '/api/v1/plannings/{planning}'
*/
show.get = (args: { planning: string | number } | [planning: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Planning\Http\Controllers\PlanningController::show
* @see Modules/Planning/app/Http/Controllers/PlanningController.php:39
* @route '/api/v1/plannings/{planning}'
*/
show.head = (args: { planning: string | number } | [planning: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Planning\Http\Controllers\PlanningController::show
* @see Modules/Planning/app/Http/Controllers/PlanningController.php:39
* @route '/api/v1/plannings/{planning}'
*/
const showForm = (args: { planning: string | number } | [planning: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Planning\Http\Controllers\PlanningController::show
* @see Modules/Planning/app/Http/Controllers/PlanningController.php:39
* @route '/api/v1/plannings/{planning}'
*/
showForm.get = (args: { planning: string | number } | [planning: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Planning\Http\Controllers\PlanningController::show
* @see Modules/Planning/app/Http/Controllers/PlanningController.php:39
* @route '/api/v1/plannings/{planning}'
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
* @see \Modules\Planning\Http\Controllers\PlanningController::update
* @see Modules/Planning/app/Http/Controllers/PlanningController.php:55
* @route '/api/v1/plannings/{planning}'
*/
export const update = (args: { planning: string | number } | [planning: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/v1/plannings/{planning}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Planning\Http\Controllers\PlanningController::update
* @see Modules/Planning/app/Http/Controllers/PlanningController.php:55
* @route '/api/v1/plannings/{planning}'
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
* @route '/api/v1/plannings/{planning}'
*/
update.put = (args: { planning: string | number } | [planning: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Planning\Http\Controllers\PlanningController::update
* @see Modules/Planning/app/Http/Controllers/PlanningController.php:55
* @route '/api/v1/plannings/{planning}'
*/
update.patch = (args: { planning: string | number } | [planning: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Planning\Http\Controllers\PlanningController::update
* @see Modules/Planning/app/Http/Controllers/PlanningController.php:55
* @route '/api/v1/plannings/{planning}'
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
* @route '/api/v1/plannings/{planning}'
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
* @route '/api/v1/plannings/{planning}'
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
* @route '/api/v1/plannings/{planning}'
*/
export const destroy = (args: { planning: string | number } | [planning: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/v1/plannings/{planning}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Planning\Http\Controllers\PlanningController::destroy
* @see Modules/Planning/app/Http/Controllers/PlanningController.php:60
* @route '/api/v1/plannings/{planning}'
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
* @route '/api/v1/plannings/{planning}'
*/
destroy.delete = (args: { planning: string | number } | [planning: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Planning\Http\Controllers\PlanningController::destroy
* @see Modules/Planning/app/Http/Controllers/PlanningController.php:60
* @route '/api/v1/plannings/{planning}'
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
* @route '/api/v1/plannings/{planning}'
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
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default planning