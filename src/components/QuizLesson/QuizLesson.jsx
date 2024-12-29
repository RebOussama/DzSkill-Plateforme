import React, { useEffect, useState } from 'react';

const QuizLesson = ({ setQuizData }) => {
    const [questions, setQuestions] = useState([]);

    const handleAddQuestion = () => {
        setQuestions([
            ...questions,
            { question: '', options: ['', '', '', ''], correctAnswer: '' },
        ]);
    };

    const handleRemoveQuestion = (index) => {
        const updatedQuestions = [...questions];
        updatedQuestions.splice(index, 1);
        setQuestions(updatedQuestions);
    };

    const handleQuestionChange = (index, value) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index].question = value;
        setQuestions(updatedQuestions);
    };

    const handleOptionChange = (qIndex, optIndex, value) => {
        const updatedQuestions = [...questions];
        updatedQuestions[qIndex].options[optIndex] = value;
        setQuestions(updatedQuestions);
    };

    const handleCorrectAnswerChange = (qIndex, value) => {
        const updatedQuestions = [...questions];
        updatedQuestions[qIndex].correctAnswer = value;
        setQuestions(updatedQuestions);
    };

    // Pass the quiz data to the parent component
    useEffect(() => {
        setQuizData(questions);
    }, [questions]);

    return (
        <div className="flex flex-col gap-6">
            <h3 className="font-semibold text-lg">Quiz Questions:</h3>

            {questions.map((q, qIndex) => (
                <div key={qIndex} className="border p-4 rounded-md">
                    <div className="flex flex-col gap-2">
                        <label className="font-semibold" htmlFor={`question-${qIndex}`}>
                            Question {qIndex + 1}:
                        </label>
                        <input
                            type="text"
                            id={`question-${qIndex}`}
                            value={q.question}
                            onChange={(e) => handleQuestionChange(qIndex, e.target.value)}
                            className="border-2 p-2 rounded-md"
                            placeholder="Enter the question"
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-2 mt-4">
                        <label className="font-semibold">Options:</label>
                        {q.options.map((opt, optIndex) => (
                            <div key={optIndex} className="flex gap-2 items-center">
                                <input
                                    type="text"
                                    value={opt}
                                    onChange={(e) =>
                                        handleOptionChange(qIndex, optIndex, e.target.value)
                                    }
                                    className="border-2 p-2 rounded-md flex-1"
                                    placeholder={`Option ${optIndex + 1}`}
                                    required
                                />
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col gap-2 mt-4">
                        <label className="font-semibold" htmlFor={`correct-${qIndex}`}>
                            Correct Answer:
                        </label>
                        <select
                            id={`correct-${qIndex}`}
                            value={q.correctAnswer}
                            onChange={(e) =>
                                handleCorrectAnswerChange(qIndex, e.target.value)
                            }
                            className="border-2 p-2 rounded-md"
                            required
                        >
                            <option value="" disabled>
                                Select the correct answer
                            </option>
                            {q.options.map((opt, optIndex) => (
                                <option key={optIndex} value={opt}>
                                    {opt}
                                </option>
                            ))}
                        </select>
                    </div>

                    <button
                        type="button"
                        onClick={() => handleRemoveQuestion(qIndex)}
                        className="text-red-500 font-semibold mt-2"
                    >
                        Remove Question
                    </button>
                </div>
            ))}

            <button
                type="button"
                onClick={handleAddQuestion}
                className="bg-purple text-white py-2 px-4 rounded-md"
            >
                Add Question
            </button>
        </div>
    );
};

export default QuizLesson;
