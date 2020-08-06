import React from "react";
import {Link} from "react-router-dom";
import {} from "react-icons/fi";
import logoImg from "../../assets/images/logo.svg";
import backIcon from "../../assets/images/icons/back.svg";
import "./styles.css";

const TeacherForm : React.FC = ()=>{
  
  return (
    
    <div id="page-teacher-list" className="container">
    <header className="page-header">
    <div className="top-bar-container">
    <Link to="/">
    <img src={backIcon} alt="voltar"/>
    </Link>
    <img src={logoImg} alt="Proffy"/>
    </div>
    
    <div className="header-content">
    <strong>Estes sao os proffys disponiveis.</strong>
    </div>
    </header>
    </div>
    )
  };
  
  export default TeacherForm;