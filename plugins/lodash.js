import lodash from 'lodash'
import deepdash from 'deepdash'

export default ({ app }, inject) => {
  inject('_', deepdash(lodash))
}
