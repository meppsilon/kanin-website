import React from 'react'
import PropTypes from 'prop-types'
import { BackgroundMediaTemplate } from '../../components/BackgroundMedia'

const BackgroundPagePreview = ({ entry, widgetFor }) => (
  <BackgroundMediaTemplate
    image={entry.getIn(['data', 'image'])}
    fontColor={entry.getIn(['data', 'fontColor'])}
  />
)

BackgroundPagePreview.propTypes = {
  widgetFor: PropTypes.func,
}

export default BackgroundPagePreview
