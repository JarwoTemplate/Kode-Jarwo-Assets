## Table of Content by Ozik Jarwo

Pertama, cari <code>&lt;data:post.body/&gt;</code>, lalu ganti dengan:

```html
<div id='post-toc'>
  <data:post.body/>
  <script> jarwoTOC(); </script>
</div>
```

Setelah itu, taruh kode ini di atas <code>&lt;/head&gt;</code>:

```javascript
<script type='text/javascript'> //<![CDATA[ 
 function jarwoTOC() {
  var eh2 = document.getElementById("post-toc").querySelectorAll("h2");
  for (var i=0; i < eh2.length; i++) {eh2[i].setAttribute("attr", "h2");}
  var eh3 = document.getElementById("post-toc").querySelectorAll("h3");
  for (var i=0; i < eh3.length; i++) {eh3[i].setAttribute("attr", "h3");}
  var eh4 = document.getElementById("post-toc").querySelectorAll("h4");
  for (var i=0; i < eh4.length; i++) {eh4[i].setAttribute("attr", "h4");}
  var eh5 = document.getElementById("post-toc").querySelectorAll("h5");
  for (var i=0; i < eh5.length; i++) {eh5[i].setAttribute("attr", "h5");}
  var eh6 = document.getElementById("post-toc").querySelectorAll("h6");
  for (var i=0; i < eh6.length; i++) {eh6[i].setAttribute("attr", "h6");}
   var jarwoTOC = i = headlength = gethead = attr = 0;
   headlength = document.getElementById("post-toc").querySelectorAll("h2, h3, h4, h5, h6").length;
   for (i = 0; i < headlength; i++) {
        gethead = document.getElementById("post-toc").querySelectorAll("h2, h3, h4, h5, h6")[i].textContent;
        document.getElementById("post-toc").querySelectorAll("h2, h3, h4, h5, h6")[i].setAttribute("id", "soal-" + i);
        attr = document.getElementById("post-toc").querySelectorAll("h2, h3, h4, h5, h6")[i].getAttribute("attr");
        jarwoTOC = "<li><a href='#soal-" + i + "' class='jenis-"+attr+"'>" + gethead + "</a></li>";
        document.getElementById("jarwoTOC").innerHTML += jarwoTOC;
   }
 }
//]]> </script>
```

Sekarang, masukkan kode berikut di dalam postingan mode HTML:

```html
<div class="jarwoTOC">
  <ol id="jarwoTOC"></ol>
</div>
```

Untuk mengedit tampilan tiap heading di dalam TOC, pakai CSS berikut:

```css
<style>
  a.jenis-h2 {
    margin-left: 10px !important;display:block;
  }
  a.jenis-h3 {
    margin-left: 20px !important;display:block;
  }
  a.jenis-h4 {
    margin-left: 30px !important;display:block;
  }
  a.jenis-h5 {
    margin-left: 40px !important;display:block;
  }
  a.jenis-h6 {
    margin-left: 50px !important;display:block;
  }
</style>
```

<i>This code is created by Ozik Jarwo at 3 August 2020. All rights reserved.</i>
