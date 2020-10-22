<template>
	<section>
		<SNavigation :menu="menu"></SNavigation>
	</section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
	setup() {
		return {
			menu: [
				{ name: 'item1', route: 'kutter' },
				{ name: 'item2', route: 'kutter' },
				{ name: 'item3', route: 'kutter' },
				{ name: 'item4', route: 'kutter' }
			]
		};
	}
});
</script>