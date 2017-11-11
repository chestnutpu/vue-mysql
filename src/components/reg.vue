<template>
  <div class="container">
    <div class="col-md-12">
      <h1 class="margin-bottom-15">注册</h1>
      <form class="form-horizontal templatemo-container templatemo-login-form-1 margin-bottom-30" role="form" method="post" @submit.prevent="reg()">
        <div class="form-group">
          <div class="col-xs-12">
            <div class="control-wrapper">
              <label for="username" class="control-label fa-label"><i class="fa fa-user fa-medium"></i></label>
              <input type="text" class="form-control" id="username" placeholder="用户名" v-model="user.name">
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="col-md-12">
            <div class="control-wrapper">
              <label for="password" class="control-label fa-label"><i class="fa fa-lock fa-medium"></i></label>
              <input type="password" class="form-control" id="password" placeholder="密码" v-model="user.password">
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="col-md-12">
            <div class="control-wrapper">
              <label for="password" class="control-label fa-label"><i class="fa fa-lock fa-medium"></i></label>
              <input type="password" class="form-control" id="password_r" placeholder="再次输入密码" v-model="user.password_r">
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="col-md-12 text-center">
            <input type="submit" value="提交" class="btn btn-info">
            <router-link to="/" class="btn btn-default">返回</router-link>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    data (){
      return {
        user: {
          name: '',
          password: '',
          password_r: ''
        }
      }
    },
    computed: {
      ...mapActions({
        UserReg: 'UserReg',
      })
    },
    methods:{
      reg(){
        this.$store.dispatch('UserReg', this.user);
      }
    }
  }
</script>