"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* top border */}

      <div className="absolute top-10 left-0 h-[1px] w-full bg-yellow-600/30"></div>

      {/* main container */}

      <div className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-10 px-10 lg:grid-cols-2">

        {/* LEFT SIDE */}

        <div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8 tracking-[12px] text-xs text-yellow-500 uppercase"
          >
            Luxury Beauty Redefined
          </motion.p>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="luxury-heading gold-text text-8xl font-normal leading-none tracking-tight md:text-[200px]"
          >
            KAYA
          </motion.h1>

          <h2 className="luxury-heading mt-2 text-3xl tracking-[10px] md:text-5xl">
            BEAUTY PARLOUR
          </h2>

          <p className="mt-10 max-w-xl text-lg leading-10 text-zinc-500">
            A destination where beauty, elegance and confidence come together to create an unforgettable luxury experience.
          </p>

          <div className="mt-14 flex gap-6">

            <button className="border border-yellow-600 px-8 py-4 text-sm uppercase tracking-[3px] hover:bg-yellow-600 hover:text-black transition">
              Book Appointment
            </button>

            <button className="text-sm uppercase tracking-[3px] text-zinc-400 hover:text-white transition">
              Explore →
            </button>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="relative flex items-center justify-center">

          {/* future image area */}

          <div className="relative h-[500px] w-[400px] border border-yellow-600/20">

            {/* circle 1 */}

            <div className="absolute top-10 left-10 h-32 w-32 rounded-full border border-yellow-500/20"></div>

            {/* circle 2 */}

            <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full border border-yellow-500/20"></div>

            {/* placeholder */}

            <div className="absolute inset-0 flex items-center justify-center text-sm tracking-[8px] text-zinc-700">

              LUXURY VISUAL COMPOSITION

            </div>

          </div>

        </div>

      </div>

      {/* bottom text */}

      <div className="absolute bottom-8 left-10 text-xs tracking-[8px] text-zinc-700">
        EST. PREMIUM EXPERIENCE
      </div>

    </section>
  );
}
