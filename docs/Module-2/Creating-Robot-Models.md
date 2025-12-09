# Creating Robot Models

Robots in simulation need to be **described precisely**.  

### File Formats

- **URDF (Unified Robot Description Format)**: XML-based, describes robot links, joints, and sensors  
- **SDF (Simulation Description Format)**: Used by Gazebo for full physics simulation  

### URDF Example

```xml
<robot name="humanoid">
  <link name="base_link"/>
  <joint name="torso_joint" type="fixed"/>
  <link name="torso"/>
  <joint name="head_joint" type="revolute"/>
  <link name="head"/>
</robot>
```
Each link contains: mass, shape, size, and visual appearance.
Each joint defines: type, motion limits, and rotation axis.




## **04-Sensor-Simulation.md**

# Sensor Simulation

Robots need sensors to perceive the world. Simulation allows **testing sensors virtually**.

### Common Simulated Sensors

- **LiDAR**: Measures distances and maps surroundings  
- **Depth Cameras**: Create 3D perception of the environment  
- **IMUs**: Measure acceleration and orientation  
- **Force/Torque Sensors**: Detect forces at hands or legs  

### How It Works

- Gazebo generates virtual sensor data  
- Data is sent over ROS 2 topics  
- Robot control code reads it **as if using real sensors**