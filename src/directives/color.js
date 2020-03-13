export default {
  // bind(el, binding, vnode)
  bind(el, binding) {
    console.log(binding);
    let delay = 0;
    if (binding.modifiers.delay) delay = 3000;
    setTimeout(() => {
      console.log(1);
      const { arg, value } = binding;
      el.style[arg] = value;
    }, delay);
  },
};
