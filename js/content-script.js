var a=0;			
   var str = document.getElementsByTagName('html')[0].outerHTML; //去掉空格
   var net1 = str.replace(/\/172./g, " <title>内网地址:172.</title>");
   var net2 = net1.replace(/\/127./g, " <title>内网地址:127.</title>");
   var net3 = net2.replace(/\/10./g, " <title>内网地址:10.</title>");
    var login = net3.replace(/\/login/g, " <a>登录地址:login</a>");
     var login1 = login.replace(/\/admin/g, " <a>登录地址:admin</a>");
    var res =login1.replace(/<[^>]+>/g, ""); //去掉所有的html标记
    var res1 = res.replace(/↵/g, "");     //去掉所有的↵符号
    var res2 = res1.replace(/[\r\n]/g, "");
    var res3 = res2.replace(/-/g, "");
  
    var lstr = res3.split(" ");
 //检索的页面关键字的关键字
 var sw = ['科技','系统','登录','PK','赛车','开奖','走势','澳门','金沙','平台','在线','投注','国际','login','admin','内网','CMS'];
 for (i=0;i<lstr.length;i++)
 {
 	for (j=0;j<sw.length;j++)
 	{
 		var r = lstr[i].indexOf(sw[j]) != -1;
 		if(r==true)
 		{
 			a=a+1;
 		
 			console.log(lstr[i]);

 		}
 	}

 }
 

 	chrome.runtime.sendMessage({cmd: a.toString()}, function(response) 
	{  
		console.log(response); 

 		console.log("敏感词共计："+a+"个");

	});

	
	

