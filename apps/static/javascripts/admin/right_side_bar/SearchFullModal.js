import Component from '../../shared/Component.js'

export default class SearchFullModal extends Component {
  innerHTML() {
    return `
      <div class="p-3">
        <div class="form-group">
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="title or description contain">
        </div>
        <div class="form-group">
          <select class="form-control">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div class="form-group">
          <input type="text" class="form-control" id="exampleInputPassword1" placeholder="start date">
        </div>
        <div class="form-group">
          <input type="text" class="form-control" id="exampleInputPassword1" placeholder="end date">
        </div>
        <button class="btn btn-primary">Submit</button>
      </div>
    `
  }
}
