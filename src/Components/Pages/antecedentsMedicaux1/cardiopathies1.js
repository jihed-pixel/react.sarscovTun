import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import FormInput from "../../Form/FormInput";
import FormButton from "../../Form/FormButton";
import FormButton9 from "../../Form/FormButton9";
import * as actions from "../../../Actions/medicalService";
import { connect } from "react-redux";
import {View, Text, StyleSheet } from 'react-native';
import Container from '@material-ui/core/Container';
import ParticlesBg from "particles-bg";
import '../home.css';
import vv from "../../img/web08.png";
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



const Cardiopathies1 = (props) => {

  const [anciennete, setAnciennete] = useState(0.0);
  const [traitement, setTraitement] = useState(0);
  const [equilibre, setEquilibre] = useState(true);

  var handleAnciennteChange = (text) => {
    setAnciennete(text)
  }
  var handleTraitementChange = (text) => {
    setTraitement(text)
  }
  var handleEquilibreChange = (data) => {
      setEquilibre(data.target.value)
  }
  var handleSubmit = (e) => {
    var values = {
      antecedent: "Cardiopathies",
      anciennete: anciennete,
      traitement: traitement,
      equilibre: equilibre
    }
    e.preventDefault();
    //console.log(values)
    props.antecedentsMedicaux(props.patientList["cin"], values)
    props.navigation.navigate("AddAntecendentsMedicaux1")
  }




  return (
    <div class="big">
  
    <div class="d-flex md-0  py-0 ">
    <img src={vv} />
    </div>
    <div class="bg24">
<Container >
      <View style={tailwind(' items-center ')} >
        <Text style={tailwind('text-gray-700 font-bold py-2 text-xl')}>Cardiopathies</Text>

        <FormInput title="Anciennet√©" placeholder="Anciennet√©" onChangeText={handleAnciennteChange} type="decimal-pad"  type="number"  />
        <FormInput title="Traitement" placeholder="Traitement" onChangeText={handleTraitementChange} />

        <View style={styles.row}>
        <div  onChange={handleEquilibreChange}>
        <Text style={tailwind('text-gray-700 py-2 items-center')}>Equilibr√©?</Text>
        <input type="radio" value="true" name="gender" /> <Text style={tailwind('text-gray-700 py-2 items-center')}>Oui</Text>
        <input type="radio" value="false" name="gender" /> <Text style={tailwind('text-gray-700 py-2 items-center')}>Non</Text>
      </div>

        <View style={styles.row}>
          <FormButton9 title="Retour" onPress={() => { props.navigation.navigate("AddAntecendentsMedicaux1") }} />
          <FormButton9 title="Enregister" onPress={handleSubmit} />

        </View>


</View>
      </View>
     
      </Container>
      </div>

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
const mapStateToProps = (state) => ({
  patientList: state.medicalService.patientList
});
const mapActionToProps = {

  antecedentsMedicaux: actions.antecedentsMedicaux
};

export default connect(mapStateToProps, mapActionToProps)(Cardiopathies1);
