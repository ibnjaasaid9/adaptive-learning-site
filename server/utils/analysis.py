from .openai_helper import analyze_text

def analyze_document(file):
    content = file.read().decode('utf-8', errors='ignore')
    analysis_result = analyze_text(content)
    return analysis_result
