import React from 'react'
import "./App.css"
const menuData=[{
  label:"Main  Menu 1",
  subMenu:[{label:"menu 1"},{label:"menu2",subMenu:[{label:"sub menu1",subMenu:[{label:"sub sub menu1",subMenu:[{label:"sub sub sub menu1"}]}]}]}]
},{
  label:"Main Menu 2",
  subMenu:[{label:"Menu 1"},{label:"Menu 2",subMenu:[{label:"sub menu1",subMenu:[{label:"sub sub menu1",subMenu:[{label:"sub sub sub menu1"}]}]}]}]
},
{
  label:" Main Menu 3",
  subMenu:[{label:"Menu 1"},{label:"Menu 2"},{label:"Menu 3"},{label:"Menu 4",subMenu:[{label:"sub menu1",subMenu:[{label:"sub sub menu1"}]}]}]
},
  {
label:"Main Menu 4",
subMenu:[{label:"Menu 1",
  subMenu:[{label:"sub Menu1"},{label:"sub Menu2",subMenu:[{label:"sub sub menu1",subMenu:[{label:"sub sub sub menu1"}]}]}]
}]
}]

function App() {
 const toggleSubmenu=(e)=>{
  e.stopPropagation();
  let submenu=e.target.querySelector("ul");

  if(!submenu)return;

  if(submenu.style.display === "none" || ! submenu.style.display){
    submenu.style.display = "block"
  }
  else{
    submenu.style.display ="none"
  }

 }

 const renderSubmenu=(subMenu)=>{
 return (
  <ul className='submenu'>
     {
    subMenu.map((item,index)=>(
      <li key={index} onClick={toggleSubmenu}>{item.label}
      {item.subMenu && renderSubmenu(item.subMenu)}
      
      </li>
      
    ))
   }
  </ul>
 )

 }
  return <>
<h1 className='nest'>Nested List Components</h1>
<div className='main'>
   {
    menuData.map((item,index)=>(
      <li key={index} onClick={toggleSubmenu}>{item.label}
      {item.subMenu && renderSubmenu(item.subMenu)}
      
      </li>
      
    ))
   }
</div>
  </>

}

export default App