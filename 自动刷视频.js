/* 该脚本整合了快手极速版//抖音极速版//火山极速版//刷宝短视频//抖音火山版//彩蛋视频//今日头条极速版...(后续还可能更新其他)刷视频功能
 * 目前加上快手极速版每日任务
 * 
 */
/** * 快手极速版 */
let kuaishou = {//快手极速版
    run: function (runTimes) {
        toast('这是一个快手刷视频脚本,1s之后打开APP');
        //toast:弹窗函数
        sleep(1000);
        //sleep以ms计算
        var launchResult = app.launchApp("快手极速版");
        
        if (!launchResult) {
            toast('你还没有安装快手极速版！');
            sleep(1000)
            return;
        }
        toast('等待软件打开，3s之后进入下个动作！');
        sleep(3000);
        var sleepTime = 10;
        // 统计运行次数
        var flagTime = 0;
        while (true) {
            flagTime++;
            // 超过次数终止程序
            if (flagTime > runTimes) {
                break;
            }
            sleepTime = randNum(5, 15);
            toast(Math.floor(sleepTime).toString() + 's之后跳到下个视频！已经执行' + flagTime.toString() + "次");
            sleep(sleepTime * 1000);
            //先判断有无特殊情况
            if (text("我知道了").exists()) {
                text("我知道了").findOne().click()
            }
            if (className("android.widget.TextView").text("点击打开图集").exists()||
            className("android.widget.TextView").text("点击打开长图").exists()) {
                toast("跳过图集")
                nextVideo()
                continue;
            }
            //再执行滑动视频
            nextVideo();
        }
        home();
        sleep(1000);

        function nextVideo() {/*视频下滑功能*/
            //获得手机分辨率
            var width = device.width;
            var height = device.height;
            swipe(width / 2, height / 2, width / 2, height / 3, 10);
            
            // var j = Math.floor(random(1,5))//随意调参
            // if (j == 2){//随机回看功能

            //     toast("开始往回看一个视频");
            //     sleep(3000);

            //     swipe(device.width/2, device.height*(1/4),device.width/2,device.height*(3/4),500);
                
            //     toast("休息随机时间") ;
            //     sleep(3000);

            //     sleep(random(10000,15000));
                  
            


            //     toast("开始往下看两个视频1");
            //     sleep(3000);

            //     swipe(device.width/2, device.height*(1/2),device.width/2,device.height*(1/4),10);
                
            //     toast("休息随机时间1");
            //     sleep(3000);
                
            //     sleep(random(1000,5001));
                

            //     toast("开始往下看两个视频2");
            //     sleep(3000);

            //     swipe(device.width/2, device.height*(1/2),device.width/2,device.height*(1/4),10);
                
            //     toast("休息随机时间2");
            //     sleep(3000);
                
            //     sleep(random(1000,10001));
                
                
   
            // }
        }

        function randNum(minnum, maxnum) {//获取范围内的随机数
            return minnum + Math.random() * (maxnum - minnum);
        };
        

    
    }
};
/** * 抖音极速版 */
let douyin = {//抖音极速版
    run: function (runTimes) {
        toast('这是一个抖音刷视频脚本,1s之后打开APP');
        //toast:弹窗函数
        sleep(1000);
        //sleep以ms计算
        var launchResult = app.launchApp("抖音极速版");
        
        if (!launchResult) {
            toast('你还没有安装抖音极速版！');
            sleep(1000)
            return;
        }
        toast('等待软件打开，3s之后进入下个动作！');
        sleep(3000);
        var sleepTime = 10;
        // 统计运行次数
        var flagTime = 0;
        while (true) {
            flagTime++;
            // 超过次数终止程序
            if (flagTime > runTimes) {
                break;
            }
            sleepTime = randNum(5, 15);
            toast(Math.floor(sleepTime).toString() + 's之后跳到下个视频！已经执行' + flagTime.toString() + "次");
            sleep(sleepTime * 1000);

            //先判断特殊条件
            if (className("android.widget.TextView").text("检测到更新").exists()||
                className("android.widget.TextView").text("以后再说").exists()) {
                className("android.widget.TextView").text("以后再说").findOne().click()
            }
            if(!className("android.widget.RelativeLayout").depth(5).exists()){
                toast("今天任务完成!")
                continue;
            }
            

            //再执行操作
            nextVideo();
        }
        back();
        back();
        home();
        sleep(1000);

        function nextVideo() {/*视频下滑功能*/
            //获得手机分辨率
            var width = device.width;
            var height = device.height;
            swipe(width / 2, height / 2, width / 2, height / 3, 10);
            
            // var j = Math.floor(random(1,5))//随意调参
            // if (j == 2){//随机回看功能

            //     toast("开始往回看一个视频");
            //     sleep(3000);

            //     swipe(device.width/2, device.height*(1/4),device.width/2,device.height*(3/4),500);
                
            //     toast("休息随机时间") ;
            //     sleep(3000);

            //     sleep(random(10000,15000));
                  
            


            //     toast("开始往下看两个视频1");
            //     sleep(3000);

            //     swipe(device.width/2, device.height*(1/2),device.width/2,device.height*(1/4),10);
                
            //     toast("休息随机时间1");
            //     sleep(3000);
                
            //     sleep(random(1000,5001));
                

            //     toast("开始往下看两个视频2");
            //     sleep(3000);

            //     swipe(device.width/2, device.height*(1/2),device.width/2,device.height*(1/4),10);
                
            //     toast("休息随机时间2");
            //     sleep(3000);
                
            //     sleep(random(1000,10001));
                
                
   
            // }
        }

        function randNum(minnum, maxnum) {//获取范围内的随机数
            return minnum + Math.random() * (maxnum - minnum);
        };
        

    
    }
};
/** * 火山极速版 */
let huoshan = {//火山极速版
    run: function (runTimes) {
        toast('这是一个火山极速版刷视频脚本,1s之后打开APP');
        //toast:弹窗函数
        sleep(1000);
        //sleep以ms计算
        var launchResult = app.launchApp("火山极速版");
        
        if (!launchResult) {
            toast('你还没有安装火山极速版！');
            sleep(1000)
            return;
        }
        toast('等待软件打开，3s之后进入下个动作！');
        sleep(3000);
        var sleepTime = 10;
        // 统计运行次数
        var flagTime = 0;
        while (true) {
            sleep(3*1000)
            flagTime++;
            // 超过次数终止程序
            if (flagTime > runTimes) {
                break;
            }
            sleepTime = randNum(5, 15);
            toast(Math.floor(sleepTime).toString() + 's之后跳到下个视频！已经执行' + flagTime.toString() + "次");
            sleep(sleepTime * 1000);
            
            //先判断特殊情况
            if (className("android.widget.TextView").text("进入儿童/青少年模式").exists()||
                className("android.widget.TextView").text("我知道了").exists()) {
                className("android.widget.TextView").text("我知道了").findOne().click()
            }

            if (!className("android.widget.TextView").text("关注").exists()) {//领取广告红包部分bug
                if (className("android.widget.TextView").text("15S").exists()) {
                    toast("领取广告红包")
                    sleep(16*1000);
                    className("android.widget.TextView").text("领取").findOne().parent().parent().parent().parent().click()
                    nextVideo()
                    continue;
                }
                if (className("android.widget.TextView").text("14S").exists()) {
                    toast("领取广告红包")
                    sleep(15*1000);
                    className("android.widget.TextView").text("领取").findOne().parent().parent().parent().parent().click()
                    nextVideo()
                    continue;
                }
                if (className("android.widget.TextView").text("13S").exists()) {
                    toast("领取广告红包")
                    sleep(14*1000);
                    className("android.widget.TextView").text("领取").findOne().parent().parent().parent().parent().click()
                    nextVideo()
                    continue;
                }
                if (className("android.widget.TextView").text("12S").exists()) {
                    toast("领取广告红包")
                    sleep(13*1000);
                    className("android.widget.TextView").text("领取").findOne().parent().parent().parent().parent().click()
                    nextVideo()
                    continue;
                }
                if (className("android.widget.TextView").text("11S").exists()) {
                    toast("领取广告红包")
                    sleep(12*1000);
                    className("android.widget.TextView").text("领取").findOne().parent().parent().parent().parent().click()
                    nextVideo()
                    continue;
                }
                if (className("android.widget.TextView").text("10S").exists()) {
                    toast("领取广告红包")
                    sleep(11*1000);
                    className("android.widget.TextView").text("领取").findOne().parent().parent().parent().parent().click()
                    nextVideo()
                    continue;
                }
                if (className("android.widget.TextView").text("9S").exists()) {
                    toast("领取广告红包")
                    sleep(10*1000);
                    className("android.widget.TextView").text("领取").findOne().parent().parent().parent().parent().click()
                    nextVideo()
                    continue;
                }
                if (className("android.widget.TextView").text("8S").exists()) {
                    toast("领取广告红包")
                    sleep(9*1000);
                    className("android.widget.TextView").text("领取").findOne().parent().parent().parent().parent().click()
                    nextVideo()
                    continue;
                }
                if (className("android.widget.TextView").text("7S").exists()) {
                    toast("领取广告红包")
                    sleep(8*1000);
                    className("android.widget.TextView").text("领取").findOne().parent().parent().parent().parent().click()
                    nextVideo()
                    continue;
                }
                if (className("android.widget.TextView").text("6S").exists()) {
                    toast("领取广告红包")
                    sleep(7*1000);
                    className("android.widget.TextView").text("领取").findOne().parent().parent().parent().parent().click()
                    nextVideo()
                    continue;
                }
                if (className("android.widget.TextView").text("5S").exists()) {
                    toast("领取广告红包")
                    sleep(6*1000);
                    className("android.widget.TextView").text("领取").findOne().parent().parent().parent().parent().click()
                    nextVideo()
                    continue;
                }
                if (className("android.widget.TextView").text("4S").exists()) {
                    toast("领取广告红包")
                    sleep(5*1000);
                    className("android.widget.TextView").text("领取").findOne().parent().parent().parent().parent().click()
                    nextVideo()
                    continue;
                }
                if (className("android.widget.TextView").text("3S").exists()) {
                    toast("领取广告红包")
                    sleep(4*1000);
                    className("android.widget.TextView").text("领取").findOne().parent().parent().parent().parent().click()
                    nextVideo()
                    continue;
                }
                if (className("android.widget.TextView").text("2S").exists()) {
                    toast("领取广告红包")
                    sleep(3*1000);
                    className("android.widget.TextView").text("领取").findOne().parent().parent().parent().parent().click()
                    nextVideo()
                    continue;
                }
                if (className("android.widget.TextView").text("1S").exists()) {
                    toast("领取广告红包")
                    sleep(1*1000);
                    className("android.widget.TextView").text("领取").findOne().parent().parent().parent().parent().click()
                    nextVideo()
                    continue;
                }

                else{
                    toast("跳过广告红包")
                    nextVideo()
                    continue;
                }
                
            }

            
            nextVideo();
        }
        home();
        sleep(1000);

        function nextVideo() {/*视频下滑功能*/
            //获得手机分辨率
            var width = device.width;
            var height = device.height;
            swipe(width / 2, height / 2, width / 2, height / 3, 10);
            
            // var j = Math.floor(random(1,5))//随意调参
            // if (j == 2){//随机回看功能

            //     toast("开始往回看一个视频");
            //     sleep(3000);

            //     swipe(device.width/2, device.height*(1/4),device.width/2,device.height*(3/4),500);
                
            //     toast("休息随机时间") ;
            //     sleep(3000);

            //     sleep(random(10000,15000));
                  
            


            //     toast("开始往下看两个视频1");
            //     sleep(3000);

            //     swipe(device.width/2, device.height*(1/2),device.width/2,device.height*(1/4),10);
                
            //     toast("休息随机时间1");
            //     sleep(3000);
                
            //     sleep(random(1000,5001));
                

            //     toast("开始往下看两个视频2");
            //     sleep(3000);

            //     swipe(device.width/2, device.height*(1/2),device.width/2,device.height*(1/4),10);
                
            //     toast("休息随机时间2");
            //     sleep(3000);
                
            //     sleep(random(1000,10001));
                
                
   
            // }
        }

        function randNum(minnum, maxnum) {//获取范围内的随机数
            return minnum + Math.random() * (maxnum - minnum);
        };
        

    
    }
};
/** * 刷宝短视频 */
let shuabao = {//刷宝短视频
    run: function (runTimes) {
        toast('这是一个刷宝刷视频脚本,1s之后打开APP');
        //toast:弹窗函数
        sleep(1000);
        //sleep以ms计算
        var launchResult = app.launchApp("刷宝短视频");
        //app.launchApp("com.kuaishou.nebula");
        if (!launchResult) {
            toast('你还没有安装刷宝短视频！');
            sleep(1000)
            return;
        }
        toast('等待软件打开，3s之后进入下个动作！');
        sleep(3000);
        var sleepTime = 10;
        // 统计运行次数
        var flagTime = 0;
        while (true) {
            flagTime++;
            // 超过次数终止程序
            if (flagTime > runTimes) {
                break;
            }
            sleepTime = randNum(5, 15);
            toast(Math.floor(sleepTime).toString() + 's之后跳到下个视频！已经执行' + flagTime.toString() + "次");
            sleep(sleepTime * 1000);
            //先判断特殊情况
            if (className("android.widget.TextView").text("我知道了").exists()) {
                className("android.widget.TextView").text("我知道了").findOne().click()
            }

            //再执行操作
            nextVideo();
        }
        back();
        back();
        home();
        sleep(1000);

        function nextVideo() {/*视频下滑功能*/
            //获得手机分辨率
            var width = device.width;
            var height = device.height;
            swipe(width / 2, height / 2, width / 2, height / 3, 10);
            
            // var j = Math.floor(random(1,5))//随意调参
            // if (j == 2){//随机回看功能

            //     toast("开始往回看一个视频");
            //     sleep(3000);

            //     swipe(device.width/2, device.height*(1/4),device.width/2,device.height*(3/4),500);
                
            //     toast("休息随机时间") ;
            //     sleep(3000);

            //     sleep(random(10000,15000));
                  
            


            //     toast("开始往下看两个视频1");
            //     sleep(3000);

            //     swipe(device.width/2, device.height*(1/2),device.width/2,device.height*(1/4),10);
                
            //     toast("休息随机时间1");
            //     sleep(3000);
                
            //     sleep(random(1000,5001));
                

            //     toast("开始往下看两个视频2");
            //     sleep(3000);

            //     swipe(device.width/2, device.height*(1/2),device.width/2,device.height*(1/4),10);
                
            //     toast("休息随机时间2");
            //     sleep(3000);
                
            //     sleep(random(1000,10001));
                
                
   
            // }
        }

        function randNum(minnum, maxnum) {//获取范围内的随机数
            return minnum + Math.random() * (maxnum - minnum);
        };
        

    
    }
};
/** * 抖音火山版 */
let douyinhuoshan = {//抖音火山版
    run: function (runTimes) {
        toast('这是一个抖音火山刷视频脚本,1s之后打开APP');
        //toast:弹窗函数
        sleep(1000);
        //sleep以ms计算
        var launchResult = app.launchApp("抖音火山版");
        
        if (!launchResult) {
            toast('你还没有安装抖音火山版！');
            sleep(1000)
            return;
        }
        toast('等待软件打开，3s之后进入下个动作！');
        sleep(3000);
        var sleepTime = 10;
        // 统计运行次数
        var flagTime = 0;
        while (true) {
            flagTime++;
            // 超过次数终止程序
            if (flagTime > runTimes) {
                break;
            }
            sleepTime = randNum(5, 15);
            toast(Math.floor(sleepTime).toString() + 's之后跳到下个视频！已经执行' + flagTime.toString() + "次");
            sleep(sleepTime * 1000);
            //先判断特殊情况
            if (className("android.widget.TextView").text("以后再说").exists()) {
                className("android.widget.TextView").text("以后再说").findOne().click()
            }
            if (className("android.widget.TextView").text("我知道了").exists()) {
                className("android.widget.TextView").text("我知道了").findOne().click()
            }

            //再执行操作
            nextVideo();
        }
        back()
        back()
        home();
        sleep(1000);

        function nextVideo() {/*视频下滑功能*/
            //获得手机分辨率
            var width = device.width;
            var height = device.height;
            swipe(width / 2, height / 2, width / 2, height / 3, 10);
            
            // var j = Math.floor(random(1,5))//随意调参
            // if (j == 2){//随机回看功能

            //     toast("开始往回看一个视频");
            //     sleep(3000);

            //     swipe(device.width/2, device.height*(1/4),device.width/2,device.height*(3/4),500);
                
            //     toast("休息随机时间") ;
            //     sleep(3000);

            //     sleep(random(10000,15000));
                  
            


            //     toast("开始往下看两个视频1");
            //     sleep(3000);

            //     swipe(device.width/2, device.height*(1/2),device.width/2,device.height*(1/4),10);
                
            //     toast("休息随机时间1");
            //     sleep(3000);
                
            //     sleep(random(1000,5001));
                

            //     toast("开始往下看两个视频2");
            //     sleep(3000);

            //     swipe(device.width/2, device.height*(1/2),device.width/2,device.height*(1/4),10);
                
            //     toast("休息随机时间2");
            //     sleep(3000);
                
            //     sleep(random(1000,10001));
                
                
   
            // }
        }

        function randNum(minnum, maxnum) {//获取范围内的随机数
            return minnum + Math.random() * (maxnum - minnum);
        };
        

    
    }
};
/** * 彩蛋视频 */
let caidan = {//彩蛋视频
    run: function (runTimes) {
        toast('这是一个彩蛋刷视频脚本,1s之后打开APP');
        //toast:弹窗函数
        sleep(1000);
        //sleep以ms计算
        var launchResult = app.launchApp("彩蛋视频");
        //app.launchApp("com.kuaishou.nebula");
        if (!launchResult) {
            toast('你还没有安装彩蛋视频！');
            sleep(1000)
            return;
        }
        toast('等待软件打开，3s之后进入下个动作！');
        sleep(5000);
        var sleepTime = 10;
        // 统计运行次数
        var flagTime = 0;
        while (true) {
            flagTime++;
            sleep(1000);
            // 超过次数终止程序
            if (flagTime > runTimes) {
                break;
            }
            sleepTime = randNum(5, 15);
            toast(Math.floor(sleepTime).toString() + 's之后跳到下个视频！已经执行' + flagTime.toString() + "次");
            sleep(sleepTime * 1000);
   
            // if (className("android.widget.TextView").text("立即领取").exists()) {
            //     toast("播放广告中");
            //     while (className("android.widget.TextView").text("立即领取").exists()) {
            //         toast("等待中……");
            //         click(1000, 1000);//点击部位?
            //         sleep(1000)
            //     }
            // }
            //先判断特殊情况
            if (className("android.widget.TextView").text("立即下载").exists()||
            className("android.widget.TextView").text("立即安装").exists()||
            className("android.widget.TextView").text("打开应用").exists()) {//进入广告的处理方法
                toast("跳过广告");

                nextVideo();
                continue;
            }

            if (className("android.widget.TextView").text("恭喜您，获得彩蛋奖励! 金币已自动发放至您的钱包").exists()) {//遇到彩蛋的处理方法
                toast("关闭翻倍");
                id("close_bottom_button").findOne().click();
                //longClick(device.width/2 , device.height*0.6);
                //sleep(20*1000);
                // back();
                // back();
                // back();
                nextVideo();
                continue;
            }


            nextVideo();
        }
        home();
        sleep(1000);

        function nextVideo() {/*视频下滑功能*/
            //获得手机分辨率
            var width = device.width;
            var height = device.height;
            swipe(width / 2, height / 2, width / 2, height / 3, 10);
            
            
            // var j = Math.floor(random(1,5))//随意调参
            // if (j == 2){//随机回看功能

            //     toast("开始往回看一个视频");
            //     sleep(3000);

            //     swipe(device.width/2, device.height*(1/4),device.width/2,device.height*(3/4),500);
                
            //     toast("休息随机时间") ;
            //     sleep(3000);

            //     sleep(random(10000,15000));
                  
            


            //     toast("开始往下看两个视频1");
            //     sleep(3000);

            //     swipe(device.width/2, device.height*(1/2),device.width/2,device.height*(1/4),10);
                
            //     toast("休息随机时间1");
            //     sleep(3000);
                
            //     sleep(random(1000,5001));
                

            //     toast("开始往下看两个视频2");
            //     sleep(3000);

            //     swipe(device.width/2, device.height*(1/2),device.width/2,device.height*(1/4),10);
                
            //     toast("休息随机时间2");
            //     sleep(3000);
                
            //     sleep(random(1000,10001));
                
                
   
            // }
        }

        function randNum(minnum, maxnum) {//获取范围内的随机数
            return minnum + Math.random() * (maxnum - minnum);
        };
        

    
    }
};
/** * 今日头条极速版 */
let jinritoutiao = {//今日头条极速版
    run: function (runTimes) {
        toast('这是一个今日头条极速版刷视频脚本,1s之后打开APP');
        sleep(1000);
        var launchResult = app.launchApp("今日头条极速版");
        if (!launchResult) {
            toast('你还没有安装今日头条极速版！');
            sleep(1000)
            return;
        }
        toast('等待软件打开，5s之后进入下个动作！');
        console.show()
        console.log("准备开始!")
        sleep(5000);
        var sleepTime = 10;
        var flagTime = 1; // 统计运行次数
        className("android.widget.FrameLayout").depth(14).drawingOrder(4).findOne().click();
        if (id("lj").exists()) {
            while (true) {
                if (className("android.widget.TextView").text("广告").exists()) {
                    className("android.widget.FrameLayout").depth(14).drawingOrder(4).findOne().click()
                }
                id("lj").findOne().click();
                sleeptime = randNum(1,2) * 60 * 1000;
                console.log("准备观看" + Math.floor(sleeptime*0.001) + "s")
                sleep(sleeptime);

                swipe(device.width / 2, device.height* 2 / 3, device.width / 2, device.height* 1 / 3, 1000);
                console.log("已经执行第" + flagTime + "次")
                flagTime++
                if (flagTime > runTimes) {
                    break    
                }
            }
        }
        console.hide()
        back();
        back();
        home();
        sleep(1000);

        

        function randNum(minnum, maxnum) {//获取范围内的随机数
            return minnum + Math.random() * (maxnum - minnum);
        };
        

    
    }
}

