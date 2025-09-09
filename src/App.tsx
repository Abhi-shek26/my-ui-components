import { InputField } from './components/InputField';
import { DataTable } from './components/DataTable';
import { useState, type SetStateAction } from 'react';


const sampleData = [
  { id: 1, name: 'John Doe', age: 32, role: 'Developer' },
  { id: 2, name: 'Jane Smith', age: 28, role: 'Designer' },
  { id: 3, name: 'Sam Wilson', age: 45, role: 'Project Manager' },
];

const columns = [
  { key: 'name', title: 'Name', dataIndex: 'name' as 'name', sortable: true },
  { key: 'age', title: 'Age', dataIndex: 'age' as 'age', sortable: true },
  { key: 'role', title: 'Role', dataIndex: 'role' as 'role' },
];

function App() {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold">Component Demo</h1>
      
      <div className="w-1/3">
        <InputField
          label="Your Name"
          placeholder="Enter your name"
          value={inputValue}
          onChange={(e: { target: { value: SetStateAction<string>; }; }) => setInputValue(e.target.value)}
          helperText="This is a helper text."
        />
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Data Table</h2>
        <DataTable
          columns={columns}
          data={sampleData}
          selectable
          onRowSelect={(selected) => console.log(selected)}
        />
      </div>
    </div>
  );
}

export default App;
