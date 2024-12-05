import React from 'react';

const BlocPleinEcran = () => 
{
  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100%', height: '75%', borderBottomLeftRadius: '45px', borderBottomRightRadius: '45px', backgroundColor: '#4CAF50', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

      <BlocGlobalGauche />
      <BlocGlobalDroit />
    </div>
  );
};

const BlocGlobalGauche = () =>
{
  return (
    <div style={{
      position: 'fixed', top : 10, left : 10, width: '49%', height: '60%', borderRadius: '40px', backgroundColor: '#00C8F0', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img src="https://via.placeholder.com/150" alt="Exemple d'image" />
    </div>
  )
}

const BlocGlobalDroit = () =>
  {
    return (
      <div style={{
        position: 'fixed', top : 10, right : 10, width: '49%', height: '60%', borderRadius: '40px', backgroundColor: '#00C8F0', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      </div>
    )
  }

const BlocsMeteoJour = () => 
{
  return (
    <div style={{display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      textAlign: 'center', padding: '20px', border: '3px solid #ccc', borderRadius: '30px', backgroundColor: '#00C8F0' }}>
      <p>Voici le premier texte de votre bloc.</p>
      <img src="https://via.placeholder.com/150" alt="Exemple d'image" />
      <p>Voici le second texte du bloc, après l'image.</p>
    </div>

    
  );
};

const App = () => 
{
  return (
    <div style={{
      padding: '20px',
      display: 'flex',
      position: 'fixed',
      flexDirection: 'column',
      zIndex : 0
    }}>
      <BlocPleinEcran />

    <div style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'flex-start',
      zIndex : 1
    }}>
      <BlocsMeteoJour />
      <BlocsMeteoJour />
      <BlocsMeteoJour />
      <BlocsMeteoJour />
      <BlocsMeteoJour />
      <BlocsMeteoJour />
    </div>
    </div>
  );
};

export default App;
