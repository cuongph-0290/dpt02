import Component from './Component.js'
import ItemDetail from './ItemDetail.js'

export default class ListItems extends Component {
  innerHTML() {
    if (!this.store.items) return null
    return  this.store.items.map(item => (new ItemDetail(null, item)).render()).join('')
  }
}
