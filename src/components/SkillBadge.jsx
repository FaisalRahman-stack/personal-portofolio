import PropTypes from 'prop-types'

function SkillBadge({ children }) {
  return (
    <span className="rounded-full bg-accent-muted px-3 py-1 font-mono text-sm text-accent">
      {children}
    </span>
  )
}

SkillBadge.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SkillBadge
