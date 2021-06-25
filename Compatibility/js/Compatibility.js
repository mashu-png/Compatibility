function ManInt(max) {
    return Math.floor(Math.random() * max);
  }
function WomanInt(max) {
    return Math.floor(Math.random() * max);
  }
function Res(){
    var Man = document.getElementById("Man").value;
    var Woman = document.getElementById("Woman").value;
    var Manl = Man.length
    var wmanl = Woman.length
    //alert(Manl);
    //alert(wmanl);
    if(Manl === wmanl || ManInt(2) === WomanInt(2)){
        alert("相性最高です");
    }else if(Manl === wmanl || Man.substr(0,ManInt(6)) === Woman.substr(0,WomanInt(6))){
        alert("相性は普通です");
    }else{
        alert("相性最悪です")
    }
}