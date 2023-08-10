"use client"
import React,{useEffect} from "react";
import svgs from "../../../public/index";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.7,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const features = [
  {
    id: 1,
    svg: svgs.fast,
    title: "Faster Response Times",
    description: "Minimize wait times for customer inquiries.",
  },
  {
    id: 2,
    svg: svgs.automate,
    title: "Automation",
    description: "Reduce manual effort and increase efficiency.",
  },
  {
    id: 3,
    svg: svgs.allday,
    title: "24/7 Availability",
    description:
      "Provide instant assistance anytime, improving customer satisfaction.",
  },
  {
    id: 4,
    svg: svgs.scale,
    title: "Scalability",
    description: "Handle a large volume of inquiries simultaneously.",
  },
  {
    id: 5,
    svg: svgs.save,
    title: "Cost Savings",
    description:
      "Lower labor expenses by replacing or supplementing human agents.",
  },
  {
    id: 6,
    svg: svgs.personalize,
    title: "Personalization",
    description:
      "Deliver tailored support based on customer data and behavior.",
  },
  {
    id: 7,
    svg: svgs.accurate,
    title: "Improved Accuracy",
    description: "Provide consistent and reliable responses.",
  },
  {
    id: 8,
    svg: svgs.learn,
    title: "Continuous Learning",
    description: "Adapt and improve over time with machine learning.",
  },
  {
    id: 9,
    svg: svgs.efficient,
    title: "Enhanced Efficiency",
    description: "Streamline support processes for faster issue resolution.",
  },
];
const Features = () => {
  return (
    <section className="h-screen m-4 md:m-8 max-sm:pt-20 dark:bg-transparent pt-10 justify-center dark:text-gray-100 ">
      <div className="container mx-auto p-4 my-6 space-y-2 text-center ">
        <h2 className="text-xl sm:text-2xl md:text-5xl text-gray-50 font-bold">
          Elevating User Experience through Support
        </h2>
        <p className="dark:text-gray-50">Your satisfaction, our priority.</p>
      </div>
      <div className="container mx-auto grid justify-center text-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
			<>
              <motion.ul
                className="container flex items-center justify-center"
                variants={container}
                initial="hidden"
                animate="visible"
				whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    key={feature.id}
              >
          <div className="flex flex-col max-sm:py-1 items-center max-sm:mb-6 px-10 py-5 border border-transparent rounded-full shadow-gray-900 shadow-lg bg-opacity-50 backdrop-filter backdrop-blur-lg ">
               <motion.li className="item flex flex-col justify-center items-center gap-2 " variants={item} >
                  <img src={feature.svg.src} className="h-10 w-10 "  />
                  <h3 className="text-md max-sm:gap-0 font-bold sm:text-md md:text-2xl text-green-300 ">
                    {feature.title}
                  </h3>
                  <p className="text-gray-50">{feature.description}</p>
				  </motion.li>
          </div>
              </motion.ul>
            </>
        ))}
        </div>
    </section>
  );
};

export default Features;
