import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Modules\Vendor\Http\Controllers\VendorController::index
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:16
* @route '/api/v1/vendors'
*/
const index775a1d26603f0861c0336b7268a2e629 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index775a1d26603f0861c0336b7268a2e629.url(options),
    method: 'get',
})

index775a1d26603f0861c0336b7268a2e629.definition = {
    methods: ["get","head"],
    url: '/api/v1/vendors',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::index
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:16
* @route '/api/v1/vendors'
*/
index775a1d26603f0861c0336b7268a2e629.url = (options?: RouteQueryOptions) => {
    return index775a1d26603f0861c0336b7268a2e629.definition.url + queryParams(options)
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::index
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:16
* @route '/api/v1/vendors'
*/
index775a1d26603f0861c0336b7268a2e629.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index775a1d26603f0861c0336b7268a2e629.url(options),
    method: 'get',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::index
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:16
* @route '/api/v1/vendors'
*/
index775a1d26603f0861c0336b7268a2e629.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index775a1d26603f0861c0336b7268a2e629.url(options),
    method: 'head',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::index
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:16
* @route '/api/v1/vendors'
*/
const index775a1d26603f0861c0336b7268a2e629Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index775a1d26603f0861c0336b7268a2e629.url(options),
    method: 'get',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::index
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:16
* @route '/api/v1/vendors'
*/
index775a1d26603f0861c0336b7268a2e629Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index775a1d26603f0861c0336b7268a2e629.url(options),
    method: 'get',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::index
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:16
* @route '/api/v1/vendors'
*/
index775a1d26603f0861c0336b7268a2e629Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index775a1d26603f0861c0336b7268a2e629.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index775a1d26603f0861c0336b7268a2e629.form = index775a1d26603f0861c0336b7268a2e629Form
/**
* @see \Modules\Vendor\Http\Controllers\VendorController::index
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:16
* @route '/vendors'
*/
const indexe1356127308740f7c1fd6482c96037de = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexe1356127308740f7c1fd6482c96037de.url(options),
    method: 'get',
})

indexe1356127308740f7c1fd6482c96037de.definition = {
    methods: ["get","head"],
    url: '/vendors',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::index
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:16
* @route '/vendors'
*/
indexe1356127308740f7c1fd6482c96037de.url = (options?: RouteQueryOptions) => {
    return indexe1356127308740f7c1fd6482c96037de.definition.url + queryParams(options)
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::index
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:16
* @route '/vendors'
*/
indexe1356127308740f7c1fd6482c96037de.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexe1356127308740f7c1fd6482c96037de.url(options),
    method: 'get',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::index
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:16
* @route '/vendors'
*/
indexe1356127308740f7c1fd6482c96037de.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexe1356127308740f7c1fd6482c96037de.url(options),
    method: 'head',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::index
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:16
* @route '/vendors'
*/
const indexe1356127308740f7c1fd6482c96037deForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexe1356127308740f7c1fd6482c96037de.url(options),
    method: 'get',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::index
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:16
* @route '/vendors'
*/
indexe1356127308740f7c1fd6482c96037deForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexe1356127308740f7c1fd6482c96037de.url(options),
    method: 'get',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::index
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:16
* @route '/vendors'
*/
indexe1356127308740f7c1fd6482c96037deForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexe1356127308740f7c1fd6482c96037de.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

indexe1356127308740f7c1fd6482c96037de.form = indexe1356127308740f7c1fd6482c96037deForm

/**
* Multiple routes resolve to \Modules\Vendor\Http\Controllers\VendorController::index, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `index['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const index = {
    '/api/v1/vendors': index775a1d26603f0861c0336b7268a2e629,
    '/vendors': indexe1356127308740f7c1fd6482c96037de,
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::store
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:35
* @route '/api/v1/vendors'
*/
const store775a1d26603f0861c0336b7268a2e629 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store775a1d26603f0861c0336b7268a2e629.url(options),
    method: 'post',
})

