

let currentPage = 1;
const pages = document.querySelectorAll('.page');
const totalPages = pages.length;

function showPage(pageNumber) {
    pages.forEach((page, index) => {
        page.style.display = (index + 1 === pageNumber) ? 'block' : 'none';
    });
    document.getElementById('pageNumber').textContent = pageNumber;
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
}

function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        showPage(currentPage);
    }
}

// Initialize the first page
document.addEventListener('DOMContentLoaded', () => {
    showPage(currentPage);
});
