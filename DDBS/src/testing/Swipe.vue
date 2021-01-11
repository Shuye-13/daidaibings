<template>
  <div>
    <mt-swipe class="swipe" 
      :style="{height:swipeHeight}"
      :auto="3000"
      :speed="200"
      :show-indicators="true"
      :continuous="true">
      <mt-swipe-item>
        <img src="../assets/img/swipe1.jpg">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/img/swipe2.jpg">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<style scoped>
.swipe img {width:100%;}
</style>

<script>
export default {
  data() {
    return {
      swipeHeight : '164px'
    }
  },
  mounted(){
    //屏幕的宽
    let screenWidth = window.screen.width
    //图片宽高
    let picwidth = 750;
    let picheight = 300;
    //轮播图的高度=图片高*屏幕宽/图片宽
    this.swipeHeight = (picheight * screenWidth / picwidth) + 'px'
    // console.log(picheight * screenWidth / picwidth)
  }
}
</script>