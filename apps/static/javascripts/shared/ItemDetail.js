import Component from './Component.js';

export default class ItemDetail extends Component {
  render() {
    const { title, description } = this.props

    return `
      <div class="col-md-3 item">
        <div class="title">
          <h2>${title}</h2>
        </div>
        <div class="detail">
          ${description}
        </div>
      </div>
    `
  }
}

