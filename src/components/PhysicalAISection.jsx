// import React from "react";
// import styles from "./PhysicalAISection.module.css";
// import { FaRobot, FaGlobe, FaBrain, FaMicrophone } from "react-icons/fa";

// const modules = [
//   {
//     icon: <FaRobot size={40} color="#6a0dad" />,
//     title: "Module 1: Robotic Control Foundations",
//     focus: "Understanding the basics of robot communication",
//     points: [
//       "Introduction to ROS 2 architecture and message passing",
//       "Connecting Python agents to robot controllers",
//       "Designing humanoid structures using URDF",
//     ],
//   },
//   {
//     icon: <FaGlobe size={40} color="#6a0dad" />,
//     title: "Module 2: Simulated Worlds (Gazebo & Unity)",
//     focus: "Create virtual environments for robot testing",
//     points: [
//       "Building realistic physics simulations in Gazebo",
//       "Visualizing humanoid interaction in Unity",
//       "Testing sensors like LiDAR, Cameras, and IMUs",
//     ],
//   },
//   {
//     icon: <FaBrain size={40} color="#6a0dad" />,
//     title: "Module 3: AI-Enhanced Robotics",
//     focus: "Train robots to perceive and act intelligently",
//     points: [
//       "Simulate real-world scenarios with NVIDIA Isaac",
//       "Use Isaac ROS for optimized navigation and vision",
//       "Plan robot motion for bipedal movements",
//     ],
//   },
//   {
//     icon: <FaMicrophone size={40} color="#6a0dad" />,
//     title: "Module 4: Language-Driven Actions",
//     focus: "Integrate natural language with robot commands",
//     points: [
//       "Voice-controlled tasks using AI speech models",
//       "Translate user commands into robot operations",
//       "Capstone: Autonomous humanoid completing tasks independently",
//     ],
//   },
// ];

// export default function PhysicalAISection() {
//   return (
//     <section className={styles.section}>
//       <h2 className={styles.sectionTitle}>Physical AI in Practice</h2>
//       <p className={styles.sectionSubtitle}>
//         Focus: Applying AI concepts to control real-world humanoid robots
//       </p>
//       <p className={styles.sectionGoal}>
//         Goal: Equip students with hands-on skills to bridge AI theory and robotic applications, enabling robots to perceive, plan, and act intelligently.
//       </p>

//       <h3 className={styles.overviewTitle}>Course Overview</h3>
//       <p className={styles.overviewText}>
//         Explore the intersection of AI and robotics in realistic environments. This course teaches students to simulate, control, and deploy humanoid robots capable of human-like interaction and task execution.
//       </p>

//       <div className={styles.modules}>
//         {modules.map((mod, idx) => (
//           <div key={idx} className={styles.moduleCard}>
//             <div className={styles.moduleIcon}>{mod.icon}</div>
//             <h4 className={styles.moduleTitle}>{mod.title}</h4>
//             <p className={styles.moduleFocus}>{mod.focus}</p>
//             <ul className={styles.modulePoints}>
//               {mod.points.map((point, i) => (
//                 <li key={i}>{point}</li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
import React from "react";
import styles from "./PhysicalAISection.module.css";
import { FaRobot, FaGlobe, FaBrain, FaMicrophone } from "react-icons/fa";

const modules = [
  {
    icon: <FaRobot size={40} color="#6a0dad" />,
    title: "Module 1: Robotic Nervous System (ROS 2)",
    focus: "Middleware for robot control",
    points: [
      "Learn ROS 2 Nodes, Topics, and Services",
      "Bridge Python agents to ROS controllers using rclpy",
      "Understand humanoid structure via URDF",
    ],
  },
  {
    icon: <FaGlobe size={40} color="#6a0dad" />,
    title: "Module 2: The Digital Twin (Gazebo & Unity)",
    focus: "Physics simulation & environment building",
    points: [
      "Simulate physics, gravity, and collisions in Gazebo",
      "Human-robot interaction using Unity high-fidelity rendering",
      "Test sensors: LiDAR, Depth Cameras, IMUs",
    ],
  },
  {
    icon: <FaBrain size={40} color="#6a0dad" />,
    title: "Module 3: AI-Robot Brain (NVIDIA Isaac™)",
    focus: "Advanced perception and AI training",
    points: [
      "Photorealistic simulation & synthetic data generation with Isaac Sim",
      "Use Isaac ROS for hardware-accelerated VSLAM and navigation",
      "Plan bipedal humanoid movement using Nav2",
    ],
  },
  {
    icon: <FaMicrophone size={40} color="#6a0dad" />,
    title: "Module 4: Vision-Language-Action (VLA)",
    focus: "LLMs integrated with robotics",
    points: [
      "Voice-to-Action using OpenAI Whisper",
      'Translate natural language commands (e.g., "Clean the room") into ROS 2 actions',
      "Capstone: Autonomous humanoid completes tasks independently",
    ],
  },
];

export default function PhysicalAISection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Physical AI & Humanoid Robotics</h2>
      <p className={styles.sectionSubtitle}>
        Focus: AI systems in the physical world with embodied intelligence.
      </p>
      <p className={styles.sectionGoal}>
        Goal: Apply AI knowledge to control humanoid robots in both simulated and real-world environments.
      </p>

      <h3 className={styles.overviewTitle}>Quarter Overview</h3>
      <p className={styles.overviewText}>
        Explore how AI extends beyond digital spaces into real-world applications. Students design, simulate, and deploy humanoid robots capable of natural human interaction using ROS 2, Gazebo, Unity, and NVIDIA Isaac.
      </p>

      <div className={styles.modules}>
        {modules.map((mod, idx) => (
          <div key={idx} className={styles.moduleCard}>
            <div className={styles.moduleIcon}>{mod.icon}</div>
            <h4 className={styles.moduleTitle}>{mod.title}</h4>
            <p className={styles.moduleFocus}>{mod.focus}</p>
            <ul className={styles.modulePoints}>
              {mod.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <section className={styles.whySection}>
        <h3>Why Physical AI Matters</h3>
        <p>
          Humanoid robots are designed to operate in human environments and learn from real-world interactions. Physical AI bridges digital intelligence and real-world execution, enabling robots to perform tasks naturally in our physical world.
        </p>
      </section>

      <section className={styles.learningOutcomes}>
        <h3>Learning Outcomes</h3>
        <ul>
          <li>Understand principles of Physical AI and embodied intelligence</li>
          <li>Master ROS 2 for robotic control</li>
          <li>Simulate robots in Gazebo and Unity</li>
          <li>Develop AI perception and navigation with NVIDIA Isaac</li>
          <li>Design humanoid robots for natural interactions</li>
          <li>Integrate LLM models for conversational robotics</li>
        </ul>
      </section>
    </section>
  );
}
