import tippy from 'tippy.js';

export default (node, params = {}) => {
  const label = node.getAttribute('aria-label');

  // Select tooltip text by priority
  const content = params.content || node.title || label;

  if (!label) node.setAttribute('aria-label', content);

  // Remove HTML default behavior (title as tooltip)
  node.title = '';

  const tooltip = tippy(node, {content, ...params});

  return {
    update: (newProps) => tooltip.setProps({ content, ...newProps }),
    destroy: () => tooltip.destroy(),
  };
};
