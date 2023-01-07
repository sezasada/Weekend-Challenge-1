console.log('in js');

$(function () {
    //setting up the click handlers.
    $('#submit-button').on('click', addEmployee);
});

function addEmployee() {

    // creating an object for employees
    const employeeObject = {
        firstName: $('#first-name').val(),
        lastName: $('#last-name').val(),
        id: $('#id').val(),
        title: $('#title').val(),
        annualSalary: $('#annualSalary').val()
    };
}