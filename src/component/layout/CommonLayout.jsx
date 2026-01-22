import { FaGratipay, FaMeetup } from "react-icons/fa";
import Animation from "../Animation/Animation";
import PlantDetail from "../pages/PlantDetail";
import { use } from "react";
const PromiseData = fetch("/Tips.json").then((res) => res.json());
const MeetData = fetch("/Meet.json").then((res) => res.json());
const CommonLayout = () => {
  const data = use(PromiseData);
  const meetData = use(MeetData);
  return (
    <div>
      <Animation></Animation>
      <PlantDetail></PlantDetail>
      <div className="w-11/12 mx-auto mt-13">
        <h3 className="text-2xl flex gap-2 items-center justify-center font-semibold text-amber-600">
          <FaGratipay />
          Plant Care Tips
        </h3>
      </div>
      <div className="w-11/12  mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
        {data.map((tip) => (
          <div key={tip.id}
            className=" bg-white transition-all hover:scale-105 hover:bg-amber-100 p-4 rounded-xl shadow-lg">
            <h4 className="text-xl flex items-center text-yellow-700 gap-2 font-semibold">
              {tip.icon} {tip.title}
            </h4>
            <p>{tip.description}</p>
          </div>
        ))}
      </div>
      <div>
        <h3 className="text-2xl flex gap-2 items-center justify-center font-semibold text-blue-700">
          <FaMeetup />
          Meet Our Green Experts
        </h3>

        <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {meetData.map((meet) => (
            <div
              key={meet.expertId}
              className="w-11/12 mx-auto bg-base-300 my-6 p-4 border rounded-lg shadow-lg
               grid-cols-2 flex gap-4 items-center transition-all duration-300 hover:shadow-2xl hover:bg-blue-100 hover:scale-105 cursor-pointer">
              <img className="w-32 h-32 rounded-full object-cover"
                src={meet.image} alt={meet.name}/>
              <div>
                <h4 className="text-xl text-blue-900 font-semibold">
                  {meet.name}</h4>
                <p>{meet.specialization}</p>
                <p>{meet.experience}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommonLayout;