store775a1d26603f0861c0336b7268a2e629.definition = {
    methods: ["post"],
    url: '/api/v1/vendors',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::store
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:35
* @route '/api/v1/vendors'
*/
store775a1d26603f0861c0336b7268a2e629.url = (options?: RouteQueryOptions) => {
    return store775a1d26603f0861c0336b7268a2e629.definition.url + queryParams(options)
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::store
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:35
* @route '/api/v1/vendors'
*/
store775a1d26603f0861c0336b7268a2e629.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store775a1d26603f0861c0336b7268a2e629.url(options),
    method: 'post',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::store
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:35
* @route '/api/v1/vendors'
*/
const store775a1d26603f0861c0336b7268a2e629Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store775a1d26603f0861c0336b7268a2e629.url(options),
    method: 'post',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::store
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:35
* @route '/api/v1/vendors'
*/
store775a1d26603f0861c0336b7268a2e629Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store775a1d26603f0861c0336b7268a2e629.url(options),
    method: 'post',
})

store775a1d26603f0861c0336b7268a2e629.form = store775a1d26603f0861c0336b7268a2e629Form
/**
* @see \Modules\Vendor\Http\Controllers\VendorController::store
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:35
* @route '/vendors'
*/
const storee1356127308740f7c1fd6482c96037de = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storee1356127308740f7c1fd6482c96037de.url(options),
    method: 'post',
})

storee1356127308740f7c1fd6482c96037de.definition = {
    methods: ["post"],
    url: '/vendors',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::store
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:35
* @route '/vendors'
*/
storee1356127308740f7c1fd6482c96037de.url = (options?: RouteQueryOptions) => {
    return storee1356127308740f7c1fd6482c96037de.definition.url + queryParams(options)
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::store
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:35
* @route '/vendors'
*/
storee1356127308740f7c1fd6482c96037de.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storee1356127308740f7c1fd6482c96037de.url(options),
    method: 'post',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::store
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:35
* @route '/vendors'
*/
const storee1356127308740f7c1fd6482c96037deForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storee1356127308740f7c1fd6482c96037de.url(options),
    method: 'post',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::store
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:35
* @route '/vendors'
*/
storee1356127308740f7c1fd6482c96037deForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storee1356127308740f7c1fd6482c96037de.url(options),
    method: 'post',
})

storee1356127308740f7c1fd6482c96037de.form = storee1356127308740f7c1fd6482c96037deForm

/**
* Multiple routes resolve to \Modules\Vendor\Http\Controllers\VendorController::store, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `store['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const store = {
    '/api/v1/vendors': store775a1d26603f0861c0336b7268a2e629,
    '/vendors': storee1356127308740f7c1fd6482c96037de,
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::show
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:46
* @route '/api/v1/vendors/{vendor}'
*/
const showb611de1f253f7301933d21ef3efabf84 = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showb611de1f253f7301933d21ef3efabf84.url(args, options),
    method: 'get',
})

showb611de1f253f7301933d21ef3efabf84.definition = {
    methods: ["get","head"],
    url: '/api/v1/vendors/{vendor}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::show
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:46
* @route '/api/v1/vendors/{vendor}'
*/
showb611de1f253f7301933d21ef3efabf84.url = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return showb611de1f253f7301933d21ef3efabf84.definition.url
            .replace('{vendor}', parsedArgs.vendor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::show
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:46
* @route '/api/v1/vendors/{vendor}'
*/
showb611de1f253f7301933d21ef3efabf84.get = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showb611de1f253f7301933d21ef3efabf84.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::show
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:46
* @route '/api/v1/vendors/{vendor}'
*/
showb611de1f253f7301933d21ef3efabf84.head = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showb611de1f253f7301933d21ef3efabf84.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::show
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:46
* @route '/api/v1/vendors/{vendor}'
*/
const showb611de1f253f7301933d21ef3efabf84Form = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showb611de1f253f7301933d21ef3efabf84.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::show
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:46
* @route '/api/v1/vendors/{vendor}'
*/
showb611de1f253f7301933d21ef3efabf84Form.get = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showb611de1f253f7301933d21ef3efabf84.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::show
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:46
* @route '/api/v1/vendors/{vendor}'
*/
showb611de1f253f7301933d21ef3efabf84Form.head = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showb611de1f253f7301933d21ef3efabf84.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

showb611de1f253f7301933d21ef3efabf84.form = showb611de1f253f7301933d21ef3efabf84Form
/**
* @see \Modules\Vendor\Http\Controllers\VendorController::show
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:46
* @route '/vendors/{vendor}'
*/
const show251b2ece8d3491fee7a7e92876297368 = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show251b2ece8d3491fee7a7e92876297368.url(args, options),
    method: 'get',
})

