import Vue from 'vue';
import App from './App.vue';

// Vue的起步语法
new Vue({
    // 挂载点，我们的index.html中，有一个空的<div id="app"></div>
    el: '#app',
    // render表示渲染，h函数表示创建节点，后面会详细介绍
    render(h) {
        return h(App);
    }
});