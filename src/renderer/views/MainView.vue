<template>

  <div class="home">

    <section class="home__section section">

      <h2 class="home__title title">Crytivo Store</h2>
      
      <div class="home__content" v-if="games.length">

        <GameComponent class="home__content-item" v-for="game in games" :key="game.id" :game="game" />

      </div>
    </section>

  </div>

</template>

<script>
import GameComponent from '@/components/GameComponent'

export default {

  name: 'MainView',

  components: {
    GameComponent
  },

  data() {
    return {
      games: []
    }
  },

  mounted() {
    this.getGames()
  },

  methods: {
    getGames() {
      this.axios.get('http://204.155.154.249:3003/api/v1/games')
        .then( response => {
          this.games = response.data.games
        })
    }
  }
}
</script>

<style lang="scss" scoped>

.home {


  &__title {
    margin-bottom: 20px;
  }


  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;


    &-item {
      margin: 15px;
    }
  }
}

</style>
