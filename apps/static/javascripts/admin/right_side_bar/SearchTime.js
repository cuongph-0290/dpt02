import Component from '../../shared/Component.js'

export default class SearchTime extends Component {
  prepareChildElements() {
    const $this = this

    this.element.querySelector('div.last-week').onclick = () =>
      $this.props.handleSearch({
        created_at__gt: (new Date(new Date()
          .setDate(new Date().getDate() - 7))).toISOString().split('T')[0]
      })

    this.element.querySelector('div.last-month').onclick = () =>
      $this.props.handleSearch({
        created_at__gt: (new Date(new Date()
          .setMonth(new Date().getMonth() - 1))).toISOString().split('T')[0]
      })

    this.element.querySelector('div.last-year').onclick = () =>
      $this.props.handleSearch({
        created_at__gt: (new Date(new Date()
          .setYear(new Date().getFullYear() - 1))).toISOString().split('T')[0]
      })
  }

  innerHTML() {
    return `
      <div class="float-right pr-3 last-week clickable">Last week</div>
      <div class="float-right pr-3 last-month clickable">Last month</div>
      <div class="float-right pr-3 last-year clickable">Last year</div>
    `
  }
}
