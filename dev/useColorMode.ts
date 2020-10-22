import { watch, onMounted, ref, toRefs } from 'vue';

export function useColorMode() {
	const darkMode = ref(false);

	onMounted(() => {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches)
			darkMode.value = true;

		// console.log(window.matchMedia('(prefers-color-scheme: dark)').matches);
	});

	watch(darkMode, () => {
		console.log('changing mode');
		document.documentElement.setAttribute(
			'data-user-color-scheme',
			darkMode.value ? 'dark' : 'light'
		);
	});

	return darkMode;
}

export default useColorMode;