show251b2ece8d3491fee7a7e92876297368.definition = {
    methods: ["get","head"],
    url: '/vendors/{vendor}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::show
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:46
* @route '/vendors/{vendor}'
*/
show251b2ece8d3491fee7a7e92876297368.url = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return show251b2ece8d3491fee7a7e92876297368.definition.url
            .replace('{vendor}', parsedArgs.vendor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::show
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:46
* @route '/vendors/{vendor}'
*/
show251b2ece8d3491fee7a7e92876297368.get = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show251b2ece8d3491fee7a7e92876297368.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::show
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:46
* @route '/vendors/{vendor}'
*/
show251b2ece8d3491fee7a7e92876297368.head = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show251b2ece8d3491fee7a7e92876297368.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::show
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:46
* @route '/vendors/{vendor}'
*/
const show251b2ece8d3491fee7a7e92876297368Form = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show251b2ece8d3491fee7a7e92876297368.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::show
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:46
* @route '/vendors/{vendor}'
*/
show251b2ece8d3491fee7a7e92876297368Form.get = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show251b2ece8d3491fee7a7e92876297368.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::show
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:46
* @route '/vendors/{vendor}'
*/
show251b2ece8d3491fee7a7e92876297368Form.head = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show251b2ece8d3491fee7a7e92876297368.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show251b2ece8d3491fee7a7e92876297368.form = show251b2ece8d3491fee7a7e92876297368Form

/**
* Multiple routes resolve to \Modules\Vendor\Http\Controllers\VendorController::show, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `show['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const show = {
    '/api/v1/vendors/{vendor}': showb611de1f253f7301933d21ef3efabf84,
    '/vendors/{vendor}': show251b2ece8d3491fee7a7e92876297368,
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::update
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:63
* @route '/api/v1/vendors/{vendor}'
*/
const updateb611de1f253f7301933d21ef3efabf84 = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateb611de1f253f7301933d21ef3efabf84.url(args, options),
    method: 'put',
})

