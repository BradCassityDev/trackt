import React, { useEffect } from 'react';

const GoalFilterMenu = ({ statusFilterState, setStatusFilterState, categoryFilterState, setCategoryFilterState }) => {

    // Handle Menu Change Event
    const handleMenuChange = event => {
        setStatusFilterState(event.target.innerText);
    };

    // Handle Category Filter Change
    const handleCategoryFilterChange = event => {
        setCategoryFilterState(event.target.value);
    };

    useEffect(() => {}, [statusFilterState]);
    
    return (
        <div className="content-wrapper filter-box border">
            <h5>Filters</h5>
            <div className="filter-box">
                <nav>
                    <ul className="nav nav-pills">
                        <li className={statusFilterState === "All Goals" ? "profile-menu-item menu-item-selected": "profile-menu-item selected"} onClick={handleMenuChange}>All Goals</li>
                        <li className={statusFilterState === "Planned" ? "profile-menu-item menu-item-selected": "profile-menu-item selected"} onClick={handleMenuChange}>Planned</li>
                        <li className={statusFilterState === "In Progress" ? "profile-menu-item menu-item-selected": "profile-menu-item selected"} onClick={handleMenuChange}>In Progress</li>
                        <li className={statusFilterState === "Completed" ? "profile-menu-item menu-item-selected": "profile-menu-item selected"} onClick={handleMenuChange}>Completed</li>
                        <li className={statusFilterState === "Failed" ? "profile-menu-item menu-item-selected": "profile-menu-item selected"} onClick={handleMenuChange}>Failed</li>
                    </ul>
                </nav>
                <hr />
                <div class="form-group">
                    <label for="category-filter-dropdown">Category Filter:</label>
                    <select class="form-control" id="category-filter-dropdown" onChange={handleCategoryFilterChange}>
                        <option>All Categories</option>
                        <option>Financial</option>
                        <option>Nutritional</option>
                        <option>Physical</option>
                        <option>Social</option>
                        <option>Intellectual</option>
                        <option>Emotional</option>
                        <option>Career</option>
                        <option>Travel</option>
                        <option>Parenting</option>
                    </select>
                </div>
            </div>  
        </div>
    );
};

export default GoalFilterMenu;