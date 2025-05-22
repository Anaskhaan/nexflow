const BrandGuidelines = ({ project = {} }) => {
  // Safely access nested properties with optional chaining
  const {
    palette = [],
    primaryFont = {},
    secondaryFont = {},
  } = project.typographyColorScheme || {};

  return (
    <div className=" text-white px-6 md:px-12 py-16 max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16 items-start rounded-2xl">
      {/* Only show if palette exists and has items */}
      {palette?.length > 0 && (
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-sm font-semibold">Colour Palette</h2>
          <div className="flex gap-4">
            {palette.map((hex, i) => (
              <div
                key={i}
                className="w-12 h-28 md:w-14 md:h-36 rounded-full flex items-center justify-center relative"
                style={{ backgroundColor: hex }}
              >
                <span
                  className="absolute bottom-2 text-xs font-medium rotate-90 md:rotate-0 whitespace-nowrap text-white"
                  style={{ writingMode: "vertical-rl" }}
                >
                  {hex}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Only show if fonts exist */}
      {(primaryFont?.label || secondaryFont?.label) && (
        <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-end gap-12 md:gap-24">
          {primaryFont?.label && (
            <div className="space-y-2 text-center md:text-left">
              <p className="text-xs font-semibold text-white/80">
                Primary Typeface
              </p>
              <p
                className={`text-6xl font-bold leading-none`}
                style={{ fontFamily: primaryFont.label }}
              >
                Aa
              </p>
              <p className="text-sm mt-1 font-light">{primaryFont.label}</p>
            </div>
          )}
          {secondaryFont?.label && (
            <div className="space-y-2 text-center md:text-left">
              <p className="text-xs font-semibold text-white/80">
                Secondary Typeface
              </p>
              <p
                className={`text-6xl font-light leading-none`}
                style={{ fontFamily: secondaryFont.label }}
              >
                Aa
              </p>
              <p className="text-sm mt-1 font-light">{secondaryFont.label}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BrandGuidelines;

// Add default props
BrandGuidelines.defaultProps = {
  project: {
    typographyColorScheme: {
      palette: [],
      primaryFont: {},
      secondaryFont: {},
    },
  },
};
