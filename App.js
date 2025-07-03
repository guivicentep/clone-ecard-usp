import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

import meImg from './assets/yo.jpg'
import qrCode from './assets/qr-code.png'
import barCode from './assets/barcode.png'

const App = () => {
  const [showBarcode, setShowBarcode] = useState(false);

  const toggleView = () => {
    setShowBarcode(!showBarcode);
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#E67E00" barStyle="light-content" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.eCardTitle}>e-Card</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity onPress={toggleView}>
            <View style={styles.headerIconContainer}>
              {showBarcode ? (
                <View style={styles.qrIconContainer}>
                  <MaterialIcons name="qr-code-2" size={24} color="black" />
                </View>
              ) : (
                <FontAwesome5 name="barcode" size={24} color="black" />
              )}
            </View>
          </TouchableOpacity>
          <Text style={styles.menuIcon}>⋮</Text>
        </View>
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        {/* USP Logo */}
        <View style={styles.logoContainer}>
          <Image 
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Webysther_20160310_-_Logo_USP.svg/200px-Webysther_20160310_-_Logo_USP.svg.png' }}
            style={styles.uspLogoImage}
            resizeMode="contain"
          />
          <Text style={styles.universityName}>Universidade de São Paulo</Text>
        </View>

        {/* Student Type */}
        <Text style={styles.studentType}>ALUNO</Text>

        {/* Student Photo */}
        <View style={styles.photoContainer}>
          <Image 
            source={meImg}
            style={styles.studentPhoto}
            resizeMode="cover"
          />
        </View>

        {/* Student Information */}
        <View style={styles.studentInfo}>
          <Text style={styles.studentName}>Guilherme Vicente Pereira</Text>
          <Text style={styles.studentId}>16617762</Text>
          <Text style={styles.institute}>Instituto de Matemática e Estatística</Text>
          <Text style={styles.degree}>GRADUAÇÃO</Text>
        </View>

        {/* QR Code or Barcode */}
        <View style={styles.qrContainer}>
          <View style={styles.qrCodeBox}>
            {showBarcode ? (
                <Image source={barCode} style={styles.barCodeImage} resizeMode="contain" />
            ) : (
              <Image 
                source={qrCode}
                style={styles.qrCodeImage}
                resizeMode="contain"
              />
            )}
          </View>
        </View>

        {/* Expiration Date or Validity */}
        <Text style={styles.expirationText}>
          {showBarcode ? 'Validade\n01/2030' : 'Código QR expira em 03/07/2025 23:59'}
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff9f1a',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#E67E00',
  },
  eCardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  barcodeIcon: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
    letterSpacing: -1,
  },
  headerIconContainer: {
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  qrIconContainer: {
    width: 20,
    height: 20,
  },
  qrIcon: {
    width: 20,
    height: 20,
    position: 'relative',
    backgroundColor: 'transparent',
  },
  qrCorner: {
    position: 'absolute',
    width: 6,
    height: 6,
    borderColor: '#000',
    borderWidth: 1.5,
    top: 0,
    left: 0,
  },
  qrCornerTopRight: {
    top: 0,
    right: 0,
    left: 'auto',
  },
  qrCornerBottomLeft: {
    bottom: 0,
    top: 'auto',
    left: 0,
  },
  qrCornerBottomRight: {
    bottom: 0,
    right: 0,
    top: 'auto',
    left: 'auto',
  },
  qrCenter: {
    position: 'absolute',
    width: 4,
    height: 4,
    backgroundColor: '#000',
    top: 8,
    left: 8,
  },
  barcodeImageContainer: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 140,
    height: 140,
  },
  barcodeLines: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 60,
  },
  barcodeLine: {
    height: '100%',
    backgroundColor: '#000',
    marginHorizontal: 0.5,
  },
  menuIcon: {
    fontSize: 20,
    color: '#000',
  },
  mainContent: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  uspLogoImage: {
    width: 120,
    height: 80,
    marginBottom: 1,
  },
  universityName: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
  },
  studentType: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  photoContainer: {
    marginBottom: 20,
  },
  studentPhoto: {
    width: 150,
    height: 180,
  },
  studentInfo: {
    alignItems: 'center',
    marginBottom: 30,
  },
  studentName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
    textAlign: 'center',
  },
  studentId: {
    fontSize: 18,
    color: '#000',
    marginBottom: 12,
  },
  institute: {
    fontSize: 18,
    color: '#000',
    textAlign: 'center',
    marginBottom: 8,
  },
  degree: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  qrContainer: {
    marginBottom: 20,
  },
  qrCodeBox: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  qrCodeImage: {
    width: 140,
    height: 140,
  },
  expirationText: {
    fontSize: 14,
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.1)',
    paddingVertical: 10,
  },
  navButton: {
    width: 20,
    height: 20,
    backgroundColor: '#666',
    borderRadius: 4,
  },
  navButtonCircle: {
    width: 25,
    height: 25,
    backgroundColor: '#666',
    borderRadius: 12.5,
    borderWidth: 2,
    borderColor: '#666',
  },
  navButtonTriangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 15,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#666',
    transform: [{ rotate: '270deg' }],
  },
});

export default App;