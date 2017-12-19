import React from 'react'
import PropTypes from 'prop-types';
import {FormGroup, ControlLabel, FormControl, HelpBlock, Button, ButtonGroup} from 'react-bootstrap';


class AddProductForm extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            "category": "",
            "created": "0001-01-01",
            "name": "",
            "pieces": "1",
            "producer": "",
        };

        this.handleChange = this.handleChange.bind(this)
        this.submit = this.submit.bind(this)
        this.cancel = this.cancel.bind(this)
        this.getValidationState = this.getValidationState.bind(this)

    }

    componentDidMount() {
        this.setState({
                name: this.props.product.name,
                pieces: this.props.product.pieces,
                producer: this.props.product.producer,
                created: this.props.product.created
            }
        )
    }


    handleChange(e) {
        let attribute = e.target.id
        this.setState({
            [attribute]: e.target.value
        })
    }

    submit(e) {
        let newProduct = {
            name: this.state.name,
            category: '',
            pieces: this.state.pieces,
            producer: this.state.producer,
            created: this.state.created
        }
        this.props.callbacks.add(newProduct)
    }

    cancel(e) {
        this.setState({product: this.props.product})
        this.props.callbacks.cancel();
    }

    getValidationState(elem) {
        const length = this.state[elem].length;
        if (length > 5) return 'success';
        else if (length > 3) return 'warning';
        else if (length > 0) return 'error';
        return null;
    }

    getValidationStatePieces() {

        if (this.state.pieces > 0) return 'success';
        return 'error';
    }

    render() {
        return (
            <form>

                <FormGroup
                    controlId="name"
                    validationState={this.getValidationState('name')}
                >
                    <ControlLabel>Name :</ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.name}
                        placeholder={this.state.name}
                        onChange={this.handleChange}
                    />
                    <FormControl.Feedback/>

                </FormGroup>


                <FormGroup
                    controlId="pieces"
                    validationState={this.getValidationStatePieces()}
                >
                    <ControlLabel>Number of pieces :</ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.pieces}
                        placeholder="Enter text"
                        onChange={this.handleChange}
                    />
                    <FormControl.Feedback/>
                </FormGroup>

                <FormGroup
                    controlId="created"
                    validationState={this.getValidationState('created')}
                >
                    <ControlLabel>Creation Date :</ControlLabel>
                    <FormControl
                        type="date"
                        value={this.state.created}
                        placeholder="Enter text"
                        onChange={this.handleChange}
                    />
                    <FormControl.Feedback/>
                </FormGroup>

                <ButtonGroup>
                    <Button onClick={this.cancel}>
                        Cancel
                    </Button>
                    <Button bsStyle="primary" onClick={this.submit}>
                        Add
                    </Button>
                </ButtonGroup>

            </form>
        )
    }

}

AddProductForm.propTypes = {
    product: PropTypes.object,
    callbacks: PropTypes.object.isRequired
}

export default AddProductForm