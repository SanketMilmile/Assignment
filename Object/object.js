function call(){
    const employee = {
        "name" : "Sanket",
        "Designation" : "Associate",
        "CompanyName" : "Perficient",
        "address" : {
            "plotNo" : "27",
            "street" : "Ganpati Nagar"
        }

    }

    document.getElementById("calling_obj").innerHTML = "Name : " + employee.name + ". His Designation is " +employee.Designation + " . company name is " + employee.CompanyName + ". His personal address is " +employee.address.plotNo + ", " + employee.address.street;
    
    
}