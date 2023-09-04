Date.prototype.format = function(fmt) {
 var date = {
         "M+": this.getMonth() + 1,
         "d+": this.getDate(),
         "h+": this.getHours(),
         "m+": this.getMinutes(),
         "s+": this.getSeconds(),
         "q+": Math.floor((this.getMonth() + 3) / 3),
         "a": this.getHours() <12 ? "上午" :"下午",
         "S": this.getMilliseconds(),
        
     };
    if (/(y+)/i.test(fmt)) {
     fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (var k in date) {
        if (new RegExp("(" + k + ")").test(fmt)) {
         fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
        }
    }
    return fmt;
};

const areas = [
               
           ]
var d = new Date();
    var month=new Array(12);
    month[0]="January";
    month[1]="February";
    month[2]="March";
    month[3]="April";
    month[4]="May";
    month[5]="June";
    month[6]="July";
    month[7]="August";
    month[8]="September";
    month[9]="October";
    month[10]="November";
    month[11]="December";

var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var d = new Date();
var dt = new Array(31);
dt[1]="1st";
dt[2]="2nd";
dt[3]="3rd";
dt[4]="4th";
dt[5]="5th";
dt[6]="6th";
dt[7]="7th";
dt[8]="8th";
dt[9]="9th";
dt[10]="10th";
dt[11]="11th";
dt[12]="12th";
dt[13]="13th";
dt[14]="14th";
dt[15]="15th";
dt[16]="16th";
dt[17]="17th";
dt[18]="18th";
dt[19]="19th";
dt[20]="20th";
dt[21]="21st";
dt[22]="22nd";
dt[23]="23rd";
dt[24]="24th";
dt[25]="25th";
dt[26]="26th";
dt[27]="27th";
dt[28]="28th";
dt[29]="29th";
dt[30]="30th";
dt[31]="31st";
 
time();

async function time() {
 var now = new Date(); 
 var content = "";
 var week = "    "+calcTime(+8)+" 星期" + "一二三四五六天".charAt(now.getDay());
 content += week;
 for (var i in areas) {
  var u = valPlus(areas[i][1]);
        content += "\n"+areas[i][0]+" "+calcTime(u)+" UTC" + u + g;
    }
 
    $notify('今日时间',  dt[d.getDate()] + month[d.getUTCMonth()] +  weekday[d.getDay()], content);
    $done();
}


function calcTime(offset) { 
    
                                     
   var utc = d.getTime() + (d.getTimezoneOffset() * 60000); 
    var nd = new Date(utc + (3600000 * offset)); 
    return nd.format("yyyy年MM月dd日 a hh:mm:ss"); 
   
}

function valPlus(offset) { 
    if(offset == 0)
     return "";
    else if (offset > 0)
     return "+" + offset;
    else return offset;
}
