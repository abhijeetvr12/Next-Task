"use client";
import { useState } from "react";

import { RadioGroup } from "@headlessui/react";
const product = {
    colors: [
        { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
        { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
        { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
      ]
};

function classNames(...classes: string[]): string {
    return classes.filter(Boolean).join(" ");
  }

function HomeSectionCard() {
    const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  return (
    <div className="cursor-pointer flex flex-col item-center justify-center text-center bg-white rounded-lg shadow-lg overflow-hidden  mx-3 ">
    <div className="h-[20rem] w-[15rem] ">
      <img
        className="object-cover object-top w-full h-full"
        src="https://hespokestyle.com/wp-content/uploads/2023/08/classic-navy-blue-brass-button-sport-coat-he-spoke-style-shop-960x1074@2x.png"
        alt=""
      />
    </div>
    <div className="p-4 flex flex-col justify-center items-center ">
      <p className="  opacity-60 ">Premanent Collection</p>
      <h3 className=" font-lg text-2xl text-gray-900">
        Premium Suit
      </h3>
      <RadioGroup
                    value={selectedColor}
                    onChange={setSelectedColor}
                    className="mt-4"
                  >
                    <RadioGroup.Label className="sr-only">
                      Choose a color
                    </RadioGroup.Label>
                    <div className="flex items-center space-x-3">
                      {product.colors.map((color) => (
                        <RadioGroup.Option
                          key={color.name}
                          value={color}
                          className={({ active, checked }) =>
                            classNames(
                              color.selectedClass,
                              active && checked ? "ring ring-offset-1" : "",
                              !active && checked ? "ring-2" : "",
                              "relative -m-0.5 flex cursor-pointer items-center justify-center rounded focus:outline-none"
                            )
                          }
                        >
                          <RadioGroup.Label as="span" className="sr-only">
                            {color.name}
                          </RadioGroup.Label>
                          <span
                            aria-hidden="true"
                            className={classNames(
                              color.class,
                              "h-5 w-5  border rounded  border-black border-opacity-10"
                            )}
                          />
                        </RadioGroup.Option>
                      ))}
                    </div>
     </RadioGroup>
      <p className="mt-2 tex-sm text-gray-500">$790</p>
    </div>
  </div>

  )
}

export default HomeSectionCard