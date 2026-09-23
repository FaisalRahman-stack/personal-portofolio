import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SectionHeading from '../components/SectionHeading'
import { profile } from '../data/portfolioData'

function Contact() {
  const { email, github, linkedin } = profile.contact
  const emailIsPlaceholder = email.endsWith('@example.com')
  const externalLinks = [
    { label: 'GitHub', href: github, description: 'Lihat kode dan riwayat proyek saya.' },
    { label: 'LinkedIn', href: linkedin, description: 'Terhubung secara profesional.' },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <SectionHeading
            eyebrow="KONTAK"
            title="Mari berdiskusi tentang kesempatan magang."
            description="Saya terbuka untuk berdiskusi mengenai proyek web, proses belajar, dan peluang untuk berkontribusi dalam tim pengembangan."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <article className="rounded-xl border bg-surface p-6 lg:col-span-3">
              <p className="font-mono text-sm text-accent">EMAIL</p>
              {emailIsPlaceholder ? (
                <div className="mt-4">
                  <p className="text-lg font-semibold">Email belum dipublikasikan</p>
                  <p className="mt-2 leading-7 text-text-secondary">
                    Ganti nilai <code className="font-mono text-accent">profile.contact.email</code>{' '}
                    di portfolioData.js sebelum deploy agar CTA email aktif.
                  </p>
                </div>
              ) : (
                <a
                  className="mt-4 inline-block text-lg font-semibold text-accent transition-colors duration-200 hover:text-cyan-300"
                  href={`mailto:${email}`}
                >
                  {email}
                </a>
              )}
            </article>

            {externalLinks.map((link) => (
              <a
                key={link.label}
                className="rounded-xl border bg-surface p-6 transition-colors duration-200 hover:border-accent hover:bg-surface-hover"
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                <p className="font-mono text-sm text-accent">{link.label}</p>
                <p className="mt-4 text-lg font-semibold">
                  Kunjungi {link.label} <span aria-hidden="true">↗</span>
                </p>
                <p className="mt-2 leading-7 text-text-secondary">{link.description}</p>
              </a>
            ))}
          </div>
        </section>
      </main>

      <Footer name={profile.name} githubUrl={github} linkedinUrl={linkedin} />
    </div>
  )
}

export default Contact
