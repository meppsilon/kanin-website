import CMS from 'netlify-cms'

import ProductPagePreview from './preview-templates/BioPreviewPage'

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('bio', BioPreviewPage)
