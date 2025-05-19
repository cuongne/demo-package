'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "button {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  border-radius: 0.75rem;\n  border-width: 1px;\n  text-align: center;\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 300ms;\n}\n\nbutton:hover {\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  filter: brightness(1.25);\n}\n\nbutton:disabled {\n  background-color: #737373;\n  border-color: #737373;\n  color: #e5e5e5;\n  cursor: not-allowed;\n}\n";
styleInject(css_248z);

const Button = ({ variant, initialValue = 0, onValueChange, ...props }) => {
    const [count, setCount] = react.useState(initialValue);
    const buttonStyle = () => {
        const propStyle = props.style ?? {};
        if (props.disabled)
            return propStyle;
        if (variant === 'primary')
            return {
                borderColor: '#6366F1',
                backgroundColor: '#6366F1',
                color: '#FAFAFA',
                ...propStyle
            };
        if (variant === 'secondary')
            return {
                borderColor: '#6366F1',
                backgroundColor: '#FAFAFA',
                color: '#6366F1',
                ...propStyle
            };
        return propStyle;
    };
    const handleIncrement = () => {
        const newValue = count + 1;
        setCount(newValue);
        onValueChange?.(newValue);
    };
    const handleDecrement = () => {
        const newValue = count - 1;
        setCount(newValue);
        onValueChange?.(newValue);
    };
    return (jsxRuntime.jsxs("div", { style: { display: 'flex', alignItems: 'center', gap: '8px' }, children: [jsxRuntime.jsx("button", { ...props, style: buttonStyle(), onClick: handleDecrement, children: "-" }), jsxRuntime.jsx("span", { children: count }), jsxRuntime.jsx("button", { ...props, style: buttonStyle(), onClick: handleIncrement, children: "+" })] }));
};

exports.Button = Button;
//# sourceMappingURL=index.js.map
