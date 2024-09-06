
import React, { useState } from "react";
import axios from "axios";

function ApplyForm() {
    const [values, setValues] = useState({
        fullname: "",
        email: "",
        phone_number: "",
        resume_url: "",
        education: "",
        experience: "",
        skills: "",
        gender: "",
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form values:", values);
        axios
            .post("http://localhost:3001/api/applications", values)
            .then((result) => {
                console.log(result);
                setValues({
                    fullname: "",
                    email: "",
                    phone_number: "",
                    resume_url: "",
                    education: "",
                    experience: "",
                    skills: "",
                    gender: "",
                });
            })
            .catch((err) => {
                console.error("Error saving data:", err);
            });
    };
    return (
        <div className="border-gray-200 rounded-3xl p-4 m-4 mx-auto max-w-4xl">
            <form onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold shadow text-center mb-4 ">
                    Apply for Job
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="mb-1">
                        <label className="block text-base mb-2 text-left text-gray-700">
                            Full Name:
                        </label>
                        <input
                            type="text"
                            name="fullname"
                            value={values.fullname}
                            onChange={(event) =>
                                setValues({ ...values, fullname: event.target.value })
                            }
                            placeholder="Full Name"
                            required
                            className="w-full px-3 py-1 border rounded"
                        />
                    </div>
                    <div className="mb-1">
                        <label className="block text-base mb-2 text-left text-gray-700">
                            Email:
                        </label>
                        <input
                            type="text"
                            name="email"
                            value={values.email}
                            onChange={(event) =>
                                setValues({ ...values, email: event.target.value })
                            }
                            placeholder="email"
                            required
                            className="w-full px-3 py-1 border rounded"
                        />
                    </div>
                    <div className="mb-1">
                        <label className="block text-base mb-2 text-left text-gray-700">
                            Phone Number:
                        </label>
                        <input
                            type=""
                            name="phone_number"
                            value={values.phone_number}
                            onChange={(event) =>
                                setValues({ ...values, phone_number: event.target.value })
                            }
                            placeholder="+251 999-999-999"
                            required
                            className="w-full px-3 py-1 border rounded"
                        />
                    </div>
                    <div className="mb-1">
                        <label className="block text-base mb-2 text-left text-gray-700">
                            Resume Url:
                        </label>
                        <input
                            type="text"
                            name="resume_url"
                            value={values.resume_url}
                            onChange={(event) =>
                                setValues({ ...values, resume_url: event.target.value })
                            }
                            placeholder="resume_url"
                            required
                            className="w-full px-3 py-1 border rounded"
                        />
                    </div>
                    <div className="mb-1">
                        <label className="block text-base mb-2 text-left text-gray-700">
                            Education Level:
                        </label>
                        <select
                            name="education"
                            value={values.education}
                            onChange={(event) =>
                                setValues({ ...values, education: event.target.value })
                            }
                            required
                            className="w-full px-3 py-1 border rounded"
                        >
                            <option value="">Select</option>
                            <option value="certificate">Certificate</option>
                            <option value="degree">Degree</option>
                            <option value="msc">MSc</option>
                            <option value="phd">PhD</option>
                        </select>


                    </div>
                    <div className="mb-1">
                        <label className="block text-base mb-2 text-left text-gray-700">
                            Experience (in years):
                        </label>
                        <select
                            name="experience"
                            value={values.experience}
                            onChange={(event) =>
                                setValues({ ...values, experience: event.target.value })
                            }
                            className="w-full px-3 py-1 border rounded"
                        >
                            <option value="">None</option>
                            {[...Array(20).keys()].map((num) => (
                                <option key={num + 1} value={num + 1}>
                                    {num + 1}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-1">
                        <label className="block text-base mb-2 text-left text-gray-700">
                            Skills:
                        </label>
                        <textarea
                            name="skills"
                            value={values.skills}
                            onChange={(event) =>
                                setValues({ ...values, skills: event.target.value })
                            }
                            placeholder="List your Skills Here"
                            required
                            className="w-full px-3 py-2 border rounded h-18"
                        ></textarea>
                    </div>

                    <div className="mb-1">
                        <label className="block text-base mb-2 text-left text-gray-700">
                            Gender:
                        </label>
                        <select
                            name="gender"
                            value={values.gender}
                            onChange={(event) =>
                                setValues({ ...values, gender: event.target.value })
                            }
                            required
                            className="w-full px-3 py-1 border rounded"
                        >
                            <option value="">Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                </div>

                <div className="flex justify-center mt-4">
                    <button
                        type="submit"
                        className="w-1/3 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Apply
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ApplyForm;