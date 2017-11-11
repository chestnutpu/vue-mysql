module.exports=function(server){
	let socket=require("socket.io");
	let io=socket(server);

	io.on('connection',function(ws){
		ws.on("chat",function(data){//chat事件自定义；on监听事件
			io.emit("allChat",data);//allChat事件自定义;emit发送
			//io.emit对所有客户端发送数据；(广播)
			//ws.emit点对点（服务端发回响应给请求的客户端）发送数据；(打电话)
		});

	});
};

