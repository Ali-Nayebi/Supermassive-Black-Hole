import LineGradient from '../components/LineGradient';
import { motion } from 'framer-motion';
import { getTranslate } from '../../localization';

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, description }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(' ').join('-').toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">{description}</p>
      </div>
      <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  const translate = getTranslate();
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADERS */}
      <motion.div
        className="md:w-2/4 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">{translate.p}</span>
            {translate.j}
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">{translate.project}</p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <div className="sm:grid sm:grid-rows-3">
          <motion.div
            initial="hidden"
            whileInView="visible"
            className="sm:grid sm:grid-cols-3"
            viewport={{ once: true, amount: 0.5 }}
            variants={container}
          >
            {/* ROW 1 */}
            <div
              className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
            >
              {translate.bs}
            </div>
            <Project
              title="Project 1"
              description="Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla
          porttitor accumsan tincidunt."
            />
            <Project title="Project 2" />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            className="sm:grid sm:grid-cols-3"
            viewport={{ once: true, amount: 0.5 }}
            variants={container}
          >
            {/* ROW 2 */}
            <Project title="Project 3" />
            <Project title="Project 4" />
            <Project title="Project 5" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            className="sm:grid sm:grid-cols-3"
            viewport={{ once: true, amount: 0.5 }}
            variants={container}
          >
            {/* ROW 3 */}
            <Project title="Project 6" />
            <Project title="Project 7" />
            <div
              className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
            >
              {translate.su}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
