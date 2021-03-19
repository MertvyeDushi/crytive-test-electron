<template lang="pug">

	.home

		section.home__section(class="section")

			h2.home__title(class="title") Crytivo Store
			
			.home__content(v-if="games.length")

				GameComponent.home__content-item(v-for="game in games" :key="game.id" :game="game")


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

	created() {
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

<style lang="sass" scoped>

.home


	&__title
		margin-bottom: 20px


	&__content
		display: flex
		align-items: center
		justify-content: space-between
		flex-direction: column


		&-item
			margin: 15px


</style>
