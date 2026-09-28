import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import SkillBadge from './SkillBadge'

function ProjectCard({ data, showFullDescription = false }) {
  const {
    title,
    shortDescription,
    fullDescription,
    techStack = [],
    githubUrl,
    demoUrl,
    imageUrl,
    images = []
  } = data

  const description = showFullDescription ? fullDescription : shortDescription

  // Menggabungkan array images atau fallback ke imageUrl lama
  const imageList = images.length > 0 ? images : (imageUrl ? [imageUrl] : [])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (imageList.length <= 1) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imageList.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [imageList.length])

  return (
    <article className="overflow-hidden rounded-xl border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 motion-reduce:transform-none motion-reduce:transition-none flex flex-col justify-between">
      <div className="relative aspect-video w-full overflow-hidden border-b border-slate-800 bg-[#f8fafc] flex items-center justify-center">
  {imageList.length > 0 ? (
    <>
      {imageList.map((src, index) => (
        <img
          key={src}
          src={src}
          alt={`Tampilan ${title} ${index + 1}`}
          className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-500 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        />
      ))}

      {/* Indikator Dots Navigasi */}
      {imageList.length > 1 && (
        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5 z-10">
          {imageList.map((_, dotIdx) => (
            <button
              key={dotIdx}
              type="button"
              onClick={() => setCurrentIndex(dotIdx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                dotIdx === currentIndex
                  ? 'w-5 bg-cyan-600'
                  : 'w-1.5 bg-slate-400/70 hover:bg-slate-500'
              }`}
              aria-label={`Lihat gambar ke-${dotIdx + 1}`}
            />
          ))}
        </div>
      )}
    </>
  ) : (
    <div className="flex aspect-video w-full items-center justify-center bg-slate-950 px-6 text-center font-mono text-sm text-text-secondary">
      Preview proyek akan ditambahkan
    </div>
  )}
</div>

      {/* Konten Card */}
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="mt-3 leading-7 text-text-secondary">{description}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {techStack.map((technology) => (
              <SkillBadge key={technology}>{technology}</SkillBadge>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-4">
          {githubUrl && (
            <a
              className="font-medium text-accent transition-colors duration-200 hover:text-cyan-300"
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              Lihat kode <span aria-hidden="true">↗</span>
            </a>
          )}
          {demoUrl && (
            <a
              className="font-medium text-accent transition-colors duration-200 hover:text-cyan-300"
              href={demoUrl}
              target="_blank"
              rel="noreferrer"
            >
              Lihat demo <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

ProjectCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    shortDescription: PropTypes.string.isRequired,
    fullDescription: PropTypes.string.isRequired,
    techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
    githubUrl: PropTypes.string.isRequired,
    demoUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  showFullDescription: PropTypes.bool,
}

ProjectCard.defaultProps = {
  showFullDescription: false,
}

export default ProjectCard