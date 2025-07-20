import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Lightbulb, 
  Code, 
  TestTube, 
  Rocket, 
  Users, 
  BarChart3,
  ArrowDown 
} from 'lucide-react';

const PipelineStep = ({ step, index, isLast }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="relative flex items-center justify-center mb-16">
      {/* Connecting line */}
      {!isLast && (
        <motion.div
          initial={{ height: 0 }}
          animate={isInView ? { height: '100px' } : { height: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-neon-blue to-electric-blue z-0"
        />
      )}

      {/* Step card */}
      <motion.div
        initial={{ 
          opacity: 0, 
          x: isEven ? -100 : 100,
          scale: 0.8 
        }}
        animate={isInView ? { 
          opacity: 1, 
          x: 0,
          scale: 1 
        } : {}}
        transition={{ 
          duration: 0.8,
          type: "spring",
          stiffness: 100 
        }}
        className={`relative z-10 w-full max-w-md ${isEven ? 'md:mr-auto md:ml-0' : 'md:ml-auto md:mr-0'}`}
      >
        <div className="glass-effect rounded-xl p-6 neon-border hover:shadow-lg hover:shadow-neon-blue/20 transition-all duration-300 group">
          {/* Step number */}
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-neon-blue text-black rounded-full flex items-center justify-center font-bold text-sm">
            {step.number}
          </div>

          {/* Icon */}
          <div className="flex items-center justify-center w-16 h-16 bg-neon-blue/10 rounded-full mb-4 group-hover:bg-neon-blue/20 transition-colors duration-300">
            <step.icon className="w-8 h-8 text-neon-blue group-hover:scale-110 transition-transform duration-300" />
          </div>

          {/* Content */}
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors duration-300">
            {step.title}
          </h3>
          <p className="text-gray-300 leading-relaxed">
            {step.description}
          </p>

          {/* Features list */}
          <ul className="mt-4 space-y-2">
            {step.features.map((feature, idx) => (
              <li key={idx} className="flex items-center text-sm text-gray-400">
                <div className="w-1.5 h-1.5 bg-neon-blue rounded-full mr-2"></div>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

const Pipeline = () => {
  const steps = [
    {
      number: 1,
      title: "Ideation & Planning",
      icon: Lightbulb,
      description: "Transform your vision into a structured roadmap with detailed planning and strategic thinking.",
      features: ["Requirements Analysis", "User Research", "Technical Architecture", "Project Timeline"]
    },
    {
      number: 2,
      title: "Development",
      icon: Code,
      description: "Build robust, scalable solutions using cutting-edge technologies and best practices.",
      features: ["Modern Frameworks", "Clean Code", "Version Control", "Code Reviews"]
    },
    {
      number: 3,
      title: "Testing & QA",
      icon: TestTube,
      description: "Ensure quality and reliability through comprehensive testing and quality assurance.",
      features: ["Unit Testing", "Integration Testing", "Performance Testing", "Security Audits"]
    },
    {
      number: 4,
      title: "Deployment",
      icon: Rocket,
      description: "Launch your project with confidence using automated deployment and monitoring systems.",
      features: ["CI/CD Pipeline", "Cloud Infrastructure", "Monitoring", "Backup Systems"]
    },
    {
      number: 5,
      title: "Collaboration",
      icon: Users,
      description: "Foster teamwork and communication throughout the entire development lifecycle.",
      features: ["Team Communication", "Project Management", "Documentation", "Knowledge Sharing"]
    },
    {
      number: 6,
      title: "Analytics & Growth",
      icon: BarChart3,
      description: "Measure success and drive continuous improvement through data-driven insights.",
      features: ["Performance Metrics", "User Analytics", "A/B Testing", "Optimization"]
    }
  ];

  return (
    <section id="pipeline" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
            Our Development Pipeline
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Follow our proven process from concept to completion, ensuring quality and success at every step.
          </p>
        </motion.div>

        <div className="relative">
          {steps.map((step, index) => (
            <PipelineStep
              key={step.number}
              step={step}
              index={index}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pipeline;