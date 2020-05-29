<template>
    <div>
        <Header  :star="star" :idx="idx" @changestar="changestarHan"/>
        <Body :star="star" :idx="idx" @goNext="goNextHan" @goPrev="goPrevHan" />
        <Foot  :star="star" :idx="idx" @changeidx="changeidxHan"/>
    </div>
</template>

<script>
    // 必须经过引定上过程
    import Body from "./components/Body.vue";
    import Foot from "./components/Foot.vue";
    import Header from "./components/Header.vue"
    export default {
        components: {
            Body,
            Foot,
            Header
        },
        data() {
            return {
                star: 'yangmi',
                idx: 1
            }
        },
        methods: {
            goNextHan() {
                this.idx++
            },
            goPrevHan() {
                this.idx--
            },
            // 解构出从foot中传来的idx
            changeidxHan({idx}){
                this.idx= idx
            },
            changestarHan({star}){
                this.star= star
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>