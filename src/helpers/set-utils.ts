export const setFocusStatus = (state: any, focus: boolean): void => {
	if (focus) {
		state.dirty = true;
		state.focus = true;
	} else {
		state.focus = false;
	}
};
export const setInputStatus = (state: any, value: string): void => {
	state.empty = value ? false : true;
};
