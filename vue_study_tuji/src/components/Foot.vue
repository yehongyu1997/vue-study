<template>
    <!-- mouseenter鼠标进入时发生的事件 -->
    <div>
          <img  v-for="i in 5"  :key="i" :src="`images/${star}/${i}.jpg`" @mouseenter="$emit('changeidx',{'idx':i})">
    </div>
</template>

<script>
    export default {
        props: ['star', 'idx']
    }
</script>

<style lang="less" scoped>
  img{
      width: 100px;
      height: 100px;
  }
</style>