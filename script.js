$(() => {
    const details = [
        //First Year, First Semester A.Y. 2022-2023
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
         //First Year, Second Semester A.Y. 2022-2023
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
         //Second Year, First Semester A.Y. 2023-2024
         ,{
            "course": "ANIMUL",
             "description": "Animation and Multimedia",
             "unit": "3.0",
             "grade": "1.90",
             "remarks": "Passed",
             "term": "First Semester A.Y. 2023-2024", 
         }
         ,{
            "course": "HUMCOM",
             "description": "Human Computer Interaction",
             "unit": "3.0",
             "grade": "1.50",
             "remarks": "Passed",
             "term": "First Semester A.Y. 2023-2024", 
         }
         ,{
            "course": "DASTRU",
             "description": "Data Structures and Algorithms",
             "unit": "3.0",
             "grade": "1.30",
             "remarks": "Passed",
             "term": "First Semester A.Y. 2023-2024", 
         }
         ,{
            "course": "NETWRK",
             "description": "CCNA Exploration: Network Fundametals",
             "unit": "3.0",
             "grade": "2.20",
             "remarks": "Passed",
             "term": "First Semester A.Y. 2023-2024", 
         }
         ,{
            "course": "PEDUC3",
             "description": "Physical Activities Towards Health and Fitness 3",
             "unit": "2.0",
             "grade": "1.30",
             "remarks": "Passed",
             "term": "First Semester A.Y. 2023-2024", 
         }
         ,{
            "course": "UNDSLF",
             "description": "Understanding the Self",
             "unit": "3.0",
             "grade": "1.20",
             "remarks": "Passed",
             "term": "First Semester A.Y. 2023-2024", 
         }
         ,{
            "course": "GEEL02",
             "description": "General Education Elective 2",
             "unit": "3.0",
             "grade": "1.60",
             "remarks": "Passed",
             "term": "First Semester A.Y. 2023-2024", 
         }
         //Second Year, Second Semester A.Y. 2023-2024
         ,{
            "course": "INMANA",
             "description": "Information Management",
             "unit": "3.0",
             "grade": "2.50",
             "remarks": "Passed",
             "term": "Second Semester A.Y. 2023-2024", 
         }
         ,{
            "course": "EVEDRI",
             "description": "Event-Driven Programming",
             "unit": "3.0",
             "grade": "2.80",
             "remarks": "Passed",
             "term": "Second Semester A.Y. 2023-2024", 
         }
         ,{
            "course": "PROEL1",
             "description": "Professional Elective 1",
             "unit": "3.0",
             "grade": "2.10",
             "remarks": "Passed",
             "term": "Second Semester A.Y. 2023-2024", 
         }
         ,{
            "course": "PEDUC4",
             "description": "Physical Activities Towards Health and Fitness 4",
             "unit": "2.0",
             "grade": "1.30",
             "remarks": "Passed",
             "term": "Second Semester A.Y. 2023-2024", 
         }
         ,{
            "course": "TECHNO",
             "description": "Technopreneurship",
             "unit": "3.0",
             "grade": "1.70",
             "remarks": "Passed",
             "term": "Second Semester A.Y. 2023-2024", 
         }
         ,{
            "course": "CONWOR",
             "description": "The Contemporary World",
             "unit": "3.0",
             "grade": "1.90",
             "remarks": "Passed",
             "term": "Second Semester A.Y. 2023-2024", 
         }
         //Third Year, First Semester A.Y. 2024-2025
         ,{
            "course": "PROEL2",
             "description": "Professional Elective 2",
             "unit": "3.0",
             "grade": "",
             "remarks": "In progress",
             "term": "First Semester A.Y. 2024-2025", 
         }
         ,{
            "course": "WEBTEC",
             "description": "Web Technology",
             "unit": "3.0",
             "grade": "",
             "remarks": "In progress",
             "term": "First Semester A.Y. 2024-2025", 
         }
         ,{
            "course": "MOBAPP",
             "description": "Mobile Application",
             "unit": "3.0",
             "grade": "",
             "remarks": "In progress",
             "term": "First Semester A.Y. 2024-2025", 
         }
         ,{
            "course": "SOFENG",
             "description": "Software Engineering",
             "unit": "3.0",
             "grade": "",
             "remarks": "In progress",
             "term": "First Semester A.Y. 2024-2025", 
         }
         ,{
            "course": "RESMET",
             "description": "Research Methods in IT",
             "unit": "3.0",
             "grade": "",
             "remarks": "In progress",
             "term": "First Semester A.Y. 2024-2025", 
         }
         ,{
            "course": "SYSTIN",
             "description": "System Integration and Architecture",
             "unit": "3.0",
             "grade": "",
             "remarks": "In progress",
             "term": "First Semester A.Y. 2024-2025", 
         }
         //Third Year, Second Semester
         ,{
            "course": "CPSTON1",
             "description": "Capstone Project 1",
             "unit": "3.0",
             "grade": "",
             "remarks": "",
             "term": "", 
         }
         ,{
            "course": "PROEL3",
             "description": "Professional Elective 3",
             "unit": "3.0",
             "grade": "",
             "remarks": "",
             "term": "", 
         }
         ,{
            "course": "PROEL4",
             "description": "Professional Elective 4",
             "unit": "3.0",
             "grade": "",
             "remarks": "",
             "term": "", 
         }
         ,{
            "course": "SYSTAD",
             "description": "System Administration and Maintenance",
             "unit": "3.0",
             "grade": "",
             "remarks": "",
             "term": "", 
         }
         ,{
            "course": "APPDEV",
             "description": "Application Development and Emerging Technologies",
             "unit": "3.0",
             "grade": "",
             "remarks": "",
             "term": "", 
         }
         ,{
            "course": "SOCPRO",
             "description": "Social and Professional Issues",
             "unit": "3.0",
             "grade": "",
             "remarks": "",
             "term": "", 
         }
         //Fourth Year, First Semester
         ,{
            "course": "OPESYS",
             "description": "Operating Systems",
             "unit": "3.0",
             "grade": "",
             "remarks": "",
             "term": "", 
         }
         ,{
            "course": "ITPRA1",
             "description": "IT Practicum 1 (250 Hours)",
             "unit": "5.0",
             "grade": "",
             "remarks": "",
             "term": "", 
         }
         ,{
            "course": "CPSTON2",
             "description": "Capstone Project 2",
             "unit": "3.0",
             "grade": "",
             "remarks": "",
             "term": "", 
         }
         ,{
            "course": "INFASS",
             "description": "Information Assurance and Security",
             "unit": "3.0",
             "grade": "",
             "remarks": "",
             "term": "", 
         }
         //Fourth Year, Second Semester
         ,{
            "course": "PHIHIS",
             "description": "Readings in Philippine History",
             "unit": "3.0",
             "grade": "",
             "remarks": "",
             "term": "", 
         }
         ,{
            "course": "PLATEC",
             "description": "Platform Technologies",
             "unit": "3.0",
             "grade": "",
             "remarks": "",
             "term": "", 
         }
         ,{
            "course": "BUSANA",
             "description": "Business Analytics",
             "unit": "3.0",
             "grade": "",
             "remarks": "",
             "term": "", 
         }
         ,{
            "course": "ITPRA2",
             "description": "IT Practicum 2 (250 Hours)",
             "unit": "5.0",
             "grade": "",
             "remarks": "",
             "term": "", 
         }
         ,{
            "course": "ETHICS",
             "description": "Ethics",
             "unit": "3.0",
             "grade": "",
             "remarks": "",
             "term": "", 
         }
    ];
    //Displays the data
    details.forEach(item => {
        console.log(item);
        $("#table-with-data").append(
            `<tr>
                <td>${item["course"]}</td>
                <td>${item["description"]}</td>
                <td>${item["unit"]}</td>
                <td>${item["grade"]}</td>
                <td>${item["remarks"]}</td>
                <td>${item["term"]}</td>
            </tr>`
        )
    })





});