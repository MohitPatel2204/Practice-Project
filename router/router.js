const getPost = require("../app/controllers/api_call_json.controller/getPost.controller");
const getPosts = require("../app/controllers/api_call_json.controller/getposts.controller");
const attendance = require("../app/controllers/attendance_filter/attendance.controller");
const getAttendanceOperation = require("../app/controllers/attendance_filter/getAttendanceOperation.contoller");
const clientEnvVariable = require("../app/controllers/clientEnvVariable.controller");
const student = require("../app/controllers/delimeter_filter.js/student.controller");
const dynamic_component = require("../app/controllers/dynamic_component.controller/dynamic_component.controller");
const errorPage = require("../app/controllers/error.controller");
const grid_filter = require("../app/controllers/grid_filter/grid_filter");
const home = require("../app/controllers/home.controller");
const { task1, task2 , task3 } = require("../app/controllers/html_ex.controller/tasks.controller");
const index = require("../app/controllers/index.controller");
const cubegame = require("../app/controllers/javascript_ex.controller/cubegame.controller");
const dynamicTable = require("../app/controllers/javascript_ex.controller/dynamicTable.controller");
const events = require("../app/controllers/javascript_ex.controller/events.controller");
const tic_tac_toe = require("../app/controllers/javascript_ex.controller/tic_tac_toe.controller");
const candidateAPI = require("../app/controllers/job_app_ajax.controller/candidate.controller");
const deleteCandidate = require("../app/controllers/job_app_ajax.controller/delete.controller");
const { candidateAddGet, candidateAddPost } = require("../app/controllers/job_app_ajax.controller/insert.controller");
const { candidateUpdateGet, candidateUpdatePost } = require("../app/controllers/job_app_ajax.controller/update.controller");
const viewAllCandidatesAjax = require("../app/controllers/job_app_ajax.controller/viewAllCandidates.controller");
const deleteData = require("../app/controllers/job_app_without_ajax.controller/deleteData.controller");
const fetchData = require("../app/controllers/job_app_without_ajax.controller/fetchData.controller");
const { insertGet, insertPost } = require("../app/controllers/job_app_without_ajax.controller/insert.controller");
const { updateGet, updatePost } = require("../app/controllers/job_app_without_ajax.controller/update.controller");
const viewAllCandidates = require("../app/controllers/job_app_without_ajax.controller/viewAllCandidates.controller");
const { registerForm, createPasswordGet, createPasswordPost } = require("../app/controllers/login.controller/createUser.controller");
const dashboard = require("../app/controllers/login.controller/dashboard.controller");
const { forgetPasswordForm, forgetPassword } = require("../app/controllers/login.controller/forgetPassword.controller");
const { loginUserGet, loginUserPost } = require("../app/controllers/login.controller/loginUser.controller");
const logout = require("../app/controllers/login.controller/logout.controller");
const { userGet, userPost, usersGet } = require("../app/controllers/login.controller/user.controller");
const menu = require("../app/controllers/menu.controller");
const allresult = require("../app/controllers/result.controller/allresult.controller");
const result = require("../app/controllers/result.controller/result.controller");
const { getCity, getCityWithID } = require("../app/controllers/state_city.controller/get_city.controller");
const getState = require("../app/controllers/state_city.controller/get_state.controller");
const stateCityForm = require("../app/controllers/state_city.controller/state_city_form.controller");
const { students, studentOperation } = require("../app/controllers/student_grid_pagination.controller.js/student.controller");
const convertor = require("../app/controllers/timezone_convertor.controller/convertor.controller");
const timezonesWithCities = require("../app/controllers/timezone_convertor.controller/timezonesWithCities.controller");
const { userjson, userjsonDisplay, userAddGet, userAddPost } = require("../app/controllers/userjson.controller/userjson.controller");
const formValidate = require("../middlewares/formValidate.middleware");
const isAuthentication = require("../middlewares/isAuthentication.middleware");
const { isValidPost, isValidGet } = require("../middlewares/isValid.middleware");
const validation = require("../middlewares/validation.middleware");

const routers = require("express").Router();
/* ========================================================
login module routers
=========================================================== */
routers.get("/createUser", registerForm);
routers.get("/password/:activationCode",createPasswordGet);
routers.post("/password/:activationCode", isValidPost, createPasswordPost)
routers.get("/forgetpassword", forgetPasswordForm)
routers.get("/forgetpassword/:username", forgetPassword)
routers.get("/login/", loginUserGet)
routers.post("/login/", loginUserPost)
routers.get("/user", isAuthentication,isValidPost, userGet)
routers.post("/user", userPost)
routers.get("/users", isValidGet, usersGet)
routers.get("/logout", logout);
routers.get("/dashboard", dashboard);
routers.get("/index", index);
routers.get("/clientEnvVariable", clientEnvVariable);
routers.get("/home", isAuthentication, home);
routers.get("/menu", isAuthentication, menu);

