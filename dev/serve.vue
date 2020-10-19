
<template>
	<div id="app">
		<SHeader>
			<template #middle>
				<SNavigation :menu="state.menu" autoHide />
			</template>
			<template #right>
				<SToggle
					label="darkmode"
					type="switch"
					v-model:checked="state.darkmode"
				/>
			</template>
		</SHeader>

		<router-view />
	</div>
</template>


<script lang="ts">
import { defineComponent, reactive, watch } from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
import {
	SButton,
	SButtonGroup,
	SInputField,
	SInputFieldGroup,
	SToggle,
	SNavigation,
	SHeader
} from '@/entry.esm';

export default defineComponent({
	name: 'ServeDev',
	components: {
		SButton,
		SButtonGroup,
		SInputField,
		SInputFieldGroup,
		SToggle,
		SNavigation,
		SHeader
	},
	setup() {
		const state = reactive({
			page: 'forms',
			darkmode: false,
			menu: [
				{
					name: 'Buttons',
					route: '/buttons'
				},
				{
					name: 'Forms',
					route: '/forms'
				},
				{
					name: 'Contents',
					route: '/contents'
				},
				{
					name: 'Navigation',
					route: '/navigation'
				}
			]
		});

		watch(
			() => state.darkmode,
			() => {
				document.documentElement.setAttribute(
					'data-user-color-scheme',
					state.darkmode ? 'dark' : 'light'
				);
			}
		);

		return {
			state
		};
	}
});
</script>


<style lang="scss">
@import '../src/style/index.scss';
@import '../src/style/mode.scss';

* {
	box-sizing: border-box;
	margin: 0;
}
html,
body {
	width: 100%;
	min-height: 100vh;
	font-family: $s-font-family;
	margin: 0;
	padding: 0;
}
html {
	background-color: var(--html-background);
}
body {
	background-color: var(--body-background);
	color: var(--body-text-color);
}
section {
	max-width: 960px;
	background-color: var(--content-background);
	color: var(--content-text-color);
	padding: 2em;
	margin: auto;
	& + section {
		margin-top: 2em;
	}
}
</style>
