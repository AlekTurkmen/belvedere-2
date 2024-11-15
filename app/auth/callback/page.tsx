'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/utils/supabase/client'

export default function AuthCallback() {
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const handleAuthCallback = async () => {
      const { error } = await supabase.auth.getSession()
      if (error) {
        console.error('Error getting session:', error.message)
        router.push('/signin')
      } else {
        router.push('/') // Redirect to home page after successful login
        //Can also redirect to a dashboard after successful login
      }
    }

    handleAuthCallback()
  }, [router])

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900" />
      <p>Loading...</p>
    </div>
  )
}