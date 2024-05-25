function navigate(page) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(function(p) {
        p.style.display = 'none';
    });

    const activePage = document.getElementById(page);
    if (activePage) {
        activePage.style.display = 'block';
    }
}

// 페이지가 로드될 때 기본적으로 'home' 섹션을 표시합니다.
document.addEventListener('DOMContentLoaded', function() {
    navigate('home');
});

// Expose the navigate function to the global scope
window.navigate = navigate;
