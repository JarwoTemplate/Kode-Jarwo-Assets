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
var txt1= $('.PopularPosts .snippet-item.r-snippetized').text();
if(txt1.length > 155)
    $('.PopularPosts .snippet-item.r-snippetized').text(txt1.substring(0,150) + '.....');

var txt2= $('.FeaturedPost .snippet-item.r-snippetized').text();
if(txt2.length > 300)
    $('.FeaturedPost .snippet-item.r-snippetized').text(txt2.substring(0,295) + '.....');

$("#LinkList60").each(function() {
    $(this).addClass('main-menu');
    var e = "<div id='navigation'><nav id='nav'><ul><li class='mobilenav' onclick='menumobile();'><div><span/><span/><span/><span/></div></li><div id='menu'><li><ul class='sub-menu show' style='display:none'>";
    $("#LinkList60 li").each(function() {
        var t = $(this).text(),
            n = t.substr(0, 1),
            r = t.substr(1);
        "_" == n ? (n = $(this).find("a").attr("href"), e += '<li class="menu-item"><a href="' + n + '">' + r + "</a></li>") : (n = $(this).find("a").attr("href"), e += '</ul></li><li><a href="' + n + '">' + t + "</a><ul class='sub-menu show' style='display:none'>")
    });
    e += "</ul></li></div></ul></nav></div>";
    $(this).html(e);
    $("#LinkList60 ul").each(function() {
        var e = $(this);
        if (e.html().replace(/\s|&nbsp;/g, "").length == 0) e.remove()
    });
    $("#LinkList60 li").each(function() {
        var e = $(this);
        if (e.html().replace(/\s|&nbsp;/g, "").length == 0) e.remove()
    });
    $('#LinkList60 a').each(function() {
        var page_url = $(location).attr('href'),
            link = $(this).attr('href');
        if (link === page_url) {
            var id = $(this).parents(':eq(1)').attr('id');
            if (id === 'nav') {
                $(this).parent('li').addClass('current')
            } else {
                $(this).parents(':eq(2)').addClass('current')
            }
        }
    });

    $('.sub-menu').prev('a').addClass("dropDown");
    $('.sub-menu').prev('a').append("<i class='fa fa-angle-down'/>");
    $('.sub-menu.show').prev('a').attr('onclick', 'if($(this).next().css("display")=="none"){$(".dropDown").next().fadeOut(300);$(this).next().show(300).fadeIn(300);$("nav a").addClass("blur");$(this).removeClass("blur")}else{$(this).next().hide(300).fadeOut(300);$("nav a").removeClass("blur")}');
    $('.sub-menu').prev('a').removeAttr("href");
});
$(document).ready(function(){
  $("#searchmenu").click(function(){
    $(this).toggleClass("buka");$(".search-menu").toggleClass("buka");
  });
});

function menumobile(){document.getElementById('menu').classList.toggle("showmobile");$('.mobilenav').toggleClass("click");$('body').toggleClass("uns")};

$(document.body).append('<div id="page-loader"><div class="loader"></div></div>'),$(window).on("beforeunload",function(){$("#page-loader").fadeIn(500).delay(6e3).fadeOut(1e3)});
