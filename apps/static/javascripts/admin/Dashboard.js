import ItemDetail from '../shared/ItemDetail.js'

export default class Dashboard {
  constructor(element, props = {}) {
    this.element = element
    this.props = props
    this.state = {
      items: []
    }

    this.element.innerHTML = this.render()

    this.componentDidMount()
  }

  fetchData(callback) {
    $.ajax({
      url: '/api/projects',
      method: 'POST',
      data: {
        csrfmiddlewaretoken: $('input[name="csrfmiddlewaretoken"]').val()
      }
    }).done(response => {
      this.state.items = response.projects

      callback && callback()
    })
  }

  componentDidMount() {
    const $this = this

    this.fetchData(function() {
      $($this.element).find('.list-items')[0].innerHTML = $this.renderListItems()
    })
  }

  renderListItems() {
    return this.state.items.map(item => {
      return (new ItemDetail(item)).render()
    }).join('')
  }

  render() {
    return `
      <div class="col-md-2"></div>
      <div class="col-md-8">
        <div class="row pt-3 pl-3 list-items">
          ${this.renderListItems()}
        </div>
      </div>
    `
  }
}

new Dashboard($('#dashboard')[0])
