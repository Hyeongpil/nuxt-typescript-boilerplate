/* eslint-disable no-unused-vars */
/* eslint-disable import/no-mutable-exports */

import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import adminModule from '~/store/adminModule'

let adminStore: adminModule

function initialiseStores(store: Store<any>): void {
  adminStore = getModule(adminModule, store)
}

export { initialiseStores, adminStore }
