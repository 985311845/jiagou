<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link :to="`/about/${id}/${userName}`">About</router-link> |
      <router-link :to="`/about/${userName}`">去关于页面</router-link> |

      <router-link to="/funComponent">函数式组件</router-link> |
      <!-- url前面有问号 -->
      <router-link
        :to="{
          path: `/about/${id}`,
          query: {
            id: id,
          },
        }"
        >query传参</router-link
      >
      |
      <router-link
        :to="{
          name: 'about',
          params: {
            name: userName,
          },
        }"
        >params传参</router-link
      >
    </nav>

    <button @click="goAbout">编程式导航</button>
    <button @click="goUser">用户页面</button>

    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: "12",
      userName: "张三",
    };
  },
  methods: {
    goAbout() {
      this.$router.push("/about/list");
    },
    goUser() {
      this.$router.push("/user");
    },
  },
};
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
