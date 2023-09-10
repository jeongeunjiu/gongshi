import {Swipe,SwipeItem,NavBar, SwipeCell,Sticky,Tab,Tabs,  Form, Field, CellGroup,DropdownMenu, DropdownItem,Button,Icon, Uploader } from "vant";
//数组
let  plugins=[
    Swipe,SwipeItem,NavBar, SwipeCell,Sticky,Tab,Tabs,  Form, Field, CellGroup,DropdownMenu, DropdownItem,Button,Icon, Uploader
]
export default function  getVant(app){
    plugins.forEach((item)=>{
        return app.use(item)
    })
}
