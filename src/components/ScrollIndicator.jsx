import { motion, useScroll } from 'motion/react';
const ScrollIndicator = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="z-10"
      id="scroll-indicator"
      style={{
        scaleX: scrollYProgress,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 8,
        originX: 0,
        backgroundColor: '#9AE600',
      }}
    />
  );
};

export default ScrollIndicator;
