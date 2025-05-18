import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { AppHeader } from '@/components/layout/AppHeader'; // Placeholder, actual title will be dynamic

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'MSME Scheme Assistant',
  description: 'Your guide to Micro, Small, and Medium Enterprise schemes.',
};

// This component will be client-side to manage conversation title
// For now, we just pass a static title. Page will manage actual title.
function LayoutClientContent({ children }: { children: React.ReactNode }) {
  // In a real app, conversationTitle might come from a context or page props
  // For simplicity in RootLayout, we'll let page.tsx manage it and AppHeader can take it as prop there
  // Or, AppHeader could be part of page.tsx itself.
  // For this structure, let's assume title is managed by page.tsx.
  // We will render AppHeader from page.tsx if title needs to be dynamic per page.
  // Or make AppHeader take title from a global state/context.
  // For now, let's remove dynamic title from here and page.tsx will implement its own header or pass title.
  // Re-thinking: AppHeader is better placed here for global consistency.
  // The title it shows will be managed by a client component at page level, potentially via context or Zustand.
  // For simplicity of this task, page.tsx will manage its own title and pass to a header rendered within page.tsx, or this AppHeader takes a static title for now.
  // Let's make AppHeader here take a default title, and allow page to override if needed (though that's more complex).
  // The prompt suggests dynamic title for conversation, so this AppHeader should reflect it.
  // This means either AppHeader needs to be a client component, or state is lifted.
  // Let's make the AppHeader part of the page.tsx for now to handle dynamic title simply.
  return (
    <>
      {/* AppHeader will be rendered in page.tsx to access dynamic title state */}
      {children}
      <Toaster />
    </>
  );
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-background`}
      >
        {/* AppHeader moved to page.tsx to manage dynamic title state */}
        <main className="flex-grow flex flex-col">
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}
