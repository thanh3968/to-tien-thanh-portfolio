// Edit this file to update portfolio content without touching the components.
export const profile = {
  name: 'Tô Tiến Thành',
  shortName: 'Thành',
  initials: 'TTT',
  role: 'Student · Developer',
  specialty: 'Embedded & IoT Enthusiast',
  tagline:
    'I learn by building intelligent systems where hardware, software, and real-world data meet.',
  description:
    'I am learning and developing projects in embedded programming, ESP32, STM32, FreeRTOS, IoT, and artificial intelligence.',
  about: [
    'I am a technology student passionate about turning ideas into reliable, connected systems. I enjoy working close to the hardware — reading sensors, designing communication flows, and writing clean firmware.',
    'My current focus is building a strong foundation in Embedded Systems and IoT, while exploring how FreeRTOS and AI can make devices more responsive, useful, and intelligent.',
  ],
  email: 'thanhto1257@gmail.com',
  github: 'https://github.com/thanh3968',
  location: 'Vietnam',
  availability: 'Open to learning & collaboration',
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const stats = [
  { value: '03+', label: 'Featured projects' },
  { value: '08+', label: 'Core technologies' },
  { value: '∞', label: 'Curiosity to learn' },
]

export const skillGroups = [
  {
    title: 'Embedded',
    icon: 'chip',
    description: 'Building close to the hardware.',
    skills: ['ESP32', 'STM32', 'FreeRTOS', 'UART', 'GPIO', 'I2C', 'SPI'],
  },
  {
    title: 'Programming',
    icon: 'code',
    description: 'Writing clear, purposeful logic.',
    skills: ['C', 'C++', 'Python basics'],
  },
  {
    title: 'Web & AI',
    icon: 'layers',
    description: 'Expanding connected experiences.',
    skills: ['React basics', 'Tailwind CSS', 'AI basics'],
  },
  {
    title: 'Tools',
    icon: 'tools',
    description: 'A practical development workflow.',
    skills: ['Git', 'VS Code', 'PlatformIO', 'STM32CubeIDE'],
  },
]

export const projects = [
  {
    number: '01',
    title: 'IoT Environment Monitor',
    description:
      'A connected ESP32 system that collects environmental data and turns it into meaningful, real-time feedback.',
    features: [
      'Reads temperature, humidity, and light levels',
      'Sends sensor data wirelessly over Wi-Fi',
      'Triggers visual alerts with an LED',
      'Ready to scale with FreeRTOS tasks',
    ],
    technologies: ['ESP32', 'C++', 'Wi-Fi', 'Sensors', 'FreeRTOS'],
    github: '#',
    accent: 'cyan',
  },
  {
    number: '02',
    title: 'UART Device Controller',
    description:
      'A command-driven microcontroller interface for controlling hardware directly from a serial terminal.',
    features: [
      'Accepts human-readable terminal commands',
      'Parses and validates UART input',
      'Controls LED states in real time',
    ],
    technologies: ['C', 'UART', 'GPIO', 'Microcontroller'],
    github: '#',
    accent: 'violet',
  },
  {
    number: '03',
    title: 'Personal Portfolio',
    description:
      'A modern, responsive home for my story, technical skills, and projects — designed and built from scratch.',
    features: [
      'Responsive across desktop and mobile',
      'Reusable, data-driven components',
      'Accessible and easy to customize',
    ],
    technologies: ['React', 'Vite', 'Tailwind CSS'],
    github: '#',
    accent: 'blue',
  },
]
