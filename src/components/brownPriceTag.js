import React, { Component } from 'react';

class BrownPriceTag extends Component {
    render() {
        const { className, title } = this.props;
        return (
            <div className={`${className} brown-price-tag`}>
                ${title}
            </div>
        )
    }
}

export default BrownPriceTag;