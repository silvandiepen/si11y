<template>
	<header class="s-header">
		<div class="s-header__left">
			<slot name="left"></slot>
		</div>
		<div class="s-header__middle">
			<slot name="middle"></slot>
		</div>
		<div class="s-header__right">
			<slot name="right"></slot>
		</div>
	</header>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from 'vue';
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
		const state = reactive({
			hasLeftSlot: computed(() => {
				return !!context.slots['left'];
			}),
			hasMiddleSlot: computed(() => {
				return !!context.slots['middle'];
			}),
			hasRightSlot: computed(() => {
				return !!context.slots['left'];
			})
		});

		return { state };
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