updateb611de1f253f7301933d21ef3efabf84.definition = {
    methods: ["put","patch"],
    url: '/api/v1/vendors/{vendor}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::update
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:63
* @route '/api/v1/vendors/{vendor}'
*/
updateb611de1f253f7301933d21ef3efabf84.url = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return updateb611de1f253f7301933d21ef3efabf84.definition.url
            .replace('{vendor}', parsedArgs.vendor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::update
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:63
* @route '/api/v1/vendors/{vendor}'
*/
updateb611de1f253f7301933d21ef3efabf84.put = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateb611de1f253f7301933d21ef3efabf84.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::update
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:63
* @route '/api/v1/vendors/{vendor}'
*/
updateb611de1f253f7301933d21ef3efabf84.patch = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateb611de1f253f7301933d21ef3efabf84.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::update
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:63
* @route '/api/v1/vendors/{vendor}'
*/
const updateb611de1f253f7301933d21ef3efabf84Form = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateb611de1f253f7301933d21ef3efabf84.url(args, {
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
* @route '/api/v1/vendors/{vendor}'
*/
updateb611de1f253f7301933d21ef3efabf84Form.put = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateb611de1f253f7301933d21ef3efabf84.url(args, {
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
* @route '/api/v1/vendors/{vendor}'
*/
updateb611de1f253f7301933d21ef3efabf84Form.patch = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateb611de1f253f7301933d21ef3efabf84.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updateb611de1f253f7301933d21ef3efabf84.form = updateb611de1f253f7301933d21ef3efabf84Form
/**
* @see \Modules\Vendor\Http\Controllers\VendorController::update
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:63
* @route '/vendors/{vendor}'
*/
const update251b2ece8d3491fee7a7e92876297368 = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update251b2ece8d3491fee7a7e92876297368.url(args, options),
    method: 'put',
})

update251b2ece8d3491fee7a7e92876297368.definition = {
    methods: ["put","patch"],
    url: '/vendors/{vendor}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::update
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:63
* @route '/vendors/{vendor}'
*/
update251b2ece8d3491fee7a7e92876297368.url = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return update251b2ece8d3491fee7a7e92876297368.definition.url
            .replace('{vendor}', parsedArgs.vendor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::update
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:63
* @route '/vendors/{vendor}'
*/
update251b2ece8d3491fee7a7e92876297368.put = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update251b2ece8d3491fee7a7e92876297368.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::update
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:63
* @route '/vendors/{vendor}'
*/
update251b2ece8d3491fee7a7e92876297368.patch = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update251b2ece8d3491fee7a7e92876297368.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::update
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:63
* @route '/vendors/{vendor}'
*/
const update251b2ece8d3491fee7a7e92876297368Form = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update251b2ece8d3491fee7a7e92876297368.url(args, {
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
update251b2ece8d3491fee7a7e92876297368Form.put = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update251b2ece8d3491fee7a7e92876297368.url(args, {
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
update251b2ece8d3491fee7a7e92876297368Form.patch = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update251b2ece8d3491fee7a7e92876297368.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update251b2ece8d3491fee7a7e92876297368.form = update251b2ece8d3491fee7a7e92876297368Form

/**
* Multiple routes resolve to \Modules\Vendor\Http\Controllers\VendorController::update, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `update['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const update = {
    '/api/v1/vendors/{vendor}': updateb611de1f253f7301933d21ef3efabf84,
    '/vendors/{vendor}': update251b2ece8d3491fee7a7e92876297368,
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::destroy
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:68
* @route '/api/v1/vendors/{vendor}'
*/
const destroyb611de1f253f7301933d21ef3efabf84 = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyb611de1f253f7301933d21ef3efabf84.url(args, options),
    method: 'delete',
})

destroyb611de1f253f7301933d21ef3efabf84.definition = {
    methods: ["delete"],
    url: '/api/v1/vendors/{vendor}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::destroy
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:68
* @route '/api/v1/vendors/{vendor}'
*/
destroyb611de1f253f7301933d21ef3efabf84.url = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return destroyb611de1f253f7301933d21ef3efabf84.definition.url
            .replace('{vendor}', parsedArgs.vendor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::destroy
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:68
* @route '/api/v1/vendors/{vendor}'
*/
destroyb611de1f253f7301933d21ef3efabf84.delete = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyb611de1f253f7301933d21ef3efabf84.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::destroy
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:68
* @route '/api/v1/vendors/{vendor}'
*/
const destroyb611de1f253f7301933d21ef3efabf84Form = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroyb611de1f253f7301933d21ef3efabf84.url(args, {
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
* @route '/api/v1/vendors/{vendor}'
*/
destroyb611de1f253f7301933d21ef3efabf84Form.delete = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroyb611de1f253f7301933d21ef3efabf84.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroyb611de1f253f7301933d21ef3efabf84.form = destroyb611de1f253f7301933d21ef3efabf84Form
/**
* @see \Modules\Vendor\Http\Controllers\VendorController::destroy
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:68
* @route '/vendors/{vendor}'
*/
const destroy251b2ece8d3491fee7a7e92876297368 = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy251b2ece8d3491fee7a7e92876297368.url(args, options),
    method: 'delete',
})

destroy251b2ece8d3491fee7a7e92876297368.definition = {
    methods: ["delete"],
    url: '/vendors/{vendor}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::destroy
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:68
* @route '/vendors/{vendor}'
*/
destroy251b2ece8d3491fee7a7e92876297368.url = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return destroy251b2ece8d3491fee7a7e92876297368.definition.url
            .replace('{vendor}', parsedArgs.vendor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::destroy
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:68
* @route '/vendors/{vendor}'
*/
destroy251b2ece8d3491fee7a7e92876297368.delete = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy251b2ece8d3491fee7a7e92876297368.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::destroy
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:68
* @route '/vendors/{vendor}'
*/
const destroy251b2ece8d3491fee7a7e92876297368Form = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy251b2ece8d3491fee7a7e92876297368.url(args, {
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
destroy251b2ece8d3491fee7a7e92876297368Form.delete = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy251b2ece8d3491fee7a7e92876297368.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy251b2ece8d3491fee7a7e92876297368.form = destroy251b2ece8d3491fee7a7e92876297368Form

/**
* Multiple routes resolve to \Modules\Vendor\Http\Controllers\VendorController::destroy, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `destroy['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const destroy = {
    '/api/v1/vendors/{vendor}': destroyb611de1f253f7301933d21ef3efabf84,
    '/vendors/{vendor}': destroy251b2ece8d3491fee7a7e92876297368,
}

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

const VendorController = { index, store, show, update, destroy, create, edit }

export default VendorController