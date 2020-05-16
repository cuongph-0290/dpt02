import Component from './Component.js'

export default class Paginate extends Component {
  innerHTML() {
    return `
      <div class="pl-2">First Previos Next Last</div>
    `
  }
}
