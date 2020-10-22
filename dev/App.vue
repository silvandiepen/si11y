
<template>
	<SHeader>
		<template #left> <span class="logo">si<span>11</span>y</span> </template>
		<template #middle>
			<SNavigation :menu="state.menu" autoHide />
		</template>
		<template #right>
			<SToggle label="darkmode" type="switch" v-model="darkMode" />
			{{ darkMode }}
		</template>
	</SHeader>
	<h1>Test</h1>
	{{ darkMode }}
	<main>
		<router-view />
	</main>
</template>


<script lang="ts">
import { defineComponent, reactive } from 'vue';
import useColorMode from './useColorMode';

import {
	SButton,
	SButtonGroup,
	SInputField,
	SInputFieldGroup,
	SToggle,
	SNavigation,
	SHeader
} from '../src/entry.esm';

export default defineComponent({
	name: 'App',
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
		const { darkMode } = useColorMode();

		const state = reactive({
			page: 'forms',
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

		return {
			state,
			darkMode
		};
	}
});
</script>


<style lang="scss">
@import '../src/style/index.scss';
@import '../src/style/mode.scss';
@import '../src/style/base.scss';

.logo {
	font-size: 2em;
	font-family: 'bitter';
	span {
		color: var(--primary-color, $s-primary-color);
	}
}
</style>
