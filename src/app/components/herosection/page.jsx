
import { IoIosAdd } from "react-icons/io";

const HeroSection = () => {
    return (
       <div className="hero bg-[#f8fafcFF] min-h-screen">
  <div className="hero-content text-center">
    <div>
      <h1 className="text-5xl font-bold">Friends to keep close in your life</h1>
      <p className="py-6">
        Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
relationships that matter most.
      </p>
      <button className="btn bg-[#244D3F] text-white"><span className='text-xl'><IoIosAdd /></span>Add a Friend</button>
    </div>
  </div>
</div>
    );
};

export default HeroSection;