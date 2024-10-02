$(() => {
    const details = [
        {
            "course": "NSTP",
            "description": "Civic Welfare Training Service 1",
            "unit": "3.0",
            "grade": "1.20",
            "remarks": "Passed",
            "term": "First Semester A.Y. 2022-2023",
        }
        ,{
           "course": "SCITEC",
            "description": "Science, Technology, and Society",
            "unit": "3.0",
            "grade": "1.50",
            "remarks": "Passed",
            "term": "First Semester A.Y. 2022-2023", 
        }
        ,{
            "course": "INTCOM",
             "description": "Introduction to Computing",
             "unit": "3.0",
             "grade": "1.50",
             "remarks": "Passed",
             "term": "First Semester A.Y. 2022-2023", 
         }
    ];

    details.forEach(item => {
        console.log(item);
        $("#table-with-data").append(
            `<tr>
                <th>${item["course"]}</th>
                <th>${item["description"]}</th>
                <th>${item["unit"]}</th>
                <th>${item["grade"]}</th>
                <th>${item["remarks"]}</th>
                <th>${item["term"]}</th>
            </tr>`
        )
    })





});