/** * 快手每日任务 */
let kuaishou_perdaytask = {//快手每日任务
    run:function () {
         kuaishou_perday = dialogs.confirm("是否执行快手每日任务部分?");
        if (kuaishou_perday) {/** 快手极速版每日任务程序部分  */
            /**-------------------------打开APP-------------------------------- */
            //let times = rawInput("请输入要自动刷的视频次数：", "500")  //用户设置刷视频的个数，默认100
            launchApp("快手极速版");
            console.show()  //显示悬浮窗（需要先打开悬浮窗权限）
            sleep(5000)    //等待应用打开
            console.log("准备就绪！")

            dytimes(3000, 5000)
            /**-------------------------打开福利页面-------------------------------- */
            id("left_btn").click()//点击菜单
            dytimes(2000, 4000)
            drawingOrder("3").id("container").click()// drawingOrder("2") 点击去赚钱
            dytimes(2000, 4000)
            if (id("close_btn").exists()) {
                id("close_btn").click()
            }
            /**-------------------------调用方法-------------------------------- */
            welfare()
            dytimes(1000, 3000)
            liveds()
            dytimes(1000, 3000)
            
            console.hide()
            home();//回到首页
        }
        /** 快手极速版每日任务程序部分结束 */ 

        //函数部分

        /**-------------------------10次福利金币-------------------------------- */
        function welfare() {
            dytimes(3000, 5000);
            swipe(device.width / 2, device.height * (8 / 9), device.width / 2, device.height * (1 / 2), 150)
            dytimes(3000, 5000);
            var i = 1
            while (true) {
                
                if (text("福利 领金币").findOnce()) {
                    text("福利 领金币").click();
                    console.log("第" + i + "次广告福利")
                    //等待广告关闭按钮点击
                    dytimes(3000, 5000);
                    id("video_close_icon").waitFor()
                    id("video_close_icon").click()
                    dytimes(3000, 5000);
                }

                if (text("福利").findOnce()) {
                    i = i + 1;
                    text("福利").click();
                    console.log("第" + i + "次广告福利")
                    //等待广告关闭按钮点击
                    dytimes(5000, 8000);
                    id("video_close_icon").waitFor()
                    id("video_close_icon").click()
                    dytimes(3000, 5000);
                    }

                if (className("android.view.View").text("明天看视频继续领取1000金币").exists() || i == 20) {
                    console.log("10次广告福利结束啦！");
                    break;
                }
            }
        }
        /**-------------------------10次直播金币-------------------------------- */
        function liveds() {
            swipe(device.width / 2, device.height * (8 / 9), device.width / 2, device.height * (1 / 4), 150)
            dytimes(3000, 5000);
            console.log("开始看直播10次咯！")
            text("看直播").click()
            if (id("award_count_down_text").exists()) {
                for (var i = 1; i <= 10; i++) {
                    console.log("第" + i + "次直播奖励")
                    sleep(40 * 1000)
                    swipe(device.width / 2, device.height * (8 / 9), device.width / 2, device.height * (1 / 4), 150)
                    if (id("close_btn").exists()) {
                        id("close_btn").click()
                        console.log("有关注主播弹出");
                    }                    
                }
                back();
                sleep(1000);
                if (className(android.widget.Button).text("退出").exists()) {
                className(android.widget.Button).text("退出").findOnce().click();    
                }
                sleep(1000);
                back();
                sleep(1000);
                if (className(android.widget.Button).text("退出").exists()) {
                    className(android.widget.Button).text("退出").findOnce().click();    
                }
                home();
            }
            else {
                console.log("10次直播福利结束啦！");
                back();
                sleep(1000);
                if (className(android.widget.Button).text("退出").exists()) {
                    className(android.widget.Button).text("退出").findOnce().click();    
                }
                sleep(1000);
                back();
                sleep(1000);
                if (className(android.widget.Button).text("退出").exists()) {
                    className(android.widget.Button).text("退出").findOnce().click();    
                }
                home();
            }
        }
        
        /**-------------------------随机时间-------------------------------- */
        function dytimes(time1, time2) {
            delayTime = random(time1, time2)
            sleep(delayTime)
        }
    }
}
/** * 刷宝每日任务 */
let shuabao_perdaytask = {//刷宝每日任务
    run:function () {
         shuabao_perday = dialogs.confirm("是否执行刷宝每日任务部分?");
        if (shuabao_perday) {/** 刷宝短视频每日任务程序部分  */
            /**-------------------------打开APP-------------------------------- */
            launchApp("刷宝短视频");
            console.show()  //显示悬浮窗（需要先打开悬浮窗权限）
            sleep(5000)    //等待应用打开
            console.log("准备就绪！")

            dytimes(1000, 3000)
            /**-------------------------打开福利页面-------------------------------- */
            id("left_btn").click()//点击菜单
            dytimes(2000, 4000)
            drawingOrder("3").id("container").click()// drawingOrder("2") 点击去赚钱
            dytimes(2000, 4000)
            /**-------------------------调用方法-------------------------------- */
            welfare()
            dytimes(1000, 3000)
            liveds()
            dytimes(1000, 3000)

            console.hide()
            home();//回到首页
        }
        /** 快手极速版每日任务程序部分结束 */ 

        //函数部分

        /**-------------------------10次福利金币-------------------------------- */
        function welfare() {
            swipe(device.width / 2, device.height * (8 / 9), device.width / 2, device.height * (1 / 2), 150)
            dytimes(3000, 5000);
            var i = 1
            while (true) {
                i = i + 1;
                if (text("福利 领金币").findOnce()) {
                    text("福利 领金币").click();
                    console.log("第" + i + "次广告福利")
                    //等待广告关闭按钮点击
                    dytimes(3000, 5000);
                    id("video_close_icon").waitFor()
                    id("video_close_icon").click()
                    dytimes(3000, 5000);
                }
                if (text("福利").findOnce()) {
                    text("福利").click();
                    console.log("第" + i + "次广告福利")
                    //等待广告关闭按钮点击
                    dytimes(3000, 5000);
                    id("video_close_icon").waitFor()
                    id("video_close_icon").click()
                    dytimes(3000, 5000);
                    }
                if (className("android.view.View").text("明天看视频继续领取1000金币").exists() || i == 20) {
                    console.log("10次广告福利结束啦！");
                    break;
                }
            }
        }
        /**-------------------------10次直播金币-------------------------------- */
        function liveds() {
            swipe(device.width / 2, device.height * (8 / 9), device.width / 2, device.height * (1 / 4), 150)
            dytimes(3000, 5000);
            console.log("开始看直播10次咯！")
            if (className("android.view.View").text("今日已成功领取直播奖励金币").exists()) {
                console.log("10次直播福利结束啦！二次运行");
                back()
            }
            else {
                className("android.view.View").text("直播送礼赚金币").findOne().parent().click()
                text("看直播").click()
                for (let i = 1; i <= 10; i++) {
                    console.log("第" + i + "次直播奖励")
                    sleep(32 * 1000)
                    swipe(device.width / 2, device.height * (8 / 9), device.width / 2, device.height * (1 / 4), 150)
                    if (text("close_btn").exists()) {
                        text("close_btn").click()
                        console.log("有关注主播弹出");
                        // id("close_btn").waitFor()
                    } 
                    else if (i == 10) {
                        console.log("10次直播福利结束啦！");
                        console.hide()
                        back();
                        back();
                        sleep(1000);
                        className(android.widget.Button).text("退出").findOne().click();
                        back();
                        home();//回到首页
                        
                        
                        // if (id("exit_btn").exists()) {
                        //     id("exit_btn").findOne().click()
                        //     back();
                        //     sleep(3000)
                        //     back();
                        // }

                        
                    }
                }
            }
        }
        /**-------------------------随机时间-------------------------------- */
        function dytimes(time1, time2) {
            delayTime = random(time1, time2)
            sleep(delayTime)    //在视频停留8-12秒
        }
    }
}
/** * 火山极速版每日任务 */
let huoshan_perdaytask = {//火山极速版每日任务
    run:function () {
         huoshan_perday = dialogs.confirm("是否执行火山每日任务部分?");
        if (huoshan_perday) {/** 火山极速版每日任务程序部分  */
            /**-------------------------打开APP-------------------------------- */
            //let times = rawInput("请输入要自动刷的视频次数：", "500")  //用户设置刷视频的个数，默认100
            launchApp("火山极速版");
            console.show()  //显示悬浮窗（需要先打开悬浮窗权限）
            sleep(5000)    //等待应用打开
            console.log("准备就绪！")

            dytimes(1000, 3000)
            /**-------------------------打开福利页面-------------------------------- */
            id("left_btn").click()//点击菜单
            dytimes(2000, 4000)
            drawingOrder("3").id("container").click()// drawingOrder("2") 点击去赚钱
            dytimes(2000, 4000)
            /**-------------------------调用方法-------------------------------- */
            welfare()
            dytimes(1000, 3000)
            liveds()
            dytimes(1000, 3000)

            console.hide()
            home();//回到首页
        }
        /** 快手极速版每日任务程序部分结束 */ 

        //函数部分

        /**-------------------------10次福利金币-------------------------------- */
        function welfare() {
            swipe(device.width / 2, device.height * (8 / 9), device.width / 2, device.height * (1 / 2), 150)
            dytimes(3000, 5000);
            var i = 1
            while (true) {
                i = i + 1;
                if (text("福利 领金币").findOnce()) {
                    text("福利 领金币").click();
                    console.log("第" + i + "次广告福利")
                    //等待广告关闭按钮点击
                    dytimes(3000, 5000);
                    id("video_close_icon").waitFor()
                    id("video_close_icon").click()
                    dytimes(3000, 5000);
                }
                if (text("福利").findOnce()) {
                    text("福利").click();
                    console.log("第" + i + "次广告福利")
                    //等待广告关闭按钮点击
                    dytimes(3000, 5000);
                    id("video_close_icon").waitFor()
                    id("video_close_icon").click()
                    dytimes(3000, 5000);
                    }
                if (className("android.view.View").text("明天看视频继续领取1000金币").exists() || i == 20) {
                    console.log("10次广告福利结束啦！");
                    break;
                }
            }
        }
        /**-------------------------10次直播金币-------------------------------- */
        function liveds() {
            swipe(device.width / 2, device.height * (8 / 9), device.width / 2, device.height * (1 / 4), 150)
            dytimes(3000, 5000);
            console.log("开始看直播10次咯！")
            if (className("android.view.View").text("今日已成功领取直播奖励金币").exists()) {
                console.log("10次直播福利结束啦！二次运行");
                back()
            }
            else {
                className("android.view.View").text("直播送礼赚金币").findOne().parent().click()
                text("看直播").click()
                for (let i = 1; i <= 10; i++) {
                    console.log("第" + i + "次直播奖励")
                    sleep(32 * 1000)
                    swipe(device.width / 2, device.height * (8 / 9), device.width / 2, device.height * (1 / 4), 150)
                    if (text("close_btn").exists()) {
                        text("close_btn").click()
                        console.log("有关注主播弹出");
                        // id("close_btn").waitFor()
                    } 
                    else if (i == 10) {
                        console.log("10次直播福利结束啦！");
                        console.hide()
                        back();
                        back();
                        sleep(1000);
                        className(android.widget.Button).text("退出").findOne().click();
                        back();
                        home();//回到首页
                        
                        
                        // if (id("exit_btn").exists()) {
                        //     id("exit_btn").findOne().click()
                        //     back();
                        //     sleep(3000)
                        //     back();
                        // }

                        
                    }
                }
            }
        }
        /**-------------------------随机时间-------------------------------- */
        function dytimes(time1, time2) {
            delayTime = random(time1, time2)
            sleep(delayTime)    //在视频停留8-12秒
        }
    }
}







