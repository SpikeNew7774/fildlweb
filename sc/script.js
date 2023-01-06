function getParameterByName(dl, url = window.location.href) {
    dl = dl.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + dl + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }
  
  function getParameterByNam1(ttt, url = window.location.href) {
    ttt = ttt.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + ttt + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }

var valuator = document.getElementById("valuator")
var title = document.getElementById("tit")

var valuatorVal = document.getElementById("valuator").value

var paramDL = getParameterByName("dl")
var paramTTT = getParameterByNam1("ttt")

valuator.value = paramDL
title.textContent = "This Is " + paramTTT + " file. Do you want to download it?"