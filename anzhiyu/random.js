var posts=["2024/10/26/Markdown/","2024/08/31/hello-world/","2024/11/10/雅思/","2024/10/27/力学/","2024/12/16/光学/","2024/11/18/常用网站推荐/","2024/12/16/概率论/","2024/11/15/图论/","2024/12/16/数学建模/","2024/11/16/群论/","2024/12/16/热学/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };