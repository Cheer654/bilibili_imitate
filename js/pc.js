$(function() {
  // 初始化变量;
  
  // 该样式希望在页面百分比过大时，头部导航栏在左右滚动能与滚动保持一致，但也会造成
  // 在页面百分比小于100%时，由于设置left值导致头部导航栏无法居中
  // $('.topbar-navbar').css('left', -$(document).scrollLeft() + 'px')
  console.log($(document).scrollTop())
  topbar_navbar_restyle()
  $(document).scroll(() => {
    // $('.topbar-navbar').css('left', -$(document).scrollLeft() + 'px')
    topbar_navbar_restyle()
  })
  function topbar_navbar_restyle() {
    if($(document).scrollTop()) {
      $('.topbar-navbar').addClass('navbar-restyle')
    } else {
      $('.topbar-navbar').removeClass('navbar-restyle')
    }
  }
  $(document).resize()
  // 初始化topbar直播下拉框列表
  hot_live_list.forEach(live => {
    // let a = document.createElement('a');
    // $(a).prop('herf', live.href_link);
    // let div = document.createElement('div');
    // $(div).addClass('live-item-img');
    // let picture = document.createElement('picture');
    // let source = document.createElement('source');
    // $(source).prop('srcset', live.webp_src);
    // let img = document.createElement('img');
    // $(img).prop('src', live.img_src);
    // let p = document.createElement('p');
    // $(p).addClass('live-item-title');
    // $(p).text(live.name);

    // $(picture).append($(source));
    // $(picture).append($(img));
    // $(div).append($(picture));
    // $(a).append($(div));
    // $(a).append($(p));

    // 添加live-left-list中的item
    // <a href="javascript:;">
    //   <div class="live-item-img">
    //     <picture>
    //       <source  type="image/webp" srcset="./img/topbar/navbar-left/live/1.jpg@136w_136h.webp">
    //       <img src="./img/topbar/navbar-left/live/1.jpg" alt="">
    //     </picture>
    //   </div>
    //   <p class="live-item-title">老实憨厚的笑笑</p>
    // </a>
    let live_link = `
    <a href="${live.href_link}">
      <div class="live-item-img">
        <picture>
          <source style="width:100%;;height:100%;"  type="image/webp" srcset="${live.webp_src}">
          <img src="./img/topbar/navbar-left/live/1.jpg" alt="">
        </picture>
      </div>
      <p class="live-item-title">${live.name}</p>
    </a>`
    $('.live-left-list').append(live_link);
  })
  // <a href="javascript:;">
  //   <picture>
  //     <source srcset="./img/topbar/navbar-left/live/live-right/1.png@468w_182h.webp">
  //     <img src="./img/topbar/navbar-left/live/live-right/2.png" alt="">
  //   </picture>
  // </a> 
  hot_activities_list.forEach(activity => {
    let activity_link = `
    <a href="${activity.href_link}">
      <picture>
        <source srcset="${activity.webp_src}" type="image/webp">
        <img src="${activity.img_src}">
      </picture>
    </a>`;
    $('.live-right-list').append(activity_link);
  })
  // 监听窗口事件;
  $('.live-container').hover(function() {
    $(this).children('.drop-down-box').stop().fadeToggle('fast');
  })
  // 设置live-right右边样式
  $('.live-container').one('mouseenter', function() {
    $('.live-right').css('width', $('.live-left-list').width() + 'px');
    $('.live-right-list').css('height', $('.live-left-list').height() + 'px');
    $('.live-right-list > a').css('height', $('.live-left-list > a').height() + 'px');
  })

  // 初始化游戏中心下拉框列表
  game_left_list.forEach(game => {
    // <a href="javascript:;">
    //   <div class="game-item-img">
    //     <picture>
    //       <source  type="image/webp" srcset="./img/topbar/navbar-left/game/game-left/1.jpg@460w_258h.webp">
    //       <img src="./img/topbar/navbar-left/game/game-left/2.jpg" alt="">
    //     </picture>
    //   </div>
    //   <p class="game-item-title">命运-冠位指定（Fate/GO）</p>
    // </a>
    
    let game_link = `
    <a href="${game.href_link}">
      <div class="game-item-img">
        <picture>
          <source  type="image/webp" srcset="${game.webp_src}">
          <img src="${game.img_src}" alt="">
        </picture>
      </div>
      <p class="game-item-title">${game.name}</p>
    </a>`;
    $('.game-left').append(game_link);
  })
  // 设置game-right-list高度，提前设置height防止撑开下拉框。
  
  game_right_list.forEach(game => {
    $('.game-right-item-img').before(`<a href="${game.href_link}">${game.name}</a>`)
    $('.game-right-item-img').append(`
    <picture>
      <source  type="image/webp" srcset="${game.webp_src}">
      <img src="${game.img_src}" alt="">
    </picture>`)
  })
  
  $('.game-right-list').on('mouseenter mouseleave', 'a', function() {
    $('.game-right-item-img').children(`picture:eq(${$(this).index()})`).toggleClass('active')
  })
  $('.game-container').hover(function() {
    $(this).children('.drop-down-box').stop().fadeToggle('fast');
  })
  // 加载顺序
  $('.game-container').one('mouseenter', function() {
    $('.game-right-list').css('height', $('.game-left').height() - $('.game .drop-down-box-title').outerHeight(true) + 'px')
    $('.game-right-item-img').css({
      top: ($('.game .drop-down-box-title').outerHeight(true) || 0) + 'px',
      left: $('.game-right-list').outerWidth(true) + 'px',
    })
  })

  // 使用这个导致手动修改页面display样式，样式无法重新正常显示
  $('.comic-container').hover(function() {
    $(this).children('.drop-down-box').stop().fadeToggle('fast');
  })
  
  // head-portrait 
  $('.level-growup').css('width', Math.floor(11195/(17605 + 11195) * 188) + 'px')
  $('.head-portrait').hover(function() {
    $(this).children('.drop-down-box').stop().fadeToggle('fast');
  })

  // main-navbar

  // main-navbar-middle
  main_navbar_middle_list.forEach(item => {
    $('.main-navbar-middle').append(`
      <a class="navbar-middle-item" href="${item.href_link}">
        <li>
          ${item.name}
        </li>
      </a>
    `)
  })
  // 
  // main-navbar-middle

  // 轮播图 
  // 同时打开两个页面，定时器相互影响
  // let clip_box = 0;
  // let clip_box_translateY = -40;
  // function animation_clip_box(obj, target, callback) {
  //   clearInterval(obj.timer)
  //   obj.timer = setInterval(function() {
  //     let current = parseInt($('.animation-clipbox').css('transform').split(/,| |\)/)[10])
  //     if(current === target) {
  //       // 清除定时器
  //       console.log(1)
  //       clearInterval(obj.timer)
  //       // 执行回调函数
  //       callback && callback();
  //       return;
  //     }
  //     step = (target - current)/10;
  //     step = step > 0 ? Math.ceil(step) : Math.floor(step);
  //     obj.css('transform', `translateY(${step + current}px)`)
  //   }, 10)
  // }
  // $('.animation-clipbox').css('transform', 'translateY(0)')
  // setInterval(function() {
  //   if(++clip_box === 3) {
  //     clip_box = 1;
  //     $('.animation-clipbox').css('transform', 'translateY(0)')
  //   }
  //   animation_clip_box($('.animation-clipbox'), clip_box * clip_box_translateY)
  // }, 3000)
  $('.topbar').click(function() {
    console.log(this)
  })
})