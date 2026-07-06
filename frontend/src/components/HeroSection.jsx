import { motion } from "framer-motion";
import { scrollTo } from "../utils/scrollTo";

const MAROON = "#7d1a3a";
const CREAM = "#f5e8d8";

export default function HeroSection() {
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: "easeOut" },
    },
  };

  return (
    <section
      className="w-full min-h-screen overflow-hidden bg-white"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <div className="w-full min-h-screen flex items-center px-5 md:px-12 lg:px-20 pt-[120px] md:pt-[130px] pb-14">
        <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16">
          {/* LEFT IMAGE */}
          <div className="order-2 lg:order-1 w-full flex justify-center lg:justify-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, x: -40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full max-w-[520px] lg:max-w-[620px]"
            >
              <div className="relative w-full h-[430px] sm:h-[520px] lg:h-[680px] overflow-hidden rounded-[28px] shadow-2xl">
                <video
  src="https://res.cloudinary.com/dl6fjer3y/video/upload/f_auto,q_auto/v1782977505/IMG_2824.MOV_paxtka.mp4"
  className="w-full h-full object-cover"
  autoPlay
  muted
  loop
  playsInline      
  preload="auto"
  controls={false}
  style={{
    objectPosition: "center center",
  }}
/>
              </div>

              <motion.div
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute top-5 left-5 hidden sm:block"
                style={{
                  background: "rgba(125,26,58,0.84)",
                  color: CREAM,
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 12,
                  letterSpacing: "2.5px",
                  textTransform: "uppercase",
                  padding: "9px 22px",
                  borderRadius: 40,
                  fontStyle: "normal",
                  backdropFilter: "blur(6px)",
                  boxShadow: "0 4px 20px rgba(125,26,58,0.25)",
                }}
              >
                Belleza Beauty School
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute right-4 bottom-8 hidden sm:flex"
                style={{
                  background: "rgba(255,255,255,0.92)",
                  border: "1px solid rgba(125,26,58,0.15)",
                  borderRadius: 16,
                  padding: "12px 20px",
                  backdropFilter: "blur(8px)",
                  alignItems: "center",
                  gap: 12,
                  boxShadow: "0 8px 32px rgba(125,26,58,0.12)",
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    background: MAROON,
                    borderRadius: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: CREAM,
                    fontSize: 17,
                    flexShrink: 0,
                  }}
                >
                  ✦
                </div>

                <div>
                  <p
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: "#5a1228",
                      margin: 0,
                      lineHeight: 1.2,
                    }}
                  >
                    500+ Students
                  </p>
                  <p
                    style={{
                      fontSize: 10,
                      color: "#9a6a6a",
                      margin: "4px 0 0",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                    }}
                  >
                    Successfully Trained
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT CONTENT */}
          <motion.div
            className="order-1 lg:order-2 flex flex-col items-center lg:items-start text-center lg:text-left"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.p
              variants={fadeUp}
              className="flex items-center gap-3 uppercase mb-4"
              style={{
                color: "#b06070",
                fontWeight: 500,
                fontSize: 10,
                letterSpacing: "3.5px",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: 28,
                  height: 1,
                  background: "#b06070",
                  opacity: 0.6,
                }}
              />
              Empowering Your Passion
              <span
                className="lg:hidden"
                style={{
                  display: "inline-block",
                  width: 28,
                  height: 1,
                  background: "#b06070",
                  opacity: 0.6,
                }}
              />
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="uppercase leading-[1.08] tracking-[2px] mb-5"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                color: MAROON,
                fontSize: "clamp(42px, 6vw, 88px)",
                fontWeight: 600,
              }}
            >
              Haldwani's
              <br />
              Beauty
              <br />
              Training
            </motion.h1>

            <motion.div
              variants={fadeUp}
              style={{
                width: 80,
                height: 1.5,
                background: `linear-gradient(90deg, ${MAROON}, transparent)`,
                marginBottom: 24,
              }}
            />

            <motion.p
              variants={fadeUp}
              className="leading-[1.95] font-light mb-8 max-w-[560px]"
              style={{
                color: "#9a6a6a",
                fontSize: "clamp(13px, 1.5vw, 16px)",
                letterSpacing: "0.4px",
              }}
            >
              At Belleza Beauty School Haldwani, learn professional{" "}
              <span style={{ fontWeight: 600, color: MAROON }}>
                Makeup, Hair, Nails and Skin
              </span>{" "}
              through practical classes, live model sessions and
              portfolio-building support.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8"
            >
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo("contact")}
                className="flex items-center gap-2 rounded-full uppercase font-medium"
                style={{
                  background: MAROON,
                  color: CREAM,
                  fontFamily: "'Montserrat', sans-serif",
                  border: "none",
                  cursor: "pointer",
                  padding: "14px 28px",
                  fontSize: 11,
                  letterSpacing: "2px",
                }}
              >
                Book Free Counselling
                <span
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: "50%",
                    background: CREAM,
                    color: MAROON,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 14,
                    fontWeight: 700,
                  }}
                >
                  →
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => (window.location.href = "tel:+919012360088")}
                className="rounded-full uppercase font-medium"
                style={{
                  border: `1.5px solid ${MAROON}`,
                  color: MAROON,
                  background: "transparent",
                  fontFamily: "'Montserrat', sans-serif",
                  cursor: "pointer",
                  padding: "13px 28px",
                  fontSize: 11,
                  letterSpacing: "2px",
                }}
              >
                Call Now
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// import { motion } from "framer-motion";

