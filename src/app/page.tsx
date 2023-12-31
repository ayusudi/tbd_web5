
import SideHome from "../components/SideHome"
import Image from "next/image"
import category1 from "../../public/images/categories/Visuel.png"
import category2 from "../../public/images/categories/Vignette.png"
import category3 from "../../public/images/categories/Vignette-1.png"
import category4 from "../../public/images/categories/Vignette-2.png"
import streamingBg from "../../public/images/streaming.png"
import video from "../../public/images/video.png"
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
    <div className='flex w-full h-min-screen'>
      <div className='flex-1 flex flex-col gap-[40px] bg-darkblue w-full p-[40px]'>
        <form action="get" className="flex w-full relative items-center">
          <div className="w-[30px] absolute ml-2">
            <svg className="m-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M20.031 20.79C20.491 21.25 21.201 20.54 20.741 20.09L16.991 16.33C18.3064 14.8745 19.0335 12.9818 19.031 11.02C19.031 6.63 15.461 3.06 11.071 3.06C6.68096 3.06 3.11096 6.63 3.11096 11.02C3.11096 15.41 6.68096 18.98 11.071 18.98C13.051 18.98 14.881 18.25 16.281 17.04L20.031 20.79ZM4.10996 11.02C4.10996 7.18 7.23996 4.06 11.07 4.06C14.91 4.06 18.03 7.18 18.03 11.02C18.03 14.86 14.91 17.98 11.07 17.98C7.23996 17.98 4.10996 14.86 4.10996 11.02Z" fill="#888CAD" />
            </svg>
          </div>
          <input placeholder="Search here.." type="text" name="inputsearch" id="inputsearch" className="w-full rounded-full bg-inputblue outline-none border-0 pl-10 text-white" />
        </form>
        <div className="flex justify-between">
          <Image src={video} width={345} height={200} alt="Picture of the author"
            style={{ objectFit: "cover", cursor: "pointer" }}
            className="rounded-lg" />
          <Image src={video} width={345} height={200} alt="Picture of the author"
            style={{ objectFit: "cover", cursor: "pointer" }}
            className="rounded-lg" />
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-white font-semibold">Streaming</p>
          <div className="flex justify-between">
            {
              new Array(3).fill("").map((el: any, i: number) => {
                return <div key={i} className="h-[280px] w-[225px] relative flex cursor-pointer">
                  <Image src={streamingBg} fill alt="Picture of the author"
                    style={{ objectFit: "cover" }}
                    className="rounded-lg"
                  />
                  <div className="bg-[#FF0040] rounded-full p-1 absolute m-2 right-0">
                    <p className="text-white text-[12px] px-2">Live</p>
                  </div>
                  <div className="absolute self-end m-4">
                    <p className="text-white">Series: Bleach Sennen
                      Kessen-hen</p>
                    <div className="flex gap-2 items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                        <path d="M7.5 5.625C7.99728 5.625 8.47419 5.82254 8.82582 6.17417C9.17745 6.52581 9.375 7.00272 9.375 7.5C9.375 7.99728 9.17745 8.47419 8.82582 8.82583C8.47419 9.17746 7.99728 9.375 7.5 9.375C7.00272 9.375 6.5258 9.17746 6.17417 8.82583C5.82254 8.47419 5.625 7.99728 5.625 7.5C5.625 7.00272 5.82254 6.52581 6.17417 6.17417C6.5258 5.82254 7.00272 5.625 7.5 5.625ZM7.5 2.8125C10.625 2.8125 13.2937 4.75625 14.375 7.5C13.2937 10.2438 10.625 12.1875 7.5 12.1875C4.375 12.1875 1.70625 10.2438 0.625 7.5C1.70625 4.75625 4.375 2.8125 7.5 2.8125ZM1.9875 7.5C2.49266 8.53144 3.27707 9.40047 4.25155 10.0083C5.22603 10.6161 6.3515 10.9383 7.5 10.9383C8.6485 10.9383 9.77397 10.6161 10.7484 10.0083C11.7229 9.40047 12.5073 8.53144 13.0125 7.5C12.5073 6.46856 11.7229 5.59953 10.7484 4.99172C9.77397 4.3839 8.6485 4.06168 7.5 4.06168C6.3515 4.06168 5.22603 4.3839 4.25155 4.99172C3.27707 5.59953 2.49266 6.46856 1.9875 7.5Z" fill="#0B95FF" />
                      </svg>
                      <p className="text-gray text-[10px]">19.9k watching</p>
                    </div>
                  </div>
                </div>


              })
            }

          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-white font-semibold">Categories</p>
          <div className="flex justify-between">
            <Image src={category1} width={165} height={240} alt="Picture of the author"
              style={{ objectFit: "cover", cursor: "pointer" }}
              className="rounded-lg"
            />
            <Image src={category2} width={165} height={240} alt="Picture of the author"
              style={{ objectFit: "cover", cursor: "pointer" }}
              className="rounded-lg"
            />
            <Image src={category3} width={165} height={240} alt="Picture of the author"
              style={{ objectFit: "cover", cursor: "pointer" }}
              className="rounded-lg"
            />
            <Image src={category4} width={165} height={240} alt="Picture of the author"
              style={{ objectFit: "cover", cursor: "pointer" }}
              className="rounded-lg"
            />

          </div>
        </div>
      </div>
      <SideHome data={data} />
    </div>
  )
}
