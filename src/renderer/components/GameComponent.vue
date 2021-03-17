<template>

	<div class="game">

		<h1 class="game__title title">{{ game.title }}</h1>
		<img class="game__cover" :src="game.cover">
		<p class="game__price">{{ game.price.currency }}{{ game.price.current_amount }}</p>

	</div>

</template>

<script>
export default {
	name: 'GameComponent',

	props: {
		game: {
			type: Object,
			required: true
		}
	}
}
</script>

<style lang="scss" scoped>

.game {
  width: 90%;
  max-width: 1100px;

  height: 500px;

  margin-bottom: 50px;
  padding: 20px;

  box-shadow: 0 4px 25px -4px rgba(122, 118, 174, 27%);
  border-radius: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;


  &__cover {
    width: 100%;
    height: 85%;

    object-fit: cover;
    border-radius: 30px;
  }
}

</style>