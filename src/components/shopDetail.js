import React, { Component } from "react";
import { connect } from "react-redux";

function MenuDetailLabel({className, img, title, value}) {
    return (
        <div className={`${className} menu-detail-label`}>
            <div className="menu-detail-label__img">{img}</div>
            <div className="menu-detail-label__title">{title}</div>
            <div className="menu-detail-label__value">{value}</div>
        </div>
    )
}

class MenuDetail extends Component {
    render() {
        const { className, description, orderNumber, orderDate, user, total, creditCard } = this.props;
        const { name, shippingAddress} = user;
        const nameAddress = `${name}    ${shippingAddress}`;

        return (
            <div className={`${className} menu-detail`}>
                <MenuDetailLabel
                    className="menu-detail__order-number"
                    title="Order Number"
                    value={orderNumber}
                />
                <MenuDetailLabel
                    className="menu-detail__order-date"
                    title="Order Date"
                    value={orderDate}
                />
                <MenuDetailLabel
                    className="menu-detail__shipping-address"
                    title="Shipping Address"
                    value={nameAddress}
                />
                <MenuDetailLabel
                    className="menu-detail__total"
                    title="Total"
                    value={total}
                />
                <MenuDetailLabel
                    className="menu-detail__credit-card"
                    title="Credit Card"
                    value={creditCard}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { MenuDetail } = state.user;
    return {
        ...menuDetail
    }
}

MenuDetail = connect(mapStateToProps)(MenuDetail);

export default  MenuDetail;