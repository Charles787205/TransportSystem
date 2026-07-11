import auth from './auth'
import client from './client'
import dispatchoperation from './dispatchoperation'
import planning from './planning'
import user from './user'
import vendor from './vendor'

const api = {
    auth: Object.assign(auth, auth),
    client: Object.assign(client, client),
    dispatchoperation: Object.assign(dispatchoperation, dispatchoperation),
    planning: Object.assign(planning, planning),
    user: Object.assign(user, user),
    vendor: Object.assign(vendor, vendor),
}

export default api