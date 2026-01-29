"use client";

import { MainPortfolioItem } from "@/lib/data";

interface BrandGuidelinesProps {
  project: Partial<MainPortfolioItem>;
}

export const ProjectBrandGuidelines = ({ project = {} }: BrandGuidelinesProps) => {
  const {
    palette = [],
    primaryFont = { label: "" },
    secondaryFont = { label: "" },
  } = project.typographyColorScheme || {};

  return (
    <div className=" text-slate-900 px-6 md:px-12 py-16 max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16 items-start rounded-2xl">
      {palette?.length > 0 && (
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-sm font-black uppercase tracking-widest text-slate-400">Colour Palette</h2>
          <div className="flex gap-4">
            {palette.map((hex, i) => (
              <div
                key={i}
                className="w-12 h-28 md:w-14 md:h-36 rounded-full flex items-center justify-center relative"
                style={{ backgroundColor: hex }}
              >
                <span
                  className="absolute bottom-2 text-[10px] font-black rotate-90 md:rotate-0 whitespace-nowrap text-white"
                  style={{ writingMode: "vertical-rl" }}
                >
                  {hex}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {(primaryFont?.label || secondaryFont?.label) && (
        <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-end gap-12 md:gap-24">
          {primaryFont?.label && (
            <div className="space-y-2 text-center md:text-left">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                Primary Typeface
              </p>
               <p className="text-6xl font-black leading-none text-slate-900"
                 style={{ fontFamily: primaryFont.label }}
               >
                 Aa
               </p>
               <p className="text-sm mt-2 font-bold text-slate-500 italic">{primaryFont.label}</p>
            </div>
          )}
          {secondaryFont?.label && (
            <div className="space-y-2 text-center md:text-left">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                Secondary Typeface
              </p>
               <p
                 className="text-6xl font-light leading-none text-slate-400"
                 style={{ fontFamily: secondaryFont.label }}
               >
                 Aa
               </p>
               <p className="text-sm mt-2 font-bold text-slate-500 italic">{secondaryFont.label}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// export default ProjectBrandGuidelines;
