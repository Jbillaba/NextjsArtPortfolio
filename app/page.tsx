import { redirect, RedirectType } from "next/navigation"

export const instant = false;
export default function Page() {
  return (
    redirect('/artwork', RedirectType.replace)
  )
}