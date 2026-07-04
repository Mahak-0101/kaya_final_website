"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Owner() {
  return (
<section id="owner" className="py-32 bg-black">
      <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">

        {/* Left image */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >

          {/* background glow */}

          <div className="absolute h-[420px] w-[420px] rounded-full bg-yellow-500/10 blur-3xl"></div>

          {/* image */}

          <Image
  src="/assets/owner.png"
  alt="Owner"
  width={430}
  height={550}
  className="relative z-10 h-auto w-auto rounded-3xl object-cover shadow-2xl"
/>

        </motion.div>

        {/* Right content */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >

          <p className="mb-6 text-xs uppercase tracking-[8px] text-yellow-500">
            Founder Of Kaya
          </p>

          <h2 className="luxury-heading text-5xl md:text-7xl">
            Meet The Artist
          </h2>

          <h3 className="mt-4 text-2xl text-zinc-300">
            Ratinka Arora
          </h3>

          <p className="mt-8 max-w-xl leading-9 text-zinc-500">

            With years of experience in beauty transformation,
            bridal makeup, skincare and luxury salon services,
            Kaya Beauty Parlour has become a place where
            confidence, beauty and elegance meet perfection.

          </p>

          <div className="mt-12 flex gap-12">

            <div>

              <h4 className="text-4xl text-yellow-500">
                10+
              </h4>

              <p className="mt-2 text-zinc-500">
                Years Experience
              </p>

            </div>

            <div>

              <h4 className="text-4xl text-yellow-500">
                5000+
              </h4>

              <p className="mt-2 text-zinc-500">
                Happy Clients
              </p>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}
