document.addEventListener('DOMContentLoaded', (e) => {
    // set the default focus to be on the Name input:
    document.getElementById('name').focus();

    // set the "other" job role option to be hidden by default:
    document.getElementById('other-job-role').style.display = 'none';

    // display the other job role option only if the correct option is selected:
    const otherRoleOption = document.querySelector('#title')[6];
    const jobOptionsList = document.querySelectorAll('#title');
    // listener to display 'other' input if selected:
    jobOptionsList.addEventListener('change', (e) => {
        let selected = jobOptionsList.options[jobOptionsList.selectedIndex].value;
        if(selected == other) {
            console.log("Other Selected!");
        }
    });
    
});