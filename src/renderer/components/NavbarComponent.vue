<template>
  
  <nav class="navigation">

    <h1 class="navigation__title">
      Crytivo-<span>test electron project</span>!
    </h1>

    <ul class="navigation__list">

      <li class="navigation__list-item">
        <router-link class="link navigation__list-link" to="/">Games</router-link>
      </li>

      <li class="navigation__list-item">
        <router-link class="link navigation__list-link" to="/about">About</router-link>
      </li>

    </ul>

  </nav>

</template>

<script>
export default {
  name: 'NavbarComponent'
}
</script>

<style lang="scss" scoped>

.link {
  text-decoration: none;
  color: #171717;
}


.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;

  top: 0;
  right: 0;
  left: 0;

  height: 60px;
  padding: 0 15px;

  background: #171717;


  &__title {
    color: #1b6ce6;
    font-size: 28px;
    line-height: 60px;
    font-weight: 900;
    text-transform: uppercase;


    span {
      color: #f3f3f3;
      font-weight: 300;
    }
  }


  &__list {
    display: flex;
    justify-content: space-between;
    align-items: center;


    &-item {
      display: inline-block;
      list-style: none;

      padding: 0 15px;

      cursor: pointer;

      transition: all .2s;


      &:hover {
        background: rgba(255, 255, 255, .2);
      }
    }


    &-link {    
      display: inline-block;
        
      color: #f3f3f3;
      font-size: 18px;
      line-height: 60px;

      height: 100%;
      width: 100%;

      transition: all .2s;


      &:hover {
        color: #1b6ce6;
      }
    }
  }
}

</style>