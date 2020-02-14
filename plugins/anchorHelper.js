import Vue from 'vue'

const AnchorHelperImpl = {
  generateAnchors(rootElement) {
    if (rootElement === null) {
      return []
    }

    const elements = rootElement.querySelectorAll('h1,h2')

    if (elements === null) {
      return []
    }

    const anchors = []

    for (let i = 0; i < elements.length; i++) {
      const header = elements[i]
      const anchor = header

      if (anchor === null) {
        continue
      }

      const content = {
        title: header.id,
        href: `#${anchor.id}`,
        subList: []
      }

      if (header.nodeName === 'H1') {
        anchors.push(content)
      } else if (header.nodeName === 'H2') {
        if (anchors.length === 0) {
          continue
        }

        anchors[anchors.length - 1].subList.push(content)
      }
    }

    return anchors
  }
}

const AnchorHelper = {
  install(Vue) {
    Vue.prototype.$anchorHelper = AnchorHelperImpl
  }
}

Vue.use(AnchorHelper)
