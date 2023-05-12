import { Carousel } from "./lib";
import "./App.css";

function App() {
  const ele = [
    "https://via.placeholder.com/600x400?text=A",
    "https://via.placeholder.com/600x400?text=B",
    "https://via.placeholder.com/600x400?text=C",
    "https://via.placeholder.com/600x400?text=D",
    "https://via.placeholder.com/600x400?text=E",
    "https://via.placeholder.com/600x400?text=F",
    "https://via.placeholder.com/600x400?text=G",
    "https://via.placeholder.com/600x400?text=H",
  ];
  return (
    <div className="flex w-screen h-screen relative bg-slate-800">
      <Carousel
        autoplay={false}
        rows={2}
        elements={ele}
        showItemsPerRow={3}
        dotsClassNames={"dot"}
        dotActiveClassNames={"activeDot"}
        showIndicators={true}
        leftIndicatorClassNames={"left_btn"}
        rightIndicatorClassNames={"right_btn"}
        carouselContainerClassNames={"container_style"}
      />
    </div>
  );
}

export default App;
