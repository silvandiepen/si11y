import { watch, onMounted, reactive } from 'vue';

export function useColorMode() {
	const state = reactive({
		isDark: false
	});

	onMounted(() => {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches)
			state.isDark = true;

		// console.log(window.matchMedia('(prefers-color-scheme: dark)').matches);
	});

	watch(
		() => state.isDark,
		() => {
			console.log('changing mode');
			document.documentElement.setAttribute(
				'data-user-color-scheme',
				state.isDark ? 'dark' : 'light'
			);
		}
	);

	return {
		darkMode: state.isDark,
		lightMode: !state.isDark,
		mode: state.isDark ? 'dark' : 'light'
	};
}

export default useColorMode;
