<template>
	<component :is="elementType" class="s-button" :class="style" :href="href">
		<span v-if="icon" class="s-button__icon"><Icon name="icon" /></span>
		<span class="s-button__text"><slot /></span>
	</component>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'SButton', // vue component name
	components: {
		Icon: () => import('./s-icon.vue')
	},
	props: {
		href: {
			type: String,
			default: ``
		},
		link: {
			type: String,
			default: ``
		},
		large: {
			type: Boolean,
			default: false
		},
		medium: {
			type: Boolean,
			default: true
		},
		small: {
			type: Boolean,
			default: false
		},
		ghost: {
			type: Boolean,
			default: false
		},
		color: {
			type: String,
			default: ``
		},
		icon: {
			type: String,
			default: ``
		}
	},
	setup(props) {
		const style = [];
		if (props.ghost) style.push('s-button--ghost');
		if (props.color) style.push(`s-button--${props.color}`);

		if (props.large) style.push('s-button--large');
		if (props.small) style.push('s-button--small');

		return {
			elementType: props.href ? 'a' : 'button',
			href: props.href ? props.href : null,
			style
		};
	}
});
</script>

<style lang="scss">
@import '../style/index.scss';

.s-button {
	display: inline-block;
	border: var(--button-border, none);
	border-radius: var(--button-roundness, var(--roundness, $s-roundness));
	background-color: var(
		--button-background,
		var(--primary-color, $s-primary-color)
	);
	font-size: var(--button-font-size, 1em);
	font-family: var(--button-font-family, var(--font-family, $s-font-family));
	text-decoration: none;
	padding: 0;

	&:focus {
		outline: none;
		box-shadow: 0 0 0 0.15em
			var(--primary-color-highlight, $s-primary-color-highlight);
		.s-button__text {
			transform: scale(1.05);
		}
	}

	&--large {
		font-size: 1.25em;
	}
	&--medium {
		font-size: 1em;
	}
	&--small {
		font-size: 0.875em;
	}

	&__text {
		display: block;
		color: var(
			--button-color,
			var(--primary-color-text, $s-primary-color-text)
		);
		padding: var(--button-padding, 0.75em 1em);
	}

	// Styles

	&--ghost {
		background-color: transparent;
		box-shadow: 0 0 2px 0 currentColor;
	}
	&--red {
		background-color: red;
	}
}
</style>