const isAuthentication = require("../../middlewares/isAuthentication.middleware");
const database = require("../../services/database");

const viewAllCandidates = require("express").Router();

viewAllCandidates.get("/job_app_ajax/candidates/", isAuthentication,async(request, response)=>{
    let db = new database(process.env.DB_DATABASE);
    let candidates = await db.executeQuery("SELECT id, first_name, last_name, designation, email, phone_no, gender FROM candidate_masters1;");
    let table = {
        name: "table1",
        data: candidates,
        displayRecord: 2,
        headerClass: 'bg-primary',
        buttonClass: 'btn btn-outline-primary m-auto',
        inputClass: 'form-control border-1 border-primary',
        tableClass: 'table',
        header:{
            id: 'Candidate ID',
            first_name: 'First name',
            last_name: 'Last name',
            designation: 'Designation',
            email: 'Email ID',
            phone_no: 'Contact No.',
            gender: 'Gender'
        },
        operation:{
            view: ['job_app_ajax/candidate', "id", "View"],
            update: ['job_app_ajax/update_candidate', "id", "Edit"],
            delete: ['job_app_ajax/delete', "id", "Remove"]
        }
    }

    response.render("job_app_ajax/view", {table: table});
})

module.exports = viewAllCandidates;