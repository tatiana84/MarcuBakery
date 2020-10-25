import React, { Component } from "react";

//import NavigationContainer from "../navigation/navigation-container";
//import FooterContainer from "../navigation/footer-container";
import M1 from "../../../static/assets/images/M1.jpg";
//import M2 from "../../../static/assets/images/M2.jpg";
import M3 from "../../../static/assets/images/M3.jpg";
//import M4 from "../../../static/assets/images/M4.jpg";
import Spice from "../../../static/assets/images/spice.jpg";

export default class AboutUs extends Component {
    render() {
        return (
            <div className="wrapper-page-content">
                <div className="page-content">
                    <div className="background-image" 
                        style={{
                            background: {Spice},
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                        }}>
                    </div>
                    <div className="image-first">
                        <img className="imgFirst" src={M1}/>
                    </div>
                    <div className="first-text">
                        Pe traseul național R6, care duce spre cea mai spectaculoasă priveliște
                        din țara noastră – de la Orheiul Vechi, am amenajat o cafenea și o brutărie
                        „to go” – MarcuBakery. <br/>MarcuBakery este un vis muncit 10 ani peste hotare. 
                        Cinci ani in urma acest vis se rezuma la o Covrigarie. Era un produs căutat și, 
                        timp de cinci ani, am diversificat produsele. Deoarece nu reușeam să facem față 
                        solicitărilor și nu dispuneam de spațiu, am decis și am reușit să reamenajăm totul. 
                        Pe lângă plăcinte, am început să coacem pâinică bună.                  
                    </div>
                    <div className="second-text">         
                        Principalul produs tradițional al neamului – plăcinta, este copt zilnic cei câțiva
                        brutari angajați. Dacă gustați, cu siguranță o să vă mai întoarceți pentru plăcinta 
                        la tigaie și plăcinta Domnească, făcute cu multă iscusință. Tot felul de tarte delicioase, 
                        tradiționale sau preferatele clienților din bucătăria europeană îți fac zilnic cu ochiul din 
                        vitrine. Se coc de cu zori sau noaptea așa ca a doua zi să fie toate proaspete.
                    </div>
                    <div className="third-text">
                        De ce Marcu? MARCU este un străbunel al familiei, căruia îi plăcea să coacă. Marcu mai este 
                        și unul din cei 12 apostoli care le ducea pâine la nevoiași. Iată și explicația pentru care 
                        brutăria și cafeneaua au luat acest nume, fiind în continuă dezvoltare, diversificând mereu 
                        gama de produse, dar păstrând tradiția și rădăcinile integre. 
                    </div>
                    <div className="image-second">
                        <img className="imgSecond" src={M3}/>
                    </div>
                    <div className="four-text">
                        Am ales să facem pâine deoarece este un produs cu suflet, care hrănește suflete și care este practic
                        o necesitate zilnică. Coacem preparate cu specific tradițional, însă conform ultimelor tendințe: 
                        avem pâine și cu făină integrală, plăcinte de foarte multe tipuri, conform sezonului. <br/>
                        <p>"Noi gatim cu dragoste pentru a fi savurate produsele noastre cu placere!"</p>
                    </div>
                </div>
                
            </div>
        );
    }
} 

/*<div className="image-second">
    <img className="imgSecond" src={M2}/>
</div> 
<div className="image-four">
    <img className="imgFour" src={M4}/>
</div>*/