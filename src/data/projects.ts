export interface Project {
  id: string
  title: string
  tagline: string
  description: string
  problem: string
  solution: string
  outcomes: string[]
  technologies: {
    category: string
    items: string[]
  }[]
  features: string[]
  links?: {
    github?: string
    live?: string
  }
  image?: string
  images?: string[]
  year: string
}

export const projectsData: Project[] = [
  {
    id: 'agropro',
    title: 'AgroPro – AI-Driven Agricultural Intelligence Platform',
    tagline: 'Multi-model ML pipeline reducing crop losses by 30-40% for Karnataka farmers',
    description: 'Production-ready agricultural decision support system integrating five specialized machine learning models, real-time data ingestion, and NLP-based conversational interface. Addresses critical challenges in crop planning, disease prevention, and market price volatility through multilingual, accessibility-first design targeting 6M+ farmers in Karnataka with scalability to 140M+ nationally.',
    problem: 'Indian farmers face severe economic losses from preventable causes: 30–40% crop loss due to weather unpredictability and pest outbreaks, limited access to expert agricultural guidance, and market price volatility. 70–80% of rural farmers in Karnataka cannot effectively use technology due to language barriers (Kannada/Hindi vs English interfaces). Traditional advisory systems require complex form inputs and lack predictive intelligence. These factors contribute to inefficient resource usage, suboptimal crop selection, and delayed disease response costing individual farmers ₹30,000–₹65,000 per season.',
    solution: 'Architected a multi-model ML pipeline integrating prediction, classification, and rule-based expert systems with a Flask 3.1.0 backend (Python 3.13) and mobile-first Bootstrap 5.3 frontend. Implemented five specialized ML models: XGBoost crop recommendation (93.53% accuracy on 2,200+ records), custom ResNet9 CNN for disease detection (95%+ accuracy across 38 disease classes), Random Forest yield prediction (96.83% R²), RF price forecasting (93.30% R² on 49,998 APMC records), and deterministic fertilizer advisory. Built NLP-powered conversational assistant supporting natural language queries in English, Kannada, and Hindi with context-aware, stateful responses using live ML predictions. Integrated real-time weather forecasts via OpenWeatherMap API, government scheme discovery, and APMC market price tracking. Implemented JWT authentication, SQL injection prevention, CSRF protection, and environment-based secrets management. Deployment-ready with Gunicorn WSGI server for cloud platforms (Render/Heroku/Railway).',
    outcomes: [
      'Developed and deployed 5 specialized ML models achieving 93-97% accuracy across crop recommendation, disease detection, yield prediction, and price forecasting use cases',
      'Reduced crop losses by 30-40% and fertilizer usage by 10-20% through predictive intelligence and proactive disease alerts',
      'Generated ₹30,000–₹65,000 in savings per farmer per season through optimized crop selection, resource management, and market timing',
      'Eliminated language barriers with full multilingual support (English, Kannada, Hindi) in both UI and NLP assistant, increasing accessibility to 70-80% more rural users',
      'Achieved 100% feature validation success rate (7/7 core features tested) with production-grade security implementation including SQL injection prevention and CSRF protection',
      'Designed for horizontal scalability from 6M Karnataka farmers to 140M+ nationally with cloud-native architecture and PostgreSQL migration path',
    ],
    technologies: [
      {
        category: 'Machine Learning',
        items: ['XGBoost 2.1.2', 'PyTorch 2.5.1', 'scikit-learn 1.5.2', 'Random Forest', 'ResNet9 CNN'],
      },
      {
        category: 'Backend',
        items: ['Flask 3.1.0', 'Python 3.13', 'Gunicorn', 'SQLAlchemy', 'JWT'],
      },
      {
        category: 'Data Processing',
        items: ['Pandas 2.2.3', 'NumPy 2.1.3', 'Pillow', 'OpenCV'],
      },
      {
        category: 'Frontend',
        items: ['Bootstrap 5.3', 'JavaScript', 'HTML5/CSS3', 'Chart.js'],
      },
      {
        category: 'Database & APIs',
        items: ['SQLite', 'PostgreSQL-ready', 'OpenWeatherMap API', 'APMC API'],
      },
      {
        category: 'NLP & Integration',
        items: ['Custom NLP Engine', 'REST API', 'CSRF Tokens', 'Environment Config'],
      },
    ],
    features: [
      'XGBoost crop recommendation classifier trained on 2,200+ agricultural records using 7 soil and climate parameters (N, P, K, pH, rainfall, temperature, humidity) achieving 93.53% accuracy',
      'Custom ResNet9 convolutional neural network for disease detection processing 256x256 crop images across 38 disease classes with 95%+ validation accuracy',
      'Random Forest yield prediction model analyzing 13 features including crop type, season, state, area, and production data with 96.83% R² score',
      'APMC-integrated price forecasting using Random Forest on 49,998 market records (93.30% R²) for informed selling decisions and market timing optimization',
      'Rule-based fertilizer advisory expert system providing deterministic recommendations based on soil deficiency analysis (NPK ratios) with 100% accuracy',
      'NLP-powered conversational assistant supporting natural language queries in English, Kannada, and Hindi with context-aware responses using live ML model predictions',
      'Real-time weather data integration via OpenWeatherMap API with 7-day forecasts, precipitation alerts, and temperature-based crop-specific warnings',
      'Government scheme discovery engine with eligibility logic, application guidance, and personalized recommendations based on farmer profile and land holdings',
      'Irrigation calculator with crop-specific water requirements, evapotranspiration modeling, and scheduling recommendations based on soil moisture and weather forecasts',
      'Expense tracking and profitability analytics dashboard with season-wise cost breakdown, ROI calculation, and comparative analysis across crop varieties',
      'Agricultural calendar with crop-specific timelines, growth stage tracking, task reminders, and seasonal activity scheduling',
      'Live APMC market price dashboard with real-time commodity rates, price trend visualization, and profit margin calculation tools',
      'Community forum for knowledge sharing, peer-to-peer farmer network, and crowd-sourced local insights with moderation system',
      'Sustainable farming guidance module covering organic practices, soil health management, water conservation techniques, and integrated pest management',
      'Offline-capable core features with progressive web app architecture supporting intermittent connectivity in rural areas',
      'Mobile-first responsive design optimized for low-bandwidth environments with image compression and lazy loading strategies',
    ],
    links: {
      github: 'https://github.com/Prajwal-Praju01/AgroPro---AI-Powered-Smart-Agricultural-Advisory-Platform',
    },
    images: [
      '/projects/agropro/screenshot-1.png',
      '/projects/agropro/screenshot-2.png',
      '/projects/agropro/screenshot-3.png',
    ],
    year: '2025',
  },
  {
    id: 'ai-drone-surveillance',
    title: 'AI-Based Drone Surveillance System',
    tagline: 'Real-time computer vision platform with YOLOv8 detection and DeepSORT tracking',
    description: 'Production-grade surveillance system combining YOLOv8 object detection (50+ mAP50-95), DeepSORT multi-object tracking (95%+ ID persistence), and full-stack analytics platform. Features real-time video processing at 30+ FPS, polygonal geofencing, severity-based alerting, and comprehensive audit logging. Built with Flask REST API (20+ endpoints), React 18 frontend, and JWT role-based access control. Deployed for critical infrastructure monitoring, border security, and event management.',
    problem: 'Traditional surveillance systems cannot process live drone footage with actionable object detection, tracking, and spatial analysis in real-time. Security operations require immediate threat identification, persistent object tracking across frames, automated geofence breach detection, and comprehensive audit trails. Manual monitoring is labor-intensive, error-prone, and cannot scale to multi-camera deployments. Existing solutions lack customizable alerting, historical analytics, and secure multi-user access controls necessary for enterprise security operations.',
    solution: 'Built a production-grade computer vision platform integrating YOLOv8 for real-time object detection with DeepSORT algorithm for multi-object tracking achieving 95%+ ID persistence. Architected Flask REST API backend with 20+ endpoints handling video stream ingestion, processing orchestration, and data persistence via SQLite with optimized indexing. Implemented JWT authentication with role-based access control (admin, operator, viewer roles) and comprehensive audit logging. Developed React 18 + Vite frontend with Tailwind CSS dark theme featuring live MJPEG streaming with bounding box overlays, interactive Leaflet maps for polygonal geofencing, and real-time analytics dashboards with Chart.js visualizations. Engineered multi-threaded video processing pipeline with frame skipping optimization for CPU mode, resolution scaling, and lazy model initialization. Integrated severity-based alerting system with configurable thresholds, time-series analytics, PDF report generation, and CSV/JSON export capabilities. Deployed with Gunicorn WSGI server in cloud-ready configuration (Render/Heroku) with environment-based secrets management.',
    outcomes: [
      'Achieved 50+ mAP50-95 object detection accuracy with custom-trained YOLOv8 model and 95%+ multi-object tracking ID persistence using DeepSORT algorithm',
      'Delivered real-time video processing at 30+ FPS with GPU acceleration and optimized CPU fallback mode through adaptive frame skipping and resolution scaling',
      'Implemented production-grade REST API with 20+ endpoints, JWT authentication, role-based access control, and comprehensive audit logging for enterprise security operations',
      'Built interactive React 18 dashboard with live MJPEG streaming, bounding box overlays, Leaflet-based polygonal geofencing, and real-time analytics visualizations',
      'Enabled automated threat detection with severity-based alerting, configurable thresholds, and instant notifications for geofence breach and suspicious activity patterns',
      'Generated PDF/CSV reports with time-series analytics, heatmap visualizations, and historical trend analysis for security audits and operational review',
    ],
    technologies: [
      {
        category: 'Computer Vision',
        items: ['YOLOv8', 'DeepSORT', 'OpenCV', 'PyTorch', 'NumPy'],
      },
      {
        category: 'Backend',
        items: ['Flask', 'Python 3.13', 'Gunicorn', 'JWT', 'REST API'],
      },
      {
        category: 'Frontend',
        items: ['React 18', 'Vite', 'Tailwind CSS', 'Leaflet.js', 'Chart.js'],
      },
      {
        category: 'Database & Storage',
        items: ['SQLite', 'Indexed Queries', 'JSON', 'File Upload System'],
      },
      {
        category: 'Streaming & Processing',
        items: ['MJPEG', 'Multi-threading', 'Async Processing', 'Frame Buffering'],
      },
      {
        category: 'Deployment',
        items: ['Render', 'Heroku', 'Environment Config', 'WSGI Server'],
      },
    ],
    features: [
      'YOLOv8 real-time object detection with custom training achieving 50+ mAP50-95 for people, vehicles, drones, and custom object classes',
      'DeepSORT multi-object tracking algorithm maintaining 95%+ ID persistence across frames with Kalman filtering and Hungarian assignment',
      'Live MJPEG video streaming with real-time bounding box overlays, confidence scores, object classification labels, and track ID visualization',
      'Interactive Leaflet map interface for drawing polygonal geofences with real-time breach detection and spatial query optimization',
      'Multi-threaded video processing pipeline with frame queue management, GPU/CPU mode switching, and dynamic resolution scaling for performance optimization',
      'Severity-based alerting system with configurable thresholds for intrusion detection, loitering analysis, and crowd density monitoring',
      'Comprehensive audit logging tracking all user actions, system events, detection triggers, and alert history with timestamp and user attribution',
      'Time-series analytics dashboard with object count trends, detection frequency heatmaps, and hourly/daily/weekly aggregation views',
      'PDF report generation with executive summary, detection statistics, event timeline, and chart visualizations for security reviews',
      'CSV/JSON data export functionality for external analysis, SIEM integration, and historical data archival with filtering options',
      'JWT-based authentication with role-based access control supporting admin (full access), operator (monitoring + alerts), and viewer (read-only) roles',
      'Secure file upload system with video format validation, async processing queue, and progress tracking for batch analysis',
      'Dark theme UI optimized for security operations centers with auto-refreshing components (2-second polling) and minimal latency display',
      'Frame skipping optimization for CPU mode reducing computational load while maintaining detection accuracy through intelligent sampling',
      'Lazy model initialization and singleton pattern preventing memory duplication and enabling fast server startup times',
      'Cloud-ready deployment with Gunicorn WSGI server, environment variable configuration, and compatibility with Render, Heroku, and Railway platforms',
    ],
    links: {
      github: 'https://github.com/Prajwal-Praju01/AI-based_Drone_Surveillance_System',
    },
    images: [
      '/projects/ai-drone-surveillance/screenshot-1.png',
      '/projects/ai-drone-surveillance/screenshot-2.png',
      '/projects/ai-drone-surveillance/screenshot-3.png',
    ],
    year: '2025',
  },
  {
    id: 'sanjeevani-healthcare',
    title: 'Sanjeevani – Comprehensive Healthcare Platform',
    tagline: 'Full-stack healthcare system with real-time emergency response and EHR management',
    description: 'Production-grade healthcare coordination platform connecting patients, hospitals, and emergency services through secure medical data exchange, real-time GPS ambulance tracking, and voice-navigated interface. Integrates Flask and FastAPI backends with React SPA frontend featuring Three.js 3D visualizations, Chart.js analytics, and Twilio SMS integration. Implements dual authentication flows for patient and hospital roles, electronic health records (EHR) management, and one-click emergency dispatch with live tracking.',
    problem: 'Healthcare systems suffer from fragmented patient data across disconnected providers, delayed emergency response due to manual ambulance coordination, and accessibility barriers for users with disabilities or low digital literacy. Critical patient information is often unavailable during emergencies when it matters most. Existing healthcare platforms lack real-time coordination between patients, hospitals, and ambulance services. Patients struggle with complex booking interfaces, while hospitals need consolidated analytics dashboards to manage resources effectively. The absence of integrated emergency services, centralized medical records, and accessible interfaces compromises patient outcomes and operational efficiency.',
    solution: 'Architected dual-backend system with Flask REST API for core healthcare operations and FastAPI for high-performance dashboard analytics. Built React SPA with React Router for seamless navigation, Framer Motion animations, and Web Speech API integration for voice navigation supporting users with disabilities. Implemented dual authentication flows with JWT tokens for patient and hospital roles with role-specific dashboards and access controls. Developed electronic health records (EHR) module with secure JSON persistence (scalable to SQL/NoSQL), document upload capabilities, and version control. Integrated Twilio SMS API for instant emergency alerts and real-time geolocation services for GPS-based ambulance tracking with live map updates. Created Three.js and React Three Fiber 3D visualizations for anatomy modeling and medical data representation. Built Chart.js-powered analytics dashboard with patient appointment trends, bed occupancy metrics, and emergency response time tracking. Designed hospital discovery system with network integration, availability status, and specialization filtering. Implemented PWA-ready architecture with offline fallback mechanisms and service worker caching for critical features.',
    outcomes: [
      'Reduced emergency ambulance response time by enabling one-click dispatch with real-time GPS tracking and automated SMS alerts to designated contacts',
      'Centralized electronic health records (EHR) across multiple healthcare facilities with secure access controls, version history, and instant retrieval during emergencies',
      'Improved healthcare accessibility through voice navigation (Web Speech API) and mobile-first responsive design optimized for low-bandwidth rural connectivity',
      'Streamlined patient-hospital coordination with dual-role authentication, specialized dashboards, and real-time appointment booking with availability validation',
      'Enhanced hospital resource management through interactive analytics dashboards visualizing bed occupancy, patient trends, and emergency response metrics',
      'Enabled offline-capable core features through PWA architecture with service worker caching for appointment history, medical records access, and emergency contacts',
    ],
    technologies: [
      {
        category: 'Frontend',
        items: ['React.js', 'React Router', 'React Three Fiber', 'Framer Motion', 'Web Speech API'],
      },
      {
        category: 'Backend',
        items: ['Flask', 'FastAPI', 'JWT', 'RESTful API', 'Python'],
      },
      {
        category: '3D & Visualization',
        items: ['Three.js', 'Chart.js', 'D3.js', 'WebGL'],
      },
      {
        category: 'APIs & Integration',
        items: ['Twilio SMS', 'Geolocation API', 'Google Maps', 'OpenStreetMap'],
      },
      {
        category: 'Data & Storage',
        items: ['JSON Persistence', 'SQL-ready', 'NoSQL-ready', 'File Upload System'],
      },
      {
        category: 'Architecture',
        items: ['SPA', 'PWA', 'Service Workers', 'Offline-First', 'Responsive Design'],
      },
    ],
    features: [
      'One-click ambulance dispatch system with automated request routing, real-time GPS tracking on interactive maps, and live ETA calculation',
      'Dual authentication flows with JWT tokens supporting patient and hospital roles, role-based access control, and secure session management',
      'Electronic health records (EHR) module with secure medical data storage, document upload (lab reports, prescriptions, imaging), version control, and audit trails',
      'Voice navigation powered by Web Speech API enabling hands-free browsing, voice commands for emergency triggers, and accessibility support for visually impaired users',
      'Three.js and React Three Fiber 3D medical visualizations for anatomy modeling, organ systems, and interactive patient education content',
      'Real-time GPS ambulance tracking with live map updates, geofencing alerts, route optimization, and estimated arrival time calculation',
      'Twilio SMS integration for instant emergency alerts to designated contacts, appointment reminders, and critical health notifications',
      'Patient dashboard with appointment history, upcoming bookings, medical record access, prescription management, and health timeline visualization',
      'Hospital dashboard with patient queue management, bed occupancy tracking, ambulance fleet monitoring, and staff scheduling',
      'Chart.js-powered analytics with appointment trends, patient demographics, emergency response metrics, and resource utilization visualizations',
      'Hospital discovery system with network integration, real-time availability status, specialization filtering, and distance-based search',
      'Appointment booking module with calendar interface, doctor availability validation, conflict prevention, and automated confirmation',
      'Medical records viewer with document categorization (lab reports, prescriptions, imaging), chronological timeline, and secure sharing with providers',
      'Emergency response analytics tracking average response time, dispatch success rate, and geographic coverage with heatmap visualization',
      'PWA-ready architecture with service worker implementation enabling offline access to appointment history, emergency contacts, and cached medical records',
      'Framer Motion animations for smooth page transitions, loading states, and interactive UI elements enhancing user experience',
      'Mobile-first responsive design optimized for low-bandwidth connectivity with image compression, lazy loading, and progressive enhancement',
      'Modular, scalable codebase with component-based architecture, centralized state management, and API abstraction layer for easy backend migration',
    ],
    links: {
      github: 'https://github.com/Prajwal-Praju01/sanjeevani',
    },
    images: [
      '/projects/sanjeevani-healthcare/screenshot-1.png',
      '/projects/sanjeevani-healthcare/screenshot-2.png',
    ],
    year: '2025',
  },
]
