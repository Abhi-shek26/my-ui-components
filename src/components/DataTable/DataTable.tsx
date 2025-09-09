import React, { useState, useMemo } from 'react';
import { clsx } from '../../utils/clsx';

export interface Column<T> {
  key: string;
  title: string;
  dataIndex: keyof T;
  sortable?: boolean;
  render?: (value: any, record: T) => React.ReactNode;
}

interface DataTableProps<T extends { id: React.Key }> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  selectable?: boolean;
  onRowSelect?: (selectedRows: T[]) => void;
}

const DataTable = <T extends { id: React.Key }>({
  data,
  columns,
  loading = false,
  selectable = false,
  onRowSelect,
}: DataTableProps<T>) => {
  const [sortConfig, setSortConfig] = useState<{ key: keyof T; direction: 'asc' | 'desc' } | null>(null);
  const [selectedRows, setSelectedRows] = useState<Set<React.Key>>(new Set());

  const sortedData = useMemo(() => {
    let sortableItems = [...data];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [data, sortConfig]);

  const requestSort = (key: keyof T) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const handleSelectRow = (id: React.Key) => {
    const newSelection = new Set(selectedRows);
    if (newSelection.has(id)) {
      newSelection.delete(id);
    } else {
      newSelection.add(id);
    }
    setSelectedRows(newSelection);
    if (onRowSelect) {
      const selectedItems = data.filter(row => newSelection.has(row.id));
      onRowSelect(selectedItems);
    }
  };

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSelection = new Set<React.Key>();
    if (e.target.checked) {
      data.forEach(row => newSelection.add(row.id));
    }
    setSelectedRows(newSelection);
    if (onRowSelect) {
      const selectedItems = data.filter(row => newSelection.has(row.id));
      onRowSelect(selectedItems);
    }
  };

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="bg-gray-50">
          <tr>
            {selectable && (
              <th className="px-4 py-2">
                <div className="flex items-center justify-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4"
                    onChange={handleSelectAll}
                    checked={selectedRows.size === data.length && data.length > 0}
                    aria-label="Select all rows"
                  />
                </div>
              </th>
            )}
            {columns.map((col) => (
              <th key={col.key} className="whitespace-nowrap px-4 py-2  text-gray-900 text-left">
                <div
                  className={clsx(
                    'flex items-center',
                    col.sortable && 'cursor-pointer select-none'
                  )}
                  onClick={() => col.sortable && requestSort(col.dataIndex)}
                >
                  {col.title}
                  {col.sortable && (
                   <span className="ml-2">
                      {sortConfig?.key === col.dataIndex
                        ? (sortConfig.direction === 'asc' ? '▲' : '▼')
                           : '⇅'}
                    </span>
                      )}
                </div>
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {loading ? (
            <tr>
              <td colSpan={columns.length + (selectable ? 1 : 0)} className="text-center py-8 text-gray-500">
                Loading...
              </td>
            </tr>
          ) : sortedData.length === 0 ? (
            <tr>
              <td colSpan={columns.length + (selectable ? 1 : 0)} className="text-center py-8 text-gray-500">
                No data available.
              </td>
            </tr>
          ) : (
            sortedData.map((row) => (
              <tr key={row.id} className={clsx('hover:bg-gray-50', selectedRows.has(row.id) && 'bg-blue-50')} >
                {selectable && (
                  <td className="px-4 py-2">
                  <div className="flex items-center justify-center">
                    <input
                     type="checkbox"
                     className="h-4 w-4"
                     checked={selectedRows.has(row.id)}
                     onChange={() => handleSelectRow(row.id)}
                     aria-label={`Select row ${row.id}`}
                      />
                   </div>
                  </td>

                )}
                {columns.map((col) => (
                  <td key={col.key} className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {row[col.dataIndex] !== undefined && row[col.dataIndex] !== null
                      ? String(row[col.dataIndex])
                      : ''}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;