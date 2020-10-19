import { defineComponent, openBlock, createBlock, resolveDynamicComponent, withCtx, createVNode, renderSlot } from 'vue';

var script = defineComponent({
  name: 'SButton',

  // vue component name
  setup() {
    const elementType = 'button';
    return {
      elementType
    };
  }

});

const _hoisted_1 = { class: "s-button__text" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock(resolveDynamicComponent("elementType"), { class: "s-button" }, {
    default: withCtx(() => [
      createVNode("span", _hoisted_1, [
        renderSlot(_ctx.$slots, "default")
      ])
    ]),
    _: 3
  }))
}

script.render = render;

/* eslint-disable import/prefer-default-export */

var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  SButton: script
});

// Import vue components

const install = function installSilly(app) {
  Object.entries(components).forEach(([componentName, component]) => {
    app.component(componentName, component);
  });
}; // Create module definition for Vue.use()


var entry_esm = {
  install
}; // To allow individual component use, export components

export default entry_esm;
export { script as SButton };
