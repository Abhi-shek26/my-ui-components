import type { Meta, StoryObj } from '@storybook/react';
import DataTable, { type Column } from './DataTable'; // Import the Column interface

interface StoryData {
  id: number;
  name: string;
  age: number;
  role: string;
}
const columns: Column<StoryData>[] = [
  { key: 'name', title: 'Name', dataIndex: 'name', sortable: true },
  { key: 'age', title: 'Age', dataIndex: 'age', sortable: true },
  { key: 'role', title: 'Role', dataIndex: 'role' },
];

const data: StoryData[] = [
  { id: 1, name: 'John Doe', age: 32, role: 'Developer' },
  { id: 2, name: 'Jane Smith', age: 28, role: 'Designer' },
  { id: 3, name: 'Sam Wilson', age: 45, role: 'Project Manager' },
  { id: 4, name: 'Alice Johnson', age: 38, role: 'QA Engineer' },
];

const meta: Meta<typeof DataTable<StoryData>> = {
  title: 'Components/DataTable',
  component: DataTable,
  tags: ['autodocs'],
  argTypes: {
    loading: { control: 'boolean' },
    selectable: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    columns: columns,
    data: data,
  },
};

export const Selectable: Story = {
  args: {
    ...Default.args,
    selectable: true,
  },
};

export const Loading: Story = {
  args: {
    columns: columns,
    loading: true,
    data: [],
  },
};

export const Empty: Story = {
  args: {
    columns: columns,
    data: [],
  },
};

export const WithSorting: Story = {
    name: "Sortable Columns",
    args: {
        ...Default.args
    }
}
