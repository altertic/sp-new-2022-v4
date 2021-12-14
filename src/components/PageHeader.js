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
    <section className={`PageHeader relative ${className}`}>
      {backgroundImage && (
        <Image
          background
          resolutions="large"
          src={backgroundImage}
          alt={title}
          size="cover"
        />
      )}
      <span className="PageHeader--Edition">{edition}</span>
      <span className="PageHeader--Title">{title}</span>
      {subtitle && (
        <Content className="PageHeader--Subtitle" src={subtitle} />
      )}
      <span className="PageHeader--Dates">{dates}</span>
    </section>
  )
}

PageHeader.propTypes = {
  title: PropTypes.string,
  edition: PropTypes.string,
  subtitle: PropTypes.string,
  dates: PropTypes.string
}

export default PageHeader
