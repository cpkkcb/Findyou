var a=0;
   var str = document.getElementsByTagName('html')[0].outerHTML; //去掉空格
    var res =str.replace(/<[^>]+>/g, ""); //去掉所有的html标记
    var res1 = res.replace(/↵/g, "");     //去掉所有的↵符号
    var res2 = res1.replace(/[\r\n]/g, "")
    var lstr = res2.split(" ");
 //检索的页面关键字的关键字
 var sw = ['科技','系统','登录','PK','赛车','注册网址','开奖','走势'];
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


	

