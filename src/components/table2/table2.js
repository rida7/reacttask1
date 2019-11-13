import React,{Component}  from 'react';
import Style from './style'
import data from '../../data/data.json';

/*
 Row component written as a simple function:
 https://facebook.github.io/react/docs/components-and-props.html#functional-and-class-components

 Any components that do not have state should be written this way,
 see: https://medium.com/@housecor/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc
 */
const Row = ({name, company, email, phone, address}) => (
    <div className="row">
        <div>{name}</div>
        <div>{company}</div>
        <div>{email}</div>
        <div>{phone}</div>
        <div>{address}</div>
    </div>
);

/*
 Table component written as an ES6 class
 */

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:data
        //     [
        //     {name: 403, company: 'Task 403', email: 'High', phone: 'Improvement', address: 100},
        //     {name: 532, company: 'Task 532', email: 'Medium', phone: 'Improvement', address: 30},
        //     {name: 240, company: 'Task 240', email: 'High', phone: 'Story', address: 66},
        // ],

        };

        // http://reactkungfu.com/2015/07/why-and-how-to-bind-methods-in-your-react-component-classes/
        // bind the context for compareBy & sortBy to this component instance
        this.compareBy.bind(this);
        this.sortBy.bind(this);
    }

    compareBy(key) {
        return function (a, b) {
            if (a[key] < b[key]) return -1;
            if (a[key] > b[key]) return 1;
            return 0;
        };
    }

    sortBy(key) {
        let arrayCopy = [...this.state.data];
        arrayCopy.sort(this.compareBy(key));
        this.setState({data: arrayCopy});
    }

    render() {
        const rows = this.state.data.map( (rowData) => <Row {...rowData} />);

        return (
            <>
            <div className="table">
                <div className="header">
                    <div onClick={() => this.sortBy('name')} > <i className="fas fa-caret-down"/>name</div>
                    <div onClick={() => this.sortBy('company')}>company</div>
                    <div onClick={() => this.sortBy('email')}>email</div>
                    <div onClick={() => this.sortBy('phone')}>phone</div>
                    <div onClick={() => this.sortBy('address')}>address</div>
                </div>
                <div className="body">
                    {rows}
                </div>
            </div>
            <Style/>
            </>
        );

    }
}

/*
 * Render the above component into the div#app
 */
export default Table;