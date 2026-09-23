import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ProjectCard from '../components/ProjectCard'
import SectionHeading from '../components/SectionHeading'
import { profile, projects } from '../data/portfolioData'

function Projects() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <SectionHeading
            eyebrow="SEMUA PROYEK"
            title="Membangun dari masalah hingga solusi."
            description="Setiap proyek dirancang untuk memperlihatkan proses berpikir fullstack: struktur data, API, hak akses, dan antarmuka yang dapat digunakan."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.id} data={project} showFullDescription />
            ))}
          </div>
        </section>
      </main>

      <Footer
        name={profile.name}
        githubUrl={profile.contact.github}
        linkedinUrl={profile.contact.linkedin}
      />
    </div>
  )
}

export default Projects
