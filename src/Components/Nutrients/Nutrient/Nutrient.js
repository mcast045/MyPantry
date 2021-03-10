import React, { Fragment, useEffect, useState } from 'react'
import './Nutrient.css'
import axios from 'axios'

const Nutrient = ({ nutrients, currentRecipeId }) => {

    const [nutrient, setNutrient] = useState()
    useEffect(() => {
        if (nutrients.calories) {
            const totalFatNutrients = nutrients.bad.find(fat => fat.title === 'Fat')
            const totalFatPercent = totalFatNutrients.percentOfDailyNeeds

            const cholesterolNutrients = nutrients.bad.find(fat => fat.title === 'Cholesterol')
            const cholesterolAmount = cholesterolNutrients.amount
            const cholesterolPercent = cholesterolNutrients.percentOfDailyNeeds

            const sodiumNutrients = nutrients.bad.find(fat => fat.title === 'Sodium')
            const sodiumAmount = sodiumNutrients.amount
            const sodiumPercent = sodiumNutrients.percentOfDailyNeeds

            const totalCarbsNutrients = nutrients.bad.find(fat => fat.title === 'Carbohydrates')
            const totalCarbsPercent = totalCarbsNutrients.percentOfDailyNeeds

            const proteinNutrients = nutrients.good.find(fat => fat.title === 'Protein')
            const proteinAmount = proteinNutrients.amount
            const proteinPercent = proteinNutrients.percentOfDailyNeeds

            setNutrient({ 'proteinPercent': proteinPercent, 'proteinAmount': proteinAmount, 'totalCarbsPercent': totalCarbsPercent, 'sodiumAmount': sodiumAmount, 'sodiumPercent': sodiumPercent, 'totalFatPercent': totalFatPercent, 'cholesterolAmount': cholesterolAmount, 'cholesterolPercent': cholesterolPercent })
        }
    }, [nutrients])

    // const [allNutrients, setAllNutrients] = useState()
    // const onFullNutrientsClick = async () => {
    //     const API_KEY = process.env.REACT_APP_Recipes
    //     const nutritionVisualURL = `https://api.spoonacular.com/recipes/${currentRecipeId}/nutritionWidget?apiKey=${API_KEY}`
    //     const res = await axios.get(nutritionVisualURL)
    //     setAllNutrients(res.data)
    // }

    return (
        <Fragment>
            {nutrient &&
                <div className='nutrient-fats_container'>

                    <div className='flex total-section'>
                        <div><span className='nutrients-bold'>Total Fat:</span> {nutrients.fat}</div>
                        <div>{nutrient.totalFatPercent}%</div>
                    </div>

                    <div className='flex total-section'>
                        <div><span className='nutrients-bold'>Cholesterol:</span> {nutrient.cholesterolAmount}</div>
                        <div>{nutrient.cholesterolPercent}%</div>
                    </div>

                    <div className='flex total-section'>
                        <div><span className='nutrients-bold'>Sodium:</span> {nutrient.sodiumAmount}</div>
                        <div>{nutrient.sodiumPercent}%</div>
                    </div>

                    <div className='flex total-section'>
                        <div><span className='nutrients-bold'>Total Carbohydrates:</span> {nutrients.carbs}</div>
                        <div>{nutrient.totalCarbsPercent}%</div>
                    </div>

                    <div className='flex total-section'>
                        <div><span className='nutrients-bold'>Protein:</span> {nutrient.proteinAmount}</div>
                        <div>{nutrient.proteinPercent}%</div>
                    </div>

                    {/* <button onClick={() => onFullNutrientsClick()} className='full-NutrientsBtn btnHover cursor'>Full Nutrients</button> */}

                </div>
            }
        </Fragment>
    );
}

export default Nutrient;