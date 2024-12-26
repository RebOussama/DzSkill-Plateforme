import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import BackgroundImg from '../assets/GroupTest.png';
import VideoLesson from '../components/VideoLesson/VideoLesson';
import ArticleLesson from '../components/ArticleLesson/ArticleLesson';
import QuizLesson from '../components/QuizLesson/QuizLesson';
import FinalExam from '../components/FinalExam/FinalExam';

const types = [
    { type: 'video', label: 'Video' },
    { type: 'article', label: 'Article' },
    { type: 'quiz', label: 'Quiz' },
    { type: 'final_exam', label: 'Final Exam' },
];

const UploadLesson = () => {
    const [title, settitle] = useState('');
    const [type, settype] = useState('video');
    const [video, setvideo] = useState('');
    const [PDFfile, setPDFfile] = useState('');
    const [description, setdescription] = useState('');
    const [quizData, setQuizData] = useState([]);
    const [examData, setExamData] = useState([]);


    const handleSubmit = (e) => {
        e.preventDefault();

        const lesson = {
            title,
            type,
            video: type === 'video' ? video : null,
            PDFfile: type === 'article' ? PDFfile : null,
            description,
            quiz: type === 'quiz' ? quizData : null,
        };
        console.log(lesson);
    };

    return (
        <div>
            <Navbar />
            <div
                className="flex flex-col items-center my-10 py-10"
                style={{
                    backgroundImage: `url(${BackgroundImg})`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'repeat-y',
                }}
            >
                <h1 className="md:text-3xl text-2xl text-purple font-bold py-10">
                    Upload a lesson
                </h1>
                <div className="bg-white p-8 md:w-[60%] w-[80%] rounded-2xl shadow-md">
                    <h2 className="text-center font-bold text-xl">
                        Information related to the lesson:
                    </h2>
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-6 mt-4"
                    >
                        <div className="flex flex-col gap-2">
                            <label
                                className="pl-2 font-semibold"
                                htmlFor="name"
                            >
                                Title:
                            </label>
                            <input
                                onChange={(e) => settitle(e.target.value)}
                                value={title}
                                required
                                className="border-2 outline-none focus:ring-2 focus:ring-[#9747FF] p-2 rounded-md"
                                type="text"
                                id="name"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label
                                className="pl-2 font-semibold"
                                htmlFor="type"
                            >
                                Type:
                            </label>
                            <div className="flex flex-wrap justify-center gap-8">
                                {types.map((item) => (
                                    <div
                                        className="flex gap-1 items-center"
                                        key={item.type}
                                    >
                                        <input
                                            name="type"
                                            type="radio"
                                            value={item.type}
                                            id={item.type}
                                            checked={type === item.type}
                                            onChange={(e) =>
                                                settype(e.target.value)
                                            }
                                        />
                                        <label htmlFor={item.type}>
                                            {item.label}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {type === 'video' && (
                            <VideoLesson
                                setvideo={setvideo}
                                video={video}
                                setdescription={setdescription}
                                description={description}
                            />
                        )}
                        {type === 'article' && (
                            <ArticleLesson setPDFfile={setPDFfile} />
                        )}
                        {type === 'quiz' && (
                            <QuizLesson setQuizData={setQuizData} />
                        )}
                        {type === 'final_exam' && <FinalExam setExamData={setExamData} />}


                        <div className="flex justify-center my-3">
                            <button
                                type="submit"
                                className="bg-transparent hover:bg-purple text-purple font-semibold hover:text-white py-2 px-4 border border-purple hover:border-transparent rounded-2xl w-32 text-lg"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default UploadLesson;
