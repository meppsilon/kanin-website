import React from 'react'
import PropTypes from 'prop-types'
import { BackgroundMediaTemplate } from '../../components/BackgroundMedia'

const BackgroundPagePreview = ({ entry, widgetFor }) => (
  <BackgroundMediaTemplate
    type={entry.getIn(['data', 'type'])}
    media={entry.getIn(['data', 'media'])}
  />
)

BackgroundPagePreview.propTypes = {
  widgetFor: PropTypes.func,
}

export default BackgroundPagePreview
