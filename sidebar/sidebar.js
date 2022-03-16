const leftSidebarButton = document.getElementById('left-sidebar-button');
const leftSidebar = document.getElementById('left-sidebar');

leftSidebarButton.addEventListener('click', () => {
    leftSidebarButton.classList.toggle('active');
    leftSidebar.classList.toggle('closed');
})