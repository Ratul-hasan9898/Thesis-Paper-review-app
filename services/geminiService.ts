
import { GoogleGenAI } from "@google/genai";
import { AnalysisType } from '../types';

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable is not set.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const prompts: Record<AnalysisType, string> = {
  [AnalysisType.SUMMARIZE]: "Summarize this research paper abstract. Focus on the key contributions, methodology, and findings. Present it in a concise and easy-to-understand format with bullet points for key takeaways.",
  [AnalysisType.EXPLAIN]: "Explain the key concepts mentioned in this research paper abstract, such as 'Deep Reinforcement Learning (DRL)', 'Soft Actor-Critic (SAC)', 'Convolutional Neural Network (CNN)', and 'UAV Collision Avoidance'. Describe each concept in simple terms.",
  [AnalysisType.APPLICATIONS]: "Based on this research paper abstract, suggest 5 potential real-world applications for this technology. For each application, briefly describe how the technology would be used and its potential impact.",
  [AnalysisType.EXTRACT]: "Extract the key information from this research paper abstract. Identify the problem statement, the proposed solution, the methodology used, and the main results or conclusions. Format the output clearly with headings for each section.",
};

export const analyzePaper = async (paperText: string, type: AnalysisType): Promise<string> => {
  const prompt = prompts[type];
  const fullPrompt = `${prompt}\n\nHere is the research paper abstract:\n\n---\n\n${paperText}`;

  try {
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: fullPrompt,
    });
    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    if (error instanceof Error && 'message' in error) {
      return `Error: Failed to analyze paper. ${error.message}`;
    }
    return "Error: An unknown error occurred while communicating with the API.";
  }
};
