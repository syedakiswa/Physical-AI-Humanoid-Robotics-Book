# Understanding Coordinate Frames

A **coordinate frame** defines:

- An **origin** `(0,0,0)`  
- A **direction** for X, Y, and Z axes  
- **Rotation/orientation**  

Robots use coordinate frames to understand:

- Where they are  
- Where other objects are  
- How to move from one point to another  

---

## Local vs Global Frames

### Global Frame (`map` / `world`)
- Represents the robot’s **position in the world**  

### Local Frame (`base_link`)
- Represents the robot’s **own body**  

### Sensor Frames (`camera`, `LiDAR`, `IMU`)
- Provide the robot with **perception of its surroundings**  

---

## Frame Example

If your camera sees a cup, ROS asks:

> “Where is the cup? In the camera frame or the robot frame?”

**TF2 helps convert frames:**

cup_in_camera_frame → cup_in_base_frame → cup_in_world_frame



This conversion is **required for navigation, motion planning, and object manipulation**.

---