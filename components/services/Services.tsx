"use client";

import { motion } from "framer-motion";

import {
  Sparkles,
  Scissors,
  Gem,
  Flower2,
  Droplets,
  Crown,
} from "lucide-react";

const services = [
  {
    title: "Facials",
    price: "Starting ₹650",
    desc: "Hydra facial, skin brightening and premium glow treatments.",
    icon: Sparkles,
  },
  {
    title: "Cleanup",
    price: "Starting ₹550",
    desc: "Economy, silver, golden and diamond cleanup treatments.",
    icon: Gem,
  },
  {
    title: "Hair Cuts",
    price: "Starting ₹300",
    desc: "Regular cut, layer cut and advanced styling services.",
    icon: Scissors,
  },
  {
    title: "Wax Services",
    price: "Starting ₹100",
    desc: "Underarms, full hands, full legs and full body waxing.",
    icon: Flower2,
  },
  {
    title: "Body Polishing",
    price: "Starting ₹250",
    desc: "Luxury body polish, massage and tan removal treatments.",
    icon: Droplets,
  },
  {
    title: "Bridal Package",
    price: "Premium Package",
    desc: "Exclusive bridal makeup and complete pre-bridal care.",
    icon: Crown,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-black">

      {/* Heading */}

      <div className="mx-auto max-w-7xl text-center">

        <p className="mb-4 text-xs uppercase tracking-[10px] text-yellow-500">
          Premium Beauty Collection
        </p>

        <h2 className="luxury-heading text-4xl md:text-6xl">
          Our Premium Services
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-zinc-500">
          Professional beauty services crafted for elegance,
          confidence and timeless luxury.
        </p>

      </div>

      {/* Cards */}

      <div className="mx-auto mt-20 grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">

        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl border border-yellow-500/20 bg-zinc-950 p-8 transition hover:border-yellow-500"
            >

              {/* Icon */}

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-yellow-500/30 bg-yellow-500/5">

                <Icon
                  size={26}
                  className="text-yellow-500"
                />

              </div>

              {/* Title */}

              <h3 className="text-2xl text-white">
                {service.title}
              </h3>

              {/* Description */}

              <p className="mt-4 leading-8 text-zinc-500">
                {service.desc}
              </p>

              {/* Price */}

              <div className="mt-6 text-yellow-500">
                {service.price}
              </div>

              {/* Button */}

              <button className="mt-8 border-b border-yellow-500 pb-1 text-sm uppercase tracking-[3px] text-yellow-500 transition hover:text-white">

                View Details

              </button>

            </motion.div>
          );
        })}

      </div>

    </section>
  );
}
