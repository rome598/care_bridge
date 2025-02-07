document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-btn');
    const sidebar = document.getElementById('sidebar');
  
    function toggleSidebar(){
      sidebar.classList.toggle('close');
      toggleButton.classList.toggle('rotate');
      closeAllSubMenus();
    }
  
    function toggleSubMenu(button) {
      const subMenu = button.nextElementSibling;
      if (!subMenu.classList.contains('show')) {
        closeAllSubMenus();
      }
  
      subMenu.classList.toggle('show');
      button.classList.toggle('rotate');
  
      if (sidebar.classList.contains('close')) {
        sidebar.classList.toggle('close');
        toggleButton.classList.toggle('rotate');
      }
    }
  
    function closeAllSubMenus() {
      Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
        ul.classList.remove('show');
        ul.previousElementSibling.classList.remove('rotate');
      });
    }
  
    toggleButton.addEventListener("click", toggleSidebar);
  
    const dropdownButtons = document.querySelectorAll('.dropdown-btn');
    dropdownButtons.forEach(button => {
      button.addEventListener('click', function() {
        toggleSubMenu(button);
      });
    });
});