<template>
	<div
		class="s-button-group"
		:class="[
			`s-button-group--${props.align}`,
			`s-button-group--${props.direction}`
		]"
	>
		<slot></slot>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'SButtonGroup', // vue component name
	props: {
		direction: {
			type: String,
			default: 'horizontal'
		},
		align: {
			type: String,
			default: 'center'
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

.s-button-group {
	display: flex;
	.s-button {
		margin: 0;
	}
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

		& > .s-button + .s-button,
		& > * + * {
			margin-top: 0;
			margin-left: 1em;
		}
	}
	&--vertical {
		flex-direction: column;
		& > .s-button + .s-button,
		& > * + * {
			margin-top: 1em;
		}
	}
}
</style>