<template>
	<div
		class="s-input-text-area"
		:class="[
			`s-input-text-area--${props.mode}`,
			props.stack ? `s-input-text-area--stack` : null,
			dirty ? `s-input-text-area--is-dirty` : null,
			focus ? `s-input-text-area--has-focus` : null,
			empty ? `s-input-text-area--is-empty` : null
		]"
	>
		<component
			:is="elementType"
			:type="type"
			class="s-input-text__control"
			v-model="value"
			@focus="onFocus"
			@blur="onBlur"
			@input="onInput"
			:id="uid"
		></component>
		<label :for="uid" v-if="props.label" class="s-input-text__label">{{
			label
		}}</label>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
// import { setFocusStatus, setInputStatus } from './set-utils';
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
		const elementType = 'textarea';

		const dirty = ref(false);
		const focus = ref(false);
		const empty = ref(true);

		const onFocus = () => (focus.value = true);
		const onBlur = () => (focus.value = false);
		const onInput = (event: any) => (empty.value = !!event.target.value);

		const uid: string = `input-${Math.round(
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
			onInput
		};
	}
});
</script>

<style lang="scss">
@import '../style/index.scss';

.s-input-text-area {
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