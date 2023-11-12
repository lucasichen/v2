import LeftSide from "@/components/LeftSide/leftSide";
import RightSide from "@/components/RightSide/rightSide";

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <LeftSide />
        <RightSide />
      </div>
    </main>
  )
}
