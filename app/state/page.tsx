import StateUI from "@/app/ui/state/testing";
import { Suspense } from "react";

export default async function Page() {
  return (
    <Suspense>
      <StateUI></StateUI>
    </Suspense>
  )
}
