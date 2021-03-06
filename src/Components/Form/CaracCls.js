import React from 'react';


import tailwind from 'tailwind-rn';
import { } from 'react-native';
import FormButton3 from "./FormButton3";
import { DatePicker } from '@assenti/rui-components';
import '@assenti/rui-components/css/index.css';
import { Text,View, StyleSheet } from 'react-native';


const CaracCls = (props) => {
  return (
    
<div style={tailwind("items-center")}>
<div><input type="date" data-date="" data-date-format="DD MMMM YYYY" onChange={(value) => props.setDateD(value)}/></div>
<div><input type="date" data-date="" data-date-format="DD MMMM YYYY" onChange={(value) => props.setDateF(value)}/></div>

        
        
 
<div><FormButton3 title="Enregistrer" onPress={props.onSubmit} /></div>
      
      </div>
  );
};
const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row",
    padding: 10
  },
});



export default CaracCls;
