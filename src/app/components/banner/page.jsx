"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import ButtonPrimary from "../button-primary/page";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute left-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-white bg-black hover:bg-gray-900 p-2 rounded-full shadow-md"
      onClick={onClick}
    >
      <BsArrowLeft className="text-2xl" />
    </div>
  );
}

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute right-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-white bg-black hover:bg-gray-900 p-2 rounded-full shadow-md"
      onClick={onClick}
    >
      <BsArrowRight className="text-2xl " />
    </div>
  );
}

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <SamplePrevArrow />, 
    nextArrow: <SampleNextArrow />,
  };

  const slides = [
    {
      img: "/images/banner1.jpg",
      title: "Spring fashion in bloom.",
      desc: "New trends and styles to turn heads",
      btn: "Shop now",
    },
    {
      img: "/images/banner2.png",
      title: "Exclusive summer collection.",
      desc: "Breezy outfits perfect for sunny days",
      btn: "Explore",
    },
    {
      img: "/images/banner3.png",
      title: "Winter essentials.",
      desc: "Cozy, stylish layers to keep you warm",
      btn: "Browse",
    },
  ];

  return (
    <div className="w-full bg-white px-4 py-6 flex gap-4 border-b border-gray-200">
      <div className="w-2/3 rounded-lg h-[410px] shadow-md relative overflow-hidden">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="w-full h-[410px] relative">
              <Image
                src={slide.img}
                alt={slide.title}
                fill
                className="object-cover"
              />
              <div className="absolute w-60 h-full top-0 left-4 text-black gap-3 flex flex-col justify-center">
                <h1 className="text-2xl font-bold">{slide.title}</h1>
                <p className="text-sm leading-5">{slide.desc}</p>
                <button className="bg-black text-white text-sm font-semibold rounded-full w-24 h-8 border border-white cursor-pointer">
                  {slide.btn}
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="w-1/3 border-[1px] border-gray-200 rounded-lg shadow-md p-4 flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-black">
            Fresh pick of the day
          </h2>
          <p className="text-base underline underline-offset-2 text-zinc-600">
            View all
          </p>
        </div>

        <Image
          src="/images/banner4.jpg"
          alt="img"
          width={180}
          height={200}
          className=" object-cover"
        />
        <ButtonPrimary />
        <p className="text-lg text-black font-semibold">
            from $199.90
        </p>
        <p className="text-base text-gray-300 -mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>
      </div>
    </div>
  );
};

export default Banner;

