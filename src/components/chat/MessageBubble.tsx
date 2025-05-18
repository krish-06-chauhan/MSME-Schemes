"use client";

import type { Message } from '@/types';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Bot, UserCircle, Loader2 } from 'lucide-react';
import { format } from 'date-fns';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type MessageBubbleProps = {
  message: Message;
};

export function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.sender === 'user';

  return (
    <div
      className={cn(
        'flex items-start gap-3 max-w-[85%] sm:max-w-[75%] md:max-w-[70%]',
        isUser ? 'self-end flex-row-reverse' : 'self-start'
      )}
    >
      <Avatar className="h-8 w-8 shadow-sm">
        {/* <AvatarImage src={isUser ? undefined : '/placeholder-bot.jpg'} /> */}
        <AvatarFallback
          className={cn(
            isUser ? 'bg-primary text-primary-foreground' : 'bg-card text-card-foreground'
          )}
        >
          {isUser ? <UserCircle size={20} /> : <Bot size={20} />}
        </AvatarFallback>
      </Avatar>
      <div
        className={cn(
          'rounded-xl px-4 py-2.5 shadow-md min-w-[80px]',
          isUser
            ? 'bg-primary text-primary-foreground rounded-br-none'
            : 'bg-card text-card-foreground rounded-bl-none'
        )}
      >
        {message.isThinking ? (
          <div className="flex items-center gap-2">
            <Loader2 className="h-5 w-5 animate-spin" />
            <span className="text-sm">Thinking...</span>
          </div>
        ) : (
          <div className="prose prose-sm dark:prose-invert max-w-none break-words text-current">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {message.content}
            </ReactMarkdown>
          </div>
        )}
        {!message.isThinking && (
           <p
            className={cn(
              'mt-1.5 text-xs',
              isUser ? 'text-primary-foreground/70 text-right' : 'text-muted-foreground text-left'
            )}
          >
            {format(new Date(message.timestamp), 'p')}
          </p>
        )}
      </div>
    </div>
  );
}
