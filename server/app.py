from flask import Flask, render_template, request
from utils.analysis import analyze_document
import os

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/upload', methods=['GET', 'POST'])
def upload():
    if request.method == 'POST':
        file = request.files.get('document')
        if file and allowed_file(file.filename):
            result = analyze_document(file)
            return render_template('result.html', analysis_result=result)
        else:
            return "Format de fichier non supporté, veuillez téléverser un PDF, DOCX ou TXT.", 400
    return render_template('upload.html')

def allowed_file(filename):
    ALLOWED_EXTENSIONS = {'pdf', 'docx', 'txt'}
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

if __name__ == '__main__':
    app.run(debug=True)
