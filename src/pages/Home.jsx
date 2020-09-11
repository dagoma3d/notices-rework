import React, { Fragment, useState } from 'react';
import Block from '../components/Block';
import Title from '../components/Title';
import Section from '../components/Section';
import NevaVersion from '../components/NevaVersion';

function Home() {
  const [section, setSection] = useState();
  const onClick = (section) => {
    setSection(section);
  }

  return (
    <Fragment>
      <Block
        img="FirstStep/premier-pas.jpg"
        content={[
          { text: "home.title", classes: "title big tleft", tag: "h1" },
          { text: "home.subtitle", classes: "tleft big-title" },
          { text: "home.description", classes: "tleft light" },
      ]} />
      <Title
        content={[
          { text: "home.printer_choice", classes: "big-title" }
      ]} />
      <Section
        articles={[
          { id: "neva-magis", picto: "neva-magis-svg.svg", alt: "Magis" },
          { id: "neva", picto: "neva-svg.svg", alt: "Neva" },
          { id: "discoeasy200", picto: "discoeasy-svg.svg", alt: "DiscoEasy200" },
          { id: "disco-ultimate", picto: "disco-ultimate.svg", alt: "Disco Ultimate" },
          { href: "/cura-by-dagoma", picto: "a-logo-cura.svg", alt: "Cura by Dagoma" },
      ]} onClick={onClick}/>
      {
        (section === "neva-magis")
        ? <Section
            id="neva-magis"
            title="Magis"
            articles={[
              { href: "/printer/magis", picto: "neva-magis-svg.svg", alt: "Magis", title: "Premiers pas" },
              { href: "/addon/box/neva-magis", picto: "caisson-neva-magis.svg", alt: "Caisson" },
              { href: "/cura-by-dagoma/magis", picto: "a-logo-cura.svg", alt: "Cura by Dagoma" }
          ]} />
        : null
      }
      {
        (section === "neva")
        ? <Section
            id="neva"
            title="Neva"
            articles={[
              { href: "/printer/neva", picto: "neva-svg.svg", alt: "Neva", title: "Premiers pas" },
              { href: "/addon/box/neva-magis", picto: "caisson-neva-magis.svg", alt: "Caisson" },
              { href: "/cura-by-dagoma", picto: "a-logo-cura.svg", alt: "Cura by Dagoma" }
          ]} />
        : null
      }
      {
        (section === "discoeasy200")
        ? <Section
            id="discoeasy200"
            title="DiscoEasy200"
            articles={[
              { href: "/printer/de200", picto: "discoeasy-svg.svg", alt: "DiscoEasy200", title: "Notice de montage" },
              { href: "/addon/screen", picto: "accessoires-52.svg", alt: "Ecran" },
              { href: "/addon/extruder-plus/de200", picto: "accessoires-52.svg", alt: "Extrudeur+" },
              { href: "/addon/expert/de200", picto: "accessoires-52.svg", alt: "Pack expert" },
              { href: "/addon/bicolor/de200", picto: "accessoires-52.svg", alt: "Pack bi-couleur" },
              { href: "/addon/box/disco", picto: "caisson-disco.svg", alt: "Caisson de protection" },
              { href: "/addon/evo/de200", picto: "picto-pack-evo.svg", alt: "Pack évolution Ultimate" },
              { href: "/addon/xl/de200/demontage", picto: "accessoires-52.svg", alt: "Pack XL" },
              { href: "/cura-by-dagoma/de200", picto: "a-logo-cura.svg", alt: "Cura by Dagoma" }
          ]} />
        : null
      }
      {
        (section === "discoeasy200")
        ? <Section
            id="disco-ultimate"
            title="Disco Ultimate"
            articles={[
              { href: "/printer/du", picto: "disco-ultimate.svg", alt: "Disco Ultimate", title: "Notice de montage" },
              { href: "/addon/screen", picto: "accessoires-52.svg", alt: "Ecran" },
              { href: "/addon/bicolor/du", picto: "accessoires-52.svg", alt: "Pack bi-couleur" },
              { href: "/addon/xl/du/demontage", picto: "accessoires-52.svg", alt: "Pack XL" },
              { href: "/addon/box/disco", picto: "accessoires-49.svg", alt: "Caisson de protection" },
              { href: "/cura-by-dagoma/du", picto: "a-logo-cura.svg", alt: "Cura by Dagoma" }
          ]} />
        : null
      }
      <NevaVersion />
    </Fragment>
  );
}

export default Home
