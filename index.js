export async function mealApi(dishName) {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${dishName}`);
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
}
