<template>
    <div class="page">
        <div>这是<h1>Index</h1></div>
        <div>跳转到<router-link to="/list">列表页</router-link></div>
        <div>跳转到<router-link to="/detail">详情页</router-link></div>
    </div>
</template>

<script>

export default {
    name: 'Index',
    data() {
        return {
        }
    }
}
</script>
