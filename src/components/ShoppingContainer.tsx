
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';


interface MyProps {
    classes: any;
    items: string[];
}
interface MyState {
    rows: string[];
}
const styles = (theme: any) => ({
    table: {
        width: "auto",
        margin: "20px",
        boxShadow: "2px 2px 14px -2px rgba(0,0,0,0.87)",
    },
});

class ShoppingListContainer extends React.Component<MyProps, MyState> {
    // constructor(props: Readonly<MyProps>) {
    //     super(props);
    // }
    static propTypes: { classes: PropTypes.Validator<object>; };

    render() {
        const { classes, items } = this.props;
        return (
            <TableContainer className={classes.table} component={Paper}>
                <Table size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Item(s)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {items.map((row) => (
                            <TableRow key={row}>
                                <TableCell component="th" scope="row">
                                    {row}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
}

ShoppingListContainer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ShoppingListContainer);
