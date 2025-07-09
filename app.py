from flask import Flask, render_template, request, redirect, url_for ,jsonify

app=Flask(__name__)

@app.route('/')
def home():
    return render_template('welcome.html')

@app.route('/category')
def category():
    return render_template('category.html')

@app.route('/questions')
def questions():
    category = request.args.get('category')
    return render_template('questions.html', category=category)

def calculatescore(arr1, category):
        # Fixed arrays for different categories
        categories = {
            "yoga": [2,1,1,2,1,0,3,0,2,2,2],
            "intdance": [0,1,2,0,3,2,1,2,0,2,2],
            "intmusic": [2,2,0,1,1,0,1,0,1,2,2],
            'indmusic':[2,2,0,1,1,0,1,0,1,2,2],
            'inddance':[1,0,1,2,3,2,1,2,0,2,2],
            'South':[2,2,1,0,0,3,1,0,1,2,2],
            'Hindi':[2,2,1,0,0,3,1,0,1,2,2],
            'Englishmore':[2,1,0,2,0,3,1,3,1,2,2],
            'workout':[2,1,1,0,0,1,3,2,1,3,3]
        }
        
        # Get the corresponding array for the given category
        correctanswers = categories.get(category, [])
        
        # Count matches based on position and value
        count = 0
        
        for i in range(min(len(arr1), len(correctanswers))):
            if arr1[i] == correctanswers[i]:
                count += 1
        return count
        

@app.route('/submit-answers', methods=['POST'])
def submit_answers():
    data = request.get_json()
    quiz = data.get('quiz')
    user_answers = data.get('userAnswers', [])

    if data is None:
        return jsonify({"No data received"}),400
    else:
        print(user_answers)
        print("Quiz Type:", quiz)
        print(data)

    score=calculatescore(user_answers,quiz)
    print('your score is :',score)
    return jsonify(score=score)


@app.route("/result")
def result():
    score = request.args.get('score', default=0, type=int)  # Get score from URL
    return render_template("result.html", score=score, total=10)


if __name__=='__main__':
    app.run(debug=True)

