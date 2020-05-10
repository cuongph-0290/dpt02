export default class ItemDetail {
  constructor(data) {
    this.data = data
  }

  render() {
    const { title, description } = this.data

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

