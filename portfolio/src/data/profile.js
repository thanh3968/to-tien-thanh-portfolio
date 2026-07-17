// Edit this file to update portfolio content without touching the components.
export const profile = {
  name: 'Tô Tiến Thành',
  shortName: 'Thành',
  initials: 'TTT',
  role: 'Electronics & Telecommunications Engineering Student',
  specialty: 'Embedded Systems - Computer Vision - IoT',
  tagline:
    'I build practical engineering projects across embedded systems, STM32 firmware, UART interfaces, and computer vision automation.',
  description:
    'I am studying Electronics and Telecommunications Engineering at the University of Transport and Communications, with hands-on experience in embedded systems, computer vision, and IoT-oriented projects.',
  about: [
    'I am an engineering student focused on turning classroom knowledge into working prototypes. My current work combines firmware development, sensor communication, serial command interfaces, and real-time data display.',
    'My learning direction is centered on Embedded Systems, STM32 development, UART/I2C communication, computer vision, and applied AI. I enjoy building projects that connect hardware behavior with useful software logic.',
  ],
  email: 'lunatoez336@gmail.com',
  github: 'https://github.com/thanh3968',
  location: 'Vietnam',
  availability: 'Available for internships, projects, and collaboration',
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const stats = [
  { value: '2027', label: 'Expected graduation' },
  { value: '3.0', label: 'GPA / 4.0' },
  { value: '02+', label: 'Technical projects' },
]

export const education = {
  school: 'University of Transport and Communications',
  major: 'Electronics and Telecommunications Engineering',
  graduation: 'Expected Graduation: June 2027',
  gpa: 'GPA: 3.0 / 4.0',
  coursework: [
    'Data Structures and Algorithms',
    'Database Systems',
    'Machine Learning',
    'Microprocessors',
    'Computer Architecture',
  ],
}

export const experience = {
  company: 'Rang Dong Company',
  role: 'Intern',
  period: '01/2026 - 05/2026',
  highlights: [
    'Performed measurement, inspection, and evaluation of equipment/system operation according to technical requirements.',
    'Conducted functional testing, detected errors, recorded abnormal issues, and reported them to the person in charge.',
  ],
}

export const skillGroups = [
  {
    title: 'Programming',
    icon: 'code',
    description: 'Languages used in coursework and hands-on projects.',
    skills: ['Python', 'Java', 'JavaScript', 'SQL', 'C/C++'],
  },
  {
    title: 'Hardware / HDL',
    icon: 'chip',
    description: 'Foundations for embedded and digital system development.',
    skills: ['SystemVerilog', 'FPGA', 'STM32', 'Digital design fundamentals'],
  },
  {
    title: 'Libraries / Tools',
    icon: 'tools',
    description: 'Tools for computer vision, automation, and development workflow.',
    skills: ['OpenCV', 'MediaPipe', 'Ultralytics YOLO', 'NumPy', 'PyAutoGUI', 'Git', 'Linux', 'LaTeX'],
  },
  {
    title: 'Communication',
    icon: 'layers',
    description: 'Language and technical communication skills.',
    skills: ['Vietnamese native', 'English TOEIC 600', 'UART', 'I2C'],
  },
]

export const projects = [
  {
    number: '01',
    title: 'Product Counter',
    description:
      'A Python/OpenCV-based computer vision system that simulates automatic product counting on a high-speed conveyor belt.',
    features: [
      'Implemented object detection, centroid-based tracking, and line-crossing logic to count moving products automatically.',
      'Generated annotated output videos with bounding boxes, tracking IDs, counting line, and real-time product count.',
      'Designed the project as a practical simulation for industrial automation and visual inspection workflows.',
    ],
    technologies: ['Python', 'OpenCV', 'Ultralytics YOLO'],
    github: 'https://github.com/thanh3968/product_counter',
    accent: 'cyan',
  },
  {
    number: '02',
    title: 'STM32 UART Command Interface for Environmental Monitoring',
    description:
      'An embedded system on STM32F407G for monitoring temperature and humidity with UART commands, I2C sensor communication, and OLED display output.',
    features: [
      'Developed an embedded system on STM32F407G to monitor temperature and humidity using an SHT3X sensor via I2C.',
      'Implemented UART communication through USB-TTL to receive terminal commands and control on-board LEDs.',
      'Displayed real-time sensor readings and LED status on an SSD1306 OLED screen with button-based page switching.',
      'Used UART receive interrupt and ring buffer handling to process terminal commands efficiently.',
    ],
    technologies: ['Embedded C', 'STM32CubeIDE', 'STM32F407G', 'UART', 'I2C', 'SHT3X', 'SSD1306 OLED'],
    github: 'https://github.com/thanh3968/uart_f407g',
    accent: 'violet',
  },
  {
    number: '03',
    title: 'Personal Portfolio',
    description:
      'A modern responsive portfolio website presenting my education, internship experience, technical skills, and selected engineering projects.',
    features: [
      'Built with reusable React components and editable profile data.',
      'Designed with a dark technology-focused interface using Tailwind CSS.',
      'Deployed publicly so recruiters and collaborators can access it online.',
    ],
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Vercel'],
    github: 'https://github.com/thanh3968/to-tien-thanh-portfolio',
    accent: 'blue',
  },
]

