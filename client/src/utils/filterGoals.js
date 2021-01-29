// Filter goals list
const filterGoals = (goals, statusFilterState, categoryFilterState) => {

    let filteredGoals = [];

    // Filter by status
    switch(statusFilterState) {
        case "All Goals":
            filteredGoals = goals;
            break;
        case "Planned":
        case "In Progress":
        case "Completed":
        case "Failed":
            filteredGoals = goals.filter(goal => goal.goalStatus === statusFilterState);
            break;
        default:
            filteredGoals = goals;
    }

    // Filter by category
    switch(categoryFilterState) {
        case "All Categories":
            filteredGoals = filteredGoals;
            break;
        case "Financial":
        case "Nutritional":
        case "Physical":
        case "Social":
        case "Emotional":
        case "Career":
        case "Travel":
        case "Parenting": 
        case "Intellectual":
            filteredGoals = filteredGoals.filter(goal => goal.goalCategory === categoryFilterState);
            break;
        default:
            filteredGoals = filteredGoals;
    }

    return filteredGoals;
}

export default filterGoals;