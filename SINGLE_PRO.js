//初始化加载界面
var baiImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKIAAACiCAMAAAD1LOYpAAAHI2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDg4LCAyMDIwLzA3LzEwLTIyOjA2OjUzICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjIuMCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTEyLTA0VDE2OjU3OjM4KzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0xMi0wNFQxNzowMzozMSswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMS0xMi0wNFQxNzowMzozMSswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpkZTRlMWM2My1kYTFiLWQzNDUtYWYyNi05NTMyODAxM2UxMzEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpmNzI4YWVmOC1hMmYyLWYzNDMtOTk4Ni0xNzgzM2RkNDkxMmQiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozMjlmYmQ0Ni0wMmFhLTA2NGUtOGRkZi1jMWQ1ODY0YWI5ZGIiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjMyOWZiZDQ2LTAyYWEtMDY0ZS04ZGRmLWMxZDU4NjRhYjlkYiIgc3RFdnQ6d2hlbj0iMjAyMS0xMi0wNFQxNjo1NzozOCswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjAgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjBhYjY3MWE2LTA3MmItZTQ0Zi1iOGE3LWY0ZDhkZWEzMDAwZSIgc3RFdnQ6d2hlbj0iMjAyMS0xMi0wNFQxNzowMyswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjAgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpkZTRlMWM2My1kYTFiLWQzNDUtYWYyNi05NTMyODAxM2UxMzEiIHN0RXZ0OndoZW49IjIwMjEtMTItMDRUMTc6MDM6MzErMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi4wIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4kuSlqAAAACXBIWXMAAC4jAAAuIwF4pT92AAADAFBMVEVHcExKFQxcGBXFfYViHBlZFhKnPEmyeW/v0bdLFQ3IhHtNFw+rRVKefWm0PlBXGxV1IiChMEBWAwPUo6W/TmHCV2ySSUG0W2FPEw27Z2jJipF6IyLBeG6/bHezRllxSDpOJhpsQDNoERCjYE5qEBGeKTnOlZquU1l6VEm9dn5XMCPQbYGfUkqmh32CNzLdrbXgboVcLiTagJT/mrJQFA1kPC9RAACxdVy9m5XsjKOTdGjXWGzel6pYMCPhur5YBgWTHC33wdRvGhikZWFUAgGQDSCTFieVGSqzhZbny5SFXU9LIRX68eydZn6lPU2STEnPpHtwSDurnru7Ym7asoe5iFzu06DtmK2SFCacg6THjYCYTmfCxdvy2LfYmI3/8eb////13Lv02rn13r324cH34sP47+v/5Nv/x9f/8bj78ufz2bj/4Ojsy6/bm5Du0LL/5Ov93Kn+4dncn5L79fH13ML+3eX/uMv/h6H34Mf/2OT///b/7Mn/58X+7bT/9evmpJn60qT848H/1OH/597ioJX/6+H/0N7y17X+tqv/ytv///z/pLrfpZaAU0bz2L/x1bv/qL7/78/Vkoj/wtPr1Mv/6u7irJv/ssb/vc/y1LX138D5377fqZj/rcKgal/pyKvrrJ+7hHb/+e7jsp7/9bv/7+SEXE3qwqj//fD/kavmtqGXY1j+3tWPbVzco5T+58v67+Kpcmn/8faKZVXm0MTt2tH++fbix77ou6b/n7bvtKV5TUHFpYz35c67m4OPWlDw3df/+PyykHqlhHD//8j//cCZdWGCMC7/89jcwKTOj4KKPjfy5N7//uX36NZAAAD06eXOsJb/5a//wLP5692vlopxSDvXt5z//9P0yrHtssfCkYXTtKztysDCp5vqo7sIAQHYvrb9yr3zwq3+29JhOjD82b3z46kmAwTqxLX91cnGsKf/4f/RnIvQo2nmzdDzydXElWrb/v/hvoex2PnvfpLasHOmdjiUXBxBJyGmweX9pKH/7efO6fr3z+8ztdAIAAAAxHRSTlMAZB37DD/1/v97/o/1/v4t/fD//fz6/vZO+v3s/fzx76X9/vzo+/z48/a/+v786v3+/vv6xtyg/f/9/v795vzV7frb7rNegKv8/u3t8vjj7f7a/e79//7+zPzv9P7////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+dfyRPwAAIABJREFUeNrsmO9LG3kex9XqGtdaT3qH1q3WHGitXJEWhWVRq7enLivrPfDBycHk5kfSA4c4BTceWWdQpojDiUmYsAqTiImWNcWSNbX+YmNsk4AXpQ0VYjyzvZVeaZ+o6F/gfWYmidott2tqu/vAd4wZfCAv3u/v58c3SUmnOtWpTnWqU53qOErNTsvLSwblpaVlp/za4FJT0jLKKqovuQ2GcYPBHVZWV5cVZSan/RpAs/MyisoqKyuVL8PKsOHeTk9vb29Hu8q88uHo/XsGZXVZRl7qL4mXXFQZfjiSPrpiVu3sdHS0r4zuDHR8O3BnwvHixcbGixfzQzujI4bKouRfxsyU5DLlvfSV3h47aGJ+fmhgYKBnaOjOvI0isZisVvbVxrrPUF2U9v4NzKweH+2w23sGhkUohJsYkvEQjMBIEhFFgnDAZGnrst9dlvdeAdOKrj1csdt7O4bmtbJn2glIV3yU6Y6KxBgeWxivSH5/EUuAPe3D81qEIGQorcNB4W/ki8pKswD5nuLOaDJ8aO9VDTsEgsBjBJxA/j9AGZL5OFz0Hso7u+Jlek+PucNBEtjhLPGfAJQgeZ2/+p0fyeSmcZVdpZrgDgw8jpi/PQtnvlvCzGvpPb3mDu0RB48hjnjyyFnxDrtkall4xa4y38EJJEFxHPlN91r1O6ualOrx3h6z2aHGkMQlkIGuH669owOZ3TRi7zWrbGoceRsJeKj/+bUT9DEl9YDwvr3DrNKqkbeUQLj6nzVlnxhiQ2ucMN3efhKEcB71LvSHGyfWIOuLG2Q3wcN28RwmTEbGxXHB6cdrRSfm4vn8vCSgrBixwxI4oSbfCo7EQbBkWKfXvnae1MRunUWb04obMsd7gHD42P36CNuBOP7Z1bmX2UknEXZ9AYqWt175w7++7VWZVRzBHd+4OF18icSAMXB1bauiMaf17btP6wyK3sx9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"
var listDiv = document.createElement("div");
listDiv.style = "z-index:9999;position:fixed;background-color:rgba(255,255,255,0.6);text-align:center;vertical-align:middle;width:auto;height:100%;left:0px;right:0px;top:0px;transition:opacity 0.5s;display:none;";
listDiv.style.opacity = 0;
document.body.appendChild(listDiv);
var img = document.createElement("img");
img.src = baiImage;
img.style = "width:256px;";
listDiv.appendChild(img);
var text = document.createElement("H1");
text.style = "font-size: 3em;"
text.innerText = "开摆！";
listDiv.appendChild(text);
var text2 = document.createElement("H2");
text2.innerText = "正在加载绩点工具箱...";
listDiv.appendChild(text2);

