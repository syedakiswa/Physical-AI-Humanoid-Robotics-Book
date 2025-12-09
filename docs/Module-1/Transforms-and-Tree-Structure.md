# Transforms and the TF Tree Structure

A **transform** describes:

- **Position**  
- **Rotation**  
- **Time**  

between two coordinate frames.

**Example:**

Transform from `base_link → camera_link`  

> Means: “How far and at what angle is the camera from the robot’s base?”

---

## The TF2 Tree

A **TF tree** is **always a tree** (no loops allowed).  

**Example humanoid robot TF tree:**

map
└── odom
└── base_link
├── imu_link
├── camera_link
└── arm_link
└── gripper_link


- Each **node** is a frame  
- Each **connection** is a transform  

---

### Why No Loops?

Loops cause **infinite conflicts**:  

A → B → C → A (Not allowed)


**TF2 prevents loops**, ensuring tree stability and reliable transformations.

---

## Static vs Dynamic Transforms

**Static Transform**  
- Does **not change** over time  
- Example: Camera permanently mounted on the robot  

**Dynamic Transform**  
- **Changes continuously** as the robot moves  
- Example: Walking robot, moving arm, or swinging gripper  

---