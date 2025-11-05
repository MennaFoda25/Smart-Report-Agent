const OpenAI= require ("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const generateReport = async (topic, data) => {
  const prompt = `Analyze the following data about ${topic} and create a concise report highlighting key insights, patterns, and recommendations:\n\n${data}`;

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
  });

  return response.choices[0].message.content.trim();
};
