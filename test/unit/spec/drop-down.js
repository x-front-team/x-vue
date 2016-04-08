
describe('drop-down', function () {

  let down = null

  before(function (done) {
    app.currentComponent = 'dropDown'
    return Vue.nextTick(() => {
      down = $('#x-vue-demo-drop-down')
      done()
    })
  })

  it('exists', function () {
    down.should.exit
  })

})
