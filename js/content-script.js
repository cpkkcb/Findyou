// alert(1);
 // var str = document.getElementsByTagName('body')[0].innerText;
 // var str = str.split(/[(\r\n)\r\n]+/);

 // var sw = ['赌博','娱乐','金融','系统','公司'];
 // 	for(i=0;i<str.length;i++){
 // 		for(j=0;j<sw.length;j++)
 // 		{

 // 		}
 // 	}
 // console.log(str);
 // // for (var i = 0;i<str.length;i++) {
 // // 	 for (var j = 0;j<sw.length;i++) {
 // // 	 	if(str[i]==sw[j]){
 // // 	 		alert(1);
 // // 	 	}
 // // }


 // // // }
 // chrome.runtime.sendMessage({cmd: "no"}, function(response) 
	// {  
	// 	//console.log(response); 

	// });


var a=0;
 //  var str = document.getElementsByTagName('html')[0].outerHTML;
 //  var str=str.replace(/<\/?.+?>/g,"");
 // var lstr=str.replace(/ /g,"");
 // var lstr = lstr.split(" ");
 // console.log(lstr);
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

 		
 		// 	chrome.browserAction.setBadgeText({text: "1"});
			// chrome.browserAction.setBadgeBackgroundColor({color: [190, 190, 190, 230]});
 			// document.getElementById=('p1').innerHTML='yyyy';
 		}
 		// else
 		// {
 		// 	console.log(1111);
 		// 	break;
 		// }
 		
 	}

 }
 	

 	chrome.runtime.sendMessage({cmd: a.toString()}, function(response) 
	{  
		console.log(response); 

 		console.log("敏感词共计："+a+"个");

	});


	

