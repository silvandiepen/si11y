<template>
	<main>
		<h1>Buttons</h1>
		<section>
			<h3>Button</h3>
			<s-button>No Button</s-button>
			<s-button href="/somelink">Link button</s-button>
			<s-button link="somelink">Routing Button</s-button>
		</section>

		<section>
			<h3>Button group default</h3>
			<s-button-group>
				<s-button>No Button</s-button>
				<s-button href="/somelink">Link button</s-button>
				<s-button link="somelink">Routing Button</s-button>
			</s-button-group>
			<h3>Button group vertical</h3>
			<s-button-group direction="vertical">
				<s-button>No Button</s-button>
				<s-button href="/somelink">Link button</s-button>
				<s-button link="somelink">Routing Button</s-button>
			</s-button-group>
			<h3>Button group start</h3>
			<s-button-group align="start">
				<s-button>No Button</s-button>
				<s-button href="/somelink">Link button</s-button>
				<s-button link="somelink">Routing Button</s-button>
			</s-button-group>
			<h3>Button group end</h3>
			<s-button-group align="end">
				<s-button>No Button</s-button>
				<s-button href="/somelink">Link button</s-button>
				<s-button link="somelink">Routing Button</s-button>
			</s-button-group>
		</section>
	</main>
</template>
