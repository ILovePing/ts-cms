<template>
  <div class="slider-container">
    <button @click.prevent="prev" class="btn btn-prev"><</button>
    <button @click.prevent="next" class="btn btn-next">></button>
    <template v-if="!sliderinit.loop">
    <div class="slider-wrapper" :style="styleobj" >
      <template v-for="(page,index) in pages">
      <div class="slider-item" :style="page.style">{{page.title}}</div>
      </template>
    </div>
    </template>
    <template v-if="sliderinit.loop">
    <div class="slider-wrapper" :style="styleobj" >

      <template v-for="(page,index) in pages">
      <div v-if="index+sliderinit.infinite-pages.length>=0" class="slider-item" :style="page.style">{{page.title}}</div>
      </template>
        <!-- 无缝滚动最后一项TODO -->
      <template v-for="(page,index) in pages">
      <div class="slider-item" :style="page.style">{{page.title}}</div>
      </template>
      <!-- 无缝滚动第一项TODO -->
      <template v-for="(page,index) in pages">
      <div v-if="index-sliderinit.infinite<0" class="slider-item" :style="page.style">{{page.title}}</div>
      </template>
    </div>
    </template>
  </div>
</template>
<script>
export default{
  name:'Myslider',
  mounted(){
    let that = this;
    if(that.sliderinit.autoplay){
      that.autoplayStart();
    }

  },
  watch: {

  },
  methods:{
    autoplayStart(){
      let that = this
      that.sliderinit.intervaleg = setInterval(function(){
          that.next();
          if(!that.sliderinit.loop && that.basicdata.count == 3){
            clearInterval(that.sliderinit.intervaleg)
          }

      },1000)
    },
    autoplayStop(){
      clearInterval(this.sliderinit.intervaleg)
    },
    prev(){
      this.basicdata.animation = true;
      this.basicdata.count--;
      if(this.basicdata.count <= 0){
        let that = this
        setTimeout(function(){
          that.basicdata.animation = false;
          that.basicdata.count = that.pages.length;
          that.$forceUpdate();
        },300);
      }
    },
    next(){
      this.basicdata.animation = true;
      this.basicdata.count++;
      if(this.basicdata.count >= this.pages.length + this.sliderinit.infinite){
        let that = this
        setTimeout(function(){
          that.basicdata.animation = false;
          that.basicdata.count = 1;
          that.$forceUpdate();
        },300);
      }
    }
  },
  computed:{
    // 动画执行obj
    styleobj() {
      let style = {};
      if(this.sliderinit.loop){
        style['transform']='translate3D(-'+this.basicdata.count*100+'%,0,0)';
      }else{
        style['transform']='translate3D(-'+(this.basicdata.count-1)*100+'%,0,0)';
      }

      style['transitionTimingFunction'] = 'ease';
      style['transitionDuration'] = (this.basicdata.animation?300:0) + 'ms';
      return style
    },
  },
  data(){
    return {
      basicdata:{
        count:1,
        animation:true,
      },
      sliderinit:{
        loop:true,
        autoplay:true,
        infinite:1,
        intervaleg:null

      },
      pages:[
        {
          title: 'slide1',
          style:{
            background:'#000',
          },
        },
        {
          title: 'slide2',
          style:{
            background:'#ff0000',
          },
        },
        {
          title: 'slide3',
          style:{
            background:'#4bbfc3',
          },
        }
      ],
    }
  }
}
</script>
<style scoped lang="scss">
.slider-container{
  overflow: hidden;
  width: 100%;
  height:400px;
  position: relative;
  margin:0 auto;
  z-index: 1;
  .btn{
    color:#fff;
    font-size: 28px;
    background: transparent;
    outline: none;
    border: 0;
    z-index: 999;
    position: absolute;
    top: 50%;
    cursor: pointer;
    &.btn-prev{
      left:0;
    }
    &.btn-next{
      right: 0;
    }
  }
  .slider-wrapper{
    display: flex;
    width: 100%;
    height: 100%;
    transition-property: transform;
    .slider-item{
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      color: #fff;
      background: {
        color:#ff0000;
      }
    }
  }
}
</style>
