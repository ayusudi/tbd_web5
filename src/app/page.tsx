
import SideHome from "../components/SideHome"

export default function Home() {
  const data = [
    {
      id: 1,
      headline: "Domingo",
      subheadline: "FIFA",
      numbers: 14.457,
      status: false
    },
    {
      id: 2,
      headline: "Domingo",
      subheadline: "FIFA",
      numbers: 14.457,
      status: false
    },
    {
      id: 3,
      headline: "Domingo",
      subheadline: "FIFA",
      numbers: 14.457,
      status: false
    },
    {
      id: 4,
      headline: "Domingo",
      subheadline: "FIFA",
      numbers: 14.457,
      status: false
    },
    {
      id: 5,
      headline: "Domingo",
      subheadline: "FIFA",
      numbers: 14.457,
      status: false
    },
    {
      id: 6,
      headline: "Domingo",
      subheadline: "FIFA",
      numbers: 14.457,
      status: false
    },

  ]
  return (
    <div className='flex w-full h-screen'>
      <div className='flex-1 flex flex-col gap-[40px] bg-darkblue w-full p-[40px]'>
        <form action="get" className="flex w-full relative items-center">
          <div className="w-[30px] absolute ml-2">
            <svg className="m-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M20.031 20.79C20.491 21.25 21.201 20.54 20.741 20.09L16.991 16.33C18.3064 14.8745 19.0335 12.9818 19.031 11.02C19.031 6.63 15.461 3.06 11.071 3.06C6.68096 3.06 3.11096 6.63 3.11096 11.02C3.11096 15.41 6.68096 18.98 11.071 18.98C13.051 18.98 14.881 18.25 16.281 17.04L20.031 20.79ZM4.10996 11.02C4.10996 7.18 7.23996 4.06 11.07 4.06C14.91 4.06 18.03 7.18 18.03 11.02C18.03 14.86 14.91 17.98 11.07 17.98C7.23996 17.98 4.10996 14.86 4.10996 11.02Z" fill="#888CAD" />
            </svg>
          </div>
          <input placeholder="Search here.." type="text" name="inputsearch" id="inputsearch" className="w-full rounded-full bg-inputblue outline-none border-0 pl-10 text-white" />
        </form>
        <div>
          <p className="text-white">2 Video</p>
        </div>
        <div>
          <p className="text-white text-semibold">Streaming</p>
        </div>
        <div>
          <p className="text-white text-semibold">Categories</p>
        </div>
      </div>
      <SideHome data={data} />
    </div>
  )
}
