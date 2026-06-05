// ─── Static data for all UI sections ─────────────────────────────────────────
// Replace with Supabase queries when backend is ready

export const stats = [
  { value: 3500, suffix: '+', label: 'Students Enrolled', icon: '🎓' },
  { value: 120, suffix: '+', label: 'Expert Faculty', icon: '👨‍🏫' },
  { value: 25, suffix: '+', label: 'Years of Excellence', icon: '🏛️' },
  { value: 18, suffix: '', label: 'Academic Departments', icon: '📚' },
  { value: 95, suffix: '%', label: 'Placement Rate', icon: '💼' },
  { value: 200, suffix: '+', label: 'Research Papers', icon: '🔬' },
];

export const programs = [
  {
    id: 1,
    icon: '⚗️',
    department: 'Sciences',
    title: 'B.Sc. Chemistry',
    duration: '3 Years',
    seats: 60,
    description: 'Rigorous study of organic, inorganic and physical chemistry with state-of-the-art laboratory facilities.',
    highlights: ['Advanced Lab Facilities', 'Research Projects', 'Industry Internships'],
  },
  {
    id: 2,
    icon: '💻',
    department: 'Computer Science',
    title: 'B.Sc. Computer Science',
    duration: '3 Years',
    seats: 60,
    description: 'Comprehensive curriculum in programming, data structures, AI and software engineering.',
    highlights: ['Modern Computer Labs', 'Coding Bootcamps', 'Tech Industry Tie-ups'],
  },
  {
    id: 3,
    icon: '📐',
    department: 'Mathematics',
    title: 'B.Sc. Mathematics',
    duration: '3 Years',
    seats: 60,
    description: 'Deep exploration of pure and applied mathematics, statistics and computational methods.',
    highlights: ['Research Seminars', 'Statistics Lab', 'Industry Applications'],
  },
  {
    id: 4,
    icon: '📖',
    department: 'Arts',
    title: 'B.A. English Literature',
    duration: '3 Years',
    seats: 60,
    description: 'Study of classical and contemporary literature, creative writing and critical analysis.',
    highlights: ['Literary Society', 'Creative Writing Workshop', 'Drama Club'],
  },
  {
    id: 5,
    icon: '📊',
    department: 'Commerce',
    title: 'B.Com. (General)',
    duration: '3 Years',
    seats: 120,
    description: 'Foundation in accounting, business studies, economics and financial management.',
    highlights: ['Business Simulations', 'CA Coaching', 'Entrepreneurship Cell'],
  },
  {
    id: 6,
    icon: '🌱',
    department: 'Sciences',
    title: 'B.Sc. Botany',
    duration: '3 Years',
    seats: 40,
    description: 'Study of plant biology, ecology, biotechnology and environmental science.',
    highlights: ['Botanical Garden', 'Field Studies', 'Bio-research Lab'],
  },
];

export const admissionSteps = [
  {
    step: '01',
    title: 'Online Application',
    description: 'Complete the online application form with your personal details, academic records and program preferences.',
    icon: '📝',
  },
  {
    step: '02',
    title: 'Document Submission',
    description: 'Submit certified copies of your academic certificates, community certificate, and transfer certificate.',
    icon: '📂',
  },
  {
    step: '03',
    title: 'Merit Evaluation',
    description: 'Applications are reviewed based on academic merit and the qualifying examination scores.',
    icon: '📊',
  },
  {
    step: '04',
    title: 'Counselling & Allotment',
    description: 'Attend the counselling session for seat allotment based on merit rank and program availability.',
    icon: '🤝',
  },
  {
    step: '05',
    title: 'Fee Payment & Enrolment',
    description: 'Complete fee payment and collect your student ID to officially enrol in your program.',
    icon: '🎓',
  },
];

export const faculty = [
  {
    id: 1,
    name: 'Dr. P. Murugan',
    designation: 'Principal & Professor',
    department: 'Administration',
    qualification: 'Ph.D., M.Phil.',
    experience: '28 Years',
    image: '/images/faculty_1.png',
    specialization: 'Organic Chemistry',
  },
  {
    id: 2,
    name: 'Dr. S. Kavitha',
    designation: 'Head of Department',
    department: 'Computer Science',
    qualification: 'Ph.D., M.C.A.',
    experience: '18 Years',
    image: '/images/faculty_2.png',
    specialization: 'Artificial Intelligence',
  },
  {
    id: 3,
    name: 'Dr. R. Krishnamurthy',
    designation: 'Associate Professor',
    department: 'Mathematics',
    qualification: 'Ph.D., M.Sc.',
    experience: '22 Years',
    image: '/images/faculty_3.png',
    specialization: 'Applied Mathematics',
  },
  {
    id: 4,
    name: 'Ms. Priya Nair',
    designation: 'Assistant Professor',
    department: 'English',
    qualification: 'M.Phil., M.A.',
    experience: '10 Years',
    image: '/images/faculty_4.png',
    specialization: 'Post-Colonial Literature',
  },
];

