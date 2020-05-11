import Component from '../shared/Component.js'
import ListItems from '../shared/ListItems.js'
import Paginate from '../shared/Paginate.js'

import { fetchData } from '../shared/helpers.js'

export default class Dashboard extends Component {
  constructor(element, props) {
    super(element, props)

    this.fetchData()
  }

  fetchData() {
    const $this = this

    fetchData({
      url: '/api/projects',
      data: { page: 1 },
      callback: function(response) {
        const items = JSON.parse(response.objects).map(({ fields }) => fields)

        $this.setStore({ items })
      }
    })
  }

  prepareChildElements() {
    this.childElements.listItems =
      new ListItems($(this.element).find('.list-items')[0])
    this.childElements.listItems.setStore({ items: this.store.items })

    this.childElements.paginate =
      new Paginate($(this.element).find('.paginate')[0])
  }

  innerHTML() {
    return `
      <div class="row page-content">
        <div class="col-md-2"></div>
        <div class="col-md-8">
          <div class="row pt-3 pl-3 list-items">
          </div>
          <div class="paginate">
          </div>
        </div>
      </div>
    `
  }
}

(new Dashboard($('#dashboard')[0])).render()
