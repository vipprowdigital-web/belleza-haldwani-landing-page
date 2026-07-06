

import { motion } from "framer-motion";
import {
  Award,
  Users,
  BookOpen,
  Sparkles,
  Briefcase,
  Camera,
} from "lucide-react";

const MAROON = "#7d1a3a";

const features = [
  {
    title: "Practical Classes from Day One",
    description:
      "Students learn through  practice sessions,This helps them understand techniques with confidence.",
    icon: <Sparkles className="w-6 h-6 md:w-7 md:h-7" />,
  },
  {
    title: "Live Model Exposure",
    description:
      "Live model practice gives students real experience of different skin types, face shapes, hair textures..",
    icon: <Users className="w-6 h-6 md:w-7 md:h-7" />,
  },
  {
    title: "Personal Trainer Guidance",
    description:
      "Our trainers guide studentsduring practice, correct mistakes,  improve their work quality.",
    icon: <BookOpen className="w-6 h-6 md:w-7 md:h-7" />,
  },
  {
    title: "Updated Beauty Techniques",
    description:
      "Students learn modern makeup, hair, nail, skin, that match current industry trends.",
    icon: <Award className="w-6 h-6 md:w-7 md:h-7" />,
  },
  {
    title: "Portfolio Support",
    description:
      "Students get opportunities to create work that can be used for their professional portfolio .",
    icon: <Briefcase className="w-6 h-6 md:w-7 md:h-7" />,
  },
  {
    title: "Certification & Career Guidance",
    description:
      "After course completion, students receive certification and guidance for freelancing, salon jobss.",
    icon: <Camera className="w-6 h-6 md:w-7 md:h-7" />,
  },
];

const WhyChooseUs = () => {
  return (
    <section
      className="py-20 md:py-24 px-4 md:px-6 overflow-hidden"
      style={{ background: "#ffffff" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              fontSize: "11px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#b06070",
              fontWeight: 500,
            }}
          >
            Why Choose Us
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7 }}
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "clamp(30px, 4vw, 48px)",
              fontWeight: 700,
              color: MAROON,
              marginTop: "12px",
              letterSpacing: "-0.5px",
              lineHeight: 1.15,
            }}
          >
            Why Students Choose{" "}
            <em style={{ fontStyle: "normal", color: "#5a1228" }}>
              Belleza Beauty School Haldwani
            </em>
          </motion.h2>

          <div
            style={{
              width: "40px",
              height: "2px",
              background: MAROON,
              borderRadius: "2px",
              margin: "16px auto 0",
              opacity: 0.5,
            }}
          />
        </div>

        {/* Circle Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 place-items-center">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.7 }}
              whileHover={{ scale: 1.04, transition: { duration: 0.3 } }}
              className="w-full max-w-[165px] sm:max-w-[210px] md:max-w-[260px] aspect-square rounded-full bg-white border border-[#f0e4d8] flex flex-col items-center justify-center text-center shadow-sm hover:shadow-xl transition-all duration-300"
              style={{
                padding: "14px",
              }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-[60px] md:h-[60px] rounded-full flex items-center justify-center mb-2 md:mb-3"
                style={{
                  background: "#f5e8d8",
                  color: MAROON,
                  flexShrink: 0,
                }}
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-[11px] sm:text-[13px] md:text-[15px] font-bold text-[#1a1a1a] leading-tight px-1 mb-1 md:mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[9px] sm:text-[11px] md:text-[12px] text-[#444444] leading-snug md:leading-relaxed font-normal px-1 line-clamp-4 md:line-clamp-none">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;;

// import { motion } from "framer-motion";
// import {
//   Award,
//   Users,
//   BookOpen,
//   Sparkles,
//   Briefcase,
//   Camera,
// } from "lucide-react";

// const features = [
//   {
//     title: "Learn from Basic to Professional Level",
//     description:
//       "Every course starts with fundamentals and gradually moves toward advanced techniques, so students can learn comfortably without confusional working skills.",
//     icon: <Sparkles className="w-6 h-6" />,
//   },
//   {
//     title: "Practice-Based Classes",
//     description:
//       "Our classes are designed around real practice. Students get regular hands-on sessions to improve finishing, speed, product usage and confidence.",
//     icon: <Users className="w-6 h-6" />,
//   },
//   {
//     title: "Real Beauty Industry Exposure",
//     description:
//       "Students learn how professional salons and freelance artists actually work — from hygiene and consultation to service delivery and client handling..",
//     icon: <BookOpen className="w-6 h-6" />,
//   },
//   {
//     title: "Personal Attention",
//     description:
//       "Trainers guide students during practice and help them correct mistakes, improve techniques and build confidence step by step.",
//     icon: <Award className="w-6 h-6" />,
//   },
//   {
//     title: "Certification for Career Growth",
//     description:
//       "After completing the course, students receive professional certification that supports them in freelancing, salon jobs and business opportunities.",
//     icon: <Briefcase className="w-6 h-6" />,
//   },
//   {
//     title: "Career & Freelancing Guidance",
//     description:
//       "Students are guided on how to start working, communicate with clients, set service charges, build a portfolio and promote their work",
//     icon: <Camera className="w-6 h-6" />,
//   },
// ];

// const WhyChooseUs = () => {
//   return (
//     <section className="pt-24 px-6 bg-light overflow-hidden">
//       <div className="max-w-7xl mx-auto">
//         {/* Header Section */}
//         <div className="text-center mb-10">
//           <motion.span
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-secondary font-bold tracking-[0.3em] uppercase text-xs"
//           >
//             Why Choose Us
//           </motion.span>
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1, duration: 0.8 }}
//             className="text-primary text-4xl md:text-5xl font-bold mt-4 tracking-tight"
//           >
//             The Belleza{" "}
//             <span className="normal font-serif text-secondary">Advantage</span>
//           </motion.h2>
//           <div className="w-24 h-1 bg-secondary mx-auto mt-6 rounded-full opacity-50" />
//         </div>

//         {/* Features Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {features.map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1, duration: 0.8 }}
//               whileHover={{ y: -10 }}
//               className="group bg-light p-8 rounded-4xl shadow-sm hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 border border-secondary"
//             >
//               <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-primary text-secondary transition-colors duration-300 bg-secondary-20">
//                 {item.icon}
//               </div>

//               <h3 className="text-primary text-xl font-bold  mb-2 group-hover:text-accent transition-colors">
//                 {item.title}
//               </h3>

//               <p className="text-secondary font-semibold leading-relaxed text-sm">
//                 {item.description}
//               </p>
//             </motion.div>
//           ))}
//         </div>

//         {/* Bottom Call to Action */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           className="mt-20 p-1 bg-linear-to-r from-transparent via-accent/30 to-transparent"
//         />
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;
