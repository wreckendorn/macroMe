import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import API from "../../utils/API";
import ListEachFood from "../../components/ListEachFood";
import ListEachMacro from "../../components/ListEachMacro";
import Math from "../../components/Math";
import Auth from '../../modules/Auth';
import Login from "../Login"
import "./Macros.css";

class Macros extends Component {
    state = {
      results: [],
      ingredient: "",
      removeIngredient: "",
      choices: [],
      choiceColor: "btn-primary p-3",
      userID: "",
      tempFoods: [],
      proteinTotal: 0,
      carbTotal: 0,
      fatTotal: 0,
      username: "",
      isLoggedIn: false,
      dietRatio: [{name: 'Protein', value: 10}, {name: 'Carb', value: 10}, {name: 'Fat', value: 10}],
      dietRatioName: "balanced",
      dietRatiosAvailable: ["balanced, keto, plant-heavy"],
      chosenCalories: 0,
      chosenProtein: 0,
      chosenFat: 0,
      chosenCarbs: 0
    };

  componentDidMount = () => {
    console.log("isLoggedIn = " + this.state.isLoggedIn)
    this.checkAuth()
  }

  checkAuth = () => {
    if(Auth.isUserAuthenticated()){
      this.userApproved()
    }
    console.log("still not logged in");
  }

  userApproved = () => {
    const id = Auth.getuID();
    this.setState({
      userID: id,
      isLoggedIn: true
    })
    this.getTempUserMacros(id);
  }

  //takes value and determines dietRatio chosen. then, sets Diet Ratio to new values and updates User db
  dietRatios = (value) => {
    const user = this.state.userID;
    const balanced = [{name: 'Protein', value: 10}, {name: 'Carb', value: 10}, {name: 'Fat', value: 10}];
    const keto = [{name: 'Protein', value: 20}, {name: 'Carb', value: 10}, {name: 'Fat', value: 70}];
    const plantHeavy = [{name: 'Protein', value: 15}, {name: 'Carb', value: 45}, {name: 'Fat', value: 40}];
    const ratio = this.state.dietRatioName;

    if(value === "balanced"){
      this.setState({
        dietRatio: balanced
      });
    }
    else if(value === "keto"){
      this.setState({
        dietRatio: keto
      });
    }
    else{
      this.setState({
        dietRatio: plantHeavy
      });
    }
    
    API.changeDietRatio({
      id: user,
      macroRatio: ratio
    })
    .then(res => console.log("added dietRatio to database"))
    .catch(err => console.log(err))
  };

  //grabs all info from user's db and stores tempIngredients in this.state
  getTempUserMacros = (user) => {
    API.getUserInfo(user)
    .then(res => this.setState({ tempFoods: res.data.temporaryIngredientHold, username: res.data.username } ))
    .catch(err => console.log(err));
  };

  //when Carb button is clicked, the color of the foodPicker changes color to match(green). then, grabs all ingredients from Macro DB with keyword Carbs and fills foodPicker dropdown. 
  handleCarb = () => {
    this.setState({
      choiceColor: "btn-success"
    });
    API.getCarbsInfo()
    .then(res => this.setState({ choices: res.data}))
    .catch(err => console.log(err));
    if(this.state.ingredient === ""){
      this.setState({
        ingredient: "11099"
      });
    }
 }

  //each time the user selects an option from the food picker dropdown menu, it triggers this function, which sets this.state.ingredient
  handleChange = event => {
    console.log("handleChange value is " + event.target.value);
    const value = event.target.value;
    this.setState({
      ingredient: value
    });
  };

  //each time the user selects an option from the foods already chosen dropdown it triggers this function, which sets this.state.removeIngredient
  handleRemoveChange = event => {
    console.log("handleRemoveChange value is " + event.target.value);
    const value = event.target.value;
    this.setState({
      removeIngredient: value
    });
  };

  //when the user removes an item, we grab this.state.tempFoods and filter the food we chose to remove out of it by ndbid (so far). then, updates Userdb's tempFoods with this new array
  //and calls getTempuserMacros to update our state's tempFoods array and the dropdowns
  handleDelete = event => {
    event.preventDefault();
    const value = this.state.removeIngredient;
    const id = this.state.userID;
    const tempFoods = this.state.tempFoods;
    const editFoods = tempFoods.filter(food => food.ndbid !== value);
    API.deleteTempFood({
      id: id,
      data: editFoods
    })
    .then(res => console.log("deleted ingredient from temporary"))
    .catch(err => console.log(err))
    this.getTempUserMacros(id);
  };