/* ========================================================
javascript ex. example routers
=========================================================== */
routers.get("/javascript_ex/cubegame", isAuthentication, cubegame);
routers.get("/javascript_ex/dynamictable", isAuthentication, dynamicTable);
routers.get("/javascript_ex/events", isAuthentication, events);
routers.get("/javascript_ex/tic_tac_toe", isAuthentication, tic_tac_toe);

/* ========================================================
json placeholder api call
=========================================================== */
routers.get("/json_app/post/:id", getPost);
routers.get("/json_app/posts", getPosts);


/* ========================================================
attendance fileter in month, year module router
=========================================================== */
routers.get("/attendance_filter/attendance/:operation", isAuthentication, getAttendanceOperation);
routers.get("/attendance_filter/attendance/", isAuthentication,attendance);


/* ========================================================
delimeter module router
=========================================================== */
routers.get("/student/delimeter", isAuthentication, student)

/* ========================================================
dynamic component module router
=========================================================== */
routers.get("/dynamic_component/", isAuthentication,dynamic_component);

/* ========================================================
student exam result module routers
=========================================================== */
routers.get("/allresult", isAuthentication, allresult);
routers.get("/result/:id", isAuthentication, result);

/* ========================================================
state city selection module routers
=========================================================== */
routers.get("/city", isAuthentication, getCity);
routers.get("/city/:state_id", isAuthentication, getCityWithID);
routers.get("/state", isAuthentication, getState);
routers.get("/state_city", isAuthentication, stateCityForm);

/* ========================================================
student grid pagination and order by module routers
=========================================================== */
routers.get("/student", isAuthentication, students);
routers.get("/student/:operation/:key/:order", isAuthentication, studentOperation);

/* ========================================================
timezone convetor order by module routers
=========================================================== */
routers.get("/time", isAuthentication, timezonesWithCities);
routers.get("/timezone_convertor", isAuthentication, convertor);

/* ========================================================
user json by module routers
=========================================================== */
routers.get("/userjson/", isAuthentication,userjson);
routers.get("/userjson/display", isAuthentication,userjsonDisplay);
routers.get("/userjson/add", isAuthentication,userAddGet);
routers.post("/userjson/add", isAuthentication,userAddPost);

/* ========================================================
grid filter module routers
=========================================================== */
routers.get("/grid_filter", isAuthentication,grid_filter);

/* ========================================================
job application without ajax by module routers
=========================================================== */
routers.get("/job_app_without_ajax/delete/:id", isAuthentication, deleteData);

routers.get("/job_app_without_ajax/fetch/:id", isAuthentication, fetchData);

routers.get("/job_app_without_ajax/insert", isAuthentication, insertGet);
routers.post("/job_app_without_ajax/insert", isAuthentication, insertPost)

routers.get("/job_app_without_ajax/update/:id", isAuthentication, updateGet);
routers.post("/job_app_without_ajax/update/:id", formValidate, isAuthentication, updatePost);

routers.get("/job_app_without_ajax/candidates/", isAuthentication, viewAllCandidates);

/* ========================================================
job application with ajax by module routers
=========================================================== */
routers.get("/job_app_ajax/candidate/:id", isAuthentication,candidateAPI);

routers.get('/job_app_ajax/delete/:id', isAuthentication,deleteCandidate);

routers.get("/job_app_ajax/insert_candidate", isAuthentication,candidateAddGet)
routers.post("/job_app_ajax/insert_candidate", isAuthentication,validation,candidateAddPost);

routers.get("/job_app_ajax/update_candidate/:id", isAuthentication,candidateUpdateGet);
routers.post("/job_app_ajax/update_candidate/:id", isAuthentication,validation,candidateUpdatePost);

routers.get("/job_app_ajax/candidates", viewAllCandidatesAjax);

/* ========================================================
html ex. by module routers
=========================================================== */
routers.get("/task1", isAuthentication,task1);
routers.get("/task2", isAuthentication, task2);
routers.get("/task3", isAuthentication, task3);

/* ========================================================
error page routers
=========================================================== */
routers.get("*", errorPage);

module.exports = routers;