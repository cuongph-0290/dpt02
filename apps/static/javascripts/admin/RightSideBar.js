import Component from '../shared/Component.js'

export default class RightSideBar extends Component {
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
      <div class="float-right pr-3">
        <div class="dropdown">
          <svg class="clickable bi bi-search"
            data-toggle="dropdown" width="20px" height="20px" viewBox="0 0 16 16"
            fill="currentColor" xmlns="http://www.w3.org/2000/svg"
            onclick=toggleMenu(this)
          >
            <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z" clip-rule="evenodd"/>
            <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" clip-rule="evenodd"/>
          </svg>
          <div class="mt-2 dropdown-menu display-none" onclick=clearStyle(this)>
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
          </div>
        </div>
      </div>
      <br><br><br>
      <div class="float-right pr-3 last-week clickable">Last week</div>
      <div class="float-right pr-3 last-month clickable">Last month</div>
      <div class="float-right pr-3 last-year clickable">Last year</div>
    `
  }
}
