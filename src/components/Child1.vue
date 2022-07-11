<template>
  <div>我是list下的第一个孩子</div>
</template>
<script>
export default {
  mounted() {
    console.log(this.$route.matched);
  },
};
</script>