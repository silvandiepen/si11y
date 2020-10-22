<template>
	<div class="s-toggle" :class="`s-toggle--${props.type}`">
		<input
			:id="state.uid"
			class="s-toggle__control"
			type="checkbox"
			:checked="checked"
			v-bind="$attrs"
			@change="setChecked"
		/>
		<label :for="state.uid" class="s-toggle__label">
			<span class="s-toggle__text">{{ label }} {{ state.checked }}</span>
		</label>
	</div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { setFocusStatus, setInputStatus } from './set-utils';
import { useModelWrapper } from './modelWrapper';

export default defineComponent({
	name: 'SToggle', // vue component name
	props: {
		type: {
			type: String,
			default: 'checkbox'
		},
		label: {
			type: String,
			default: ''
		},
		checked: {
			type: Boolean,
			default: false
		}
	},
	setup(props, { emit }) {
		const inputType = props.type;

		const state = reactive({
			dirty: false,
			focus: false,
			empty: true,
			uid: new Date().getTime() + Math.random(),
			checked: false
		});

		const setChecked = ($event: any) => {
			state.checked = $event.target.checked;
			emit('update:checked', $event.target.checked);
			emit('checked', $event.target.checked);
			emit('input', $event.target.checked);
			console.log('set checked to', $event.target.checked);
		};

		return {
			inputType,
			props,
			state,
			setChecked,
			setFocusStatus,
			setInputStatus,
			label: props.label
			isChecked: useModelWrapper(props, emit, 'checked')
		};
	}
});
</script>

<style lang="scss">
@import '../style/index.scss';
$block: '.s-toggle';

#{$block} {
	border-radius: var(--rounness, $s-form-roundness);
	&--checkbox {
		#{$block}__label {
			margin: 0;
			position: relative;
			display: block;
			padding: var(--form-padding, $s-form-padding);
			padding-left: 2em;
			line-height: 1em;

			&::after,
			&::before {
				content: '';
				width: 1.5em;
				height: 1.5em;

				position: absolute;
				left: 0;
				top: 50%;
				display: block;
			}
			&::before {
				transform: translateY(-50%);
				border: 1px solid currentColor;
				border-radius: var(--form-roundness, $s-form-roundness);
			}
			&::after {
				width: 0.75em;
				height: 0.6em;
				left: 0.875em;
				box-shadow: 2px -2px 0 0 currentColor inset;
				transform: translateY(-66%) translateX(calc(-50% - 1px)) rotate(-45deg)
					scale(0);
				transition: transform var(--transition, $s-transition);
			}
		}
		#{$block}__control {
			&:checked + #{$block}__label {
				&::before {
					border: 1px solid var(--primary-color, $s-primary-color);
				}
				&::after {
					transform: translateY(-75%) translateX(calc(-50% - 1px))
						rotate(-45deg) scale(1);
				}
			}
			&:focus + #{$block}__label {
				&::before {
					border: 1px solid var(--primary-color, $s-primary-color);
					box-shadow: 0 0 0 var(--form-highlight-size, $s-form-highlight-size)
						var(--form-highlight-color, $s-form-highlight-color);
				}
			}
		}
	}
	&--switch {
		#{$block}__label {
			margin: 0;
			position: relative;
			display: block;
			padding: var(--form-padding, $s-form-padding);
			padding-left: 3em;
			line-height: 1em;

			&::after,
			&::before {
				content: '';
				width: 2.5em;
				height: 1.5em;
				border-radius: 1.5em;
				position: absolute;
				left: 0;
				top: 50%;
				display: block;
			}
			&::before {
				transform: translateY(-50%);
				border: 1px solid currentColor;
			}
			&::after {
				width: calc(1.5em - 4px);
				height: calc(1.5em - 4px);
				left: 3px;
				top: 50%;
				background-color: currentColor;
				border-radius: var(--round, 50%);
				transform: translateY(-50%) translateX(0);
				transition: transform var(--transition, $s-transition);
			}
		}
		#{$block}__control {
			&:checked + #{$block}__label {
				&::before {
					border: 1px solid var(--primary-color, $s-primary-color);
				}
				&::after {
					transform: translateY(-50%) translateX(calc(100% - 4px));
				}
			}
			&:focus + #{$block}__label {
				&::before {
					border: 1px solid var(--primary-color, $s-primary-color);
					box-shadow: 0 0 0 var(--form-highlight-size, $s-form-highlight-size)
						var(--form-highlight-color, $s-form-highlight-color);
				}
			}
		}
	}
	#{$block}__control {
		width: 0;
		height: 0;
		position: absolute;
		opacity: 0;
		margin: 0;
	}
}
</style>