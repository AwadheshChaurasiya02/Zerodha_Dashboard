
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { usePortfolio } from "./usePortfolio";

const Orders = () => {

  const { orders } = usePortfolio();

        if(orders.length === 0){
          return ( <EmptyOrder/> );
        }else{
          return ( <OrdersDetails orders={orders}/> );
        }
};

export default Orders;

const EmptyOrder = () => {
  return(
      <div className="orders">
      <div className="no-orders">
        <p>You haven't placed any orders today</p>

        <Link to="/" className="btn">
          Get started
        </Link>
      </div>
    </div>
  );
}

const OrdersDetails = ({orders}) => {
    return(
      <div className="order-table">
      <table>
        <thead>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Price</th>
            <th>Mode</th>
          </tr>
        </thead>

        <tbody>{
            orders.map((order,index) => {
              return(
                <tr key={index}>
                  <td>{order.name}</td>
                  <td>{order.qty}</td>
                  <td>{order.price}</td>
                  <td style={{color: order.mode === "BUY" ? "green" : "red"}}>{order.mode}</td>
                </tr>
              )
            })}
        </tbody>
      </table>
      </div>
    );
} 