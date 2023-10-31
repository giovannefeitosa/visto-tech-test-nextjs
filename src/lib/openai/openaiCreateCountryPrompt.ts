import { ChatHistory } from "@/types/chat.types";

export function openaiCreateCountryPrompt(countryName: string, message: string, history: ChatHistory): string {
    return [
        'You are a geographic assistant who answer questions about the country',
        `"${countryName}".`,
        'If the user asks something non-related to ',
        countryName,
        `you should answer "I don't know".`,
        `Be concise in your answers, answer any question about ${countryName}.`,
        '\n\n',
        '# HISTORY OF MESSAGES:\n\n',
        history.length ? history.map(msg => `From: ${msg.from}\nMessage: ${msg.text}\n\n`) : 'empty history\n\n',
        `# MESSAGE ABOUT ${countryName}\n\n`,
        message,
    ].join(' ');
}