$(() => {
    const details = [
        //First Semester A.Y. 2022-2023
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
         ,{
            "course": "COPRO1",
             "description": "Computer Programming 1",
             "unit": "3.0",
             "grade": "1.90",
             "remarks": "Passed",
             "term": "First Semester A.Y. 2022-2023", 
         }
         ,{
            "course": "COMPOP",
             "description": "Computer Operations: Office Productivity Software (MS Office)",
             "unit": "3.0",
             "grade": "1.60",
             "remarks": "Passed",
             "term": "First Semester A.Y. 2022-2023", 
         }
         ,{
            "course": "PEDUC1",
             "description": "Physical Activities Towards Health and Fitness 1",
             "unit": "3.0",
             "grade": "1.10",
             "remarks": "Passed",
             "term": "First Semester A.Y. 2022-2023", 
         }
         ,{
            "course": "JRIZAL",
             "description": "Life, Works and Writings of Jose Rizal",
             "unit": "3.0",
             "grade": "1.30",
             "remarks": "Passed",
             "term": "First Semester A.Y. 2022-2023", 
         }
         //Second Semester A.Y. 2022-2023
         ,{
            "course": "OOPROG",
             "description": "Object-Oriented Programming",
             "unit": "3.0",
             "grade": "1.70",
             "remarks": "Passed",
             "term": "Second Semester A.Y. 2022-2023", 
         }
         ,{
            "course": "ARTAPP",
             "description": "Art Appreciation",
             "unit": "3.0",
             "grade": "1.20",
             "remarks": "Passed",
             "term": "Second Semester A.Y. 2022-2023", 
         }
         ,{
            "course": "PURCOM",
             "description": "Purposive Communication",
             "unit": "3.0",
             "grade": "1.40",
             "remarks": "Passed",
             "term": "Second Semester A.Y. 2022-2023", 
         }
         ,{
            "course": "NSTP02",
             "description": "Civic Welfare Training Service 2",
             "unit": "3.0",
             "grade": "1.60",
             "remarks": "Passed",
             "term": "Second Semester A.Y. 2022-2023", 
         }
         ,{
            "course": "DSTRU01",
             "description": "Discrete Structures 1",
             "unit": "3.0",
             "grade": "2.00",
             "remarks": "Passed",
             "term": "Second Semester A.Y. 2022-2023", 
         }
         ,{
            "course": "PEDUC02",
             "description": "Physical Activities Towards Health and Fitness 2",
             "unit": "3.0",
             "grade": "1.00",
             "remarks": "Passed",
             "term": "Second Semester A.Y. 2022-2023", 
         }
         ,{
            "course": "COPRO02",
             "description": "Computer Programming 2",
             "unit": "3.0",
             "grade": "1.30",
             "remarks": "Passed",
             "term": "Second Semester A.Y. 2022-2023", 
         }
         ,{
            "course": "GEEL01",
             "description": "General Education Elective 1",
             "unit": "3.0",
             "grade": "1.80",
             "remarks": "Passed",
             "term": "Second Semester A.Y. 2022-2023", 
         }
         ,{
            "course": "MATMOD",
             "description": "Mathematics in the Modern World",
             "unit": "3.0",
             "grade": "1.50",
             "remarks": "Passed",
             "term": "Second Semester A.Y. 2022-2023", 
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