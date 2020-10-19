import { defineComponent, Plugin } from 'vue';


declare const Silly: { install: Plugin['install'] };
export default Silly;

export const SillySample: ReturnType<typeof defineComponent>;
