import React from 'react';

const BlocPleinEcran = () => 
{
  return (
    <div style={{
      position: 'fixed', top : 50, left: 0, width: '100%', height: '75%', borderBottomLeftRadius: '45px', borderBottomRightRadius: '45px', backgroundColor: '#304688', color: 'white', display: 'flex', flexDirection : 'column', justifyContent: 'center', alignItems: 'center' }}>

      <BlocGlobalGauche />
      <BlocGlobalDroit />
    </div>
  );
};

const BlocGlobalGauche = () =>
{
  return (
    <div style={{
      position : 'fixed', top : 65, left : 10, width: '49%', height: '60%', borderRadius: '40px', backgroundColor: '#4A67BF', color: 'white', display: 'flex', flexDirection : 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h1> Albi, Tarn, France</h1>
      <img src="https://via.placeholder.com/180" alt="Exemple d'image" />
    </div>
  )
}

const BlocGlobalDroit = () =>
  {
    return (
      <div style={{
        position : 'fixed', top : 65, right : 10, width: '49%', height: '60%', borderRadius: '40px', backgroundColor: '#4A67BF', color: 'white', display: 'flex', flexDirection : 'column', justifyContent: 'center', alignItems: 'center' }}>
      </div>
    )
  }

const BlocsMeteoLundi = () => 
{
  return (
    <div style={{
      display: 'flex',
      flexDirection : 'column',
      justifyContent: 'center',
      alignItems : 'center',
      textAlign: 'center', padding: '20px', border: '3px solid #000000', borderRadius: '30px', backgroundColor: '#4A67BF' }}>
      <p> LUNDI </p>
      <img src="https://via.placeholder.com/120" alt="Exemple d'image" />
      <p>Voici le second texte du bloc, après l'image.</p>
    </div>
  );
};

const BlocsMeteoMardi = () => 
{
    return (
      <div style={{
        display: 'flex',
        flexDirection : 'column',
        justifyContent: 'center',
        alignItems : 'center',
        textAlign: 'center', padding: '20px', border: '3px solid #000000', borderRadius: '30px', backgroundColor: '#4A67BF' }}>
        <p> MARDI </p>
        <img src="https://via.placeholder.com/120" alt="Exemple d'image" />
        <p>Voici le second texte du bloc, après l'image.</p>
      </div>
    );
};

const BlocsMeteoMercredi = () => 
{
    return (
      <div style={{
        display: 'flex',
        flexDirection : 'column',
        justifyContent: 'center',
        alignItems : 'center',
        textAlign: 'center', padding: '20px', border: '3px solid #000000', borderRadius: '30px', backgroundColor: '#4A67BF' }}>
        <p> MERCREDI </p>
        <img src="https://via.placeholder.com/120" alt="Exemple d'image" />
        <p>Voici le second texte du bloc, après l'image.</p>
      </div>
    );
};

const BlocsMeteoJeudi = () => 
{
    return (
      <div style={{
        display: 'flex',
        flexDirection : 'column',
        justifyContent: 'center',
        alignItems : 'center',
        textAlign: 'center', padding: '20px', border: '3px solid #000000', borderRadius: '30px', backgroundColor: '#4A67BF' }}>
        <p> JEUDI </p>
        <img src="https://via.placeholder.com/120" alt="Exemple d'image" />
        <p>Voici le second texte du bloc, après l'image.</p>
      </div>
    );
};

const BlocsMeteoVendredi = () => 
{
    return (
      <div style={{
        display: 'flex',
        flexDirection : 'column',
        justifyContent: 'center',
        alignItems : 'center',
        textAlign: 'center', padding: '20px', border: '3px solid #000000', borderRadius: '30px', backgroundColor: '#4A67BF' }}>
        <p> VENDREDI </p>
        <img src="https://via.placeholder.com/120" alt="Exemple d'image" />
        <p>Voici le second texte du bloc, après l'image.</p>
      </div>
    );
};

const BlocsMeteoSamedi = () => 
{
    return (
      <div style={{
        display: 'flex',
        flexDirection : 'column',
        justifyContent: 'center',
        alignItems : 'center',
        textAlign: 'center', padding: '20px', border: '3px solid #000000', borderRadius: '30px', backgroundColor: '#4A67BF' }}>
        <p> SAMEDI </p>
        <img src="https://via.placeholder.com/120" alt="Exemple d'image" />
        <p>Voici le second texte du bloc, après l'image.</p>
      </div>
    );
};

const BlocsMeteoDimanche = () => 
{
    return (
      <div style={{
        display: 'flex',
        flexDirection : 'column',
        justifyContent: 'center',
        alignItems : 'center',
        textAlign: 'center', padding: '20px', border: '3px solid #000000', borderRadius: '30px', backgroundColor: '#4A67BF' }}>
        <p> DIMANCHE </p>
        <img src="https://via.placeholder.com/120" alt="Exemple d'image" />
        <p>Voici le second texte du bloc, après l'image.</p>
      </div>
    );
};

const App = () => 
{
  return (
    <div style={{
      padding: '80px',
      backgroundColor : '#304687',
      display: 'flex',
      position: 'fixed',
      flexDirection: 'column',
      zIndex : 0
    }}>
      <BlocPleinEcran />

    <div style={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    height: '39vh',
  }}>
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'flex-start',
      gap: '20px',
      zIndex: 1,
    }}>
      <BlocsMeteoLundi />
      <BlocsMeteoMardi />
      <BlocsMeteoMercredi />
      <BlocsMeteoJeudi />
      <BlocsMeteoVendredi />
      <BlocsMeteoSamedi />
      <BlocsMeteoDimanche />
    </div>
  </div>
  </div>
  );
};

export default App;
