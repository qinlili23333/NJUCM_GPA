//初始化表格
var sheet = document.getElementsByClassName("displayTag")[0].getElementsByTagName("tbody")[0];
//循环处理
for (lesson = 0; sheet.getElementsByTagName("tr")[lesson]; lesson++) {

    sheet.getElementsByTagName("tr")[lesson].getElementsByTagName("td")[6].innerText=(Number(kaochaConvert(sheet.getElementsByTagName("tr")[lesson].getElementsByTagName("td")[6].innerText).trimEnd()) - 50)/10 
}
//考查课成绩转换函数
function kaochaConvert(str) {
    str = str.replace("优秀", "90.0").replace("良好", "80.0").replace("中等", "70.0").replace("及格", "60.0").replace("不及格", "50.0");
    return str
}
