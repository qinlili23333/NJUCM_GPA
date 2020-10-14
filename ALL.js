//初始化表格
var sheet = document.getElementsByClassName("displayTag")[0].getElementsByTagName("tbody")[0];
//初始化累加值
var plusValue = 0;
var plusXuefen = 0;
var jidian = 0;
//循环计算
for (lesson = 0; sheet.getElementsByTagName("tr")[lesson]; lesson++) {
    //过滤体育
    if(!sheet.getElementsByTagName("tr")[lesson].getElementsByTagName("td")[2].innerText.includes("体育")){
    //不先做除法避免浮点笑话
    plusValue = Number(plusValue) + (Number(kaochaConvert(sheet.getElementsByTagName("tr")[lesson].getElementsByTagName("td")[6].innerText).trimEnd()) - 50) * Number(sheet.getElementsByTagName("tr")[lesson].getElementsByTagName("td")[4].innerText.trimStart().trimEnd());
    plusXuefen = Number(plusXuefen) + Number(sheet.getElementsByTagName("tr")[lesson].getElementsByTagName("td")[4].innerText.trimStart().trimEnd());
    console.log("累加值" + plusValue);
    console.log("累加学分" + plusXuefen);
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