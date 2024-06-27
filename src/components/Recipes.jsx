import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const images = [
  {
    img: "/assets/img",
    title: "Asian Cuisines",
    desc: "Visit every country's best recipes all around Asia. Be blown away by the amount of diversity of food that this continent has to offer.",
  },
  {
    img: "/assets/img",
    title: "European Cuisines",
    desc: "Visit every country's best recipes all around Europe. Explore and experience the different unique tastes that this continent has to offer.",
  },
  {
    img: "/assets/img",
    title: "American Cuisines",
    desc: "Visit every country's best recipes all around America. From North to South, dive into the vast choices of food that these continents has to offer.",
  },
  {
    img: "/assets/img",
    title: "African Cuisines",
    desc: "Visit every country's best recipes all around Africa. Experience the tastiest food that these continents has to offer.",
  },
  {
    img: "/assets/img",
    title: "Australian Cuisines",
    desc: "Visit every country's best recipes all around Australia. Enjoy the various dishes that this continent has to offer.",
  },
];

export default function Recipes() {
  // const swiper = useSwiper();

  return (
    <section className="recipes container f-center" id="recipes">
      <h1 className="recipes__title">
        OUR RECIPE <br />
        COLLECTIONS
      </h1>
      <div className="recipes__content swiper">
        <div className="swiper-button-prev">
          <i className="bx bx-chevron-left"></i>
        </div>
        <Swiper
          modules={[Navigation]}
          speed={400}
          spaceBetween={30}
          slidesPerView={3}
          slidesPerGroup={3}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          className="container recipes__content-images swiper-wrapper"
        >
          {images.map((image, index) => (
            <SwiperSlide
              key={image.title}
              className="recipes__content-images_img swiper-slide f-center"
            >
              <img
                className="recipes__content-images_img-bg"
                src={`${image.img}${index + 1}.png`}
                alt={image.title}
              />
              <div className="recipes__content-images_img-desc f-center">
                <h2>{image.title}</h2>
                <p>{image.desc}</p>
              </div>
              <div className="recipes__content-images_img-glass"></div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-next">
          <i className="bx bx-chevron-right"></i>
        </div>
      </div>
    </section>
  );
}
