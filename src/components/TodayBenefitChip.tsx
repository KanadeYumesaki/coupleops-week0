import React,{useState}from 'react';
import{log}from'../lib/events';
function day(){return new Date().toISOString().slice(0,10);}export default function TodayBenefitChip(){
const[shown,setShown]=useState(!localStorage.getItem('co_tb_'+day()));if(!shown)return null;
return(<button onClick={()=>{localStorage.setItem('co_tb_'+day(),'1');log('today_benefit_marked');setShown(false);}}>✨ 気持ちが軽くなった</button>);
}