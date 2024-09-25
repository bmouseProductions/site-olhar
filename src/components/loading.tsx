import { Spinner } from "@material-tailwind/react";


export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
        <Spinner className="h-6 w-6" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
    </div>
  );
}
