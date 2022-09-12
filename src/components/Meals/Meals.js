import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";
import react,{Fragment} from "react";

const Meals = (props) =>{
    return (
        <Fragment>
            <MealsSummary/>
            <AvailableMeals/>
        </Fragment>
    );
}

export default Meals;