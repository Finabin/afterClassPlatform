<template>
  <div class="home">2</div>
  <el-button @click="toLogin">登录</el-button>
</template>

<script>
export default {
  name: 'Login',
  components: {

  },
  methods: {
    toLogin() {
      this.$router.push('/home')
    }
  },
}
</script>