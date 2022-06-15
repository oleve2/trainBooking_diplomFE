
//import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

// styles
import './PageTicketSelect.css';

// components
//import Navigation from "../components/Navigation"
import TicketSearchForm from "../components/TicketSearchForm"
import Footer from "../components/Footer";
import HeaderLogoNavi from "../components/HeaderLogoNavi";
import TicketSingle from "../components/TicketSingle";

import NavigationTicket from "../components/NavigationTicket";

// left side pandels
import TickSel_SearchPanel from "../components/TickSel_SearchPanel";
import TickSel_TicketsLatest from "../components/TickSel_TicketsLatest";

// -------------------------------------
export default function PageTicketSelect(props) {
  // store
  const storeTicketsLast = useSelector( (store) => store.ticketReducer.ticketsLast);
  const storeTicketsSearchResult = useSelector( (store) => store.ticketReducer.ticketsSearchResult);

  //
  return (<>
    <div className="TSHeader block">
      <HeaderLogoNavi/>
      
      <div className="tsform">
        <TicketSearchForm  direction='row'/>
      </div>

      <NavigationTicket />
    </div>

    <div className="TSBody block">
      <div className="TSBody__left">
        <TickSel_SearchPanel />

        <TickSel_TicketsLatest ticketsLast={storeTicketsLast}/>
      </div>

      <div className="TSBody__right"  style={{overflowX: 'scroll'}}>
        <div className="TicketList">
          <h3>Билеты</h3>
          <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
            <div>Найдено 20</div>
            <div>Сортировать по: времени</div>
            <div>показывать по: 5 10 20</div>
          </div>
          <ul style={{padding: '0', listStyleType: 'none', display: 'flex', flexDirection: 'column'}}>
            {
            (storeTicketsSearchResult.total_count > 0)
            ? <>
              { storeTicketsSearchResult.items.map( (item) => {
                return <li key={item.departure._id} style={{minWidth: '900px', minHeight: '300px', border: '1px solid black', margin: '0px 20px 20px 0px'}}>
                  <TicketSingle ticket={item} />
                </li>  
              }) }
            </>
            : <></>
            }
          </ul>
        </div>

        <div className="TicketSlider block" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <h4>Крутилка</h4>
          <div style={{display: 'flex'}}>
            <div style={{width: '60px', height: '60px', border: '1px solid black', margin: '5px 10px'}}>left</div>
            <div style={{width: '60px', height: '60px', border: '1px solid black', margin: '5px 10px'}}>1</div>
            <div style={{width: '60px', height: '60px', border: '1px solid black', margin: '5px 10px'}}>2</div>
            <div style={{width: '60px', height: '60px', border: '1px solid black', margin: '5px 10px'}}>3</div>
            <div style={{width: '60px', height: '60px', border: '1px solid black', margin: '5px 10px'}}>4</div>
            <div style={{width: '60px', height: '60px', border: '1px solid black', margin: '5px 10px'}}>right</div>
          </div>
        </div>
      </div>
    </div>

    <div className="TSFooter">
      <Footer/>
    </div>
  </>
  )
}


