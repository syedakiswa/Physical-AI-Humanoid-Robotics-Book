const sidebars = {
    tutorialSidebar: [
        'intro',

        {
            type: 'category',
            label: 'Introduction',
            items: [
                'intro/What-is-Physical-AI',
                'intro/What-are-Humanoid-Robots',
                'intro/Why-Physical-AI-Matters',
                'intro/Course-Overview',
                'intro/Course-Goals-and-Learning-Outcomes',
                'intro/Weekly-Breakdown',
            ]
        },

        {
            type: 'category',
            label: 'Module 1: The Robotic Nervous System (ROS 2)',
            items: [
                'Module-1/Common-TF2-Commands',
                'Module-1/Understanding-Coordinate-Frames',
                'Module-1/Why-TF2-Is-Important',
                'Module-1/Transforms-and-Tree-Structure',
                'Module-1/Using-TF2-in-ROS2',
                'Module-1/Hands-On-Lab',
                'Module-1/Summary',
            ]
        },

        {
            type: 'category',
            label: 'Module 2: The Digital Twin (Gazebo & Unity)',
            items: [
                'Module-2/Introduction-to-Digital-Twin',
                'Module-2/Physics-Simulation-in-Gazebo',
                'Module-2/Creating-Robot-Models',
                'Module-2/Sensor-Simulation',
                'Module-2/Human-Robot-Interaction-in-Unity',
                'Module-2/Sim-to-Real-Workflow',
                'Module-2/Hands-On-Lab',
                'Module-2/Summary',
            ]
        },

        {
            type: 'category',
            label: 'Module 3: The AI-Robot Brain (NVIDIA Isaac™)',
            items: [
                'Module-3/Introduction-to-Isaac',
                'Module-3/NVIDIA-Isaac-Sim',
                'Module-3/Isaac-ROS',
                'Module-3/Nav2-for-Humanoids',
                'Module-3/Advanced-Perception',
                'Module-3/Reinforcement-Learning',
                'Module-3/Sim-to-Real-Deployment',
                'Module-3/Hands-On-Lab',
                'Module-3/Summary'
            ]
        },
        {
            type: 'category',
            label: 'Module 4: Vision - Language - Action(VLA)',
            items: [
                'Module-4/Introduction-to-VLA',
                'Module-4/Voice-to-Action-Whisper',
                'Module-4/Cognitive-Planning-with-LLMs',
                'Module-4/LLM-to-ROS2-Actions',
                'Module-4/Computer-Vision-for-VLA',
                'Module-4/Integrated-VLA-Pipeline',
                'Module-4/Capstone-Project-Autonomous-Humanoid',
                'Module-4/Summary',

            ]
        },
    ]
};

module.exports = sidebars;