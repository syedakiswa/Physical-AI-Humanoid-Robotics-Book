# Common TF2 Commands (ROS 2)

Here are some essential TF2 commands for working with ROS 2.

---

## 📌 View TF Tree


ros2 run tf2_tools view_frames
Generates a PDF of the current TF tree.

## 📌 Echo TF Frames

ros2 run tf2_ros tf2_echo base_link camera_link
Shows live transform updates between base_link and camera_link.

## 📌 Check All Frames

ros2 run tf2_tools dump_frames
Dumps all frames and their relationships in the TF tree.

## 📌 Run Rviz2 to Visualize TF

rviz2
In Rviz2, enable the following to visualize TFs:

- TF
- Axes
- RobotModel

This allows you to see the robot and its transforms in 3D space.