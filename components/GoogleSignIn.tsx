'use client'

import Script from 'next/script'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { createClient } from '../utils/supabase/client'
import React from 'react';

const GoogleSignIn = () => {
  const supabase = createClient()
  const router = useRouter()

  const generateNonce = async (): Promise<[string, string]> => {
    const nonce = btoa(String.fromCharCode(...crypto.getRandomValues(new Uint8Array(32))))
    const encoder = new TextEncoder()
    const encodedNonce = encoder.encode(nonce)
    const hashBuffer = await crypto.subtle.digest('SHA-256', encodedNonce)
    const hashArray = Array.from(new Uint8Array(hashBuffer))
    const hashedNonce = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('')

    return [nonce, hashedNonce]
  }

  useEffect(() => {
    const initializeGoogleSignIn = async () => {
      const [nonce, hashedNonce] = await generateNonce()
      
      // Check for existing session
      const { data: sessionData } = await supabase.auth.getSession()
      if (sessionData.session) {
        router.push('/')
        return
      }

      // Initialize Google Sign-In
      window.google.accounts.id.initialize({
        client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
        callback: async (response: any) => {
          try {
            const { data, error } = await supabase.auth.signInWithIdToken({
              provider: 'google',
              token: response.credential,
              nonce,
            })

            if (error) throw error
            router.push('/')
          } catch (error) {
            console.error('Error signing in with Google:', error)
          }
        },
        nonce: hashedNonce,
        use_fedcm_for_prompt: true,
      })

      window.google.accounts.id.prompt()
    }

    window.addEventListener('load', initializeGoogleSignIn)
    return () => window.removeEventListener('load', initializeGoogleSignIn)
  }, [router])

  return (
    <>
      <Script src="https://accounts.google.com/gsi/client" />
      <div id="g_id_onload" className="fixed top-0 right-0 z-[100]" />
      
      {/* Standard Google Sign-In button */}
      <div
        className="g_id_signin"
        data-type="standard"
        data-shape="pill"
        data-theme="outline"
        data-text="signin_with"
        data-size="large"
        data-logo_alignment="left"
      />
    </>
  )
}

export default GoogleSignIn 