  //each time the user selects a different dietRatio from the dropdown it triggers this function, which sets this.state.dietRatioName and calls the dietRatio function
  handleDietChange = event => {
    const value = event.target.value;
    this.setState({
      dietRatioName: value
    });
    this.dietRatios(value);
  };

  //when Fat button is clicked, the color of the foodPicker changes color to match(yellow). then, grabs all ingredients from Macro DB with keyword Fat and fills foodPicker dropdown. 
  handleFat = () => {
    this.setState({
      choiceColor: "btn-warning"
    });
    API.getFatInfo()
    .then(res => this.setState({ choices: res.data}))
    .catch(err => console.log(err));
    this.setState({
      ingredient: "09193"
    });
  }

  //  //when Protein button is clicked, the color of the foodPicker changes color to match(blue). then, grabs all ingredients from Macro DB with keyword Protein and fills foodPicker dropdown. 
  handleProtein = () => {
    this.setState({
      choiceColor: "btn-primary"
    });
    API.getProteinInfo()
    .then(res => this.setState({ choices: res.data}))
    .catch(err => console.log(err));
    this.setState({
      ingredient: "15221"
    });
  }

  //when Reset button is clicked, this function removes all items from tempFood array in User's db. then, call getTempUserMacros function to refresh the state
  handleReset = event => {
    const user = this.state.userID;
    event.preventDefault();
    API.resetTempFood(user)
    .then(res => console.log("deleted tempFood array!"))
    .catch(err => console.log(err));
    this.getTempUserMacros(user);
  };

  //====================NOT WORKING ==================

  //set this.state.redirectuser to true so user is redirected later to login 
  handleSignOut = () => {
    Auth.deauthenticateUser()
    .then(res => this.setState({
      isLoggedIn: false
    }))
  }

  //grabs ndbID from selected ingredient(this.state.ingredient), makes an API call to the US AG for macros of ndbid
  //then, sends our response to this.storeTemporaryDB function
  handleSubmit = event => {
    const ingredient = this.state.ingredient;
    event.preventDefault();
    API.getMacroInfo(ingredient)
    .then(res => this.storeTemporaryDB(res.data.report.foods))
    .catch(err => console.log(err));
  };

  //takes our response from our API call and stores in this.state.results.
  //also, breaks the response into macros and sends to User db to temporarily hold onto for chosen ingredients
  storeTemporaryDB = (value) => {
    const id = this.state.userID;
    const ingredient = this.state.ingredient;
    this.setState({
      results: value[0].nutrients, 
      chosenCalories: value[0].nutrients[0].value,
      chosenProtein: value[0].nutrients[1].value,
      chosenFat: value[0].nutrients[2].value,
      chosenCarbs: value[0].nutrients[3].value,
    })
    API.addTempFood({
      food: value[0].name,
      calories: value[0].nutrients[0].value,
      protein: value[0].nutrients[1].value,
      fat: value[0].nutrients[2].value,
      carb: value[0].nutrients[3].value,
      id: id,
      ndbid: ingredient
    })
    .then(res => console.log(this.state.results[0]))
    .catch(err => console.log(err))
    .then(this.getTempUserMacros(id))
  }

