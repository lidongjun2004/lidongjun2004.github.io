var posts=["2024/08/31/hello-world/","2024/10/26/Markdown/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };