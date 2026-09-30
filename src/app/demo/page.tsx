import { ProjectShowcase } from "@/components/ui/project-showcase";

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-[#0F1113] text-[#ECEDEF] flex items-center justify-center w-full px-4 py-16">
      <div className="w-full max-w-2xl bg-[#16191C] border border-[#2A2D31] rounded-xl p-6 sm:p-8">
        <ProjectShowcase />
      </div>
    </main>
  );
}
