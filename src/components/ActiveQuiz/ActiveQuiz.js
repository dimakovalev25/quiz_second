import React from "react";
import classes from './ActiveQuiz.css'
import AnswersList from "./AnswersList/AnswersList";

const ActiveQuiz = props => (

        <div className={classes.ActiveQuiz}>
            <p className={classes.Question}>
                <span>
                    <strong>
                        1.
                    </strong>&nbsp;
                    What?
                </span>
                <small>4 from 10</small>
            </p>

                <AnswersList
                    answers={props.answers}
                />
        </div>
)

export default ActiveQuiz;