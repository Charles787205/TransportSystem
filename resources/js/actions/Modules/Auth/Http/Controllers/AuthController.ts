import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Modules\Auth\Http\Controllers\AuthController::index
* @see Modules/Auth/app/Http/Controllers/AuthController.php:13
* @route '/api/v1/auths'
*/
const index0824e2617d08d2596c4d190386fff433 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index0824e2617d08d2596c4d190386fff433.url(options),
    method: 'get',
})

index0824e2617d08d2596c4d190386fff433.definition = {
    methods: ["get","head"],
    url: '/api/v1/auths',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Auth\Http\Controllers\AuthController::index
* @see Modules/Auth/app/Http/Controllers/AuthController.php:13
* @route '/api/v1/auths'
*/
index0824e2617d08d2596c4d190386fff433.url = (options?: RouteQueryOptions) => {
    return index0824e2617d08d2596c4d190386fff433.definition.url + queryParams(options)
}

/**
* @see \Modules\Auth\Http\Controllers\AuthController::index
* @see Modules/Auth/app/Http/Controllers/AuthController.php:13
* @route '/api/v1/auths'
*/
index0824e2617d08d2596c4d190386fff433.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index0824e2617d08d2596c4d190386fff433.url(options),
    method: 'get',
})

/**
* @see \Modules\Auth\Http\Controllers\AuthController::index
* @see Modules/Auth/app/Http/Controllers/AuthController.php:13
* @route '/api/v1/auths'
*/
index0824e2617d08d2596c4d190386fff433.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index0824e2617d08d2596c4d190386fff433.url(options),
    method: 'head',
})

/**
* @see \Modules\Auth\Http\Controllers\AuthController::index
* @see Modules/Auth/app/Http/Controllers/AuthController.php:13
* @route '/api/v1/auths'
*/
const index0824e2617d08d2596c4d190386fff433Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index0824e2617d08d2596c4d190386fff433.url(options),
    method: 'get',
})

/**
* @see \Modules\Auth\Http\Controllers\AuthController::index
* @see Modules/Auth/app/Http/Controllers/AuthController.php:13
* @route '/api/v1/auths'
*/
index0824e2617d08d2596c4d190386fff433Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index0824e2617d08d2596c4d190386fff433.url(options),
    method: 'get',
})

/**
* @see \Modules\Auth\Http\Controllers\AuthController::index
* @see Modules/Auth/app/Http/Controllers/AuthController.php:13
* @route '/api/v1/auths'
*/
index0824e2617d08d2596c4d190386fff433Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index0824e2617d08d2596c4d190386fff433.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index0824e2617d08d2596c4d190386fff433.form = index0824e2617d08d2596c4d190386fff433Form
/**
* @see \Modules\Auth\Http\Controllers\AuthController::index
* @see Modules/Auth/app/Http/Controllers/AuthController.php:13
* @route '/auths'
*/
const index923b1e67ddb07030083936d45e1543a2 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index923b1e67ddb07030083936d45e1543a2.url(options),
    method: 'get',
})

index923b1e67ddb07030083936d45e1543a2.definition = {
    methods: ["get","head"],
    url: '/auths',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Auth\Http\Controllers\AuthController::index
* @see Modules/Auth/app/Http/Controllers/AuthController.php:13
* @route '/auths'
*/
index923b1e67ddb07030083936d45e1543a2.url = (options?: RouteQueryOptions) => {
    return index923b1e67ddb07030083936d45e1543a2.definition.url + queryParams(options)
}

/**
* @see \Modules\Auth\Http\Controllers\AuthController::index
* @see Modules/Auth/app/Http/Controllers/AuthController.php:13
* @route '/auths'
*/
index923b1e67ddb07030083936d45e1543a2.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index923b1e67ddb07030083936d45e1543a2.url(options),
    method: 'get',
})

/**
* @see \Modules\Auth\Http\Controllers\AuthController::index
* @see Modules/Auth/app/Http/Controllers/AuthController.php:13
* @route '/auths'
*/
index923b1e67ddb07030083936d45e1543a2.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index923b1e67ddb07030083936d45e1543a2.url(options),
    method: 'head',
})

