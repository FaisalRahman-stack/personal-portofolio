import PropTypes from 'prop-types'
import SkillBadge from './SkillBadge'

function ProjectCard({ data, showFullDescription = false }) {
  const { title, shortDescription, fullDescription, techStack, githubUrl, demoUrl, imageUrl } = data
  const description = showFullDescription ? fullDescription : shortDescription

  return (
    <article className="overflow-hidden rounded-xl border bg-surface transition-colors duration-200 hover:border-accent">
      {imageUrl ? (
        <img className="h-48 w-full object-cover" src={imageUrl} alt={`Tampilan ${title}`} />
      ) : (
        <div className="flex h-48 items-center justify-center border-b bg-background px-6 text-center font-mono text-sm text-text-secondary">
          Preview proyek akan ditambahkan
        </div>
      )}

      <div className="p-6">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-3 leading-7 text-text-secondary">{description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {techStack.map((technology) => (
            <SkillBadge key={technology}>{technology}</SkillBadge>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-4">
          <a
            className="font-medium text-accent transition-colors duration-200 hover:text-cyan-300"
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            Lihat kode <span aria-hidden="true">↗</span>
          </a>
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
  }).isRequired,
  showFullDescription: PropTypes.bool,
}

ProjectCard.defaultProps = {
  showFullDescription: false,
}

export default ProjectCard
