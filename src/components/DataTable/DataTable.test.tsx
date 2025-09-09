import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DataTable, { type Column } from './DataTable';

interface TestRow {
  id: number;
  name: string;
  age: number;
}

const sampleData: TestRow[] = [
  { id: 1, name: 'John Doe', age: 32 },
  { id: 2, name: 'Jane Smith', age: 28 },
];

const columns: Column<TestRow>[] = [
  { key: 'name', title: 'Name', dataIndex: 'name' },
  { key: 'age', title: 'Age', dataIndex: 'age' },
];

describe('DataTable', () => {
  test('renders column headers correctly', () => {
    render(<DataTable<TestRow> columns={columns} data={[]} />);
    
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Age')).toBeInTheDocument();
  });

  test('renders data rows correctly', () => {
    render(<DataTable<TestRow> columns={columns} data={sampleData} />);
    
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('32')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    expect(screen.getByText('28')).toBeInTheDocument();
  });

  test('shows empty state message when there is no data', () => {
    render(<DataTable<TestRow> columns={columns} data={[]} />);
    
    expect(screen.getByText('No data available.')).toBeInTheDocument();
  });

  test('shows loading state message', () => {
    render(<DataTable<TestRow> columns={columns} data={[]} loading={true} />);
    
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
