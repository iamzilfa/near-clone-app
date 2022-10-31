import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";

export default function Home() {
  return (
    <div>
      <Layout>
        <main>
          <div className="bg-white min-h-screen pt-44 overflow-hidden relative">

            <div className="flex flex-col mx-auto relative isolate items-center lg:w-[910px] px-6 pt-12 bg-white lg:px-0 lg:pt-32 h-[600px] lg:h-[500px] w-full">
            <div className="bg-banner w-[50%] h-[90%] absolute -top-[590px] left-0 opacity-40"></div>
            <div className="bg-banner w-[40%] h-[90%] absolute -top-[590px] right-0 opacity-40"></div>
              <div className="flex flex-col justify-center items-center relative z-10">
                <h1 className="font-semibold lg:text-[72px] text-4xl mx-auto w-[200px] lg:w-full lg:text-center">
                  Get{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9092fb] via-[#86b5ef] to-[#7bdde2]">
                    NEAR
                  </span>{" "}
                  Certified!
                </h1>
                <p className="lg:text-[22px] text-center leading-7 pt-5 pb-24 text-lg">
                  We, in NEAR Balkan, know how important it is to have regional
                  and local support. Now you can become NEAR certified in a
                  regional language of preference and connect with our team to
                  support your further growth within the NEAR ecosystem
                </p>
              </div>
              <div>
                <img src="/assets/vector/arrowDown.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="grid text-center text-3xl -tracking-wide font-semibold mt-16 justify-items-center lg:text-5xl leading-7 lg:leading-[60px]">
            <p>
              Making your NEAR <br /> learning easy.
            </p>
          </div>

          <div class="lg:mt-[182px] mt-16 gap-y-4 px-[22px] lg:px-0 lg:max-w-[940px] mx-auto flex lg:flex-row flex-col-reverse lg:justify-between items-center">
            <div className="font-semibold text-center lg:text-left">
              <h1 className="font-semibold text-2xl text-center lg:text-left lg:text-4xl leading-[44px] tracking-tight">
                Open NEAR wallet
              </h1>
              <p className="text-base lg:text-lg font-normal lg:leading-6 pt-1 block lg:hidden">
                Opening a NEAR wallet is the first step and an essential part of
                joining the NEAR community as well as starting this course
              </p>
              <p className="text-base lg:text-lg font-normal lg:leading-6 pt-1 lg:block hidden">
                Opening a NEAR wallet is the first step and <br /> essential
                part of joining the NEAR community <br /> as well as starting
                this course
              </p>
              <button className="mt-8 border rounded-full text-Zolpan transition-250ms w-fit border-Zolpan px-5 py-2 focus:outline-none cursor-pointer">
                Create wallet
              </button>
            </div>
            <div class="lg:w-[296px] lg:h-[296px] w-[180px] h-[180px]">
              <img src="/assets/image/infiniteLight.png" alt="" />
            </div>
          </div>

          <div className="lg:mt-[177px] mt-16 mx-auto lg:px-0 lg:max-w-[940px] px-[22px]">
            <div className="hidden lg:flex justify-center text-center">
              <img src="/assets/vector/arrowRight.svg" alt="" />
            </div>
            <div class=" flex gap-x-[179px] lg:flex-row flex-col gap-y-4 items-center">
              <div class="lg:w-[296px] lg:h-[296px] w-[180px] h-[180px]">
                <img src="/assets/vector/arrowImage.svg" alt="" />
              </div>
              <div className="text-center space-y-6 lg:text-left">
                <h1 class="text-dark-100 font-semibold text-2xl lg:text-4xl leading-[44px] tracking-[-0.02em] relative">
                  Complete the course
                </h1>
                <p className="text-lg leading-6">In three modules, learn:</p>
                <div className="flex flex-col gap-y-5 items-center lg:items-start">
                  <div className="flex flex-col items-center lg:flex-row gap-4">
                    <div className="lg:h-8 lg:w-8 h-[18px] w-[18px]">
                      <img src="/assets/image/red.png" alt="" />
                    </div>
                    <p className="text-lg leading-6">Essential NEAR concepts</p>
                  </div>
                  <div className="flex flex-col items-center lg:flex-row gap-4">
                    <div className="lg:h-8 lg:w-8 h-[18px] w-[18px]">
                      <img src="/assets/image/green.png" alt="" />
                    </div>
                    <p className="text-lg leading-6">
                      How to write smart contracts on NEAR
                    </p>
                  </div>
                  <div className="flex flex-col items-center lg:flex-row gap-4">
                    <div className="lg:h-8 lg:w-8 h-[18px] w-[18px]">
                      <img src="/assets/image/blue.png" alt="" />
                    </div>
                    <p className="text-lg leading-6">
                      how to build dapps on the NEAR blockchain
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 lg:mt-[180px] px-5 ">
            <div className="hidden lg:flex justify-center text-center">
              <img src="/assets/vector/arrowLeft.svg" alt="" />
            </div>
            <div class="grid justify-items-center ">
              <div className="text-center mx-auto">
                <h1 class="text-dark-100 text-center font-semibold text-2xl lg:text-4xl leading-[44px] tracking-[-0.02em] relative">
                  Claim NEAR certificate
                </h1>
                <p className="text-lg leading-6 text-center block lg:hidden">
                  Upone course completion, receive the NEAR dev 101 certificate
                  as an NFT on your NEAR wallet
                </p>

                <p className="text-lg leading-6 text-center hidden lg:block">
                  Upone course completion, receive the NEAR dev 101 <br />{" "}
                  certificate as an NFT on your NEAR wallet
                </p>
              </div>

              <div class="lg:w-[644px] h-[186px] lg:h-[362.25px] mt-8 lg:mt-[80px]">
                <img src="/assets/image/certificate.png" alt="" />
              </div>
            </div>
          </div>

          <div className="w-full bg-white">
            <div class="lg:px-[148px] flex lg:flex-row flex-col-reverse justify-between items-center mt-[168px]">
              <div className="text-center lg:text-left">
                <h1 className="font-semibold text-2xl lg:text-4xl leading-[44px] tracking-tight">
                  NEAR Development 101
                </h1>
                <button
                  type="button"
                  class="font-normal text-dark-100 text-base mt-4 text-secondary border-secondary  focus:outline-none cursor-pointer leading-4 transition-250ms w-fit border-accent border-solid border rounded-full px-5 py-3 rounded-4xl inline-block"
                >
                  Start The Course
                </button>
              </div>
              <div class="lg:w-[400px] lg:h-[400px] w-[180px] h-[180px]">
                {" "}
                <img src="/assets/image/infititeBlue.png" alt="" />
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </div>
  );
}
