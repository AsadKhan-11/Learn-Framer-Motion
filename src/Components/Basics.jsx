import React, { useState } from "react";
import { AnimatePresence, motion, spring } from "framer-motion";
const Basics = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {/* initial being the initial phase of the component and transition being while the animation phase  */}

      {/* You need to write motion. with the element that you want to have some kind of effect */}
      <motion.button
        className="button"
        // This makes the button give a shiver effect
        whileHover={{ x: [0, -5, 5, -5, 5, 0] }}
        initial={{}}
        transition={{ delay: 0.1, ease: "easeInOut" }}
        onClick={() => setIsVisible((prev) => !prev)}
      >
        Click me
      </motion.button>

      {/* When you need to use exit to delete the element from the dom you need to use AnimatePresence */}
      {/* Without popLayout, the black box would just disappear immediately. */}

      <AnimatePresence node="popLayout">
        {isVisible && (
          <motion.div
            className="blackbox"
            initial={{ rotate: 0, scale: 0 }}
            animate={{ rotate: 180, scale: 1 }}
            // Type spring gives a special spring like effect to the box
            transition={{ delay: 0.1, ease: "easeInOut", type: spring }}
            exit={{ rotate: 0, scale: 0 }}
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Basics;
