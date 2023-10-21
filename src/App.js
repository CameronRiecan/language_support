import React, { useState } from 'react';
import { useTranslation, initReactI18next } from 'react-i18next';
import i18n from './i18n';


// Contains the value and text for the options
const languages = [
	{ value: '', text: "Options" },
	{ value: 'en', text: "English" },
	{ value: 'ja', text: "Japanese" },
	{ value: 'es', text: "Spanish" }
]

function App() {

	// hook imported from 'react-i18next'
	const { t } = useTranslation();

	const [lang, setLang] = useState('en');

	// This function put query that helps to
	// change the language
	const handleChange = e => {
    const selectedLang = e.target.value;
    setLang(selectedLang);
    i18n.changeLanguage(selectedLang); 
	}

	return (
		<div className="App">
			<h1>{t('projectIntro')}</h1>
			<section>
        <label>{t('choose')}</label>
        <select value={lang} onChange={handleChange}>
				  {languages.map(item => {
					  return (<option key={item.value}
						  value={item.value}>{item.text}</option>);
				  })}
			  </select>
      </section>
      <p>{t('welcome')}</p>
		</div>
	);
}

export default App;