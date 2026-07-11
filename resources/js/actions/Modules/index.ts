import Auth from './Auth'
import Client from './Client'
import DispatchOperation from './DispatchOperation'
import Planning from './Planning'
import User from './User'
import Vendor from './Vendor'

const Modules = {
    Auth: Object.assign(Auth, Auth),
    Client: Object.assign(Client, Client),
    DispatchOperation: Object.assign(DispatchOperation, DispatchOperation),
    Planning: Object.assign(Planning, Planning),
    User: Object.assign(User, User),
    Vendor: Object.assign(Vendor, Vendor),
}

export default Modules