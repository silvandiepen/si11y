<template>
	<h1>Forms</h1>
	<section>
		<s-input-text v-model="input1" />
		<s-input-text label="test" v-model="input2" />
		<s-input-text label="number" type="number" v-model="input3" />
		input1: {{ input1 }}<br />
		input2: {{ input2 }}<br />
		input3: {{ input3 }}
	</section>
	<section>
		<s-form>
			<s-input-text />
			<s-input-text label="test" />
			<s-input-text label="number" type="number" />
		</s-form>
	</section>
	<section>
		<s-form direction="horizontal">
			<s-input-text />
			<s-input-text label="test" />
			<s-input-text label="number" type="number" />
		</s-form>
	</section>
	<section>
		<s-form direction="horizontal">
			<s-input-text stack />
			<s-input-text stack label="test" />
			<s-input-text stack label="number" type="number" />
		</s-form>
	</section>
	<section>
		<s-form direction="horizontal">
			<s-toggle label="jeeej" />
			<s-toggle label="jeeej" />
			<s-toggle label="jeeej" />
		</s-form>
		<s-form direction="horizontal">
			<s-toggle type="switch" label="jeeej" />
		</s-form>
	</section>
	<section>
		<h4>TextArea</h4>
		<s-text-area v-model="text1" label="jeeej" />
	</section>
</template>
<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
	setup() {
		const input1 = ref('test');
		const input2 = ref('test');
		const input3 = ref('test');
		const text1 = ref('test');
		return {
			input1,
			input2,
			input3,
			text1
		};
	}
});
</script>