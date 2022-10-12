import { useDispatch } from "react-redux";
import { addWindow } from "../features/windows/windowSlice";

function BottomBar() {
  const dispatch = useDispatch();

  return (
    <footer className="absolute bottom-0 w-screen p-2 flex justify-center bg-black">
      <div className="text-neutral-100">
        <button
          onClick={() => dispatch(addWindow({ name: "soy un programa" }))}
        >
          soy un programa
        </button>
      </div>
    </footer>
  );
}

export default BottomBar;
