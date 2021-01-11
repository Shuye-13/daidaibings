<template>
  <div>
    <mt-header class="header" title="忘记密码">
      <router-link class="left" to="/login" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <mt-radio
      title="复选框列表"
      v-model="value"
      align="left"
      :options="options">
    </mt-radio>
  </div>
</template>
<style scoped>
  .header{
    background-color: #c0191f !important;
    height: 45px !important;
    font-size: 18px !important;
  }

</style>
<script>
export default {
  name : 'app',
  data() {
    return {
      value : [],

      options : [{
        label: '被禁用',
        value: '1',
      },
      {
        label: '被禁用',
        value: '2',
      }]
    }
  },
}
</script>