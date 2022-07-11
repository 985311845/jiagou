<template>
  <div>
    <Descriptions :column="5 " :dataList="dataList" />
  </div>
</template>
<script>
import Descriptions from "../components/Descriptions";
export default {
  components: {
    Descriptions,
  },
  data() {
    return {
      dataList: [
        {
          label: "用户名",
          value: "kooriookami",
        },
        {
          label: "手机号",
          value: "18100000000",
        },
        {
          label: "居住地",
          value: "苏州市",
        },
        {
          label: "备注",
          value: "学校",
        },
        {
          label: "联系地址",
          value: "江苏省苏州市吴中区吴中大道 1188 号",
        },
      ],
    };
  },
};
</script>