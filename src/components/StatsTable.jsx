/* eslint-disable react-hooks/exhaustive-deps */
import { Table } from "@radix-ui/themes";
import "./StatsTable.css";
import axios from "axios";
import { useState, useEffect } from "react";

const StatsTable = () => {
  const [data, setData] = useState({
    mostVisitedEvent: null,
    lessVisitedEvent: null,
    maxCapacityEvent: null,
  });

  const [upcomingEventsData, setUpcomingEventsData] = useState([]);
  const [pastEventsData, setPastEventsData] = useState([]);

  useEffect(() => {
    axios
      .get("https://mindhub-xj03.onrender.com/api/amazing")
      .then((response) => {
        const fetchedData = response.data;
        processData(fetchedData);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  function formatPercentage(a, b) {
    return ((a / b) * 100).toFixed(2) + "%";
  }

  function updateScoreBoardTable(eventsData) {
    const eventsSortedByConcurrency = eventsData.sort(
      (a, b) =>
        (b.assistance / b.capacity) * 100 - (a.assistance / a.capacity) * 100
    );

    const mostVisitedEvent = eventsSortedByConcurrency[0];
    const lessVisitedEvent =
      eventsSortedByConcurrency[eventsSortedByConcurrency.length - 1];

    const maxCapacityEvent = eventsData.reduce(function (prev, current) {
      return prev.capacity > current.capacity ? prev : current;
    });

    setData({
      mostVisitedEvent,
      lessVisitedEvent,
      maxCapacityEvent,
    });
  }


  // eslint-disable-next-line no-unused-vars
  function updateTable(eventsData, tableSelector) {
    const table = document.querySelector(tableSelector);
    let rowIndex = 1;
    const eventsDataKeys = Object.keys(eventsData).sort();
    eventsDataKeys.forEach((passedEvent) => {
      const rowData = eventsData[passedEvent];
      const newRow = table.insertRow(rowIndex);
      newRow.insertCell(0).textContent = rowData.category;
      newRow.insertCell(1).textContent = rowData.revenues;
      newRow.insertCell(2).textContent = formatPercentage(
        rowData.attendanceTotal,
        rowData.capacityTotal
      );
      rowIndex++;
    });
  }

  function processData(data) {
    const pastEventsCategoryStats = {};
    const futureEventsCategoryStats = {};

    const pastEvents = data.events.filter((event) => event.assistance);
    const futureEvents = data.events.filter((event) => !event.assistance);

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
      pastEventsCategoryStats[category].revenues += Number(
        event.price * event.assistance
      );
      pastEventsCategoryStats[category].attendanceTotal += Number(
        event.assistance
      );
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
      futureEventsCategoryStats[category].revenues += Number(
        event.price * event.estimate
      );
      futureEventsCategoryStats[category].attendanceTotal += Number(
        event.estimate
      );
      futureEventsCategoryStats[category].capacityTotal += Number(
        event.capacity
      );
    });

    updateScoreBoardTable(pastEvents);

    setUpcomingEventsData(Object.values(futureEventsCategoryStats));
    setPastEventsData(Object.values(pastEventsCategoryStats));
  }

  return (
    <div>
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
              <Table.ColumnHeaderCell>
                Event with larger capacity
              </Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.RowHeaderCell>
                {data.mostVisitedEvent ? data.mostVisitedEvent.name : ""}
              </Table.RowHeaderCell>
              <Table.RowHeaderCell>
                {data.lessVisitedEvent ? data.lessVisitedEvent.name : ""}
              </Table.RowHeaderCell>
              <Table.RowHeaderCell>
                {data.maxCapacityEvent ? data.maxCapacityEvent.name : ""}
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
              <Table.ColumnHeaderCell className="stats-color">
                Categories
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="stats-color">
                Revenues
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="stats-color">
                Percentage of attendance
              </Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {upcomingEventsData.map((event) => (
              <Table.Row key={event.category}>
                <Table.RowHeaderCell>{event.category}</Table.RowHeaderCell>
                <Table.Cell>{event.revenues}</Table.Cell>
                <Table.Cell>
                  {formatPercentage(event.attendanceTotal, event.capacityTotal)}
                </Table.Cell>
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
              <Table.ColumnHeaderCell className="stats-color">
                Categories
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="stats-color">
                Revenues
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="stats-color">
                Percentage of attendance
              </Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {pastEventsData.map((event) => (
              <Table.Row key={event.category}>
                <Table.RowHeaderCell>{event.category}</Table.RowHeaderCell>
                <Table.Cell>{event.revenues}</Table.Cell>
                <Table.Cell>
                  {formatPercentage(event.attendanceTotal, event.capacityTotal)}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </div>
    </div>
  );
};

export default StatsTable;
