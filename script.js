$(() => {
    let details = [];
    fetch("curriculum.json")
    .then((rawData)=> rawData.json())
    .then(({semesters, courses})=>{
    console.log(details);

    semesters.forEach(sem =>{
        $("#table-with-data").append(
            `<th colspan="7">${sem}</th>
            <tr>
                <th>Course</th>
                <th>Description</th>
                <th>Unit</th>
                <th>Grade</th>
                <th>Remarks</th>
                <th>Course</th>
                <th>Term</th>
            </tr>`
        )
        $("#table-with-data").append(
            `<tr class="${sem-head}">
                <td>${courses["course"]}</td>
                <td>${courses["des"]}</td>
                <td>${courses["unit"]}</td>
                <td>${courses["grade"]}</td>
                <td>${courses["remarks"]}</td>
                <td>${courses["course"]}</td>
                <td>${courses["term"]}</td>`
        );
    })
})





});