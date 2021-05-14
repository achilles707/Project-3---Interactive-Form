/*

when a change is detected in any element of the 'activities-box':
    if the selected event is checked the total price is updated either 100 or 200
    counter for checked activities is updated
        if tuesday morning is selected, calls the blocking function on the other tuesday morning event
            blocking function:  **All problems caused by blocking function(?)**
            listens to both event options, if it was checked, then it unchecks and disables the other option
                if it wasn't unchecked, it enables the other option
                adds one to the checked counter  **shouldn't do this!**
                **Unchecks an option without executing stuff inside unchecked conditinal which subtracts from total price**
        if tuesday afternoon is seleceted, calls the blocking function on the other tuesday afternoon event
            blocking function
    if selected event is unchecked then subtracts 100 or 200 from total price
        subtract from counter for checked activities
    display total price on the webpage

*/
 
 // Register for Activities Section:
 const activities = document.getElementById('activities-box');
 const totalPrice = document.getElementById('activities-cost');
 let subTotal = 0;
 // for validation:
 let activitiesChecked = 0;

 // listen for changes in "activities" fieldset
 
 activities.addEventListener('change', (e) => {
     let activityCost = 0;
     let tuesdayMorning = document.querySelectorAll("[data-day-and-time='Tuesday 9am-12pm']");
     let tuesdayAfternoon = document.querySelectorAll("[data-day-and-time='Tuesday 1pm-4pm']");

     // function to block user from clicking two simultaneous events:
     function blockSimulEvent(eventTime) {    
         eventTime[0].addEventListener('change', (e) => {
             if(e.target.checked == true) {
                 eventTime[1].checked = false;
                 eventTime[1].disabled = true;

             } else if(e.target.checked == false) {
                 eventTime[1].disabled = false;
             }
         });

         eventTime[1].addEventListener('change', (e) => {
             if(e.target.checked == true) {
                 eventTime[0].checked = false;
                 eventTime[0].disabled = true;

             } else if(e.target.checked == false) {
                 eventTime[0].disabled = false;
             }
         });
     }

     // update total price
     if(e.target.checked == true) {    
         if(e.target.name != 'all') {
             activityCost = 100;
             subTotal += activityCost;
             
             // for validation:
             activitiesChecked += 1;

             // check if certain day and time already checked
             if(e.target.dataset.dayAndTime == 'Tuesday 9am-12pm') {
                 console.log('Tuesday 9am-12pm');

                 // grey out other checkbox for same time
                 blockSimulEvent(tuesdayMorning);
                 // for validation:
                 activitiesChecked += 1;
                 
             } else if(e.target.dataset.dayAndTime == 'Tuesday 1pm-4pm'){
                 console.log('Tuesday 1pm-4pm');

                 // grey out other checkbox for same time
                 blockSimulEvent(tuesdayAfternoon);

                 // for validation:
                 activitiesChecked += 1;

             }
             
         } else {
             activityCost = 200;
             subTotal += activityCost;

             // for validation:
             activitiesChecked += 1;
         }
     // otherwise, subtract from the total price     
     } else {
         if(e.target.name != 'all') {
             activityCost = 100;
             subTotal -= activityCost;

             // for validation:
             activitiesChecked -= 1;
         } else {
             activityCost = 200;
             subTotal -= activityCost;

             // for validation:
             activitiesChecked -= 1;
         }
     }
     // add the cost of the chosen activities to the total price
     totalPrice.innerHTML = `$${subTotal}`;
 });