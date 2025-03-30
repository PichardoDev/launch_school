let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let arr = [];

for (item in obj) {{
    if (obj[item].type === 'fruit') {
      arr.push(obj[item].colors.map(color => color[0].toUpperCase() + color.slice(1)));
     } else {
      arr.push(obj[item].size.toUpperCase());
    }
    }  
  }

  console.log(arr);