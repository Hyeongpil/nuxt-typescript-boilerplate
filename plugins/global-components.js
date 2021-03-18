import Vue from 'vue'

import { filter, cloneDeep, find, findIndex, debounce } from 'lodash'

// eslint-disable-next-line no-underscore-dangle
Vue.prototype._ = { filter, cloneDeep, find, findIndex, debounce }
