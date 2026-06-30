const portfolioData = {
  "profile": {
    "name": "Yoo Dongoh",
    "koreanName": "유동오",
    "role": "AI Autonomous Driving & Robotics Developer",
    "email": "youdongoh67@gmail.com",
    "location": "Seoul, Korea",
    "github": "https://github.com/flynn-67",
    "linkedin": "https://www.linkedin.com/in/%EB%8F%99%EC%98%A4-%EC%9C%A0-2959603b4/",
    "blog": "https://blog.naver.com/uclong5",
    "gmail": "https://mail.google.com/mail/?view=cm&fs=1&to=youdongoh67@gmail.com&su=Portfolio%20Contact",
    "intro": "I build autonomous driving and robotics systems that connect AI, control, path planning, and real-world experimentation.",
    "detail": "I am studying AI Autonomous Driving Systems Engineering at Korea Aerospace University. My work focuses on ROS2-based mobile robots, autonomous racing, robot control, computer vision, and deep learning systems that move from simulation to real hardware.",
    "educationTitle": "Korea Aerospace University",
    "educationMajor": "AI Autonomous Driving Systems Engineering",
    "educationPeriod": "2022 — Present"
  },
  "skills": [
    {
      "title": "Robotics & ROS2",
      "description": "ROS2, Nav2, Behavior Trees, RViz, robot bringup, topic-based communication, and autonomous mobile robot workflows.",
      "icon": "🛰️"
    },
    {
      "title": "Autonomous Driving",
      "description": "F1TENTH experiments with Pure Pursuit, RRT, MPC, Gap Follow, Wall Follow, obstacle avoidance, and aggressive tuning.",
      "icon": "🏎️"
    },
    {
      "title": "AI & Vision",
      "description": "Deep learning, vision-language navigation, Qwen3-VL, LoRA fine-tuning, and perception-oriented robotics pipelines.",
      "icon": "🧠"
    }
  ],
  "journey": [
    "2022 Entered the Department of AI Autonomous Driving Systems Engineering, Korea Aerospace University",
    "Jan 2022 Obtained a Class 1 Ordinary Driver’s License",
    "Jan 10, 2023 Enlisted for active duty in the Republic of Korea Army, 28th Infantry Division",
    "Jul 9, 2024 Honorably discharged from the Republic of Korea Army, 28th Infantry Division, upon completion of military service",
    "Nov 17, 2024 Earned the SCA Intermediate International Barista Certification",
    "Nov 2024 Elected as President of the Department Student Society, Department of AI Autonomous Driving Systems Engineering, Korea Aerospace University",
    "Jul 21, 2025 Served as Education Team Leader for the Mongolia ICT Overseas Educational Volunteer Program",
    "Second Half of 2025 – Present Instructor at Nowon Youth Career Center",
    "Sep 10, 2025 Participated in the F-16 Pilot Competition",
    "Nov 21, 2025 Won the Grand Prize at the AI Mini Robot Hackathon",
    "Dec 17, 2025 Won 3rd Place in the final project for the LIMO Hospital Guide Assistant Robot",
    "Jan 2026 Participated in language training at the University of Guelph, Canada",
    "Spring 2026 Served as Class Representative for the 3rd-year cohort",
    "2026 Appointed President of the BOING Board Club",
    "2026 Korea Aerospace University undergraduate research student",
    "May 2026 Advanced to the final round of the Airbus Competition",
    "June 19, 2026 Placed 4th in the F1TENTH In-School Final Project Competition"
  ],
  "projects": [
    {
      "title": "F1TENTH Autonomous Racing",
      "shortTitle": "F1TENTH",
      "period": "March 3, 2026 → June 19, 2026",
      "type": "Competition · Korea Aerospace University",
      "subtitle": "ROS2-based autonomous racing stack",
      "description": "A ROS2-based F1TENTH autonomous racing project focused on reactive control, path planning, obstacle avoidance, and aggressive controller tuning.",
      "image": "assets/images/projects/project-1.svg",
      "featured": true,
      "tags": [
        "ROS2",
        "F1TENTH",
        "Pure Pursuit",
        "RRT",
        "MPC",
        "LiDAR"
      ],
      "links": [
        {
          "label": "GitHub",
          "url": "https://github.com/flynn-67/F1_tenth"
        }
      ],
      "sections": [
        {
          "heading": "Overview",
          "body": [
            "This project builds an autonomous racing stack for the F1TENTH platform using ROS2 and F1TENTH Gym Bridge simulation.",
            "The implementation grows step by step from reactive control to path planning and optimal control. The main focus is not only making the vehicle move, but also tuning the parameters that decide how safely and aggressively it drives."
          ]
        },
        {
          "heading": "System Environment",
          "items": [
            "Environment: ROS2 on Ubuntu with F1TENTH Gym Bridge simulation",
            "Hardware target: Jetson Orin Nano (arm64)",
            "Sensors: 2D LiDAR, odometry, and IMU",
            "Languages: Python for lab2–lab6, C++ for MPPI",
            "Control flow: /scan and /odom are processed into Ackermann drive commands"
          ]
        },
        {
          "heading": "Implemented Stack",
          "items": [
            "Automatic Emergency Braking using Time-to-Collision (TTC)",
            "Gap Follow and Wall Follow for reactive obstacle avoidance",
            "Pure Pursuit for waypoint tracking",
            "RRT/RRT* for local path planning when the forward path is blocked",
            "MPC/MPPI experiments for more aggressive and optimal racing behavior"
          ]
        },
        {
          "heading": "Automatic Emergency Braking",
          "body": [
            "The safety node computes Time-to-Collision for each LiDAR beam and triggers braking when the minimum TTC falls below a threshold. Instead of looking only at the front distance, it uses the closing speed along each beam.",
            "Only forward-progressing beams are used, and invalid values such as inf or nan are filtered out before the braking decision."
          ],
          "code": "range_rate = speed * cos(beam_angle)\nTTC = distance / range_rate"
        },
        {
          "heading": "What I Focused On",
          "items": [
            "Reducing lap time while keeping the car stable through corners",
            "Tuning lookahead distance, steering gain, speed smoothing, and obstacle thresholds",
            "Debugging waypoint duplication and planning failure cases",
            "Balancing safety, speed, and recovery after obstacle avoidance"
          ]
        }
      ]
    },
    {
      "title": "LIMO Hospital Guide Assistant Robot",
      "shortTitle": "LIMO Robot Final Project",
      "period": "September 1, 2025 → December 17, 2025",
      "type": "Final Project · Placed 3rd · 128 points",
      "subtitle": "Hospital guide assistant robot with Nav2 and Behavior Tree",
      "description": "A LIMO mobile robot project that guides patients through a hospital scenario using waypoint navigation, UI communication, QR recognition, and Behavior Tree-based task flow.",
      "image": "assets/images/projects/project-2.svg",
      "featured": true,
      "tags": [
        "ROS2",
        "LIMO",
        "Nav2",
        "Behavior Tree",
        "QR",
        "Streamlit"
      ],
      "links": [
        {
          "label": "GitHub",
          "url": "https://github.com/flynn-67/darkhorse"
        }
      ],
      "sections": [
        {
          "heading": "Overview",
          "body": [
            "This project developed a hospital guide assistant robot using the LIMO mobile robot platform. The goal was to create a complete service scenario where the robot receives patient information, decides where to go, navigates safely, and responds to emergency situations."
          ]
        },
        {
          "heading": "Key Contributions",
          "items": [
            "Led the project team, delivered presentations, and prepared presentation materials",
            "Contributed to navigation assistance using the Nav2 framework",
            "Implemented a UI-based communication system that sends real-time data from external hardware to the LIMO robot",
            "Developed waypoint navigation for autonomous robot movement",
            "Designed and structured the robot’s Behavior Tree for decision-making and task flow control",
            "Managed source code and collaboration workflow through Git",
            "Integrated camera-based QR code recognition with Google Sheets for data logging and storage"
          ]
        },
        {
          "heading": "Behavior Tree Design",
          "body": [
            "I designed the overall Behavior Tree structure for the robot system. Patient information from a pre-filled medical questionnaire was converted into a QR code, recognized through the LIMO robot’s depth camera, stored through Google Sheets integration, and followed by automatic execution of a TTS notification node."
          ]
        },
        {
          "heading": "Decision-Making Flow",
          "body": [
            "The Think node selected the next department to visit by checking the number of waiting patients in each examination room. The robot guided the patient to the department with the fewest waiting patients and repeated the process until no examination rooms remained.",
            "A Streamlit web interface sent real-time topic ticks to the LIMO robot to update its operational status and current situation."
          ]
        },
        {
          "heading": "Emergency Scenario",
          "body": [
            "During navigation, an operator could press an emergency button in the UI. When triggered, the robot activated a siren and moved to the information desk to report the emergency. Without an emergency trigger, it continued the normal navigation process."
          ]
        },
        {
          "heading": "Challenges",
          "items": [
            "Collaboration was difficult at first because this was my first full team development project",
            "Hardware resource limitations caused instability when Nav2, UI, and camera components ran at the same time",
            "Communication between an external computer and the LIMO robot required careful network and topic debugging"
          ]
        },
        {
          "heading": "What I Learned",
          "items": [
            "Improved GitHub-based collaboration, branch management, and conflict resolution",
            "Improved ability to use LLMs as development support tools",
            "Became faster at reading error logs and narrowing down root causes",
            "Learned how to connect multiple individual functions into one consistent robot service scenario"
          ]
        }
      ]
    },
    {
      "title": "CLGN — Cooperative Live Guidance Network",
      "shortTitle": "Airbus",
      "period": "May 2026",
      "type": "Airbus Contest · Final Round",
      "subtitle": "Real-time cooperative wind-observation route optimization SaaS",
      "description": "An Airbus Contest project that turns aircraft already in flight into a real-time wind-sensing network for route optimization, fuel reduction, CO₂ reduction, and cost efficiency.",
      "image": "assets/images/projects/project-3.svg",
      "featured": true,
      "tags": [
        "Airbus",
        "Optimization",
        "Aviation",
        "SaaS",
        "Wind Data"
      ],
      "links": [
        {
          "label": "GitHub",
          "url": "https://github.com/flynn-67/Airbus"
        },
        {
          "label": "Live Demo",
          "url": "https://flynn-67.github.io/Airbus/"
        }
      ],
      "sections": [
        {
          "heading": "One-Line Pitch",
          "body": [
            "CLGN turns aircraft already in flight into a real-time wind-sensing network, combining forecast wind with live aircraft observations to optimize routes and reduce fuel burn, CO₂ emissions, and operating cost."
          ]
        },
        {
          "heading": "Project Detail",
          "items": [
            "Project: CLGN (Cooperative Live Guidance Network)",
            "Contest: Airbus Contest",
            "Team: AIBUS — Yoo Dongoh, Kim Minseok, Kim Yeongsang, Lee Chanyoung",
            "Affiliation: Korea Aerospace University",
            "My role: full-stack architecture, optimization engine, and wind pipeline"
          ]
        },
        {
          "heading": "Problem Definition",
          "body": [
            "Airline dispatchers rely heavily on numerical weather prediction and pre-planned routing systems. However, wind prediction errors in the upper troposphere directly affect ground speed, estimated time enroute, fuel burn, CO₂ emissions, operating cost, and dispatcher route decision quality.",
            "Even a small routing improvement can create meaningful operational and environmental value when applied across many long-haul flights and repeated fleet operations."
          ]
        },
        {
          "heading": "Core Idea",
          "items": [
            "Use live aircraft observations as a cooperative wind data network",
            "Compare forecast wind and observed wind during flight",
            "Feed the updated wind information into a route optimization engine",
            "Recommend more efficient routes that reduce fuel burn and emissions"
          ]
        }
      ]
    },
    {
      "title": "RayBeak — VLN Next-Action Prediction",
      "shortTitle": "Deep Learning Project",
      "period": "2026",
      "type": "Deep Learning · Vision-Language Navigation",
      "subtitle": "Qwen3-VL + LoRA fine-tuning for robot next-action prediction",
      "description": "A multimodal deep learning project that predicts a robot’s next action from a navigation instruction and egocentric image history using Qwen3-VL and LoRA fine-tuning.",
      "image": "assets/images/projects/project-6.svg",
      "featured": false,
      "tags": [
        "Deep Learning",
        "VLM",
        "Qwen3-VL",
        "LoRA",
        "VLN"
      ],
      "links": [
        {
          "label": "GitHub",
          "url": "https://github.com/flynn-67/deep_learning_ws"
        }
      ],
      "sections": [
        {
          "heading": "Overview",
          "body": [
            "RayBeak is a Vision-Language Navigation next-action prediction project using Qwen3-VL and LoRA fine-tuning. The model predicts the next robot action from a natural-language navigation instruction and egocentric image history."
          ]
        },
        {
          "heading": "Project Detail",
          "items": [
            "Team: RayBeak",
            "Affiliation: Korea Aerospace University, AI Autonomous Driving Systems Engineering",
            "Members: Kim Minseok, Kim Yeongsang, Baek Seunghun, Woo Jeeon, Yoo Dongoh",
            "Base model: Qwen/Qwen3-VL-2B-Instruct",
            "Core method: LoRA fine-tuning with frozen vision encoder",
            "Task: Vision-Language Navigation next-action prediction"
          ]
        },
        {
          "heading": "What the Project Does",
          "body": [
            "Given a natural-language instruction such as “Walk forward and turn right into the room” plus two egocentric frames, the model predicts one of four discrete actions: move forward, turn right, turn left, or stop.",
            "Instead of fully training the 2-billion-parameter vision-language model, only a small portion of parameters are trained through LoRA for efficient fine-tuning."
          ]
        },
        {
          "heading": "System Architecture",
          "items": [
            "Input: navigation instruction and images I(t-1), I(t)",
            "Processor: tokenizer and image processor",
            "Vision encoder: Qwen3 ViT, frozen during training",
            "Language model: Qwen3 decoder with LoRA applied to q, k, v, and o projection layers",
            "Output: one of four actions generated as text"
          ]
        },
        {
          "heading": "LoRA Computation",
          "code": "Unmerged: output = W·x + (α/r)·B·A·x\nMerged:   output = (W + B·A)·x"
        }
      ]
    },
    {
      "title": "Leader-Follower Robotic Arm Control Experiment",
      "shortTitle": "ROBOTIS Robotic Arm",
      "period": "November 21, 2025",
      "type": "ROBOTIS Platform · Robotic Arm Control",
      "subtitle": "Leader-follower robotic arm replication experiment",
      "description": "A hands-on robotics competition using a ROBOTIS robotic arm platform to test whether a follower arm could replicate the motion of a leader arm.",
      "image": "assets/images/projects/project-4.svg",
      "featured": false,
      "tags": [
        "ROBOTIS",
        "Manipulator",
        "ROS",
        "Control",
        "Hardware"
      ],
      "links": [
        {
          "label": "ROBOTIS Platform",
          "url": "https://ai.robotis.com/omx/introduction_omx.html"
        }
      ],
      "sections": [
        {
          "heading": "Overview",
          "body": [
            "This experiment used a ROBOTIS robotic arm platform to test a leader-follower control concept. The goal was for a follower arm to replicate the motion of a leader arm."
          ]
        },
        {
          "heading": "My Role",
          "items": [
            "Assembled the robot arm hardware",
            "Implemented ROS-based control for the robotic arm system",
            "Completed system assembly and control implementation within a one-day development period",
            "Focused on overall system completeness in a competition-style environment"
          ]
        }
      ]
    },
    {
      "title": "Mongolia ICT International Volunteer Program",
      "shortTitle": "Mongolia ICT Volunteer",
      "period": "July 21, 2025 → July 28, 2025",
      "type": "Education Team Leader · Support Team · Cultural Exchange MC",
      "subtitle": "VRWARE education and international volunteer experience",
      "description": "An overseas ICT educational volunteer program in Mongolia where I worked as a teacher, education team leader, support staff member, and cultural exchange MC.",
      "image": "assets/images/projects/project-5.svg",
      "featured": false,
      "tags": [
        "Education",
        "VRWARE",
        "Leadership",
        "Volunteer",
        "ICT"
      ],
      "links": [],
      "sections": [
        {
          "heading": "Overview",
          "body": [
            "I joined the Mongolia ICT International Volunteer Program because I wanted to share knowledge in a meaningful way. During the program, I took on several roles, including teacher, education team leader, support staff member, and cultural exchange MC."
          ]
        },
        {
          "heading": "Experience",
          "body": [
            "The program became meaningful from preparation in Korea to teaching students in Mongolia, working with teammates, and sharing cultural moments. I learned leadership, cooperation, cultural understanding, and the value of sharing knowledge with others."
          ]
        },
        {
          "heading": "Reflection",
          "body": [
            "This experience made me reflect on why I study technology. I came to understand that AI and data technology are ultimately for people, and that connection and understanding should stay at the center of engineering work.",
            "I want to grow into an engineer who is not only technically skilled, but also understands people, respects different cultures, and creates positive change through technology."
          ]
        }
      ]
    },
    {
      "title": "F-16 AI Pilot",
      "shortTitle": "F-16 AI Pilot",
      "period": "September 10, 2025",
      "type": "AI Pilot Competition",
      "subtitle": "AI pilot simulation and rule-based decision-making",
      "description": "An AI pilot competition experience focused on aircraft simulation, control logic, and decision-making for F-16-style scenarios.",
      "image": "assets/images/projects/project-7.svg",
      "featured": false,
      "tags": [
        "Simulation",
        "AI Pilot",
        "Control",
        "Behavior Tree"
      ],
      "links": [],
      "sections": [
        {
          "heading": "Overview",
          "body": [
            "This project is based on participation in the F-16 Pilot Competition. The Notion project page currently contains only the project title, so this section is prepared as an editable project detail area for future notes, images, and videos."
          ]
        },
        {
          "heading": "Editable Direction",
          "items": [
            "Add the simulator environment and execution method",
            "Describe the AI control strategy or rule-based decision-making logic",
            "Add behavior tree structure, inference flow, or dogfight strategy notes",
            "Insert screenshots or demo videos into the assets folder and connect them in data/content.js"
          ]
        }
      ]
    }
  ]
};
