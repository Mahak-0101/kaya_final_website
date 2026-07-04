"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="bg-black px-8 py-32 text-white">

      <div className="mx-auto max-w-7xl">

        {/* Heading */}

        <div className="text-center">

          <p className="mb-5 text-xs uppercase tracking-[8px] text-yellow-500">
            Reserve Your Luxury Experience
          </p>

          <h2 className="luxury-heading text-5xl md:text-7xl">
            Book Appointment
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-zinc-500">
            Experience premium beauty care, bridal artistry and
            luxury salon services crafted especially for you.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {/* Phone Card */}

          <motion.div
            whileHover={{ y: -10 }}
            className="rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-950 to-black p-10"
          >

            <p className="text-sm uppercase tracking-[5px] text-yellow-500">
              Call Us
            </p>

            <h3 className="mt-6 text-3xl">
              088392 18126
            </h3>

            <p className="mt-4 text-zinc-500">
              Connect directly for appointments,
              beauty consultation and premium services.
            </p>

            <a
              href="tel:08839218126"
              className="mt-8 inline-block text-yellow-500 transition hover:text-white"
            >
              Call Now →
            </a>

          </motion.div>

          {/* Address Card */}

          <motion.div
            whileHover={{ y: -10 }}
            className="rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-950 to-black p-10"
          >

            <p className="text-sm uppercase tracking-[5px] text-yellow-500">
              Visit Salon
            </p>

            <h3 className="mt-6 text-xl leading-9">
              Kaya Glow Beauty Salon & Academy
            </h3>

            <p className="mt-4 text-sm leading-7 text-zinc-500">
              81-A, Narendra Tiwari Marg,
              Opposite Maharaja Yeshwant Rao School,
              Sector D, Sudama Nagar,
              Indore, Madhya Pradesh 452009
            </p>

            <a
              href="https://maps.google.com/maps?vet=10CAAQoqAOahcKEwjw4dH5_rKVAxUAAAAAHQAAAAAQBQ"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block text-yellow-500 transition hover:text-white"
            >
              Open Maps →
            </a>

          </motion.div>

          {/* Timing Card */}

          <motion.div
            whileHover={{ y: -10 }}
            className="rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-950 to-black p-10"
          >

            <p className="text-sm uppercase tracking-[5px] text-yellow-500">
              Opening Hours
            </p>

            <div className="mt-6 space-y-4 text-zinc-400">

              <div>
                <span className="text-white">
                  Monday - Saturday
                </span>
                <p>12 PM – 7 PM</p>
              </div>

              <div>
                <span className="text-white">
                  Sunday
                </span>
                <p>1 PM – 7 PM</p>
              </div>

            </div>

            <p className="mt-8 text-yellow-500">
              Walk-ins Welcome
            </p>

          </motion.div>

        </div>

      </div>

    </section>
  );
}
