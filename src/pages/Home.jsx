import React, { Fragment, useState } from 'react';
import Block from '../components/Block';
import Title from '../components/Title';
import HomeSection from '../components/HomeSection';
import Pictogram from '../components/Pictogram';

function Home() {
  const [subMenu, setSubMenu] = useState();

  const handleClick = (choice) => {
    fetch(`./content/${choice}.json`).then(response => {
      response.json().then(data => {
        setSubMenu(data);
      });
    });
  }

  return (
    <Fragment>
      <Block
        img="FirstStep/premier-pas.jpg"
        content={[
          { text: 'home.title', classes: 'title big tleft', tag: 'h1' },
          { text: 'home.subtitle', classes: 'tleft big-title' },
          { text: 'home.description', classes: 'ijustify light' },
        ]} />
      <Title
        content={[
          { text: 'home.printer_choice', classes: 'big-title' }
        ]} />
      <HomeSection>
        <Pictogram src='magis' title='Magis' onClick={() => handleClick('magis')} />
        <Pictogram src='neva' title='Neva' onClick={() => handleClick('neva')} />
        <Pictogram src='discoeasy' title='DiscoEasy200' onClick={() => handleClick('de200')} />
        <Pictogram src='disco-ultimate' title='Disco Ultimate' onClick={() => handleClick('du')} />
        <Pictogram href='cura-by-dagoma' src='cura' title='Cura by Dagoma' />
      </HomeSection>
      {
        (subMenu)
          ? <HomeSection id='submenu' title={subMenu.title}>
            {
              subMenu.pictos.map((p, k) => <Pictogram key={k} href={p.href} src={p.src} title={p.title} />)
            }
          </HomeSection>
          : null
      }
    </Fragment>
  );
}

export default Home
