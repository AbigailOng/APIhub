var section_footer = document.querySelector('#footer');

section_footer.innerHTML = `<div class="footer-newsletter">
      <div class="container">
        <div class="row justify-content-center text-center">
          <div class="col-lg-6">
            <h4>Join Our Newsletter</h4>
            <p>Subscribe to our newsletter and receive the latest news about our products and services!</p>
            <form action="#" method="post" id="register" name="register" class="php-email-form">
              <div class="newsletter-form"><input type="email" name="email"><input type="submit" value="Subscribe">
              </div>
              <div class="loading">Loading</div>
              <div class="error-message"></div>
              <div class="sent-message">Your subscription request has been sent. Thank you!</div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="container footer-top">
      <div class="row gy-4">
        <div class="col-lg-4 col-md-6 footer-about">
          <a href="index.html" class="d-flex align-items-center">
            <span class="sitename">API Hub</span>
          </a>
          <div class="footer-contact pt-3">
            <p>50 Raffles Pl</p>
            <p>Level 4-5 Singapore Land Tower, Singapore 048623</p>
            <p><strong>Email:</strong> <span>team@sgapihub.com </span></p>
          </div>
        </div>

        <div class="col-lg-2 col-md-3 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li><i class="bi bi-chevron-right"></i><a href="#" id="slug_f_index" data-link="index.html" class="active" >Home</a></li>
            <li><i class="bi bi-chevron-right"></i><a href="#" id="slug_f_service" data-link="service.html">Services</a></li>
            <li><i class="bi bi-chevron-right"></i><a href="#" id="slug_f_portfolio" data-link="portfolio.html">Portfolio</a></li>
            <li><i class="bi bi-chevron-right"></i><a href="#" id="slug_f_contact" data-link="contact.html">Contact</a></li>
            <li ><i class="bi bi-chevron-right"></i><a href="#" id="slug_f_documentation" data-link="documentation.html"><span>Documentation</span>  </a> </li>
            <li><i class="bi bi-chevron-right"></i><a href="#" id="slug_f_policy" data-link="privacy-policy.html">Privacy Policy</a></li>

          </ul>
        </div>
        <!-- <i class="bi bi-chevron-right"></i> -->
        <div class="col-lg-2 col-md-3 footer-links ">
          <h4>Our Services</h4>
          <ul class="links-option-service" >
            <li><i class="bi bi-chevron-right"></i> <a href="#" data-link="service.html" data-title="web_design">Web Design</a></li>
            <li><i class="bi bi-chevron-right"></i> <a href="#" data-link="service.html" data-title="software">Software Development</a></li>
            <li><i class="bi bi-chevron-right"></i> <a href="#" data-link="service.html" data-title="product_management">Product Management</a></li>
            <li><i class="bi bi-chevron-right"></i> <a href="#" data-link="service.html" data-title="graphic_design">Graphic Design</a></li>
            <li><i class="bi bi-chevron-right"></i> <a href="#" data-link="service.html" data-title="marketing">Marketing</a></li>
          </ul>
        </div>

        <div class="col-lg-4 col-md-12">
          <h4>Follow Us</h4>
          <p>Stay Connected with Us on Social Media </p>
          <div class="social-links d-flex">
            <a href="https://x.com/?lang=en"><i class="bi bi-twitter-x"></i></a>
            <a href="https://t.me/yourusername" target="_blank"><i class="bi bi-telegram"></i></a>
            <a href="https://www.instagram.com/"><i class="bi bi-instagram"></i></a>
            <a href="https://www.facebook.com/"><i class="bi bi-facebook"></i></a>
          </div>
        </div>

      </div>
    </div>

    <div class="container copyright text-center mt-4">
      <p>© <span>Copyright</span> <strong class="px-1 sitename">API Hub</strong> <span>All Rights Reserved</span></p>

    </div>`;

var slug_f_home = document.querySelector('#slug_f_index');
var slug_f_service = document.querySelector('#slug_f_service');
var slug_f_portfolio = document.querySelector('#slug_f_portfolio');
var slug_f_contact = document.querySelector('#slug_f_contact');
var slug_f_documentation = document.querySelector('#slug_f_documentation');
var slug_f_policy = document.querySelector('#slug_f_policy');
var list_sub_services = document.querySelectorAll('.links-option-service li a');

if (slug_f_home) {
  slug_f_home.addEventListener('click', function (e) {
    e.preventDefault();
    openLink(this);
  });
}
if (slug_f_service) {
  slug_f_service.addEventListener('click', function (e) {
    e.preventDefault();
    openLink(this);
  });
}
if (slug_f_portfolio) {
  slug_f_portfolio.addEventListener('click', function (e) {
    e.preventDefault();
    openLink(this);
  });
}
if (slug_f_contact) {
  slug_f_contact.addEventListener('click', function (e) {
    e.preventDefault();
    openLink(this);
  });
}
if (slug_f_documentation) {
  slug_f_documentation.addEventListener('click', function (e) {
    e.preventDefault();
    openLink(this);
  });
}
if (slug_f_policy) {
  slug_f_policy.addEventListener('click', function (e) {
    e.preventDefault();
    openLink(this);
  });
}

list_sub_services.forEach(function (item) {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    openLinkSub(this);
  });
});

function openLink(element) {
  var link = element.getAttribute('data-link');
  localStorage.setItem('activeLink', link);
  window.location.href = link;
}

function openLinkSub(element) {
  var link = element.getAttribute('data-link');
  var title = element.getAttribute('data-title');
  link = link + '#' + title;
  localStorage.setItem('activeLink', link);
  window.location.href = link;
}
