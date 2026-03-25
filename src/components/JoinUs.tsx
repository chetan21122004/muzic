import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const fadeRight = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 } },
};

const JoinUs = () => {
  return (
    <section className="bg-primary overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        <motion.div
          className="flex-1 flex flex-col justify-center px-8 lg:px-16 py-16"
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-foreground leading-tight mb-4"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Love teaching music online? Join Us!
          </motion.h2>
          <motion.p
            className="text-primary-foreground/80 text-base mb-8 max-w-md"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Become a Muziclub Certified Music Teacher and train students all around the world.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link to="/teach-with-us" className="inline-flex items-center justify-center self-start px-8 py-3 rounded-full bg-background text-primary font-bold text-sm hover:bg-background/90 transition-colors">
              Become A Teacher
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex-1 relative min-h-[320px] lg:min-h-[400px] bg-secondary flex items-center justify-center p-8"
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <img
            src="/illustrations/Welcome-pana.svg"
            alt="Teach with Muziclub"
            className="w-full max-w-sm h-auto object-contain drop-shadow-sm hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default JoinUs;
