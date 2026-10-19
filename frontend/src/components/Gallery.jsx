import { useState, useEffect } from "react";

// Maps the tailwind layout grid classes depending on how many images returned
const balanceGridStructure = (processedList) => {
  const totalCount = processedList.length;

  return processedList.map((img, idx) => {
    let gridClass;

    if (totalCount === 5) {
      const portraitCount = processedList.filter((i) => i.isPortrait).length;

      if (portraitCount === 3) {
        if (idx === 0 || idx === 2 || idx === 3) {
          gridClass = "md:col-span-1 md:row-span-2 h-[520px]";
        } else {
          gridClass = "md:col-span-1 md:row-span-1 h-[248px]";
        }
      } else if (idx === 0 || idx === 1 || idx === 2) {
        gridClass = "md:col-span-1 md:row-span-2 h-[520px]";
      } else {
        gridClass = "md:col-span-1 md:row-span-1 h-[248px]";
      }
    } else if (totalCount === 3) {
      gridClass = img.isPortrait
        ? "md:col-span-1 h-[480px]"
        : "md:col-span-1 h-[320px]";
    } else {
      gridClass = img.isPortrait
        ? "md:col-span-1 md:row-span-2 h-[450px]"
        : "md:col-span-1 md:row-span-1 h-[220px]";
    }

    return { ...img, gridClass };
  });
};

// Pre-calculates aspect ratios so the grid can be laid out without gaps
const processImageAspectRatios = async (rawItems) => {
  const targetItems = (rawItems || []).slice(0, 5);

  const loadedImages = await Promise.all(
    targetItems.map(
      (item) =>
        new Promise((resolve) => {
          const img = new window.Image();
          img.src = item.image;
          img.onload = () =>
            resolve({ ...item, isPortrait: img.naturalHeight > img.naturalWidth });
          // If an image link fails, default to landscape layout
          img.onerror = () => resolve({ ...item, isPortrait: false });
        }),
    ),
  );

  return balanceGridStructure(loadedImages);
};

export default function Gallery({ gallery: rawGallery }) {
  const [gallery, setGallery] = useState([]);
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    let cancelled = false;
    processImageAspectRatios(rawGallery).then((processed) => {
      if (!cancelled) setGallery(processed);
    });
    return () => {
      cancelled = true;
    };
  }, [rawGallery]);

  // Only render the section when there are images
  if (!gallery.length) return null;

  const pageTitle = gallery[0]?.title || "Student Work Gallery";

  return (
    <section
      id="gallery"
      className="w-full bg-light p-6 md:p-12 selection:bg-accent selection:text-primary"
    >
      <header className="mb-12 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-widest text-primary uppercase">
          {pageTitle}
        </h2>
        <div className="h-0.5 w-16 bg-primary mx-auto mt-4 rounded-full" />
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto auto-rows-max">
        {gallery.map((item, index) => (
          <div
            key={item._id}
            onClick={() => setActiveImage(item)}
            className={`${item.gridClass} group relative overflow-hidden rounded-2xl border border-accent/20 shadow-md cursor-zoom-in transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:border-secondary`}
          >
            <img
              src={item.thumbnail || item.image}
              alt={item.title}
              loading="lazy"
              className="w-full h-full object-cover block transition-transform duration-700 ease-out group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-linear-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 p-6 flex flex-col justify-end">
              <span className="text-accent text-xs font-semibold uppercase tracking-widest translate-y-2 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                Work Item {index + 1}
              </span>
              {item.category && (
                <p className="text-light/80 text-xs font-medium uppercase mt-1 tracking-wider">
                  Tags: {item.category.replace("-", " ")}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/95 backdrop-blur-md cursor-zoom-out"
          onClick={() => setActiveImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] overflow-hidden rounded-2xl border border-accent/40 shadow-2xl">
            <img
              src={activeImage.image}
              alt={activeImage.title}
              className="w-full h-auto max-h-[90vh] object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-secondary/90 text-light backdrop-blur-xs p-5 text-center text-sm tracking-wide border-t border-accent/20">
              {activeImage.title}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
