# Using TF2 in ROS 2

TF2 in ROS 2 can be used with both:

- **C++** (`rclcpp`)  
- **Python** (`rclpy`)  

With TF2, you can:

- **Publish transforms**  
- **Listen to transforms**  
- **Convert coordinates**  
- **Build TF trees**  

---

## Publishing a Transform (Python Example)

```python
from geometry_msgs.msg import TransformStamped
import tf2_ros

# Create a Transform Broadcaster
br = tf2_ros.TransformBroadcaster(node)

# Create a TransformStamped message
t = TransformStamped()
t.header.stamp = node.get_clock().now().to_msg()
t.header.frame_id = "base_link"
t.child_frame_id = "camera_link"

# Set translation (position)
t.transform.translation.x = 0.2
t.transform.translation.y = 0.0
t.transform.translation.z = 1.0

# Set rotation (quaternion)
t.transform.rotation.x = 0.0
t.transform.rotation.y = 0.0
t.transform.rotation.z = 0.0
t.transform.rotation.w = 1.0

# Send the transform
br.sendTransform(t)
This creates a link between base_link → camera_link.

Listening to a Transform

tf_buffer = tf2_ros.Buffer()
listener = tf2_ros.TransformListener(tf_buffer)

trans = tf_buffer.lookup_transform(
    "base_link",
    "camera_link",
    rclpy.time.Time()
)
This retrieves the current transform values between base_link and camera_link.

