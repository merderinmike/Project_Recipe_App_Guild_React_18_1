const Recipes = ({ recipe, index, deleteRecipe }) => {
	return (
		<tr>
			<td>{recipe.name}</td>
			<td>{recipe.cuisine}</td>
			<td>
				<img src={recipe.photo} alt={recipe.name} />
			</td>
			<td>
				<p>{recipe.ingredients}</p>
			</td>
			<td>
				<p>{recipe.preparation}</p>
			</td>
			<td>
				<button name="delete" onClick={() => deleteRecipe(index)}>
					Delete
				</button>
			</td>
		</tr>
	);
};

export default Recipes;
