/**
 * Created by webmxj@163.com 2018/5/28.
 *
 */
import React,{Component} from "react";
export default class Home extends Component{
    constructor(props){
        super(props);
        fetch("/demo",{method:'GET'}).then(
            function(res){
                console.log(res);
                res.json().then(function(data){
                    console.log(data);
                });
            }
        )
    }
    render(){
        return (
            <div id="Home">
                首页
            </div>
        )
    }
}