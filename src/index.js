const plugin = require('tailwindcss/plugin')

const buttons = plugin.withOptions(function (options = {}) {
  return function({ addComponents, theme }) {
    addComponents({
      // styling for button and inner content
      '.button, .button span, .button i, .button-text': {
        'font-size':                theme('button.font.size.base'),
        'line-height':              theme('button.font.lineHeight'),
      },

      // button design
      '.button': {
        'font-family':              theme('button.font.family'),
        'display':                  "inline-block",
        'vertical-align':           "middle",
        'text-align':               "center",
        'padding':                  theme('button.size.padding'),
        'margin':                   theme('button.size.margin'),
        'cursor':                   "pointer",
        'text-decoration':          "none",
        'background-color':         theme('button.colors.base.background.base'),
        'color':                    theme('button.colors.base.color.base'),
        'border-color':             theme('button.colors.base.border'),
        'border-radius':            theme('button.border.radius'),
        'border-width':              theme('button.border.width'),
        'border-style':             theme('button.border.style'),
        '-webkit-appearance':       "none",
        'outline':                  "none"
      },
      '.button:active': {
        'background-color':         theme('button.colors.base.background.active'),
        'color':                    theme('button.colors.base.color.active'),
      },
      '.button:focus': {
        'background-color':         theme('button.colors.base.background.focus'),
        'color':                    theme('button.colors.base.color.focus'),
      },
      '.button:not(.disabled):not([disabled]):not([aria-disabled]):hover': {
        'background-color':         theme('button.colors.base.background.hover'),
        'color':                    theme('button.colors.base.color.hover'),
      },

      // button sizing
      '.button-group.tiny .button, .button.tiny': { 'font-size': theme('button.font.size.tiny') },
      '.button-group.small .button, .button.small': { 'font-size': theme('button.font.size.small') },
      '.button-group.large .button, .button.large': { 'font-size': theme('button.font.size.large') },
      '.button.expanded': {
        'display':      "block",
        'width':        "100%",
        'margin-right': "0",
        'margin-left':  "0",
      },

      // disabled buttons
      '.button.disabled, .button[disabled], .button[aria-disabled]': {
        'opacity':  theme('button.disabled.opacity'),
        'cursor':   theme('button.disabled.cursor'),
      },

      // dropdown buttons
      '.button.dropdown::after': {
        'width':                "0",
        'height':               "0",
        'border-style':         "solid",
        'border-width':         "0.4em",
        'border-bottom-width':  "0.4em",
        'content':              "''",
        'border-bottom-width':  "0",
        'border-color':         theme('button.colors.base.color.base') + " transparent transparent",
        'position':             "relative",
        'top':                  "0.4em",
        'display':              "inline-block",
        'float':                "right",
        'margin-left':          "1em",
      },

      // button group
      '.button-group': {
        'margin-bottom': "1rem",
        'display': "-webkit-box",
        'display': "-webkit-flex",
        'display': "-ms-flexbox",
        'display': "flex",
        '-webkit-flex-wrap': "wrap",
        '-ms-flex-wrap': "wrap",
        'flex-wrap': "wrap",
        '-webkit-box-align': "stretch",
        '-webkit-align-items': "stretch",
        '-ms-flex-align': "stretch",
        'align-items': "stretch",
        '-webkit-box-flex': "1",
        '-webkit-flex-grow': "1",
        '-ms-flex-positive': "1",
        'flex-grow': "1"
      },
      '.button-group .button': {
        'margin': "0",
        'margin-right': "0px",
        'margin-bottom': "0px",
        'margin-right': "1px",
        'margin-bottom': "1px",
        'font-size': "0.9rem",
        '-webkit-box-flex': "0",
        '-webkit-flex': "0 0 auto",
        '-ms-flex': "0 0 auto",
        'flex': "0 0 auto",
      },
      '.button-group.no-gaps .button': {
        'margin-right': "-0.0625rem"
      },
      '.button-group.expanded .button': {
        '-webkit-box-flex': "1",
        '-webkit-flex': "1 1 0px",
        '-ms-flex': "1 1 0px",
        'flex': "1 1 0px"
      },

      // submit button
      '.button.submit, .button[type="submit"]': {
        'background-color': theme('button.colors.submit.background.base'),
        'color': theme('button.colors.submit.color.base'),
      },
      '.button.submit:active, .button[type="submit"]:active': {
        'background-color': theme('button.colors.submit.background.active'),
        'color': theme('button.colors.submit.color.active'),
      },
      '.button.submit:not(.disabled):not([disabled]):not([aria-disabled]):focus, .button[type="submit"]:not(.disabled):not([disabled]):not([aria-disabled]):focus': {
        'background-color': theme('button.colors.submit.background.focus'),
        'color': theme('button.colors.submit.color.focus'),
      },
      '.button.submit:not(.disabled):not([disabled]):not([aria-disabled]):hover, .button[type="submit"]:not(.disabled):not([disabled]):not([aria-disabled]):hover': {
        'background-color': theme('button.colors.submit.background.hover'),
        'color': theme('button.colors.submit.color.hover'),
      },

      // reset button
      '.button.reset, .button[type="reset"]': {
        'background-color': theme('button.colors.reset.background.base'),
        'color': theme('button.colors.reset.color.base'),
      },
      '.button.reset:active, .button[type="reset"]:active': {
        'background-color': theme('button.colors.reset.background.active'),
        'color': theme('button.colors.reset.color.active'),
      },
      '.button.reset:not(.disabled):not([disabled]):not([aria-disabled]):focus, .button[type="reset"]:not(.disabled):not([disabled]):not([aria-disabled]):focus': {
        'background-color': theme('button.colors.reset.background.focus'),
        'color': theme('button.colors.reset.color.focus'),
      },
      '.button.reset:not(.disabled):not([disabled]):not([aria-disabled]):hover, .button[type="reset"]:not(.disabled):not([disabled]):not([aria-disabled]):hover': {
        'background-color': theme('button.colors.reset.background.hover'),
        'color': theme('button.colors.reset.color.hover'),
      },

      // info button
      '.button.info': {
        'background-color': theme('button.colors.info.background.base'),
        'color': theme('button.colors.info.color.base'),
      },
      '.button.info:active': {
        'background-color': theme('button.colors.info.background.active'),
        'color': theme('button.colors.info.color.active'),
      },
      '.button.info:not(.disabled):not([disabled]):not([aria-disabled]):focus': {
        'background-color': theme('button.colors.info.background.focus'),
        'color': theme('button.colors.info.color.focus'),
      },
      '.button.info:not(.disabled):not([disabled]):not([aria-disabled]):hover': {
        'background-color': theme('button.colors.info.background.hover'),
        'color': theme('button.colors.info.color.hover'),
      },

      // success button
      '.button.success': {
        'background-color': theme('button.colors.success.background.base'),
        'color': theme('button.colors.success.color.base'),
      },
      '.button.success:active': {
        'background-color': theme('button.colors.success.background.active'),
        'color': theme('button.colors.success.color.active'),
      },
      '.button.success:not(.disabled):not([disabled]):not([aria-disabled]):focus': {
        'background-color': theme('button.colors.success.background.focus'),
        'color': theme('button.colors.success.color.focus'),
      },
      '.button.success:not(.disabled):not([disabled]):not([aria-disabled]):hover': {
        'background-color': theme('button.colors.success.background.hover'),
        'color': theme('button.colors.success.color.hover'),
      },

      // warning button
      '.button.warning': {
        'background-color': theme('button.colors.warning.background.base'),
        'color': theme('button.colors.warning.color.base'),
      },
      '.button.warning:active': {
        'background-color': theme('button.colors.warning.background.active'),
        'color': theme('button.colors.warning.color.active'),
      },
      '.button.warning:not(.disabled):not([disabled]):not([aria-disabled]):focus': {
        'background-color': theme('button.colors.warning.background.focus'),
        'color': theme('button.colors.warning.color.focus'),
      },
      '.button.warning:not(.disabled):not([disabled]):not([aria-disabled]):hover': {
        'background-color': theme('button.colors.warning.background.hover'),
        'color': theme('button.colors.warning.color.hover'),
      },

      // alert button
      '.button.alert': {
        'background-color': theme('button.colors.alert.background.base'),
        'color': theme('button.colors.alert.color.base'),
      },
      '.button.alert:active': {
        'background-color': theme('button.colors.alert.background.active'),
        'color': theme('button.colors.alert.color.active'),
      },
      '.button.alert:not(.disabled):not([disabled]):not([aria-disabled]):focus': {
        'background-color': theme('button.colors.alert.background.focus'),
        'color': theme('button.colors.alert.color.focus'),
      },
      '.button.alert:not(.disabled):not([disabled]):not([aria-disabled]):hover': {
        'background-color': theme('button.colors.alert.background.hover'),
        'color': theme('button.colors.alert.color.hover'),
      },
    })
  }
}, function (options) {
  return {
    theme: {
      button: {
        font: {
          family: "inherit",
          size: {
            base:   "0.9rem",
            tiny:   "0.6rem",
            small:  "0.75rem",
            large:  "1.25rem",
          },
          lineHeight: "1",
        },
        border: {
          radius:   0,
          style:    "solid",
          width:    "1px",
        },
        size: {
          margin: "0 0 1rem 0",
          padding: "0.85em 1em",
        },
        disabled: {
          opacity: "0.25",
          cursor:  "not-allowed",
        },
        colors: {
          alert: {
            background: {
              base:    "#cc4b37",
              active:  "#a53b2a",
              focus:   "#a53b2a",
              hover:   "#a53b2a",
            },
            color: {
              base:    "#fefefe",
              active:  "#fefefe",
              focus:   "#fefefe",
              hover:   "#fefefe",
            }
          },
          base: {
            background: {
              base:    "#2563EB",
              active:  "#1E40AF",
              focus:   "#1E40AF",
              hover:   "#1E40AF",
            },
            border: "transparent",
            color: {
              base:    "#fefefe",
              active:  "#fefefe",
              focus:   "#fefefe",
              hover:   "#fefefe",
            },
          },
          info: {
            background: {
              base:    "#1779ba",
              active:  "#126195",
              focus:   "#126195",
              hover:   "#126195",
            },
            color: {
              base: "#fefefe",
              active:  "#fefefe",
              focus:   "#fefefe",
              hover:   "#fefefe",
            }
          },
          reset: {
            background: {
              base:    "#767676",
              active:  "#0a0a0a",
              focus:   "#0a0a0a",
              hover:   "#0a0a0a",
            },
            color: {
              base:    "#fefefe",
              active:  "#fefefe",
              focus:   "#fefefe",
              hover:   "#fefefe",
            }
          },
          submit: {
            background: {
              base:    "#22c55e",
              active:  "#15803d",
              focus:   "#15803d",
              hover:   "#15803d",
            },
            color: {
              base:    "#fefefe",
              active:  "#fefefe",
              focus:   "#fefefe",
              hover:   "#fefefe",
            }
          },
          success: {
            background: {
              base:    "#3adb76",
              active:  "#22bb5b",
              focus:   "#22bb5b",
              hover:   "#22bb5b",
            },
            color: {
              base:    "#fefefe",
              active:  "#fefefe",
              focus:   "#fefefe",
              hover:   "#fefefe",
            }
          },
          warning: {
            background: {
              base:    "#ffae00",
              active:  "#cc8b00",
              focus:   "#cc8b00",
              hover:   "#cc8b00",
            },
            color: {
              base:    "#fefefe",
              active:  "#fefefe",
              focus:   "#fefefe",
              hover:   "#fefefe",
            }
          },
        },
      },
    },
  }
})

module.exports = buttons
