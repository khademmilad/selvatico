
const stats = [
  { name: 'We envision empowering businesses with advanced AI and natural language processing tools to deliver personalized and efficient support experiences that drive customer satisfaction and loyalty.', value: 'Our Vision' },
  { name: 'We combine cutting-edge AI capabilities with a human touch, seamlessly integrating automation with human agents. This allows us to deliver a personalized and empathetic support experience that exceeds expectations.', value: 'What Sets Us Apart' },
  { name: 'Behind our platform is a dedicated team of talented individuals passionate about revolutionizing customer support. We collaborate to develop and enhance our platforms features, ensuring it remains at the forefront of innovation.', value: 'Our Team' },
  { name: 'We would love to hear from you! Whether you have questions, partnership opportunities, or simply want to say hello, feel free to reach out. Our team is here to assist you every step of the way. ', value: 'Get in Touch' },
]

export default function About() {
  return (
    <div className="relative text-left justify-start flex isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className=" max-w-4xl card bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-xl">
          <h2 className="text-4xl font-bold tracking-tight sm:text-6xl text-gray-500 ">About Support Sense</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
          Welcome to our website! We are Jawid and Milad, the founders of a cutting-edge SaaS platform that combines user support with the power of AI. We're thrilled to introduce you to our innovative solution designed to revolutionize the way businesses interact with their customers.
At our core, we believe in providing exceptional support experiences that foster strong relationships between companies and their users. We understand the challenges that organizations face in managing customer inquiries efficiently while maintaining high satisfaction levels. That's why we set out on a mission to create an intelligent, AI-powered platform that streamlines the support process and enhances customer engagement.
          </p>
        </div>
        
        <div className="mx-auto mt-10 max-w-7xl lg:mx-0 lg:max-w-none">
        
          <dl className="mt-16 grid grid-cols-1 gap-10 sm:mt-20 justify-center text-left sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="card bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-xl w-72 h-40 p-4 flex flex-col ">
                <dd className="text-2xl py-1 font-bold leading-9 tracking-tight text-gray-400 ">{stat.value}</dd>
                <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
