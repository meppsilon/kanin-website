import React from 'react'
import PropTypes from 'prop-types'
import { BioPageTemplate } from '../../templates/bio-page'

const BioPagePreview = ({ entry, widgetFor }) => (
  <BioPageTemplate
    content={widgetFor('body')}
  />
)

BioPagePreview.propTypes = {
  widgetFor: PropTypes.func,
}

export default BioPagePreview
