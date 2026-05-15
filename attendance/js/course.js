let lecturerSelect = document.getElementById('lecturerSelect');
firebase.database().ref("userDetails").once("value", function(snapshot) {
    lecturerSelect.innerHTML = '<option disabled selected value="">Select Lecturer</option>';
    snapshot.forEach(function(childSnapshot) {
        let data = childSnapshot.val()
        if(data.Role == "Admin" && data.Status == "active"){
            let option = document.createElement("option");
            option.value = data.Email;
            option.textContent = data.FirstName 
            lecturerSelect.appendChild(option)
        }
        })
})
//venue select
let venueSelect = document.getElementById('venueSelect');
firebase.database().ref("GpsVenus").once("value", function(snapshot) {
    venueSelect.innerHTML = '<option disabled selected value="">Select Venue</option>';
    snapshot.forEach(function(childSnapshot) {
        let data = childSnapshot.val()  
        if(data.Status == "active"){
            let option = document.createElement("option")
            option.value = data.VenueCode    
            option.textContent = data.VenueName
            venueSelect.appendChild(option)
        }
    })
})

let btnAddcourse = document.getElementById("btnaddcourse");

  // event
  btnAddcourse.addEventListener("click", () => {

    // inputs
    let coursename = document.getElementById("txtcoursename").value.trim();
    let coursecode = document.getElementById("txtcoursecode").value.trim();
    let lecturerselect = document.getElementById("lecturerSelect").value.trim();
    let venueselect = document.getElementById("venueSelect").value.trim();
    let statusselect = document.getElementById("courseStatus").value.trim();
    // select status for html dropdown 

    // get create by 
      let user = firebase.auth().currentUser;
      let createdby = user.email;
      let timenow = Date.now(); 

    // validation
    if (coursename == "") {
      alert("Enter course name");
      return;
    }
    // check if course code is empty the return code stops here
    if (coursecode == "") {
      alert("Enter course code");
      return;
    }
    // check if lecturer is empty the return code stops here
    if (lecturerselect === "") {            
      alert("Select a lecturer");
      return;
    }
    // check if latitude is empty the return code stops here
    if (venueselect === "") {
      alert("Select a venue");
      return;
    }
    // check if status is empty the return code stops here
    if (statusselect === "") {
      alert("Select a status");
      return;
    }

    // firebase insert
    firebase.database().ref("courses/" + coursecode).set({
      CourseName: coursename,
      CourseCode: coursecode,
      Lecturer: lecturerselect,
      Venue: venueselect,
      Status: statusselect,
      lecturerSelect: lecturerselect,
      venueSelect: venueselect,
      CreatedAt: timenow,
      CreatedBy: createdby
    })

    .then(() => {
      alert("Course added successfully");

      // clear inputs
      document.getElementById("txtcoursename").value = "";
      document.getElementById("txtcoursecode").value = "";
      document.getElementById("btnaddcourse").innerText = "Add new Course";
      document.getElementById("txtlecturer").innerText = "Add new lecturer";
      document.getElementById("txtvenue").innerText = "Add new venue";

      // reload courses table
      loadActiveCourses();
    })

    .catch((error) => {
      alert(error.message);
    });
  });

// Load and display active courses
function loadActiveCourses() {
  let tablebody = document.querySelector("table tbody");
  
  firebase.database().ref("courses").once("value", function(snapshot) {
    tablebody.innerHTML = "";
    
    snapshot.forEach(function(childSnapshot) {
      let data = childSnapshot.val();
      let key = childSnapshot.key;
      
      if(data.Status == "active") {
        tablebody.innerHTML += `
          <tr>
            <td>${data.CourseCode}</td>
            <td>${data.CourseName}</td>
            <td>${data.Venue}</td>
            <td>${data.Lecturer}</td>
            <td>${data.Action}</td>

            <td>
              <button class="btn btngreen">Open Session</button>
              <button class="btn btnred">Close course</button>
              <button class="btn btnblue">View attendance</button>
            </td>
          </tr>
        `;
      }
    });
  });
}

// Load courses when page loads
loadActiveCourses();

//count total courses
let lbcourses = document.getElementById('lbtotalcourses')
firebase.database().ref("courses").once("value").then(function(snapshot){
    let total= 0
    snapshot.forEach(function(childSnapshot){
        total ++
    })
    lbcourses.innerHTML = total
})

//count total active courses
let lbactivecourses = document.getElementById('lbtotalactivecourses')
firebase.database().ref("courses").once("value",function(snapshot){
    let total= 0
    snapshot.forEach(function(childSnapshot){
        let data = childSnapshot.val()
        if(data.Status == "active"){
            total ++
        }
    })
    lbactivecourses.innerHTML = total
})

//count total inactive courses
let lbapprovals = document.getElementById('lbapprovals')
firebase.database().ref("userDetails").once("value",function(snapshot){
    let total= 0
    snapshot.forEach(function(childSnapshot){
        let data = childSnapshot.val()
        if(data.Status == "inactive"){
            total ++
        }
    })
    lbapprovals.innerHTML = total
})
//count total inactive courses
let lbinactive = document.getElementById('lbinactivecourses')
firebase.database().ref("userDetails").once("value").then(function(snapshot){
    let total= 0
    snapshot.forEach(function(childSnapshot){
        let data = childSnapshot.val()
        if(data.Status == "inactive"){
            total ++
        }
    })
    lbinactive.innerHTML = total
})



