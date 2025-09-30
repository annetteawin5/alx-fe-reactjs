import React, { useState } from "react";

export default function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required";
    if (!ingredients.trim()) newErrors.ingredients = "Ingredients are required";
    if (!steps.trim()) newErrors.steps = "Preparation steps are required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log({ title, ingredients, steps });
      setTitle("");
      setIngredients("");
      setSteps("");
      setErrors({});
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Add a New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-center">
          <label className="w-full md:w-1/3 font-semibold">Title:</label>
          <input
            type="text"
            className="w-full md:w-2/3 p-2 border rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}

        {/* Ingredients */}
        <div className="flex flex-col md:flex-row md:items-center">
          <label className="w-full md:w-1/3 font-semibold">Ingredients:</label>
          <textarea
            className="w-full md:w-2/3 p-2 border rounded"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
        </div>
        {errors.ingredients && (
          <p className="text-red-500 text-sm">{errors.ingredients}</p>
        )}

        {/* Steps */}
        <div className="flex flex-col md:flex-row md:items-center">
          <label className="w-full md:w-1/3 font-semibold">Preparation Steps:</label>
          <textarea
            className="w-full md:w-2/3 p-2 border rounded"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          />
        </div>
        {errors.steps && (
          <p className="text-red-500 text-sm">{errors.steps}</p>
        )}

        {/* Submit */}
        <button
          type="submit"
          className="w-full md:w-auto bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}