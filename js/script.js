// $(function () {
  function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src =
      'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  }

  testWebP(function (support) {
    if (support == true) {
      document.querySelector('body').classList.add('webp');
    } else {
      document.querySelector('body').classList.add('no-webp');
    }
  });
  

  /* Modal ======================== */

  // $('[data-modal]').on('click', function (event) {
  //   event.preventDefault();
  //   let modal = $(this).data('modal');

  //   $('body').addClass('no-scroll');
  //   $(modal).addClass('show');

  //   setTimeout(function () {
  //     $(modal).find('.modal__content').css({
  //       transform: 'scale(1)',
  //       opacity: '1',
  //     });
  //   });
  // });

  // $('[data-modal-close]').on('click', function (event) {
  //   event.preventDefault();
  //   let modal = $(this).parents('.modal');
  //   modalClose(modal);
  // });

  // $('.modal').on('click', function () {
  //   let modal = $(this);
  //   modalClose(modal);
  // });


  // function modalClose(modal) {
  //   modal.find('.modal__content').css({
  //     transform: 'scale(0.5)',
  //     opacity: '0',
  //   });

  //   setTimeout(function () {
  //     $('body').removeClass('no-scroll');
  //     modal.removeClass('show');
  //   }, 200);
  // }




  let btn = document.querySelector('.case-btn');
  btn.onclick = function (e) {
    let element = document.querySelector(".case__row-block");
    if (element.classList.contains("show-block")) {
      element.classList.remove("show-block");
    } else {
      element.classList.add("show-block");
    }
  }
