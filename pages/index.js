import Head from 'next/head'


export default function Home() {
  return (
<>

  <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
  <link
    rel="stylesheet"
    as="style"
    onload="this.rel='stylesheet'"
    href="https://fonts.googleapis.com/css2?display=swap&family=Manrope%3Awght%40400%3B500%3B700%3B800&family=Noto+Sans%3Awght%40400%3B500%3B700%3B900"
  />
  <title>Bin Stores Directory</title>
  <link rel="icon" type="image/x-icon" href="data:image/x-icon;base64," />
  <div
    className="relative flex size-full min-h-screen flex-col bg-[#f9fbf8] justify-between group/design-root overflow-x-hidden"
    style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
  >
    <div>
      <div className="flex items-center bg-[#f9fbf8] p-4 pb-2 justify-between">
        <h2 className="text-[#121b0e] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pl-12">
          American Bin Stores
        </h2>
        <div className="flex w-12 items-center justify-end">
          <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 bg-transparent text-[#121b0e] gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0">
            <div
              className="text-[#121b0e]"
              data-icon="ShoppingCart"
              data-size="24px"
              data-weight="regular"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M222.14,58.87A8,8,0,0,0,216,56H54.68L49.79,29.14A16,16,0,0,0,34.05,16H16a8,8,0,0,0,0,16h18L59.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,152,204a28,28,0,1,0,28-28H83.17a8,8,0,0,1-7.87-6.57L72.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,222.14,58.87ZM96,204a12,12,0,1,1-12-12A12,12,0,0,1,96,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,192,204Zm4-74.57A8,8,0,0,1,188.1,136H69.22L57.59,72H206.41Z" />
              </svg>
            </div>
          </button>
        </div>
      </div>
      <div className="@container">
        <div className="@[480px]:p-4">
          <div
            className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10"
            style={{
              backgroundImage:
                'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/sdxl10/d18b3122-51f6-4b54-86b8-71cb776c9e68.png")'
            }}
          >
            <div className="flex flex-col gap-2 text-left">
              <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                Welcome to the treasure hunt!
              </h1>
              <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                Find discounted, overstocked, and clearance items from major
                retailers.
              </h2>
            </div>
            <label className="flex flex-col min-w-40 h-14 w-full max-w-[480px] @[480px]:h-16">
              <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                <div
                  className="text-[#66964f] flex border border-[#d7e6d0] bg-[#f9fbf8] items-center justify-center pl-[15px] rounded-l-xl border-r-0"
                  data-icon="MagnifyingGlass"
                  data-size="20px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
                  </svg>
                </div>
                <input
                  placeholder="Search for bins, stores, or products"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#121b0e] focus:outline-0 focus:ring-0 border border-[#d7e6d0] bg-[#f9fbf8] focus:border-[#d7e6d0] h-full placeholder:text-[#66964f] px-[15px] rounded-r-none border-r-0 pr-2 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal"
                  defaultValue=""
                />
                <div className="flex items-center justify-center rounded-r-xl border-l-0 border border-[#d7e6d0] bg-[#f9fbf8] pr-[7px]">
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#52cc19] text-[#121b0e] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                    <span className="truncate">Search</span>
                  </button>
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>
      <h2 className="text-[#121b0e] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Featured Stores
      </h2>
      <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex items-stretch p-4 gap-3">
          <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
              style={{
                backgroundImage:
                  'url("https://cdn.usegalileo.ai/sdxl10/e74a76a4-4ad9-4e24-8e24-5179365f4695.png")'
              }}
            />
            <p className="text-[#121b0e] text-base font-medium leading-normal">
              The Home Depot
            </p>
          </div>
          <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
              style={{
                backgroundImage:
                  'url("https://cdn.usegalileo.ai/sdxl10/5a356ba8-831e-4ec9-9c7a-67884bcce9ed.png")'
              }}
            />
            <p className="text-[#121b0e] text-base font-medium leading-normal">
              Williams Sonoma
            </p>
          </div>
          <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
              style={{
                backgroundImage:
                  'url("https://cdn.usegalileo.ai/stability/97d8f6c0-1321-441e-ad31-09454b2647c3.png")'
              }}
            />
            <p className="text-[#121b0e] text-base font-medium leading-normal">
              Nordstrom Rack
            </p>
          </div>
        </div>
      </div>
      <h2 className="text-[#121b0e] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Newly Added Bins
      </h2>
      <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex items-stretch p-4 gap-3">
          <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
              style={{
                backgroundImage:
                  'url("https://cdn.usegalileo.ai/stability/61e45d64-7911-44b1-9603-b79533d707b6.png")'
              }}
            />
            <p className="text-[#121b0e] text-base font-medium leading-normal">
              Lawn Mower
            </p>
          </div>
          <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
              style={{
                backgroundImage:
                  'url("https://cdn.usegalileo.ai/stability/79b24369-cd2a-40f5-a653-29d9cac44ee7.png")'
              }}
            />
            <p className="text-[#121b0e] text-base font-medium leading-normal">
              Baby Stroller
            </p>
          </div>
          <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
              style={{
                backgroundImage:
                  'url("https://cdn.usegalileo.ai/stability/dc392719-29ac-4bf7-a07e-4ea9567c7a31.png")'
              }}
            />
            <p className="text-[#121b0e] text-base font-medium leading-normal">
              Hiking Backpack
            </p>
          </div>
        </div>
      </div>
      <h2 className="text-[#121b0e] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Popular Stores
      </h2>
      <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex items-stretch p-4 gap-3">
          <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
              style={{
                backgroundImage:
                  'url("https://cdn.usegalileo.ai/stability/f41fcf52-2340-4e5f-b5d3-2af1a49eac08.png")'
              }}
            />
            <p className="text-[#121b0e] text-base font-medium leading-normal">
              Bed Bath &amp; Beyond
            </p>
          </div>
          <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
              style={{
                backgroundImage:
                  'url("https://cdn.usegalileo.ai/sdxl10/631379b0-6933-4885-8e74-2fb6fbf00edb.png")'
              }}
            />
            <p className="text-[#121b0e] text-base font-medium leading-normal">
              Urban Outfitters
            </p>
          </div>
          <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
              style={{
                backgroundImage:
                  'url("https://cdn.usegalileo.ai/stability/59522d5f-a51e-4af7-9ea3-48cf086e5c6d.png")'
              }}
            />
            <p className="text-[#121b0e] text-base font-medium leading-normal">
              West Elm
            </p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div className="flex gap-2 border-t border-[#ebf3e8] bg-[#f9fbf8] px-4 pb-3 pt-2">
        <a
          className="just flex flex-1 flex-col items-center justify-end gap-1 rounded-full text-[#121b0e]"
          href="#"
        >
          <div
            className="text-[#121b0e] flex h-8 items-center justify-center"
            data-icon="House"
            data-size="24px"
            data-weight="fill"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z" />
            </svg>
          </div>
          <p className="text-[#121b0e] text-xs font-medium leading-normal tracking-[0.015em]">
            Home
          </p>
        </a>
        <a
          className="just flex flex-1 flex-col items-center justify-end gap-1 text-[#66964f]"
          href="#"
        >
          <div
            className="text-[#66964f] flex h-8 items-center justify-center"
            data-icon="MagnifyingGlass"
            data-size="24px"
            data-weight="regular"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
            </svg>
          </div>
          <p className="text-[#66964f] text-xs font-medium leading-normal tracking-[0.015em]">
            Bins
          </p>
        </a>
        <a
          className="just flex flex-1 flex-col items-center justify-end gap-1 text-[#66964f]"
          href="#"
        >
          <div
            className="text-[#66964f] flex h-8 items-center justify-center"
            data-icon="Buildings"
            data-size="24px"
            data-weight="regular"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M240,208H224V96a16,16,0,0,0-16-16H144V32a16,16,0,0,0-24.88-13.32L39.12,72A16,16,0,0,0,32,85.34V208H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM208,96V208H144V96ZM48,85.34,128,32V208H48ZM112,112v16a8,8,0,0,1-16,0V112a8,8,0,1,1,16,0Zm-32,0v16a8,8,0,0,1-16,0V112a8,8,0,1,1,16,0Zm0,56v16a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Zm32,0v16a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Z" />
            </svg>
          </div>
          <p className="text-[#66964f] text-xs font-medium leading-normal tracking-[0.015em]">
            Stores
          </p>
        </a>
        <a
          className="just flex flex-1 flex-col items-center justify-end gap-1 text-[#66964f]"
          href="#"
        >
          <div
            className="text-[#66964f] flex h-8 items-center justify-center"
            data-icon="Bookmark"
            data-size="24px"
            data-weight="regular"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M184,32H72A16,16,0,0,0,56,48V224a8,8,0,0,0,12.24,6.78L128,193.43l59.77,37.35A8,8,0,0,0,200,224V48A16,16,0,0,0,184,32Zm0,16V161.57l-51.77-32.35a8,8,0,0,0-8.48,0L72,161.56V48ZM132.23,177.22a8,8,0,0,0-8.48,0L72,209.57V180.43l56-35,56,35v29.14Z" />
            </svg>
          </div>
          <p className="text-[#66964f] text-xs font-medium leading-normal tracking-[0.015em]">
            My Lists
          </p>
        </a>
        <a
          className="just flex flex-1 flex-col items-center justify-end gap-1 text-[#66964f]"
          href="#"
        >
          <div
            className="text-[#66964f] flex h-8 items-center justify-center"
            data-icon="UserCircle"
            data-size="24px"
            data-weight="regular"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM74.08,197.5a64,64,0,0,1,107.84,0,87.83,87.83,0,0,1-107.84,0ZM96,120a32,32,0,1,1,32,32A32,32,0,0,1,96,120Zm97.76,66.41a79.66,79.66,0,0,0-36.06-28.75,48,48,0,1,0-59.4,0,79.66,79.66,0,0,0-36.06,28.75,88,88,0,1,1,131.52,0Z" />
            </svg>
          </div>
          <p className="text-[#66964f] text-xs font-medium leading-normal tracking-[0.015em]">
            Account
          </p>
        </a>
      </div>
      <div className="h-5 bg-[#f9fbf8]" />
    </div>
  </div>
</>

  )
}
