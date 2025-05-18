# MSME Scheme Assistant

This is a Next.js application designed to help users find and understand various government schemes available for Micro, Small, and Medium Enterprises (MSMEs).

## Features

- Conversational interface to ask about MSME schemes.
- Information on eligibility, benefits, and application processes.
- Built with Next.js, React, Tailwind CSS, ShadCN UI, and Genkit for AI capabilities.

## Getting Started

To run this project locally:

1.  **Clone the repository.**
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```
3.  **Set up environment variables:**
    Create a `.env` file in the root of the project if specific API keys or configurations are needed (e.g., for Genkit or other AI services).
4.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    The application will typically be available at `http://localhost:9002`.

5.  **Run Genkit (for AI features, in a separate terminal):**
    ```bash
    npm run genkit:dev
    ```

To get started with the application's UI, take a look at `src/app/page.tsx`.
For AI-related flows, see files under `src/ai/flows/`.