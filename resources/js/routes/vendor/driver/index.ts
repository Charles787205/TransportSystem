import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \Modules\Vendor\Http\Controllers\VendorDriverController::index
* @see Modules/Vendor/app/Http/Controllers/VendorDriverController.php:18
* @route '/vendors/{vendor}/drivers'
*/
export const index = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/vendors/{vendor}/drivers',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Vendor\Http\Controllers\VendorDriverController::index
* @see Modules/Vendor/app/Http/Controllers/VendorDriverController.php:18
* @route '/vendors/{vendor}/drivers'
*/
index.url = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return index.definition.url
            .replace('{vendor}', parsedArgs.vendor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorDriverController::index
* @see Modules/Vendor/app/Http/Controllers/VendorDriverController.php:18
* @route '/vendors/{vendor}/drivers'
*/
index.get = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorDriverController::index
* @see Modules/Vendor/app/Http/Controllers/VendorDriverController.php:18
* @route '/vendors/{vendor}/drivers'
*/
index.head = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorDriverController::index
* @see Modules/Vendor/app/Http/Controllers/VendorDriverController.php:18
* @route '/vendors/{vendor}/drivers'
*/
const indexForm = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorDriverController::index
* @see Modules/Vendor/app/Http/Controllers/VendorDriverController.php:18
* @route '/vendors/{vendor}/drivers'
*/
indexForm.get = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorDriverController::index
* @see Modules/Vendor/app/Http/Controllers/VendorDriverController.php:18
* @route '/vendors/{vendor}/drivers'
*/
indexForm.head = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \Modules\Vendor\Http\Controllers\VendorDriverController::create
* @see Modules/Vendor/app/Http/Controllers/VendorDriverController.php:26
* @route '/vendors/{vendor}/drivers/create'
*/
export const create = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/vendors/{vendor}/drivers/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Vendor\Http\Controllers\VendorDriverController::create
* @see Modules/Vendor/app/Http/Controllers/VendorDriverController.php:26
* @route '/vendors/{vendor}/drivers/create'
*/
create.url = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return create.definition.url
            .replace('{vendor}', parsedArgs.vendor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorDriverController::create
* @see Modules/Vendor/app/Http/Controllers/VendorDriverController.php:26
* @route '/vendors/{vendor}/drivers/create'
*/
create.get = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorDriverController::create
* @see Modules/Vendor/app/Http/Controllers/VendorDriverController.php:26
* @route '/vendors/{vendor}/drivers/create'
*/
create.head = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorDriverController::create
* @see Modules/Vendor/app/Http/Controllers/VendorDriverController.php:26
* @route '/vendors/{vendor}/drivers/create'
*/
const createForm = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorDriverController::create
* @see Modules/Vendor/app/Http/Controllers/VendorDriverController.php:26
* @route '/vendors/{vendor}/drivers/create'
*/
createForm.get = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorDriverController::create
* @see Modules/Vendor/app/Http/Controllers/VendorDriverController.php:26
* @route '/vendors/{vendor}/drivers/create'
*/
createForm.head = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create.form = createForm

/**
* @see \Modules\Vendor\Http\Controllers\VendorDriverController::store
* @see Modules/Vendor/app/Http/Controllers/VendorDriverController.php:34
* @route '/vendors/{vendor}/drivers'
*/
export const store = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/vendors/{vendor}/drivers',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Vendor\Http\Controllers\VendorDriverController::store
* @see Modules/Vendor/app/Http/Controllers/VendorDriverController.php:34
* @route '/vendors/{vendor}/drivers'
*/
store.url = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return store.definition.url
            .replace('{vendor}', parsedArgs.vendor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorDriverController::store
* @see Modules/Vendor/app/Http/Controllers/VendorDriverController.php:34
* @route '/vendors/{vendor}/drivers'
*/
store.post = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorDriverController::store
* @see Modules/Vendor/app/Http/Controllers/VendorDriverController.php:34
* @route '/vendors/{vendor}/drivers'
*/
const storeForm = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorDriverController::store
* @see Modules/Vendor/app/Http/Controllers/VendorDriverController.php:34
* @route '/vendors/{vendor}/drivers'
*/
storeForm.post = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Modules\Vendor\Http\Controllers\VendorDriverController::show
* @see Modules/Vendor/app/Http/Controllers/VendorDriverController.php:46
* @route '/vendors/{vendor}/drivers/{driver}'
*/
export const show = (args: { vendor: string | number, driver: string | number } | [vendor: string | number, driver: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/vendors/{vendor}/drivers/{driver}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Vendor\Http\Controllers\VendorDriverController::show
* @see Modules/Vendor/app/Http/Controllers/VendorDriverController.php:46
* @route '/vendors/{vendor}/drivers/{driver}'
*/
show.url = (args: { vendor: string | number, driver: string | number } | [vendor: string | number, driver: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            vendor: args[0],
            driver: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        vendor: args.vendor,
        driver: args.driver,
    }

    return show.definition.url
            .replace('{vendor}', parsedArgs.vendor.toString())
            .replace('{driver}', parsedArgs.driver.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorDriverController::show
* @see Modules/Vendor/app/Http/Controllers/VendorDriverController.php:46
* @route '/vendors/{vendor}/drivers/{driver}'
*/
show.get = (args: { vendor: string | number, driver: string | number } | [vendor: string | number, driver: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorDriverController::show
* @see Modules/Vendor/app/Http/Controllers/VendorDriverController.php:46
* @route '/vendors/{vendor}/drivers/{driver}'
*/
show.head = (args: { vendor: string | number, driver: string | number } | [vendor: string | number, driver: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorDriverController::show
* @see Modules/Vendor/app/Http/Controllers/VendorDriverController.php:46
* @route '/vendors/{vendor}/drivers/{driver}'
*/
const showForm = (args: { vendor: string | number, driver: string | number } | [vendor: string | number, driver: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorDriverController::show
* @see Modules/Vendor/app/Http/Controllers/VendorDriverController.php:46
* @route '/vendors/{vendor}/drivers/{driver}'
*/
showForm.get = (args: { vendor: string | number, driver: string | number } | [vendor: string | number, driver: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorDriverController::show
* @see Modules/Vendor/app/Http/Controllers/VendorDriverController.php:46
* @route '/vendors/{vendor}/drivers/{driver}'
*/
showForm.head = (args: { vendor: string | number, driver: string | number } | [vendor: string | number, driver: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Vendor\Http\Controllers\VendorDriverController::edit
* @see Modules/Vendor/app/Http/Controllers/VendorDriverController.php:54
* @route '/vendors/{vendor}/drivers/{driver}/edit'
*/
export const edit = (args: { vendor: string | number, driver: string | number } | [vendor: string | number, driver: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/vendors/{vendor}/drivers/{driver}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Vendor\Http\Controllers\VendorDriverController::edit
* @see Modules/Vendor/app/Http/Controllers/VendorDriverController.php:54
* @route '/vendors/{vendor}/drivers/{driver}/edit'
*/
edit.url = (args: { vendor: string | number, driver: string | number } | [vendor: string | number, driver: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            vendor: args[0],
            driver: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        vendor: args.vendor,
        driver: args.driver,
    }

    return edit.definition.url
            .replace('{vendor}', parsedArgs.vendor.toString())
            .replace('{driver}', parsedArgs.driver.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorDriverController::edit
* @see Modules/Vendor/app/Http/Controllers/VendorDriverController.php:54
* @route '/vendors/{vendor}/drivers/{driver}/edit'
*/
edit.get = (args: { vendor: string | number, driver: string | number } | [vendor: string | number, driver: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorDriverController::edit
* @see Modules/Vendor/app/Http/Controllers/VendorDriverController.php:54
* @route '/vendors/{vendor}/drivers/{driver}/edit'
*/
edit.head = (args: { vendor: string | number, driver: string | number } | [vendor: string | number, driver: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorDriverController::edit
* @see Modules/Vendor/app/Http/Controllers/VendorDriverController.php:54
* @route '/vendors/{vendor}/drivers/{driver}/edit'
*/
const editForm = (args: { vendor: string | number, driver: string | number } | [vendor: string | number, driver: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorDriverController::edit
* @see Modules/Vendor/app/Http/Controllers/VendorDriverController.php:54
* @route '/vendors/{vendor}/drivers/{driver}/edit'
*/
editForm.get = (args: { vendor: string | number, driver: string | number } | [vendor: string | number, driver: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorDriverController::edit
* @see Modules/Vendor/app/Http/Controllers/VendorDriverController.php:54
* @route '/vendors/{vendor}/drivers/{driver}/edit'
*/
editForm.head = (args: { vendor: string | number, driver: string | number } | [vendor: string | number, driver: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Vendor\Http\Controllers\VendorDriverController::update
* @see Modules/Vendor/app/Http/Controllers/VendorDriverController.php:62
* @route '/vendors/{vendor}/drivers/{driver}'
*/
export const update = (args: { vendor: string | number, driver: string | number } | [vendor: string | number, driver: string | number ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/vendors/{vendor}/drivers/{driver}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Vendor\Http\Controllers\VendorDriverController::update
* @see Modules/Vendor/app/Http/Controllers/VendorDriverController.php:62
* @route '/vendors/{vendor}/drivers/{driver}'
*/
update.url = (args: { vendor: string | number, driver: string | number } | [vendor: string | number, driver: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            vendor: args[0],
            driver: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        vendor: args.vendor,
        driver: args.driver,
    }

    return update.definition.url
            .replace('{vendor}', parsedArgs.vendor.toString())
            .replace('{driver}', parsedArgs.driver.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorDriverController::update
* @see Modules/Vendor/app/Http/Controllers/VendorDriverController.php:62
* @route '/vendors/{vendor}/drivers/{driver}'
*/
update.put = (args: { vendor: string | number, driver: string | number } | [vendor: string | number, driver: string | number ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorDriverController::update
* @see Modules/Vendor/app/Http/Controllers/VendorDriverController.php:62
* @route '/vendors/{vendor}/drivers/{driver}'
*/
update.patch = (args: { vendor: string | number, driver: string | number } | [vendor: string | number, driver: string | number ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorDriverController::update
* @see Modules/Vendor/app/Http/Controllers/VendorDriverController.php:62
* @route '/vendors/{vendor}/drivers/{driver}'
*/
const updateForm = (args: { vendor: string | number, driver: string | number } | [vendor: string | number, driver: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorDriverController::update
* @see Modules/Vendor/app/Http/Controllers/VendorDriverController.php:62
* @route '/vendors/{vendor}/drivers/{driver}'
*/
updateForm.put = (args: { vendor: string | number, driver: string | number } | [vendor: string | number, driver: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorDriverController::update
* @see Modules/Vendor/app/Http/Controllers/VendorDriverController.php:62
* @route '/vendors/{vendor}/drivers/{driver}'
*/
updateForm.patch = (args: { vendor: string | number, driver: string | number } | [vendor: string | number, driver: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\Vendor\Http\Controllers\VendorDriverController::destroy
* @see Modules/Vendor/app/Http/Controllers/VendorDriverController.php:67
* @route '/vendors/{vendor}/drivers/{driver}'
*/
export const destroy = (args: { vendor: string | number, driver: string | number } | [vendor: string | number, driver: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/vendors/{vendor}/drivers/{driver}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Vendor\Http\Controllers\VendorDriverController::destroy
* @see Modules/Vendor/app/Http/Controllers/VendorDriverController.php:67
* @route '/vendors/{vendor}/drivers/{driver}'
*/
destroy.url = (args: { vendor: string | number, driver: string | number } | [vendor: string | number, driver: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            vendor: args[0],
            driver: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        vendor: args.vendor,
        driver: args.driver,
    }

    return destroy.definition.url
            .replace('{vendor}', parsedArgs.vendor.toString())
            .replace('{driver}', parsedArgs.driver.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorDriverController::destroy
* @see Modules/Vendor/app/Http/Controllers/VendorDriverController.php:67
* @route '/vendors/{vendor}/drivers/{driver}'
*/
destroy.delete = (args: { vendor: string | number, driver: string | number } | [vendor: string | number, driver: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorDriverController::destroy
* @see Modules/Vendor/app/Http/Controllers/VendorDriverController.php:67
* @route '/vendors/{vendor}/drivers/{driver}'
*/
const destroyForm = (args: { vendor: string | number, driver: string | number } | [vendor: string | number, driver: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorDriverController::destroy
* @see Modules/Vendor/app/Http/Controllers/VendorDriverController.php:67
* @route '/vendors/{vendor}/drivers/{driver}'
*/
destroyForm.delete = (args: { vendor: string | number, driver: string | number } | [vendor: string | number, driver: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const driver = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default driver