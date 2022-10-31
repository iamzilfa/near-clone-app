import Link from "next/link";

const Navbar = () => {
  return (
    <div className="py-5 px-4 sticky top-0 bg-white w-full lg:px-20">
      <div className="flex items-center justify-between ">
        <div className="flex">
          <Link href="/decade" className="flex">
            <div className="w-[30px]">
              <img src="/assets/vector/decadelogo.svg" alt="" />
            </div>
            <div class="ml-2 hidden md:block text-zinc-700 font-bold text-lg">
              Dacade
            </div>
          </Link>
          <div class="border-gray-200 border-solid border-r-2 lg:mx-[11px] mx-1.5"></div>
          <div>
            <img src="/assets/vector/near.svg" alt="" className="md:hidden" />
            <Link href="/nearbalkans" className="w-[120px] h-[38px] hidden lg:block">
              <img src="/assets/vector/NEAR logo.svg" alt="" />
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-9">
          <button
            type="button"
            class="hidden lg:block bg-transparent border-none text-default  focus:outline-none cursor-pointer leading-4 transition-250ms w-fit border-accent  border rounded-full px-5 py-3 rounded-4xl"
          >
            Start The Course
          </button>
          <button className="bg-zinc-700 border rounded-full text-white px-5 py-2 focus:outline-none cursor-pointer">
            Create wallet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
