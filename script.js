var tog = 0;
var doc = document.documentElement;
var end = document.documentElement.scrollHeight;

function scrollWinD() {
    var scrollsize = window.innerHeight;
    var tid = setInterval(btscr, 1)
    var scr = 0;

    function btscr() {
        if (scr >= scrollsize) {
            clearInterval(tid);
            var end = document.documentElement.scrollHeight - window.innerHeight;
            var tol = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
            if (tol != end) {
                window.scrollBy(0, scrollsize - scr);
            }
        } else {
            scr += 4;
            window.scrollBy(0, 4);
        }
    }
}

function scrollWinT() {
    var scrollsize = window.innerHeight;
    var did = setInterval(tpscr, 1)
    var scr = 0;

    function tpscr() {
        if (scr >= scrollsize) {
            clearInterval(did);
            var tol = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
            if (tol != 0) {
                window.scrollBy(0, scr - scrollsize);
            }
        } else {
            scr += 4;
            window.scrollBy(0, -4);
        }
    }
}

shortcut.add("down", scrollWinD);
shortcut.add("up", scrollWinT);
shortcut.add("pd", scrollWinD);
shortcut.add("pu", scrollWinT);
shortcut.add("left", visshop);
shortcut.add("right", visshop);

function visshop() {
    if (!tog) {
        document.getElementById('sho').className = 'shoppe';
        document.getElementById('arr').className = 'arrr';
        document.getElementById('tas').className = 'invisible';
        document.getElementById('das').className = 'invisible';
        tog++;
    } else {
        document.getElementById('sho').className = 'shop';
        document.getElementById('arr').className = '';
        document.getElementById('tas').className = 'visible';
        document.getElementById('das').className = 'visible';
        tog--;
    }
}

function dis() {
    var end = document.documentElement.scrollHeight - window.innerHeight;
    var tol = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (tol <= 10) {
        document.getElementById('tas').className = 'invisible';
    } else if (tol >= end - 50) {
        document.getElementById('das').className = 'invisible';
    } else {
        document.getElementById('tas').className = 'visible';
        document.getElementById('das').className = 'visible';
    }
}

function rsz() {
    document.getElementsByTagName("body")[0].style["font-size"] = document.body.clientWidth * (12 / 1280) + "px";
}

function showDialog(cl) {
    var dlg = document.getElementById("dlgbox");
    dlg.style.display = "block";
    var winWidth = window.innerWidth;
    var winHeight = window.innerHeight;
    dlg.style.left = (winWidth / 8) + "px";
    dlg.style.top = (winHeight / 2) + "px";
    dlg.style.transform = "translateY(-50%)";
    document.getElementById("pp").src = cl.getElementsByTagName('img')[0].src;
    document.getElementById('dlgbox').className = 'visib';
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = 'body > *:not(#dlgbox) {filter: blur(15px);}';
    document.getElementsByTagName('head')[0].appendChild(style);
}

function hideDiag() {
    var dlg = document.getElementById("dlgbox");
    document.getElementById('dlgbox').className = 'invisib';
    setTimeout(function () {
        dlg.style.display = "none";
    }, 200);
    var hs = document.getElementsByTagName('style');
    for (var i = 0, max = hs.length; i < max; i++) {
        hs[i].parentNode.removeChild(hs[i]);
    }
}