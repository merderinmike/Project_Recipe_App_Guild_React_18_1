import React, { useState } from "react";

function RecipeCreate({ onCreateRecipe }) {
	// TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
	// TODO: Add the required input and textarea form elements.
	// TODO: Add the required submit and change handlers.
	const [recipe, setRecipe] = useState({
		name: "",
		cuisine: "",
		photo: "",
		ingredients: "",
		preparation: "",
	});

	const handleFormChange = (e) => {
		setRecipe({ ...recipe, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onCreateRecipe(recipe); // Use onCreateRecipe instead of addRecipe
		setRecipe({
			name: "",
			cuisine: "",
			photo: "",
			ingredients: "",
			preparation: "",
		});
	};

	return (
		<form name="create" onSubmit={handleSubmit}>
			<table>
				<tbody>
					<tr>
						<td>
							<input
								name="name"
								placeholder="Name"
								onChange={handleFormChange}
								value={recipe.name}
							/>
							<input
								name="cuisine"
								placeholder="Cuisine"
								onChange={handleFormChange}
								value={recipe.cuisine}
							/>
							<input
								name="photo"
								placeholder="Photo URL"
								onChange={handleFormChange}
								value={recipe.photo}
							/>
							<textarea
								name="ingredients"
								placeholder="Ingredients (separated by commas)"
								onChange={handleFormChange}
								value={recipe.ingredients}
							/>
							<textarea
								name="preparation"
								placeholder="Preparation Instructions"
								onChange={handleFormChange}
								value={recipe.preparation}
							/>
						</td>
						<td>
							<button type="submit">Create</button>
						</td>
					</tr>
				</tbody>
			</table>
		</form>
	);
}

export default RecipeCreate;
