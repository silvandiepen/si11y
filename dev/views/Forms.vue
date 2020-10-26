<template>
	<h1>Forms</h1>
	<section>
		<s-input-text />
		<s-input-text label="test" />
		<s-input-text label="number" type="number" />
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
</template>