import React from 'react';

const VideoLesson = ({ setvideo, setdescription, description }) => {
    const handleFileChange = (e) => {
        setvideo(e.target.files[0]); // Update video with the selected file
    };

    return (
        <div className="flex flex-col gap-4">
            <div className="flex md:flex-row flex-col gap-8 items-center">
                <label className="pl-2 font-semibold" htmlFor="video">
                    Upload video content:
                </label>
                <input
                    onChange={handleFileChange}
                    required
                    id="video"
                    type="file"
                    className="text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text[#283342] hover:file:bg-violet-100"
                />
            </div>
            <div className="flex flex-col gap-2">
                <label className="pl-2 font-semibold" htmlFor="description">
                    Description:
                </label>
                <textarea
                    onChange={(e) => setdescription(e.target.value)}
                    value={description}
                    required
                    className="border-2 outline-none focus:ring-2 focus:ring-[#9747FF] p-2 rounded-md"
                    id="description"
                    rows="4"
                    cols="50"
                />
            </div>
        </div>
    );
};

export default VideoLesson;
