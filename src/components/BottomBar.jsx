import { useDispatch } from "react-redux";
import { addWindow } from "../features/windows/windowSlice";
import { AiFillWindows } from "react-icons/ai";
import { motion } from "framer-motion";

function BottomBar() {
  const dispatch = useDispatch();

  return (
    <footer className="absolute bottom-0 w-screen p-2 flex justify-center bg-black">
      <div className="text-neutral-100 flex gap-3">
        <motion.button whileHover={{ scale: 1.2 }}>
          <AiFillWindows />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.2 }}
          onClick={() => dispatch(addWindow({ name: "soy un programa" }))}
        >
          soy un programa
        </motion.button>
      </div>
    </footer>
  );
}

export default BottomBar;
