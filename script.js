console.log('in js');

$(function () {
    //setting up the click handlers.
    $('#submit-button').on('click', addEmployee);

    // adding delete button call
    $('#employees').on('click', '.delete', deleteEmployees);


});

function addEmployee() {

    // creating an object for employees
    const employeeObject = {
        firstName: $('#first-name').val(),
        lastName: $('#last-name').val(),
        id: $('#id').val(),
        title: $('#title').val(),
        annualSalary: $('#annual-salary').val()
    };

    //clearing inputs
    $('#first-name').val('');
    $('#last-name').val('');
    $('#id').val('');
    $('#title').val('');
    $('#annual-salary').val('');

    let rowClass = 'small-salary';
    if (Number(employeeObject.annualSalary) > 20000) {
        rowClass = 'big-salary';
    }

    $(`#employees`).append(`
    <tr class="${rowClass}">
        <td>${employeeObject.firstName}</td>
        <td>${employeeObject.lastName}</td>
        <td>${employeeObject.id}</td>
        <td>${employeeObject.title}</td>
        <td>${employeeObject.annualSalary}</td>
        <td><button class="delete">Delete</button></td>
    </tr>
    `);
}

function deleteEmployees(event) {
    $(event.target).closest('tr').remove();}