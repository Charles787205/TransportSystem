import ClientController from './ClientController'
import ClientBusinessUnitController from './ClientBusinessUnitController'
const Controllers = {
    ClientController: Object.assign(ClientController, ClientController),
ClientBusinessUnitController: Object.assign(ClientBusinessUnitController, ClientBusinessUnitController),
}

export default Controllers