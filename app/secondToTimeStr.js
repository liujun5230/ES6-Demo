//传入秒数递归获取时间单位，例如：toTimeStr(867700) 可以获得 "10天1小时2分钟40秒"
function secondtoTimeStr(seconds){

    var timeStr = "";
    var md = 0;

    if(seconds > 86400){
        timeStr = (seconds/86400).toFixed(0) + "天";
        md = seconds%86400;
    }

    if(seconds >= 3600 && seconds <= 86400){
        timeStr = (seconds/3600).toFixed(0) + "小时";
        md = seconds%3600;
    }
    else if(seconds >= 60 && seconds < 3600){
        timeStr = (seconds/60).toFixed(0) + "分钟";
        md = seconds%60;
    }
    else if(seconds > 0 && seconds <= 60){
        timeStr = seconds + "秒";
    }else if(seconds == 0){
        return "";
    }
    return timeStr + toTimeStr(md);
}

module.exports = secondtoTimeStr;