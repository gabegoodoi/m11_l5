import { Component } from 'react';
import { func } from 'prop-types';
import { Link } from 'react-router-dom';
import { Form, Button, Alert, Container, Modal, ListGroup } from 'react-bootstrap';
import axios from 'axios';

class CustomerList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customers: [],
            selectedCustomerId: null,
            error: null,
        };
        this._isMounted = false; 
    }

    componentDidMount() {
        this._isMounted = true;
        this.fetchCustomers();
    }

    componentWillUnmount() {
        this._isMounted = false; 
    }

    fetchCustomers = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:5000/customers');
            if (this._isMounted) {
                this.setState({ customers: response.data });
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            if (this._isMounted) {
                this.setState({ error: 'Failed to fetch customers. Please try again later.' });
            }
        }
    };

    selectCustomer = (id) => {
        this.setState({ selectedCustomerId: id });
        this.props.onCustomerSelect(id);
    }

    deleteCustomer = (customerId) => {
        axios.delete(`http://127.0.0.1:5000/customers/${customerId}`)
            .then(() => {
                this.fetchCustomers();
            })
            .catch(error => {
                console.error('Error deleting customer:', error);
                this.setState({ error: 'Failed to delete customer. Please try again.' });
            });
    }

    render() {
        const { customers, error } = this.state;
        
        return (
            <Container>
                {error && <Alert variant="danger">{error}</Alert>}
                <h3 className='mt-3 mb-3 text-center'>Customers</h3>
                <ListGroup>
                    {customers.map(customer => (
                        <ListGroup.Item key={customer.id} className="d-flex justify-content-between align-items-center shadows-sm p-3 mb-3 bg-white rounded">
                            <Link to={`/edit-customer/${customer.id}`} className='text-primary'>{customer.name}</Link>
                            <Button variant='danger' size='sm' onClick={() => this.deleteCustomer(customer.id)}>Delete</Button>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Container>
        );
    }
}

CustomerList.propTypes = {
    onCustomerSelect: func,
}

export default CustomerList;