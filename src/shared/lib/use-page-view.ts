'use client'

import { usePathname, useSearchParams } from "next/navigation"
import { useEffect } from "react"
import { pushEvent } from "@/shared/lib/push-event"

export const usePageView = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const url = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : '')
    pushEvent('page_view', {
      page_location: window.location.href,
      page_path: url,
      page_title: document.title,
    })
  }, [pathname, searchParams])
}