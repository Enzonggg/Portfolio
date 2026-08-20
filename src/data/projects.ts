export type Project = {
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  highlights: string[];
  image: string;
  problem: string;
  solution: string;
  outcome: string;
};

export const projects: Project[] = [
  { slug: "recipehub", title: "Recipehub", description: "A web application that allows users to create, share, and discover recipes with a focus on community engagement and personalized recommendations.", technologies: ["React", "Node.js", "Express", "MySQL", "Tailwind CSS", "DaisyUI"], category: "Web Application", highlights: ["Recipe creation", "Community sharing", "Personalized recommendations"], image: "/images/recipehub-project.png", problem: "Home cooks need a simple place to save recipes and discover ideas from others.", solution: "Recipehub brings publishing, browsing, and recommendations into one community-focused experience.", outcome: "A clearer recipe discovery flow that encourages users to contribute and return." },
  { slug: "cake-reservation", title: "Cake Reservation System", description: "A web application for managing cake orders, inventory, and customer reservations with a user-friendly interface.", technologies: ["PHP", "CSS", "MySQL"], category: "E-commerce", highlights: ["Order management", "Inventory tracking", "Customer reservations"], image: "/images/cake.png", problem: "Manual cake reservations make it difficult to track orders and available inventory.", solution: "A central dashboard records reservations, customer details, and stock information.", outcome: "A smoother ordering process with fewer missed details for staff and customers." },
  { slug: "student-clearance", title: "Student Clearance and Monitoring System", description: "A web application designed to streamline the student clearance process, track progress, and provide real-time updates for students and administrators.", technologies: ["Angular", "PHP", "MySQL"], category: "Web Application", highlights: ["Student clearance tracking", "Real-time updates", "Administrator dashboard"], image: "/images/scams.png", problem: "Students and administrators need visibility into each step of the clearance process.", solution: "The system centralizes status tracking and provides timely progress updates for each user.", outcome: "A more transparent workflow that reduces follow-ups and administrative overhead." },
  { slug: "elearning", title: "Web E-learning System", description: "A web-based e-learning platform that provides interactive courses, quizzes, and progress tracking for students.", technologies: ["React", "TypeScript", "Vite"], category: "E-learning", highlights: ["Interactive courses", "Quizzes and assessments", "Progress tracking"], image: "/images/elearning-project.png", problem: "Learners need a structured place to work through lessons and see their progress.", solution: "Interactive course content, assessments, and progress views are combined in a focused learning platform.", outcome: "Students can learn at their own pace while keeping track of completed work." },
  { slug: "clinic-management", title: "Clinic Management System", description: "A comprehensive web-based solution for managing clinic operations, including patient records, appointments, and billing.", technologies: ["Next.js", "Tailwind CSS"], category: "Healthcare", highlights: ["Patient record management", "Appointment scheduling", "Billing and invoicing"], image: "/images/clinic-project.png", problem: "Clinic operations involve many related records that are difficult to coordinate manually.", solution: "A unified tool supports appointments, patient information, and billing workflows.", outcome: "Staff gain a more organized operational view and patients get a clearer appointment experience." },
];

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
