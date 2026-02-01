import React, { useState } from 'react';

export default function App() {
  const [activeSection, setActiveSection] = useState(-1);
  const [panelOpen, setPanelOpen] = useState(false);

  const sections = [
    { id: 0, label: 'Cliente', title: 'El Segmento "Urbano Saturado"' },
    { id: 1, label: 'Recursos', title: 'Estética de la Intimidad' },
    { id: 2, label: 'Narrativa', title: 'Transmedia Storytelling' },
    { id: 3, label: 'Viabilidad', title: 'Asset Light & Risk Management' },
    { id: 4, label: 'Símbolos', title: 'Semiótica de Proximidad' }
  ];

  return (
    <div style={{ width: '100%', height: '100vh', background: '#050505', color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '48px', marginBottom: '20px' }}>
        Cerca<span style={{ color: '#d4a373' }}>.</span>
      </h1>
      
      <p style={{ fontSize: '24px', marginBottom: '40px', maxWidth: '600px', textAlign: 'center', fontStyle: 'italic' }}>
        "No hace falta ir lejos para sentir que te has ido"
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '20px', marginTop: '40px' }}>
        {sections.map((section, i) => (
          <button
            key={i}
            onClick={() => setActiveSection(i)}
            style={{
              padding: '15px 20px',
              border: activeSection === i ? '1px solid rgba(255,255,255,0.4)' : '1px solid rgba(255,255,255,0.15)',
              background: activeSection === i ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.03)',
              color: activeSection === i ? '#fff' : 'rgba(255,255,255,0.5)',
              borderRadius: '12px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: activeSection === i ? '600' : '400',
              transition: 'all 0.3s',
              backdropFilter: 'blur(16px)'
            }}
          >
            {section.label}
          </button>
        ))}
      </div>

      {activeSection >= 0 && (
        <div style={{ marginTop: '40px', padding: '30px', background: 'rgba(255,255,255,0.03)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', maxWidth: '600px' }}>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '28px', marginBottom: '20px' }}>{sections[activeSection].title}</h2>
          <p style={{ lineHeight: '1.6', color: 'rgba(255,255,255,0.8)' }}>
            Contenido de {sections[activeSection].label}
          </p>
        </div>
      )}
    </div>
  );
}
