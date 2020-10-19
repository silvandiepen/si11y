<template>
	<div
		class="s-input-field-group"
		:class="[
			`s-input-field-group--${props.align}`,
			`s-input-field-group--${props.direction}`,
			props.stack ? `s-input-field-group--stack` : ``
		]"
	>
		<slot :props="props"></slot>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'SInputFieldGroup', // vue component name
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
		}
	},
	setup(props) {
		return {
			props
		};
	}
});
</script>

<style lang="scss">
@import '../style/index.scss';

.s-input-field-group {
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
		.s-input-field__label {
			min-width: calc(100% / 3);
			display: block;
		}
	}
}
</style>