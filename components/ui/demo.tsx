import Header from "@/components/ui/curved-menu";
import Sidebar1 from "@/components/ui/uiable-sidebar-1";

export function DemoSidebar1() {
  return (
    <div className="flex min-h-[560px] w-full items-center justify-center p-6">
      <div className="w-full max-w-sm">
        <Sidebar1 />
      </div>
    </div>
  );
}

export const DemoOne = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <div className="text-white h-screen text-7xl text-center flex justify-center items-center">
        hello<span className="italic">!</span>
      </div>
    </div>
  );
};

export default DemoOne;
