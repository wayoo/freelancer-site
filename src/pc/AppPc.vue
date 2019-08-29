<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>

export default {
  name: 'app',
};
</script>

<style src="../assets/css/normalize.css">

</style>
<style lang="less">

html {
  font-family: '思源雅黑', Microsoft YaHei, 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.container {
    width: 1140px;
    // padding-right: 15px;
    // padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}

.pull-left {
    float: left;
}
.pull-right {
    float: right;
}
.text-center {
    text-align: center;
}



</style>
