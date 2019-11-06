# quantity-selector
Just add a division on html

$('.deneme').createQauntity({
            inputClass: 'deneme',
            id: ["adult", "child", "infant"],
        });     
        
You can add class yo input and you can add quantities. 

Than you just add options these quantities like:

$('#adult').quantity({
            text: "Adult",
            textcolor: "#FF0000",
            subtextcolor: "#c1c1c1",
            setDefaultValue: "2",
            setLowLimit: "0",
            setTopLimit: "10",
        });
              
For everyone


Methods
-text: Add a main text
-textcolor: change main text color
-subText: Add a subtext
-subtextcolor: change subtext color
-setDefaultValue: You can set default value
-setLowLimit: You can set minimum limit for selector
-setTopLimit: You can set maximum limit for selector

