import React from 'react'
import PropTypes from 'prop-types'

import Image from './Image'
import Content from './Content'
import './PageHeader.css'

const PageHeader = ({
  title,
  edition,
  subtitle,
  dates,
  backgroundImage,
  large,
  className = ''
}) => {
  if (large) className += ' PageHeader-large'
  return (
    <div className={`PageHeader relative ${className}`}>
      {backgroundImage && (
        <Image
          background
          resolutions="large"
          src={backgroundImage}
          alt={title}
          size="cover"
        />
      )}
      <div className="container relative">
        <span className="PageHeader--Title">{title}</span>
        {subtitle && (
          <Content className="PageHeader--Subtitle" src={subtitle} />
        )}
        <span className="PageHeader--Title">{dates}</span>
      </div>
    </div>
  )
}

PageHeader.propTypes = {
  title: PropTypes.string,
  edition: PropTypes.string
  subtitle: PropTypes.string
  dates: PropTypes.string
}

export default PageHeader
