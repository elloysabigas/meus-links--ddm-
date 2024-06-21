import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const DialScreenButton: React.FC = () => {
  const handlePress = async () => {
    const phoneNumber = '18996202380';
    const url = `tel:${phoneNumber}`;

    try {
      await Linking.openURL(url);
    } catch (error) {
      console.error('Erro ao abrir a tela de discagem: ', error);
    }
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Ionicons style={styles.icons} size={20}  name='keypad-outline' />
      <ThemedText style={styles.text}>Telefone</ThemedText>
    </TouchableOpacity>
  );
};

const WhatsAppButton: React.FC = () => {
  const handlePress = async () => {
    const phoneNumber = '5518996202380'; // Inclua o código do país e remova caracteres especiais
    const url = `whatsapp://send?phone=${phoneNumber}`;

    try {
      await Linking.openURL(url);
    } catch (error) {
      console.error('Erro ao abrir o WhatsApp: ', error);
    }
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Ionicons style={styles.icons} size={20} name='logo-whatsapp'  />
      <ThemedText style={styles.text}>WhatsApp</ThemedText>
    </TouchableOpacity>
  );
};

const InstagramButton: React.FC = () => {
  const handlePress = async () => {
    const url = 'https://www.instagram.com/elloysa.sb';

    try {
      await Linking.openURL(url);
    } catch (error) {
      console.error('Erro ao abrir o Instagram: ', error);
    }
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Ionicons style={styles.icons} size={20}  name='logo-instagram'  />
      <ThemedText style={styles.text}>Instagram</ThemedText>
    </TouchableOpacity>
  );
};

const LinkedinButton: React.FC = () => {
  const handlePress = async () => {
    const url = 'https://www.linkedin.com/in/elloysa-bigas-20033b313';

    try {
      await Linking.openURL(url);
    } catch (error) {
      console.error('Erro ao abrir o LinkedIn: ', error);
    }
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Ionicons style={styles.icons} size={20}  name='logo-linkedin' />
      <ThemedText style={styles.text}>LinkedIn</ThemedText>
    </TouchableOpacity>
  );
};

const GithubButton: React.FC = () => {
  const handlePress = async () => {
    const url = 'https://github.com/elloysabigas';

    try {
      await Linking.openURL(url);
    } catch (error) {
      console.error('Erro ao abrir o GitHub: ', error);
    }
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Ionicons style={styles.icons} size={20}  name='logo-github' />
      <ThemedText style={styles.text}>GitHub</ThemedText>
    </TouchableOpacity>
  );
};

const EmailButton: React.FC = () => {
  const handlePress = async () => {
    const email = 'mailto:elloysabigas51@gmail.com';

    try {
      await Linking.openURL(email);
    } catch (error) {
      console.error('Erro ao abrir o e-mail: ', error);
    }
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Ionicons style={styles.icons} size={20}  name='mail' />
      <ThemedText style={styles.text}>E-mail</ThemedText>
    </TouchableOpacity>
  );
};

const TikTokButton: React.FC = () => {
  const handlePress = async () => {
    try {
      await Linking.openURL('https://www.tiktok.com/@elloysa.sb?lang=pt-BR');
    } catch (error) {
      console.error('Erro ao abrir o TikTok: ', error);
    }
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Ionicons style={styles.icons} size={20}  name='logo-tiktok'/>
      <ThemedText style={styles.text}>TikTok</ThemedText>
    </TouchableOpacity>
  );
};

const TwitterButton: React.FC = () => {
  const handlePress = async () => {
    try {
      await Linking.openURL('https://twitter.com/elloya10');
    } catch (error) {
      console.error('Erro ao abrir o Twitter: ', error);
    }
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Ionicons style={styles.icons} size={20} name='logo-twitter'/>
      <ThemedText style={styles.text}>Twitter</ThemedText>
    </TouchableOpacity>
  );
};

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <ThemedView style={styles.headerContainer} >
          <Image source={require('@/assets/images/eu.png')} style={styles.tras} />
          <Image source={require('@/assets/images/elloysa.png')} style={styles.frente} />
        </ThemedView>
        
      }
    >
      <ThemedText style={styles.texto}>Meus links sociais e de contato </ThemedText>
      <ThemedView style={styles.containerButton}>

       <DialScreenButton />
       <WhatsAppButton/>
       <EmailButton />
       <LinkedinButton />
       <InstagramButton />
       <TikTokButton />
       <TwitterButton/>
       <GithubButton />
      
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    position: 'relative',
    height: 300, 
  },
  tras: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover', 
    position: 'absolute',
    zIndex: 0,
  },
  frente: {
    width: 200,
    height: 200,
    borderRadius: 200,
    position: 'absolute',
    zIndex: 1,
    top: 40, 
    left: 105, 
    borderWidth: 5, 
    borderColor: 'white', 
    overflow: 'hidden', 
    
    
  },
  containerButton: {
    marginTop: 40,
    flexDirection: 'column',
    gap: 8,
  },
 button: {
    borderRadius: 15,
    height: 50,
    backgroundColor: '#CAB4A0',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: "space-around",
  },
  text: {
    marginLeft: -220,
    marginTop: 2,
     color:'#040004',
},
texto: {
  fontSize:18,
  marginTop:20,
  fontWeight:'bold',
  marginLeft:10,
},

icons:{
  marginLeft:-80,
},


 
});
