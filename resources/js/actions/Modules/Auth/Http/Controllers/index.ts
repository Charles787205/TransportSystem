import Settings from './Settings'
import AuthController from './AuthController'
const Controllers = {
    Settings: Object.assign(Settings, Settings),
AuthController: Object.assign(AuthController, AuthController),
}

export default Controllers