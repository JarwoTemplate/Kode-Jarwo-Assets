// “Ingatlah, laknat Allah (ditimpakan) atas orang-orang yang zalim” (QS. Hud: 18) //
$('.murni').on('input propertychange paste', function() {
  $('.hasil').val($(this).val().replace(/\</g,'&lt;').replace(/\>/g,'&gt;').replace(/\"/g,'&quot;').replace(/\'/g,'&#39;'));
});

! function(t) {
    var e = t("#Blog1 a.blog-pager-newer-link"),
        r = t("#Blog1 a.blog-pager-older-link");
    t.get(e.attr("href"), function(r) {
        var i = 1 == t(r).find("#Blog1 .post-body").length ? "<img alt='" + t(r).find("#Blog1 .post-title").text() + "' data-src='" + t(r).find("#Blog1 .post-body img:first").attr("src", function(t, e) {return e.replace(/.*?:\/\//g, "//")}).attr("src") + "' class='pager-thumb lazy' width='293' height='165'/>" : "";
        e.html(i + "<div><h6>&lt;&lt;&lt;</h6><h5>" + t(r).find("#Blog1 .post-title").text() + "</h5></div>")
    }, "html"), 
    t.get(r.attr("href"), function(e) {
        var i = 1 == t(e).find("#Blog1 .post-body").length ? "<img alt='" + t(e).find(".post-title").text() + "' data-src='" + t(e).find("#Blog1 .post-body img:first").attr("src", function(t, e) {return e.replace(/.*?:\/\//g, "//")}).attr("src") + "' class='pager-thumb lazy' width='293' height='165'/>" : "";
        r.html(i + "<div><h6>&gt;&gt;&gt;</h6><h5>" + t(e).find("#Blog1 .post-title").text() + "</h5></div>")
    }, "html")
}(jQuery);

var a = $("#blog-pager-newer-link");
var b = $('.comment-replies');

$(a).has('iframe[height*="296"]').css( "background-color", "red" );

var aaa = $(b).has('li.comment');
var bbb = aaa.prev();
var ccc = bbb.find('.comment-reply');
var ddd = ccc.hide();
var eee = aaa.next();
$(eee).addClass('perkecil');

$(".tabs").after($('.comment-replybox-thread, .comments iframe#comment-editor'));
$(".tabs").after($('#top-continue'));

$('.comments span.item-control.blog-admin a').html('X');

$('.comment-replybox-thread').bind('DOMSubtreeModified', function() {
  if ($('.comment-replybox-thread').children().length > 0 ) {$('.comment-replybox-thread').show()} else {$('.comment-replybox-thread').hide();}
});

$('.comment-replybox-thread iframe').bind('DOMSubtreeModified', function() {
  $(".comment-replybox-thread").has('iframe[height*="296"]').css( "background-color", "red" );
});

$('.comment-replybox-single').each(function(){
 $(this).bind('DOMSubtreeModified', function() {
  if ($(this).children().length > 0 ) {$(this).addClass('aktif')} else {$(this).removeClass('aktif')}
 });
});

$(".comment-content:contains('This comment has been removed by the author.'), .comment-content:contains('Komentar ini telah dihapus oleh pengarang.')").addClass('deleted');

$('.comment-content').html(function(index, oldHtml){
   return oldHtml
   .replace(/\[pre]/g,'<pre>').split('[/pre]').join('</pre>')
   .replace(/\[code]/g,'<code>').split('[/code]').join('</code>')
   .replace(/\[img/g,"<img class='normal'").split('/]').join('/>')
   .split(":)"  ).join("<img class='KJemot' src='https://cdn.statically.io/img/twemoji.maxcdn.com/16x16/1f600.png'></img>")
   .split(":("  ).join("<img class='KJemot' src='https://cdn.statically.io/img/twemoji.maxcdn.com/16x16/1f615.png'></img>")
   .split("hihi").join("<img class='KJemot' src='https://cdn.statically.io/img/twemoji.maxcdn.com/16x16/1f601.png'></img>")
   .split(":-)" ).join("<img class='KJemot' src='https://cdn.statically.io/img/twemoji.maxcdn.com/16x16/1f60f.png'></img>")
   .split(":D"  ).join("<img class='KJemot' src='https://cdn.statically.io/img/twemoji.maxcdn.com/16x16/1f603.png'></img>")
   .split("=D"  ).join("<img class='KJemot' src='https://cdn.statically.io/img/twemoji.maxcdn.com/16x16/1f62c.png'></img>")
   .split(":-d" ).join("<img class='KJemot' src='https://cdn.statically.io/img/twemoji.maxcdn.com/16x16/1f604.png'></img>")
   .split(";("  ).join("<img class='KJemot' src='https://cdn.statically.io/img/twemoji.maxcdn.com/16x16/1f61e.png'></img>")
   .split(";-(" ).join("<img class='KJemot' src='https://cdn.statically.io/img/twemoji.maxcdn.com/16x16/1f62d.png'></img>")
   .split("@-)" ).join("<img class='KJemot' src='https://cdn.statically.io/img/twemoji.maxcdn.com/16x16/1f616.png'></img>")
   .split(":P"  ).join("<img class='KJemot' src='https://cdn.statically.io/img/twemoji.maxcdn.com/16x16/1f61c.png'></img>")
   .split(":o"  ).join("<img class='KJemot' src='https://cdn.statically.io/img/twemoji.maxcdn.com/16x16/1f62e.png'></img>")
   .split("}D"  ).join("<img class='KJemot' src='https://cdn.statically.io/img/twemoji.maxcdn.com/16x16/1f606.png'></img>")
   .split("(o)" ).join("<img class='KJemot' src='https://cdn.statically.io/img/twemoji.maxcdn.com/16x16/1f609.png'></img>")
   .split(":p"  ).join("<img class='KJemot' src='https://cdn.statically.io/img/twemoji.maxcdn.com/16x16/1f614.png'></img>")
   .split("(p)" ).join("<img class='KJemot' src='https://cdn.statically.io/img/twemoji.maxcdn.com/16x16/1f619.png'></img>")
   .split(":-s" ).join("<img class='KJemot' src='https://cdn.statically.io/img/twemoji.maxcdn.com/16x16/1f625.png'></img>")
   .split("(m)" ).join("<img class='KJemot' src='https://cdn.statically.io/img/twemoji.maxcdn.com/16x16/1f620.png'></img>")
   .split("8-)" ).join("<img class='KJemot' src='https://cdn.statically.io/img/twemoji.maxcdn.com/16x16/1f60e.png'></img>")
   .split(":-t" ).join("<img class='KJemot' src='https://cdn.statically.io/img/twemoji.maxcdn.com/16x16/1f624.png'></img>")
   .split(":-b" ).join("<img class='KJemot' src='https://cdn.statically.io/img/twemoji.maxcdn.com/16x16/1f634.png'></img>")
   .split("b-(" ).join("<img class='KJemot' src='https://cdn.statically.io/img/twemoji.maxcdn.com/16x16/1f635.png'></img>")
   .split("$-)" ).join("<img class='KJemot' src='https://cdn.statically.io/img/twemoji.maxcdn.com/16x16/1f4b5.png'></img>")
   .split("(y)" ).join("<img class='KJemot' src='https://cdn.statically.io/img/twemoji.maxcdn.com/16x16/1f44d.png'></img>")
   .split("x-)" ).join("<img class='KJemot' src='https://cdn.statically.io/img/twemoji.maxcdn.com/16x16/1f60d.png'></img>")
   .split("(l)" ).join("<img class='KJemot' src='https://cdn.statically.io/img/twemoji.maxcdn.com/16x16/1f496.png'></img>")
});
var knil=[
"jarwo-lirge.blogspot.com","pertanyaansekolah.blogspot.com",
"saladinez.kodejarwo.com","6508876407973009500",
"tukang-listrik.com","2722220767065175407",
"jarwo-agroekotekno","agroekotekno.com","9000838746591063808",
// GA #2
"haxerise.xyz","7784785690439060651",
"kabarpns.com","4758397360279400455",
"ijamu.com","5116522222985387892"
];
