import Component from './Component.js'

export default class Paginate extends Component {
  renderPrevious() {
    const { page_number, num_pages } = this.store

    if (page_number == 1) return ''

    return `
      <span class='clickable first'>First</span>
      <span class='clickable previous'>Previous</span>
    `
  }

  renderNext() {
    const { page_number, num_pages } = this.store

    if (page_number == num_pages) return ''

    return `
      <span class='clickable next'>Next</span>
      <span class='clickable last'>Last</span>
    `
  }

  prepareChildElements() {
    const { page_number, num_pages } = this.store

    const firstElement = this.element.querySelector('span.first')
    if (firstElement) firstElement.onclick =
      () => this.props.handleClick(1)

    const previousElement = this.element.querySelector('span.previous')
    if (previousElement) previousElement.onclick =
      () => this.props.handleClick(page_number - 1)

    const nextElement = this.element.querySelector('span.next')
    if (nextElement) nextElement.onclick =
      () => this.props.handleClick(page_number + 1)

    const lastElement = this.element.querySelector('span.last')
    if(lastElement) lastElement.onclick =
      () => this.props.handleClick(num_pages)
  }

  innerHTML() {
    const { page_number, num_pages } = this.store

    return `
      <div class="pl-2">
        ${this.renderPrevious()}
        ${page_number} of ${num_pages}
        ${this.renderNext()}
      </div>
    `
  }
}
