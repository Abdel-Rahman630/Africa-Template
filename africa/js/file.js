// Navbar Fixed
var  mn = $(".main-nav");
    mns = "main-nav-scrolled";
    hdr = $('.header').height();

$(window).scroll(function() {

  if( $(this).scrollTop() > hdr ) {

    mn.addClass(mns);

  } else {

    mn.removeClass(mns);

  }
});

// Stop-watch
const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

let countDown = new Date('Sep 30, 2020 00:00:00').getTime(),
    x = setInterval(function() {

      let now = new Date().getTime(),
          distance = countDown - now;

      document.getElementById('days').innerText = '47',
        document.getElementById('hours').innerText = '03',
        document.getElementById('minutes').innerText = '56',
        document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
      
      //do something later when date is reached
      //if (distance < 0) {
      //  clearInterval(x);
      //  'IT'S Done!;
      //}

    }, second)

    // owl-carousel
    $(document).ready(function(){
      $(".owl-carousel").owlCarousel({
        loop:true,
        nav:true,
        margin:10,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },            
            960:{
                items:5
            },
            1200:{
                items:6
            }
        }
    });
    $(".owl-carousel").owl.on('mousewheel', '.owl-stage', function (e) {
      if (e.deltaY>0) {
          owl.trigger('next.owl');
      } else {
          owl.trigger('prev.owl');
      }
      e.preventDefault();
  });
})

// Agenda

$(document).ready(function () {
  $(".agenda .control .buttons button").on("click", function () {

    if(! $(this).parent().hasClass('active')){
      $('.agenda .control .buttons').removeClass('active');
      $(this).parent().addClass('active');
  }
        $('.menu > div').hide()
      
        $($(this).data("menu")).fadeIn(500)
      
    })
})

// $('.agenda .agenda-tabs .one-tab span').click(function(){
//   if(! $(this).parent().hasClass('active')){
//       $('.agenda .control .button').removeClass('active');
//       $(this).parent().addClass('active');
//   }
// });
    
