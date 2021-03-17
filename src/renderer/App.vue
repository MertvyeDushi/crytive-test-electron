<template>
  <div id="app">
    <NavbarComponent />
    <router-view></router-view>
  </div>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent'

export default {
  name: 'App',

  components: {
    NavbarComponent
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
