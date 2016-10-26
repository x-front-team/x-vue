export default {
  data() {
    return {
      type: 'tabs',
      selected: 1
    }
  },
  methods: {
    handleTypeChange(e) {
      this.type = e.target.value
    },
    handleSelectedChange(e) {
      this.selected = Math.floor(e.target.value)
    }
  },
  render(h) {
    console.log(this.type, this.selected)
    return (
      <div>
        <x-tabs type={this.type} active={this.selected}>
          <x-tab title="tab1" transition="fade" index={1}>This is Tab1</x-tab>
          <x-tab title="tab2" transition="fade" index={2}>This is Tab2</x-tab>
          <x-tab title="tab3" transition="fade" index={3}>This is Tab3</x-tab>
        </x-tabs>

        <div>
          <span>tab类型:</span>
          <input type="radio"
                 value="tabs"
                 checked={this.type === 'tabs'}
                 on-click={this.handleTypeChange} /> tabs
          <input type="radio"
                 value="pills"
                 checked={this.type === 'pills'}
                 on-click={this.handleTypeChange} /> pills
        </div>

        <div>
          <span>选中tab:</span>
          <input type="radio"
                 value={1}
                 checked={this.selected === 1}
                 on-click={this.handleSelectedChange} /> tab1
          <input type="radio"
                 value={2}
                 checked={this.selected === 2}
                 on-click={this.handleSelectedChange} /> tab2
          <input type="radio"
                 value={3}
                 checked={this.selected === 3}
                 on-click={this.handleSelectedChange} /> tab3
        </div>
      </div>
    )
  }
}
