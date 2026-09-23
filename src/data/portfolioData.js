// Single source of truth untuk seluruh konten portofolio.
// Tambahkan atau ubah data di sini tanpa perlu mengubah komponen tampilan.

export const profile = {
  name: 'Muhammad Faisal Rahman',
  role: 'Junior Fullstack / Web Developer',
  education: {
    degree: 'D3 Sistem Informasi',
    institution: 'UPN Veteran Jakarta',
    gpa: '3.84 / 4.00',
  },
  tagline: 'Membangun sistem yang rapi, dari database sampai antarmuka.',
  summary:
    'Fokus pada pengembangan web fullstack dengan pengalaman desain API, integritas database relasional, dan analisis sistem berbasis SDLC.',
  contact: {
    // Ganti sebelum deploy agar CTA email mengarah ke alamat yang benar.
    email: 'isi-email-kamu@example.com',
    github: 'https://github.com/FaisalRahman-stack',
    linkedin: 'https://linkedin.com/in/faisal-rahman-8a8650320',
  },
}

export const skills = [
  { category: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React', 'Expo'] },
  {
    category: 'Backend & Database',
    items: ['REST API Design', 'MySQL', 'ERD', 'Foreign Key'],
  },
  { category: 'Analisis Sistem', items: ['SDLC', 'Flowchart', 'System Analysis'] },
]

export const projects = [
  {
    id: 'logistic-tracker',
    title: 'Logistic Tracker Web Application',
    shortDescription: 'Aplikasi web tracking resi dengan RESTful API armada dan rute.',
    fullDescription:
      'Sistem pelacakan logistik dengan desain RESTful API untuk manajemen armada dan rute pengiriman, menjaga integritas database MySQL, serta antarmuka responsif untuk tracking resi real-time.',
    techStack: ['React', 'Node.js', 'MySQL', 'REST API'],
    githubUrl: 'https://github.com/FaisalRahman-stack/logistic-tracker',
    demoUrl: null,
    imageUrl: null,
    featured: true,
  },
  {
    id: 'rental-kendaraan',
    title: 'Sistem Informasi Rental Kendaraan',
    shortDescription:
      'Dashboard CRUD dengan RBAC (Admin vs User) dan upload visual kendaraan.',
    fullDescription:
      'Sistem informasi rental kendaraan dengan Role-Based Access Control (Admin vs User), dashboard full CRUD, fitur upload visual mobil dinamis, dan basis data MySQL relasional.',
    techStack: ['React', 'MySQL', 'RBAC', 'REST API'],
    githubUrl: 'https://github.com/FaisalRahman-stack/rental-kendaraan',
    demoUrl: null,
    imageUrl: null,
    featured: true,
  },
]

export const organizations = [
  {
    role: 'Ketua Umum',
    name: 'UBV Jakarta',
    period: '2026',
    description:
      'Memimpin organisasi kemahasiswaan, mengelola koordinasi tim dan program kerja.',
  },
]
