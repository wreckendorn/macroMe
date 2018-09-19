import React from "react";
import TwoLevelPieChart from "../../components/TwoLevelPieChart"

const Math = (props) => {


  //CALORIES SECTION

  const calorieValues = props.tempFoods.map(food => {
    return food.calories;
  });
  const calorieSum = calorieValues.reduce((acc, currValue) => {
    return acc + currValue;
  }, 0);
  const calories = calorieSum.toFixed(2);

  
  //PROTEIN SECTION
  //will cycle through array and return each value
  const proteinValues = props.tempFoods.map(food => {
    return food.protein;
  });
  //takes proteinValues array and adds each value together
  const proteinSum = proteinValues.reduce((acc, currValue) => {
    return acc + currValue;
  }, 0);
  console.log("Protein Sum is: " + proteinSum);
  //only allow two decimal places
  const protein = proteinSum.toFixed(2);



  // FAT SECTION
  const fatValues = props.tempFoods.map(food => {
    return food.fat;
  });

  const fatSum = fatValues.reduce((acc, currValue) => {
    return acc + currValue;
  }, 0);
  console.log("Fat Sum is: " + fatSum);

  const fat = fatSum.toFixed(2);

  //CARB SECTION
  const carbValues = props.tempFoods.map(food => {
    return food.carb;
  });

  const carbSum = carbValues.reduce((acc, currValue) => {
    return acc + currValue;
  }, 0);
  console.log("Carb sum is " + carbSum);

  const carb = carbSum.toFixed(2);

  //get percentages and macro total sum
  const macroTotal = carbSum + fatSum + proteinSum;
  const proteinPercentageDraft = proteinSum / macroTotal * 100;
  const carbPercentageDraft = carbSum / macroTotal * 100;
  const fatPercentageDraft = fatSum / macroTotal * 100;

  let proteinPercentage = 0;
  if(!proteinPercentageDraft){
    proteinPercentage = 0;
  }
  else{
    proteinPercentage = proteinPercentageDraft;
  }

  let carbPercentage = 0;
  if(!carbPercentageDraft){
    carbPercentage = 0;
  }
  else{
    carbPercentage = carbPercentageDraft;
  }

  let fatPercentage = 0;
  if(!fatPercentageDraft){
    fatPercentage = 0;
  }
  else{
    fatPercentage = fatPercentageDraft;
  }

  //data array for inner pie chart
  const data = [{name: 'Protein', value: proteinSum}, {name: 'Carb', value: carbSum},
  {name: 'Fat', value: fatSum},];

  //data array for outer pie chart (diet ratio)
  const data02 = props.dietRatio
  
    return (
            <div>

            <div className="row">

                <div className="col-6 card border-top-0 border-bottom-0 border-right-0">

                  <div className="row">
                    <div className="col-12">
                       <h3>Meal Total</h3>
                    </div>
                  </div>

                  {/* row for Meal total macros broken down */}
                    <div className="row">
                      <div className="col-sm-12 col-md-4 text-primary"><strong>Protein:</strong> {protein}g</div> 
                      <div className="col-sm-12 col-md-4 text-success"><strong>Carb:</strong>{carb}g</div>  
                      <div className="col-sm-12 col-md-4 text-warning"><strong>Fat:</strong>{fat}g</div>
                    </div>
                 
                </div>

                <div className="col-6 card border-top-0 border-bottom-0">

                  <div className="row">
                    <div className="col-12">
                      <h3>Meal Macro</h3>
                    </div>
                  </div>

                    <div className="row">
                      <div className="col-sm-12 col-md-4 text-primary"><strong> Protein:</strong> {proteinPercentage.toFixed(0)}% </div>
                      <div className="col-sm-12 col-md-4 text-success"> <strong>Carb: </strong>{carbPercentage.toFixed(0)}%  </div>
                      <div className="col-sm-12 col-md-4 text-warning"><strong> Fat: </strong>{fatPercentage.toFixed(0)}% </div>
                    </div>
                  </div>
               


            </div>

            <div className="row">
              <div className="col"></div>
              <div className="col mx-auto p-0 m-0">
                <TwoLevelPieChart data={data} data02={data02}/>
              </div>
              <div className="col"></div>
            </div>
          </div>
    )
  }

  export default Math;
