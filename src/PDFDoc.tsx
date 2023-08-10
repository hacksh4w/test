import { Document, Page, Image, Text, View, StyleSheet } from "@react-pdf/renderer";
import { FormValues } from "./types";
//import { MECLogo } from './assets/MECLogo.png'
import MECLogoImage from './assets/MECLogo.png'; 
// import {form} from './TryForm';'

//Define styles for PDF
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 20,
  }, 
  container: {
    flexDirection: 'row', // Display items side by side
    alignItems: 'center', // Align items vertically within the container
    marginBottom: 10,
  },
  section: {
    marginBottom: 20,
  },
  heading: {
    fontSize: 18,
    marginBottom: 10,
  },
  label: {
    fontSize: 12,
    marginBottom: 4,
  },
  value: {
    fontSize: 14,
  }, 
  /*
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  }, */
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Oswald'
  },
  author: {
    fontSize: 2,
    textAlign: 'center',
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
    fontFamily: 'Oswald'
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: 'justify',
    fontFamily: 'Times-Roman'
  },
  image: {
    width : 120,
    height : 90,
    marginVertical: 12,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
    color: 'grey',
  },
/*  mecName: {
  margin : 3,
  fontSize : 10,
  textAlign : 'right',
}, */
mecLogo : {
  width : 150,
  height : 90,
},
  picBox :{
    backgroundColor: '#f0f0f0',
    width: 120,
    height: 120,
    borderWidth: 1,
    borderColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    padding : 2,
    // align : 'right',

  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  }, 
 
});

{
  /*}   interface Field {
        label: string;
        value: string;
      } */
    }
interface PDFPageProps {
  inputValues: FormValues;
}

const someKeys = ['studName', 'email', 'caste', 'nativity', 'religion']
// Create a PDF document
const PDFDoc = ({ inputValues }: PDFPageProps) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.container}>
          <Text style={styles.heading}>DataSheet</Text>
          <Image //src = '#MECLogo' 
          src= { MECLogoImage } 
          style= {styles.mecLogo }
            />
        <View style={styles.picBox}>
          <Text> Please paste your passport size pic here</Text>
        </View>
        </View>
        <View>
          <Text style={styles.heading}>  {inputValues.studName}</Text>
        </View>
        <View style={styles.section}>
         {someKeys.map((key,index) => {
         {/* {Object.keys(inputValues).map((value, index) => { */}
            const values = Object.values(inputValues);
            return (
              <View key={index}>
                <Text style={styles.label}>{key}:</Text>
                <Text style={styles.value}>{`${values[index]}`}</Text>
              </View>
            );
          })}
        </View>
      </Page>
    </Document>
  );
};

export default PDFDoc;