export const events = [
  {
    id: 1,
    date: { day: '15', month: 'Jul', year: '2026' },
    title: 'Annual Tech Symposium 2026',
    category: 'Academic',
    description: 'A premier platform for students and researchers to present innovations and connect with industry leaders.',
    location: 'Main Auditorium',
    time: '9:00 AM',
  },
  {
    id: 2,
    date: { day: '22', month: 'Jul', year: '2026' },
    title: 'Fresher\'s Day Celebration',
    category: 'Cultural',
    description: 'A grand welcome event for new students featuring cultural performances, games and orientation.',
    location: 'College Grounds',
    time: '10:00 AM',
  },
  {
    id: 3,
    date: { day: '05', month: 'Aug', year: '2026' },
    title: 'National Science Day Seminar',
    category: 'Science',
    description: 'Distinguished scientists and researchers address students on cutting-edge scientific discoveries.',
    location: 'Science Block Hall',
    time: '9:30 AM',
  },
  {
    id: 4,
    date: { day: '18', month: 'Aug', year: '2026' },
    title: 'Inter-Collegiate Sports Meet',
    category: 'Sports',
    description: 'Annual sports extravaganza featuring athletics, cricket, kabaddi and indoor games championships.',
    location: 'Sports Arena',
    time: '8:00 AM',
  },
];

export const departments = [
  { id: 1, icon: '⚗️', name: 'Chemistry', programs: 2, faculty: 8, established: 1999 },
  { id: 2, icon: '💻', name: 'Computer Science', programs: 3, faculty: 12, established: 2001 },
  { id: 3, icon: '📐', name: 'Mathematics', programs: 2, faculty: 7, established: 1999 },
  { id: 4, icon: '🧬', name: 'Zoology', programs: 2, faculty: 6, established: 2000 },
  { id: 5, icon: '🌱', name: 'Botany', programs: 2, faculty: 6, established: 2000 },
  { id: 6, icon: '📖', name: 'English', programs: 2, faculty: 9, established: 1999 },
  { id: 7, icon: '📊', name: 'Commerce', programs: 3, faculty: 11, established: 2002 },
  { id: 8, icon: '🏛️', name: 'History', programs: 1, faculty: 5, established: 1999 },
  { id: 9, icon: '🌍', name: 'Geography', programs: 1, faculty: 4, established: 2003 },
];

export const gallery = [
  { id: 1, src: '/images/gallery_1.png', caption: 'Science Laboratory', category: 'Academics', tall: false },
  { id: 2, src: '/images/gallery_2.png', caption: 'College Library', category: 'Facilities', tall: true },
  { id: 3, src: '/images/gallery_3.png', caption: 'Cultural Festival', category: 'Events', tall: false },
  { id: 4, src: '/images/gallery_4.png', caption: 'Computer Lab', category: 'Academics', tall: false },
  { id: 5, src: '/images/gallery_5.png', caption: 'Sports Day', category: 'Sports', tall: true },
  { id: 6, src: '/images/gallery_6.png', caption: 'Seminar Hall', category: 'Facilities', tall: false },
  { id: 7, src: '/images/gallery_7.png', caption: 'Campus Grounds', category: 'Campus', tall: false },
  { id: 8, src: '/images/gallery_8.png', caption: 'Convocation Ceremony', category: 'Events', tall: true },
];

export const news = [
  {
    id: 1,
    category: 'Research',
    date: 'June 1, 2026',
    title: 'JPM College Research Team Publishes Breakthrough in Environmental Chemistry',
    excerpt: "Our Chemistry Department's research on bio-degradable polymers was published in an internationally peer-reviewed journal, marking a milestone for the institution.",
    image: '/images/news_1.png',
    readTime: '4 min read',
  },
  {
    id: 2,
    category: 'Achievement',
    date: 'May 20, 2026',
    title: 'Students Win State-Level Coding Championship for Third Consecutive Year',
    excerpt: "The Computer Science Department's students secured gold at the Tamil Nadu State-Level Hackathon, bringing pride to the institution.",
    image: '/images/news_2.png',
    readTime: '3 min read',
  },
  {
    id: 3,
    category: 'Partnership',
    date: 'May 10, 2026',
    title: 'JPM College Signs MOU with Leading IT Companies for Internship Programs',
    excerpt: 'A landmark agreement providing guaranteed internship opportunities and placement support for final-year students across all streams.',
    image: '/images/news_3.png',
    readTime: '5 min read',
  },
];
