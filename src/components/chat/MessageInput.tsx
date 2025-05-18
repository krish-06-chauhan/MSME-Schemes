"use client";

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Send, Loader2 } from 'lucide-react';
import React, { useState, useRef } from 'react';

type MessageInputProps = {
  onSendMessage: (content: string) => void;
  isLoading: boolean;
};

export function MessageInput({ onSendMessage, isLoading }: MessageInputProps) {
  const [inputValue, setInputValue] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    if (inputValue.trim() && !isLoading) {
      onSendMessage(inputValue.trim());
      setInputValue('');
      textareaRef.current?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="sticky bottom-0 border-t bg-background/80 p-3 backdrop-blur-md sm:p-4"
    >
      <div className="container mx-auto flex items-end gap-2 sm:gap-3">
        <Textarea
          ref={textareaRef}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
          className="max-h-32 min-h-[40px] flex-grow resize-none rounded-xl border-input bg-background p-3 shadow-sm focus-visible:ring-1 focus-visible:ring-ring"
          rows={1}
          disabled={isLoading}
          aria-label="Chat message input"
        />
        <Button
          type="submit"
          size="icon"
          className="h-10 w-10 shrink-0 rounded-full shadow-sm sm:h-12 sm:w-12"
          disabled={isLoading || !inputValue.trim()}
          aria-label="Send message"
        >
          {isLoading ? (
            <Loader2 className="h-5 w-5 animate-spin sm:h-6 sm:w-6" />
          ) : (
            <Send className="h-5 w-5 sm:h-6 sm:w-6" />
          )}
        </Button>
      </div>
    </form>
  );
}
