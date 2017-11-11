<template>
<div class="dialog">
	<section class="logo"></section>
    <form class="login-form" id="login-form">
    <section class="login-input" id="login-input">
    <label ><i class="fa fa-user-circle-o"></i>帐号<input type="text" class="userid" v-model="formName.user" @input="inputBlur('user',formName.user)" ></label>
    
    
    <span class="diveline"></span>
    <label ><i class="fa fa-lock"></i>密码<input type="password" class="userpassword" v-model="formName.password" @input="inputBlur('password',formName.password)"></label>
     <p class="notnull">{{formName.userError}}</p>
     <p class="notnull">{{formName.passwordError}}</p>
    </section>
    <label class="loginbtn"><input type="submit" value="登录" @touchstart="submitForm('formName')" v-bind:disabled="formName.beDisabled"></label>
    

    </form> 	
   <router-link to="/reg.vue" class="registerbtn">新用户注册</router-link>
</div>
</template>


<script>
import Axios from 'axios'
    export default {
        name: '',
        data () {
            return {
                formName: {//表单中的参数
                    user: '',
                    userError: '',
                    password: '',
                    passwordError: '',
                    beDisabled: true
                },
                beShow: false//传值给父组件
            }           
        },
        /*props:[
                'fromParent'
        ],*/
        methods: {
           
            submitForm:function(formName){
                //与父组件通信传值
                //this.$emit('showState', [this.beShow,this.formName.user])
                //提交user password
                console.log(this.formName.beDisabled)
                var user = this.formName.user,
                 password = this.formName.password,
                 userError = this.formName.userError,
                 passwordError = this.formName.passwordError;

                    if(user=== ''){
                      this.formName.userError = '用户名不能为空'
                    }
                    else if(password===''){
                      this.formName.passwordError = '密码不能为空'
                    }
                    else{
                    let data = {'username':user,'password':password}
                    Axios.post('/verification',data).then((res)=>{
                    console.log(res)
                    /*接口的传值是(-1,该用户已存在)*/
                    if(res.data == -1 || res.data == 0) {
                        userError = "用户名或密码错误"
                        user = ''
                        password = ''
                    }
                    
                })
                    .catch(function(){

                     })
            }
                console.log(user,password);
                
            },
            inputBlur:function(errorItem,inputContent){
                if (errorItem === 'user') {
                    if (inputContent === '') {
                        this.formName.userError = '用户名不能为空'
                    }else{
                        this.formName.userError = '';
                    }
                }else if(errorItem === 'password') {
                    if (inputContent === '') {
                        this.formName.passwordError = '密码不能为空'
                    }else{
                        this.formName.passwordError = '';
                    }
                }
                //对于按钮的状态进行修改
                if (this.formName.user != '' && this.formName.password != '') {
                    this.formName.beDisabled = false;
                }else{
                    this.formName.beDisabled = true;

                }
            }
        }
    }
</script>



<style lang="scss" scoped>
@import "../assets/css/px2rem.scss";
@import "../assets/css/animate.css";
@import "../assets/css/font-awesome.min.css";

    html,body{
        margin: 0;
        padding: 0;
        position: relative;
        font-family:"微软雅黑"

    }
    .dialog{
        width: 100%;
        height:100%;
        background:url(../assets/img/login/loginbg.jpg) no-repeat 0 0;
        background-size:rem(750px) auto;
        padding-top:rem(140px);



    }
    .logo{width:rem(226px);height:rem(163px);background:url(../assets/img/login/loginspirt.png) no-repeat 0 0;background-size:rem(530px) auto;margin:0 auto;margin-bottom:rem(84px);}
    .login-input{box-sizing:border-box;width:rem(546px);height:rem(254px);background:rgba(255,255,255,0.18);margin:0 auto;padding:0 rem(26px);border-radius:rem(8px);margin-bottom:rem(80px);}
    label{display: flex;margin:rem(4px) auto;height:rem(40px);@include font-dpr(28px);color:#fff;text-align:left;height:rem(127px);align-items:center;flex-wrap:wrap;
    	i{@include font-dpr(30px);margin-right:rem(18px);}
    	input{background:none;margin-left:rem(16px);border:0px;color:#fff;}
    }
    .diveline{display:block;width:rem(494px);height:rem(2px);background:#fff;}
    .userid,.userpassword{width:rem(300px);

    }
    .login-form{margin-bottom:rem(62px);}
    .loginbtn{width:rem(546px);height:rem(76px);border:1px #fff solid;border-radius:rem(8px);text-align:center;
    	input{@include font-dpr(36px);margin:0 auto;cursor:pointer;width:100%;}
    }
    .registerbtn{display:block;color:#fff;@include font-dpr(28px);margin-left:rem(-400px);margin-bottom:rem(460px);}
    .notnull{color:#fff;}
</style>

