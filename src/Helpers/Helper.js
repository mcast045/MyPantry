//Uppercase each ingredient for display only
//Data will remain lowercase to access api correctly
export const upperCaseIngredient = ingredient => ingredient.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ').split('-').map(word => word[0].toUpperCase() + word.slice(1)).join('-').split('&').map(word => word[0].toUpperCase() + word.slice(1)).join('&')
