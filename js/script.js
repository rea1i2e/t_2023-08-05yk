jQuery(function ($) {

  // 画像1枚の高さ
  const imageHight = $('.p-about__image').height(); 
  console.log('imageHight:' + imageHight);
  
  // 画像4枚分の高さ確保
  $('.p-about__container').height(imageHight * 4);
  const containerHight =  $('.p-about__container').height();
  console.log('containerHight:' + containerHight);

  // 画像3枚分の余白を詰める
  // let ajustHight = imageHight - containerHight;
  // console.log('ajustHight:' + ajustHight);
  // $('#js-next-section').css('margin-top', ajustHight);
  
  // 画像の位置を取得
  const imageY = $('.p-about__image').offset().top;
  console.log('imageY:' + imageY);
  
  // 画像切り替えの座標算出
  const y2 = imageY + imageHight;
  const y3 = y2 + imageHight;
  const y4 = y3 + imageHight;
  console.log('y2:' + y2);
  console.log('y3:' + y3);
  console.log('y4:' + y4);
  
  // 余白調整に必要な高さを取得
  let yNextSction = $('#js-next-section').offset().top;
  console.log('yNextSction:' + yNextSction);

  $(window).scroll(function() {

    // スクロール量を取得
    let scroll = $(this).scrollTop();
    console.log('scroll:' + scroll);
    
    // 余白調整に必要な高さを再計算
    yNextSction = $('#js-next-section').offset().top;
    console.log('yNextSction:' + yNextSction);
    
      
    $('.p-about__image').removeClass('is-current');
    
    // スクロール量に応じて.is-currintを切り替え
    if( scroll <= y2) {
    $('.p-about__image--1').addClass('is-current');
  } else if( scroll >= y2 && scroll <= y3 ) {
    $('.p-about__image--2').addClass('is-current');
  } else  if( scroll >= y3 && scroll <= y4 ) {
    $('.p-about__image--3').addClass('is-current');
  } else if( scroll >= y4 ) {
    $('.p-about__image--4').addClass('is-current');
  }
  
  });

});
