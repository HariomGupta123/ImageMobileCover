import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Check, Star } from "lucide-react";
import snake1 from "../../public/snake-1.png"
import user1 from "../../public/user/user-1.png"
import user2 from "../../public/user/user-2.png"
import user3 from "../../public/user/user-3.png"
import user4 from "../../public/user/user-4.jpg"
import user5 from "../../public/user/user-5.jpg"
import yourImage from "../../public/your-image.png"
import LineImage from "../../public/line.png"

import testimonials1 from "../../public/Testimonials/1.jpg"
import Image from "next/image";
import Phone from "@/components/Phone";
export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pb-24 bt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:bt-24 xl:pt-32 lg:pb-52">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-6 ">
            <div className=" mx-auto relative text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolute w-28 left-0 -top-20 hidden lg:block  ">
                <Image src={snake1} className="w-full" alt="/" />
              </div>
              <h1 className="relateive w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl ">your Image on a <span className="bg-green-600 px-2 text-white">custom</span>Phone case</h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap "> capture your favorite memories with your own,<span className="font-semibold">one-of-one</span>
                phone case.
                CaseCobra allows you to protect your memories ,not just your phone case</p>
              <ul className="mt-8 space- y-2 text-left font-medium flex flex-col items-center sm:items-start">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                    High-quality,durable material
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                    5 year print gaurantee
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                    Mordern iPhone models supported
                  </li>
                </div>
              </ul>
              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5 ">
                <div className="flex -space-x-4 ">
                  <Image className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100 " src={user1} alt="user image" />
                  <Image className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100 " src={user2} alt="user image" />
                  <Image className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100 " src={user3} alt="user image" />
                  <Image className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100 " src={user4} alt="user image" />
                  <Image className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100 " src={user5} alt="user image" />

                </div>

                <div className="flex flex-col justify-between items-center sm:items-start">
                  <div className="flex gap-0.5">
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                  </div>
                  <p>
                    <span className="font-semibold">1.250</span> happy customers
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit ">
            <div className=" relative md:max-w-xl">
              <Image src={yourImage} className="absolute w-40 lg:w-52 left-56 -top-20 select-none hide sm:block lg:hidden xl:block" alt="/" />
              <Image src={LineImage} alt="" className="absolute w-20 -left-6 -bottom-6 select-none" />
             <Phone className="w-64" imgSrc={testimonials1} />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
