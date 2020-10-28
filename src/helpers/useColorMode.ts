import { watch, ref } from 'vue';

export function useColorMode() {
	const darkMode = ref(false);

	const localDarkMode = localStorage.getItem('darkMode');

	if (localDarkMode) darkMode.value = JSON.parse(localDarkMode).isDarkMode;
	else if (window.matchMedia('(prefers-color-scheme: dark)').matches)
		darkMode.value = true;

	watch(
		darkMode,
		() => {
			document.documentElement.setAttribute(
				'data-user-color-scheme',
				darkMode.value ? 'dark' : 'light'
			);
			localStorage.setItem(
				'darkMode',
				JSON.stringify({ isDarkMode: darkMode.value })
			);
		},
		{
			immediate: true
		}
	);

	return darkMode;
}

export default useColorMode;