/**
* @see \Modules\Auth\Http\Controllers\AuthController::index
* @see Modules/Auth/app/Http/Controllers/AuthController.php:13
* @route '/auths'
*/
const index923b1e67ddb07030083936d45e1543a2Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index923b1e67ddb07030083936d45e1543a2.url(options),
    method: 'get',
})

/**
* @see \Modules\Auth\Http\Controllers\AuthController::index
* @see Modules/Auth/app/Http/Controllers/AuthController.php:13
* @route '/auths'
*/
index923b1e67ddb07030083936d45e1543a2Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index923b1e67ddb07030083936d45e1543a2.url(options),
    method: 'get',
})

/**
* @see \Modules\Auth\Http\Controllers\AuthController::index
* @see Modules/Auth/app/Http/Controllers/AuthController.php:13
* @route '/auths'
*/
index923b1e67ddb07030083936d45e1543a2Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index923b1e67ddb07030083936d45e1543a2.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index923b1e67ddb07030083936d45e1543a2.form = index923b1e67ddb07030083936d45e1543a2Form

/**
* Multiple routes resolve to \Modules\Auth\Http\Controllers\AuthController::index, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `index['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const index = {
    '/api/v1/auths': index0824e2617d08d2596c4d190386fff433,
    '/auths': index923b1e67ddb07030083936d45e1543a2,
}

/**
* @see \Modules\Auth\Http\Controllers\AuthController::store
* @see Modules/Auth/app/Http/Controllers/AuthController.php:27
* @route '/api/v1/auths'
*/
const store0824e2617d08d2596c4d190386fff433 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store0824e2617d08d2596c4d190386fff433.url(options),
    method: 'post',
})

store0824e2617d08d2596c4d190386fff433.definition = {
    methods: ["post"],
    url: '/api/v1/auths',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Auth\Http\Controllers\AuthController::store
* @see Modules/Auth/app/Http/Controllers/AuthController.php:27
* @route '/api/v1/auths'
*/
store0824e2617d08d2596c4d190386fff433.url = (options?: RouteQueryOptions) => {
    return store0824e2617d08d2596c4d190386fff433.definition.url + queryParams(options)
}

/**
* @see \Modules\Auth\Http\Controllers\AuthController::store
* @see Modules/Auth/app/Http/Controllers/AuthController.php:27
* @route '/api/v1/auths'
*/
store0824e2617d08d2596c4d190386fff433.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store0824e2617d08d2596c4d190386fff433.url(options),
    method: 'post',
})

/**
* @see \Modules\Auth\Http\Controllers\AuthController::store
* @see Modules/Auth/app/Http/Controllers/AuthController.php:27
* @route '/api/v1/auths'
*/
const store0824e2617d08d2596c4d190386fff433Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store0824e2617d08d2596c4d190386fff433.url(options),
    method: 'post',
})

/**
* @see \Modules\Auth\Http\Controllers\AuthController::store
* @see Modules/Auth/app/Http/Controllers/AuthController.php:27
* @route '/api/v1/auths'
*/
store0824e2617d08d2596c4d190386fff433Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store0824e2617d08d2596c4d190386fff433.url(options),
    method: 'post',
})

store0824e2617d08d2596c4d190386fff433.form = store0824e2617d08d2596c4d190386fff433Form
/**
* @see \Modules\Auth\Http\Controllers\AuthController::store
* @see Modules/Auth/app/Http/Controllers/AuthController.php:27
* @route '/auths'
*/
const store923b1e67ddb07030083936d45e1543a2 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store923b1e67ddb07030083936d45e1543a2.url(options),
    method: 'post',
})

store923b1e67ddb07030083936d45e1543a2.definition = {
    methods: ["post"],
    url: '/auths',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Auth\Http\Controllers\AuthController::store
* @see Modules/Auth/app/Http/Controllers/AuthController.php:27
* @route '/auths'
*/
store923b1e67ddb07030083936d45e1543a2.url = (options?: RouteQueryOptions) => {
    return store923b1e67ddb07030083936d45e1543a2.definition.url + queryParams(options)
}

/**
* @see \Modules\Auth\Http\Controllers\AuthController::store
* @see Modules/Auth/app/Http/Controllers/AuthController.php:27
* @route '/auths'
*/
store923b1e67ddb07030083936d45e1543a2.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store923b1e67ddb07030083936d45e1543a2.url(options),
    method: 'post',
})

