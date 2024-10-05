import { useToast } from '@/hooks/use-toast'
import { useState } from 'react'

type CopyOptions = {
  text: string
  timeout?: number
  successMessage?: React.ReactNode
  errorMessage?: React.ReactNode
}

export const useCopyToClipboard = (): [(options: CopyOptions) => Promise<void>, boolean] => {
  const [isCopied, setIsCopied] = useState(false)
  const { toast } = useToast()

  const copy = async ({ text, timeout, successMessage, errorMessage }: CopyOptions) => {
    if (isCopied) return

    try {
      await navigator.clipboard.writeText(text)
      setIsCopied(true)
      toast({title: successMessage ? 'Copied to clipboard!' : successMessage?.toString()})

      setTimeout(() => {
        setIsCopied(false)
      }, timeout ?? 2000)
    } catch {
      toast({title: errorMessage ? 'Unable to copy to clipboard. Please try again!' : errorMessage?.toString()})
    }
  }

  return [copy, isCopied]
}
