import { motion } from "framer-motion";
import { FaLeaf, FaUserCheck, FaSeedling } from "react-icons/fa";
import { use } from "react";
const promise=fetch('/why.json').then(res=>res.json());
const iconMap = {
  leaf: <FaLeaf />,
  expert: <FaUserCheck />,
  quality: <FaSeedling />
};

const Why = () => {
    const data=use(promise);
  return (
    <section className="my-20 px-4">
      <h2 className="text-3xl font-bold text-center text-green-600 mb-3">
        🌿 Why Choose GreenNest?
      </h2>
      <p className="text-center text-gray-500 mb-10">
        We care for your plants as much as you do
      </p>

      <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
        {data.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="card bg-base-100 shadow-md hover:shadow-xl transition-all"
          >
            <div className="card-body items-center text-center">
              <div className="text-4xl text-green-500 mb-3">
                {iconMap[item.icon]}
              </div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Why;
