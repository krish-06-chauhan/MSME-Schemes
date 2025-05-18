'use server';
/**
 * @fileOverview Generates a title for a conversation based on its content.
 *
 * - generateConversationTitle - A function that generates a conversation title.
 * - GenerateConversationTitleInput - The input type for the generateConversationTitle function.
 * - GenerateConversationTitleOutput - The return type for the generateConversationTitle function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateConversationTitleInputSchema = z.object({
  conversationContent: z
    .string()
    .describe('The content of the conversation to generate a title for.'),
});

export type GenerateConversationTitleInput = z.infer<
  typeof GenerateConversationTitleInputSchema
>;

const GenerateConversationTitleOutputSchema = z.object({
  title: z.string().describe('The generated title for the conversation.'),
  shouldUpdateTitle: z
    .boolean()
    .describe(
      'A boolean value indicating whether the title should be updated based on the conversation content.'
    ),
});

export type GenerateConversationTitleOutput = z.infer<
  typeof GenerateConversationTitleOutputSchema
>;

export async function generateConversationTitle(
  input: GenerateConversationTitleInput
): Promise<GenerateConversationTitleOutput> {
  return generateConversationTitleFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateConversationTitlePrompt',
  input: {schema: GenerateConversationTitleInputSchema},
  output: {schema: GenerateConversationTitleOutputSchema},
  prompt: `You are an AI assistant that generates concise and descriptive titles for conversations.

  Given the following conversation content, generate a title that accurately reflects the main topics discussed. The title should be short and easy to understand. Also, determine if the title should be updated based on the content.

  Conversation Content: {{{conversationContent}}}

  Output the title and a boolean value indicating whether the title should be updated.
  `,
});

const generateConversationTitleFlow = ai.defineFlow(
  {
    name: 'generateConversationTitleFlow',
    inputSchema: GenerateConversationTitleInputSchema,
    outputSchema: GenerateConversationTitleOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
