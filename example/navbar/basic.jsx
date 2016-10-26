export default {
  render(h) {
    return (
      <x-nav-bar>
        <x-nav-group>
          <a class="navbar-brand" href="#">Navbar</a>
          <x-nav-bar-nav>
            <x-nav-item link="http://baidu.com">Home</x-nav-item>
            <x-nav-item active={true}>Features</x-nav-item>
            <x-nav-item>Pricing</x-nav-item>
          </x-nav-bar-nav>
        </x-nav-group>
        <x-nav-group float="right">
          <form class="form-inline">
            <input class="form-control" type="text" placeholder="Search"></input>
            <button class="btn btn-success-outline" type="submit">Search</button>
          </form>
        </x-nav-group>
      </x-nav-bar>
    )
  }
}
