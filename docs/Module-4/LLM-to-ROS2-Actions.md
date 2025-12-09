# Translating Language to ROS 2 Actions

After LLM creates a plan, we convert each step into **ROS 2 actions or services**.

### Example:

**LLM output:**  
"Go to the table, find the cup, pick it up"

**ROS 2 actions:**

- `/navigate_to_pose`
- `/detect_objects`
- `/pick_object`

### Pipeline:

1. LLM generates steps
2. Middle layer (Python node) maps each step → ROS 2 command
3. Humanoid executes the actions

This creates a full **AI planning → robot execution** loop.
