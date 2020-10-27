<template>
	<component
		:is="elementType"
		class="s-form"
		:class="[
			`s-form--${props.align}`,
			`s-form--${props.direction}`,
			props.stack ? `s-form--stack` : ``
		]"
	>
		<slot :props="props"></slot>
	</component>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'SForm', // vue component name
	props: {
		direction: {
			type: String,
			default: 'vertical'
		},
		align: {
			type: String,
			default: 'start'
		},
		stack: {
			type: Boolean,
			default: false
		},
		action: {
			type: String,
			default: ''
		}
	},
	setup(props) {
		const elementType = props.action ? 'form' : 'div';
		return {
			props,
			elementType
		};
	}
});
</script>

<style lang="scss">
@import '../style/index.scss';

.s-form {
	display: flex;
	margin: auto;
	width: 100%;
	max-width: 720px;
	&--center {
		justify-content: center;
		align-items: center;
	}
	&--start {
		justify-content: flex-start;
		align-items: flex-start;
	}
	&--end {
		justify-content: flex-end;
		align-items: flex-end;
	}
	&--horizontal {
		flex-direction: row;
		& > * + * {
			margin-left: 1em;
		}
	}
	&--vertical {
		flex-direction: column;
		& > * + * {
			margin-top: 1em;
		}
		.s-input-text__label {
			min-width: calc(100% / 3);
			display: block;
		}
	}
}
</style>