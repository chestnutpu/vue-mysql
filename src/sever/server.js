var fs=require("fs");
var path=require("path");
var http=require("http");
var url=require("url");
var $sql = require('sqlMap');



/********需要安装********/
var express=require("express");//express框架
var mysql=require("mysql");//mysql模块
var moment=require("moment");//修改时间格式模块
var bodyParser=require("body-parser");//post数据通过

var app=express();
app.use(bodyParser());

app.use(express.static(path.join(__dirname)));
http.createServer(app).listen(8083,function(){
console.log("服务已开启")
})

var pool=mysql.createPool({
	host:"localhost",
	port:"3306",
	user:"root",
	password:"/pcj642122341996",
	database:"crud"
});

function mysqlQuery(sql,callback){//sql表示写sql语句;callback表示回调函数
pool.getConnection(function(err,connection){
	// console.log(err,connection);
	if(err){
		console.log("连接失败 ")
	}
	else{
			connection.query(sql,function(err,result){
				connection.release();
				if(err){
					console.log(err)
				}
				else{
					callback(result);
				}
			})
		console.log("成功")
	}

})
};
//sql插入语句 insert into tablename（fieldnam1，fieldnam2） value(val1,val2)
/*app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});*/
//**********验证登陆*********

app.post('/verification', (req,res) => {
    var sql_id = $sql.user.select_id;
    var sql_password = $sql.user.select_password;
    var params = req.body;
    pool.query(sql_id,params.id,function(err, result) {
        if(err) {
            console.log(err)
        }
        if(result[0]===undefined) {
            res.send('-1')    //查询不出id，data返回-1
        }else {
            pool.query(sql_password,params.password, function(err, result) {
                if(err) {
                    console.log(err)
                }
                if(result[0]===undefined) {
                    res.send('0')    //username正确后，password错误，data返回 0
                }else {
                    jsonWrite(res, result);
                }
            })
        }
    })
});
//*********添加*************
//update tableName set 字段1=变量,字段2=变量 where id=id;
