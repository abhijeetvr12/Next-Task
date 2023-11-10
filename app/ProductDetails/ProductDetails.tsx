"use client";
import { useState } from "react";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { RadioGroup } from "@headlessui/react";
import {
  Avatar,
  Box,
  Button,
  Grid,
  IconButton,
  LinearProgress,
  Rating,
} from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HomeSectionCard from "./HomeSectionCard";

const product = {
  name: "Pink Blouse",
  price: "$192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Designers", href: "#" },
    { id: 2, name: "Store", href: "#" },
  ],
  images: [
    {
      src: "https://i.ebayimg.com/images/g/mJ8AAOSwa~dkFHvf/s-l1600.png",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://i.ebayimg.com/images/g/J0oAAOSwlzZkFHvf/s-l1600.png",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://i.ebayimg.com/images/g/F1AAAOSwwdJkFHvf/s-l1600.png",
      alt: "Model wearing plain gray basic tee.",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "1 Seater", inStock: true },
    { name: "2 Seater", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
  ],
  description:
    "Powered by a 6.2L LT2 V8, this mid-engine masterpiece boasts an impressive pedigree and is a sports car purpose-built to take on all challengers.  ",
  highlights: [
    "Sofas are typically upholstered with various types of fabrics or leather, providing a soft and comfortable surface for sitting or lounging.",
    "The frame of a sofa is the structural component that supports the weight and provides stability.",
    "Sofas often have armrests on either side, providing a place to rest the arms and enhancing comfort while sitting",
  ],
  details:
    "Rocketing a quarter-mile in just 11.2 seconds with an available 495 horsepower,† the LT2 V8 engine in Stingray is engineered to impress just about any driver.",
};
const reviews = { href: "#", average: 4, totalCount: 117 };

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }
function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetails() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);
  //   const navigate = useNavigate();
  //   const handleAddToCart =()=>{
  //     navigate("/cart")
  //   }

  return (
    <div className="bg-white lg:px-20">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a
                    href={breadcrumb.href}
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    {breadcrumb.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a
                href={product.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product.name}
              </a>
            </li>
          </ol>
        </nav>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10">
          {/* Image gallery */}
          <div className="flex flex-row item-center">
            <div className="flex flex-col flex-wrap space-x-5  ">
              {product.images.map((item, index) => (
                <div
                  key={index}
                  className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[8rem] max-h-[8rem] mt-4"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              ))}
            </div>
            <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
              <img
                src={product.images[0].src}
                alt={product.images[0].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          {/* Product info */}
          <div className="lg:col-span-1 maxt-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24">
            <div className="lg:col-span-2 ">
              <h1 className="text-lg lg:text-3xl font-bold text-gray-900">
                Pink Blouse
              </h1>
              {/* Options */}
              <div className="mt-4 lg:row-span-3 lg:mt-0">
                <h2 className="sr-only">Product information</h2>
                <div className="flex space-x-5 item-center text-lg lg:text-xl textgray900 mt-3">
                  <p className="font-semibold">$1,490</p>
                  {/* <p className="opacity-50 line-through">221</p>
                <p className="text-green-600 font-semibold">5% off</p> */}
                </div>
                <h1 className="text-lg lg:text-l text-gray-900 opacity-60 pt-1 mt-3">
                  As we live, our hearts turn colder. Cause pain is what we go
                  through as we become older. We get insulted by others, lose
                  trust for those others. We get back stabbed by friends. It
                  becomes harder for us to give others a hand. We get our heart
                  broken by people we love, even that we give them all we have.
                  Then we lose family over time. What else could rust the heart
                  more over time? Blackgold.
                </h1>
              </div>

              {/* Reviews */}
              <div className="mt-6 ">
                <div className="flex item-center space-x-3">
                  <Rating name="read-only" value={4} readOnly />
                  <p className="opacity-50 text-sm ">100 reviews</p>
                  {/* <p className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    215 Reviews
                  </p> */}
                </div>
              </div>

              <form className="mt-10 ">
                {/* Colors  */}
                <div className="mb-10">
                  <h3 className="text-sm font-medium text-gray-900">Color</h3>

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
                              "h-8 w-8  border rounded  border-black border-opacity-10"
                            )}
                          />
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                <div className="  ">
                  <Button
                    className=" bg-black  "
                    variant="contained"
                    sx={{ px: "2rem", py: "0.6rem", mr: "2rem" }}
                  >
                    Add To Cart
                  </Button>

                  <IconButton color="error" aria-label="add an alarm">
                  <FavoriteBorderIcon/></IconButton>
                </div>
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Features</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    <ul
                      role="list"
                      className="list-disc space-y-2 pl-4 text-sm"
                    >
                      {product.highlights.map((highlight) => (
                        <li key={highlight} className="text-gray-400">
                          <span className="text-gray-600">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>Product care</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>Shipping & Returns</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>Warranty</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </section>
        <div className="flex flex-col justify-center text-center mt-4">
          <h1 className=" font-semibold text-3xl  ">Our Customers Opinion</h1>
          <p className=" opacity-70 mt-3">
            Society has put up so many boundaries, so many limitation on what
            right and wrong
            <br /> thats its almost impossible to get a pure thought out.
          </p>
        </div>
        {/* Rating and reviews */}
        <section>
          {/* <h1 className="font-semibold text-lg pb-4">
            Recent Reviews & Rating
          </h1> */}
          <div className="border p-5 mt-10">
            <Grid container spacing={7}>
              <Grid item xs={5}>
                <h1 className="text-2xl font-bold pb-5">Client Review</h1>
                <div className="flex items-center space-x-3">
                  <p className=" opacity-70 font-semibold ">4.7</p>
                  <Rating
                    name="read-only"
                    value={4.7}
                    precision={0.5}
                    readOnly
                  />
                  <p className="opacity-60">Based on 1234 reviews</p>
                </div>
                <Box className="mt-7 space-y-3">
                  <Grid container alignItems="center" gap={2}>
                    <Grid item container xs={2}>
                      <p className="opacity-60">5</p>

                      <StarBorderIcon sx={{ color: "#FAAF00" }} />
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress
                        sx={{ bgcolor: "#d0d0d0 ", borderRadius: 4, height: 7 }}
                        variant="determinate"
                        value={40}
                        color="warning"
                      />
                    </Grid>
                    <Grid item>
                      <p className=" opacity-60 ">75%</p>
                    </Grid>
                  </Grid>
                  <Grid container alignItems="center" gap={2}>
                    <Grid item container xs={2}>
                      <p className="opacity-60">4</p>
                      <StarBorderIcon sx={{ color: "#FAAF00" }} />
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress
                        sx={{ bgcolor: "#d0d0d0 ", borderRadius: 4, height: 7 }}
                        variant="determinate"
                        value={30}
                        color="warning"
                      />
                    </Grid>
                    <Grid item>
                      <p className=" opacity-60 ">75%</p>
                    </Grid>
                  </Grid>
                  <Grid container alignItems="center" gap={2}>
                    <Grid item container xs={2}>
                      <p className="opacity-60">3</p>
                      <StarBorderIcon sx={{ color: "#FAAF00" }} />
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress
                        sx={{ bgcolor: "#d0d0d0 ", borderRadius: 4, height: 7 }}
                        variant="determinate"
                        value={25}
                        color="warning"
                      />
                    </Grid>
                    <Grid item>
                      <p className=" opacity-60 ">75%</p>
                    </Grid>
                  </Grid>
                  <Grid container alignItems="center" gap={2}>
                    <Grid item container xs={2}>
                      <p className="opacity-60">2</p>
                      <StarBorderIcon sx={{ color: "#FAAF00" }} />
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress
                        sx={{ bgcolor: "#d0d0d0 ", borderRadius: 4, height: 7 }}
                        variant="determinate"
                        value={20}
                        color="warning"
                      />
                    </Grid>
                    <Grid item>
                      <p className=" opacity-60 ">75%</p>
                    </Grid>
                  </Grid>
                  <Grid container alignItems="center" gap={2}>
                    <Grid item container xs={2}>
                      <p className="opacity-60">1</p>
                      <StarBorderIcon sx={{ color: "#FAAF00" }} />
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress
                        sx={{ bgcolor: "#d0d0d0 ", borderRadius: 4, height: 7 }}
                        variant="determinate"
                        value={10}
                        color="warning"
                      />
                    </Grid>
                    <Grid item>
                      <p className=" opacity-60 ">75%</p>
                    </Grid>
                  </Grid>
                  <div className="mt-15 ">
                    <h1 className=" mt-7 font-bold text-xl  opacity-80">
                      We value your opinion
                    </h1>
                    <p className=" mt-15  opacity-70 ">
                      The time is now for it to be okey to be great.People in
                      this world shun people for being great.
                    </p>
                    <Button
                      className=" bg-slate-800 mt-8 "
                      variant="contained"
                      sx={{ px: "3rem", py: "0.6rem", mr: "2rem" }}
                      fullWidth
                    >
                      Add To Cart
                    </Button>
                  </div>
                </Box>
              </Grid>
              <Grid item xs={7}>
                <div className="space-y-12 ">
                  <div>
                    <Grid container spacing={3}>
                      <Grid item>
                        <Rating
                          value={4.5}
                          name="half-rating"
                          readOnly
                          precision={0.5}
                        />
                        <p className="mt-5 opacity-80">
                          If everything I did failed - which it doesnt, it
                          actually succeeds-just the fact that Im willing to
                          fail is an inspiration. People are so scared to lose
                          that they dont even try.
                        </p>
                      </Grid>
                      <Grid item container gap={2}>
                        <Box>
                          <Avatar
                            className="text-white"
                            sx={{ width: 56, height: 56, bgcolor: "#9155fd" }}
                          >
                            A
                          </Avatar>
                        </Box>
                        <Grid item>
                          <div className="space-y-2 ">
                            <div>
                              <p className="font-semibold text-lg ">
                                Alexa Liras
                              </p>
                              <p className="opacity-70">03 March 2022</p>
                            </div>
                          </div>
                        </Grid>
                      </Grid>
                    </Grid>
                  </div>

                  <div>
                    <Grid container spacing={3}>
                      <Grid item>
                        <Rating
                          value={4.5}
                          name="half-rating"
                          readOnly
                          precision={0.5}
                        />
                        <p className="mt-5 opacity-80">
                          We are not always in the position that we want to be
                          at. We are constantly growing. We are constantly
                          making mistakes. We are constantly trying to express
                          ourselves and actualize our dreams. If you have the
                          opportunity to play this game of life you need to
                          appreciate every moment. A lot of people dont
                          appreciate the moment until it is passed.
                        </p>
                      </Grid>
                      <Grid item container gap={2}>
                        <Box>
                          <Avatar
                            className="text-white"
                            sx={{ width: 56, height: 56, bgcolor: "#9155fd" }}
                          >
                            L
                          </Avatar>
                        </Box>
                        <Grid item>
                          <div className="space-y-2 ">
                            <div>
                              <p className="font-semibold text-lg ">
                                Laurent Perrier
                              </p>
                              <p className="opacity-70">03 March 2022</p>
                            </div>
                          </div>
                        </Grid>
                      </Grid>
                    </Grid>
                  </div>

                  <div>
                    <Grid container spacing={3}>
                      <Grid item>
                        <Rating
                          value={4.5}
                          name="half-rating"
                          readOnly
                          precision={0.5}
                        />
                        <p className="mt-5">
                          Theres nothing I really wanted to do in life that I
                          wasnt able to get good at. Thats my skill I am not
                          really specifically talented at anything except for
                          the ability to learn. That is what 1 do. That is what
                          I am here for. Dont be afraid to be wrong because you
                          cant learn anything from a compliment.
                        </p>
                      </Grid>
                      <Grid item container gap={2}>
                        <Box>
                          <Avatar
                            className="text-white"
                            sx={{ width: 56, height: 56, bgcolor: "#9155fd" }}
                          >
                            M
                          </Avatar>
                        </Box>
                        <Grid item>
                          <div className="space-y-2 ">
                            <div>
                              <p className="font-semibold text-lg opacity-90 ">
                                Michael Levi
                              </p>
                              <p className="opacity-70">03 March 2022</p>
                            </div>
                          </div>
                        </Grid>
                      </Grid>
                    </Grid>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </section>

        {/* {similar product} */}
        <section className="pt-10">
          <h1 className="py-5 text-3xl font-bold">Recently viewed </h1>

          {/* <div className="flex flex-wrap space-y-10">
            <HomeSectionCard/>
            <HomeSectionCard/>
            <HomeSectionCard/>
            
          </div> */}
          <Grid
            container
            className="flex flex-row"
            gap={4}
            sx={{ margin: "3rem" }}
          >
            <Grid item>
              {" "}
              <HomeSectionCard />
            </Grid>
            <Grid item>
              {" "}
              <HomeSectionCard />
            </Grid>
            <Grid item>
              {" "}
              <HomeSectionCard />
            </Grid>
            <Grid item>
              {" "}
              <HomeSectionCard />
            </Grid>
          </Grid>
        </section>
      </div>
    </div>
  );
}
