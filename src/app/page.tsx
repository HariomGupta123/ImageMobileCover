import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pb-24 bt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:bt-24 xl:pt-32 lg:pb-52">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-6 ">
            <div className=" mx-auto relative text-center lg:text-left flex flex-col items-center lg:items-start">
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
