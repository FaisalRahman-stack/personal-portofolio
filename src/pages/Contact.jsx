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
    { label: 'Email', href: `mailto:${email}`, description: 'Kirim email langsung ke saya.' },
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
              <p className="font-mono text-sm text-accent">Curriculum Vitae</p>
              <p className="mt-4 text-lg font-semibold">Tertarik meninjau kualifikasi lengkap saya?</p> 
              <p className="mt-2 leading-7 text-text-secondary">Unduh resume PDF singkat untuk seleksi magang.</p>
                <a
                  href="/cv.pdf"
                  download="CV Muhammad Faisal Rahman.pdf"
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 font-semibold text-slate-950 transition hover:opacity-90 whitespace-nowrap self-start md:self-auto">
                  <span>Unduh CV (PDF)</span>
                  <span>↓</span>
                </a>  
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
