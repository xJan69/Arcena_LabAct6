$(() => {
    let details = [];
    fetch("curriculum.json")
    .then((rawData)=> rawData.json())
    .then(({Semesters, Courses})=>{
    console.log(details);

        Semesters.forEach(sem =>{
            $("#table-with-data").append(
                `<th colspan="7">${sem.description}</th>
                <tr>
                    <th>Course</th>
                    <th>Description</th>
                    <th>Unit</th>
                    <th>Grade</th>
                    <th>Remarks</th>
                    <th>Course</th>
                    <th>Term</th>
                </tr>`
            );
            $("#table-with-data").append(
                `<tr class="${sem}">
                    <td>${Courses["course"]}</td>
                    <td>${Courses["description"]}</td>
                    <td>${Courses["unit"]}</td>
                    <td>${Courses["grade"]}</td>
                    <td>${Courses["remarks"]}</td>
                    <td>${Courses["term"]}</td>
                </tr>`
            );
            console.log(sem);
        });
    });
});