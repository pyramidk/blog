class Video {
  constructor ({ container, video }) {
    this.container = container
    this.video = video
    this.init = this.init.bind(this)
    this.update = this.update.bind(this)
  }

  // set style
  _setStyle (element, style) {
    Object.keys(style).forEach(item => {
      element.style[item] = style[item]
    })
  }

  init () {
    this._setStyle(this.container, {
      'position': 'relative',
      'width': '100%',
      'height': '100%',
      'overflow': 'hidden',
      'box-sizing': 'border-box'
    })
    this._setStyle(this.video, {
      'position': 'absolute',
      'top': '50%',
      'left': '50%',
      'transform': 'translate(-50%, -50%)',
      'object-fit': 'cover' // fix the white space around video when fullscreen
    })
  }

  update () {
    const videoWidth = this.video.videoWidth
    const videoHeight = this.video.videoHeight
    const videoRatio = Number((videoWidth / videoHeight).toFixed(2))

    const containerStyles = window.getComputedStyle(this.container)
    const minWidth = parseInt(containerStyles.getPropertyValue('width'))
    const minHeight = parseInt(containerStyles.getPropertyValue('height'))

    const widthRatio = minWidth / videoWidth
    const heightRatio = minHeight / videoHeight

    let newWidth, newHeight
    if (widthRatio > heightRatio) {
      newWidth = minWidth
      newHeight = Math.ceil(newWidth / videoRatio)
    } else {
      newHeight = minHeight
      newWidth = Math.ceil(newHeight * videoRatio)
    }

    this.video.style.width = newWidth + 'px'
    this.video.style.height = newHeight + 'px'
  }
}

export default Video
