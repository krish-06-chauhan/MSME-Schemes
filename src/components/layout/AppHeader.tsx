import { Library } from 'lucide-react'; // Changed from Coffee to Library

type AppHeaderProps = {
  conversationTitle: string;
};

export function AppHeader({ conversationTitle }: AppHeaderProps) {
  return (
    <header className="sticky top-0 z-10 w-full border-b bg-background/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Library className="h-7 w-7 text-primary" /> {/* Changed icon */}
          <h1 className="text-xl font-semibold tracking-tight">MSME Scheme Assistant</h1> {/* Changed title */}
        </div>
        <div className="flex-1 text-center">
          <h2 className="truncate text-sm font-medium text-muted-foreground sm:text-base">
            {conversationTitle}
          </h2>
        </div>
        <div className="w-20"> {/* Spacer to balance the logo width - adjust if new logo/title is wider/narrower */}
        </div>
      </div>
    </header>
  );
}
