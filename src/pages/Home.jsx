import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ProfilePhoto from '../components/ProfilePhoto'
import ProjectCard from '../components/ProjectCard'
import SectionHeading from '../components/SectionHeading'
import SkillBadge from '../components/SkillBadge'
import { profile, projects, skills } from '../data/portfolioData'

function Home() {
  const featuredProjects = projects.filter((project) => project.featured)

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <div className="flex flex-col-reverse gap-12 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="font-mono text-sm text-cyan-400 md:text-base">👋 Halo, saya</p>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-100 md:text-5xl">
                {profile.name}
              </h1>
              <p className="mt-4 text-xl font-medium text-text-primary sm:text-2xl">
                {profile.role}
              </p>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-text-secondary">
                {profile.tagline}
              </p>
              <p className="mt-4 max-w-2xl leading-7 text-text-secondary">{profile.summary}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  className="rounded-lg bg-accent px-5 py-2.5 font-medium text-background transition-colors duration-200 hover:bg-cyan-300"
                  href="#projects"
                >
                  Lihat proyek
                </a>
                <a
                  className="rounded-lg border px-5 py-2.5 font-medium text-text-primary transition-colors duration-200 hover:bg-surface-hover"
                  href={profile.contact.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
            <ProfilePhoto />
          </div>
        </section>

        <section id="projects" className="scroll-mt-24 border-y bg-surface">
          <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
            <SectionHeading
              eyebrow="PROYEK UNGGULAN"
              title="Bukti kerja, bukan hanya daftar skill."
              description="Dua proyek yang menunjukkan cara saya menghubungkan kebutuhan sistem, basis data, API, dan antarmuka."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} data={project} />
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <SectionHeading
            eyebrow="RINGKASAN SKILL"
            title="Teknologi yang saya gunakan."
            description="Fokus pada fondasi fullstack dan analisis sistem untuk membangun aplikasi yang terstruktur."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {skills.map((skillGroup) => (
              <article key={skillGroup.category} className="rounded-xl border bg-surface p-6">
                <h3 className="text-lg font-semibold">{skillGroup.category}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <SkillBadge key={skill}>{skill}</SkillBadge>
                  ))}
                </div>
              </article>
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

export default Home
