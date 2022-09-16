//background.js 

function clearAllHistory(){
    chrome.history.deleteAll(
        function(){
            console.log("History Cleared.");
        });
}

function clearRangeHistory(){
    var days = document.getElementById("histRange").value;
    if(days < 0){
        alert("Can not have negative days! Please input valid days!");
        return;
    }
    var start = Date.now() - (1000 * 60 * 60 * 24 * days);
    var curr = Date.now();
    chrome.history.deleteRange({startTime: start, endTime: curr}, 
        function(){
            console.log("History Cleared.");
        });
}

function clearAllDownloads(){
    chrome.browsingData.removeDownloads({"since": 0},
        function(){
            console.log("Downloads Cleared.");
        });
}

function clearRangeDownloads(){
    var days = document.getElementById("downRange").value;
    if(days < 0){
        alert("Can not have negative days! Please input valid days!");
        return;
    }
    var from = Date.now() - (1000 * 60 * 60 * 24 * days);
    chrome.browsingData.removeDownloads({since: from},
        function(){
            console.log("Downloads Cleared.");
        });
}

function clearAllCookies(){
    chrome.browsingData.removeCookies({"since": 0},
        function(){
            console.log("Downloads Cleared.");
        });
}

function clearCache(){
    chrome.browsingData.removeCache({"since": 0},
    function(){
        console.log("Cache Cleared.");
    });
}

function clearPasswords(){
    chrome.browsingData.removePasswords({"since": 0},
    function(){
        console.log("Passwords Cleared.");
    });
}

document.getElementById("allHistory").onclick = clearAllHistory;
document.getElementById("selectHist").onclick = clearRangeHistory;

document.getElementById("allDown").onclick = clearAllDownloads;
document.getElementById("selectDown").onclick = clearRangeDownloads;

document.getElementById("allCookies").onclick = clearAllCookies;
document.getElementById("clrCache").onclick = clearCache;
document.getElementById("clrPass").onclick = clearPasswords;