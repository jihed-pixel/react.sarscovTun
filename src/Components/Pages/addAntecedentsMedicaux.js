import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import FormButton from "../Form/FormButton";
import FormButton2 from "../Form/FormButton2";
import * as actions from "../../Actions/medicalService";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from 'react-native';
//import 'localstorage-polyfill';
import Container from '@material-ui/core/Container';
import ParticlesBg from "particles-bg";
import './home.css';
import ml from "../img/ml.png";


const AddAntecendentsMedicaux = (props) => {
  const [display, setDiplay] = useState(false);
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
  const [nextPath, setNextPath] = useState("PathRespChronique")

  var handleAntecedentChange = (data) => {
      setNextPath(data.target.value)
  }
  return (
    <div class="big">
  
    <div class="d-flex md-0  py-0 ">
    <img src={ml} />
    </div>
    <div class="nal">
          
          <Container >
      <View style={tailwind(' items-center ')} >


        <View style={tailwind("py-8")} >
        <div  onChange={handleAntecedentChange}>

      <div>  <input type="radio" value="PathRespChronique" name="gender" /> <Text style={tailwind('text-gray-700 py-2')}>Pathologie respiratoire chronique ?</Text></div>
      <div>  <input type="radio" value="Cardiopathies" name="gender" /> <Text style={tailwind('text-gray-700 py-2')}>Cardiopathies ?</Text></div>
      <div>  <input type="radio" value="TrRythCardiaque" name="gender" /> <Text style={tailwind('text-gray-700 py-2')}>Trouble du rythme cardiaque ?</Text></div>
      <div>  <input type="radio" value="HTA" name="gender" /> <Text style={tailwind('text-gray-700 py-2')}>HTA ?</Text></div>
      <div>  <input type="radio" value="Diabete" name="gender" /> <Text style={tailwind('text-gray-700 py-2')}>Diab??te ?</Text> </div>
      <div>   <input type="radio" value="InsRenaleChro" name="gender" /> <Text style={tailwind('text-gray-700 py-2')}>Insuffisance r??nale chronique ?</Text></div>
      <div>   <input type="radio" value="AVC" name="gender" /> <Text style={tailwind('text-gray-700 py-2')}>AVC ? </Text></div>
      <div>   <input type="radio" value="Retinopathie" name="gender" /> <Text style={tailwind('text-gray-700 py-2')}>R??tinopathie ?</Text></div>
      <div>   <input type="radio" value="ATCDchir" name="gender" /> <Text style={tailwind('text-gray-700 py-2')}>ATCD chirugicaux ?</Text></div>
      <div>   <input type="radio" value="Grossesse" name="gender" /> <Text style={tailwind('text-gray-700 py-2')}>Grossesse en cours ?</Text></div>
      <div>   <input type="radio" value="PriseAINS" name="gender" /> <Text style={tailwind('text-gray-700 py-2')}>Prise r??cente d'AINS ?</Text></div>
      <div>   <input type="radio" value="Immunosuppreseur" name="gender" /> <Text style={tailwind('text-gray-700 py-2')}>Traitement immunosuppresseur ?</Text></div>
      <div>   <input type="radio" value="AutresATCD" name="gender" /> <Text style={tailwind('text-gray-700 py-2')}>Autres ATCD ?</Text></div>

      </div>
        </View>
        <View style={styles.row}>
          <FormButton2 title="Retour" onPress={() => { props.navigation.navigate("AntecendentsMedicaux") }} />
          <FormButton2 title="Suivant" onPress={() => { props.navigation.navigate(nextPath) }} />
        </View>
      </View>
      </Container>
</div>
<ParticlesBg type="cobweb" config={config} bg={true} />
</div>
  );
};

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row",
    padding: 10
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2193b0',
  },

});
const mapStateToProps = (state) => ({

  patientList: state.medicalService.patientList
});
const mapActionToProps = {

};

export default connect(mapStateToProps, mapActionToProps)(AddAntecendentsMedicaux);
