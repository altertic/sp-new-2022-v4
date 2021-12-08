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
  large,
  className = ''
}) => {
  if (large) className += ' PageHeader-large'
  return (
    <section className={`PageHeader relative ${className} BackgroundImage`}>
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