/**
* @see \Modules\Auth\Http\Controllers\AuthController::store
* @see Modules/Auth/app/Http/Controllers/AuthController.php:27
* @route '/auths'
*/
const store923b1e67ddb07030083936d45e1543a2Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store923b1e67ddb07030083936d45e1543a2.url(options),
    method: 'post',
})

/**
* @see \Modules\Auth\Http\Controllers\AuthController::store
* @see Modules/Auth/app/Http/Controllers/AuthController.php:27
* @route '/auths'
*/
store923b1e67ddb07030083936d45e1543a2Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store923b1e67ddb07030083936d45e1543a2.url(options),
    method: 'post',
})

store923b1e67ddb07030083936d45e1543a2.form = store923b1e67ddb07030083936d45e1543a2Form

/**
* Multiple routes resolve to \Modules\Auth\Http\Controllers\AuthController::store, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `store['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const store = {
    '/api/v1/auths': store0824e2617d08d2596c4d190386fff433,
    '/auths': store923b1e67ddb07030083936d45e1543a2,
}

/**
* @see \Modules\Auth\Http\Controllers\AuthController::show
* @see Modules/Auth/app/Http/Controllers/AuthController.php:32
* @route '/api/v1/auths/{auth}'
*/
const showd6cd9596c4a04fe992660ca4bd99b9c7 = (args: { auth: string | number } | [auth: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showd6cd9596c4a04fe992660ca4bd99b9c7.url(args, options),
    method: 'get',
})

