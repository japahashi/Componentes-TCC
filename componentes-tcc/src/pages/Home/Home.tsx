import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";

import menuIcon from "../../assets/icons/menu.png";
import homeIcon from "../../assets/icons/home.png";
import bemEstarIcon from "../../assets/icons/bem-estar.png";
import acolhimentoIcon from "../../assets/icons/acolhimento.png";
import eventosIcon from "../../assets/icons/eventos.png";
import comunicadosIcon from "../../assets/icons/comunicados.png";
import gerenciamentoIcon from "../../assets/icons/gerenciamento.png";

import "./Home.css";

function Home() {
  const menuItems = [
    {
      id: "inicio",
      label: "Início",
      icon: <img src={homeIcon} alt="Início" />,
    },
    {
      id: "bem-estar",
      label: "Bem-estar",
      icon: <img src={bemEstarIcon} alt="Bem-estar" />,
    },
    {
      id: "acolhimento",
      label: "Acolhimento",
      icon: <img src={acolhimentoIcon} alt="Acolhimento" />,
    },
    {
      id: "eventos",
      label: "Eventos",
      icon: <img src={eventosIcon} alt="Eventos" />,
    },
    {
      id: "comunicacao",
      label: "Comunicação",
      icon: <img src={comunicadosIcon} alt="Comunicação" />,
    },
    {
      id: "academico",
      label: "Acadêmico",
      icon: <img src={gerenciamentoIcon} alt="Acadêmico" />,
    },
  ];

  return (
    <div className="home">

      <Sidebar
        items={menuItems}
        activeId="inicio"
        menuIcon={<img src={menuIcon} alt="Menu" />}
        onSelect={(id) => {
          console.log("Item selecionado:", id);
        }}
        onMenuClick={() => {
          console.log("Menu clicado");
        }}
      />

      <div className="background">
        <div className="truebackground">
          
        </div>
      </div>

    </div>
  );
}

export default Home;