import ClientController from './ClientController'
import ClientBusinessUnitController from './ClientBusinessUnitController'
import ClientDestinationController from './ClientDestinationController'
const Controllers = {
    ClientController: Object.assign(ClientController, ClientController),
ClientBusinessUnitController: Object.assign(ClientBusinessUnitController, ClientBusinessUnitController),
ClientDestinationController: Object.assign(ClientDestinationController, ClientDestinationController),
}

export default Controllers