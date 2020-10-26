<template>
	<h1>Buttons</h1>
	<section class="content">
		<h3>Button</h3>

		<h5>Basic Button</h5>
		<s-button>No Button</s-button>

		<h5>Href button</h5>
		<s-button href="/somelink">Link button</s-button>

		<h5>Href button</h5>
		<s-button link="somelink">Routing Button</s-button>
	</section>
	<section class="content">
		<h3>Styles</h3>

		<h5>Basic Button</h5>
		<s-button>No Button</s-button>

		<h5>Ghost</h5>
		<s-button ghost>Ghost Button</s-button>

		<h5>Colored</h5>
		<s-button link="somelink" color="red">Routing Button</s-button>
	</section>

	<section class="content">
		<h3>Button group</h3>
		<h5>Button group default</h5>
		<s-button-group>
			<s-button>No Button</s-button>
			<s-button href="/somelink">Link button</s-button>
			<s-button link="somelink">Routing Button</s-button>
		</s-button-group>
		<h5>Button group vertical</h5>
		<s-button-group direction="vertical">
			<s-button>No Button</s-button>
			<s-button href="/somelink">Link button</s-button>
			<s-button link="somelink">Routing Button</s-button>
		</s-button-group>
		<h5>Button group start</h5>
		<s-button-group align="start">
			<s-button>No Button</s-button>
			<s-button href="/somelink">Link button</s-button>
			<s-button link="somelink">Routing Button</s-button>
		</s-button-group>
		<h5>Button group end</h5>
		<s-button-group align="end">
			<s-button>No Button</s-button>
			<s-button href="/somelink">Link button</s-button>
			<s-button link="somelink">Routing Button</s-button>
		</s-button-group>
	</section>
</template>
