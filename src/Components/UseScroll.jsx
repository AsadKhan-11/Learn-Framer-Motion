import { motion, rgba, useScroll, useTransform } from "framer-motion";
import React from "react";

const UseScroll = () => {
  // scrolly because we are looking for the scroller in the y direction
  const { scrollYProgress } = useScroll();

  // This is used to make the bar change from one color to another

  const background = useTransform(
    scrollYProgress,
    [0, 1],
    ["rgba(50, 50, 90)", "rgba(200, 200, 20)"]
  );

  return (
    <div>
      <motion.div
        style={{
          scaleX: scrollYProgress,
          width: "100%",
          height: "5px",
          position: "sticky",
          top: 0,
          // If not used transformOrigin the bar starts from the center
          transformOrigin: screenLeft,
          background,
        }}
      />

      <div className="container">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus,
          explicabo, quaerat natus soluta excepturi ipsa quasi vel ducimus
          beatae ea dolorum! Incidunt, provident doloremque. Tempora molestiae
          culpa veritatis et tenetur doloremque, cum iste nostrum sapiente
          natus. Quo porro perferendis nesciunt molestiae culpa optio, officiis
          quam consequatur non, natus enim nemo, nam veritatis iusto! Natus
          soluta libero perferendis tempora, voluptas quas quasi ea deleniti
          iure! Fuga velit sunt consequatur, tempore facilis nisi officiis a
          quam veniam voluptates illum odit placeat blanditiis nihil voluptas
          doloremque quae voluptatum molestiae. Ab assumenda vitae ipsum
          corrupti sequi quod reprehenderit obcaecati, repudiandae similique
          eius excepturi magni!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus,
          explicabo, quaerat natus soluta excepturi ipsa quasi vel ducimus
          beatae ea dolorum! Incidunt, provident doloremque. Tempora molestiae
          culpa veritatis et tenetur doloremque, cum iste nostrum sapiente
          natus. Quo porro perferendis nesciunt molestiae culpa optio, officiis
          quam consequatur non, natus enim nemo, nam veritatis iusto! Natus
          soluta libero perferendis tempora, voluptas quas quasi ea deleniti
          iure! Fuga velit sunt consequatur, tempore facilis nisi officiis a
          quam veniam voluptates illum odit placeat blanditiis nihil voluptas
          doloremque quae voluptatum molestiae. Ab assumenda vitae ipsum
          corrupti sequi quod reprehenderit obcaecati, repudiandae similique
          eius excepturi magni!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus,
          explicabo, quaerat natus soluta excepturi ipsa quasi vel ducimus
          beatae ea dolorum! Incidunt, provident doloremque. Tempora molestiae
          culpa veritatis et tenetur doloremque, cum iste nostrum sapiente
          natus. Quo porro perferendis nesciunt molestiae culpa optio, officiis
          quam consequatur non, natus enim nemo, nam veritatis iusto! Natus
          soluta libero perferendis tempora, voluptas quas quasi ea deleniti
          iure! Fuga velit sunt consequatur, tempore facilis nisi officiis a
          quam veniam voluptates illum odit placeat blanditiis nihil voluptas
          doloremque quae voluptatum molestiae. Ab assumenda vitae ipsum
          corrupti sequi quod reprehenderit obcaecati, repudiandae similique
          eius excepturi magni!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus,
          explicabo, quaerat natus soluta excepturi ipsa quasi vel ducimus
          beatae ea dolorum! Incidunt, provident doloremque. Tempora molestiae
          culpa veritatis et tenetur doloremque, cum iste nostrum sapiente
          natus. Quo porro perferendis nesciunt molestiae culpa optio, officiis
          quam consequatur non, natus enim nemo, nam veritatis iusto! Natus
          soluta libero perferendis tempora, voluptas quas quasi ea deleniti
          iure! Fuga velit sunt consequatur, tempore facilis nisi officiis a
          quam veniam voluptates illum odit placeat blanditiis nihil voluptas
          doloremque quae voluptatum molestiae. Ab assumenda vitae ipsum
          corrupti sequi quod reprehenderit obcaecati, repudiandae similique
          eius excepturi magni!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus,
          explicabo, quaerat natus soluta excepturi ipsa quasi vel ducimus
          beatae ea dolorum! Incidunt, provident doloremque. Tempora molestiae
          culpa veritatis et tenetur doloremque, cum iste nostrum sapiente
          natus. Quo porro perferendis nesciunt molestiae culpa optio, officiis
          quam consequatur non, natus enim nemo, nam veritatis iusto! Natus
          soluta libero perferendis tempora, voluptas quas quasi ea deleniti
          iure! Fuga velit sunt consequatur, tempore facilis nisi officiis a
          quam veniam voluptates illum odit placeat blanditiis nihil voluptas
          doloremque quae voluptatum molestiae. Ab assumenda vitae ipsum
          corrupti sequi quod reprehenderit obcaecati, repudiandae similique
          eius excepturi magni!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus,
          explicabo, quaerat natus soluta excepturi ipsa quasi vel ducimus
          beatae ea dolorum! Incidunt, provident doloremque. Tempora molestiae
          culpa veritatis et tenetur doloremque, cum iste nostrum sapiente
          natus. Quo porro perferendis nesciunt molestiae culpa optio, officiis
          quam consequatur non, natus enim nemo, nam veritatis iusto! Natus
          soluta libero perferendis tempora, voluptas quas quasi ea deleniti
          iure! Fuga velit sunt consequatur, tempore facilis nisi officiis a
          quam veniam voluptates illum odit placeat blanditiis nihil voluptas
          doloremque quae voluptatum molestiae. Ab assumenda vitae ipsum
          corrupti sequi quod reprehenderit obcaecati, repudiandae similique
          eius excepturi magni!
        </p>
      </div>
    </div>
  );
};

export default UseScroll;
