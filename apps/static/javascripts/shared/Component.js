export default class Component {
  constructor(element, props) {
    this.element = element
    this.props = props
    this.store = {}
    this.childElements = {}

    this.render()
  }

  setStore(options) {
    this.store = { ...this.store, ...options }
  }

  prepareChildElements(element = this.element) {
  }

  renderChildEmelents() {
    for (const key in this.childElements) this.childElements[key].render()
  }

  innerHTML() {
  }

  render() {
    this.element.innerHTML = this.innerHTML()
    this.prepareChildElements()
    this.renderChildEmelents()
  }
}
