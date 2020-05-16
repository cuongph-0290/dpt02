import Component from '../shared/Component.js'
import ListItems from '../shared/ListItems.js'
import Paginate from '../shared/Paginate.js'

import { fetchData } from '../shared/helpers.js'

export default class Dashboard extends Component {
  constructor(element, props) {
    super(element, props)

    this.store = {
      items: [],
      num_pages: 0,
      page_number: 1,
    }

    this.fetchData(this.handleResponse)
  }

  fetchData(callback) {
    fetchData({
      url: '/api/projects',
      data: { page: this.store.page_number },
      callback
    })
  }

  handleResponse = response => {
    const items = JSON.parse(response.objects).map(({ fields }) => fields)
    const { num_pages } = response

    this.setStore({ items, num_pages })
    this.render()
  }

  prepareChildElements() {
    const { items, num_pages, page_number } = this.store

    this.childElements.listItems =
      new ListItems(this.element.querySelector('.list-items'))
    this.childElements.listItems.setStore({ items })

    this.childElements.paginate =
      new Paginate(this.element.querySelector('.paginate'), {
        handleClick: page_number => {
          this.setStore({ page_number })
          this.fetchData(this.handleResponse)
        }
      })
    this.childElements.paginate.setStore({ num_pages, page_number })
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

new Dashboard(document.querySelector('#dashboard'))
