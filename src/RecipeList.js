import Recipes from "./Recipes";

function RecipeList({ recipes, deleteRecipe }) {
	return (
		<div className="recipe-list">
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Cuisine</th>
						<th>Photo</th>
						<th>Ingredients</th>
						<th>Preparations</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{recipes.map((recipe, index) => (
						<Recipes
							key={index}
							recipe={recipe}
							index={index}
							deleteRecipe={deleteRecipe}
						/>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default RecipeList;
