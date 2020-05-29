<template>
    <div>
             <button v-for="(v,k) in info" :key="k"  @click="$emit('changestar',{'star':k})" :class="{'cur':star==k}">{{v}}</button>
    </div>
</template>

<script>
    export default {
        props:['star','idx'],
        data() {
            return {
              info: {
                  xiaozhan:'肖战',
                  yangmi:'杨幂',
                  xiaogou:'小狗'

              }
            }
        },
    }
</script>

<style lang="less" scoped>
.cur{
    background: orange;
}
</style>