showd6cd9596c4a04fe992660ca4bd99b9c7.definition = {
    methods: ["get","head"],
    url: '/api/v1/auths/{auth}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Auth\Http\Controllers\AuthController::show
* @see Modules/Auth/app/Http/Controllers/AuthController.php:32
* @route '/api/v1/auths/{auth}'
*/
showd6cd9596c4a04fe992660ca4bd99b9c7.url = (args: { auth: string | number } | [auth: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return showd6cd9596c4a04fe992660ca4bd99b9c7.definition.url
            .replace('{auth}', parsedArgs.auth.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Auth\Http\Controllers\AuthController::show
* @see Modules/Auth/app/Http/Controllers/AuthController.php:32
* @route '/api/v1/auths/{auth}'
*/
showd6cd9596c4a04fe992660ca4bd99b9c7.get = (args: { auth: string | number } | [auth: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showd6cd9596c4a04fe992660ca4bd99b9c7.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Auth\Http\Controllers\AuthController::show
* @see Modules/Auth/app/Http/Controllers/AuthController.php:32
* @route '/api/v1/auths/{auth}'
*/
showd6cd9596c4a04fe992660ca4bd99b9c7.head = (args: { auth: string | number } | [auth: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showd6cd9596c4a04fe992660ca4bd99b9c7.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Auth\Http\Controllers\AuthController::show
* @see Modules/Auth/app/Http/Controllers/AuthController.php:32
* @route '/api/v1/auths/{auth}'
*/
const showd6cd9596c4a04fe992660ca4bd99b9c7Form = (args: { auth: string | number } | [auth: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showd6cd9596c4a04fe992660ca4bd99b9c7.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Auth\Http\Controllers\AuthController::show
* @see Modules/Auth/app/Http/Controllers/AuthController.php:32
* @route '/api/v1/auths/{auth}'
*/
showd6cd9596c4a04fe992660ca4bd99b9c7Form.get = (args: { auth: string | number } | [auth: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showd6cd9596c4a04fe992660ca4bd99b9c7.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Auth\Http\Controllers\AuthController::show
* @see Modules/Auth/app/Http/Controllers/AuthController.php:32
* @route '/api/v1/auths/{auth}'
*/
showd6cd9596c4a04fe992660ca4bd99b9c7Form.head = (args: { auth: string | number } | [auth: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showd6cd9596c4a04fe992660ca4bd99b9c7.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

showd6cd9596c4a04fe992660ca4bd99b9c7.form = showd6cd9596c4a04fe992660ca4bd99b9c7Form
/**
* @see \Modules\Auth\Http\Controllers\AuthController::show
* @see Modules/Auth/app/Http/Controllers/AuthController.php:32
* @route '/auths/{auth}'
*/
const show2bd0ca51768cee0c48f22e245c19b760 = (args: { auth: string | number } | [auth: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show2bd0ca51768cee0c48f22e245c19b760.url(args, options),
    method: 'get',
})

show2bd0ca51768cee0c48f22e245c19b760.definition = {
    methods: ["get","head"],
    url: '/auths/{auth}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Auth\Http\Controllers\AuthController::show
* @see Modules/Auth/app/Http/Controllers/AuthController.php:32
* @route '/auths/{auth}'
*/
show2bd0ca51768cee0c48f22e245c19b760.url = (args: { auth: string | number } | [auth: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return show2bd0ca51768cee0c48f22e245c19b760.definition.url
            .replace('{auth}', parsedArgs.auth.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Auth\Http\Controllers\AuthController::show
* @see Modules/Auth/app/Http/Controllers/AuthController.php:32
* @route '/auths/{auth}'
*/
show2bd0ca51768cee0c48f22e245c19b760.get = (args: { auth: string | number } | [auth: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show2bd0ca51768cee0c48f22e245c19b760.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Auth\Http\Controllers\AuthController::show
* @see Modules/Auth/app/Http/Controllers/AuthController.php:32
* @route '/auths/{auth}'
*/
show2bd0ca51768cee0c48f22e245c19b760.head = (args: { auth: string | number } | [auth: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show2bd0ca51768cee0c48f22e245c19b760.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Auth\Http\Controllers\AuthController::show
* @see Modules/Auth/app/Http/Controllers/AuthController.php:32
* @route '/auths/{auth}'
*/
const show2bd0ca51768cee0c48f22e245c19b760Form = (args: { auth: string | number } | [auth: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show2bd0ca51768cee0c48f22e245c19b760.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Auth\Http\Controllers\AuthController::show
* @see Modules/Auth/app/Http/Controllers/AuthController.php:32
* @route '/auths/{auth}'
*/
show2bd0ca51768cee0c48f22e245c19b760Form.get = (args: { auth: string | number } | [auth: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show2bd0ca51768cee0c48f22e245c19b760.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Auth\Http\Controllers\AuthController::show
* @see Modules/Auth/app/Http/Controllers/AuthController.php:32
* @route '/auths/{auth}'
*/
show2bd0ca51768cee0c48f22e245c19b760Form.head = (args: { auth: string | number } | [auth: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show2bd0ca51768cee0c48f22e245c19b760.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show2bd0ca51768cee0c48f22e245c19b760.form = show2bd0ca51768cee0c48f22e245c19b760Form

/**
* Multiple routes resolve to \Modules\Auth\Http\Controllers\AuthController::show, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `show['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const show = {
    '/api/v1/auths/{auth}': showd6cd9596c4a04fe992660ca4bd99b9c7,
    '/auths/{auth}': show2bd0ca51768cee0c48f22e245c19b760,
}

/**
* @see \Modules\Auth\Http\Controllers\AuthController::update
* @see Modules/Auth/app/Http/Controllers/AuthController.php:48
* @route '/api/v1/auths/{auth}'
*/
const updated6cd9596c4a04fe992660ca4bd99b9c7 = (args: { auth: string | number } | [auth: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updated6cd9596c4a04fe992660ca4bd99b9c7.url(args, options),
    method: 'put',
})

updated6cd9596c4a04fe992660ca4bd99b9c7.definition = {
    methods: ["put","patch"],
    url: '/api/v1/auths/{auth}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Auth\Http\Controllers\AuthController::update
* @see Modules/Auth/app/Http/Controllers/AuthController.php:48
* @route '/api/v1/auths/{auth}'
*/
updated6cd9596c4a04fe992660ca4bd99b9c7.url = (args: { auth: string | number } | [auth: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return updated6cd9596c4a04fe992660ca4bd99b9c7.definition.url
            .replace('{auth}', parsedArgs.auth.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Auth\Http\Controllers\AuthController::update
* @see Modules/Auth/app/Http/Controllers/AuthController.php:48
* @route '/api/v1/auths/{auth}'
*/
updated6cd9596c4a04fe992660ca4bd99b9c7.put = (args: { auth: string | number } | [auth: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updated6cd9596c4a04fe992660ca4bd99b9c7.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Auth\Http\Controllers\AuthController::update
* @see Modules/Auth/app/Http/Controllers/AuthController.php:48
* @route '/api/v1/auths/{auth}'
*/
updated6cd9596c4a04fe992660ca4bd99b9c7.patch = (args: { auth: string | number } | [auth: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updated6cd9596c4a04fe992660ca4bd99b9c7.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Auth\Http\Controllers\AuthController::update
* @see Modules/Auth/app/Http/Controllers/AuthController.php:48
* @route '/api/v1/auths/{auth}'
*/
const updated6cd9596c4a04fe992660ca4bd99b9c7Form = (args: { auth: string | number } | [auth: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updated6cd9596c4a04fe992660ca4bd99b9c7.url(args, {
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
* @route '/api/v1/auths/{auth}'
*/
updated6cd9596c4a04fe992660ca4bd99b9c7Form.put = (args: { auth: string | number } | [auth: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updated6cd9596c4a04fe992660ca4bd99b9c7.url(args, {
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
* @route '/api/v1/auths/{auth}'
*/
updated6cd9596c4a04fe992660ca4bd99b9c7Form.patch = (args: { auth: string | number } | [auth: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updated6cd9596c4a04fe992660ca4bd99b9c7.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updated6cd9596c4a04fe992660ca4bd99b9c7.form = updated6cd9596c4a04fe992660ca4bd99b9c7Form
/**
* @see \Modules\Auth\Http\Controllers\AuthController::update
* @see Modules/Auth/app/Http/Controllers/AuthController.php:48
* @route '/auths/{auth}'
*/
const update2bd0ca51768cee0c48f22e245c19b760 = (args: { auth: string | number } | [auth: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update2bd0ca51768cee0c48f22e245c19b760.url(args, options),
    method: 'put',
})

update2bd0ca51768cee0c48f22e245c19b760.definition = {
    methods: ["put","patch"],
    url: '/auths/{auth}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Auth\Http\Controllers\AuthController::update
* @see Modules/Auth/app/Http/Controllers/AuthController.php:48
* @route '/auths/{auth}'
*/
update2bd0ca51768cee0c48f22e245c19b760.url = (args: { auth: string | number } | [auth: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return update2bd0ca51768cee0c48f22e245c19b760.definition.url
            .replace('{auth}', parsedArgs.auth.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Auth\Http\Controllers\AuthController::update
* @see Modules/Auth/app/Http/Controllers/AuthController.php:48
* @route '/auths/{auth}'
*/
update2bd0ca51768cee0c48f22e245c19b760.put = (args: { auth: string | number } | [auth: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update2bd0ca51768cee0c48f22e245c19b760.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Auth\Http\Controllers\AuthController::update
* @see Modules/Auth/app/Http/Controllers/AuthController.php:48
* @route '/auths/{auth}'
*/
update2bd0ca51768cee0c48f22e245c19b760.patch = (args: { auth: string | number } | [auth: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update2bd0ca51768cee0c48f22e245c19b760.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Auth\Http\Controllers\AuthController::update
* @see Modules/Auth/app/Http/Controllers/AuthController.php:48
* @route '/auths/{auth}'
*/
const update2bd0ca51768cee0c48f22e245c19b760Form = (args: { auth: string | number } | [auth: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update2bd0ca51768cee0c48f22e245c19b760.url(args, {
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
update2bd0ca51768cee0c48f22e245c19b760Form.put = (args: { auth: string | number } | [auth: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update2bd0ca51768cee0c48f22e245c19b760.url(args, {
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
update2bd0ca51768cee0c48f22e245c19b760Form.patch = (args: { auth: string | number } | [auth: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update2bd0ca51768cee0c48f22e245c19b760.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update2bd0ca51768cee0c48f22e245c19b760.form = update2bd0ca51768cee0c48f22e245c19b760Form

/**
* Multiple routes resolve to \Modules\Auth\Http\Controllers\AuthController::update, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `update['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const update = {
    '/api/v1/auths/{auth}': updated6cd9596c4a04fe992660ca4bd99b9c7,
    '/auths/{auth}': update2bd0ca51768cee0c48f22e245c19b760,
}

/**
* @see \Modules\Auth\Http\Controllers\AuthController::destroy
* @see Modules/Auth/app/Http/Controllers/AuthController.php:53
* @route '/api/v1/auths/{auth}'
*/
const destroyd6cd9596c4a04fe992660ca4bd99b9c7 = (args: { auth: string | number } | [auth: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyd6cd9596c4a04fe992660ca4bd99b9c7.url(args, options),
    method: 'delete',
})

destroyd6cd9596c4a04fe992660ca4bd99b9c7.definition = {
    methods: ["delete"],
    url: '/api/v1/auths/{auth}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Auth\Http\Controllers\AuthController::destroy
* @see Modules/Auth/app/Http/Controllers/AuthController.php:53
* @route '/api/v1/auths/{auth}'
*/
destroyd6cd9596c4a04fe992660ca4bd99b9c7.url = (args: { auth: string | number } | [auth: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return destroyd6cd9596c4a04fe992660ca4bd99b9c7.definition.url
            .replace('{auth}', parsedArgs.auth.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Auth\Http\Controllers\AuthController::destroy
* @see Modules/Auth/app/Http/Controllers/AuthController.php:53
* @route '/api/v1/auths/{auth}'
*/
destroyd6cd9596c4a04fe992660ca4bd99b9c7.delete = (args: { auth: string | number } | [auth: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyd6cd9596c4a04fe992660ca4bd99b9c7.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Auth\Http\Controllers\AuthController::destroy
* @see Modules/Auth/app/Http/Controllers/AuthController.php:53
* @route '/api/v1/auths/{auth}'
*/
const destroyd6cd9596c4a04fe992660ca4bd99b9c7Form = (args: { auth: string | number } | [auth: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroyd6cd9596c4a04fe992660ca4bd99b9c7.url(args, {
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
* @route '/api/v1/auths/{auth}'
*/
destroyd6cd9596c4a04fe992660ca4bd99b9c7Form.delete = (args: { auth: string | number } | [auth: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroyd6cd9596c4a04fe992660ca4bd99b9c7.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroyd6cd9596c4a04fe992660ca4bd99b9c7.form = destroyd6cd9596c4a04fe992660ca4bd99b9c7Form
/**
* @see \Modules\Auth\Http\Controllers\AuthController::destroy
* @see Modules/Auth/app/Http/Controllers/AuthController.php:53
* @route '/auths/{auth}'
*/
const destroy2bd0ca51768cee0c48f22e245c19b760 = (args: { auth: string | number } | [auth: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy2bd0ca51768cee0c48f22e245c19b760.url(args, options),
    method: 'delete',
})

destroy2bd0ca51768cee0c48f22e245c19b760.definition = {
    methods: ["delete"],
    url: '/auths/{auth}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Auth\Http\Controllers\AuthController::destroy
* @see Modules/Auth/app/Http/Controllers/AuthController.php:53
* @route '/auths/{auth}'
*/
destroy2bd0ca51768cee0c48f22e245c19b760.url = (args: { auth: string | number } | [auth: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return destroy2bd0ca51768cee0c48f22e245c19b760.definition.url
            .replace('{auth}', parsedArgs.auth.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Auth\Http\Controllers\AuthController::destroy
* @see Modules/Auth/app/Http/Controllers/AuthController.php:53
* @route '/auths/{auth}'
*/
destroy2bd0ca51768cee0c48f22e245c19b760.delete = (args: { auth: string | number } | [auth: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy2bd0ca51768cee0c48f22e245c19b760.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Auth\Http\Controllers\AuthController::destroy
* @see Modules/Auth/app/Http/Controllers/AuthController.php:53
* @route '/auths/{auth}'
*/
const destroy2bd0ca51768cee0c48f22e245c19b760Form = (args: { auth: string | number } | [auth: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy2bd0ca51768cee0c48f22e245c19b760.url(args, {
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
destroy2bd0ca51768cee0c48f22e245c19b760Form.delete = (args: { auth: string | number } | [auth: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy2bd0ca51768cee0c48f22e245c19b760.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy2bd0ca51768cee0c48f22e245c19b760.form = destroy2bd0ca51768cee0c48f22e245c19b760Form

/**
* Multiple routes resolve to \Modules\Auth\Http\Controllers\AuthController::destroy, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `destroy['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const destroy = {
    '/api/v1/auths/{auth}': destroyd6cd9596c4a04fe992660ca4bd99b9c7,
    '/auths/{auth}': destroy2bd0ca51768cee0c48f22e245c19b760,
}

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

const AuthController = { index, store, show, update, destroy, create, edit }

export default AuthController