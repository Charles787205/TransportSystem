import VendorController from './VendorController'
import VendorDriverController from './VendorDriverController'
import VendorVehicleController from './VendorVehicleController'

const Controllers = {
    VendorController: Object.assign(VendorController, VendorController),
    VendorDriverController: Object.assign(VendorDriverController, VendorDriverController),
    VendorVehicleController: Object.assign(VendorVehicleController, VendorVehicleController),
}

export default Controllers