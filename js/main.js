$(function(){
    /*=================================================
    スムーススクロール
    ===================================================*/
    // ページ内のリンクをクリックした時に動作する
    $('a[href^="#"]').click(function(){
      // リンクを取得
      let href= $(this).attr("href");
      // ジャンプ先のid名をセット
      let target = $(href == "#" || href == "" ? 'html' : href);
      // トップからジャンプ先の要素までの距離を取得
      let position = target.offset().top;
      // animateでスムーススクロールを行う
      // 600はスクロール速度で単位はミリ秒
      $("html, body").animate({scrollTop:position}, 600, "swing");
      return false;
    });
  })

  // $(function(){
  //   /*=================================================
  //   // カルーセル用 jQueryプラグイン「slick」
  //   // マニュアル：https://kenwheeler.github.io/slick/
  //   ===================================================*/
  //   $('#slider').slick({
  //     autoplay: true,                         // 自動再生オン
  //     autoplaySpeed: 3000,                    // スライドを3秒で切り替え
  //     arrows: true,                           // 左右の矢印を表示
  //     dots: true,                             // ドット（ページ送り）を表示
  //     slidesToShow: 1,                        // スライドを1枚表示（※centerModeをtrueにすると両端に2枚見切れた状態になる）
  //     centerMode: true,                       // センターモード（両端が見切れた状態になる）
  //     centerPadding: '18%',                   // 見切れたコンテンツの幅を18%に設定
  //     prevArrow:'<div class="prev"></div>',   // 前へ矢印のHTMLを変更する
  //     nextArrow:'<div class="next"></div>',   // 次へ矢印のHTMLを変更する
  //     responsive: [              // レスポンシブの設定
  //       {
  //         breakpoint: 900,       // 900px以下の場合に適用
  //         settings: {
  //           centerMode: false    // センターモードをオフにする
  //         }
  //       }
  //     ]
  //   });
  // });



  $(function(){
    /*=================================================
    ハンバーガーメニュー
    ===================================================*/
    // ハンバーガーメニューのクリックイベント
    $('.toggle_btn').on('click', function() {
      // #headerにopenクラスが存在する場合
      if ($('#nav').hasClass('open')) {
        // openクラスを削除
        // openクラスを削除すると、openクラスのCSSがはずれるため、
        // メニューが非表示になる
        $('#nav').removeClass('open');
  
      // #headerにopenクラスが存在しない場合
      } else {
        // openクラスを追加
        // openクラスを追加すると、openクラスのCSSが適応されるため、
        // メニューが表示される
        $('#nav').addClass('open');
      }
    });
  
    // メニューが表示されている時に画面をクリックした場合
    $('#mask').on('click', function() {
      // openクラスを削除して、メニューを閉じる
      $('#nav').removeClass('open');
    });
  });
  