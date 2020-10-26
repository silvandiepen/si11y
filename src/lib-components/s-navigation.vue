<template>
	<nav class="s-navigation">
		<ul class="s-navigation__list">
			<li class="s-navigation__item" v-for="(item, idx) in menu" :key="idx">
				<component
					:is="getElementType(item)"
					v-if="item.route"
					:href="item.route"
					class="s-navigation__link"
				>
					<span class="s-navigation__text">{{ item.name }}</span>
				</component>
				<component
					:is="getElementType(item)"
					v-if="item.click"
					@click="item.click"
					class="s-navigation__link"
				>
					<span class="s-navigation__text">{{ item.name }}</span>
				</component>
				<slot></slot>
			</li>
		</ul>
	</nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
	name: 'SNavigation', // vue component name
	props: {
		menu: {
			type: Array,
			default: []
		}
	},

	setup(props) {
		const getElementType = (item: any) => {
			let elementType = 'a';
			if (item.click) elementType = 'button';
			if (item.element) elementType = item.element;
			return elementType;
		};

		return { menu: props.menu, getElementType };
	}
});
</script>

<style lang="scss">
@import '../style/index.scss';

.s-navigation {
	ul,
	li {
		list-style-type: none;
	}
	&__list {
		display: flex;
		justify-content: center;
	}
	&__item {
		position: relative;
	}
	&__link {
		display: block;
		color: currentColor;
		text-decoration: none;
		&::before {
			content: '';
			height: 100%;
			display: block;
			width: 100%;
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%) scale(0.75);
			border-radius: var(--roundness, $s-roundness);
			background-color: var(--primary-color, $s-primary-color);
			transition: var(--transition, $s-transition);
			opacity: 0;
		}
		&:hover::before {
			transform: translate(-50%, -50%) scale(1);
			opacity: 1;
		}
		&:hover {
			.s-navigation__text {
				color: var(--primary-color-text, $s-primary-color-text);
			}
		}
	}
	&__text {
		position: relative;
		z-index: 1;
		display: block;
		padding: 1em;
		color: currenColor;
	}
}
</style>