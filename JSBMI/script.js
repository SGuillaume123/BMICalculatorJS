function calculateBmi() 
{
    let weight = document.getElementById('weight').value
    let height = document.getElementById('height').value

    let bmi = (weight / (height * height) * 703)
    document.getElementById('heading').innerHTML = 'Your BMI is :'
    document.getElementById('bmi-output').innerHTML = bmi.toFixed(2)
    if (bmi <= 18.5) 
    {
        document.getElementById('message').innerHTML = 'You are underweight'
    }
    else if (bmi <= 24.9) 
    {
        document.getElementById('message').innerHTML = 'You are healthy weight'
    }
    else if (bmi <= 34.9) 
    {
        document.getElementById('message').innerHTML = 'You are obese'
    }
    else
    {
        document.getElementById('message').innerHTML = 'You are extremely obese'
    }
}
function reload() 
{
    window.location.reload()
}