# Hands-On Lab – Build Your First TF Tree

### Step 1: Create a ROS 2 Package
ros2 pkg create tf_lab --build-type ament_python

### Step 2: Add a Transform Publisher
Publish:

- map → base_link  
- base_link → camera_link  
- base_link → imu_link  

### Step 3: Visualize in Rviz2
Enable TF and check if:

- Frames appear  
- Arrows show correct orientation  
- Distances are accurate  

### Step 4: Move the Robot
Publish dynamic transforms (simulate movement):

- Move forward  
- Rotate  
- Tilt camera  

### Goal
Build a **fully working TF2 tree**.
