import React, { HTMLAttributes } from "react";
import { Carousel } from "./carousel";
import "./carousel.css";

/**
 * The purpose of the CarouselHandler is basically to covert each Elements/Items/Images into the
 * desired number of rows, i.e elements=[1, 2, 3, 4]  and rows=2 will convert it into [[1,2], [3, 4]]
 * and pass it to the main slider Carousel. The Carousel will then receive 2 items, [1,2] and [3, 4]
 */
export const CarouselHandler = (props) => {
  const { rows = 1, ...restProps } = props;
  const { elements } = props;
  const str =
    elements?.length > 0
      ? elements
      : [
          "https://via.placeholder.com/600x400?text=A",
          "https://via.placeholder.com/600x400?text=B",
          "https://via.placeholder.com/600x400?text=C",
          "https://via.placeholder.com/600x400?text=D",
          "https://via.placeholder.com/600x400?text=E",
          "https://via.placeholder.com/600x400?text=F",
          "https://via.placeholder.com/600x400?text=G",
          "https://via.placeholder.com/600x400?text=H",
          "https://via.placeholder.com/600x400?text=I",
        ];

  const num_col = rows;
  // group the elements into cols of num_rows
  const cols = str.reduce((acc, val, i) => {
    if (i % num_col === 0) {
      acc.push([val]);
    } else {
      acc[acc.length - 1].push(val);
    }
    return acc;
  }, []);

  const calc_height = 100 / num_col;
  // map over the cols and render each col as a div containing X images
  const x = cols.map((col, colIndex) => {
    return (
      <div className={`h-full w-full`} key={colIndex}>
        <div className={` flex flex-col w-full rowH-${num_col}`} key={colIndex}>
          {col.map((element, index) => {
            return (
              <div className="w-full h-full" key={index}>
                <img
                  className={`w-full h-full object-cover py-2 px-2`}
                  src={`${element}`}
                  alt="placeholder image"
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  });

  return <Carousel {...props} children={x} />;
};
