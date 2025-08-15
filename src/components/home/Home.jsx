import React, { use, useEffect, useState } from "react";
import heroimg from "./img/hero.jpg";
import { API } from "../../api/API";
import { NavLink, Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
export default function Home() {
  const [response, setResponse] = useState([]);
  const [ressale, setRessale] = useState([]);
  const [err, setErr] = useState(false);

  useEffect(() => {
    const getApi = async () => {
      try {
        const res = await API.get("/product");
        const products = res.data?.data?.products || [];
        setResponse(products);
        const sale = products.filter((item) => item?.discount?.discount !== 0);
        setRessale(sale);
      } catch (error) {
        console.log(error);
        if (error.code == "ERR_NETWORK") {
          setErr(!err);
        }
      }
    };
    getApi();
  }, []);

  const style_one = {
    backgroundImage: `url(${heroimg})`,
    backgroundPosition: "center 30%",
  };

  const renderProductCard = (item) => (
    <Link to={`/suitdetails/${item?.id}`} key={item?.id}>
      <div>
        <div className="img-animation overflow-hidden md:h-[300px]">
          <img
            className="h-[90vw] md:h-[40vw] w-full  object-center lg:h-[300px]"
            src={`https://testaoron.limsa.uz/${item?.images[0]}`}
            alt="product"
          />
        </div>
        <div className="mt-4 space-y-1">
          <div className="flex justify-between items-center">
            <h3 className="text-sm font-medium">{item?.title_en}</h3>
            <span className="text-sm font-medium">${item?.price}</span>
          </div>
          <p className="text-xs text-gray-600 line-clamp-2">
            {item?.description_en}
          </p>
        </div>
      </div>
    </Link>
  );

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden mt-3">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={style_one}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <div className="flex flex-col items-start space-y-8 animate-fade-up">
              <span className="inline-block bg-white/10 backdrop-blur-sm px-3 py-1 text-xs tracking-wider uppercase text-white">
                Spring/Summer 2025
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white">
                Premium Menswear
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-lg">
                Quality fabrics. Perfect fit. Timeless style.
              </p>
              <a
                className="group bg-white text-primary px-6 py-3 rounded-md inline-flex items-center hover:bg-white/90 transition-colors"
                href="/catalog"
              >
                Explore Collection{" "}
                <FaArrowRightLong className="text-black ml-2.5 transition-transform duration-200 hover:translate-x-[10px]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-container m-5 sm:m-10 md:m-16">
        <div className="mb-10 text-center">
          <h2 className="text-4xl mb-4">Featured Products</h2>
          <p className="text-muted-foreground text-gray-600 max-w-2xl mx-auto">
            Discover our carefully selected collection of premium menswear,
            crafted with the finest materials and attention to detail.
          </p>
        </div>
        <div className="product-grid m-auto gap-8 grid container md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {response
            .sort(() => Math.random() - 0.5)
            .slice(0, 28)
            .map(renderProductCard)}
        </div>
        {err ? (
          <div>
            <p className="container mx-auto text-md text-red-500">
              Error: Check API. Information not found, please refresh the page.
            </p>
          </div>
        ) : (
          ""
        )}
        <div className="mt-12 text-center">
          <NavLink to={"/catalog"}>
            <div className="border border-gray-300 rounded-md py-3 px-6 btn-secondary group inline-flex items-center">
              View All Products
            </div>
          </NavLink>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="section-container m-10 md:m-16">
        <div className="container mx-auto">
          <div className="flex justify-between items-end my-10">
            <h2 className="text-xl">New Arrivals</h2>
            <NavLink
              className="text-gray-500 hover:underline cursor-pointer "
              to={"/catalog"}
            >
              View All Products
            </NavLink>
          </div>
          <div className="product-grid gap-8 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {err ? (
              <div>
                <p className="text-md text-red-500">
                  Error: Check API. Information not found, please refresh the
                  page.
                </p>
              </div>
            ) : (
              ""
            )}
            {response
              .sort(() => Math.random() - 0.5)
              .slice(0, 4)
              .map(renderProductCard)}
          </div>
        </div>
      </section>

      {/* Sale Section */}
      <section className="py-16 bg-red-200">
        <div className="container mx-auto">
          <div className="flex justify-between items-end my-10">
            <h2 className="text-xl text-red-500">Sale</h2>
            <NavLink
              className="text-gray-500 hover:underline cursor-pointer"
              to={"/catalog"}
            >
              View All Products
            </NavLink>
          </div>
          <div className="product-grid gap-8 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {err ? (
              <div>
                <p className="text-md text-red-500">
                  Error: Check API. Information not found, please refresh the
                  page.
                </p>
              </div>
            ) : (
              ""
            )}
            {ressale
              .sort(() => Math.random() - 0.5)
              .slice(0, 4)
              .map(renderProductCard)}
          </div>
        </div>
      </section>
    </>
  );
}
