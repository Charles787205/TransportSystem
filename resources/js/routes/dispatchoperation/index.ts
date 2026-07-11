import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::index
* @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:13
* @route '/dispatchoperations'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dispatchoperations',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::index
* @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:13
* @route '/dispatchoperations'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::index
* @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:13
* @route '/dispatchoperations'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::index
* @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:13
* @route '/dispatchoperations'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::index
* @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:13
* @route '/dispatchoperations'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::index
* @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:13
* @route '/dispatchoperations'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::index
* @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:13
* @route '/dispatchoperations'
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
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::store
* @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:29
* @route '/dispatchoperations'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dispatchoperations',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::store
* @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:29
* @route '/dispatchoperations'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::store
* @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:29
* @route '/dispatchoperations'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::store
* @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:29
* @route '/dispatchoperations'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::store
* @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:29
* @route '/dispatchoperations'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::show
* @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:34
* @route '/dispatchoperations/{dispatchoperation}'
*/
export const show = (args: { dispatchoperation: string | number } | [dispatchoperation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/dispatchoperations/{dispatchoperation}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::show
* @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:34
* @route '/dispatchoperations/{dispatchoperation}'
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
* @route '/dispatchoperations/{dispatchoperation}'
*/
show.get = (args: { dispatchoperation: string | number } | [dispatchoperation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::show
* @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:34
* @route '/dispatchoperations/{dispatchoperation}'
*/
show.head = (args: { dispatchoperation: string | number } | [dispatchoperation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::show
* @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:34
* @route '/dispatchoperations/{dispatchoperation}'
*/
const showForm = (args: { dispatchoperation: string | number } | [dispatchoperation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::show
* @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:34
* @route '/dispatchoperations/{dispatchoperation}'
*/
showForm.get = (args: { dispatchoperation: string | number } | [dispatchoperation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::show
* @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:34
* @route '/dispatchoperations/{dispatchoperation}'
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

/**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::update
* @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:50
* @route '/dispatchoperations/{dispatchoperation}'
*/
export const update = (args: { dispatchoperation: string | number } | [dispatchoperation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/dispatchoperations/{dispatchoperation}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::update
* @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:50
* @route '/dispatchoperations/{dispatchoperation}'
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
* @route '/dispatchoperations/{dispatchoperation}'
*/
update.put = (args: { dispatchoperation: string | number } | [dispatchoperation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::update
* @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:50
* @route '/dispatchoperations/{dispatchoperation}'
*/
update.patch = (args: { dispatchoperation: string | number } | [dispatchoperation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::update
* @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:50
* @route '/dispatchoperations/{dispatchoperation}'
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
* @route '/dispatchoperations/{dispatchoperation}'
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
* @route '/dispatchoperations/{dispatchoperation}'
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
* @route '/dispatchoperations/{dispatchoperation}'
*/
export const destroy = (args: { dispatchoperation: string | number } | [dispatchoperation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dispatchoperations/{dispatchoperation}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::destroy
* @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:55
* @route '/dispatchoperations/{dispatchoperation}'
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
* @route '/dispatchoperations/{dispatchoperation}'
*/
destroy.delete = (args: { dispatchoperation: string | number } | [dispatchoperation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\DispatchOperation\Http\Controllers\DispatchOperationController::destroy
* @see Modules/DispatchOperation/app/Http/Controllers/DispatchOperationController.php:55
* @route '/dispatchoperations/{dispatchoperation}'
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
* @route '/dispatchoperations/{dispatchoperation}'
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
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default dispatchoperation