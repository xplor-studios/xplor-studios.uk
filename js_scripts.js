// scripts.js

function search() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const items = document.querySelectorAll('.content .item');

    items.forEach(item => {
        if (item.textContent.toLowerCase().includes(input)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}
