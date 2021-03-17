<template>
  <div id="app">
    <NavBarComponent />
    <router-view></router-view>
  </div>
</template>

<script>
import NavBarComponent from '@/components/NavBarComponent'

export default {
  name: 'App',

  components: {
    NavBarComponent
  }
}
</script>

<style lang="scss">

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


body {
  margin-top: 60px;
  font-family: 'Roboto', 'Helvetica', sans-serif;
  background: #f3f3f3;
}


.section {
  padding: 15px;
}


.title {
  margin: 0;
  font-size: 24px;
}

</style>
