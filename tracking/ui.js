
const UI = {};

UI.addControls = function(container, descriptor, onChange) {
  const values = {};
  let hold = true;

  const inputs = addControl(container, {children: descriptor}, (key, value) => {
    values[key] = value;
    if (!hold) {
      onChange(values);
    }
  });

  for (const input of inputs) {
    input.onchange();
  }
  hold = false;
  onChange(values);
};

function addControl(container, descriptor, onChange, key = '', depth = -1) {
  const results = [];
  const children = [];

  if (descriptor.type) {
    const div = document.createElement('div');
    div.style.display = 'flex';
    container.append(div);

    const label = document.createElement('label');
    label.style.flexGrow = 1;
    label.style.paddingLeft = `${24 * depth}px`;
    label.innerText = descriptor.name;
    div.append(label);

    const input = document.createElement('input');
    input.type = descriptor.type;
    input.style.maxWidth = '60px';
    div.append(input);
    results.push(input);
    
    if (descriptor.type === 'checkbox') {
      input.checked = descriptor.value;
      input.onchange = () => {
        onChange(key, input.checked);
        for (const childInput of children) {
          childInput.disabled = !input.checked;
        }
      }
    } else if (descriptor.type === 'number') {
      input.value = descriptor.value;
      input.onchange = () => onChange(key, Number(input.value));
    } else {
      input.value = descriptor.value;
      input.onchange = () => onChange(key, input.value);
    }
  }

  if (descriptor.children) {
    const childContainer = document.createElement('div');
    container.append(childContainer);
    for (const childKey in descriptor.children) {
      children.push(...addControl(childContainer, descriptor.children[childKey], onChange, key ? `${key}.${childKey}` : childKey, depth + 1));
    }
  }

  results.push(...children);
  return results;
}
