var posts=["2024/10/26/Markdown/","2024/08/31/hello-world/","2024/11/10/雅思/","2024/10/27/力学/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };