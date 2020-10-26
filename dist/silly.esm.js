import { defineComponent, resolveComponent, openBlock, createBlock, resolveDynamicComponent, withCtx, createVNode, createCommentVNode, renderSlot, ref, toDisplayString, computed, withDirectives, mergeProps, vModelCheckbox, Fragment, renderList, reactive } from 'vue';

var script = defineComponent({
  name: 'SButton',
  // vue component name
  components: {
    Icon: () => Promise.resolve().then(function () { return sIcon; })
  },
  props: {
    href: {
      type: String,
      default: ``
    },
    link: {
      type: String,
      default: ``
    },
    large: {
      type: Boolean,
      default: false
    },
    medium: {
      type: Boolean,
      default: true
    },
    small: {
      type: Boolean,
      default: false
    },
    ghost: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: false
    },
    icon: {
      type: String,
      default: false
    }
  },

  setup(props) {
    const style = [];
    if (props.ghost) style.push('s-button--ghost');
    if (props.color) style.push(`s-button--${props.color}`);
    if (props.large) style.push('s-button--large');
    if (props.small) style.push('s-button--small');
    return {
      elementType: props.href ? 'a' : 'button',
      href: props.href ? props.href : null,
      style
    };
  }

});

const _hoisted_1 = {
  key: 0,
  class: "s-button__icon"
};
const _hoisted_2 = { class: "s-button__text" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Icon = resolveComponent("Icon");

  return (openBlock(), createBlock(resolveDynamicComponent(_ctx.elementType), {
    class: ["s-button", _ctx.style],
    href: _ctx.href
  }, {
    default: withCtx(() => [
      (_ctx.icon)
        ? (openBlock(), createBlock("span", _hoisted_1, [
            createVNode(_component_Icon, { name: "icon" })
          ]))
        : createCommentVNode("", true),
      createVNode("span", _hoisted_2, [
        renderSlot(_ctx.$slots, "default")
      ])
    ]),
    _: 3
  }, 8, ["class", "href"]))
}

script.render = render;

var script$1 = defineComponent({
  name: 'SButtonGroup',
  // vue component name
  props: {
    direction: {
      type: String,
      default: 'horizontal'
    },
    align: {
      type: String,
      default: 'center'
    }
  },

  setup(props) {
    return {
      props
    };
  }

});

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", {
    class: ["s-button-group", [
			`s-button-group--${_ctx.props.align}`,
			`s-button-group--${_ctx.props.direction}`
		]]
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2))
}

script$1.render = render$1;

var script$2 = defineComponent({
  name: 'SInputField',
  // vue component name
  props: {
    type: {
      type: String,
      default: 'text'
    },
    options: {
      type: Array,
      default: []
    },
    label: {
      type: String,
      default: ''
    },
    mode: {
      type: String,
      default: 'default'
    },
    stack: {
      type: Boolean,
      default: false
    }
  },

  setup(props) {
    const elementType = (props === null || props === void 0 ? void 0 : props.options.length) > 0 ? 'select' : 'input';
    const dirty = ref(false);
    const focus = ref(false);
    const empty = ref(true);

    const onFocus = () => focus.value = true;

    const onBlur = () => focus.value = false;

    const onInput = event => empty.value = !!event.target.value;

    const uid = `input-${Math.round(new Date().valueOf() * Math.random()).toString()}`;
    return {
      elementType,
      props,
      uid,
      dirty,
      focus,
      empty,
      onFocus,
      onBlur,
      onInput
    };
  }

});

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", {
    class: ["s-input-text s-input-text", [
			`s-input-text--${_ctx.props.mode}`,
			_ctx.props.stack ? `s-input-text--stack` : null,
			_ctx.dirty ? `s-input-text--is-dirty` : null,
			_ctx.focus ? `s-input-text--has-focus` : null,
			_ctx.empty ? `s-input-text--is-empty` : null
		]]
  }, [
    (openBlock(), createBlock(resolveDynamicComponent(_ctx.elementType), {
      type: _ctx.type,
      class: "s-input-text__control",
      onFocus: _ctx.onFocus,
      onBlur: _ctx.onBlur,
      onInput: _ctx.onInput,
      id: _ctx.uid
    }, null, 8, ["type", "onFocus", "onBlur", "onInput", "id"])),
    (_ctx.props.label)
      ? (openBlock(), createBlock("label", {
          key: 0,
          for: _ctx.uid,
          class: "s-input-text__label"
        }, toDisplayString(_ctx.label), 9, ["for"]))
      : createCommentVNode("", true)
  ], 2))
}

script$2.render = render$2;

var script$3 = defineComponent({
  name: 'SInputField',
  // vue component name
  props: {
    type: {
      type: String,
      default: 'text'
    },
    options: {
      type: Array,
      default: []
    },
    label: {
      type: String,
      default: ''
    },
    mode: {
      type: String,
      default: 'default'
    },
    stack: {
      type: Boolean,
      default: false
    }
  },

  setup(props) {
    const elementType = 'textarea';
    const dirty = ref(false);
    const focus = ref(false);
    const empty = ref(true);

    const onFocus = () => focus.value = true;

    const onBlur = () => focus.value = false;

    const onInput = event => empty.value = !!event.target.value;

    const uid = `input-${Math.round(new Date().valueOf() * Math.random()).toString()}`;
    return {
      elementType,
      props,
      uid,
      dirty,
      focus,
      empty,
      onFocus,
      onBlur,
      onInput
    };
  }

});

function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", {
    class: ["s-input-text-area", [
			`s-input-text-area--${_ctx.props.mode}`,
			_ctx.props.stack ? `s-input-text-area--stack` : null,
			_ctx.dirty ? `s-input-text-area--is-dirty` : null,
			_ctx.focus ? `s-input-text-area--has-focus` : null,
			_ctx.empty ? `s-input-text-area--is-empty` : null
		]]
  }, [
    (openBlock(), createBlock(resolveDynamicComponent(_ctx.elementType), {
      type: _ctx.type,
      class: "s-input-text__control",
      onFocus: _ctx.onFocus,
      onBlur: _ctx.onBlur,
      onInput: _ctx.onInput,
      id: _ctx.uid
    }, null, 8, ["type", "onFocus", "onBlur", "onInput", "id"])),
    (_ctx.props.label)
      ? (openBlock(), createBlock("label", {
          key: 0,
          for: _ctx.uid,
          class: "s-input-text__label"
        }, toDisplayString(_ctx.label), 9, ["for"]))
      : createCommentVNode("", true)
  ], 2))
}

script$3.render = render$3;

var script$4 = defineComponent({
  name: 'SInputFieldGroup',
  // vue component name
  props: {
    direction: {
      type: String,
      default: 'vertical'
    },
    align: {
      type: String,
      default: 'start'
    },
    stack: {
      type: Boolean,
      default: false
    }
  },

  setup(props) {
    return {
      props
    };
  }

});

function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", {
    class: ["s-form", [
			`s-form--${_ctx.props.align}`,
			`s-form--${_ctx.props.direction}`,
			_ctx.props.stack ? `s-form--stack` : ``
		]]
  }, [
    renderSlot(_ctx.$slots, "default", { props: _ctx.props })
  ], 2))
}

script$4.render = render$4;

var script$5 = defineComponent({
  name: 'SToggle',
  // vue component name
  props: {
    type: {
      type: String,
      default: 'checkbox'
    },
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: Boolean,
      default: false
    }
  },

  setup(props, {
    emit
  }) {
    const dirty = ref(false);
    const focus = ref(false);

    const onFocus = () => focus.value = true;

    const onBlur = () => focus.value = false; // Get first value (most of the times this is modelValue)
    // Exception if it's being used like this v-model:YourKey=""
    // Then it will be props.YourKey


    const value = props.modelValue;
    const isChecked = computed({
      get: () => value,
      set: newValue => {
        dirty.value = true;
        emit('update:modelValue', newValue);
      }
    }); // Above function is same as below but I added the dirty ref
    // const isChecked = useModelWrapper(props, emit)

    const uid = `input-${Math.round(new Date().valueOf() * Math.random()).toString()}`;
    return {
      isChecked,
      onFocus,
      onBlur,
      dirty,
      focus,
      uid
    };
  }

});

const _hoisted_1$1 = { class: "s-toggle__text" };

function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", {
    class: ["s-toggle", `s-toggle--${_ctx.type}`]
  }, [
    withDirectives(createVNode("input", mergeProps({
      id: _ctx.uid,
      class: "s-toggle__control",
      type: "checkbox",
      "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (_ctx.isChecked = $event))
    }, _ctx.$attrs), null, 16, ["id"]), [
      [vModelCheckbox, _ctx.isChecked]
    ]),
    createVNode("label", {
      for: _ctx.uid,
      class: "s-toggle__label"
    }, [
      createVNode("span", _hoisted_1$1, toDisplayString(_ctx.label), 1)
    ], 8, ["for"])
  ], 2))
}

script$5.render = render$5;

var script$6 = defineComponent({
  name: 'SNavigation',
  // vue component name
  props: {
    menu: {
      type: Array,
      default: []
    }
  },

  setup(props) {
    const getElementType = item => {
      let elementType = 'a';
      if (item.click) elementType = 'button';
      if (item.element) elementType = item.element;
      return elementType;
    };

    return {
      menu: props.menu,
      getElementType
    };
  }

});

const _hoisted_1$2 = { class: "s-navigation" };
const _hoisted_2$1 = { class: "s-navigation__list" };
const _hoisted_3 = { class: "s-navigation__text" };
const _hoisted_4 = { class: "s-navigation__text" };

function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("nav", _hoisted_1$2, [
    createVNode("ul", _hoisted_2$1, [
      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.menu, (item, idx) => {
        return (openBlock(), createBlock("li", {
          class: "s-navigation__item",
          key: idx
        }, [
          (item.route)
            ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.getElementType(item)), {
                key: 0,
                href: item.route,
                class: "s-navigation__link"
              }, {
                default: withCtx(() => [
                  createVNode("span", _hoisted_3, toDisplayString(item.name), 1)
                ]),
                _: 2
              }, 1032, ["href"]))
            : createCommentVNode("", true),
          (item.click)
            ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.getElementType(item)), {
                key: 1,
                onClick: item.click,
                class: "s-navigation__link"
              }, {
                default: withCtx(() => [
                  createVNode("span", _hoisted_4, toDisplayString(item.name), 1)
                ]),
                _: 2
              }, 1032, ["onClick"]))
            : createCommentVNode("", true),
          renderSlot(_ctx.$slots, "default")
        ]))
      }), 128 /* KEYED_FRAGMENT */))
    ])
  ]))
}

script$6.render = render$6;

var script$7 = defineComponent({
  name: 'SHeader',
  // vue component name
  props: {
    autoHide: {
      type: Boolean,
      default: false
    }
  },

  setup(props, context) {
    // console.log(context.slots.left, context.slots['left']);
    if (props.autoHide) {
      console.log('yes, this should autohide');
    }

    const {
      left,
      middle,
      right
    } = context.slots;
    const hasSlot = reactive({
      left: left ? !!left() : false,
      middle: middle ? !!middle() : false,
      right: right ? !!right() : false
    });
    return {
      hasSlot
    };
  }

});

const _hoisted_1$3 = { class: "s-header" };
const _hoisted_2$2 = {
  key: 0,
  class: "s-header__left"
};
const _hoisted_3$1 = {
  key: 1,
  class: "s-header__middle"
};
const _hoisted_4$1 = {
  key: 2,
  class: "s-header__right"
};

function render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("header", _hoisted_1$3, [
    (_ctx.hasSlot.left)
      ? (openBlock(), createBlock("div", _hoisted_2$2, [
          renderSlot(_ctx.$slots, "left")
        ]))
      : createCommentVNode("", true),
    (_ctx.hasSlot.middle)
      ? (openBlock(), createBlock("div", _hoisted_3$1, [
          renderSlot(_ctx.$slots, "middle")
        ]))
      : createCommentVNode("", true),
    (_ctx.hasSlot.right)
      ? (openBlock(), createBlock("div", _hoisted_4$1, [
          renderSlot(_ctx.$slots, "right")
        ]))
      : createCommentVNode("", true)
  ]))
}

script$7.render = render$7;

const _hoisted_1$4 = { class: "icon" };

function render$8(_ctx, _cache) {
  return (openBlock(), createBlock("span", _hoisted_1$4, "Fuck yeah"))
}

const script$8 = {};
script$8.render = render$8;

var sIcon = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': script$8
});

/* eslint-disable import/prefer-default-export */

var components = /*#__PURE__*/Object.freeze({
	__proto__: null,
	SButton: script,
	SButtonGroup: script$1,
	SInputText: script$2,
	SInputTextArea: script$3,
	SForm: script$4,
	SToggle: script$5,
	SNavigation: script$6,
	SHeader: script$7,
	SIcon: script$8
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
export { script as SButton, script$1 as SButtonGroup, script$4 as SForm, script$7 as SHeader, script$8 as SIcon, script$2 as SInputText, script$3 as SInputTextArea, script$6 as SNavigation, script$5 as SToggle };
