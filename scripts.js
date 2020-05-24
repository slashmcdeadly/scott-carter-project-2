var hiddenNav = document.getElementById('hiddenNav');

function toggleMenu(){
    if (hiddenNav.style.display === 'block') {
        hiddenNav.style.display = 'none';
    } else {
        hiddenNav.style.display = 'block';
    }           
}