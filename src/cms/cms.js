import CMS from 'netlify-cms'

import BioPreviewPage from './preview-templates/BioPreviewPage'
import ContactPreviewPage from './preview-templates/ContactPreviewPage'
import BackgroundPreviewPage from './preview-templates/BackgroundPreviewPage'

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('bio', BioPreviewPage)
CMS.registerPreviewTemplate('contact', ContactPreviewPage)
CMS.registerPreivewTemplate('background', BackgroundPreviewPage)
