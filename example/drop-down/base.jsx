export default {
  methods: {
    loseFocus() {
      console.log('lose focus')
    }
  },
  components: {
    example: {
      props: ['type'],
      computed: {
        text() {
          return 'This is a drop down type of ' + this.type
        }
      },
      render(h) {
        let id = 'x-vue-demo-drop-down-base-card-' + this.type
        return (
          <x-card id={id}>
            <x-card-block>
              <x-card-title>{this.type}</x-card-title>
              <x-card-text>{this.text}</x-card-text>
            </x-card-block>
          </x-card>
        )
      }
    }
  },
  render(h) {
    return (
      <div id="x-vue-demo-drop-down-base" class="clearfix">
        <x-drop-down btn-type="link" label="link" id="x-vue-demo-drop-down-base-link">
          <example type="link"></example>
        </x-drop-down>
        <x-drop-down position="left"
                     btn-type="primary"
                     disabled label="primary"
                     id="x-vue-demo-drop-down-base-primary">
          <example type="primary"></example>
        </x-drop-down>
        <x-drop-down btn-type="success"
                     label="success"
                     position="left"
                     id="x-vue-demo-drop-down-base-success">
          <example type="success"></example>
        </x-drop-down>
        <x-drop-down btn-type="info"
                     onLoseFocus={this.loseFocus}
                     label="info"
                     id="x-vue-demo-drop-down-base-info">
          <example type="info"></example>
        </x-drop-down>
        <x-drop-down btn-type="danger" label="danger" id="x-vue-demo-drop-down-base-danger">
          <example type="danger"></example>
        </x-drop-down>
      </div>
    )
  }
}
