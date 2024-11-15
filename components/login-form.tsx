"use client";

import GoogleSignIn from '@/components/GoogleSignIn'
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/lib/supabaseClient";
import { FaLinkedin } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

export function LoginForm() {
  const router = useRouter();

  const handleBackToHome = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push('/');
  };

  async function handleGoogleLogin() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    });

    if (error) {
      console.error('Error logging in with Google:', error.message);
    } else {
      console.log('Redirecting to Google OAuth...');
    }
  }

  return (
    <div className="grid grid-rows-[0px_1fr_0px] items-center justify-items-left min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="row-start-1 gap-6 flex-wrap items-center justify-left">  
        <a
          onClick={handleBackToHome}
          className="items-center gap-2 hover:underline hover:underline-offset-4 cursor-pointer"
        >
          ← Back To Home
        </a>
      </header>
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Use one of the following methods to log in.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <GoogleSignIn />
            <Button variant="outline" className="w-full flex items-center justify-center space-x-0">
              <div style={{ position: 'relative', width: '20px', height: '20px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ backgroundColor: 'white', width: '12px', height: '12px', position: 'absolute', zIndex: 1 }} />
                <FaLinkedin size={20} style={{ color: '#0077b5', position: 'relative', zIndex: 2 }} />
              </div>
              <span>LinkedIn [Coming Soon]</span>
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            By signing up you agree to our{" "}
            <Link href="https://help.belvedere.alekturkmen.com/project-belvedere/legal/terms-of-service" className="underline">
              Terms of Service 
            </Link>
            {" "}and{" "}
            <Link href="https://help.belvedere.alekturkmen.com/project-belvedere" className="underline">
              Privacy Policy
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}