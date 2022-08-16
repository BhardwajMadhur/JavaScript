//program 3
var student = {
    Name: "Madhur",
    Age: 20,
    Address:{
        city: "jaipur",
        state: "rajasthan",
        pincode: 302033
    },
    hobbies: "reading",

    details:function()
    {
        return this.Name + " " + this.Age + " " + this.Address +" "+ this.hobbies

    } 
}
console.log(student)