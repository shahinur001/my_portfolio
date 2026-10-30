/* ====== CONTENT DATA ====== */
const DATA = {
  profile: { photo: "assets/Photo_Shahinur_600x600.jpg" },
  social: {
    email: "shahinur6363@gmail.com", 
    phone: "+8801786751312",
    linkedin: "https://www.linkedin.com/in/shahinurf/", 
    github: "",
    scholar: "https://scholar.google.com/citations?hl=en&user=plXdc64AAAAJ"
  },
  formEndpoint: "",
  stats: [["3.79 / 4.00", "CGPA"], ["4th", "Class position"], ["29", "QA projects tested"], ["4", "Technical domains"]],
  skills: [
    { t: "Software Development", i: ["Python", "C / C++", "JavaScript", "HTML & CSS", "FastAPI", "Flask", "REST APIs"] },
    { t: "Software Quality Assurance", i: ["Manual Testing", "Functional Testing", "Regression Testing", "API Testing", "Test Case Design", "Bug Reporting", "Test Documentation"] },
    { t: "Machine Learning & AI", i: ["Machine Learning", "Deep Learning", "TensorFlow", "CNN", "Computer Vision", "Model Evaluation"] },
    { t: "Databases & Tools", i: ["MongoDB", "MySQL", "Git & GitHub", "Postman", "Swagger", "VS Code"] },
    { t: "Electronics & Embedded", i: ["Digital & Analog Electronics", "Microcontrollers (Arduino, ESP32)", "Circuit Design", "VLSI (coursework)"] }
  ],
  experience: [
    {
      t: "Industrial Trainee (ETE 4120)", o: "Brain Station 23 PLC, Dhaka", d: "3 Mar 2025 – 15 Mar 2025 · 80 hours",
      p: ["Software development attachment in a collaborative team.", "Built a FastAPI file upload API with MongoDB and contributed to a library management system.", "Worked with FastAPI, Flask, MongoDB, API integration, web scraping, Postman, Swagger, Git, Vercel, Hugging Face and Streamlit."]
    },
    {
      t: "Basic Programming with Python", o: "IICT, RUET · EDGE Program, Bangladesh Computer Council", d: "Dec 2024 – Feb 2025 · 60 hours",
      p: ["Python programming fundamentals.", "Sessions related to machine learning and deep learning."]
    }
  ],
  projects: [
    {
      n: "Leukemia Detection Using Deep Learning", c: "Machine Learning / Medical AI", s: ["Python", "TensorFlow", "CNN", "EfficientNet", "Computer Vision"],
      d: "CNN-based leukemia detection from microscopic blood cell images, exploring transfer learning, image preprocessing, model optimization and explainable AI.", github: "", demo: ""
    },
    {
      n: "My File Upload API", c: "Backend Development", s: ["Python", "FastAPI", "MongoDB", "GridFS", "REST API"],
      d: "FastAPI file management API with uploads, categorization, search, CRUD operations and file streaming using MongoDB GridFS.", github: "", demo: ""
    },
    {
      n: "Automated Website Change Monitoring", c: "Software Development", s: ["Python", "Web Scraping", "Automation"],
      d: "Detects changes in webpage content and DOM structure at configurable intervals.", github: "", demo: ""
    },
    {
      n: "Software Quality Assurance Projects", c: "Software Testing / QA", s: ["Manual Testing", "API Testing", "Postman", "Bug Reporting", "Test Case Design"],
      d: "Manual and API testing across 29 web application projects: test case design, scenario execution, bug documentation and behavior verification with browser tools and Postman.", github: "", demo: ""
    },
    {
      n: "Medicine Inventory Management System", c: "Software Development", s: ["Web Development", "Database Management", "QR/Barcode"],
      d: "Concept for QR/barcode-based medicine identification, batch and expiry-date tracking, inventory updates and pharmacy management.", github: "", demo: ""
    },
    {
      n: "AI-Based Heart Sound Monitoring", c: "Machine Learning / Embedded", s: ["ESP32", "Machine Learning", "FastAPI", "JavaScript"],
      d: "Real-time wireless monitoring and classification of heart sounds using an electronic stethoscope with a web-based interface.", github: "", demo: ""
    }
  ],
  education: [
    { t: "B.Sc. in Electronics and Telecommunication Engineering", o: "Rajshahi University of Engineering & Technology (RUET)", d: "Graduated 2026", p: ["CGPA: 3.79 / 4.00", "Class position: 4th", "Thesis: A Hierarchical Deep Learning Framework for Joint Leukemia and Malaria Detection from Blood Cell Images"] },
    { t: "Higher Secondary Certificate (Science)", o: "Saidpur Cantonment Public School and College · Dinajpur Board", d: "2020", p: ["GPA: 5.00 / 5.00"] },
    { t: "Secondary School Certificate (Science)", o: "Bijul Model High School · Dinajpur Board", d: "2018", p: ["GPA: 5.00 / 5.00", "Best Student Performance Award 2018"] }
  ]
};