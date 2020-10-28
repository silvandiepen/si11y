<template>
	<div
		class="s-text-area"
		:class="[
			`s-text-area--${props.mode}`,
			props.stack ? `s-text-area--stack` : null,
			dirty ? `s-text-area--is-dirty` : null,
			focus ? `s-text-area--has-focus` : null,
			empty ? `s-text-area--is-empty` : null
		]"
	>
		<component
			:is="elementType"
			class="s-input-text__control"
			@focus="onFocus"
			@blur="onBlur"
			@input="updateValue($event.target.value)"
			:id="uid"
			:placeholder="props.label"
			:required="required"
			>{{ currentValue }}</component
		>
		<label :for="uid" v-if="props.label" class="s-text-area__label">{{
			label
		}}</label>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
// import { setFocusStatus, setInputStatus } from './set-utils';
export default defineComponent({
	name: 'STextArea', // vue component name
	props: {
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
		},
		value: {
			type: String,
			default: ''
		}
	},
	setup(props, { emit }) {
		const elementType = 'textarea';

		const dirty = ref(false);
		const focus = ref(false);
		const empty = ref(true);

		const onFocus = () => (focus.value = true);
		const onBlur = () => (focus.value = false);

		let currentValue = ref(props.value);

		const updateValue = (value: string | number) => {
			currentValue.value = value as string;
			emit('update:modelValue', value);
		};

		const uid: string = `text-area-${Math.round(
			new Date().valueOf() * Math.random()
		).toString()}`;

		return {
			elementType,
			props,
			uid,
			dirty,
			focus,
			empty,
			onFocus,
			onBlur,
			updateValue
		};
	}
});
</script>

<style lang="scss">
@import '../style/index.scss';

.s-text-area {
	display: flex;
	width: 100%;
	max-width: 720px;

	&--default {
		flex-direction: row-reverse;
		justify-content: flex-end;
	}
	&--stack {
		flex-direction: column-reverse;
		.s-input-text__label {
			width: 100%;
			padding: var(--form-padding, $s-form-padding) 0;
		}
	}

	&__label {
		padding: var(--form-padding, $s-form-padding);
		font-size: var(--form-font-size, $s-form-font-size);
	}
	&__control {
		font-family: inherit;
		font-size: 1em;
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