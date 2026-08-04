import { Spinner } from "@/components/ui/Spinner";

export default function Loading() {
  return (
    <div className="flex h-[calc(100vh-10rem)] w-full items-center justify-center">
      <Spinner size="lg" />
    </div>
  );
}
