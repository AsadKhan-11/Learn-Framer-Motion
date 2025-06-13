import React from "react";
import { motion } from "framer-motion";
const Basics = () => {
  return (
    <div>

      {/* initial being the initial phase of the component and transition being while the animation phase  */}
      
      <motion.button
        className="button"
        whileHover={{ rotate: 10, scale: 0.9 }}
        initial={{}}
        transition={{ delay: 0.1, ease: "easeInOut" }}
      >
        Click me
      </motion.button>
    </div>
  );
};

export default Basics;