  render() {


    // const isLoggedIn = this.state.isLoggedIn;
    // if (isLoggedIn === false) {
    //   return <Redirect to="/login"/>
    // }

      return (
        <div className="container">

          <div className="row align-items-center no-gutters ">

            <div className="col bg-primary  text-white text-center">
{/* row1 */}
              <div className="row no-gutters">
                <div className="col">
                  <h1 className="h1slow">{this.state.username}</h1>
                </div>
              </div>
{/* row2 */}
             
              <div className="row no-gutters text-center">
                <div className="col-md-1 col-sm">
                  <form className="form-group">
                        <select className="bg-primary text-white " value={this.state.dietRatioName} id="exampleFormControlSelect1" onChange={this.handleDietChange}>
                          <option value="keto">keto</option>
                          <option value="balanced">balanced</option>
                          <option value="plant-heavy">plant-heavy</option>
                        </select>
                 
                  </form>
                </div>
                <div className="col-md-10"></div>
                <div className="col-md-1 col-sm text-white dropdown">
                  <button className="btn btn-outline-light " onClick={this.handleSignOut}>
                    Signout
                  </button>
                </div>
              </div>
            </div>
          </div>
        
          <Math 
            tempFoods={this.state.tempFoods}
            dietRatio={this.state.dietRatio} />

        <div className="row">
            <div className="col-sm-4"></div>
            <div className="col-sm-4">
              <div className="row text-center">
                <div className="col">
                  <button className="btn btn-primary text-center" onClick={this.handleProtein}>Protein</button>
                </div> 
                <div className="col">
                  <button className="btn btn-success text-center" onClick={this.handleCarb}>Carb</button>
                </div>
                <div className="col">
                  <button className="btn btn-warning text-center" onClick={this.handleFat}>Fat</button>
                </div>
              </div>
          </div>
          <div className="col-sm-4"></div>
        </div>

          <div className="row mt-3">

            <div className="col">

              <div className="row">
                <div className="col">
                   <h4 className="text-secondary text-center">Add some food</h4>
                 </div>
              </div>
              <div className="row mb-3">
                <div className="col text-center">
                
                  <form>
                  <button className="ml-3 mr-2 btn-secondary rounded-circle p-1 buttonText" value="test" onClick={this.handleSubmit}>Add</button>
                   <label>
                      
                        <select className={this.state.choiceColor} value={this.state.ingredient} onChange={this.handleChange}>
                          {this.state.choices.map(choice => (
                            <ListEachFood 
                            key={choice._id}
                            food={choice.food}
                            ndbid={choice.ndbid}
                          ></ListEachFood>
                          ))}
                        </select>
                    
                    </label>
                    <button className="ml-2 btn-secondary rounded-circle p-2 buttonText" onClick={this.handleReset}>Reset</button>
                  </form>
                </div>
              </div>
              {/* <div className="row"> */}
                {/* <div className="col text-center">
                  <button className="ml-3 btn-secondary rounded-circle p-2 buttonText" value="test" onClick={this.handleSubmit}>Add</button>
                </div> */}
                {/* <div className="col">
                  <button className="ml-2 btn-secondary rounded-circle p-2 buttonText" onClick={this.handleReset}>+</button>
                </div> */}
              {/* </div> */}
            </div>

              <div className="col">

                 <div className="row">
                   <div className="col">
                      <h4 className="text-secondary text-center">Your picks</h4>
                   </div>
                 </div>

                 <div className="row">
                    <div className="col text-center">
                          <form className="text-center">
                          <button className="mr-2 btn-secondary rounded-circle p-1 buttonText" value="test" onClick={this.handleDelete}>Remove</button>
                            <label>
                              <select className="btn btn-outline-dark" value={this.state.removeIngredient} onChange={this.handleRemoveChange}>
                                {this.state.tempFoods.map(choice => (
                                  <ListEachFood 
                                  key={choice._id}
                                  food={choice.food}
                                  ndbid={choice.ndbid}
                                ></ListEachFood>
                                ))}
                              </select>
                            </label>
                          </form>
                    </div>
                 </div>
                 {/* <div className="row">
                   <div className="col text-center">
                     <button className="mr-2 btn-secondary rounded-circle p-2 buttonText" value="test" onClick={this.handleDelete}>Remove</button>
                  </div>
                </div> */}
              </div>

          </div>
          
          {/* <div className="row mt-4">
              <div className="col-2">
                <h5>Calories: {this.state.chosenCalories}kcal</h5>
                <h5>Protein: {this.state.chosenProtein}g</h5>
                <h5>Fat: {this.state.chosenFat}g</h5>
                <h5>Carbs: {this.state.chosenCarbs}g</h5>
              </div>
          </div> */}


          {/* <div className="row">
                <div className="col-4">
                  {this.state.results.map(result => (
                    <ListEachMacro key={result.value} id={result.value}>
                      {result.nutrient}: {result.value}
                    </ListEachMacro>
                  ))}
                </div>
          </div>  */}
        </div>
            
      );
    }
  } 


export default Macros;