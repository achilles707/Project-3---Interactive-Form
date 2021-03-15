document.addEventListener('DOMContentLoaded', (e) => {
    // set the default focus to be on the Name input:
    document.getElementById('name').focus();

    // set the "other" job role option to be hidden by default:
    document.getElementById('other-job-role').style.display = 'none';

    // display the other job role option only if the correct option is selected:
    
    const jobOptionOther = document.querySelector('#title')[6];
    console.log(jobOptionOther);
    // listener to display 'other' input if selected:
    jobOptionOther.addEventListener('change', (e) => {
        console.log("Other Selected!");
    });
    
});