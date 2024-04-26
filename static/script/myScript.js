window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 110 || document.documentElement.scrollTop > 110) {
        document.getElementById("StillnavBar").style.position = 'fixed'
        document.getElementById("StillnavBar").style.top = "0px";
        document.getElementById("StillnavBar2").style.position = 'fixed'
        document.getElementById("StillnavBar2").style.top = "0";
        document.getElementById("gToTop").style.position = 'fixed'
        document.getElementById("gToTop").style.right= "30px";
        
    } else {
        document.getElementById("StillnavBar").style.position = ''
        document.getElementById("StillnavBar").style.top = "-80px";
        document.getElementById("StillnavBar2").style.position = ''
        document.getElementById("StillnavBar2").style.top = "-80px";
        document.getElementById("gToTop").style.position = ''
        document.getElementById("gToTop").style.right= "-100px";
    }
}
