import React from 'react'

let rowIndex = 0

class Table extends React.Component {
    renderHead = () => {
        return <tr>{
            this.props.columns.map(column => {
                return <th key={column.key || column.title}>{column.title}</th>
            })
        }</tr>
    }
    renderBody = () => {
        return this.props.data.map(row => {
            return <tr key={row.key || String(rowIndex++)}>{
                this.props.columns.map(column => {
                    if (column.render) {
                        return <td key={String(Math.random())}>{column.render(row)}</td>
                    }
                    return <td key={String(Math.random())}>{row[column.field]}</td>
                })
            }</tr>
        })
    }
    render() {
        return (
            <table>
                <thead>{this.renderHead()}</thead>
                <tbody>{this.renderBody()}</tbody>
            </table>
        );
    }
}

Table.defaultProps = {
    data: [],
    columns: []
}


export default Table
