import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, FreeMode } from "swiper/modules";

import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

interface Props {
  images: string[];
  alt: string;
}

export default function ProductGallery({ images, alt }: Props) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const hasMultiple = images.length > 1;

  return (
    <div className="relative w-full">
      {hasMultiple && (
        <>
          <button
            ref={prevRef}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/90 p-2 shadow transition hover:scale-110"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            ref={nextRef}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/90 p-2 shadow transition hover:scale-110"
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}

      <Swiper
        modules={[Navigation, Thumbs]}
        loop={hasMultiple}
        loopedSlides={images.length}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          // @ts-ignore
          swiper.params.navigation.prevEl = prevRef.current;
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        className="rounded-2xl overflow-hidden"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <div className="aspect-[4/3] bg-slate-100">
              <img
                src={img}
                alt={`${alt} ${i + 1}`}
                loading={i === 0 ? "eager" : "lazy"}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {hasMultiple && (
        <Swiper
          modules={[Thumbs, FreeMode]}
          onSwiper={setThumbsSwiper}
          watchSlidesProgress
          freeMode
          spaceBetween={10}
          slidesPerView={4}
          className="mt-4 h-24"
          breakpoints={{
            640: {
              slidesPerView: 5,
            },
            1024: {
              slidesPerView: 6,
            },
          }}
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              <img
                src={img}
                alt={`${alt} miniatura ${i + 1}`}
                className="w-full h-full rounded-lg border border-slate-200 object-cover cursor-pointer"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}
