import React from 'react'
import PropTypes from 'prop-types';
import AddProductForm from "./AddProductForm.jsx";
import {Button, Panel, Glyphicon, Grid, Row, Col} from 'react-bootstrap';

var config = require('./config.json')

class AddProduct extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {
            open: false,
            icon: 'plus'
        };
    }

    render() {

        let addProductForm = <AddProductForm
            product={this.props.product}
            callbacks={this.props.callbacks}/>

        return (
            <div>
                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} md={10}>

                            {config.products}

                            <p>&nbsp;</p></Col>
                        <Col xs={12} md={2}>
                            <Button onClick={() => this.setState({ open: !this.state.open, icon: (this.state.icon ==='plus')?'minus':'plus' })}>

                                <Glyphicon glyph={this.state.icon} />

                            </Button>
                        </Col>
                    </Row>
                </Grid>

                <Panel collapsible expanded={this.state.open}>

                    {addProductForm}

                </Panel>

            </div>
        );
    }
}
export default AddProduct