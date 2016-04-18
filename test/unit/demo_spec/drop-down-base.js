
describe('drop down base demo', function () {

  let
    container = $('#x-vue-demo-drop-down-base'),
    linkDown = $('#x-vue-demo-drop-down-base-link'),
    primaryDown = $('#x-vue-demo-drop-down-base-primary'),
    successDown = $('#x-vue-demo-drop-down-base-success'),
    infoDown = $('#x-vue-demo-drop-down-base-info'),
    dangerDown = $('#x-vue-demo-drop-down-base-danger')


  it('exists', function () {
    container.should.exist
    linkDown.should.exist
    primaryDown.should.exist
    successDown.should.exist
    infoDown.should.exist
    dangerDown.should.exist
  })

  it('will show drop down after btn click', function (done) {
    linkDown.find('.dropdown-toggle').click()
    Vue.nextTick(function () {
      $('#x-vue-demo-drop-down-base-card-link').should.exist
      done()
    })
  })

})
