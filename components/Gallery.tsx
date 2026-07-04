"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const galleryImages = [
  "/assets/gallery/img1.png",
  "/assets/gallery/img2.png",
  "/assets/gallery/img3.png",
  "/assets/gallery/img4.png",
  "/assets/gallery/img5.png",
  "/assets/gallery/img6.png",
  "/assets/gallery/img7.png",
  "/assets/gallery/img8.png",
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-32 bg-black">

      {/* Heading */}

      <div className="mx-auto mb-20 max-w-7xl text-center">

        <p className="mb-5 text-xs uppercase tracking-[8px] text-yellow-500">
          Luxury Transformations
        </p>

        <h2 className="luxury-heading text-5xl md:text-7xl">
          Our Gallery
        </h2>

        <p className="mx-auto mt-6 max-w-2xl leading-8 text-zinc-500">
          A glimpse into our premium beauty artistry,
          bridal transformations and luxury salon experiences.
        </p>

      </div>

      {/* Grid */}

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">

        {galleryImages.map((img, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="group overflow-hidden rounded-3xl border border-zinc-800"
          >

            <Image
              src={img}
              alt="Gallery"
              width={500}
              height={600}
              className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-110"
            />

          </motion.div>

        ))}

      </div>

    </section>
  );
}
