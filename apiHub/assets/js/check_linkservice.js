
document.addEventListener('DOMContentLoaded', function () {
    checkLink();
    window.addEventListener('hashchange', checkLink);
});

function checkLink() {
    const hashValue = window.location.hash.substring(1);
    const links = document.querySelectorAll('.services-list a');
    const content_service = document.querySelectorAll('.content-service');
    var slug_service = document.querySelector('#slug_service');
    slug_service.classList.add('active');
    links.forEach(link => {
        const dataId = link.getAttribute('data-id');
        link.classList.remove('active');
        if (hashValue === dataId) {
            link.classList.add('active');
            content_service.forEach(link => link.classList.remove('active'));
            var id_link = document.querySelector("#" + link.getAttribute('data-id'));
            if (id_link) {
                id_link.classList.add('active');
                var serviceDetails = document.querySelector("#service-details");
                if (serviceDetails) {
                    serviceDetails.scrollIntoView({ behavior: 'smooth' });
                }

            }
        }
    });
}