function main(i) {/**主函数*/
    //每日任务运行部分
    kuaishou_perdaytask.run();

    home();
    sleep(2000);

    while (i > 0) {
        douyin.run(Math.floor(random(20,30)))//参数为每次循环刷动的次数
        douyinhuoshan.run(Math.floor(random(20,30)))//参数为每次循环刷动的次数
        kuaishou.run(Math.floor(random(20,30)))//参数为每次循环刷动的次数
        shuabao.run(Math.floor(random(20,30)))//参数为每次循环刷动的次数
        huoshan.run(Math.floor(random(20,30)))//参数为每次循环刷动的次数
        caidan.run(Math.floor(random(20,30)))//参数为每次循环刷动的次数
        jinritoutiao.run(Math.floor(random(20,30)))//参数为每次循环刷动的次数
        
        i--;
    }
    // qkk.open()//打开趣看看短视频
    // .article(50, 10)//阅读文章数，每篇文章滑动次数
    // .video(1000)//看的短视频数量
}







       
auto.waitFor()
var times = rawInput("请输入要自动刷的视频次数：","50");
dialogs.alert("!!!警告!!!","请先把Adgaurd的DNS过滤切换,系统将会给15s时间检查。");
sleep(10*1000);
dialogs.alert("还有5秒");
sleep(5*1000)


main(times);
