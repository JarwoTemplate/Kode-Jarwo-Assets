# Popup Contact Form

Pertama, silakan taruh kode berikut di atas <code>&lt;/body&gt;</code>:

```html
<div id='kj-popupcontact' onclick='Keluarkjpopupcontact();'>
<script data-default-width='650px' data-role='form' src='//www.123formbuilder.com/embed/5588030.js' type='text/javascript'/>
</div>
```
```css
<style>
#kj-popupcontact {display:none}
#kj-popupcontact.aktif {
    display:block;
    cursor: pointer;
    width: 100%;
    height: calc(100% + 100px);
    background:rgb(0 0 0 / 88%);
    position: fixed;
    top: -88px;
}
#kj-popupcontact * {
    max-width: 620px;
    margin: auto !important;
    width: 100%;
    transform: scale(.8);
}
  @media screen and (min-width:637px){#kj-popupcontact *{height:620px !important}}
  @media screen and (max-width:636px){#kj-popupcontact *{height:660px !important}}
  @media screen and (max-width:455px){#kj-popupcontact *{height:675px !important}}
  @media screen and (max-width:376px){#kj-popupcontact *{height:720px !important}}
  @media screen and (max-width:276px){#kj-popupcontact *{height:760px !important}}
</style>
```
```js
<script>
  function Keluarkjpopupcontact(){
    document.getElementById(&quot;kj-popupcontact&quot;).classList.remove(&quot;aktif&quot;);
  };
  function Bukakjpopupcontact(){
    document.getElementById(&quot;kj-popupcontact&quot;).classList.add(&quot;aktif&quot;);
  }
</script>
```

Sekarang masih di edit HTML, cari tag untuk tombol <b>COBA GRATIS SEKARANG</b>nya. Kurang lebih ada kode <code>class="slide-button"</code> atau <code>class='slide-button'</code>.
Bila sudah ketemu, coba tambahkan atribut <code>onclick="Bukakjpopupcontact();"</code>, sehingga kodenya menjadi seperti ini:

```html
<a class="slide-button" href="https://trial.bossmail.id" onclick="Bukakjpopupcontact();">Coba Gratis Sekarang</a>
```

Simpan tema.

<i>This code is created by Ozik Jarwo at 8 August 2020. All rights reserved.</i>
