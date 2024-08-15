import openai

def analyze_text(text):
    openai.api_key = 'your-openai-api-key'  # Remplacez par votre clé API OpenAI
    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=f"Analyser ce texte: {text}",
        max_tokens=150
    )
    return response.choices[0].text.strip()
