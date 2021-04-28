/*
Treehouse-Project-3---Interactive-Form
Nathaniel Boonzaaijer
*/

/*  TO DO:
    show user on page which input fields are invalid
    accessability
    code comments
    testing
*/

/*  BUGS:
    fix shirt options when theme is switched
    conflicting events still available after first click
*/

document.addEventListener('DOMContentLoaded', (e) => {
    // The Name Field:
    // set the default focus to be on the Name input:
    document.getElementById('name').focus();

    // set the "other" job role option to be hidden by default:
    otherJobRoleDisplay = document.getElementById('other-job-role');
    otherJobRoleDisplay.style.display = 'none';

    // Job Role Section:
    // display the other job role option only if the correct option is selected:  
    // listener to display 'other' input if selected:
    const jobOptionList = document.querySelector('#title');

    jobOptionList.addEventListener('change', (e) => {
        if (e.target.value === 'other') {
            otherJobRoleDisplay.style.display = 'list-item';
        } else if (e.target.value != 'other' && otherJobRoleDisplay.style.display == 'list-item') {
            otherJobRoleDisplay.style.display = 'none';
        }   
    });

    // T-Shirt Info Section:
	// only allow the user to see/choose a color until design has been chosen:
    shirtColorSelect = document.getElementById('shirt-colors');
    shirtColorSelect.style.display = 'none';
	// listen for design select, and display the color select, 
        //  with an available color option selected
	const shirtDesigns = document.getElementById('design');
	const colorOptions = document.getElementById('color');

    shirtDesigns.addEventListener('change', (e) => {
		shirtColorSelect.style.display = 'list-item';
        
		// only display colors associated with the selected design:
        if(e.target.value === 'js puns') {
            console.log('js puns selected');
            for(let i=1;i<=3;i++) {
                colorOptions[i].style.display = 'list-item';
            }
            for(let i=4;i<=6;i++) {
                colorOptions[i].style.display = 'none';
            }

        } else if(e.target.value === 'heart js') {
            console.log('heart js selected');
            for(let i=1;i<=3;i++) {
                colorOptions[i].style.display = 'none';
            }
            for(let i=4;i<=6;i++) {
                colorOptions[i].style.display = 'list-item';
            }
        } 
        // add something to switch invalid color selection:
        if(e.target.value == 'js puns' && colorOptions.selected.dataset.theme == 'heart js') {
            colorOptions.selected = colorOptions[1];
        } else if(e.target.value == 'heart js' && colorOptions.selected.dataset.theme == 'js puns') {
            colorOptions.selected = colorOptions[4];
        }
        
        // make above into single function:
        function switchColorOptions(designTheme) {
            
        }
        
    });  

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

    // Payment Info Section:
    const cardNumberInput = document.getElementById('cc-num');
    const paymentMethod = document.getElementById('payment'); 
    // credit card as default payment method
    paymentMethod[1].selected = 'selected';
    // after user has selected hide other payment options
    paymentMethod.addEventListener('change', (e) => {
        if(e.target.value != 'credit-card') {
            document.getElementById('credit-card').style.display = 'none';
        } else if(e.target.value == 'credit-card') {
            document.getElementById('credit-card').style.display = 'list-item';
        }
    });

    // Form Validation:
    const form = document.querySelector('form');

    function validateName(name) {
        const nameValid = /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(name);
        console.log(`name valid: ${nameValid}`);

        return nameValid;
    }

    function validateEmail(email) {
        const emailValid = /^[a-zA-Z0-9]+@+[a-z]+.com$/.test(email);
        console.log(`email valid: ${emailValid}`);
       
        return emailValid;
    }

    function validateActivities(activities) {
        let activitiesValid = false;
 
        if(activitiesChecked >= 1) {
            activitiesValid = true;
        }
        console.log(`activities valid: ${activitiesValid}`);
        
        return activitiesValid;
    }

    // Credit Card fields validation:
    function validateCCnum(ccNum) {
        const ccNumValid = /^[0-9]{16}$/.test(ccNum);
        console.log(`Card number valid: ${ccNumValid}`);

        return ccNumValid;
    }
    function validateCCzip(ccZip) {
        const ccZipValid = /^\d{5}$/.test(ccZip);
        console.log(`Zip code valid: ${ccZipValid}`);

        return ccZipValid;
    }
    function validateCCcvv(ccCVV) {
        const ccCVVvalid = /^[1-9]{1}[0-9]{2}$/.test(ccCVV);
        console.log(`CVV valid: ${ccCVVvalid}`);

        return ccCVVvalid;
    }
    function validateCCyear(ccYear) {
        let ccYearValid = false;
        if(isNaN(ccYear) == false) {
            ccYearValid = true;
        }
        console.log(`Exp year valid: ${ccYearValid}`);

        return ccYearValid;
    }
    function validateCCmonth(ccMonth) {
        let ccMonthValid = false;
        if(isNaN(ccMonth) == false) {
            ccMonthValid = true;
        }
        console.log(`Exp month valid: ${ccMonthValid}`);

        return ccMonthValid;
    }

    // event listener for form submission that will validate all user input:
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let nameValue = document.getElementById('name').value;
        let emailValue = document.getElementById('email').value;
        const activities = document.getElementById('activities-box');
        const paymentMethod = document.getElementById('payment');

        let ccNumValue = document.getElementById('cc-num').value;
        let ccZipValue = document.getElementById('zip').value;
        let ccCVVvalue = document.getElementById('cvv').value;
        let ccMonthValue = document.getElementById('exp-month').value;
        let ccYearValue = document.getElementById('exp-year').value;

        // name field validation:
        validateName(nameValue);
        // email field validation:
        validateEmail(emailValue);
        // register for activities section validation:
        validateActivities(activities);
        // credit card validation: 
        if(document.getElementById('payment').value == 'credit-card') {
            validateCCnum(ccNumValue);
            validateCCzip(ccZipValue);
            validateCCcvv(ccCVVvalue);
            validateCCyear(ccYearValue);
            validateCCmonth(ccMonthValue);
        }
 
    });

});