const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');

menu_btn.addEventListener('click', function () {
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
});

$(document).ready(function() {
  $(window).scroll(function() {
    if(this.scrollY > 20) {
      $('.navbar').addClass("sticky");
    } else {
      $('.navbar').removeClass("sticky");
    }
    if(this.scrollY > 500) {
      $('.scroll-up-btn').addClass("show");
    } else {
      $('.scroll-up-btn').removeClass("show");
    }  
  })

  $('.scroll-up-btn').click(function() {
    $('html').animate({scrollTop: 0});
  })

  $('.menu-btn').click(function() {
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
  })

  var typed = new Typed('.typing', {
  strings: [
    "Ketika kamu dijauhi jangan takut karena siapa tahu dia lagi mau kentut.",
    "Jangan pernah berhenti untuk melangkahkan kaki, apalagi pas lewat kuburan tengah malam.",
    "Ketika kamu menjumpai sebuah masalah, cobalah untuk melihat dari segala segi yang tidak terlihat. Namun apabila tidak terlihat, kamu bisa menyalakan lampu.",
  ],
  typeSpeed: 120,
  backSpeed: 50,
  loop: true,
})

  // this is really cool
  // but you should vote Mikuni first

  $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0:{
        items: 1,
        nav: false
      },
      600:{
        items: 2,
        nav: false
      },
      1000:{
        items: 3,
        nav: false
      }
    }
  });

})

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function sendwhatsapp() {
    var phonenumber = "+6281382077796";

    var name = document.querySelector("#name").value;
    var country = document.querySelector("#country").value;
    var message = document.querySelector("#message").value;

    // Validasi input
    if (!name || !country || !message) {
        alert("Please fill in all.");
        return;
    }

    // Clearing input fields
    document.querySelector("#name").value = "";
    document.querySelector("#message").value = "";

    var url = "https://wa.me/" + phonenumber + "?text=" +
        "*Name :* " + name + "%0a" +
        "*Country:* " + country + "%0a" +
        "*Message :* " + message +
        "%0a%0a" +
        "@dump.aclasss";

    window.open(url, '_blank').focus();
}