# The Full VLA Pipeline (End-to-End)

Here is how everything connects:

### Step-by-Step Pipeline:

1. **Voice Input** → Whisper converts to text  
2. **Text Command** → LLM creates cognitive plan  
3. **Planner Node** → Converts plan to ROS 2 actions  
4. **Vision System** → Finds objects and obstacles  
5. **Navigation (Nav2)** → Plans safe walking path  
6. **Control System** → Humanoid moves, grasps, manipulates  
7. **Feedback Loop** → Robot reports progress back to LLM  

This pipeline enables natural, intelligent humanoid behavior.
