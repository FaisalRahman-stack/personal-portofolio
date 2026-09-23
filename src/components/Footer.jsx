import PropTypes from 'prop-types'

function Footer({ name, githubUrl, linkedinUrl }) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-text-secondary sm:flex-row sm:items-center sm:justify-between">
        <p>© {currentYear} {name}. Dibuat dengan React.</p>
        <div className="flex gap-4">
          <a
            className="transition-colors duration-200 hover:text-accent"
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="transition-colors duration-200 hover:text-accent"
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  name: PropTypes.string.isRequired,
  githubUrl: PropTypes.string.isRequired,
  linkedinUrl: PropTypes.string.isRequired,
}

export default Footer
