import Component from '../shared/Component.js'
import SearchTime from './right_side_bar/SearchTime.js'
import SearchFullModal from './right_side_bar/SearchFullModal.js'

export default class RightSideBar extends Component {
  prepareChildElements() {
    this.childElements.searchTime = new SearchTime(
      this.element.querySelector('.search-time'), {
        handleSearch: this.props.handleSearch
      })

    this.childElements.searchFullModal = new SearchFullModal(
      this.element.querySelector('.search-full-modal'), {
        handleSearch: this.props.handleSearch
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
          <div class="mt-2 dropdown-menu display-none search-full-modal">
          </div>
        </div>
      </div>
      <br><br><br>
      <div class="search-time">
      </div>
    `
  }
}
