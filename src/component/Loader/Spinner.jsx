// import { MoonLoader } from 'react-loader-spinner';
import { PuffLoader } from 'react-spinners';

const Spinner = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-blue-200">
      {/* <MoonLoader /> */}
      <PuffLoader  color="#000" size={60} />
    </div>
  );
};

export default Spinner;
