import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
import driver from './driver'
import vehicle from './vehicle'
/**
* @see \Modules\Vendor\Http\Controllers\VendorController::index
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:16
* @route '/vendors'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/vendors',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::index
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:16
* @route '/vendors'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::index
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:16
* @route '/vendors'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::index
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:16
* @route '/vendors'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::index
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:16
* @route '/vendors'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::index
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:16
* @route '/vendors'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::index
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:16
* @route '/vendors'
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
* @see \Modules\Vendor\Http\Controllers\VendorController::create
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:27
* @route '/vendors/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/vendors/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::create
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:27
* @route '/vendors/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::create
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:27
* @route '/vendors/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::create
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:27
* @route '/vendors/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::create
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:27
* @route '/vendors/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::create
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:27
* @route '/vendors/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::create
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:27
* @route '/vendors/create'
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
* @see \Modules\Vendor\Http\Controllers\VendorController::store
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:35
* @route '/vendors'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/vendors',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::store
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:35
* @route '/vendors'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::store
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:35
* @route '/vendors'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::store
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:35
* @route '/vendors'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::store
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:35
* @route '/vendors'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::show
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:46
* @route '/vendors/{vendor}'
*/
export const show = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/vendors/{vendor}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::show
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:46
* @route '/vendors/{vendor}'
*/
show.url = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { vendor: args }
    }

    if (Array.isArray(args)) {
        args = {
            vendor: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        vendor: args.vendor,
    }

    return show.definition.url
            .replace('{vendor}', parsedArgs.vendor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::show
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:46
* @route '/vendors/{vendor}'
*/
show.get = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::show
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:46
* @route '/vendors/{vendor}'
*/
show.head = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::show
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:46
* @route '/vendors/{vendor}'
*/
const showForm = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::show
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:46
* @route '/vendors/{vendor}'
*/
showForm.get = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::show
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:46
* @route '/vendors/{vendor}'
*/
showForm.head = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Vendor\Http\Controllers\VendorController::edit
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:55
* @route '/vendors/{vendor}/edit'
*/
export const edit = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/vendors/{vendor}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::edit
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:55
* @route '/vendors/{vendor}/edit'
*/
edit.url = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { vendor: args }
    }

    if (Array.isArray(args)) {
        args = {
            vendor: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        vendor: args.vendor,
    }

    return edit.definition.url
            .replace('{vendor}', parsedArgs.vendor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::edit
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:55
* @route '/vendors/{vendor}/edit'
*/
edit.get = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::edit
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:55
* @route '/vendors/{vendor}/edit'
*/
edit.head = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::edit
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:55
* @route '/vendors/{vendor}/edit'
*/
const editForm = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::edit
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:55
* @route '/vendors/{vendor}/edit'
*/
editForm.get = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::edit
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:55
* @route '/vendors/{vendor}/edit'
*/
editForm.head = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Vendor\Http\Controllers\VendorController::update
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:63
* @route '/vendors/{vendor}'
*/
export const update = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/vendors/{vendor}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::update
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:63
* @route '/vendors/{vendor}'
*/
update.url = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { vendor: args }
    }

    if (Array.isArray(args)) {
        args = {
            vendor: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        vendor: args.vendor,
    }

    return update.definition.url
            .replace('{vendor}', parsedArgs.vendor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::update
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:63
* @route '/vendors/{vendor}'
*/
update.put = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::update
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:63
* @route '/vendors/{vendor}'
*/
update.patch = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::update
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:63
* @route '/vendors/{vendor}'
*/
const updateForm = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::update
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:63
* @route '/vendors/{vendor}'
*/
updateForm.put = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::update
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:63
* @route '/vendors/{vendor}'
*/
updateForm.patch = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\Vendor\Http\Controllers\VendorController::destroy
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:68
* @route '/vendors/{vendor}'
*/
export const destroy = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/vendors/{vendor}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::destroy
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:68
* @route '/vendors/{vendor}'
*/
destroy.url = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { vendor: args }
    }

    if (Array.isArray(args)) {
        args = {
            vendor: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        vendor: args.vendor,
    }

    return destroy.definition.url
            .replace('{vendor}', parsedArgs.vendor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::destroy
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:68
* @route '/vendors/{vendor}'
*/
destroy.delete = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::destroy
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:68
* @route '/vendors/{vendor}'
*/
const destroyForm = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::destroy
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:68
* @route '/vendors/{vendor}'
*/
destroyForm.delete = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const vendor = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
    driver: Object.assign(driver, driver),
    vehicle: Object.assign(vehicle, vehicle),
}

export default vendor