import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { FormValues } from './types';

//Define styles for PDF 
const styles = StyleSheet.create ({ 
    page: {
        flexDirection: 'column',
        padding: 20,
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
    });  

   {/*}   interface Field {
        label: string;
        value: string;
      } */}
    
    interface PDFPageProps {
      inputValues: FormValues ;
    }

// Create a PDF document
const PDFDoc = ({ inputValues } : PDFPageProps ) => {
    return (
      <Document>
        <Page size="A4" style={styles.page}>
          <View>
            <Text style={styles.heading}> { inputValues.studName }
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.heading}>User Input</Text>
            {/*{ inputValues.map((field, index) => ( */}
              {Object.keys(inputValues).map((key, index) => (
              <View key={index}>
                <Text style={styles.label}>{key}:</Text>
                <Text style={styles.value}>{key}</Text>
              </View>
            ))}
          </View>
        </Page>
      </Document>
    );
  };

  export default PDFDoc;
  

