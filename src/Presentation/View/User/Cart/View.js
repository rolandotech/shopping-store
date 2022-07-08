import React, { useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { Button, Input } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ViewModel from './ViewModel';
import './View.css';

const View = () => {
    const {getCartList, cartList, total, quantTotal, deleteCart} = ViewModel();

    useEffect(() => {
        getCartList();
    }, []);

    return(
        <div className="container">
            <div className="col-lg-12 py-5">
                <h1>Shopping Cart</h1>
            </div>
            <div className="col-lg-12 row">
                <div className="col-lg-8">
                    <DataTable
                        columns={[
                            {
                                name: 'Product',
                                selector: row => row.product,
                                width: '50%'
                            },
                            {
                                name: 'Price',
                                width: '20%',
                                cell: (row) => row.price > 0 ? '$'+row.price : 0
                            },
                            {
                                name: 'Quantity',
                                width: '10%',
                                center: true,
                                cell: (row) => <Input id="qtyInput" type="number" defaultValue={row.quantity} inputProps={{ min: 1 }} onChange={(e) => quantTotal(e, row.id)} />,
                            },
                            {
                                name: 'Total',
                                selector: row => '$' + row.price * row.quantity,
                                width: '10%',
                                center: true
                            },
                            {
                                cell: (row, index) => <Button variant="text" color="error" onClick={() => deleteCart(index)} ><DeleteForeverIcon /></Button>,
                                width: '10%',
                                center: true
                            },
                        ]}
                        data={cartList}
                    />
                </div>
                <div className="col-lg-4">
                    <div className="head">
                        <h3>Order Summary</h3>
                    </div>
                    <div className="body row">
                        <div className="cart-list col-lg-12">
                            <DataTable
                                columns={[
                                    {
                                        name: 'Product',
                                        selector: row => row.product,
                                        width: '60%'
                                    },
                                    {
                                        name: 'Quantity',
                                        selector: row => row.quantity,
                                        width: '20%',
                                        center: true
                                    },
                                    {
                                        name: 'Price',
                                        selector: row => '$' + row.price * row.quantity,
                                        width: '20%',
                                        center: true
                                    },
                                ]}
                                data={cartList}
                            />
                        </div>
                        <div className="border-top border-3"></div>
                        <div className="cart-total col-lg-12 py-4">
                            <div className="d-flex justify-content-between align-item-center px-3">
                                <label>Total:</label>
                                <label>${total > 0 ? total: 0}</label>
                            </div>
                        </div>
                    </div>
                    <div className="foot">
                        { total > 0 ? <Button className="checkout py-3" variant="contained" color="success">CHECKOUT</Button> : <Button className="checkout py-3" variant="contained" color="success" disabled>CHECKOUT</Button>}
                    </div>
                </div>
            </div>
        </div>
    );

}

export default View;