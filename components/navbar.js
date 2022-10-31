const Navbar = () => {
  return (
    <div className="py-5 px-4 sticky top-0 bg-white w-full">
      <div className="flex items-center justify-between">
        <div className="flex">
          <div className="flex">
            <div className="w-[30px]">
              <img src="/vector/decadelogo.svg" alt="" />
            </div>
            <div class="ml-2 hidden md:block text-zinc-700 font-bold text-lg">
              Dacade
            </div>
          </div>
          <div class="border-gray-200 border-solid border-r-2 lg:mx-[11px] mx-1.5"></div>
          <div>
            <img src="/vector/near.svg" alt="" className="md:hidden" />
            <div className="w-[120px] h-[38px] hidden md:block">
              <img
                src="/image/balkans.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div>
          <button className="bg-zinc-700 border rounded-full text-white px-5 py-2 focus:outline-none cursor-pointer">
            Create wallet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
