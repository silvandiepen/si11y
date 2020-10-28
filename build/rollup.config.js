// rollup.config.js
import fs from 'fs';
import path from 'path';
import vue from 'rollup-plugin-vue';
import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import babel from '@rollup/plugin-babel';
import PostCSS from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import minimist from 'minimist';
// import sass from 'rollup-plugin-sass';
import scss from 'rollup-plugin-scss';

// Get browserslist config and remove ie from es build targets
const esbrowserslist = fs
	.readFileSync('./.browserslistrc')
	.toString()
	.split('\n')
	.filter((entry) => entry && entry.substring(0, 2) !== 'ie');

const argv = minimist(process.argv.slice(2));
const projectRoot = path.resolve(__dirname, '..');

const PATH_ROOT = '';
const PATH_SRC = path.resolve(PATH_ROOT, 'src').replace(/\\/gi, '/');
const PATH_NODE_MODULES = path
	.resolve(PATH_ROOT, 'node_modules')
	.replace(/\\/gi, '/'); // Errm.. I use windows 😬

const baseConfig = {
	input: 'src/entry.ts',
	plugins: {
		preVue: [
			alias({
				entries: [
					{
						find: '@',
						replacement: `${path.resolve(projectRoot, 'src')}`
					},
					{
						find: '@components',
						replacement: `${path.resolve(projectRoot, 'src/lib-components')}`
					},
					{
						find: '@views',
						replacement: `${path.resolve(projectRoot, 'dev/views')}`
					}
				],
				customResolver: resolve({
					extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue']
				})
			})
		],
		replace: {
			'process.env.NODE_ENV': JSON.stringify('production')
		},
		vue: {
			style: {
				preprocessOptions: {
					scss: {
						includePaths: ['node_modules']
					}
				}
			}
		},
		postVue: [
			// Process only `<style module>` blocks.
			PostCSS({
				modules: {
					generateScopedName: '[local]___[hash:base64:5]'
				},
				include: /&module=.*\.css$/
			}),
			// Process all `<style>` blocks except `<style module>`.
			PostCSS({ include: /(?<!&module=.*)\.css$/ })
		],
		babel: {
			exclude: 'node_modules/**',
			extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
			babelHelpers: 'bundled'
		}
	}
};

// ESM/UMD/IIFE shared settings: externals
// Refer to https://rollupjs.org/guide/en/#warning-treating-module-as-external-dependency
const external = [
	// list external dependencies, exactly the way it is written in the import statement.
	// eg. 'jquery'
	'vue'
];

// UMD/IIFE shared settings: output.globals
// Refer to https://rollupjs.org/guide/en#output-globals for details
const globals = {
	// Provide global variable names to replace your external imports
	// eg. jquery: '$'
	vue: 'Vue'
};

// Customize configs for individual targets
const buildFormats = [];
if (!argv.format || argv.format === 'es') {
	const esConfig = {
		...baseConfig,
		input: 'src/entry.esm.ts',
		external,
		output: {
			file: 'dist/silly.esm.js',
			format: 'esm',
			exports: 'named'
		},
		plugins: [
			replace(baseConfig.plugins.replace),
			...baseConfig.plugins.preVue,
			vue(baseConfig.plugins.vue),
			...baseConfig.plugins.postVue,
			babel({
				...baseConfig.plugins.babel,
				presets: [
					[
						'@babel/preset-env',
						{
							targets: esbrowserslist
						}
					]
				]
			}),
			commonjs(),
			scss({
				output: true
			})
		]
	};
	buildFormats.push(esConfig);
}

if (!argv.format || argv.format === 'cjs') {
	const umdConfig = {
		...baseConfig,
		external,
		output: {
			compact: true,
			file: 'dist/silly.ssr.js',
			format: 'cjs',
			name: 'Silly',
			exports: 'auto',
			globals
		},
		plugins: [
			replace(baseConfig.plugins.replace),
			...baseConfig.plugins.preVue,
			vue(baseConfig.plugins.vue),
			...baseConfig.plugins.postVue,
			babel(baseConfig.plugins.babel),
			commonjs(),
			scss({
				output: true
			})
		]
	};
	buildFormats.push(umdConfig);
}

if (!argv.format || argv.format === 'iife') {
	const unpkgConfig = {
		...baseConfig,
		external,
		output: {
			compact: true,
			file: 'dist/silly.min.js',
			format: 'iife',
			name: 'Silly',
			exports: 'auto',
			globals
		},
		plugins: [
			replace(baseConfig.plugins.replace),
			...baseConfig.plugins.preVue,
			vue(baseConfig.plugins.vue),
			...baseConfig.plugins.postVue,
			babel(baseConfig.plugins.babel),
			commonjs(),
			terser({
				output: {
					ecma: 5
				}
			}),
			scss({
				output: true
			})
		]
	};
	buildFormats.push(unpkgConfig);
}

// Export config
export default buildFormats;
