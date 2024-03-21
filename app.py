from flask import Flask, render_template, request, jsonify
from openai import OpenAI
import subprocess

app = Flask(__name__)

client = OpenAI()

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
