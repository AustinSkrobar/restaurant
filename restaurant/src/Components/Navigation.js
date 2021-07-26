import "../Components/Header"

export default (params) => {
   return(
  <nav className=" p-7">
  <div className="lg:w-auto">
    <div className="text-sm mr-8 flex justify-center">
  
      <a href = "" className=" hover:text-red-700 mr-4">
       Welcome
      </a>
      <a href ="" className=" hover:text-red-700 mr-4">
        About us
      </a>
      <a href className=" hover:text-red-700 mr-4">
        Menu
      </a>
      <a href className=" hover:text-red-700 mr-4">
       Gallery
      </a>
      <a href className="hover:text-red-700 mr-4">
        News
      </a>
    </div>
  </div>
</nav>
   )
}

// export default (params) => {
//    return(
//   <nav className=" p-6">
//   <div className="lg:w-auto">
//     <div className="text-sm lg:flex-grow">
//       <a href className="hover:text-black mr-4">
//        Welcome
//       </a>
//       <a href className=" hover:text-black mr-4">
//         About us
//       </a>
//       <a href className=" hover:text-black mr-4">
//         Menu
//       </a>
//       <a href className=" hover:text-black mr-4">
//        Gallery
//       </a>
//       <a href className="hover:text-black mr-4">
//         News
//       </a>
//     </div>
//   </div>
// </nav>
//    )
// }
