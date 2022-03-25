import "./App.css";
import { motion } from "framer-motion";
import { useState } from "react";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="App">
      <motion.div
        layout
        transition={{
          layout: {
            duration: 0.7,
            type: "spring",
          },
        }}
        className="card"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <motion.h2 layout="position" style={{ fontSize: "30px" }}>
          Shihab Shumon 🚀
        </motion.h2>
        {isOpen && (
          <motion.div
            className="expand"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9 }}
          >
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos perferendis minus mollitia facere error rem laboriosam
              ratione aliquid vero. Ad.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia,
              molestiae?
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default App;
