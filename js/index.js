let themes = document.getElementsByClassName('theme');
let themelink = document.getElementById('themelink');
let types = document.getElementsByClassName('type')

let theme = localStorage.getItem('theme')

if(theme == null)
{
    ThemeChange('theme1')
}
else{
    ThemeChange(theme)
}
for(let i=0;i<themes.length;i++)
{
    themes[i].addEventListener('click',function(){
        console.log('button is cliked now');
        let themevalue = this.dataset.themevalue;
        console.log(themevalue);
        ThemeChange(themevalue);
    })
}

function ThemeChange(value)
{
    if(value=="theme1")
    {
        themelink.href ="css/theme1.css";
    }
    if(value=="theme2")
    {
        themelink.href ="css/theme2.css";
    }
    if(value=="theme3")
    {
        themelink.href ="css/theme3.css";
    }
    if(value=="theme4")
    {
        themelink.href ="css/theme4.css";
    }
    if(value=="theme5")
    {
        themelink.href ="css/theme5.css";
    }
    if(value=="theme6")
    {
        themelink.href ="css/theme6.css";
    }

    localStorage.setItem('theme',value)
   
}

// Filter Menue Logic Goes here

for(let i=0 ; i<types.length ; i++)
{
    types[i].addEventListener('click',function(){
        for(let j=0;j<types.length;j++)
        {
            types[j].classList.remove('active');
        }
        types[i].classList.add('active');
    })
}





