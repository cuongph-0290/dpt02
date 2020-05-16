import MainView from './MainView.js'
import RightSideBar from './RightSideBar.js'

const mainview = new MainView(document.querySelector('#mainview'))
const rightsidebar = new RightSideBar(document.querySelector('#rightsidebar'), {
  handleSearch: searchOptions => mainview.handleSearch(searchOptions)
})
