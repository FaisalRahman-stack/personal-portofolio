import PropTypes from 'prop-types'

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-2xl">
      {eyebrow && <p className="font-mono text-sm text-accent">{eyebrow}</p>}
      <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
      {description && <p className="mt-3 leading-7 text-text-secondary">{description}</p>}
    </div>
  )
}

SectionHeading.propTypes = {
  eyebrow: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
}

SectionHeading.defaultProps = {
  eyebrow: null,
  description: null,
}

export default SectionHeading
