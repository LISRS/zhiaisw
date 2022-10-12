$(function () {
      var swiper = new Swiper(".topswiper", {
            slidesPerView: 1,
            spaceBetween: 30,
            // loop: true,
            pagination: {
                  el: ".swiper-pagination",
                  clickable: true,
            },
            navigation: {
                  nextEl: " .topswiper .swiper-button-next",
                  prevEl: " .topswiper .swiper-button-prev",
            },
      });
      var swiper = new Swiper(".nav-swiper", {
            spaceBetween: 30,
            centeredSlides: true,
            navigation: {
                  nextEl: " .nav-swiper .swiper-button-next",
                  prevEl: " .nav-swiper .swiper-button-prev",
            },
      });
      var swiper = new Swiper(".timeSwiper", {
            slidesPerView: 1,
            spaceBetween: 30,
            navigation: {
                  nextEl: " .timeSwiper  .swiper-button-next",
                  prevEl: " .timeSwiper  .swiper-button-prev",
            },
      });
      var bannerHeight = $('.banner').height()
      var sum = $('.nav h3').offset().top - bannerHeight;
      var num = $('.about .she').offset().top - bannerHeight;
      var strs = $('.real-time').offset().top - bannerHeight
      var strs1 = $('.mian').offset().top - bannerHeight;
      //第二级菜单下标
      function fnsw() {
            $('.banner-list li a').css('color', '#fff');
            $('.right-EN').css('color', '#fff');
            $('.header').css('background', '#0b563f');
      }
      $('.banner-list').mouseenter(function (event) {
            event.preventDefault();
            fnsw()
      })
      $('.banner-list').mouseleave(function (event) {
            event.preventDefault();
            fn5()
      })
      function fn5() {
            $('.header').css('background', 'none')
            $('.banner-list li a').css('color', '#69895c')
            $('.right-EN').css('color', '#19241d')
            $('.header-box').css('height', '0px')
            $('.header-box li').hide()
      }
      $('.banner-list').mouseleave(function (event) {
            event.preventDefault();
            fn5()
      })
      $('.banner-list li').mouseenter(function (event) {
            console.log(12);
            var index = $(this).index()
            $('.header-box').hide()
            $('.header-box').eq(index).show()
            $('.header-box').css('height', '61.875px')
            $('.header-box').css('background', 'red')
            $('.header-box li').show()
      })
      $('.banner-list').mouseleave(function (event) {
            $('.header-box').hide();
      })
      var herd = $('.header').height()
      window.addEventListener('scroll', function () {
            if (window.pageYOffset >= herd) {
                  fnsw()
            } else {
                  $('.banner-list').off('mouseleave')
                  fn5()
            }
            if (window.pageYOffset >= sum) $('.bos').css('animation', 'fadeInDown 1s linear')
            if (window.pageYOffset >= num) {
                  $('.about  .left').css('animation', 'fadeInLeft 1s linear');
                  $('.about-main  .right').css('animation', 'fadeInRight 1s linear');
            }
            if (window.pageYOffset > strs) {
                  $('.time-box  .time-left').css('animation', 'fadeInLeft 2s linear');
                  $('.time-box  .time-right').css('animation', 'fadeInRight 2s linear');
            }
            if (window.pageYOffset > strs1) {
                  $('.remian p').css('animation', 'tops 1s linear')
            }
      })
      $.post('http://www.plantplusprotein.com/backend/api/product/recommend', function (res) {
            var i = 0
            if (res.status == 200) {
                  res.data.forEach(item => {
                        $('.bos .left img').eq(i).prop('src', 'http:' + item.img_url)
                        $('.bos .right img').eq(i).prop('src', 'http:' + item.img_s_url)
                        $('.bos .right h4').eq(i).html(item.title)
                        i++
                  })
            }
      })
      $.post('http://www.plantplusprotein.com/backend/api/news/recommend', function (res) {
            console.log(res);
            function add(adddom1, adddom2, adddom3, adddom, i) {
                  $(adddom1).html(res.data[i].created_at)
                  $(adddom2).prop('src', 'http:' + res.data[i].img_url)
                  $(adddom3).html(res.data[i].title);
                  if (res.data[i].subtitle.length > 18) {
                        var str = res.data[i].subtitle
                        console.log(str);
                        str = str.slice(0, 18)
                        $(adddom).eq(1).html(str + '...')
                  }
            }
            var j = 0
            if (res.status == 200) {
                  add('.time-one .span', '.time-one .img img', '.time-one p', '.time-one span', 0)
                  add('.time-two .img .span', '.time-two .img img', '.time-two p', '.time-two span', 1)
            }
      })

})