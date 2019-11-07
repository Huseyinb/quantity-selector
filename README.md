# quantity-selector

This selector easy to use

# Step 1

Just add a division on html

# Step 2
$('.deneme').createQauntity({
            inputClass: 'deneme',
            id: ["adult", "child", "infant"],
        });     
        
You can add class yo input and you can add quantities. 

# Step 3
Than you just add options these quantities like:

$('#adult').quantity({
            text: "Adult",
            textcolor: "#FF0000",
            subtextcolor: "#c1c1c1",
            setDefaultValue: "2",
            setLowLimit: "0",
            setTopLimit: "10",
        });
              
For everyone. You can change most of options.

Methods using:

-text: Add a main text  e.('Main Text')

-textcolor: change main text color   e.('#fff')

-subText: Add a subtext    e.('Sub Text')

-subtextcolor: change subtext color   e.('#000')

-setDefaultValue: You can set default value   e.('10')

-setLowLimit: You can set minimum limit for selector  e.('0')

-setTopLimit: You can set maximum limit for selector  e.('20')

# Step 4 (optional)
İf you want to value of selector you just write this code  $('adult').qVal();

# Example
![ss](https://user-images.githubusercontent.com/5729779/68370677-1afbae00-014e-11ea-9e2c-e9b27793e495.PNG)


