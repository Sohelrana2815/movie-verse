import { NavLink } from "react-router";

export default function HeroBanner({
  title = "DISCOVER MOVIES",
  subtitle = "Explore and discover your favorite movies from around the world.",
  ctaText = "Explore Now",
  backgroundImageUrl = null, // Pass an image URL here, or leave null for the gradient fallback
}) {
  return (
    <section className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-2xl shadow-2xl bg-[#0F172A] text-white border border-[#1E293B]">
      {/* Background Image / Gradient Overlay */}
      {backgroundImageUrl ? (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
          style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        />
      ) : (
        /* Ambient Radial Lights using theme colors */
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#1E293B] rounded-full blur-3xl opacity-60" />
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#E11D48] rounded-full blur-[120px] opacity-25" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b from-transparent via-[#0F172A]/50 to-[#0F172A]" />
        </div>
      )}

      {/* Decorative Movie Elements / Placeholders */}

      {/* Top Left: Film Reel Decorative Silhouette */}
      <div className="absolute top-4 left-4 md:top-8 md:left-8 opacity-15 pointer-events-none">
        <svg
          className="w-24 h-24 md:w-36 md:h-36 fill-slate-300"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-12c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
          <circle cx="12" cy="6" r="1.5" />
          <circle cx="12" cy="18" r="1.5" />
          <circle cx="6" cy="12" r="1.5" />
          <circle cx="18" cy="12" r="1.5" />
        </svg>
      </div>

      {/* Bottom Left: Audience Silhouette */}
      <div className="absolute bottom-0 left-0 opacity-20 pointer-events-none hidden sm:block">
        <svg className="w-48 md:w-64 fill-slate-400" viewBox="0 0 200 100">
          <path d="M20 100 C 20 80, 30 70, 40 70 C 50 70, 60 80, 60 100 Z" />
          <path d="M40 65 A 10 10 0 1 0 40 45 A 10 10 0 1 0 40 65 Z" />
          <path d="M70 100 C 70 75, 85 65, 100 65 C 115 65, 130 75, 130 100 Z" />
          <path d="M100 60 A 12 12 0 1 0 100 36 A 12 12 0 1 0 100 60 Z" />
          <path d="M140 100 C 140 82, 150 72, 160 72 C 170 72, 180 82, 180 100 Z" />
          <path d="M160 67 A 9 9 0 1 0 160 49 A 9 9 0 1 0 160 67 Z" />
        </svg>
      </div>

      {/* Bottom Right: Film Slate Silhouette */}
      <div className="absolute -bottom-4 -right-4 md:bottom-2 md:right-4 opacity-20 pointer-events-none transform -rotate-12">
        <svg
          className="w-28 h-28 md:w-44 md:h-44 fill-slate-300"
          viewBox="0 0 24 24"
        >
          <path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4h-2l2 4h-3l-2-4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z" />
        </svg>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[360px] md:min-h-[440px] px-6 py-12 text-center">
        {/* Surface Card Wrapper around Text for extra contrast */}
        <div className="bg-[#1E293B]/40 backdrop-blur-md border border-slate-700/50 p-8 md:p-12 rounded-2xl max-w-2xl shadow-xl">
          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-wider uppercase text-white drop-shadow-md">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-slate-300 text-base sm:text-lg font-normal max-w-lg mx-auto leading-relaxed">
            {subtitle}
          </p>

          {/* Call to Action Button */}
          <div className="mt-8">
            <NavLink
              to="/movies"
              className="px-8 py-3.5 bg-[#E11D48] hover:bg-[#be123c] active:scale-95 text-white font-semibold rounded-full shadow-lg shadow-[#E11D48]/30 transition-all duration-200 ease-in-out cursor-pointer"
            >
              {ctaText}
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}
