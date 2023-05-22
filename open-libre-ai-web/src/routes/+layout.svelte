<script lang="ts">
	import '../app.postcss';

	// Your selected Skeleton theme:
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	// import '@skeletonlabs/skeleton/themes/theme-rocket.css';

	// This contains the bulk of Skeletons required styles:
	// NOTE: this will be renamed skeleton.css in the v2.x release.
	import '@skeletonlabs/skeleton/styles/skeleton.css';

	// Finally, your application's global stylesheet (sometimes labeled 'app.css')
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { invalidateAll } from '$app/navigation';

	import type { PageData } from './$types';

	export let data: PageData;
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl">OpenLibreAI </strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a class="btn btn-sm variant-ghost-surface" href="/" rel="noreferrer"> Home </a>
				<a class="btn btn-sm variant-ghost-surface" href="" rel="noreferrer"> Dashboard </a>
				<a class="btn btn-sm variant-ghost-surface" href="#" rel="noreferrer"> Models </a>
				<a class="btn btn-sm variant-ghost-surface" href="#" rel="noreferrer"> Datasets </a>

				<a class="btn btn-sm variant-ghost-surface" href="#" rel="noreferrer"> Solutions </a>

				<a class="btn btn-sm variant-ghost-surface" href="#" rel="noreferrer"> Integrations </a>

				<a class="btn btn-sm variant-ghost-surface" href="#" rel="noreferrer"> Deployments </a>

				<a class="btn btn-sm variant-ghost-surface" href="#" rel="noreferrer"> API </a>
				{#if data.session}
					<form action="/logout" method="POST">
						<button type="submit" class="btn btn-primary">Logout</button>
					</form>
				{:else}
					<a class="btn btn-sm variant-ghost-surface" href="/login" rel="noreferrer"> Login </a>
					<a class="btn btn-sm variant-ghost-surface" href="/register" rel="noreferrer">
						Register
					</a>
				{/if}
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>

<style>
</style>
