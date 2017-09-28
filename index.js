const path = require('path')

const videoshow = require('videoshow')

const input = path.resolve(__dirname, 'image.png')
const output = path.resolve(__dirname, 'video.mp4')

const videoOptions = {
  fps: 25,
  loop: 3,
  transition: false,
  videoBitrate: 1024,
  videoCodec: 'libx264',
  size: '720x1280',
  format: 'mp4',
  pixelFormat: 'yuv420p'
}

videoshow([input], videoOptions)
  .save(output)
  .on('start', function (command) {
    console.log('ffmpeg process started:', command)
  })
  .on('error', function (err, stdout, stderr) {
    console.error('Error:', err)
    console.error('ffmpeg stderr:', stderr)
  })
  .on('end', function (output) {
    console.error('Video created in:', output)
  })
