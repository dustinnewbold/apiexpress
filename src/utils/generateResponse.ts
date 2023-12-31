import { initializeDirectories } from '@/initDirectories';
import { generateLLMPrompt } from './generateLLMPrompt';
import { OpenAPI } from './openAPI';
import { config } from '@/config';

type ResponseInput = {
    path: string;
    prompt: string;
    schema: string;
    count: number;
};

export const generateResponse = async (input: ResponseInput) => {
    initializeDirectories();

    const prompt = generateLLMPrompt({
        path: input.path,
        prompt: input.prompt,
        schema: input.schema,
        count: input.count,
    });

    const response = await OpenAPI.getResponse(prompt);

    return response;
};