// export default function HeroSection() {
//   const container = {
//     hidden: {},
//     show: {
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const fadeUp = {
//     hidden: { opacity: 0, y: 40 },
//     show: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   };

//   return (
//     <section
//       className="w-full flex flex-col justify-between items-start h-screen bg-light p-7 overflow-hidden"
//       style={{
//         backgroundImage: "url('/assets/images/bg-img.jpg')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       <div className="absolute inset-0 bg-black/50"></div>
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute right-0 top-0 h-full w-3/4 bg-linear-to-l from-black/30 to-transparent  backdrop-blur-sm"></div>
//       </div>
//       {/* Logo */}
//       {/* <motion.div>
//         <img
//           src="/assets/images/logos/belleza_logo.svg"
//           alt="Belleza Logo"
//           className="w-25  object-contain"
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6 }}
//           whileHover={{ scale: 1.05 }}
//         />
//       </motion.div> */}

//       {/* Content */}
//       <motion.div
//         className="w-full h-full flex z-10 flex-col justify-center items-end gap-2 sm:mt-10"
//         variants={container}
//         initial="hidden"
//         animate="show"
//       >
//         <motion.h1
//           variants={fadeUp}
//           className="w-full md:w-1/2 font-extrabold text-4xl md:text-6xl text-right text-accent leading-tight tracking-tighter"
//         >
//           Become a Certified <br /> Beauty Professional <br /> in Dehradun
//         </motion.h1>

//         <motion.p
//           variants={fadeUp}
//           className="text-right text-md max-w-lg sm:max-w-xl leading-tight tracking-tight text-accent font-semibold"
//         >
//           Learn professional{" "}
//           <span className="font-bold normal">
//             Makeup, Hair, Nail, Skin & Cosmetology
//           </span>{" "}
//           with practical training, live model practice, expert guidance, and
//           career support at Belleza Beauty School Dehradun.
//         </motion.p>

//         <motion.p
//           variants={fadeUp}
//           className="text-right text-sm max-w-xl text-accent font-semibold"
//         >
//           Start your beauty career with international-standard training and
//           professional certification.
//         </motion.p>

//         {/* Buttons */}
//         <motion.div
//           variants={fadeUp}
//           className="flex flex-row items-center justify-center gap-2 mt-4"
//         >
//           <motion.button
//             className="px-5 sm:px-10 py-3 bg-primary rounded-full text-sm font-semibold tracking-tight capitalize text-light shadow-md"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Book Free Counselling
//           </motion.button>
//           <motion.button
//             className="px-10 py-3 bg-primary rounded-full text-sm font-semibold tracking-tight capitalize text-light shadow-md"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Call Now
//           </motion.button>
//         </motion.div>
//       </motion.div>

//       {/* Footer Info */}
//     </section>
//   );
// }
