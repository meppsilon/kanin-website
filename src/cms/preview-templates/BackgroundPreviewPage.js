import React from 'react'
import PropTypes from 'prop-types'
import { BackgroundMediaTemplate } from '../../components/BackgroundMedia'

const BackgroundPagePreview = ({ entry, widgetFor }) => (
  <BackgroundMediaTemplate
    photos={entry.getIn(['data', 'photos', 'photo'])}
    fontColor={entry.getIn(['data', 'fontColor'])}
  />
)

BackgroundPagePreview.propTypes = {
  widgetFor: PropTypes.func,
}

export default BackgroundPagePreview
