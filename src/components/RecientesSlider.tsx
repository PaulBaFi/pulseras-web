import { ChevronLeft, ChevronRight, MoveRight } from "lucide-react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { formatPrice } from "@/utils/formatPrice";
import { getPulseraUrl } from "@/utils/pulseraUrl";

export interface PulseraCard {
  id: string;
  nombre: string;
  imagen: string;
  precio: number;
  descripcion_corta: string;
}

interface Props {
  pulseras: PulseraCard[];
}

export default function RecientesSlider({ pulseras }: Props) {
  return (
    <div className={`relative z-10 w-full ${pulseras.length > 3 ? 'md:px-16' : ''}`}>
    <Swiper
        modules={[Navigation, Pagination]}
        grabCursor
        spaceBetween={16}
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation={{
          nextEl: ".recientes-next",
          prevEl: ".recientes-prev",
        }}
        className="recientes-swiper pb-16!"
      >
        {pulseras.map((pulsera) => (
          <SwiperSlide key={pulsera.id} className="h-auto!">
            <div className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-2 transition-transform duration-300 hover:scale-102 hover:shadow-md">
              <div className="mb-2 aspect-4/3 w-full rounded-lg bg-slate-100">
                <img src={pulsera.imagen} alt={`Imagen de ${pulsera.nombre}`} />
              </div>

              <div className="inline-flex w-full items-center justify-between px-2 text-slate-700">
                <strong>{pulsera.nombre}</strong>
                <b>{formatPrice(pulsera.precio)}</b>
              </div>

              <p className="mb-4 line-clamp-2 px-2 text-sm text-slate-500">
                {pulsera.descripcion_corta}
              </p>

              <a
                href={getPulseraUrl(pulsera.id)}
                className="mt-auto inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 font-bold text-white"
              >
                Ver detalles
                <MoveRight size={20} strokeWidth={2} />
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        type="button"
        aria-label="Anterior"
        className="recientes-prev absolute top-1/2 left-0 z-20 hidden size-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-colors hover:bg-slate-50 md:flex"
        style={{ marginTop: "-32px" }}
      >
        <ChevronLeft size={20} strokeWidth={2} />
      </button>

      <button
        type="button"
        aria-label="Siguiente"
        className="recientes-next absolute top-1/2 right-0 z-20 hidden size-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-colors hover:bg-slate-50 md:flex"
        style={{ marginTop: "-32px" }}
      >
        <ChevronRight size={20} strokeWidth={2} />
      </button>

      <style>{`
        .recientes-swiper .swiper-button-next,
        .recientes-swiper .swiper-button-prev {
          display: none;
        }

        .recientes-swiper .swiper-pagination-bullet {
          background: #cbd5e1;
          opacity: 0.7;
        }

        .recientes-swiper .swiper-pagination-bullet-active {
          background: #D14D72 !important;
          opacity: 1;
          width: 20px;
          border-radius: 5px;
          transition: all 0.3s;
        }
      `}</style>
    </div>
  );
}
