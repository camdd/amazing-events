import { Table } from '@radix-ui/themes'
import './StatsTable.css'

const StatsTable = () => {
  return (
<div>
<div className='tableContainer'>
  <div className='tableTitle'>EVENTS STATISTICS</div>
  <Table.Root variant="surface">
    <Table.Header>
      <Table.Row>
        <Table.ColumnHeaderCell>Event with the highest percentage of attendance</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell>Event with the lowest percentage of attendance</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell>Event with larger capacity</Table.ColumnHeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.RowHeaderCell></Table.RowHeaderCell>
        <Table.Cell></Table.Cell>
        <Table.Cell></Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table.Root>
</div>

<div className='tableContainer'>
  <div className='tableTitle'>UPCOMING EVENTS STATISTICS BY CATEGORY</div>
  <Table.Root variant="surface">
    <Table.Header>
      <Table.Row>
        <Table.ColumnHeaderCell>Categories</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell>Revenues</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell>Percentage of attendance</Table.ColumnHeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.RowHeaderCell></Table.RowHeaderCell>
        <Table.Cell></Table.Cell>
        <Table.Cell></Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table.Root>
</div>

<div className='tableContainer'>
  <div className='tableTitle'>PAST EVENTS STATISTICS BY CATEGORY</div>
  <Table.Root variant="surface">
    <Table.Header>
      <Table.Row>
        <Table.ColumnHeaderCell>Categories</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell>Revenues</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell>Percentage of attendance</Table.ColumnHeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.RowHeaderCell></Table.RowHeaderCell>
        <Table.Cell></Table.Cell>
        <Table.Cell></Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table.Root>
</div>


</div>
  )
}

export default StatsTable

