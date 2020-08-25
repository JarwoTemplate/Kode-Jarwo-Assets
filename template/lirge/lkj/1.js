// “Ingatlah, laknat Allah (ditimpakan) atas orang-orang yang zalim” (QS. Hud: 18) //
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

$(document.body).append('<div id="page-loader"><div class="loader"></div></div>'),$(window).on("beforeunload",function(){$("#page-loader").fadeIn(500).delay(6e3).fadeOut(1e3)});};
