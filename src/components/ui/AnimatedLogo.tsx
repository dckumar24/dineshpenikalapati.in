import { motion } from 'framer-motion'
import myLogoSvg from '../../../assets/mylogo.svg'

interface AnimatedLogoProps {
  size?: 'w-8' | 'w-10' | 'w-12' | 'w-16'
}

export default function AnimatedLogo({ size = 'w-16' }: AnimatedLogoProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="cursor-pointer"
    >
      <style>{`
        @keyframes drawPath {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animated-logo {
          animation: drawPath 4s ease-in-out;
          filter: drop-shadow(0 0 8px rgba(0, 245, 255, 0.6));
        }

        .animated-logo:hover {
          animation: drawPath 2s ease-in-out;
        }
      `}</style>
      <img 
        src={myLogoSvg} 
        alt="Dinesh Logo" 
        className={`animated-logo ${size} h-auto`}
      />
    </motion.div>
  )
}
