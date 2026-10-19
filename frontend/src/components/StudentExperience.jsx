import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, UserCircle2 } from "lucide-react";
import { baseUrl, subDomain } from "../utils/baseUrl";

const StudentExperience = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(`${baseUrl}/testimonial/frontend?subdomain=${subDomain}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
          const data = await response.json();
          setTestimonials(data.data);
        } else {
          console.error("Couldn't fetch testimonies.");
        }
      } catch {
        console.error("Error while fetching testimonials.");
      }
    };
    fetchTestimonials();
  }, []);

  useEffect(() => {
    const updateCardsPerPage = () => {
      if (window.innerWidth < 768) {
        setCardsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerPage(2);
      } else {
        setCardsPerPage(3);
      }
    };

    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);
    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []);

  if (testimonials.length === 0) return null;

  const isSlider = testimonials.length > cardsPerPage;

  const safePage =
    currentPage >= Math.ceil(testimonials.length / cardsPerPage)
      ? 0
      : currentPage;

  const visibleTestimonials = isSlider
    ? testimonials.slice(
        safePage * cardsPerPage,
        safePage * cardsPerPage + cardsPerPage
      )
    : testimonials;

  const totalPages = Math.ceil(testimonials.length / cardsPerPage);

  const nextPage = () => setCurrentPage((prev) => (prev + 1) % totalPages);
  const prevPage = () =>
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);

  return (
    <section className="sm:py-24 py-8 px-6 bg-light w-full" id="testimony">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-secondary font-bold tracking-[0.3em] uppercase text-xs mb-4"
            >
              Student Experience
            </motion.p>
            <h2 className="text-3xl md:text-5xl font-bold text-primary tracking-tighter">
              What Our{" "}
              <span className="text-secondary normal font-serif">
                Students Say
              </span>
            </h2>
            <div className="w-16 h-1 bg-primary mt-4" />
          </motion.div>

          <div className="flex flex-row items-center gap-5">
            <p className="text-secondary font-bold uppercase tracking-[0.2em] text-xs">
              Real Stories from our Haldwani Center
            </p>
            {isSlider && (
              <div className="flex gap-2">
                <button
                  onClick={prevPage}
                  className="p-2 border border-primary rounded-full hover:bg-primary hover:text-light transition-all"
                  aria-label="Previous testimonials"
                >
                  <ChevronLeft size={18} className="text-primary" />
                </button>
                <button
                  onClick={nextPage}
                  className="p-2 border border-primary rounded-full hover:bg-primary hover:text-light transition-all"
                  aria-label="Next testimonials"
                >
                  <ChevronRight size={18} className="text-primary" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="relative">
          <motion.div
            layout
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${
              isSlider ? "min-h-60" : ""
            }`}
          >
            <AnimatePresence mode="wait">
              {visibleTestimonials.map((review, index) => (
                <motion.div
                  key={review._id || index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative group h-full"
                >
                  <div className="absolute -top-4 -left-2 z-10 p-3 bg-accent rounded-xl shadow-lg group-hover:-rotate-12 transition-transform duration-300">
                    <Quote size={20} className="text-primary fill-primary" />
                  </div>

                  <div className="bg-white p-8 rounded-[2.5rem] border border-primary shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 h-full flex flex-col justify-between">
                    <p className="text-primary font-medium leading-relaxed mb-8">
                      {review.description.replace(/<\/?p>/g, "")}
                    </p>

                    <div className="flex items-center gap-4 border-t border-primary/20 pt-6">
                      <div className="w-12 h-12 bg-primary/5 rounded-full overflow-hidden flex items-center justify-center shrink-0">
                        {review.avatar ? (
                          <img
                            src={review.avatar}
                            alt={review.name}
                            className="w-full h-full object-cover rounded-full"
                            loading="lazy"
                          />
                        ) : (
                          <UserCircle2 size={32} className="text-secondary" />
                        )}
                      </div>
                      <div>
                        <p className="text-primary text-sm uppercase tracking-wider font-semibold">
                          {review.name}
                        </p>
                        {review.designation && (
                          <p className="text-secondary text-[10px] font-bold uppercase tracking-widest">
                            {review.designation}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Pagination Dots */}
        {isSlider && (
          <div className="flex items-center justify-center gap-2 mt-10">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`h-2 rounded-full transition-all ${
                  safePage === index ? "w-8 bg-primary" : "w-2 bg-secondary/30"
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default StudentExperience;

