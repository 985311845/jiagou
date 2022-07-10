<template>
  <div>
    我是用户组件
    <router-link to="/user/child1">显示child1</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "User",
  data() {
    return {
      name: "张三",
      age: 22,
    };
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      console.log(vm);
    });
  },
};
</script>