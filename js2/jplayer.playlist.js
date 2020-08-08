$(document).ready(function(){

	new jPlayerPlaylist({
		jPlayer: "#jquery_jplayer_1",
		cssSelectorAncestor: "#jp_container_1"
	}, [
		
		{
			title:"Memory of Zhengzhou",
			mp3:"http://blog.wang19.cn/music/李志-关于郑州的记忆.mp3",
		
		},
		{
			title:"Together with you",
			mp3:"http://blog.wang19.cn/music/李志-和你在一起.mp3",
		
		}
		,
		{
			title:"Is the world going to be fine?",
			mp3:"http://blog.wang19.cn/music/李志-这个世界会好吗.mp3",
		
		},

		{
			title:"Mr van Gogh",
			mp3:"http://blog.wang19.cn/music/李志-梵高先生.mp3",
		
		},
		
		{
			title:"Hot River",
			mp3:"http://blog.wang19.cn/music/李志-热河.mp3",
	
		},
		{
			title:"Tian kong zhi cheng",
			mp3:"http://blog.wang19.cn/music/李志-天空之城.mp3",
	
		},
		{
			title:"Ding xi",
			mp3:"http://blog.wang19.cn/music/李志-定西.mp3",
			
		}
		,{
			title:"Ma Ma",
			mp3:"http://blog.wang19.cn/music/李志-妈妈.mp3",
		
		},{
			title:"inverted image",
			mp3:"http://blog.wang19.cn/music/李志-倒影.mp3",
		
		},
		{
			title:"raining",
			mp3:"http://blog.wang19.cn/music/李志 - 下雨.mp3",
		
		}
		,
		
		{
			title:"Cang Jingkong",
			mp3:"http://blog.wang19.cn/music/李志 - 苍井空 2015现场版.mp3",
		
		},
		{
			title:"Kan jian",
			mp3:"http://blog.wang19.cn/music/李志 - 看见 2015现场版.mp3",
		
		},
		{
			title:"Dong Zhuoyao",
			mp3:"http://blog.wang19.cn/music/李志 - 董卓瑶 2015现场版.mp3",
		
		}
		,{
			title:"Hei se xin feng",
			mp3:"http://blog.wang19.cn/music/李志-黑色信封.mp3",
		
		},{
			title:"Jiejie",
			mp3:"http://blog.wang19.cn/music/李志-姐姐.mp3",
		
		},{
			title:"Huran",
			mp3:"http://blog.wang19.cn/music/李志-忽然.mp3",
		
		},
		{
			title:"A lan",
			mp3:"http://blog.wang19.cn/music/李志-阿兰.mp3",
		
		},
		{
			title:"Guangchang",
			mp3:"http://blog.wang19.cn/music/李志-广场.mp3",
		
		},
        {
			title:"Shanyin lu de xiatian",
			mp3:"http://blog.wang19.cn/music/李志-山阴路的夏天.mp3",
		
		}

		,{
			title:"Qiangshan de xiangrikui",
			mp3:"http://blog.wang19.cn/music/李志-墙上的向日葵.mp3",
		
		},
		
		{
			title:"You left Nanjing, and no one ever spoke to me",
			mp3:"http://blog.wang19.cn/music/李志 - 你离开了南京，从此没有人和我说话 2015现场版.mp3",
		
		},
		{
			title:"Re he (2016 unplugged) ",
			mp3:"http://blog.wang19.cn/music/李志-热河 (2016 unplugged) .mp3",
	
		},
		{
			title:"Tian kong zhi cheng（2016Unplugged）",
			mp3:"http://blog.wang19.cn/music/天空之城（2016Unplugged）.mp3",
	
		},
		{
			title:"Is the world going to be fine? (2016 unplugged)",
			mp3:"http://blog.wang19.cn/music/这个世界会好吗 (2016 unplugged).mp3",
	
		},
		{
			title:"Hang zhou(2016 unplugged)",
			mp3:"http://blog.wang19.cn/music/杭州 (2016 unplugged).mp3",
	
		},
		
		{
			title:"Memeroy of Zhengzhou (2016 unplugged)",
			mp3:"http://blog.wang19.cn/music/李志-关于郑州的记忆 (2016 unplugged).mp3",
		
		},{ 
			title:"Summer in Shanyin road(2016 unplugged) ",
			mp3:"http://blog.wang19.cn/music/李志-山阴路的夏天(2016 unplugged) .mp3",
		
		},
		{
			title:"Together with you(2016 Unplugged)",
			mp3:"http://blog.wang19.cn/music/李志-和你在一起(2016 Unplugged).mp3",
		
		
		}
	], {
		swfPath: "../../dist/jplayer",
		supplied: "oga, mp3",
		wmode: "window",
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true
	});
});