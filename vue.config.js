module.exports = {
    transpileDependencies: [
      'vuetify'
    ],
    pwa: {
      // configure the workbox plugin
      workboxPluginMode: 'GenerateSW',
      manifestOptions: {
        name: 'IP Address Tracker',
        short_name: 'IP Monitor',
        icons: [
          // eslint-disable-next-line quote-props
          { 'src': './img/icons/IP.jpg', 'sizes': '512x512', 'type': 'image/jpg' }
        ],
        background_color: '#6367E6',
        display: 'standalone',
        theme_color: '#3367D6',
        description: 'View IP  information today!'
      }
    }
  }
  