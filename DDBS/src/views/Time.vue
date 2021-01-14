<template>
  <div>
    <nut-calendar
      :is-visible.sync="isVisible3"
      :default-value="date3"
      type="range"
      :start-date="null"
      :end-date="null"
      :animation="`nutSlideRight`"
      @close="switchPickerClose('isVisible3')"
      @choose="setChooseValue3"
    >
    </nut-calendar>
    <nut-cell
      :showIcon="true"
      :isLink="true"
      @click.native="switchPicker('isVisible3')"
    >
    <!-- <span slot="title"><label>日期选择</label></span>
     <span slot="sub-title">不限制开始结束时间~~~</span> -->
     <div slot="desc" class="selected-option" >
       <span class="show-value">{{date3 ? date3 : '请选择日期'}}</span>
     </div>
    </nut-cell>
  </div>
</template>

<style scoped>
/* .nut-cell {
  width: 100px;
} */
/* .nut-cell span {
  color: black;
  font-size: 17px;
  font-weight: bold;
} */
</style>

<script>
export default {
  data() {
    return {
      isVisible3: false,
      date: null,
      dateWeek: null,
      date3: null,
    };
  },
  methods: {
    switchPickerClose(param) {
      console.log("close:" + param);
    },
    switchPicker(param) {
      this[`${param}`] = true;
    },
    setChooseValue3(param) {
      this.date3 = [...[param[0][3], param[1][3]]];
    },
  },
};
</script>