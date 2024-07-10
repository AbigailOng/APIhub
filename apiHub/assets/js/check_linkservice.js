window.onload = function () {
    checkLink();
};

function checkLink() {
    const currentURL = window.location.href;
    const hashValue = window.location.hash.substring(1);

    if (currentURL.includes("service.html")) {
        var link_service = document.querySelector('#slug_service');
        link_service.classList.add('active');
        const links = document.querySelectorAll('.services-list a');
        links.forEach(link => {
            const dataId = link.getAttribute('data-id');
            if (hashValue === dataId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
}