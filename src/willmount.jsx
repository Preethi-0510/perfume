import React from 'react';
class Lifecycle extends React.Component
{
constructor(){
 super();
 this.state={value:'Welcome to',name:'PerfumeAddiction'}
 }
 componentWillMount()
 {
    setTimeout(() =>{
this.setState({value:"Welcome To PerfumeAddiction"})},5000)
 alert('Welcome To PerfumeAddiction');
 }
 render(){
 return<h1>{this.state.value} {this.state.name}</h1>
 }
 componentDidMount()
 {
 setTimeout(() =>{
this.setState({value:"Thank You"})},5000)
 }
}
export default Lifecycle;



