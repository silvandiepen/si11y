<template>
	<div
		class="s-input-field"
		:class="[
			`s-input-field--${props.mode}`,
			props.stack ? `s-input-field--stack` : null,
			state.dirty ? `s-input-field--is-dirty` : null,
			state.focus ? `s-input-field--has-focus` : null,
			state.empty ? `s-input-field--is-empty` : null
		]"
	>
		<component
			:is="elementType"
			:type="inputType"
			class="s-input-field__control"
			@focus="setFocusStatus(state, true)"
			@blur="setFocusStatus(state, false)"
			@input="setInputStatus(state)"
			:id="state.uid"
		></component>
		<label :for="state.uid" v-if="props.label" class="s-input-field__label">{{
			props.label
		}}</label>
	</div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { setFocusStatus, setInputStatus } from './set-utils';
export default defineComponent({
	name: 'SInputField', // vue component name
	props: {
		type: {
			type: String,
			default: 'text'
		},
		options: {
			type: Array,
			default: []
		},
		label: {
			type: String,
			default: ''
		},
		mode: {
			type: String,
			default: 'default'
		},
		stack: {
			type: Boolean,
			default: false
		}
	},
	setup(props) {
		const elementType = props?.options.length > 0 ? 'select' : 'input';
		const inputType = props.type ? props.type : 'text';

		const state = reactive({
			dirty: false,
			focus: false,
			empty: true,
			uid: new Date().getTime() * Math.random()
		});

		return {
			elementType,
			inputType,
			props,
			state,
			setFocusStatus,
			setInputStatus
		};
	}
});
</script>

<style lang="scss">
@import '../style/index.scss';

.s-input-field {
	display: flex;
	width: 100%;
	max-width: 720px;

	&--default {
		flex-direction: row-reverse;
		justify-content: flex-end;
	}
	&--stack {
		flex-direction: column-reverse;
		.s-input-field__label {
			width: 100%;
			padding: var(--form-padding, $s-form-padding) 0;
		}
	}

	&__label {
		padding: var(--form-padding, $s-form-padding);
		font-size: var(--form-font-size, $s-form-font-size);
	}
	&__control {
		width: 100%;
		border: none;
		border: var(--form-border, $s-form-border);
		border-radius: var(--form-roundness, var(--roundness, $s-roundness));
		background-color: transparent;
		font-size: var(--form-font-size, $s-form-font-size);
		color: var(--form-text-color);
		padding: var(--form-padding, $s-form-padding);

		transition: box-shadow var(--transition, $s-transition);
		&:empty {
			opacity: 0.5;
		}
		&:focus {
			outline: none;
			border-color: var(--primary-color, $s-primary-color);
			box-shadow: 0 0 0 var(--form-highlight-size, $s-form-highlight-size)
				var(--form-highlight-color, $s-form-highlight-color);
			opacity: 1;
		}
	}
}
</style>