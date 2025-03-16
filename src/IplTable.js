import { useEffect, useState } from "react";

export default function IplTable() {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        fetch("https://my-json-server.typicode.com/FreSauce/json-ipl/data")
            .then((response) => response.json())
            .then((data) => {
                // Sorting data based on NRR in ascending order
                const sortedData = data.sort((a, b) => a.NRR - b.NRR);
                setTeams(sortedData);
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h2>IPL 2022 Points Table</h2>
            <table 
                border="1" 
                cellPadding="10" 
                cellSpacing="0" 
                style={{ margin: "auto", borderCollapse: "collapse", width: "80%" }}
            >
                <thead>
                    <tr style={{ backgroundColor: "#f4f4f4" }}>
                        <th>Position</th>
                        <th>Team</th>
                        <th>Matches</th>
                        <th>Won</th>
                        <th>Lost</th>
                        <th>NRR</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                    {teams.map((team, index) => (
                        <tr key={team.id}>
                            <td>{index + 1}</td>
                            <td>{team.Team}</td>
                            <td>{team.Matches}</td>
                            <td>{team.Won}</td>
                            <td>{team.Lost}</td>
                            <td>{team.NRR}</td>
                            <td>{team.Points}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
