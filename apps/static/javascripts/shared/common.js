$(document).on('click', '.navbar-toggler', function() {
  $($('.app-header')[0]).toggleClass('header-collapsed')
})

function toggleMenu(menuButton) {
  const dropdownMenu =
    menuButton.closest('.dropdown').querySelector('.dropdown-menu')

  dropdownMenu.classList.toggle('display-none')
  dropdownMenu.classList.toggle('display-block')
}
