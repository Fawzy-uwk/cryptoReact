import { RingLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="w-full h-[100dvh] flex items-center justify-center">
      <RingLoader color="#499ebc" size={55} />
    </div>
  );
};

export default Loader;
