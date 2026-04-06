const cds = require('@sap/cds')

module.exports = class Stateless extends cds.ApplicationService { init() {
  this.on ('showMessage', async (req) => {
    console.log('On showMessage', req.data)
    req.reply("Application Status = Healthy")
  })

  return super.init()
}}
