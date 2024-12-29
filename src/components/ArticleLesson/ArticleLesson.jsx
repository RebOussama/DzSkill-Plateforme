import React from 'react';

const ArticleLesson = ({ setPDFfile }) => {
    const handleFileChange = (e) => {
        setPDFfile(e.target.files[0]); // Update PDF file with the selected file
    };

    return (
        <div className="flex flex-col gap-4">
            <div className="flex md:flex-row flex-col gap-8 items-center">
                <label className="pl-2 font-semibold" htmlFor="pdf">
                    Upload PDF content:
                </label>
                <input
                    onChange={handleFileChange}
                    required
                    id="pdf"
                    type="file"
                    className="text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text[#283342] hover:file:bg-violet-100"
                />
            </div>
        </div>
    );
};

export default ArticleLesson;
