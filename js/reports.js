let totalAdmins = 0
let totalStudents = 0
firebase.database().ref("userDetails").once("value",function(snapshot){
    let total= 0
    snapshot.forEach(function(childSnapshot){
        let data = childSnapshot.val()
        if(data.Role == "Admin"){
            totalAdmins++
        }else{
            totalStudents++
        }
    })
    drawBarGraph()
})

function drawBarGraph() {
    const canvasforbargraph = document.getElementById('mybargraph')
    new Chart(canvasforbargraph, {
        type: 'bar',
        data: {
            labels: ['Admins', 'Students'],
            datasets: [{ 
                label: 'System Users',
                data: [totalAdmins, totalStudents],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    })
}

//courses piechart
let totalActiveCourses = 0
let totalInactiveCourses = 0
firebase.database().ref("courses").once("value",function(snapshot){
    let total= 0
    snapshot.forEach(function(childSnapshot){
        let data = childSnapshot.val()
        if(data.Status == "active"){
            totalActiveCourses++
        }else{
            totalInactiveCourses++
        }
    })
    drawPiechart()
})

function drawPiechart() {
    const canvasforpiechart = document.getElementById('mypiechart')
    new Chart(canvasforpiechart, {
        type: 'pie',
        data: {
            labels: ['Active Courses', 'Inactive Courses'],
            datasets: [{ 
                label: 'Courses',
                data: [totalActiveCourses, totalInactiveCourses],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    })
}

//lecturers doughnut chart
let totalActiveLecturers = 0
let totalInactiveLecturers = 0  
firebase.database().ref("userDetails").once("value",function(snapshot){
    let total= 0
    snapshot.forEach(function(childSnapshot){
        let data = childSnapshot.val()
        if(data.Role == "Admin"){
            if(data.Status == "active"){
                totalActiveLecturers++
            }
            else{
                totalInactiveLecturers++
            }
        }
    })
    drawDoughnutChart()
})

function drawDoughnutChart() {  
    const canvasfordoughnutchart = document.getElementById('mydoughnutchart')
    new Chart(canvasfordoughnutchart, {
        type: 'doughnut',
        data: {
            labels: ['Active Lecturers', 'Inactive Lecturers'],
            datasets: [{
                label: 'Lecturers',
                data: [totalActiveLecturers, totalInactiveLecturers],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    })


//students line chart
let totalActivestudents = 0
let totalInactivestudents = 0  
firebase.database().ref("userDetails").once("value",function(snapshot){
    let total= 0 
    snapshot.forEach(function(childSnapshot){
        let data = childSnapshot.val()
        if(data.Role == "Student"){
            if(data.Status == "active"){
                totalActivestudents++
            }
            else{
                totalInactivestudents++
            }
        }
    })
    drawLineChart()
})

function drawLineChart() {
    const canvasforlinechart = document.getElementById('mylinechart')
    new Chart(canvasforlinechart, {
        type: 'line',
        data: {
            labels: ['Active Students', 'Inactive Students'],
            datasets: [{ 
                label: 'Students',
                data: [totalActivestudents, totalInactivestudents],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    })
}
}
