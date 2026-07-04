"use client";

export default function Particles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* Particle 1 */}

      <div className="absolute left-[10%] top-[20%] h-2 w-2 rounded-full bg-yellow-500/40 animate-pulse"></div>

      {/* Particle 2 */}

      <div className="absolute left-[25%] top-[60%] h-1 w-1 rounded-full bg-yellow-400/40 animate-pulse"></div>

      {/* Particle 3 */}

      <div className="absolute right-[20%] top-[30%] h-2 w-2 rounded-full bg-yellow-500/30 animate-pulse"></div>

      {/* Particle 4 */}

      <div className="absolute right-[30%] bottom-[20%] h-1 w-1 rounded-full bg-yellow-400/50 animate-pulse"></div>

      {/* Particle 5 */}

      <div className="absolute left-[50%] bottom-[15%] h-2 w-2 rounded-full bg-yellow-500/30 animate-pulse"></div>

      {/* Particle 6 */}

      <div className="absolute right-[45%] top-[10%] h-1 w-1 rounded-full bg-yellow-400/40 animate-pulse"></div>

    </div>
  );
}
