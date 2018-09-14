# {{ name }}

## Usage

Install the dependencies

```bash
npm install
```

Once the installation is done, you can run some commands inside the project folder:

To build the sketch plugin:

```bash
npm run build:sketch
```

To hot reload the sketch plugin on every change:

```bash
npm run start:sketch
```

To build the web interface:

```bash
npm run build:web
```

To hot reload the web interface on every change:

```bash
npm run start:web
```

## Design tokens

### [Colors](./src/design-system/tokens/colors.json)

This file defines the design system's colors.

#### Specification

At the top level, the file is an object containing a `"colors"` array.

Each color has the following attributes:

|Attribute|Type|Required|Description|
|---|---|---|---|
|`id`|`string`|Yes|The unique `id` of the color. This should be _code-friendly_: it must not contain spaces or unusual characters, since it will be used as a variable name.|
|`name`|`string`|Yes|The human-readable name of the color.|
|`value`|`string`|Yes|The color value, in CSS format. Any valid CSS value is valid here: e.g. `blue`, `fce`, `#ffccee`, `rgb(0,0,100)`, `rgba(255,255,255,0.3)`|
|`comment`|`string`|No|An optional description of the color, explaining contextual information, such as how it should be used. |

#### Color Type

Colors may be referenced from other files by their `id` (a `string`). This helps us achieve a single source of truth for colors.

Colors may also appear _inline_ in other files (where a CSS color value is given directly), although this is discouraged for colors beyond `'black'`, `'white'`, and `'transparent'`.

### [Text Styles](./src/design-system/tokens/textStyles.json)

This file defines the design system's text styles.

At the top level, the file is an object containing a `"styles"` array and optionally a `"defaultStyleName"` string.

Each text style within the `"styles"` array has the following attributes:

|Attribute|Type|Required|Description|
|---|---|---|---|
|`id`|`string`|Yes|The unique `id` of the text style. This should be _code-friendly_: it must not contain spaces or unusual characters, since it will be used as a variable name.|
|`name`|`string`|Yes|The human-readable name of the text style.|
|`comment`|`string`|No|An optional description of the text style, explaining contextual information, such as how it should be used. |
|`fontFamily`|`string`|No|The name of the font family.|
|`fontWeight`|`string`|No|The weight of the font, in CSS values: a string in increments of 100, from 100 to 900.|
|`fontSize`|`number`|No|The size of the font, in pixels.|
|`lineHeight`|`number`|No|The height of each line of text, in pixels.|
|`letterSpacing`|`number`|No|Uniformly adjust the spacing between each character. A positive number indicates more space, while a negative number indicates less space.|
|`color`|[`Color`](#color-type)|No|The CSS color value or the `id` of the color defined in `colors.json`.|

The optional `"defaultStyleName"` determines the style of the default text style. This value should be the `id` of one of the text styles in the `"styles"` array.

### [Shadows](./src/design-system/tokens/shadows.json)

This file defines the design system's shadows.

At the top level, the file is an object containing a `"shadows"` array and optionally a `"defaultShadowName"` string.

Each shadow within the `"shadows"` array has the following attributes:

|Attribute|Type|Required|Description|
|---|---|---|---|
|`id`|`string`|Yes|The unique `id` of the shadow. This should be _code-friendly_: it must not contain spaces or unusual characters, since it will be used as a variable name.|
|`name`|`string`|Yes|The human-readable name of the shadow.|
|`comment`|`string`|No|An optional description of the shadow, explaining contextual information, such as how it should be used. |
|`x`|`number`|No|The horizontal offset of the shadow, in pixel.|
|`y`|`number`|No|The vertical offset of the shadow, in pixel.|
|`blur`|`number`|No|The blur radius of the shadow, in pixels.|
|`color`|[`Color`](#color-type)|No|The CSS color value or the `id` of the color defined in `colors.json`.|

The optional `"defaultShadowName"` determines the style of the default shadow. This value should be the `id` of one of the shadows in the `"shadows"` array. This value will not be used in code.
