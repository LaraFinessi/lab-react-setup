import { useState } from 'react'
import heroImg from './assets/hero.png'
import viteLogo from './assets/vite.svg'

const App: React.FC = () => { 

const nomeStudente: string = 'Mario Rossi'; // Costante per il nome dello studente 
const dataOggi: string = new Date().toLocaleDateString('it-IT');// Costante per la data corrente (formattata in italiano) 
 

  return ( 
    <div style={{ listStylePosition: 'inside', padding: '32px' }}> 
      <h1>Corso React + TypeScript — Modulo 1</h1> 
      <p>Benvenuto, <strong>{nomeStudente}</strong>! Oggi è il {dataOggi}.</p> 
      <h2>I miei obiettivi per questo modulo:</h2> 
      <ul> 
        <li>Comprendere la differenza tra SPA e MPA</li> 
        <li>Padroneggiare la toolchain Vite + TypeScript</li> 
        <li>Scrivere componenti funzionali in React</li> 
      </ul> 
    </div> 
  ); 
}; 

 export default App;