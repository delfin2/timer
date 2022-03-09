import kebabize from '@/helpers/kebabize.js'
import layers from '@/layers'
import base from '@/components/base'

const components = {
  ...layers.components,
  ...base.components
}

export default (app) => {
  for (const [name, options] of Object.entries(components)) {
    app.component(kebabize(name), options)
  }
}
