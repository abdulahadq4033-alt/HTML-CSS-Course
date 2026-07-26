function NavBar() {
    return (
        <header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center m-2">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">

      <span class="text-xl">TO DO LIST</span>
    </a>
    <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 hover:text-gray-900" href="#">About this website</a>
      <a class="mr-5 hover:text-gray-900" href="#">Who I am</a>
      <a class="mr-5 hover:text-gray-900" href="#">What is this website for?</a>
      <a class="mr-5 hover:text-gray-900" href="#">Meow</a>
    </nav>
  </div>
</header>
    )
}

export default NavBar