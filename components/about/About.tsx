"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function About() {
  return (
    <section className="bg-black px-8 py-32 text-white">

      <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">

        {/* Left image */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative"
        >

          {/* Main card */}

          <div className="overflow-hidden rounded-3xl border border-yellow-500/20 bg-zinc-950">

            <Image
              src="/assets/model.png"
              alt="Kaya Beauty"
              width={600}
              height={750}
              className="h-full w-full object-cover"
            />

          </div>

          {/* Floating badge */}

          <div className="absolute -bottom-6 -right-6 rounded-2xl border border-yellow-500/20 bg-zinc-950 px-8 py-6">

            <p className="text-3xl text-yellow-500">
              10+
            </p>

            <p className="mt-2 text-sm uppercase tracking-[3px] text-zinc-400">
              Years Experience
            </p>

          </div>

        </motion.div>

        {/* Right content */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >

          <p className="mb-4 text-xs uppercase tracking-[10px] text-yellow-500">
            About Kaya
          </p>

          <h2 className="luxury-heading text-4xl md:text-6xl">
            Beauty Crafted With Excellence
          </h2>

          <p className="mt-8 max-w-xl leading-9 text-zinc-500">
            Kaya Beauty Parlour is dedicated to delivering luxury beauty,
            skincare and bridal experiences designed to bring confidence,
            elegance and timeless beauty to every client.
          </p>

          {/* Features */}

          <div className="mt-10 space-y-5">

            <div className="flex items-center gap-4">
              <Check className="text-yellow-500" />
              <span>Certified Beauty Experts</span>
            </div>

            <div className="flex items-center gap-4">
              <Check className="text-yellow-500" />
              <span>Premium International Products</span>
            </div>

            <div className="flex items-center gap-4">
              <Check className="text-yellow-500" />
              <span>Specialized Bridal Makeup Services</span>
            </div>

          </div>

          <button className="mt-12 rounded-full border border-yellow-600 px-8 py-4 uppercase tracking-[3px] transition hover:bg-yellow-600 hover:text-black">

            Discover More

          </button>

        </motion.div>

      </div>

    </section>
  );
}
