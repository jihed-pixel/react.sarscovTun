import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import FormInput from "../../Form/FormInput";
import FormButton from "../../Form/FormButton";
import FormButton12 from "../../Form/FormButton12";
import * as actions from "../../../Actions/medicalService";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from 'react-native';
import { DatePicker } from '@assenti/rui-components';
import '@assenti/rui-components/css/index.css';
import Container from '@material-ui/core/Container';
import ParticlesBg from "particles-bg";
import '../home.css';
import pop from "../../img/pop.png";
let config = {
      num: [4, 7],
      rps: 0.1,
      radius: [5, 40],
      life: [1.5, 3],
      v: [2, 3],
      tha: [-50, 50],
      alpha: [0.6, 0],
      scale: [.1, 0.9],
      position: "all",
      color: [ "#ff0000"],
      cross: "dead",
      random: 10
    };

const PriseAINS1 = (props) => {

  const [dose, setDose] = useState(0.0)
  const [duree, setDuree] = useState(0)
  const [molecule, setMolecule] = useState("")
  const [date, setDate] = useState()

  var handleDoseChange = (text) => {
    setDose(text)
  }
  var handleDureeChange = (text) => {
    setDuree(text)
  }
  var handleMoleculeChange = (text) => {
    setMolecule(text)
  }

  var handleSubmit = (e) => {
    var values = {
      antecedent: "PriseAINS",
      dose: dose,
      molecule: molecule,
      duree: duree,
      datePrise: date
    }
    e.preventDefault();
    console.log(values)
    props.antecedentsMedicaux(props.patientList["cin"], values)
    props.navigation.navigate("AddAntecendentsMedicaux1")
  }




  return (
    <div class="big">
  
    <div class="d-flex md-0  py-0 ">
    <img src={pop} />
    </div>
    <div class="ggii2">
<Container >
      <View style={tailwind(' items-center ')} >
        <Text style={tailwind('text-gray-700 font-bold py-2 text-xl')}>Prise récentes d'AINS</Text>

        <FormInput placeholder="Dose " type="decimal-pad"  type="number"  onChangeText={handleDoseChange} />
        <FormInput placeholder="Molecule" onChangeText={handleMoleculeChange} />
        <FormInput placeholder="Duree" type="number-pad" onChangeText={handleDureeChange} />
        <Text style={tailwind('text-gray-700 py-2')}>Date de prise</Text>
        <DatePicker
        color="primary"
        placeholder="YYYY-MM-DD"
        value={date}
        clearable
        minDate="1920-05-01"
        maxDate={new Date()}
        onDate={(date) => {
        setDate(date)
        }}
        onClear={() => setDate('')}
        width={250}
        onChange={(value) => setDate(value)}/>
        <View style={styles.row}>
          <FormButton12 title="Retour" onPress={() => { props.navigation.navigate("AddAntecendentsMedicaux1") }} />
          <FormButton12 title="Enregister" onPress={handleSubmit} />

        </View>
      </View>
      
      </Container>
      </div>
     


</div>
  );
};

const mapStateToProps = (state) => ({
  patientList: state.medicalService.patientList
});
const mapActionToProps = {

  antecedentsMedicaux: actions.antecedentsMedicaux
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2193b0',
  },
  row: {
    flex: 1,
    flexDirection: "row",
    padding: 10
  },
});
export default connect(mapStateToProps, mapActionToProps)(PriseAINS1);
