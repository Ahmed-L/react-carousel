# vs-react-component-carousel

A react and tailwind component library.

## Installation

Use the package manager npm to install the package.

```bash
npm install vs-react-component-carousel
or
yarn add vs-react-component-carousel
```

This component library internally uses TailwindCSS to compose it's design. So TailwindCSS need to be installed as dependency.

```bash
npm install -D tailwindcss postcss autoprefixer
or
yarn add --dev vs-react-component-carousel
```

after that initialise Tailwind in the project.

```bash
npx tailwindcss init -p
```

Allow Tailwind compiler to apply css on the library code.

```bash
module.exports = {
  content: [
    ...
    './node_modules/vs-react-component-carousel/**/*.{js,ts,jsx,tsx,mdx,cjs}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Set up the Tailwind directives inside the global css file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Usage

```javascript
import { CarouselHandler } from "vs-react-component-carousel";

// ele = your images URL list
<CarouselHandler
  autoplay={false}
  rows={2}
  elements={ele}
  show={1}
  slideby={1}
/>;
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
