<script lang="ts">
	import 'open-props/style';
	import 'open-props/normalize';
	import 'open-props/buttons';
	import Header from '../components/header.svelte';
	import Footer from '../components/footer.svelte';
	import '../app.css';
</script>

<div class="layout">
	<Header />
	<slot />
	<Footer />
</div>

<style>
	.layout {
		height: 100%;
		max-inline-size: 1440px;
		display: grid;
		grid-template-rows: auto 1fr auto;
		margin-inline: auto;
		padding-inline: var(--size-7);
	}

	main {
		padding-block: var(--size-9);
		@media (min-width: 1440px) {
			padding-inline: 0;
		}
	}
</style>
