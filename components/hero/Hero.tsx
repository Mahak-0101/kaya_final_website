"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Particles from "./Particles";

export default function Hero() {
  return (
    <section className="min-h-screen overflow-hidden bg-black text-white relative">

      {/* Luxury particles background */}

      <Particles />

      {/* Navbar */}

      <nav className="relative z-40 mx-auto flex max-w-7xl items-center justify-between px-8 py-8">

        <div className="luxury-heading text-2xl text-yellow-500">
          KAYA
        </div>

       <div className="flex gap-8 text-sm uppercase tracking-[3px] text-zinc-400">

  <button
    onClick={() =>
      document.getElementById("services")?.scrollIntoView({
        behavior: "smooth",
      })
    }
    className="transition hover:text-yellow-500"
  >
    Services
  </button>

  <button
    onClick={() =>
      document.getElementById("gallery")?.scrollIntoView({
        behavior: "smooth",
      })
    }
    className="transition hover:text-yellow-500"
  >
    Gallery
  </button>

  <button
    onClick={() =>
      document.getElementById("owner")?.scrollIntoView({
        behavior: "smooth",
      })
    }
    className="transition hover:text-yellow-500"
  >
   Founder
  </button>

  <button
    onClick={() =>
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
      })
    }
    className="transition hover:text-yellow-500"
  >
    Contact
  </button>

</div>

      </nav>

      {/* Hero Section */}

      <div className="relative z-30 mx-auto grid min-h-[85vh] max-w-7xl grid-cols-1 items-center px-8 lg:grid-cols-2">

        {/* Left Side */}

        <div>

          <p className="mb-6 text-xs uppercase tracking-[10px] text-yellow-500">
            Luxury Beauty Experience
          </p>

          <h1 className="luxury-heading text-7xl md:text-9xl">
            KAYA
          </h1>

          <h2 className="mt-4 text-2xl text-zinc-300 md:text-4xl">
            Beauty Beyond Ordinary
          </h2>

          <p className="mt-8 max-w-xl leading-9 text-zinc-500">
            Premium beauty, skincare and bridal experiences
            designed for elegance, confidence and timeless beauty.
          </p>

          <button className="mt-10 rounded-full border border-yellow-600 px-8 py-4 uppercase tracking-[3px] transition hover:bg-yellow-600 hover:text-black hover:scale-105">
            Book Appointment
          </button>

        </div>

        {/* Right Side Composition */}

        <div className="relative flex h-[650px] items-center justify-center">

          {/* Main Model */}

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute z-20"
          >
            <Image
              src="/assets/model.png"
              alt="Beauty Model"
              width={430}
              height={600}
              priority
  loading="eager"
             className="h-auto w-auto object-contain"
            />
          </motion.div>

          {/* Perfume Floating */}

          <motion.div
            animate={{
              y: [0, 15, 0],
              rotate: [12, 18, 12],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-2 top-8 z-30"
          >
            <Image
              src="/assets/perfume.png"
              alt="Perfume"
              width={85}
              height={150}
              className="h-auto w-auto rotate-12 object-contain"
            />
          </motion.div>

          {/* Lipstick Floating */}

          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [-12, -18, -12],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-10 left-4 z-30"
          >
            <Image
              src="/assets/lipstick.png"
              alt="Lipstick"
              width={120}
              height={220}
              className="h-auto w-auto -rotate-12 object-contain"
            />
          </motion.div>

          {/* Decorative Luxury Ring */}

          <div className="absolute h-[520px] w-[420px] rounded-full border border-yellow-500/10"></div>

        </div>

      </div>

    </section>
  );
}
