<template>
	<main>
		<h1>Forms</h1>
		<section>
			<s-input-field />
			<s-input-field label="test" />
			<s-input-field label="number" type="number" />
		</section>
		<section>
			<s-input-field-group>
				<s-input-field />
				<s-input-field label="test" />
				<s-input-field label="number" type="number" />
			</s-input-field-group>
		</section>
		<section>
			<s-input-field-group direction="horizontal">
				<s-input-field />
				<s-input-field label="test" />
				<s-input-field label="number" type="number" />
			</s-input-field-group>
		</section>
		<section>
			<s-input-field-group direction="horizontal">
				<s-input-field stack />
				<s-input-field stack label="test" />
				<s-input-field stack label="number" type="number" />
			</s-input-field-group>
		</section>
		<section>
			<s-input-field-group direction="horizontal">
				<s-toggle label="jeeej" />
				<s-toggle label="jeeej" />
				<s-toggle label="jeeej" />
			</s-input-field-group>
			<s-input-field-group direction="horizontal">
				<s-toggle type="switch" label="jeeej" />
			</s-input-field-group>
		</section>
	</main>
</template>