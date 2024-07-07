var section_header = document.querySelector('#header');

section_header.innerHTML = ` <div class="container-fluid container-xl position-relative d-flex align-items-center">

      <a href="index.html" class="logo d-flex align-items-center me-auto">
        <h1 class="sitename">API Hub</h1>
      </a>

      <nav id="navmenu" class="navmenu">
        <ul>
          <li><a href="#" id="slug_index" data-link="index.html" class="active">Home</a></li>
          <li><a href="#" id="slug_service" data-link="service.html">Services</a></li>
          <li><a href="#" id="slug_portfolio" data-link="portfolio.html">Portfolio</a></li>
          <li><a href="#" id="slug_contact" data-link="contact.html">Contact</a></li>
          <li class="dropdown"><a href="#" id="slug_documentation" data-link="documentation.html"><span>Documentation</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
            <ul>
              <li><a href="#">Dropdown 1</a></li>
              <li class="dropdown"><a href="#"><span>Deep Dropdown</span> <i
                    class="bi bi-chevron-down toggle-dropdown"></i></a>
                <ul>
                  <li><a href="#">Deep Dropdown 1</a></li>
                  <li><a href="#">Deep Dropdown 2</a></li>
                  <li><a href="#">Deep Dropdown 3</a></li>
                  <li><a href="#">Deep Dropdown 4</a></li>
                  <li><a href="#">Deep Dropdown 5</a></li>
                </ul>
              </li>
              <li><a href="#">Dropdown 2</a></li>
              <li><a href="#">Dropdown 3</a></li>
              <li><a href="#">Dropdown 4</a></li>
            </ul>
          </li>
          <li><a href="#" id="slug_policy" data-link="privacy-policy.html">Privacy Policy</a></li>
        </ul>
        <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>

      <a class="btn-getstarted" href="index.html#about">Dashboard</a>

    </div>`;

///--------------------------------




// script.js
document.addEventListener('DOMContentLoaded', function () {

    var menuItems = document.querySelectorAll('#navmenu ul li a');

    menuItems.forEach(function (menuItem) {
        menuItem.addEventListener('click', function (e) {
            e.preventDefault();
            openLink(this);
        });
    });
    var slug_home = document.querySelector('#slug_index');
    var slug_service = document.querySelector('#slug_service');
    var slug_portfolio = document.querySelector('#slug_portfolio');
    var slug_contact = document.querySelector('#slug_contact');
    var slug_documentation = document.querySelector('#slug_documentation');
    var slug_policy = document.querySelector('#slug_policy');

    if (slug_home) {
        slug_home.addEventListener('click', function (e) {
            e.preventDefault();
            openLink(this);
        });
    }
    if (slug_service) {
        slug_service.addEventListener('click', function (e) {
            e.preventDefault();
            openLink(this);
        });
    }
    if (slug_portfolio) {
        slug_portfolio.addEventListener('click', function (e) {
            e.preventDefault();
            openLink(this);
        });
    }
    if (slug_contact) {
        slug_contact.addEventListener('click', function (e) {
            e.preventDefault();
            openLink(this);
        });
    }
    if (slug_documentation) {
        slug_documentation.addEventListener('click', function (e) {
            e.preventDefault();
            openLink(this);
        });
    }
    if (slug_policy) {
        slug_policy.addEventListener('click', function (e) {
            e.preventDefault();
            openLink(this);
        });
    }

    function openLink(element) {
        var link = element.getAttribute('data-link');
        localStorage.setItem('activeLink', link);
        window.location.href = link;
    }

    function updateActiveClass() {
        var activeLink = localStorage.getItem('activeLink');
        if (activeLink) {
            menuItems.forEach(function (menu) {
                menu.classList.remove('active');
                if (menu.getAttribute('data-link') === activeLink) {
                    menu.classList.add('active');
                }
            });
        }
    }
    updateActiveClass();
});
