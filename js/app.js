var darkTheme = "css/main.dark.css";
var lightTheme = "css/main.light.css";
checkTheme();
$(".main-logo").mouseover(function () {
    var href = $("#theme-css").attr("href");
    if (href == darkTheme) {
        setTheme("light");
        $(".main-logo").removeClass("rot-back");
        $(".main-logo").removeClass("rot-fore");
        $(".main-logo").addClass("rot-fore");
        localStorage.setItem("theme", "light");
    } else {
        setTheme("dark");
        $(".main-logo").removeClass("rot-back");
        $(".main-logo").removeClass("rot-fore");
        $(".main-logo").addClass("rot-back");
        localStorage.setItem("theme","dark");

    }
});



function setTheme(theme="light") {
    if(theme=="light"){
        $("#theme-css").attr("href", lightTheme);
    }else{
        $("#theme-css").attr("href", darkTheme);

    }
}


function checkTheme() {
    var scheme = localStorage.getItem("theme");
    if (scheme == null) {
        localStorage.setItem("theme", "light");
    } else {
        if (scheme == 'dark') {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }
}