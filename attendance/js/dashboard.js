
//count total users
let lbtotalusers = document.getElementById('lbtotalusers')
firebase.database().ref("userDetails").once("value").then(function(snapshot){
    let total= 0    
    snapshot.forEach(function(childSnapshot){
        let data = childSnapshot.val()
        total ++
    })
    lbtotalusers.innerHTML = total
}).catch(function(error){
    console.log(error)
    lbtotalusers.innerHTML = '0'
})  




//count total students
let lbtotalstudents = document.getElementById('lbtotalstudents')
firebase.database().ref("userDetails").once("value",function(snapshot){
    let total= 0
    snapshot.forEach(function(childSnapshot){
        let data = childSnapshot.val()
        if(data.Role == "Student"){
            total ++
        }
    })
   lbtotalstudents.innerHTML = total 
})

//count total courses
let lbcourses = document.getElementById('lbcourses')
firebase.database().ref("courses").once("value",function(snapshot){
    let total= 0
    snapshot.forEach(function(childSnapshot){
        let data = childSnapshot.val()
        total ++
    })
    lbcourses.innerHTML = total
})

//count total lecturers
let lblecturers = document.getElementById('lblecturers')
firebase.database().ref("userDetails").once("value",function(snapshot){
    let total= 0
    snapshot.forEach(function(childSnapshot){
        let data = childSnapshot.val()
        if(data.Role == "Admin"){
            total ++
        }
    })
    lblecturers.innerHTML = total
})
//approvals all account that are suspended
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