//准备工具栏
var pgDiv = document.createElement("div");
pgDiv.id = "pgdiv";
pgDiv.style = "z-index:9990;position:fixed;background-color:white;min-height:28px;width:auto;height:28px;left:0px;right:0px;top:0px;box-shadow:0px 2px 2px 1px rgba(0, 0, 0, 0.5);transition:opacity 0.5s;display:none;";
pgDiv.style.opacity = 0;
document.body.appendChild(pgDiv);
var css = ".barBtn:hover{ background-color: #cccccc }.barBtn:active{ background-color: #999999 }";
var style = document.createElement('style');
if (style.styleSheet) {
    style.styleSheet.cssText = css;
} else {
    style.appendChild(document.createTextNode(css));
}
//计算绩点按钮
var btn1 = document.createElement("H2");
btn1.style = "display: inline-block;height:24px;margin:2px;transition:background-color 0.2s;"
btn1.className = "barBtn"
btn1.innerText = "计算绩点";
btn1.onclick = calculate;
pgDiv.appendChild(btn1);
//模拟修改按钮
var btn2 = document.createElement("H2");
btn2.style = "display: inline-block;height:24px;margin:2px;transition:background-color 0.2s;"
btn2.className = "barBtn"
btn2.innerText = "模拟修改-关";
var enableEdit = false;
btn2.onclick = function () {
    if (!enableEdit) {
        document.body.contentEditable = true;
        enableEdit = true;
        btn2.innerText = "模拟修改-开";
    } else {
        document.body.contentEditable = "inherit";
        enableEdit = false;
        btn2.innerText = "模拟修改-关";
    }
}
pgDiv.appendChild(btn2);
//计算绩点
function calculate() {
    //初始化表格
    var sheet = document.getElementsByClassName("displayTag")[0];
    //初始化累加值
    var plusValue = 0;
    var plusXuefen = 0;
    var jidian = 0;
    //循环计算
    for (var lesson = 1; sheet.getElementsByTagName("tr")[lesson]; lesson++) {
        //过滤体育
        if (!sheet.getElementsByTagName("tr")[lesson].getElementsByTagName("td")[2].innerText.includes("体育")) {
            //过滤选修
            if (!sheet.getElementsByTagName("tr")[lesson].getElementsByTagName("td")[5].innerText.includes("选")) {
                //过滤傻逼不给分的形势与政策
                if (Number(kaochaConvert(sheet.getElementsByTagName("tr")[lesson].getElementsByTagName("td")[9].innerText).trimStart().trimEnd())) {
                    //不先做除法避免浮点笑话
                    plusValue = Number(plusValue) + (Number(kaochaConvert(sheet.getElementsByTagName("tr")[lesson].getElementsByTagName("td")[9].innerText).trimEnd()) - 50) * Number(sheet.getElementsByTagName("tr")[lesson].getElementsByTagName("td")[4].innerText.trimStart().trimEnd());
                    plusXuefen = Number(plusXuefen) + Number(sheet.getElementsByTagName("tr")[lesson].getElementsByTagName("td")[4].innerText.trimStart().trimEnd());
                    console.log("累加值" + plusValue);
                    console.log("累加学分" + plusXuefen);
                }
            }
        }
    }
    //计算绩点
    jidian = Number(plusValue) / Number(plusXuefen) / 10;
    console.log("绩点：" + jidian);
    window.alert("绩点：" + jidian);
    //考查课成绩转换函数
    function kaochaConvert(str) {
        str = str.replace("优秀", "90.0").replace("良好", "80.0").replace("中等", "70.0").replace("及格", "60.0").replace("不及格", "50.0");
        return str
    }
}

listDiv.style.display = "";
setTimeout(function () { listDiv.style.opacity = 1; }, 10);
pgDiv.style.display = "";
setTimeout(function () { pgDiv.style.opacity = 1; }, 1000);
setTimeout(function () { listDiv.style.opacity = 0; }, 2000);
setTimeout(function () { listDiv.style.display = "none"; }, 3000);