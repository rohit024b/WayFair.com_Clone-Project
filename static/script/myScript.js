window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 110 || document.documentElement.scrollTop > 110) {
        document.getElementById("StillnavBar").style.position = 'fixed'
        document.getElementById("StillnavBar").style.top = "0";
        document.getElementById("StillnavBar2").style.position = 'fixed'
        document.getElementById("StillnavBar2").style.top = "0";
        
    } else {
        document.getElementById("StillnavBar").style.position = ''
        document.getElementById("StillnavBar").style.top = "-80px";
        document.getElementById("StillnavBar2").style.position = ''
        document.getElementById("StillnavBar2").style.top = "-80px";
    }
}