
function load () {
  //获取小盒子dom节点
  var boxs = document.getElementsByClassName('box');
  var btnStart = document.getElementsByTagName('button')[0];
  var btnStop = document.getElementsByTagName('button')[1];
  var blink;
  var color; //是否已经被覆盖颜色

  function tip () { //一次闪烁过程
    color = true;
    //存储随机数的数组
    var randomList = [];
    while(randomList.length < 3){
      getNumNoRepeat();
    }
    //生成不重复的随机数组函数
    function getNumNoRepeat() {
        var maxTimes = 5;
        do{
            var num = Math.floor(Math.random()*9);
            if(-1 == randomList.indexOf(num)){//数组中不存在
                randomList.push(num);
                return num;
            }
            maxTimes--;
        }while (maxTimes);
    }
    console.log(randomList);

    //随机盒子与随机数匹配
    for (var i = 0; i < 3; i++) {
      boxs[randomList[i]].style.backgroundColor = randomColor()
    }
    //延迟一点执行清除颜色,否则看不出来颜色变化
    window.setTimeout(recolor, 900)

    function randomColor () {
      var r = Math.floor(Math.random() * 256);
      var g = Math.floor(Math.random() * 256);
      var b = Math.floor(Math.random() * 256);
      return "rgb(" + r + ',' + g + ','  + b + ")"
    }

    function recolor () { //把改动过的颜色恢复为默认颜色
      for (var i = 0; i < 3; i++) {
        boxs[randomList[i]].style.backgroundColor = "orange"
      }
    }
  }
  
  btnStart.onclick = function () {
    console.log('blink');
    window.clearInterval(blink)
    blink = window.setInterval(tip, 1000);
  }
  btnStop.onclick = function () {
    window.clearInterval(blink)
  }

}
