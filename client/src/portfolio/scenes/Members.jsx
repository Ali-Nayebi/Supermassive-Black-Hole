import { motion } from 'framer-motion';
import LineGradient from '../components/LineGradient';

const Members = ({ setSelectedPage }) => {
  const overlayStyles = `absolute opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center text-deep-blue`;
  return (
    <section id="members" className="pt-10 pb-24">
      {/* header */}
      <motion.div
        className="md:w-2/4 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
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
        {/* 1st */}
        <motion.div
          className="md:w-1/3 mt-10 relative"
          initial="hidden"
          whileInView="visible"
          onViewportEnter={() => setSelectedPage('members')}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="text-center z-10 ">
            <p className="font-playfair pt-1 px-5 font-semibold text-4xl">
              Ali Nayebi
            </p>
            <p className="font-playfair p-1 font-semibold text-xl">
              Front-End Developer
            </p>
            <div className="z-10 w-full max-w-[400px] m-auto md:max-w-[600px]">
              <div className={overlayStyles}>
                <img
                  alt="Ali Nayebi"
                  className="z-10 w-full max-w-[400px] m-auto md:max-w-[600px]"
                  src="assets/alii.JPG"
                />
              </div>
              <img
                alt="Ali Nayebi"
                className="z-10 w-full max-w-[400px] m-auto md:max-w-[600px]"
                src="assets/ali.jpg"
              />
            </div>

            <p className="font-playfair font-semibold text-3xl mt-3">
              Experience
            </p>
          </div>
        </motion.div>
        <motion.div
          className="md:w-1/3 mt-10 relative"
          initial="hidden"
          whileInView="visible"
          onViewportEnter={() => setSelectedPage('members')}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="text-center z-10 ">
            <p className="font-playfair pt-1 px-5 font-semibold text-4xl">
              Ali Nayebi
            </p>
            <p className="font-playfair p-1 font-semibold text-xl">
              Front-End Developer
            </p>
            <div className="z-10 w-full max-w-[400px] m-auto md:max-w-[600px]">
              <div className={overlayStyles}>
                <img
                  alt="Ali Nayebi"
                  className="z-10 w-full max-w-[400px] m-auto md:max-w-[600px]"
                  src="assets/alii.JPG"
                />
              </div>
              <img
                alt="Ali Nayebi"
                className="z-10 w-full max-w-[400px] m-auto md:max-w-[600px]"
                src="assets/ali.jpg"
              />
            </div>

            <p className="font-playfair font-semibold text-3xl mt-3">
              Experience
            </p>
          </div>
        </motion.div>
        <motion.div
          className="md:w-1/3 mt-10 relative"
          initial="hidden"
          whileInView="visible"
          onViewportEnter={() => setSelectedPage('members')}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="text-center z-10 ">
            <p className="font-playfair pt-1 px-5 font-semibold text-4xl">
              Ali Nayebi
            </p>
            <p className="font-playfair p-1 font-semibold text-xl">
              Front-End Developer
            </p>
            <div className="z-10 w-full max-w-[400px] m-auto md:max-w-[600px]">
              <div className={overlayStyles}>
                <img
                  alt="Ali Nayebi"
                  className="z-10 w-full max-w-[400px] m-auto md:max-w-[600px]"
                  src="assets/alii.JPG"
                />
              </div>
              <img
                alt="Ali Nayebi"
                className="z-10 w-full max-w-[400px] m-auto md:max-w-[600px]"
                src="assets/ali.jpg"
              />
            </div>

            <p className="font-playfair font-semibold text-3xl mt-3">
              Experience
            </p>
          </div>
        </motion.div>
        <motion.div
          className="md:w-1/3 mt-10 relative"
          initial="hidden"
          whileInView="visible"
          onViewportEnter={() => setSelectedPage('members')}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="text-center z-10 ">
            <p className="font-playfair pt-1 px-5 font-semibold text-4xl">
              Ali Nayebi
            </p>
            <p className="font-playfair p-1 font-semibold text-xl">
              Front-End Developer
            </p>
            <div className="z-10 w-full max-w-[400px] m-auto md:max-w-[600px]">
              <div className={overlayStyles}>
                <img
                  alt="Ali Nayebi"
                  className="z-10 w-full max-w-[400px] m-auto md:max-w-[600px]"
                  src="assets/alii.JPG"
                />
              </div>
              <img
                alt="Ali Nayebi"
                className="z-10 w-full max-w-[400px] m-auto md:max-w-[600px]"
                src="assets/ali.jpg"
              />
            </div>

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
