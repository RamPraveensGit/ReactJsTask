import '../App.css';
export default function Attendance() {
    return (
      <div>
        <h2>Attendance List</h2>
        <ul>
          {students.map(student => (
            <li key={student.id}>
              {student.name} <span style=
              {{ color: student.present ? 'green' : 'red' }}>
                {student.present ? 'Present' : 'Absent'}
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  
  const students = [
    { id: 1, name: 'Alice', age: 20, present: true },
    { id: 2, name: 'Bob', age: 22, present: false },
    { id: 3, name: 'Charlie', age: 21, present: true },
    { id: 4, name: 'David', age: 23, present: false },
  ];