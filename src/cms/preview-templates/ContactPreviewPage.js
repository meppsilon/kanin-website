import React from 'react'
import PropTypes from 'prop-types'
import { ContactPageTemplate } from '../../templates/contact-page'

const ContactPagePreview = ({ entry, widgetFor }) => (
  <ContactPageTemplate
    categories={entry.getIn(['data', 'categories'])}
  />
)

ContactPagePreview.propTypes = {
  widgetFor: PropTypes.func,
}

export default ContactPagePreview
