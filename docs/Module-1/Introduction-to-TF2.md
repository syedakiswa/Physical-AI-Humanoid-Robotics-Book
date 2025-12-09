# Introduction to TF2 – The Sacred Tree

**TF2** is a Transform Library in ROS that keeps track of the relationship between different **coordinate frames** over time.  

## Whenever a robot moves, rotates, turns its head, lifts an arm, or senses an object, ROS needs to know:

- Where is the robot right now?  
- Where is its camera?  
- Where is its arm?  
- Where is the object it wants to pick up?  

**TF2 answers all these questions.**

---

## Why is it Called “The Sacred Tree”?

Every robot has a **tree of coordinate frames**, and TF2 protects and manages this tree.  

**Example of a TF2 frame chain:**

map → odom → base_link → camera_link → gripper_link



## This chain allows the robot to understand:

- How its body parts relate  
- What direction objects are in  
- How to plan motion safely  

Without TF2, robots would be **blind and confused**.

---

## Where TF2 Is Used

TF2 is essential for many robotics tasks, including:

- Sensor fusion  
- Motion planning  
- Navigation  
- Object manipulation  
- SLAM (Simultaneous Localization and Mapping)  
- Humanoid walking  
- AI-based perception  

**If you are building any Physical AI robot, TF2 is a core skill.**

---