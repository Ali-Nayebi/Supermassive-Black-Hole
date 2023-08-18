import { motion } from 'framer-motion';
import LineGradient from '../components/LineGradient';

const Members = ({ setSelectedPage }) => {
  return (
    <section id="members" className="pt-10 pb-24">
      <motion.div
        className="md:w-2/4 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-5xl">
            <span className="text-red">MEMBERS</span>
          </p>
          <div className="flex justify-center mt-2">
            <LineGradient width="w-2/3" />
          </div>
        </div>
      </motion.div>

      <div className="md:flex md:justify-between mt-5 gap-10">
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          onViewportEnter={() => setSelectedPage('members')}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="text-center z-10 bg-black">
            <p className="font-playfair p-5 font-semibold text-4xl">
              Ali Nayebi
            </p>
            <img
              alt="Ali Nayebi"
              className="z-10 w-full max-w-[400px] m-auto md:max-w-[600px]"
              src="assets/ali.jpg"
            />

            <p className="font-playfair font-semibold text-3xl mt-3">
              Experience
            </p>
          </div>
        </motion.div>
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          onViewportEnter={() => setSelectedPage('members')}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="text-center z-10 bg-black">
            <p className="font-playfair p-5 font-semibold text-5xl">
              Ali Nayebi
            </p>
            <img
              alt="Ali Nayebi"
              className="z-10 w-full max-w-[400px] m-auto md:max-w-[600px]"
              src="assets/ali.jpg"
            />

            <p className="font-playfair font-semibold text-3xl mt-3">
              Experience
            </p>
          </div>
        </motion.div>
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          onViewportEnter={() => setSelectedPage('members')}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="text-center z-10 bg-black">
            <p className="font-playfair p-5 font-semibold text-5xl">
              Ali Nayebi
            </p>
            <img
              alt="Ali Nayebi"
              className="z-10 w-full max-w-[400px] m-auto md:max-w-[600px]"
              src="assets/ali.jpg"
            />

            <p className="font-playfair font-semibold text-3xl mt-3">
              Experience
            </p>
          </div>
        </motion.div>
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          onViewportEnter={() => setSelectedPage('members')}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="text-center z-10 bg-black">
            <p className="font-playfair p-5 font-semibold text-5xl">
              Ali Nayebi
            </p>
            <img
              alt="Ali Nayebi"
              className="z-10 w-full max-w-[400px] m-auto md:max-w-[600px]"
              src="assets/ali.jpg"
            />

            <p className="font-playfair font-semibold text-3xl mt-3">
              Experience
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Members;
