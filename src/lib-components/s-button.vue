<template>
	<component
		:is="elementType"
		class="s-button"
		:class="[`s-button--${size}`]"
		:href="href"
	>
		<span class="s-button__text"><slot /></span>
	</component>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'SButton', // vue component name
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
		}
	},
	setup(props) {
		return {
			elementType: props.href ? 'a' : 'button',
			href: props.href ? props.href : null,
			size: props.large ? 'large' : props.small ? 'small' : 'medium'
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
}
</style>