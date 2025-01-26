import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createCourse,
  fetchCategories,
  uploadImageToCloudinary,
  resetStatus,
} from "../redux/courseSlice";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import BackgroundImg from "../assets/GroupTest.png";

const CreateCourse = () => {
  const dispatch = useDispatch();
  const { loading, successMessage, errorMessage, categoriesList } = useSelector(
    (state) => state.courses
  );

  const [title, setTitle] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [level, setLevel] = useState("");
  const [duration, setDuration] = useState("0");
  const [price, setPrice] = useState("0");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [certification, setCertification] = useState("Unavailable");

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      alert("Please select an image before submitting!");
      return;
    }

    const teacherId = localStorage.getItem("userID");

    try {
      // Upload the image to Cloudinary
      const uploadResponse = await dispatch(uploadImageToCloudinary(image)).unwrap();
      const imageUrl = uploadResponse.secure_url; // Extract image URL from the response

      const categoryIdInt = parseInt(categoryId);
      const teacherIdInt = parseInt(teacherId);


      // Prepare course data with the uploaded image URL
      const courseData = {
        Name: title,
        category_id: categoryIdInt,
        Level: level,
        Language: "English",
        Duration: `${duration} hours`,
        Pricing: `${price==0 ? "Free" : `$${price}`}`,
        Description: description,
        Certification: certification,
        Image: imageUrl, // Use the uploaded image URL
        teacher_id: teacherIdInt,
      };

      // Dispatch the createCourse action
      console.log(courseData)
      dispatch(createCourse(courseData));
    } catch (error) {
      console.error("Error uploading image or creating course:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div
        className="flex flex-col items-center my-10 py-10"
        style={{
          backgroundImage: `url(${BackgroundImg})`,
          backgroundPosition: "center",
          backgroundRepeat: "repeat-y",
        }}
      >
        <h1 className="md:text-3xl text-2xl text-purple font-bold py-10">
          Upload a course
        </h1>
        <div className="bg-white p-8 md:w-[60%] w-[80%] rounded-2xl shadow-md">
          <h2 className="text-center font-bold text-xl">
            Information related to the course:
          </h2>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 mt-4 font-semibold"
          >
            <div className="flex flex-col gap-2">
              <label className="pl-2" htmlFor="name">
                Name:
              </label>
              <input
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                required
                className="border-2 outline-none focus:ring-2 focus:ring-[#9747FF] p-2 rounded-md"
                type="text"
                id="name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="pl-2" htmlFor="category">
                Category:
              </label>
              <select
                onChange={(e) => setCategoryId(e.target.value)}
                value={categoryId}
                required
                className="border-2 outline-none focus:ring-2 focus:ring-[#9747FF] p-2 rounded-md"
                id="category"
              >
                <option value="" disabled>
                  Select a category
                </option>
                {categoriesList.map((cat) => (
                  <option key={cat.ID} value={cat.ID}>
                    {cat.Name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="pl-2" htmlFor="level">
                Level:
              </label>
              <input
                onChange={(e) => setLevel(e.target.value)}
                value={level}
                required
                className="border-2 outline-none focus:ring-2 focus:ring-[#9747FF] p-2 rounded-md"
                type="text"
                id="level"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="pl-2" htmlFor="duration">
                Duration (Hours):
              </label>
              <input
                onChange={(e) => setDuration(e.target.value)}
                value={duration}
                required
                className="border-2 outline-none focus:ring-2 focus:ring-[#9747FF] p-2 rounded-md"
                type="text"
                id="duration"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="pl-2" htmlFor="price">
                Price ($):
              </label>
              <input
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                required
                className="border-2 outline-none focus:ring-2 focus:ring-[#9747FF] p-2 rounded-md"
                type="text"
                id="price"
              />
            </div>
            <div className="flex md:flex-row flex-col gap-8 items-center">
              <label className="pl-2" htmlFor="image">
                Cover Image:
              </label>
              <input
                onChange={handleFileChange}
                id="image"
                type="file"
                required
                className="text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-[#283342] hover:file:bg-violet-100"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="pl-2" htmlFor="description">
                Description:
              </label>
              <textarea
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                required
                className="border-2 outline-none focus:ring-2 focus:ring-[#9747FF] p-2 rounded-md"
                id="description"
                rows="4"
                cols="50"
              ></textarea>
            </div>
            <div className="flex justify-center my-3">
              <button
                type="submit"
                disabled={loading}
                className="bg-transparent hover:bg-purple text-purple font-semibold hover:text-white py-2 px-4 border border-purple hover:border-transparent rounded-2xl w-32 text-lg"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
          {successMessage && (
            <p className="text-green-500 text-center mt-4">{successMessage}</p>
          )}
          {errorMessage && (
            <p className="text-red-500 text-center mt-4">{errorMessage}</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CreateCourse;
