/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { Table } from '@radix-ui/themes';
import './StatsTable.css';
import { useSelector } from 'react-redux';

const StatsTable = () => {
  const [data, setData] = useState({
    mostVisitedEvent: null,
    lessVisitedEvent: null,
    maxCapacityEvent: null,
  });

  const eventos = useSelector(store => store.eventos)
  const [upcomingEventsData, setUpcomingEventsData] = useState([]);
  const [pastEventsData, setPastEventsData] = useState([]);

  useEffect(() => {
    processData();
  }, [eventos]);

  function formatPercentage(a, b) {
    return ((a / b) * 100).toFixed(2) + '%';
  }

  function updateScoreBoardTable(eventsData) {
    const eventsSortedByConcurrency = eventsData.sort(
      (a, b) => (b.assistance / b.capacity) * 100 - (a.assistance / a.capacity) * 100
    );

    const mostVisitedEvent = eventsSortedByConcurrency[0];
    const lessVisitedEvent = eventsSortedByConcurrency[eventsSortedByConcurrency.length - 1];

    const maxCapacityEvent = eventsData.reduce(function (prev, current) {
      return prev.capacity > current.capacity ? prev : current;
    });

    setData({
      mostVisitedEvent,
      lessVisitedEvent,
      maxCapacityEvent,
    });
  }

  function processData() {
    const pastEventsCategoryStats = {};
    const futureEventsCategoryStats = {};

    const pastEvents = eventos.filter((event) => event.assistance);
    const futureEvents = eventos.filter((event) => !event.assistance);

    pastEvents.forEach((event) => {
      const category = event.category;
      if (!pastEventsCategoryStats[category]) {
        pastEventsCategoryStats[category] = {
          category,
          revenues: 0,
          attendanceTotal: 0,
          capacityTotal: 0,
        };
      }
      pastEventsCategoryStats[category].revenues += Number(event.price * event.assistance);
      pastEventsCategoryStats[category].attendanceTotal += Number(event.assistance);
      pastEventsCategoryStats[category].capacityTotal += Number(event.capacity);
    });

    futureEvents.forEach((event) => {
      const category = event.category;
      if (!futureEventsCategoryStats[category]) {
        futureEventsCategoryStats[category] = {
          category,
          revenues: 0,
          attendanceTotal: 0,
          capacityTotal: 0,
        };
      }
      futureEventsCategoryStats[category].revenues += Number(event.price * event.estimate);
      futureEventsCategoryStats[category].attendanceTotal += Number(event.estimate);
      futureEventsCategoryStats[category].capacityTotal += Number(event.capacity);
    });

    updateScoreBoardTable(pastEvents);

    setUpcomingEventsData(Object.values(futureEventsCategoryStats));
    setPastEventsData(Object.values(pastEventsCategoryStats));
  }

  return (
    <div role="statsTableElement" className='stats-background'>
      <div className="tableContainer">
        <div className="tableTitle">EVENTS STATISTICS</div>
        <Table.Root id="statistics" variant="surface">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>
                Event with the highest percentage of attendance
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>
                Event with the lowest percentage of attendance
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Event with larger capacity</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.RowHeaderCell>
                {data.mostVisitedEvent ? data.mostVisitedEvent.name : ''}
              </Table.RowHeaderCell>
              <Table.RowHeaderCell>
                {data.lessVisitedEvent ? data.lessVisitedEvent.name : ''}
              </Table.RowHeaderCell>
              <Table.RowHeaderCell>
                {data.maxCapacityEvent ? data.maxCapacityEvent.name : ''}
              </Table.RowHeaderCell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </div>

      <div className="tableContainer">
        <div className="tableTitle">UPCOMING EVENTS STATISTICS BY CATEGORY</div>
        <Table.Root
          variant="surface"
          id="new_events"
          className="table table-striped stats-color"
        >
          <Table.Header className="stats-color">
            <Table.Row>
              <Table.ColumnHeaderCell className="stats-color">Categories</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="stats-color">Revenues</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="stats-color">Percentage of attendance</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {upcomingEventsData.map((event) => (
              <Table.Row key={event.category}>
                <Table.RowHeaderCell>{event.category}</Table.RowHeaderCell>
                <Table.Cell>{event.revenues}</Table.Cell>
                <Table.Cell>{formatPercentage(event.attendanceTotal, event.capacityTotal)}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </div>

      <div className="tableContainer">
        <div className="tableTitle">PAST EVENTS STATISTICS BY CATEGORY</div>
        <Table.Root
          variant="surface"
          id="old_events"
          className="table table-striped stats-color"
        >
          <Table.Header className="stats-color">
            <Table.Row>
              <Table.ColumnHeaderCell className="stats-color">Categories</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="stats-color">Revenues</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="stats-color">Percentage of attendance</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {pastEventsData.map((event) => (
              <Table.Row key={event.category}>
                <Table.RowHeaderCell>{event.category}</Table.RowHeaderCell>
                <Table.Cell>{event.revenues}</Table.Cell>
                <Table.Cell>{formatPercentage(event.attendanceTotal, event.capacityTotal)}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </div>
    </div>
  );
};

export default StatsTable;

