import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \Modules\Client\Http\Controllers\ClientController::index
* @see Modules/Client/app/Http/Controllers/ClientController.php:13
* @route '/api/v1/clients'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/v1/clients',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Client\Http\Controllers\ClientController::index
* @see Modules/Client/app/Http/Controllers/ClientController.php:13
* @route '/api/v1/clients'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Client\Http\Controllers\ClientController::index
* @see Modules/Client/app/Http/Controllers/ClientController.php:13
* @route '/api/v1/clients'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Client\Http\Controllers\ClientController::index
* @see Modules/Client/app/Http/Controllers/ClientController.php:13
* @route '/api/v1/clients'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Client\Http\Controllers\ClientController::index
* @see Modules/Client/app/Http/Controllers/ClientController.php:13
* @route '/api/v1/clients'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Client\Http\Controllers\ClientController::index
* @see Modules/Client/app/Http/Controllers/ClientController.php:13
* @route '/api/v1/clients'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Client\Http\Controllers\ClientController::index
* @see Modules/Client/app/Http/Controllers/ClientController.php:13
* @route '/api/v1/clients'
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
* @see \Modules\Client\Http\Controllers\ClientController::store
* @see Modules/Client/app/Http/Controllers/ClientController.php:34
* @route '/api/v1/clients'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/v1/clients',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Client\Http\Controllers\ClientController::store
* @see Modules/Client/app/Http/Controllers/ClientController.php:34
* @route '/api/v1/clients'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Client\Http\Controllers\ClientController::store
* @see Modules/Client/app/Http/Controllers/ClientController.php:34
* @route '/api/v1/clients'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Client\Http\Controllers\ClientController::store
* @see Modules/Client/app/Http/Controllers/ClientController.php:34
* @route '/api/v1/clients'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Client\Http\Controllers\ClientController::store
* @see Modules/Client/app/Http/Controllers/ClientController.php:34
* @route '/api/v1/clients'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Modules\Client\Http\Controllers\ClientController::show
* @see Modules/Client/app/Http/Controllers/ClientController.php:39
* @route '/api/v1/clients/{client}'
*/
export const show = (args: { client: string | number } | [client: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/v1/clients/{client}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Client\Http\Controllers\ClientController::show
* @see Modules/Client/app/Http/Controllers/ClientController.php:39
* @route '/api/v1/clients/{client}'
*/
show.url = (args: { client: string | number } | [client: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return show.definition.url
            .replace('{client}', parsedArgs.client.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Client\Http\Controllers\ClientController::show
* @see Modules/Client/app/Http/Controllers/ClientController.php:39
* @route '/api/v1/clients/{client}'
*/
show.get = (args: { client: string | number } | [client: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Client\Http\Controllers\ClientController::show
* @see Modules/Client/app/Http/Controllers/ClientController.php:39
* @route '/api/v1/clients/{client}'
*/
show.head = (args: { client: string | number } | [client: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Client\Http\Controllers\ClientController::show
* @see Modules/Client/app/Http/Controllers/ClientController.php:39
* @route '/api/v1/clients/{client}'
*/
const showForm = (args: { client: string | number } | [client: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Client\Http\Controllers\ClientController::show
* @see Modules/Client/app/Http/Controllers/ClientController.php:39
* @route '/api/v1/clients/{client}'
*/
showForm.get = (args: { client: string | number } | [client: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Client\Http\Controllers\ClientController::show
* @see Modules/Client/app/Http/Controllers/ClientController.php:39
* @route '/api/v1/clients/{client}'
*/
showForm.head = (args: { client: string | number } | [client: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Client\Http\Controllers\ClientController::update
* @see Modules/Client/app/Http/Controllers/ClientController.php:55
* @route '/api/v1/clients/{client}'
*/
export const update = (args: { client: string | number } | [client: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/v1/clients/{client}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Client\Http\Controllers\ClientController::update
* @see Modules/Client/app/Http/Controllers/ClientController.php:55
* @route '/api/v1/clients/{client}'
*/
update.url = (args: { client: string | number } | [client: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return update.definition.url
            .replace('{client}', parsedArgs.client.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Client\Http\Controllers\ClientController::update
* @see Modules/Client/app/Http/Controllers/ClientController.php:55
* @route '/api/v1/clients/{client}'
*/
update.put = (args: { client: string | number } | [client: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Client\Http\Controllers\ClientController::update
* @see Modules/Client/app/Http/Controllers/ClientController.php:55
* @route '/api/v1/clients/{client}'
*/
update.patch = (args: { client: string | number } | [client: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Client\Http\Controllers\ClientController::update
* @see Modules/Client/app/Http/Controllers/ClientController.php:55
* @route '/api/v1/clients/{client}'
*/
const updateForm = (args: { client: string | number } | [client: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
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
updateForm.put = (args: { client: string | number } | [client: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
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
updateForm.patch = (args: { client: string | number } | [client: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\Client\Http\Controllers\ClientController::destroy
* @see Modules/Client/app/Http/Controllers/ClientController.php:60
* @route '/api/v1/clients/{client}'
*/
export const destroy = (args: { client: string | number } | [client: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/v1/clients/{client}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Client\Http\Controllers\ClientController::destroy
* @see Modules/Client/app/Http/Controllers/ClientController.php:60
* @route '/api/v1/clients/{client}'
*/
destroy.url = (args: { client: string | number } | [client: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return destroy.definition.url
            .replace('{client}', parsedArgs.client.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Client\Http\Controllers\ClientController::destroy
* @see Modules/Client/app/Http/Controllers/ClientController.php:60
* @route '/api/v1/clients/{client}'
*/
destroy.delete = (args: { client: string | number } | [client: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Client\Http\Controllers\ClientController::destroy
* @see Modules/Client/app/Http/Controllers/ClientController.php:60
* @route '/api/v1/clients/{client}'
*/
const destroyForm = (args: { client: string | number } | [client: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
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
destroyForm.delete = (args: { client: string | number } | [client: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const client = {
    index: Object.assign(index, index),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default client