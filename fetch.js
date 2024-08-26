document.getElementById('form').addEventListener('submit', async(event)=>{
event.preventDefault()
// prevent refreshing the page minus sending the data to the database

var name = document.getElementById('name').value
var email = document.getElementById('email').value
var phoneNumber = document.getElementById('phoneNumber').value

// var name = 'Kayla'
//var email = 'kmujuni@gmail.com'
// var phone = 0775678876

console.log(name)
console.log(email)
console.log(phoneNumber)

//package the data in JSON format
var data ={
    name: name,
    email: email,
    phoneNumber:phoneNumber
}
// var data = { name: 'Kayla', email:'kmujuni@gmail.com', phoneNumber: 0775678876}
try{
    //what runs when the function is successfully executed
    const response = await fetch('http://localhost:5000/api/orders', {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
    }
      )
      var result = await response.json()
      //temp
      console.log(result)
      //reload the page
      document.getElementById('form').reset()
}
catch (error){
            console.log(error)
}
})