import { openai } from "@/lib/openai/openai";
import { openaiCreateCountryPrompt } from "@/lib/openai/openaiCreateCountryPrompt";
import { ChatMessage } from "@/types/chat.types";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    request: NextApiRequest,
    response: NextApiResponse<ChatMessage>,
) {
    // todo: payload validation
    
    const {
        countryName,
        message,
        history,
    } = request.body;

    const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: openaiCreateCountryPrompt(countryName, message, history) }],
        model: process.env.OPENAI_MODEL || 'gpt-3.5-turbo',
    });
    
    const answerText = chatCompletion.choices[0]?.message.content || '---';

    const answer: ChatMessage = {
        createdAt: new Date(),
        from: 'ai',
        text: answerText,
    }

    response.status(200).json(answer);
}