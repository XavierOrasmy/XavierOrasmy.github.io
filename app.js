let text = document.getElementById("title")

      window.addEventListener("scroll",function(){
        let value = window.scrollY;
        text.style.marginBottom = value * 10 + "px"
      })
