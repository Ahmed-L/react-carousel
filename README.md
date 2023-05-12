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
import { Carousel } from "vs-react-component-carousel";

function App() {
  // ele = your images URL list
  const ele = [
    "https://via.placeholder.com/600x400?text=A",
    "https://via.placeholder.com/600x400?text=B",
    "https://via.placeholder.com/600x400?text=C",
    "https://via.placeholder.com/600x400?text=D",
  ];
  return (
    <div className="flex w-screen h-screen relative">
      <Carousel
        autoplay={false}
        rows={2}
        elements={ele}
        showItemsPerRow={3}
        paginationClassNames={"dot"}
        paginationActiveClassNames={"activeDot"}
        showPagination={true}
        paginationPosition={"bottom"}
        showIndicators={true}
        leftIndicatorClassNames={"left_btn"}
        rightIndicatorClassNames={"right_btn"}
        carouselContainerClassNames={"container_style"}
      />
    </div>
  );
}
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
