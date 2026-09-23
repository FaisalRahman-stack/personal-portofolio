import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SectionHeading from '../components/SectionHeading'
import SkillBadge from '../components/SkillBadge'
import { organizations, profile, skills } from '../data/portfolioData'

function About() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <SectionHeading
            eyebrow="TENTANG SAYA"
            title="Belajar membangun sistem secara menyeluruh."
            description={profile.summary}
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_20rem]">
            <article className="rounded-xl border bg-surface p-6">
              <p className="font-mono text-sm text-accent">PENDIDIKAN</p>
              <h3 className="mt-4 text-lg font-semibold">{profile.education.degree}</h3>
              <p className="mt-2 text-text-secondary">{profile.education.institution}</p>
              <div className="mt-6 border-t pt-5">
                <p className="text-sm text-text-secondary">IPK</p>
                <p className="mt-1 font-mono text-xl font-medium">{profile.education.gpa}</p>
              </div>
            </article>

            <article className="rounded-xl border bg-surface p-6">
              <p className="font-mono text-sm text-accent">ARAH KARIER</p>
              <p className="mt-4 text-lg font-semibold">{profile.role}</p>
              <p className="mt-3 leading-7 text-text-secondary">{profile.tagline}</p>
            </article>
          </div>
        </section>

        <section className="border-y bg-surface">
          <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
            <SectionHeading
              eyebrow="KEMAMPUAN TEKNIS"
              title="Skill yang terus saya kembangkan."
              description="Dikelompokkan berdasarkan area kerja agar mudah dibaca recruiter maupun technical reviewer."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {skills.map((skillGroup) => (
                <article key={skillGroup.category} className="rounded-xl border bg-background p-6">
                  <h3 className="text-lg font-semibold">{skillGroup.category}</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <SkillBadge key={skill}>{skill}</SkillBadge>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <SectionHeading
            eyebrow="ORGANISASI"
            title="Pengalaman memimpin dan berkolaborasi."
            description="Pengalaman di luar proyek teknis yang melatih komunikasi, koordinasi, dan tanggung jawab."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {organizations.map((organization) => (
              <article
                key={`${organization.name}-${organization.role}-${organization.period}`}
                className="rounded-xl border bg-surface p-6"
              >
                <p className="font-mono text-sm text-accent">{organization.period}</p>
                <h3 className="mt-3 text-lg font-semibold">{organization.role}</h3>
                <p className="mt-1 text-text-secondary">{organization.name}</p>
                <p className="mt-4 leading-7 text-text-secondary">{organization.description}</p>
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

export default About
