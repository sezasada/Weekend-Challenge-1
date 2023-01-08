console.log('in js');

$(function () {
    //setting up the click handlers.
    $('#submit-button').on('click', addEmployee);

    // adding delete button call
    $('#employees').on('click', '.delete', deleteEmployees);

    // setting initial salary value to 0;
    annualSalary = 0;
    $('#total-monthly').text(annualSalary);
});

function addEmployee() {

    // creating an object for employees
    const employeeObject = {
        firstName: $('#first-name').val(),
        lastName: $('#last-name').val(),
        id: $('#id').val(),
        title: $('#title').val(),
        annualSalary: $('#annual-salary').val(),
    };

    //clearing inputs
    $('#first-name').val('');
    $('#last-name').val('');
    $('#id').val('');
    $('#title').val('');
    $('#annual-salary').val('');

    // appending the object values into the table.
    $(`#employees`).append(`
    <tr>
        <td>${employeeObject.firstName}</td>
        <td>${employeeObject.lastName}</td>
        <td>${employeeObject.id}</td>
        <td>${employeeObject.title}</td>
        <td>${employeeObject.annualSalary}</td>
        <td><button class="delete">Delete</button></td>
    </tr>
    `);
    // making the annual salary value increment by its new value.
    // setting total monthly equal to the annual salary / 12 months. 
    annualSalary += Number(employeeObject.annualSalary);
    totalMonthly = annualSalary / 12;

    $('#total-monthly').text(totalMonthly);
    // if total monthly is more than 20,000, the background color will be red.
    if (totalMonthly > 20000) {
        $('#total-monthly').css('background-color', 'red');
    } 

}
// function that deletes a table row when clicked
function deleteEmployees(event) {
    $(event.target).closest('tr').remove();
}
