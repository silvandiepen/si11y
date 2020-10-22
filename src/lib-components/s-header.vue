<template>
	<header class="s-header">
		<div class="s-header__left" v-if="hasSlot.left">
			<slot name="left"></slot>
		</div>
		<div class="s-header__middle" v-if="hasSlot.middle">
			<slot name="middle"></slot>
		</div>
		<div class="s-header__right" v-if="hasSlot.right">
			<slot name="right"></slot>
		</div>
	</header>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
export default defineComponent({
	name: 'SHeader', // vue component name
	props: {
		autoHide: {
			type: Boolean,
			default: false
		}
	},
	setup(props, context) {
		// console.log(context.slots.left, context.slots['left']);
		if (props.autoHide) {
			console.log('yes, this should autohide');
		}

		const { left, middle, right } = context.slots;

		const hasSlot = reactive({
			left: left ? !!left() : false,
			middle: middle ? !!middle() : false,
			right: right ? !!right() : false
		});

		return { hasSlot };
	}
});
</script>


<style lang="scss">
@import '../style/index.scss';
.s-header {
	position: sticky;
	padding: var(--padding, #{$s-padding});
	display: flex;
	justify-content: space-between;
	top: 0;
	.s-header__right {
		justify-self: flex-end;
		align-self: center;
		align-items: flex-end;
		justify-content: flex-end;
		width: 25%;
	}
	.s-header__middle {
		justify-self: center;
		align-self: center;
		justify-content: center;
		width: 100%;
	}
	.s-header__left {
		justify-self: flex-start;
		align-self: center;
		align-items: flex-start;
		justify-content: flex-end;
		width: 25%;
	}
}
</style>
