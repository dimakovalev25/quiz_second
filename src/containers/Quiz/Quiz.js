import React, {Component} from "react";
import classes from './Quiz.css'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

class Quiz extends Component {
    state = {
        quiz : [
            {
                answers: [
                    {text: 'What?'},
                    {text: 'Why?'},
                    {text: 'Were?'},
                    {text: 'Wen?'}
                ]
            }
        ]
    }

    render() {
        console.log(this.state)
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                <h1>Quiz English Verbs</h1>
                    <ActiveQuiz
                        answers={this.state.quiz[0].answers}
                    />
                </div>

            </div>
        )
    }
}

export default Quiz;