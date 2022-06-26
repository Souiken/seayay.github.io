document.addEventListener('visibilitychange', function () {
    var isHidden = document.hidden;
    if (isHidden) {
      document.title = '你去看什么了(；′⌒`)';
    } else {
      setTimeout(() => {
        document.title = '你回来了!q(≧▽≦q)';
      }, 0);
      setTimeout(() => {
        document.title = 'GitHub@Seayay';
      }, 3000);
    }
  });
