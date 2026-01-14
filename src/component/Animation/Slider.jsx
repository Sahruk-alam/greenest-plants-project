import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import tree1 from '../../assets/tree1.png';
import tree2 from '../../assets/tree2.png';
import tree3 from '../../assets/tree3.png';
const HeroSlider = () => {
  return (
    <div className="w-full h-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000 }}
        loop={true}
        pagination={{ clickable: true }}
        className="h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
      
          <div className=" flex bg-base-300 h-full justify-between items-center">
            
            <div className="flex ml-2 flex-col p-2 justify-center items-center">
            <h4 className="text-sm text-green-600 font-semibold">Take a plant</h4>
            <h2 className="text-sm font-semibold">Get 30% off </h2>
            <h5 className="text-sm">price : $20</h5>
            <button className="btn btn-success mt-3.5"> Shop Now</button>
            </div>
            <div className="">
                <img className="" src={tree1} alt="" /></div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
           <div className=" flex bg-base-300 h-full justify-between items-center">
            <div className="flex ml-2 flex-col p-2 justify-center items-center">
            <h4 className="text-sm text-green-600 font-semibold">Take a plant</h4>
            <h2 className="text-sm font-semibold">Get 20% off</h2>
            <h5 className="text-sm">price : $22</h5>
            <button className="btn btn-success mt-3.5"> Shop Now</button>
            </div>
            <div className="">
                <img className="" src={tree2} alt="" /></div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=" flex bg-base-300 h-full justify-between items-center">
            <div className="flex ml-2 flex-col p-2 justify-center items-center">
            <h4 className="text-sm text-green-600 font-semibold">Take a plant</h4>
            <h2 className="text-sm font-semibold">Get 50% off </h2>
            <h5 className="text-sm">price : $30</h5>
            <button className="btn btn-success mt-3.5"> Shop Now</button>
            </div>
            <div className="">
                <img className="" src={tree3} alt="" /></div>
          </div>
        </SwiperSlide> 
      </Swiper>
    </div>
  );
};

export default HeroSlider;
