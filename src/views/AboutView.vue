<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>{{ msg }}</h1>
    <router-link to="/about/list">列表</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "About",
  // created() {
  //   this.$watch(
  //     () => this.$route.params,
  //     () => console.log("路由参数发生变化",this.$route.params),
  //     // { deep: true }
  //   );
  // },
  data() {
    return {
      msg: "消息1",
    };
  },
  mounted() {
    this.getParams();
    setTimeout(() => {
      this.msg = "消息2";
    }, 5000);
  },
  methods: {
    getParams() {
      console.log(this.$route.params);
      console.log(this.$route.query);
    },
  },
  // beforeRouteUpdate(to, form, next) {
  //   next("/");
  // },
};
</script>
