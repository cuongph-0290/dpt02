import Component from '../../shared/Component.js'
import { fetchData, removeEmptyValue } from '../../shared/helpers.js'

export default class SearchFullModal extends Component {
  constructor(element, props) {
    super(element, props)

    this.store = {
      teams: []
    }

    this.fetchData(this.handleResponse)
  }

  fetchData(callback) {
    fetchData({
      url: '/api/teams',
      data: { get_all: true },
      callback
    })
  }

  handleResponse = response => {
    const teams =
      JSON.parse(response.objects).map(({ pk, fields }) => ({ pk, ...fields }))

    this.setStore({ teams })
    this.render()
  }

  handleSubmit = () => {
    const searchOptions = {
      title__contains: this.element
        .querySelector('#title__contain').value,
      description__contains: this.element
        .querySelector('#description__contain').value,
      teams__id: this.element
        .querySelector('.select-teams').value || '',
      created_at__gt: this.element.querySelector('#created_at__gt').value,
      created_at__lt: this.element.querySelector('#created_at__lt').value,
    }

    this.props.handleSearch(removeEmptyValue(searchOptions))
  }

  prepareChildElements() {
    const teamOptions = (this.store.teams || []).map(team =>
      `<option value=${team.pk}>${team.title}</option>`).join('')

    this.element.querySelector('.select-teams').innerHTML =
      `<option value=''></option>${teamOptions}`

    this.element.querySelector('button.submit').onclick = this.handleSubmit

    $(function() {
      $('#created_at__gt, #created_at__lt')
        .datepicker({ dateFormat: 'yy-mm-dd' })
    });
  }

  innerHTML() {
    return `
      <div class="p-3">
        <div class="form-group">
          <input type="text" class="form-control" id="title__contain"placeholder="title contain">
        </div>
        <div class="form-group">
          <input type="text" class="form-control" id="description__contain"placeholder="description contain">
        </div>
        <div class="form-group">
          <select class="form-control select-teams">
          </select>
        </div>
        <div class="form-group">
          <input type="text" class="form-control" id="created_at__gt" placeholder="start date">
        </div>
        <div class="form-group">
          <input type="text" class="form-control" id="created_at__lt" placeholder="end date">
        </div>
        <button class="btn btn-primary submit">Submit</button>
      </div>
    `
  }
}
